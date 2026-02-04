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
      <header className="w-full bg-blue-600 text-white py-4 px-6 flex justify-between items-center shrink-0">
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
  
      {/* Main content fills remaining screen and centers child */}
      <main className="flex-1 bg-gray-50 flex flex-col justify-center items-center p-6">
        {isLoggedIn ? (
          <div className="w-full h-full">
            <QuickReportHub />
          </div>
        ) : (
          /* This container now sits in the dead center of the flex-1 main area */
          <AuthForm onAuthSuccess={handleLoginSuccess} />
        )}
      </main>
    </div>
  );
}

export default App;
