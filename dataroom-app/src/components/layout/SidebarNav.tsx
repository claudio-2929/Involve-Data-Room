import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    Folder,
    FolderOpen,
    ChevronRight,
    FileText,
    ChevronDown
} from 'lucide-react';
import clsx from 'clsx';
import { sitemapData } from '../../data/sitemap';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../ThemeProvider';

function NavItem({ item, depth = 0 }: { item: any; depth?: number }) {
    const location = useLocation();
    const hasChildren = item.children && item.children.length > 0;

    const isChildActive = hasChildren && item.children.some((child: any) =>
        location.pathname.includes(child.path)
    );

    const [isOpen, setIsOpen] = useState(isChildActive);

    const paddingLeft = `${depth * 1 + 1}rem`;

    if (!hasChildren) {
        return (
            <NavLink
                to={item.path}
                style={{ paddingLeft }}
                className={({ isActive }) => clsx(
                    "flex items-center gap-2 py-[7px] pr-4 text-[12px] font-light transition-all group border-l-2",
                    isActive
                        ? "text-involve-blue border-involve-blue bg-involve-blue/5 font-normal"
                        : "text-involve-dim border-transparent hover:text-involve-muted hover:border-involve-border/60"
                )}
            >
                <FileText size={13} className="shrink-0 opacity-60 group-hover:opacity-90 transition-opacity" />
                <span className="truncate leading-snug">{item.title}</span>
            </NavLink>
        );
    }

    return (
        <div className="flex flex-col">
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{ paddingLeft }}
                className={clsx(
                    "flex items-center justify-between py-2.5 pr-4 text-[12px] transition-colors group w-full",
                    isChildActive
                        ? "text-involve-text font-normal"
                        : "text-involve-muted font-light hover:text-involve-text"
                )}
            >
                <div className="flex items-center gap-2 overflow-hidden">
                    {isOpen ? (
                        <FolderOpen size={14} className={clsx("shrink-0 transition-colors", isChildActive ? "text-involve-blue" : "text-involve-dim")} />
                    ) : (
                        <Folder size={14} className={clsx("shrink-0 transition-colors", isChildActive ? "text-involve-blue" : "text-involve-dim")} />
                    )}
                    <span className="truncate">{item.title}</span>
                </div>
                {isOpen
                    ? <ChevronDown size={12} className="opacity-40 shrink-0" />
                    : <ChevronRight size={12} className="opacity-40 shrink-0" />
                }
            </button>

            {isOpen && (
                <div className="flex flex-col">
                    {item.children.map((child: any) => (
                        <NavItem key={child.path} item={child} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function SidebarNav() {
    const { user } = useAuth();
    const { theme } = useTheme();

    // Filter sitemap based on user access level
    const authorizedSitemap = sitemapData.filter(node => {
        if (!user) return false;
        if (node.requiredAccess === 'full' && user.accessLevel !== 'full') {
            return false;
        }
        return true;
    });

    return (
        <aside className="w-[264px] border-r border-involve-border bg-involve-bg hidden lg:flex flex-col h-screen overflow-hidden flex-shrink-0 relative z-20 print:hidden">
            {/* Header */}
            <div className="h-[52px] flex items-center px-4 border-b border-involve-border flex-shrink-0">
                <div className="flex items-center mt-1">
                    {theme === 'dark' ? (
                        <img src={`${import.meta.env.BASE_URL}assets/logo-2.png`} alt="Involve Space" className="h-5" />
                    ) : (
                        <img src={`${import.meta.env.BASE_URL}assets/logo-1.png`} alt="Involve Space" className="h-5" />
                    )}
                </div>
                <span className="ml-2 font-mono text-[8px] text-involve-blue border border-involve-blue/30 bg-involve-blue/8 px-1.5 py-[2px] tracking-[0.1em] uppercase whitespace-nowrap self-center mt-0.5">
                    Data Room
                </span>
            </div>

            {/* Nav */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="px-4 pt-5 pb-2">
                    <p className="font-mono text-[9px] text-involve-dim tracking-[0.2em] uppercase">Index</p>
                </div>

                <nav className="flex flex-col pb-4">
                    {authorizedSitemap.map((node) => (
                        <NavItem key={node.path} item={node} />
                    ))}
                </nav>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-involve-border flex-shrink-0 font-mono text-[10px] text-involve-dim">
                <div className="flex justify-between items-center mb-1.5">
                    <span className="tracking-[0.08em]">Status:</span>
                    <span className="text-involve-green flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-involve-green animate-pulse" />
                        Secure
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="tracking-[0.08em]">Access:</span>
                    <span className="text-involve-muted">
                        Level {user?.accessLevel === 'full' ? '2 (Full)' : '1 (Partial)'}
                    </span>
                </div>
            </div>
        </aside>
    );
}
