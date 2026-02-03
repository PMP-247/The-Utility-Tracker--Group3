import { useState } from "react";
import CategoryGrid from "./CategoryGrid";
import EvidenceUploader from "./EvidenceUploader";
import DescriptionInput from "./DescriptionInput";
import SubmitButton from "./SubmitButton";
import SuccessToast from "./SuccessToast";

export default function QuickReportHub() {
  const [status, setStatus] = useState("idle");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("pending");
    // simulate API call
    setTimeout(() => {
      setStatus("success");
      setSuccess(true);
    }, 1500);
  };

  return (
    <div id="report" className="max-w-lg mx-auto bg-white shadow-md rounded p-6 mt-8">
      <h3 className="text-xl font-bold mb-4">Quick Report Hub</h3>
      <form onSubmit={handleSubmit}>
        <CategoryGrid />
        <EvidenceUploader />
        <DescriptionInput />
        <SubmitButton status={status} />
      </form>
      {success && <SuccessToast />}
    </div>
  );
}
