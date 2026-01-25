import { useState } from "react";
import CategoryGrid from "./CategoryGrid";
import DescriptionInput from "./DescriptionInput";
import SubmitButton from "./SubmitButton";
import SuccessToast from "./SuccessToast";

export default function QuickReportHub() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = () => {
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setCategory("");
      setDescription("");
    }, 1000);
  };

  return (
    // Outer container: centers the card horizontally & fills parent height
    <div className="flex justify-center items-start w-full h-full">

      {/* ← Paste your new card div here */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 min-h-[70vh]">

        <h2 className="text-3xl font-bold text-blue-600">Report a Community Issue</h2>

        {/* Form components */}
        <CategoryGrid selected={category} onSelect={setCategory} />
        <DescriptionInput value={description} onChange={setDescription} />
        <SubmitButton status={status} onSubmit={handleSubmit} />

        {/* Success message */}
        {status === "success" && <SuccessToast />}

      </div>
      {/* End of card div */}

    </div>
  );
}
