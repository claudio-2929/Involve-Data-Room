import type { ReactNode } from 'react';
import { cn } from './core';

// ---- Data Display Grids ----

export function StatsBar({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-involve-border border border-involve-border my-8", className)}>
            {children}
        </div>
    );
}

export function StatCell({ value, unit, label }: { value: string | number, unit?: string, label: string }) {
    return (
        <div className="bg-involve-panel p-6 hover:bg-involve-panel/80 transition-colors">
            <div className="text-3xl font-semibold tracking-tight text-involve-text leading-none mb-1">
                {value}
                {unit && <span className="text-involve-blue">{unit}</span>}
            </div>
            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-involve-muted leading-relaxed">
                {label}
            </div>
        </div>
    );
}

// ---- Technology Cards ----

export function TechGrid({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-involve-border border border-involve-border my-8">
            {children}
        </div>
    );
}

interface TechCardProps {
    title: string;
    role: string;
    description: string;
    badgeLabel?: string;
    badgeStyle?: 'green' | 'blue' | 'amber' | 'cyan' | 'red' | 'purple';
    specs: Record<string, string>;
    imagePlaceholderLabel: string;
    imagePlaceholderHint: string;
    wide?: boolean;
}

export function Badge({ label, style = 'blue' }: { label: string, style?: TechCardProps['badgeStyle'] }) {
    const styles = {
        green: "bg-involve-green/10 text-involve-green",
        blue: "bg-involve-blue/10 text-involve-blue",
        amber: "bg-amber-500/10 text-amber-500",
        cyan: "bg-involve-cyan/10 text-involve-cyan",
        red: "bg-red-500/10 text-red-500",
        purple: "bg-involve-purple/10 text-involve-purple",
    };

    return (
        <span className={cn("inline-flex items-center gap-1.5 font-mono text-[9px] font-medium tracking-widest uppercase px-2 py-0.5 rounded-sm whitespace-nowrap shrink-0", styles[style])}>
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            {label}
        </span>
    );
}

export function ImagePlaceholder({ label, hint, className }: { label: string, hint: string, className?: string }) {
    return (
        <div className={cn("bg-involve-panel/50 border border-dashed border-involve-border/50 flex flex-col items-center justify-center gap-2 text-center p-4 relative", className)}>
            <svg className="w-9 h-9 opacity-20 text-involve-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-widest uppercase">{label}</div>
            <div className="text-xs text-involve-muted italic max-w-[260px]">{hint}</div>
        </div>
    );
}

export function TechCard({ title, role, description, badgeLabel, badgeStyle, specs, imagePlaceholderLabel, imagePlaceholderHint, wide }: TechCardProps) {
    return (
        <div className={cn("bg-involve-panel overflow-hidden flex flex-col hover:bg-involve-panel/80 transition-colors", wide && "col-span-full md:grid md:grid-cols-[280px_1fr]")}>
            <div className={cn("relative shrink-0 overflow-hidden", wide ? "h-auto min-h-[200px]" : "h-[180px]")}>
                <ImagePlaceholder label={imagePlaceholderLabel} hint={imagePlaceholderHint} className="h-full border-none rounded-none" />
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3 gap-3">
                    <div>
                        <div className="text-[15px] font-semibold text-involve-text tracking-tight">{title}</div>
                        <div className="font-mono text-[10px] tracking-widest text-involve-muted mb-2 uppercase">{role}</div>
                    </div>
                    {badgeLabel && <Badge label={badgeLabel} style={badgeStyle} />}
                </div>

                <p className="text-[13px] font-light text-involve-muted leading-relaxed mb-5 flex-1">
                    {description}
                </p>

                <div className="flex flex-col gap-1.5">
                    {Object.entries(specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between items-center text-xs py-1.5 border-b border-involve-border/50 last:border-none">
                            <span className="font-mono text-[10.5px] text-involve-muted tracking-wide shrink-0">{key}</span>
                            <span className="font-medium text-involve-text text-right">{val}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ---- Comparison Elements ----

export function CompareBand({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-involve-border border border-involve-border my-8">
            {children}
        </div>
    );
}

export function CompareCol({
    tag, name, nameColor, sub, badges, imagePlaceholderLabel, imagePlaceholderHint, specs
}: {
    tag: string; name: string; nameColor?: string; sub: string; badges: ReactNode;
    imagePlaceholderLabel: string; imagePlaceholderHint: string;
    specs: { key: string; val: ReactNode; highlight?: boolean }[]
}) {
    return (
        <div className="bg-involve-panel flex flex-col">
            <div className="p-6 border-b border-involve-border">
                <div className="font-mono text-[10px] tracking-widest text-involve-muted uppercase mb-1.5">{tag}</div>
                <div className={cn("text-lg font-semibold tracking-tight mb-1", nameColor || "text-involve-text")}>{name}</div>
                <div className="text-xs text-involve-muted font-light leading-relaxed">{sub}</div>
                <div className="mt-3 flex gap-2 flex-wrap">
                    {badges}
                </div>
            </div>
            <div className="h-[210px] shrink-0 overflow-hidden bg-involve-default border-b border-involve-border">
                <ImagePlaceholder label={imagePlaceholderLabel} hint={imagePlaceholderHint} className="h-full border-none" />
            </div>
            <div className="p-6 flex-1">
                {specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-start text-xs py-1.5 border-b border-involve-border/50 last:border-none gap-3">
                        <span className="font-mono text-[10px] text-involve-muted tracking-wide shrink-0 pt-[2px]">{spec.key}</span>
                        <span className={cn("text-right leading-relaxed", spec.highlight ? "font-medium text-involve-green" : "font-normal text-involve-text")}>
                            {spec.val}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ---- Subsystem Components ----

export function SubsysGrid({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1px] bg-involve-border border border-involve-border my-8">
            {children}
        </div>
    );
}

export function SubsysCard({
    num, title, body, specs
}: {
    num: string; title: string; body: ReactNode;
    specs?: { key: string; val: ReactNode }[]
}) {
    return (
        <div className="bg-involve-panel p-6 hover:bg-involve-panel/80 transition-colors flex flex-col cursor-default">
            <span className="font-mono text-[10px] text-involve-blue tracking-[0.15em] mb-2 block">{num}</span>
            <h4 className="text-[14px] font-semibold text-involve-text tracking-tight mb-2">{title}</h4>
            <p className="text-xs font-light text-involve-muted leading-relaxed mb-4 flex-1">{body}</p>

            {specs && specs.length > 0 && (
                <div className="flex flex-col gap-1 mt-auto">
                    {specs.map((spec, i) => (
                        <div key={i} className="flex justify-between items-center text-[11.5px] py-1 border-b border-involve-border/50 last:border-none gap-2">
                            <span className="font-mono text-[9.5px] text-involve-muted tracking-wide">{spec.key}</span>
                            <span className="font-medium text-involve-text text-right leading-snug">{spec.val}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// ---- Split Components ----

export function SplitCardGrid({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-involve-border border border-involve-border my-8">
            {children}
        </div>
    );
}

export function SplitCell({ label, title, children }: { label: string; title: string; children: ReactNode }) {
    return (
        <div className="bg-involve-panel p-6">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-muted mb-2.5">{label}</div>
            <h4 className="text-[14px] font-semibold text-involve-text mb-2.5">{title}</h4>
            <div className="text-[12.5px] font-light text-involve-muted leading-relaxed">
                {children}
            </div>
        </div>
    );
}
