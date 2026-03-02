import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export interface PageNavigationProps {
    next?: {
        title: string;
        desc?: string;
        path: string;
    };
    prev?: {
        title: string;
        desc?: string;
        path: string;
    };
}

export default function PageNavigation({ next, prev }: PageNavigationProps) {
    const navigate = useNavigate();

    return (
        <div className="mt-16 border-t border-involve-border pt-12 pb-16">
            {next && (
                <div className="mb-6">
                    <h3 className="text-[10px] font-mono text-involve-dim tracking-[0.2em] uppercase mb-4">
                        Next Recommended Section
                    </h3>
                    <button
                        onClick={() => navigate(next.path)}
                        className="w-full text-left bg-involve-panel rounded-xl border border-involve-border p-6 flex items-center justify-between group hover:border-involve-blue/40 transition-colors"
                    >
                        <div>
                            <h4 className="text-lg font-medium text-involve-text mb-1 group-hover:text-involve-blue transition-colors">
                                {next.title}
                            </h4>
                            {next.desc && (
                                <p className="text-sm text-involve-muted font-light">
                                    {next.desc}
                                </p>
                            )}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-involve-bg2 flex flex-shrink-0 items-center justify-center border border-involve-border group-hover:bg-involve-blue group-hover:border-involve-blue transition-colors group-hover:text-white text-involve-dim">
                            <ArrowRight size={18} />
                        </div>
                    </button>
                </div>
            )}

            {prev && (
                <div className="mb-6">
                    <h3 className="text-[10px] font-mono text-involve-dim tracking-[0.2em] uppercase mb-4">
                        Previous Section
                    </h3>
                    <button
                        onClick={() => navigate(prev.path)}
                        className="w-full text-left bg-involve-panel rounded-xl border border-involve-border p-6 flex items-center justify-between group hover:border-involve-blue/40 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-full bg-involve-bg2 flex flex-shrink-0 items-center justify-center border border-involve-border group-hover:bg-involve-blue group-hover:border-involve-blue transition-colors group-hover:text-white text-involve-dim">
                            <ArrowLeft size={18} />
                        </div>
                        <div className="text-right">
                            <h4 className="text-lg font-medium text-involve-text mb-1 group-hover:text-involve-blue transition-colors">
                                {prev.title}
                            </h4>
                            {prev.desc && (
                                <p className="text-sm text-involve-muted font-light">
                                    {prev.desc}
                                </p>
                            )}
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
}
