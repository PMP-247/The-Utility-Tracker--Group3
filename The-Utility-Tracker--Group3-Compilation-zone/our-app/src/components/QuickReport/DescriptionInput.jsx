export default function DescriptionInput({ value, onChange }) {
  return (
    <textarea
      className="w-full p-3 border rounded mb-4"
      placeholder="Describe the issue..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
