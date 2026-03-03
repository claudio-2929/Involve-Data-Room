import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, FileText, ChevronRight } from 'lucide-react';
import { sitemapData } from '../../data/sitemap';
import { useAuth } from '../../contexts/AuthContext';
import searchIndex from '../../data/searchIndex.json';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface SearchResult {
    title: string;
    path: string;
    description?: string;
    breadcrumbs: string[];
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const { user } = useAuth();

    // Flatten sitemap for searching
    const flattenNodes = (nodes: any[], currentPath: string[] = []): SearchResult[] => {
        let flattened: SearchResult[] = [];
        for (const node of nodes) {
            // Check access
            if (node.requiredAccess === 'full' && user?.accessLevel !== 'full') {
                continue;
            }

            const isFolder = node.children && node.children.length > 0;
            const newPath = [...currentPath, node.title];

            if (!isFolder) {
                flattened.push({
                    title: node.title,
                    path: node.path,
                    description: node.description,
                    breadcrumbs: currentPath
                });
            }

            if (isFolder) {
                flattened = [...flattened, ...flattenNodes(node.children, newPath)];
            }
        }
        return flattened;
    };

    useEffect(() => {
        if (isOpen) {
            setQuery('');
            setResults([]);
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const flatResults = flattenNodes(sitemapData);
        const lowerQuery = query.toLowerCase();

        const filtered = flatResults.filter(item => {
            const inTitle = item.title.toLowerCase().includes(lowerQuery);
            const inDesc = item.description && item.description.toLowerCase().includes(lowerQuery);
            const inBreadcrumbs = item.breadcrumbs.some(bc => bc.toLowerCase().includes(lowerQuery));

            // Search within full text content if available
            const content = (searchIndex as Record<string, string>)[item.path];
            const inContent = content && content.toLowerCase().includes(lowerQuery);

            return inTitle || inDesc || inBreadcrumbs || inContent;
        });

        filtered.forEach(item => {
            const content = (searchIndex as Record<string, string>)[item.path];
            if (content && !item.title.toLowerCase().includes(lowerQuery) && !item.description?.toLowerCase().includes(lowerQuery)) {
                // Approximate context snippet
                const lowerContent = content.toLowerCase();
                const matchIndex = lowerContent.indexOf(lowerQuery);
                if (matchIndex !== -1) {
                    const snippetStart = Math.max(0, matchIndex - 40);
                    const snippetEnd = Math.min(content.length, matchIndex + 40 + lowerQuery.length);
                    let snippet = content.substring(snippetStart, snippetEnd);
                    if (snippetStart > 0) snippet = '...' + snippet;
                    if (snippetEnd < content.length) snippet = snippet + '...';
                    item.description = `Matches: "${snippet}"`;
                }
            }
        });

        setResults(filtered);
    }, [query, user]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-32 px-4 print:hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-involve-panel border border-involve-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center px-4 border-b border-involve-border">
                    <Search size={20} className="text-involve-dim" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search the data room..."
                        className="flex-1 bg-transparent border-none py-4 px-3 text-involve-text placeholder:text-involve-dim focus:outline-none focus:ring-0 text-base"
                    />
                    <button
                        onClick={onClose}
                        className="p-1 rounded-md text-involve-dim hover:text-involve-text hover:bg-involve-border/50 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                    {query.trim() === '' ? (
                        <div className="py-14 px-6 text-center text-involve-dim flex flex-col items-center">
                            <Search size={40} className="mb-4 opacity-20" />
                            <p>Type to search for sections, concepts, or terms overview.</p>
                        </div>
                    ) : results.length === 0 ? (
                        <div className="py-14 px-6 text-center text-involve-dim">
                            <p>No results found for "{query}".</p>
                            <p className="text-sm mt-2 opacity-60">Try searching for keywords like "GeoAI", "Strategy", or "Financials".</p>
                        </div>
                    ) : (
                        <ul className="py-2">
                            {results.map((result, idx) => (
                                <li key={idx}>
                                    <button
                                        onClick={() => {
                                            navigate(result.path);
                                            onClose();
                                        }}
                                        className="w-full text-left px-5 py-3 hover:bg-involve-blue/5 border-l-2 border-transparent hover:border-involve-blue transition-colors group flex items-start gap-3"
                                    >
                                        <FileText size={18} className="mt-1 flex-shrink-0 text-involve-dim group-hover:text-involve-blue transition-colors" />
                                        <div className="flex-1 min-w-0">
                                            {result.breadcrumbs.length > 0 && (
                                                <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-involve-dim mb-1 font-mono">
                                                    {result.breadcrumbs.map((bc, i) => (
                                                        <span key={i} className="flex items-center gap-1">
                                                            <span className="truncate max-w-[120px]">{bc}</span>
                                                            {i < result.breadcrumbs.length - 1 && <ChevronRight size={10} />}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                            <h4 className="text-involve-text font-medium group-hover:text-involve-blue transition-colors truncate">
                                                {result.title}
                                            </h4>
                                            {result.description && (
                                                <p className="text-sm text-involve-muted line-clamp-1 mt-0.5">
                                                    {result.description}
                                                </p>
                                            )}
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="bg-involve-bg2 border-t border-involve-border px-4 py-2.5 flex items-center justify-between text-xs text-involve-dim font-mono">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5"><kbd className="bg-involve-bg border border-involve-border rounded px-1.5 py-0.5 text-[9px] font-sans">ESC</kbd> to close</span>
                    </div>
                    <span>{results.length} result{results.length !== 1 ? 's' : ''}</span>
                </div>
            </div>
        </div>
    );
}
