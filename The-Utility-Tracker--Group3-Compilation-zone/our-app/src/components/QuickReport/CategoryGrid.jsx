import { FaTint, FaBolt, FaRoad } from "react-icons/fa"; // water, power, road icons

export default function CategoryGrid({ selected, onSelect }) {
  const categories = [
    { name: "Water", icon: <FaTint className="text-blue-400" /> },
    { name: "Power", icon: <FaBolt className="text-yellow-400" /> },
    { name: "Road", icon: <FaRoad className="text-gray-600" /> },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onSelect(cat.name)}
          className={`flex flex-col items-center justify-center p-4 rounded-lg border shadow-md transition transform hover:scale-105 ${
            selected === cat.name
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-blue-600 border-gray-300"
          }`}
        >
          <span className="text-3xl mb-2">{cat.icon}</span>
          <span className="font-semibold">{cat.name}</span>
        </button>
      ))}
    </div>
  );
}

