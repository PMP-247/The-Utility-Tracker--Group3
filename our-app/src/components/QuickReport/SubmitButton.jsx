export default function SubmitButton({ status }) {
  const isPending = status === "pending";
  
  const text =
    status === "idle" ? "Submit Report" :
    isPending ? "Submitting..." :
    "Report Submitted ✅";

  return (
    <button
      type="submit" 
      disabled={isPending}
      className={`w-full py-3 rounded-lg font-bold text-white transition-all ${
        isPending ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700 active:scale-95"
      }`}
    >
      {text}
    </button>
  );
}