import type { ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

// ─── Document-Level Header (matches HAPS Roadmap style) ──────────────────────

export function DocHeader({
    breadcrumb,
    title,
    titleStrong,
    subtitle,
    meta,
}: {
    breadcrumb?: ReactNode;
    title: string;
    titleStrong?: string;
    subtitle?: string;
    meta?: { label: string; value: string }[];
}) {
    return (
        <div className="mb-12 pb-10 border-b border-involve-border relative overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(var(--involve-border-med) 1px,transparent 1px),linear-gradient(90deg,var(--involve-border-med) 1px,transparent 1px)',
                    backgroundSize: '48px 48px',
                    maskImage: 'linear-gradient(to bottom,black 0%,transparent 100%)',
                }}
            />
            <div className="relative z-10">
                {breadcrumb && (
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-involve-dim tracking-[0.12em] uppercase mb-6">
                        {breadcrumb}
                    </div>
                )}
                <h1 className="text-[2.2rem] font-light tracking-[-0.04em] leading-[1.1] text-involve-text mb-2">
                    {title}
                    {titleStrong && (
                        <>
                            <br />
                            <strong className="font-semibold">{titleStrong}</strong>
                        </>
                    )}
                </h1>
                {subtitle && (
                    <p className="text-sm text-involve-muted font-light max-w-[580px] leading-relaxed mt-3 mb-7">
                        {subtitle}
                    </p>
                )}
                {meta && meta.length > 0 && (
                    <div className="flex gap-10 flex-wrap">
                        {meta.map(({ label, value }) => (
                            <div key={label} className="flex flex-col gap-0.5">
                                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-involve-dim">{label}</span>
                                <span className="text-xs font-medium text-involve-muted">{value}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

// ─── Section Header (matches HAPS Roadmap SectionHeader) ─────────────────────

export function SectionHeader({
    eyebrow,
    title,
    desc,
    className,
}: {
    eyebrow: string;
    title: string;
    desc?: string;
    className?: string;
}) {
    return (
        <div className={cn('mb-8', className)}>
            <div className="flex items-center gap-2 mb-3">
                <span className="block w-3.5 h-px bg-involve-blue flex-shrink-0" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-involve-blue">{eyebrow}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-involve-text mb-1 leading-snug">{title}</h2>
            {desc && <p className="text-[12px] text-involve-dim italic">{desc}</p>}
        </div>
    );
}

// ─── Legacy alias (kept for backward compatibility) ───────────────────────────

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string; lastUpdated?: string }) {
    return (
        <DocHeader
            title={title}
            subtitle={subtitle}
        />
    );
}

// ─── Body Typography ──────────────────────────────────────────────────────────

export function BodyText({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <p className={cn('text-[13.5px] font-light text-involve-muted leading-[1.8] mb-5 max-w-[780px]', className)}>
            {children}
        </p>
    );
}

// ─── Containers ───────────────────────────────────────────────────────────────

export function ContentBlock({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn('mb-12', className)}>{children}</div>;
}

export function SectionDivider() {
    return <div className="h-px w-full bg-involve-border my-16" />;
}

// ─── Backward-compat shims (used by older page files) ─────────────────────────

/** @deprecated Use SectionHeader instead */
export function SectionHeading({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={cn('mb-8 mt-16', className)}>
            <div className="flex items-center gap-2 mb-3">
                <span className="block w-3.5 h-px bg-involve-blue flex-shrink-0" />
            </div>
            <h2 className="text-2xl font-light tracking-tight text-involve-text">{children}</h2>
        </div>
    );
}

/** @deprecated Use a custom card div instead */
export function Card({ children, className, interactive }: { children: ReactNode; className?: string; interactive?: boolean }) {
    return (
        <div className={cn('bg-involve-panel border border-involve-border p-6 transition-all', interactive && 'hover:border-involve-blue/40 cursor-pointer', className)}>
            {children}
        </div>
    );
}

/** @deprecated Use DocHeader with a highlight block instead */
export function AbstractBox({ children }: { children: ReactNode }) {
    return (
        <div className="bg-involve-blue/5 border-l-2 border-involve-blue p-6 my-8">
            <h3 className="text-[10px] font-mono text-involve-blue tracking-[0.2em] uppercase mb-4">Executive Abstract</h3>
            <div className="text-base font-light text-involve-text leading-relaxed">
                {children}
            </div>
        </div>
    );
}

/** @deprecated Use StatCell in a StatsBar instead */
export function MetricCard({ label, value, trend, suffix }: { label: string; value: string | number; trend?: string; suffix?: string }) {
    return (
        <div className="bg-involve-panel border border-involve-border p-6 flex flex-col">
            <span className="text-[10px] font-mono text-involve-dim tracking-[0.12em] uppercase mb-3">{label}</span>
            <div className="flex items-baseline gap-2">
                <span className="text-3xl font-mono text-involve-text tracking-tight">{value}</span>
                {suffix && <span className="text-involve-muted">{suffix}</span>}
            </div>
            {trend && (
                <div className="mt-3 text-[11px] font-mono text-involve-green flex items-center gap-1">
                    ↑ {trend}
                </div>
            )}
        </div>
    );
}
