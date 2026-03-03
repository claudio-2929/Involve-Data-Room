import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AlignLeft } from 'lucide-react';

export default function TableOfContents() {
    const [headings, setHeadings] = useState<{ id: string, text: string, level: number }[]>([]);
    const location = useLocation();

    useEffect(() => {
        // Find all headings in the main content area
        const content = document.getElementById('main-content');
        if (!content) return;

        // Allow time for children to render
        const timer = setTimeout(() => {
            const elements = content.querySelectorAll('h2, h3');
            const newHeadings: any[] = [];

            elements.forEach((el, index) => {
                // If it doesn't have an ID, assign one dynamically
                if (!el.id) {
                    el.id = `heading-${index}`;
                }
                newHeadings.push({
                    id: el.id,
                    text: el.textContent || '',
                    level: parseInt(el.tagName.replace('H', ''))
                });
            });
            setHeadings(newHeadings);
        }, 150);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (headings.length === 0) return null;

    return (
        <aside className="w-[200px] xl:w-[240px] border-r border-involve-border bg-involve-bg2 hidden md:flex flex-col h-screen overflow-hidden flex-shrink-0 sticky top-0 print:hidden">
            <div className="h-[52px] flex items-center px-4 xl:px-6 border-b border-involve-border flex-shrink-0 bg-involve-panel">
                <span className="text-[10px] font-mono text-involve-dim uppercase tracking-widest flex items-center gap-2">
                    <AlignLeft size={14} className="text-involve-blue" /> Contents
                </span>
            </div>
            <div className="flex-1 overflow-y-auto px-4 xl:px-6 py-6 custom-scrollbar">
                <ul className="space-y-3.5 border-l border-involve-border/50 pl-3">
                    {headings.map((h, i) => (
                        <li key={`${h.id}-${i}`} className="relative">
                            <div className="absolute w-[5px] h-[1px] bg-involve-border/50 -left-3 top-2"></div>
                            <a
                                href={`#${h.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById(h.id);
                                    if (el) {
                                        // Scroll the scroll area container
                                        const container = document.getElementById('main-scroll-area');
                                        if (container) {
                                            const topOffset = el.getBoundingClientRect().top + container.scrollTop - container.getBoundingClientRect().top - 40;
                                            container.scrollTo({ top: topOffset, behavior: 'smooth' });
                                        }
                                    }
                                }}
                                className={`text-[12px] hover:text-involve-blue transition-colors block leading-snug ${h.level === 2 ? 'text-involve-text font-medium' : 'text-involve-muted font-light pl-2'}`}
                            >
                                {h.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
