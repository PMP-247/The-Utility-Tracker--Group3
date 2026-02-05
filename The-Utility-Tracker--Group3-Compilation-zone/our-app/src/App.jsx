import { useState } from 'react';
import AuthForm from './components/authForm';
import QuickReportHub from "./components/QuickReport/QuickReportHub";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-6 flex justify-between items-center shadow-md shrink-0">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">⚡ Utility Tracker</h1>
        {isLoggedIn && (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Logout
          </button>
        )}
      </header>
  
      {/* Main content */}
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col justify-center items-center p-6">
        {isLoggedIn ? (
          <div className="w-full h-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <QuickReportHub />
          </div>
        ) : (
          <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <AuthForm onAuthSuccess={handleLoginSuccess} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
