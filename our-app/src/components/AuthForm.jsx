import { useState } from 'react';
import { supabase } from '../supabaseClient'; 

const AuthForm = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const { data: _data, error: authError } = isLogin 
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

    if (authError) {
      setError(authError.message);
    } else {
      onAuthSuccess();
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl border border-gray-100">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h2>

      {error && <p className="mb-4 text-red-500 text-sm text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete={isLogin ? "current-password" : "new-password"}
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700 active:transform active:scale-95 shadow-md"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-600">
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium text-blue-600 hover:underline"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  ); 
};

export default AuthForm;