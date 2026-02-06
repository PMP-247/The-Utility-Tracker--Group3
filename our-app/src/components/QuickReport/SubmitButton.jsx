export default function SubmitButton({ status }) {
  const text =
    status === "idle" ? "Submit" :
    status === "pending" ? "Submitting..." :
    "Submitted ✅";

  return (
    <button
      type="submit"
      disabled={status === "pending"}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {text}
    </button>
  );
}
