import { useState, useEffect } from "react";
import CategoryGrid from "./CategoryGrid";
import DescriptionInput from "./DescriptionInput";
import SubmitButton from "./SubmitButton";
import SuccessToast from "./SuccessToast";
import { getMyReports } from "../../services/noteService"; 

export default function QuickReportHub() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("idle");
  const [reports, setReports] = useState([]); 
  const [loading, setLoading] = useState(true);

  // Helper function to load data (we keep it here so handleSubmit can also call it)
  const loadHistory = async () => {
    try {
      const data = await getMyReports();
      setReports(data || []);
    } catch (error) {
      console.error("Error loading history:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  // PASTE THIS HERE: The handleSubmit function
  const handleSubmit = async () => {
    setStatus("loading");

    try {
      // In a later step, we will add the createReport call here
      setTimeout(async () => {
        setStatus("success");
        setCategory("");
        setDescription("");
        await loadHistory(); // This refreshes your historical list
      }, 1000);
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("idle");
    }
  };

  return (
    <div className="flex justify-center items-start w-full h-full">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 min-h-[70vh]">

        <h2 className="text-3xl font-bold text-blue-600">Report a Community Issue</h2>

        <CategoryGrid selected={category} onSelect={setCategory} />
        <DescriptionInput value={description} onChange={setDescription} />
        
        {/* SubmitButton now has access to handleSubmit */}
        <SubmitButton status={status} onSubmit={handleSubmit} />

        {status === "success" && <SuccessToast />}

        <div className="mt-6 pt-6 border-t border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Historical Reports</h3>
          
          {loading ? (
            <p className="text-gray-400 italic">Loading history...</p>
          ) : (
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {reports.length > 0 ? (
                reports.map((report) => (
                  <div key={report.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="text-xs font-semibold text-blue-500 uppercase">
                      {new Date(report.created_at).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700">{report.content || report.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-sm">No historical reports found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}