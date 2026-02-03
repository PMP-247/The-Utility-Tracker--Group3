import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/QuickReport/Navbar.jsx";
import HeroSection from "./components/QuickReport/HeroSection.jsx";
import QuickReportHub from "./components/QuickReport/QuickReportHub.jsx";
import Contacts from "./components/QuickReport/Contacts.jsx";
import Complaints from "./components/QuickReport/Complaints.jsx";   // new page for complaints
import AuthForm from "./components/authForm.jsx";                  // login form

function App() {
  // Example user data (replace with real auth/user context later)
  const user = {
    email: "john@example.com",
    phone: "+27 82 123 4567",
    contacts: [
      { type: "Email", value: "john@example.com" },
      { type: "Phone", value: "+27 82 123 4567" }
    ]
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <QuickReportHub />
              <Contacts user={user} /> {/* pass user data here */}
            </>
          }
        />

        {/* Login route */}
        <Route path="/login" element={<AuthForm />} />

        {/* Complaints dashboard route */}
        <Route path="/complaints" element={<Complaints />} />
      </Routes>
    </Router>
  );
}

export default App;

