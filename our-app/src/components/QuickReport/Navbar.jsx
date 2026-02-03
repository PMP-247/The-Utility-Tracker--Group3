import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored auth/session data
    localStorage.removeItem("authToken"); 
    // Redirect to login page
    navigate("/login");
  };

  const goToDashboard = () => {
    navigate("/complaints"); // this should match the route you set in App.jsx
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center sticky top-0">
      <h1 className="text-xl font-bold mr-6">Utility Tracker</h1>

      <div className="space-x-6 flex items-center">
        <a href="#hero" className="hover:underline">Home</a>
        <a href="#report" className="hover:underline">Report Issues</a>
        <a href="#contacts" className="hover:underline">Contacts</a>
        
        {/* Dashboard button */}
        <button 
          onClick={goToDashboard} 
          className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
        >
          View Complaints
        </button>

        {/* Logout button */}
        <button 
          onClick={handleLogout} 
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

