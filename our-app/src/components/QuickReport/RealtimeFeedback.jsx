export default function RealtimeFeedback({ reports }) {
  return (
    <div className="mt-8 bg-white border border-gray-100 p-6 rounded-xl shadow-md max-h-80 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">Community Reports</h3>
        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
      </div>
      <ul className="space-y-4">
        {reports.map((r, i) => (
          <li key={i} className="border-b border-gray-50 pb-4 last:border-0">
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-blue-600 text-sm uppercase tracking-wide">
                {r.category}
              </span>
              <span className="text-[10px] text-gray-400 font-mono italic">
                {r.time}
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {r.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}