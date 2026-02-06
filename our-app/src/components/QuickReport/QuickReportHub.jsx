import { useState } from "react";
import CategoryGrid from "./CategoryGrid";
import DescriptionInput from "./DescriptionInput";
import SubmitButton from "./SubmitButton";
import SuccessToast from "./SuccessToast";

export default function QuickReportHub() {
  const [status, setStatus] = useState("idle");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    

    const category = formData.get("category"); 

    if (!category) return;

    setStatus("pending");
    setTimeout(() => {
      setStatus("success");
      setSuccess(true);
      e.target.reset();
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 mt-8 border border-gray-100">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Quick Report Hub</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* DROPDOWN COMPONENT */}
        <CategoryGrid /> 
        
        {/* DESCRIPTION COMPONENT */}
        <DescriptionInput />
        
        {/* SUBMIT BUTTON */}
        <SubmitButton status={status} />
      </form>
      
      {success && <SuccessToast />}
    </div>
  );
}