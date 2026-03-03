import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { authService } from '../services/authService';
import { Lock, User } from 'lucide-react';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const session = await authService.login(username, password);
            // Log user in via Context
            login(session.user, session.token);

            // Redirect based on role
            if (session.user.role === 'admin') {
                navigate('/admin', { replace: true });
            } else {
                navigate('/dataroom/00_Executive_Overview/01_Investment_Thesis', { replace: true });
            }
        } catch (err: any) {
            setError(err.message || 'Login failed. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-involve-bg flex flex-col justify-center relative overflow-hidden text-involve-text">
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-100"
                style={{
                    backgroundImage: 'linear-gradient(var(--involve-border-med) 1px,transparent 1px),linear-gradient(90deg,var(--involve-border-med) 1px,transparent 1px)',
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)'
                }}
            />

            <div className="relative z-10 w-full max-w-md mx-auto p-6">
                <div className="text-center mb-10 flex flex-col items-center">
                    <div className="flex justify-center mb-5">
                        <img src="/assets/logo-1.png" alt="Involve Space" className="h-8 block dark:hidden" />
                        <img src="/assets/logo-2.png" alt="Involve Space" className="h-8 hidden dark:block" />
                    </div>
                    <div className="inline-block border border-involve-blue/30 bg-involve-blue/10 px-3 py-1 font-mono text-[10px] tracking-widest text-involve-blue uppercase rounded-sm">
                        Secure Data Room
                    </div>
                </div>

                <div className="bg-involve-panel border border-involve-border rounded-xl shadow-2xl p-8 backdrop-blur-sm">
                    <h2 className="text-2xl font-light tracking-tight mb-2">Authorized Access Only</h2>
                    <p className="text-sm text-involve-muted font-light mb-8">Please enter your investor credentials to access the Series A material.</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {error && (
                            <div className="p-3 bg-involve-red-dim border border-involve-red/30 text-involve-red text-sm font-medium rounded-md">
                                {error}
                            </div>
                        )}

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User size={18} className="text-involve-dim" />
                            </div>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                autoComplete="username"
                                className="w-full bg-involve-bg border border-involve-border focus:border-involve-blue focus:ring-1 focus:ring-involve-blue rounded-md py-2.5 pl-10 pr-4 text-sm text-involve-text placeholder-involve-dim transition-colors outline-none"
                                placeholder="Username"
                                required
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock size={18} className="text-involve-dim" />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                className="w-full bg-involve-bg border border-involve-border focus:border-involve-blue focus:ring-1 focus:ring-involve-blue rounded-md py-2.5 pl-10 pr-4 text-sm text-involve-text placeholder-involve-dim transition-colors outline-none"
                                placeholder="Password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="mt-2 w-full bg-involve-blue hover:bg-blue-500 text-white font-medium py-3 rounded-md transition-all shadow-lg shadow-involve-blue/20 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                'Access Data Room'
                            )}
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-center text-[11px] font-mono text-involve-dim uppercase tracking-wider">
                    CLASSIFICATION: STRICTLY CONFIDENTIAL
                </div>
            </div>
        </div>
    );
}
