import type { ReactNode } from 'react';
import { cn } from './core';
import { TriangleAlert, CheckCircle2, KeySquare, RotateCw } from 'lucide-react';

// ─── Callouts ─────────────────────────────────────────────────────────────────

export function Callout({
    type = 'default',
    title,
    children,
}: {
    type?: 'default' | 'det' | 'warn' | 'key' | 'loop';
    title: string;
    children: ReactNode;
}) {
    const styles = {
        default: 'bg-involve-blue-glow border-involve-blue/20 border-l-involve-blue/40',
        det: 'bg-involve-green/5 border-involve-green/20 border-l-involve-green/40',
        warn: 'bg-involve-amber/5 border-involve-amber/20 border-l-involve-amber/40',
        key: 'bg-involve-purple/5 border-involve-purple/20 border-l-involve-purple/40',
        loop: 'bg-involve-cyan/5 border-involve-cyan/20 border-l-involve-cyan/40',
    };

    const labelColors = {
        default: 'text-involve-blue',
        det: 'text-involve-green',
        warn: 'text-involve-amber',
        key: 'text-involve-purple',
        loop: 'text-involve-cyan',
    };

    const icons = {
        default: null,
        det: <CheckCircle2 size={15} />,
        warn: <TriangleAlert size={15} />,
        key: <KeySquare size={15} />,
        loop: <RotateCw size={15} />,
    };

    return (
        <div className={cn('flex gap-4 border border-l-2 p-5 my-7', styles[type])}>
            {icons[type] && (
                <div className={cn('mt-0.5 shrink-0', labelColors[type])}>{icons[type]}</div>
            )}
            <div className="text-[13px] leading-relaxed text-involve-muted">
                <strong className={cn('block mb-1 font-medium', labelColors[type])}>{title}</strong>
                {children}
            </div>
        </div>
    );
}

// ─── Explain Grid ──────────────────────────────────────────────────────────────

export function ExplainGrid({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-involve-border border border-involve-border overflow-hidden my-8">
            {children}
        </div>
    );
}

export function ExplainCell({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div className="bg-involve-panel p-5 hover:bg-involve-panel/70 transition-colors">
            <h4 className="font-mono text-[10px] text-involve-blue tracking-[0.15em] uppercase mb-3">{title}</h4>
            <div className="text-[13px] text-involve-muted leading-relaxed font-light">{children}</div>
        </div>
    );
}

// ─── CLEAR Architecture Legend ─────────────────────────────────────────────────

export function ArchitectureLegend() {
    return (
        <div className="flex flex-wrap items-center gap-6 py-3 px-5 border border-involve-border bg-involve-panel my-8">
            <span className="font-mono text-[10px] text-involve-dim tracking-[0.12em] uppercase">Component Type:</span>
            {[
                { color: 'bg-involve-green', label: 'Deterministic' },
                { color: 'bg-involve-amber', label: 'Stochastic (LLM)' },
                { color: 'bg-involve-blue', label: 'Orchestration' },
                { color: 'bg-involve-purple', label: 'Storage / Index' },
            ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-2 font-mono text-[11px]">
                    <div className={cn('w-2 h-2 rounded-full', color)} />
                    <span className="text-involve-muted">{label}</span>
                </div>
            ))}
            <div className="ml-auto font-mono text-[10px] text-involve-dim">
                Core principle: <span className="text-involve-amber">LLM orchestrates</span> · <span className="text-involve-green">Tools calculate</span>
            </div>
        </div>
    );
}

// ─── Diff Table ────────────────────────────────────────────────────────────────

export function DiffTable({ children }: { children: ReactNode }) {
    return (
        <div className="w-full overflow-x-auto my-8 border border-involve-border bg-involve-panel">
            <table className="w-full border-collapse text-left">{children}</table>
        </div>
    );
}
