import { useState } from 'react';
import AuthForm from './components/authForm';
import Navbar from './components/Navbar'; // Double-check this filename is Navbar.jsx
import HeroSection from './components/HeroSection';
import QuickReportHub from "./components/QuickReportHub"; // Removed the extra folder "QuickReport"
import AdminPanel from './components/AdminPanel';
import Complaints from './components/Complaints';
import Contacts from './components/Contacts';
import RealtimeFeedback from './components/RealtimeFeedback';

// Note: CategoryGrid, DescriptionInput, EvidenceUploader, SubmitButton, 
// and SuccessToast are typically imported inside QuickReportHub.jsx

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('user'); // Default to standard user

  const handleLoginSuccess = (role) => {
    setIsLoggedIn(true);
    if (role) setUserRole(role);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
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
      <main className="flex-1 bg-gray-50 flex flex-col items-center p-6 overflow-y-auto w-full">
        {!isLoggedIn ? (
          <div className="flex flex-col items-center w-full">
            <HeroSection />
            <div className="flex-1 flex items-center justify-center w-full mt-10">
               <AuthForm onAuthSuccess={handleLoginSuccess} />
            </div>
          </div>
        ) : (
          <div className="w-full max-w-6xl flex flex-col gap-8">
            {/* Show Admin Panel only if role is admin, otherwise show Hub */}
            {userRole === 'admin' ? (
              <AdminPanel />
            ) : (
              <>
                <QuickReportHub />
                <RealtimeFeedback />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Complaints />
                  <Contacts />
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;