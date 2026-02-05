import { useState } from 'react';
import { FaEnvelope, FaLock } from "react-icons/fa";

const AuthForm = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { email, password, mode: isLogin ? 'Login' : 'Signup' });
    onAuthSuccess(); 
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-2xl border border-gray-100">
      {/* Heading */}
      <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-800">
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <div className="flex items-center mt-1 rounded-lg border border-gray-300 px-3 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              required
              className="flex-1 outline-none"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="flex items-center mt-1 rounded-lg border border-gray-300 px-3 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              required
              className="flex-1 outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isLogin && (
            <div className="mt-2 text-right">
              <button
                type="button"
                className="text-xs text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 font-semibold text-white transition hover:from-blue-700 hover:to-indigo-700 active:scale-95 shadow-lg"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      {/* Admin Test Login */}
      <div className="mt-4 pt-4 border-t border-gray-100 text-center">
        <button
          type="button"
          onClick={onAuthSuccess}
          className="text-xs text-gray-400 hover:text-blue-500 uppercase tracking-widest font-bold transition-colors"
        >
          Login as Admin (Test)
        </button>
      </div>

      {/* Toggle Login/Signup */}
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-semibold text-blue-600 hover:text-indigo-600 transition"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
