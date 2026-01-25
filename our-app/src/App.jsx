import { useState } from 'react';
import AuthForm from './components/authForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 2. Logic to "Log In" (passed down to the form)
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {isLoggedIn ? (
        // This is where your Utility Tracker Dashboard will live
        <div className="p-10 text-center">
          <h1 className="text-4xl font-bold text-green-600">You are Logged In!</h1>
          <p className="mt-4 text-gray-600">Welcome to the Utility Tracker Dashboard.</p>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="mt-6 text-blue-500 underline"
          >
            Logout
          </button>
        </div>
      ) : (
        // Show the Auth Form if not logged in
        <AuthForm onAuthSuccess={handleLoginSuccess} />
      )}
    </main>
  );
}

export default App;