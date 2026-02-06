// Complaints.jsx
export default function Complaints() {
  const complaints = [
    { id: 1, description: "Water outage", status: "Pending" },
    { id: 2, description: "Electricity issue", status: "Resolved" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Complaints</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(c => (
            <tr key={c.id}>
              <td className="border px-4 py-2">{c.id}</td>
              <td className="border px-4 py-2">{c.description}</td>
              <td className="border px-4 py-2">{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
