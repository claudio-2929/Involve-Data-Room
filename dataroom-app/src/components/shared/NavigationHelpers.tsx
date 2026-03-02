import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function NextSectionCard({
    title,
    description,
    path
}: {
    title: string,
    description: string,
    path: string
}) {
    const navigate = useNavigate();

    return (
        <div className="mt-20 pt-10 border-t border-involve-border/50">
            <span className="text-xs font-mono text-involve-muted tracking-widest uppercase mb-6 block">Next Recommended Section</span>

            <div
                onClick={() => navigate(path)}
                className="group relative bg-involve-panel border border-involve-border rounded-xl p-8 cursor-pointer overflow-hidden transition-all hover:border-involve-cyan/50"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-involve-cyan/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

                <div className="flex items-center justify-between z-10 relative">
                    <div>
                        <h3 className="text-xl font-medium text-involve-text mb-2 group-hover:text-involve-cyan transition-colors">{title}</h3>
                        <p className="text-involve-muted text-sm">{description}</p>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-involve-bg border border-involve-border flex items-center justify-center group-hover:border-involve-cyan/50 group-hover:bg-involve-cyan/10 transition-all">
                        <ArrowRight size={20} className="text-involve-muted group-hover:text-involve-cyan transition-colors" />
                    </div>
                </div>
            </div>
        </div>
    );
}
