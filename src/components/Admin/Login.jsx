import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(email, password);
    if (result.success) {
      navigate('/admin');
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4] flex items-center justify-center font-nunito p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-[#4ADE80] p-8 text-center text-white">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-inner">
            🏫
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Admin Login</h1>
          <p className="opacity-90 mt-2 font-medium">Chithode Playschool CMS</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-center gap-3 animate-shake">
              <span className="text-xl">⚠️</span>
              <p className="text-red-700 text-sm font-semibold">{error}</p>
            </div>
          )}
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#4ADE80] transition-colors">
                📧
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#4ADE80] outline-none transition-all font-medium"
                placeholder="admin@school.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#4ADE80] transition-colors">
                🔒
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#4ADE80] outline-none transition-all font-medium"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 bg-[#F5C518] hover:bg-[#E2B616] text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Logging in...
              </>
            ) : (
              'Login to Dashboard'
            )}
          </button>
          
          <div className="text-center">
            <button 
              type="button"
              onClick={() => navigate('/')}
              className="text-gray-400 hover:text-gray-600 text-sm font-bold transition-colors"
            >
              ← Back to Website
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
