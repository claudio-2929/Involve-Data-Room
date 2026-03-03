import { useState, useEffect } from 'react';
import { Bell, ExternalLink, Sun, Moon, LogOut, Settings, Search } from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import SearchModal from '../ui/SearchModal';

export default function TopNavBar() {
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login', { replace: true });
    };

    return (
        <header className="h-16 border-b border-involve-border flex items-center px-6 md:px-10 bg-involve-bg/95 backdrop-blur-md sticky top-0 z-20 justify-between flex-shrink-0 print:hidden">
            <div className="flex items-center gap-3">
                <div className="h-6 w-px bg-involve-blue rounded-full hidden md:block"></div>
                <h2 className="text-sm md:text-base font-medium tracking-wide">
                    <span className="text-involve-muted hidden md:inline">Viewing: </span>
                    <span className="text-involve-text">Architecture &amp; Strategy</span>
                </h2>
            </div>

            <div className="flex items-center gap-3 md:gap-5">
                <button
                    onClick={() => setIsSearchOpen(true)}
                    className="flex items-center gap-2 text-involve-muted hover:text-involve-text transition-colors bg-involve-panel border border-involve-border rounded-md px-3 py-1.5 hover:border-involve-blue/40"
                    title="Search Data Room"
                >
                    <Search size={16} />
                    <span className="text-sm hidden lg:inline mr-2 tracking-wide font-light">Search...</span>
                    <kbd className="hidden lg:inline-flex items-center justify-center rounded border border-involve-border bg-involve-bg px-1.5 font-mono text-[10px] font-medium text-involve-dim">
                        <span className="text-[10px]">⌘</span>K
                    </kbd>
                </button>

                <div className="h-6 w-px bg-involve-border hidden md:block"></div>

                <button className="text-involve-muted hover:text-involve-blue transition-colors hidden md:block" title="Recent Updates">
                    <Bell size={18} />
                </button>

                <button
                    onClick={toggleTheme}
                    className="text-involve-muted hover:text-involve-blue transition-colors flex items-center justify-center p-1.5 rounded-md hover:bg-involve-blue/5"
                    title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>



                <a href="mailto:claudio.p@involvespace.eu" className="group flex items-center gap-2 text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 bg-involve-blue/10 text-involve-blue border border-involve-blue/30 rounded-sm hover:bg-involve-blue/20 transition-all">
                    <ExternalLink size={16} />
                    <span className="font-medium hidden md:inline">Contact IR</span>
                    <span className="font-medium md:hidden">IR</span>
                </a>

                <div className="ml-2 flex items-center gap-2">
                    {user?.role === 'admin' && (
                        <button
                            onClick={() => navigate('/admin')}
                            className="text-involve-muted hover:text-involve-cyan transition-colors"
                            title="Admin Dashboard"
                        >
                            <Settings size={18} />
                        </button>
                    )}
                    <button
                        onClick={handleLogout}
                        className="w-8 h-8 rounded-full bg-involve-panel hover:bg-involve-red-dim border border-involve-border hover:border-involve-red/30 flex items-center justify-center text-involve-muted hover:text-involve-red transition-all ml-1"
                        title={`Logout ${user?.username}`}
                    >
                        <LogOut size={16} />
                    </button>
                </div>
            </div>

            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </header>
    );
}
