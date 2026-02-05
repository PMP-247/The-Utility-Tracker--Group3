import { useState } from "react";
import CategoryGrid from "./CategoryGrid";
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
    <div className="flex justify-center items-start w-full h-full">
      <div id="report" className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 mt-8">
        <h2 className="text-3xl font-bold text-blue-600">Report a Community Issue</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <CategoryGrid />
          {/* <EvidenceUploader /> */}
          <DescriptionInput />
          <SubmitButton status={status} />
        </form>
        {success && <SuccessToast />}
      </div>
    </div>
  );
}