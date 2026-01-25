export default function CategoryGrid({ selected, onSelect }) {
  const categories = ["Water", "Power", "Road"];

  return (
    <div className="grid grid-cols-3 gap-3 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`p-3 rounded border ${
            selected === cat
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
