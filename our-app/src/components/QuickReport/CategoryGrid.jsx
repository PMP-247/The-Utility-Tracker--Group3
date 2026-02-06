export default function CategoryGrid() {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">Category</label>
      <select className="w-full border rounded p-2">
        <option value="">Select...</option>
        <option value="water">💧 Water</option>
        <option value="power">⚡ Power</option>
        <option value="road">🛣️ Road</option>
        <option value="traffic">🚦 Traffic Light</option>
      </select>
    </div>
  );
}
