import { useState } from "react";
import { supabase } from "../../supabaseClient"; 
import CategoryGrid from "./CategoryGrid";
import DescriptionInput from "./DescriptionInput";
import SubmitButton from "./SubmitButton";
import SuccessToast from "./SuccessToast";

export default function QuickReportHub() {
  const [status, setStatus] = useState("idle");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => { // Added async
    e.preventDefault();
    setStatus("pending");

    const formData = new FormData(e.target);
    const category = formData.get("category");
    const description = formData.get("description");

    if (!category || !description) {
      alert("Please fill in all fields.");
      setStatus("idle");
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert("Please log in to submit a report.");
      setStatus("idle");
      return;
    }

   
    const { error } = await supabase
      .from('complaints')
      .insert([
        { 
          category: category, 
          description: description, 
          status: 'Pending',
          user_id: user.id 
        }
      ]);

    if (error) {
      console.error("Submission Error:", error.message);
      alert(`Error: ${error.message}`);
      setStatus("idle");
    } else {
      setStatus("success");
      setSuccess(true);
      e.target.reset();
      setTimeout(() => {
        setSuccess(false);
        setStatus("idle");
      }, 3000);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 mt-8 border border-gray-100">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Quick Report Hub</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <CategoryGrid /> 
        <DescriptionInput />
        <SubmitButton status={status} />
      </form>
      {success && <SuccessToast />}
    </div>
  );
}