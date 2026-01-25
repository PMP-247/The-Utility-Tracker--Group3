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
      <header className="w-full bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">Utility Tracker</h1>
        {isLoggedIn && (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-white text-blue-600 font-medium px-4 py-1 rounded hover:bg-gray-100"
          >
            Logout
          </button>
        )}
      </header>

      {/* Main content fills remaining screen */}
      <main className="flex-1 bg-gray-50 overflow-auto p-6">
        {isLoggedIn ? (
          <QuickReportHub />
        ) : (
          <div className="flex justify-center items-center h-full">
            <AuthForm onAuthSuccess={handleLoginSuccess} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
