export default function DescriptionInput() {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">Description</label>
      <textarea
        className="w-full border rounded p-2"
        placeholder="Describe the issue... #urgent #location"
      />
    </div>
  );
}
