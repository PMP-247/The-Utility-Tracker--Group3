export default function SubmitButton({ status, onSubmit }) {
  return (
    <button
      onClick={onSubmit}
      disabled={status === "loading"}
      className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
    >
      {status === "loading" ? "Submitting..." : "Submit"}
    </button>
  );
}
