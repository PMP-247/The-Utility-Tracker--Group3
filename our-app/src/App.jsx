import { useState } from 'react';
import AuthForm from './components/authForm';
import QuickReportHub from "./components/QuickReport/QuickReportHub";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => setIsLoggedIn(true);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white py-4 px-6 flex justify-between items-center shrink-0 shadow-md">
        <h1 className="text-xl md:text-2xl font-bold">Utility Tracker</h1>
        {isLoggedIn && (
          <button 
            onClick={() => setIsLoggedIn(false)} 
            className="bg-white text-blue-600 font-medium px-4 py-1 rounded hover:bg-gray-100 transition-colors"
          >
            Logout
          </button>
        )}
      </header>
  
      {/* Main content */}
      <main className="flex-1 bg-gray-50 flex flex-col items-center p-6 overflow-y-auto">
        {isLoggedIn ? (
          <div className="w-full max-w-4xl flex flex-col gap-8">
            <QuickReportHub />
          </div>
        ) : (
          /* Centers AuthForm vertically when not logged in */
          <div className="flex-1 flex items-center justify-center w-full">
             <AuthForm onAuthSuccess={handleLoginSuccess} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;