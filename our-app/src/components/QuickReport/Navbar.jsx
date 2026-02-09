import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <h1
        onClick={() => navigate("/report")}
        className="text-xl font-bold cursor-pointer"
      >
        Utility Tracker
      </h1>

      <div className="space-x-6 flex items-center">
        <button
          onClick={() => navigate("/contacts")}
          className="hover:text-blue-200 transition-colors"
        >
          Contacts
        </button>

        <button
          onClick={() => navigate("/complaints")}
          className="hover:text-blue-200 transition-colors"
        >
          My Complaints
        </button>

        <button
          onClick={() => navigate("/login")}
          className="bg-white text-blue-600 px-4 py-1.5 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-sm"
        >
          Login
        </button>
      </div>
    </nav>
  );
}
