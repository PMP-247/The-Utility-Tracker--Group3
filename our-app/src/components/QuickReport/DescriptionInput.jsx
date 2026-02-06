export default function DescriptionInput() {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium text-gray-700">
        Issue Description
      </label>
      <textarea
        name="description"
        required
        className="w-full border rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
        placeholder="Please provide details about the utility issue..."
      ></textarea>
    </div>
  );
}