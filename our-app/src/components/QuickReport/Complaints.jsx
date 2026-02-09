import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import CategoryGrid from "./CategoryGrid";
import SubmitButton from "./SubmitButton";
import SuccessToast from "./SuccessToast";
import RealtimeFeedback from './RealtimeFeedback';

export default function Complaints() {
  const [status, setStatus] = useState("idle");
  const [success, setSuccess] = useState(false);
  const [reports, setReports] = useState([]);

  // Load community feed from Supabase
  useEffect(() => {
    const fetchReports = async () => {
      const { data, error } = await supabase
        .from('complaints')
        .select('*')
        .order('id', { ascending: false });

      if (!error) setReports(data);
    };
    fetchReports();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("pending");

    const formData = new FormData(e.target);
    
    //  RLS Policy: (auth.uid() = user_id)
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      console.error("Authentication required");
      setStatus("idle");
      alert("Please log in to submit a report.");
      return;
    }

    const newComplaint = {
      category: formData.get("category"), 
      description: formData.get("description"), 
      status: 'Pending',
      user_id: user.id 
    };

    const { data, error } = await supabase
      .from('complaints')
      .insert([newComplaint])
      .select();

    if (error) {
      console.error("Submission Error:", error.message);
      setStatus("idle");
      alert(`Error: ${error.message}`);
    } else {
      setStatus("success");
      setSuccess(true);
      
 
      if (data) setReports((prev) => [data[0], ...prev]);

      setTimeout(() => {
        setSuccess(false);
        setStatus("idle");
        e.target.reset();
      }, 3000);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-10">
      {/* 1. My Complaints Table */}
      <section>
        <h2 className="text-2xl font-bold mb-4">My Complaints</h2>
        <div className="bg-white shadow rounded-lg border border-gray-200 overflow-hidden">
          <table className="table-auto w-full text-sm text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 font-semibold">ID</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Description</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {reports.length > 0 ? (
                reports.slice(0, 5).map(r => (
                  <tr key={r.id} className="border-b last:border-0">
                    <td className="px-4 py-3">#{r.id}</td>
                    <td className="px-4 py-3 capitalize">{r.category}</td>
                    <td className="px-4 py-3 text-gray-600 truncate max-w-xs">{r.description}</td>
                    <td className="px-4 py-3">
                      <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-4 py-8 text-center text-gray-400">No reports found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

  
      <section className="bg-white p-8 rounded-xl shadow-lg border">
        <h3 className="text-xl font-bold mb-6 text-blue-900">File a New Report</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <CategoryGrid />
          <div>
            <label className="block mb-2 font-medium text-gray-700">Description</label>
            <textarea 
              name="description" 
              className="w-full border border-gray-300 rounded-lg p-3 h-28 focus:ring-2 focus:ring-blue-500 outline-none transition" 
              placeholder="Provide more details about the issue..."
              required
            ></textarea>
          </div>
          <SubmitButton status={status} />
        </form>
        {success && <SuccessToast />}
      </section>

   
      <RealtimeFeedback reports={reports} />
    </div>
  );
}