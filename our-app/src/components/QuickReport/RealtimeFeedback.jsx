export default function RealtimeFeed({ reports }) {
  return (
    <div className="mt-8 bg-gray-50 p-4 rounded shadow max-h-64 overflow-y-scroll">
      <h3 className="text-lg font-bold mb-2">Community Reports</h3>
      <ul>
        {reports.map((r, i) => (
          <li key={i} className="border-b py-2">
            <span className="font-semibold">{r.category}:</span> {r.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
