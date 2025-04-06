import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

const LoginNewCS = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGoogleSignin = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
  
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:5173/Patient', // Update this to match your app's URL
          queryParams: {
            prompt: 'select_account', // Forces the "Choose Account" screen
          },
        },
      });
  
      if (error) {
        setError(error.message);
      } else {
        setSuccess('Redirecting to Google...');
      }
    } catch (err) {
      setError('Google signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
  
    try {
      if (!formData.email || !formData.password) {
        setError('Email and password are required');
        setLoading(false);
        return;
      }
  
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSuccess('Login successful! Redirecting...');
        localStorage.setItem('session', JSON.stringify(result.session));
        navigate('/dashboard');
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex rounded-lg shadow-lg overflow-hidden">
        {/* Left side with illustration and text */}
        <div className="md:w-1/2 bg-indigo-100 p-10 flex flex-col justify-center">
          <div className="text-indigo-800 text-2xl font-semibold mb-4">
            We at DoctorSoul+ are always fully focused on helping you.
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://i.ibb.co/yBFYCh40/a64-652.webp"
              alt="Medical Illustration"
              className="max-w-full h-auto"
              style={{ mixBlendMode: 'color-burn' }}
            />
          </div>
        </div>

        {/* Right side with login form */}
        <div className="w-full md:w-1/2 bg-white p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

          {/* Error/Success Messages */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
              {success}
            </div>
          )}

          <div className="mt-4 flex flex-col space-y-3 align-middle">
            <button
              onClick={handleGoogleSignin}
              className="w-full bg-white text-gray-700 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-5 h-5 mr-2"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.14 0 5.97 1.14 8.2 3.02l6.15-6.15C34.15 3.15 29.35 1 24 1 14.61 1 6.7 6.8 3.05 15.02l7.3 5.66C12.3 13.3 17.7 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M46.5 24c0-1.64-.15-3.23-.44-4.76H24v9.05h12.7c-.55 2.96-2.2 5.47-4.7 7.16l7.3 5.66C43.3 37.2 46.5 31.05 46.5 24z"
                />
                <path
                  fill="#4A90E2"
                  d="M12.7 28.7c-.55-1.64-.85-3.4-.85-5.2s.3-3.56.85-5.2l-7.3-5.66C3.15 16.85 1 20.85 1 24s2.15 7.15 4.4 10.15l7.3-5.66z"
                />
                <path
                  fill="#FBBC05"
                  d="M24 46.5c5.35 0 10.15-1.85 13.6-5.05l-7.3-5.66c-2.05 1.4-4.7 2.2-7.3 2.2-6.3 0-11.7-3.8-14.05-9.45l-7.3 5.66C6.7 41.2 14.61 46.5 24 46.5z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="px-4 text-gray-500 text-sm">- OR -</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="mt-4">
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                disabled={loading}
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                disabled={loading}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-6 text-sm text-gray-600">
            don&apos;t have an Account?{' '}
            <button
              onClick={() => navigate('/CreateAccount')}
              className="text-indigo-600 hover:underline font-medium"
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginNewCS;