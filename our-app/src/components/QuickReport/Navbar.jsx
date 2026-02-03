export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center sticky top-0">
      <h1 className="text-xl font-bold">Utility Tracker</h1>
      <div className="space-x-6">
        <a href="#hero" className="hover:underline">Home</a>
        <a href="#report" className="hover:underline">Submit Complaint</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <button className="bg-red-500 px-3 py-1 rounded">Logout</button>
      </div>
    </nav>
  );
}
