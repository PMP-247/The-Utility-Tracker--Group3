export default function CategoryGrid() {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium text-gray-700">Category</label>
      <select 
        name="category" 
        className="w-full border rounded-lg p-3 bg-white focus:ring-2 focus:ring-blue-500 outline-none" 
        required
      >
        <option value="">Select a category...</option>
        <option value="water">💧 Water</option>
        <option value="power">⚡ Power</option>
        <option value="road">🛣️ Road</option>
        <option value="traffic">🚦 Traffic Light</option>
      </select>
    </div>
  );
}