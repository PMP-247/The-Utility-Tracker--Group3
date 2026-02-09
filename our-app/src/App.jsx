import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthForm from './components/AuthForm';
import Navbar from './components/QuickReport/Navbar';
import HeroSection from './components/QuickReport/HeroSection';
import QuickReportHub from './components/QuickReport/QuickReportHub';
import AdminPanel from './components/QuickReport/AdminPanel';
import Complaints from './components/QuickReport/Complaints';
import Contacts from './components/QuickReport/Contacts';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate("/report");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={
            <div className="flex justify-center p-10">
              <AuthForm onAuthSuccess={handleLoginSuccess} />
            </div>
          } />
          <Route path="/report" element={<QuickReportHub />} />
          <Route path="/complaints" element={isLoggedIn ? <Complaints /> : <Navigate to="/login" />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App; 