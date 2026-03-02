import { ContentBlock, BodyText } from '../components/ui/core';
import { SplitCardGrid, SplitCell, StatsBar, StatCell, Badge, ImagePlaceholder } from '../components/ui/TechSpecific';

// ─── Reusable Section Header ───────────────────────────────────────
function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
    return (
        <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
                <span className="block w-3.5 h-px bg-involve-blue flex-shrink-0" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-involve-blue">{eyebrow}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-involve-text mb-1 leading-snug">{title}</h2>
            {desc && <p className="text-[12px] text-involve-dim italic">{desc}</p>}
        </div>
    );
}

// ─── Standard Table ────────────────────────────────────────────────
function DataTable({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
    return (
        <div className="overflow-x-auto border border-involve-border my-8">
            <table className="w-full border-collapse text-sm">
                <thead>
                    <tr className="bg-involve-bg2 border-b border-involve-border">
                        {headers.map((h, i) => (
                            <th key={i} className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.12em] uppercase text-involve-dim font-medium whitespace-nowrap">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, ri) => (
                        <tr key={ri} className="border-b border-involve-border/60 last:border-none hover:bg-involve-blue-glow transition-colors">
                            {row.map((cell, ci) => (
                                <td key={ci} className={`px-4 py-3 text-xs font-light text-involve-muted leading-relaxed align-top ${ci === 0 ? 'font-medium text-involve-text' : ''}`}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// ─── Milestone Table ───────────────────────────────────────────────
function MilestoneTable({ rows }: { rows: { date: string; name: string; desc: string; badge: React.ReactNode }[] }) {
    return (
        <div className="border border-involve-border my-8">
            <div className="grid grid-cols-[100px_180px_1fr_120px] bg-involve-bg2 border-b border-involve-border">
                {['Date', 'Milestone', 'Description', 'Status'].map(h => (
                    <div key={h} className="px-4 py-3 font-mono text-[10px] tracking-[0.12em] uppercase text-involve-dim border-r border-involve-border last:border-none">
                        {h}
                    </div>
                ))}
            </div>
            {rows.map((r, i) => (
                <div key={i} className="grid grid-cols-[100px_180px_1fr_120px] border-b border-involve-border/60 last:border-none hover:bg-involve-panel/60 transition-colors items-center">
                    <div className="px-4 py-3 font-mono text-[11px] text-involve-blue font-medium border-r border-involve-border self-stretch flex items-center">{r.date}</div>
                    <div className="px-4 py-3 text-xs font-medium text-involve-text border-r border-involve-border self-stretch flex items-center">{r.name}</div>
                    <div className="px-4 py-3 text-xs font-light text-involve-muted leading-relaxed border-r border-involve-border">{r.desc}</div>
                    <div className="px-4 py-3">{r.badge}</div>
                </div>
            ))}
        </div>
    );
}

// ─── Callout ──────────────────────────────────────────────────────
function Callout({ children }: { children: React.ReactNode }) {
    return (
        <div className="my-7 px-5 py-4 bg-involve-blue-glow border-l-2 border-involve-blue/30 text-[13px] font-light text-involve-muted leading-relaxed italic">
            {children}
        </div>
    );
}

// ─── RefNote ──────────────────────────────────────────────────────
function RefNote({ children }: { children: React.ReactNode }) {
    return (
        <div className="my-6 px-4 py-3 bg-involve-panel border border-involve-border border-l-2 border-l-involve-blue font-mono text-[11px] text-involve-blue/65 leading-relaxed">
            {children}
        </div>
    );
}

// ─── Risk Card ────────────────────────────────────────────────────
function RiskCard({ title, severity, body, mitigation }: { title: string; severity: 'green' | 'amber' | 'red'; body: string; mitigation: string }) {
    return (
        <div className="bg-involve-panel p-5 hover:bg-involve-panel/70 transition-colors flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
                <div className="text-[14px] font-semibold text-involve-text tracking-tight">{title}</div>
                <Badge label={severity === 'green' ? 'Low' : severity === 'amber' ? 'Medium' : 'High'} style={severity} />
            </div>
            <p className="text-xs font-light text-involve-muted leading-relaxed">{body}</p>
            <p className="text-[11px] text-involve-dim italic leading-relaxed">
                <strong className="font-medium text-involve-muted not-italic">Mitigation: </strong>
                {mitigation}
            </p>
        </div>
    );
}

// ─── Gantt Chart ──────────────────────────────────────────────────
function GanttBar({ label, color, colStart, colEnd, opacity = 1 }: { label: string; color: 'green' | 'blue' | 'amber' | 'purple'; colStart: number; colEnd: number; opacity?: number }) {
    const colorMap = {
        green: { bg: 'rgba(52,208,122,0.18)', border: '#34d07a', text: '#34d07a' },
        blue: { bg: 'rgba(61,155,255,0.15)', border: '#3d9bff', text: '#3d9bff' },
        amber: { bg: 'rgba(240,160,32,0.15)', border: '#f0a020', text: '#f0a020' },
        purple: { bg: 'rgba(167,139,250,0.12)', border: '#a78bfa', text: '#a78bfa' },
    };
    const c = colorMap[color];
    return (
        <div
            style={{
                gridColumn: `${colStart + 1} / ${colEnd + 1}`,
                background: c.bg,
                borderLeft: `2px solid ${c.border}`,
                color: c.text,
                opacity,
                gridRow: 1,
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 8,
                paddingRight: 6,
                height: 24,
                margin: '0 2px',
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.55rem',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                borderRadius: 2,
            }}
        >
            {label}
        </div>
    );
}

function GanttRow({ label, sub, children }: { label: string; sub?: string; children: React.ReactNode }) {
    return (
        <div className="flex border-b border-involve-border/60 last:border-none hover:bg-involve-blue-glow transition-colors min-h-[38px]">
            <div className="w-[200px] flex-shrink-0 px-4 py-2 text-xs text-involve-muted border-r border-involve-border self-center">
                {label}
                {sub && <span className="block font-mono text-[10px] text-involve-dim mt-0.5">{sub}</span>}
            </div>
            <div className="flex-1 grid grid-cols-[repeat(16,1fr)] items-center px-[2px]">
                {children}
            </div>
        </div>
    );
}

function GanttSectionHeader({ label, badge }: { label: string; badge: React.ReactNode }) {
    return (
        <div className="flex items-center gap-3 px-4 py-2 border-b border-involve-border bg-involve-panel">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-blue">— {label}</span>
            {badge}
        </div>
    );
}

// ─── Version Card ─────────────────────────────────────────────────
function VersionCard({
    versionLabel, name, nameColor, badges, specs,
    title, body1, body2, deltas, accentTop = false
}: {
    versionLabel: string; name: string; nameColor?: string;
    badges: React.ReactNode; specs: { k: string; v: string; highlight?: boolean }[];
    title: string; body1: string; body2?: string;
    deltas?: { icon: string; iconStyle: 'new' | 'up' | 'change'; text: string; sub: string }[];
    accentTop?: boolean;
}) {
    const iconStyles = {
        new: 'bg-involve-green/15 text-involve-green',
        up: 'bg-involve-blue/15 text-involve-blue',
        change: 'bg-involve-amber/15 text-involve-amber',
    };
    return (
        <div className={`grid grid-cols-1 md:grid-cols-[260px_1fr] bg-involve-panel border border-involve-border ${accentTop ? 'border-t-2 border-t-involve-blue' : ''}`}>
            <div className="p-7 border-b border-involve-border md:border-b-0 md:border-r flex flex-col gap-2">
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-dim">{versionLabel}</div>
                <div className={`text-[16px] font-semibold tracking-tight ${nameColor || 'text-involve-text'}`}>{name}</div>
                <div className="flex gap-2 flex-wrap">{badges}</div>
                <div className="flex flex-col gap-0 mt-2">
                    {specs.map((s, i) => (
                        <div key={i} className="flex justify-between items-center text-xs py-1.5 border-b border-involve-border/60 last:border-none gap-2">
                            <span className="font-mono text-[10px] text-involve-dim">{s.k}</span>
                            <span className={`font-medium text-right ${s.highlight ? 'text-involve-blue' : 'text-involve-text'}`}>{s.v}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-7">
                <div className="text-[14px] font-semibold text-involve-text mb-3">{title}</div>
                <p className="text-[13px] font-light text-involve-muted leading-relaxed">{body1}</p>
                {body2 && <p className="text-[13px] font-light text-involve-muted leading-relaxed mt-3">{body2}</p>}
                {deltas && (
                    <div className="flex flex-col gap-3 mt-5">
                        {deltas.map((d, i) => (
                            <div key={i} className="flex items-start gap-3 text-xs text-involve-muted leading-relaxed">
                                <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 ${iconStyles[d.iconStyle]}`}>
                                    {d.icon}
                                </div>
                                <span>
                                    <strong className="font-medium text-involve-text">{d.text}</strong>
                                    <span className="text-involve-dim ml-1">— {d.sub}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function HapsRoadmapPage() {
    return (
        <div className="animate-in fade-in duration-500 max-w-5xl mx-auto pb-24">

            {/* Document Header */}
            <div className="mb-12 pb-10 border-b border-involve-border relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(var(--involve-border) 1px,transparent 1px),linear-gradient(90deg,var(--involve-border) 1px,transparent 1px)',
                        backgroundSize: '48px 48px',
                        maskImage: 'linear-gradient(to bottom,black 0%,transparent 100%)',
                    }}
                />
                <div className="relative z-10">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-involve-dim tracking-[0.12em] uppercase mb-6">
                        02. Product & Technology
                        <span className="opacity-30 mx-1">›</span>
                        <span className="text-involve-blue">HAPS Roadmap</span>
                    </div>
                    <h1 className="text-[2.2rem] font-light tracking-[-0.04em] leading-[1.1] text-involve-text mb-2">
                        Platform Roadmap<br />
                        <strong className="font-semibold">Stratorelay · Stratostats · LoonHive®</strong>
                    </h1>
                    <p className="text-sm text-involve-muted font-light max-w-[580px] leading-relaxed mt-3 mb-7">
                        Development trajectory of Involve Space's three stratospheric platform programmes from current operational status through the Series A execution window and beyond.
                    </p>
                    <div className="flex gap-10 flex-wrap">
                        {[['Document', 'IS-DR-04'], ['Horizon', '2025–2029'], ['Platforms', 'Stratorelay® · Stratostats® v1/v2 · LoonHive®'], ['Revision', 'A — Feb 2026']].map(([label, val]) => (
                            <div key={label} className="flex flex-col gap-0.5">
                                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-involve-dim">{label}</span>
                                <span className="text-xs font-medium text-involve-muted">{val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* §1 — STRATEGIC OVERVIEW */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Strategic Overview"
                    title="Three platforms, three parallel programmes"
                    desc="Each programme is at a different maturity and serves a distinct role in the scaling strategy"
                />
                <BodyText>
                    Involve Space operates three concurrent hardware development programmes that build on one another. <strong className="font-medium text-involve-text">Stratorelay®</strong> is already commercial — the workhorse for on-demand missions and the primary near-term revenue driver. <strong className="font-medium text-involve-text">Stratostats® v2</strong> is the Series A execution programme — unlocking weeks-to-months-long persistent missions and the defense contract pipeline. <strong className="font-medium text-involve-text">LoonHive®</strong> is the long-range programme — turning individual platforms into a sensing constellation and unlocking continental-scale intelligence.
                </BodyText>
                <BodyText>
                    The three programmes are not sequential. They run in parallel, with Stratorelay® generating commercial revenue that partially funds the v2 and LoonHive® programmes. Each programme's TRL advancement directly de-risks the next funding round and unlocks a new tier of customer contracts.
                </BodyText>

                <StatsBar className="mt-10">
                    <StatCell value="TRL" unit="9" label="Stratorelay® · fully commercial" />
                    <StatCell value="TRL" unit="7" label="Stratostats® v2 · Series A execution" />
                    <StatCell value="TRL" unit="5" label="LoonHive® · first fleet flights 2026" />
                    <StatCell value="200" unit="+" label="Total flights executed to date" />
                </StatsBar>

                {/* Gantt Chart */}
                <div className="border border-involve-border my-8 overflow-x-auto">
                    {/* Year headers */}
                    <div className="grid grid-cols-[200px_1fr_1fr_1fr_1fr] bg-involve-bg3 border-b border-involve-border">
                        <div className="px-4 py-2 font-mono text-[10px] text-involve-dim border-r border-involve-border">PROGRAMME / PHASE</div>
                        {['2026', '2027', '2028', '2029'].map(y => (
                            <div key={y} className="py-2 text-center font-mono text-[11px] text-involve-muted font-medium tracking-[0.1em] border-r border-involve-border last:border-none">{y}</div>
                        ))}
                    </div>
                    {/* Quarter headers */}
                    <div className="flex bg-involve-bg2 border-b border-involve-border">
                        <div className="w-[200px] flex-shrink-0 border-r border-involve-border" />
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className={`flex-1 py-1 text-center font-mono text-[10px] text-involve-dim border-r border-involve-border/60 last:border-none ${i % 4 === 0 ? 'border-r border-involve-border' : ''}`}>
                                Q{(i % 4) + 1}
                            </div>
                        ))}
                    </div>

                    {/* Stratorelay section */}
                    <GanttSectionHeader label="Stratorelay®" badge={<Badge label="TRL 9 · Commercial" style="green" />} />
                    <GanttRow label="Commercial missions" sub="On-demand deployments">
                        <GanttBar label="Ongoing — all four years" color="green" colStart={0} colEnd={16} />
                    </GanttRow>
                    <GanttRow label="Ops tempo scaling" sub="8 → 30+ missions / year">
                        <GanttBar label="Scale ops + ground crew" color="green" colStart={0} colEnd={8} opacity={0.65} />
                    </GanttRow>
                    <GanttRow label="Defense readiness" sub="Rapid-deploy protocol">
                        <GanttBar label="Protocol V2 + 24h SLA" color="green" colStart={0} colEnd={4} opacity={0.55} />
                    </GanttRow>
                    <GanttRow label="Multi-launch campaigns" sub="Simultaneous ops">
                        <GanttBar label="Multi-site concurrent deployments" color="green" colStart={2} colEnd={12} opacity={0.45} />
                    </GanttRow>

                    {/* Stratostats section */}
                    <GanttSectionHeader label="Stratostats® v2" badge={<Badge label="TRL 7 → 9" style="blue" />} />
                    <GanttRow label="ACS v2 integration" sub="New compressor + valve">
                        <GanttBar label="ACS v2 build + bench test" color="blue" colStart={0} colEnd={3} />
                    </GanttRow>
                    <GanttRow label="Extended flight tests" sub="14+ day validation flights">
                        <GanttBar label="Iterative flight validation" color="blue" colStart={3} colEnd={7} opacity={0.8} />
                    </GanttRow>
                    <GanttRow label="90-day endurance target" sub="Full mission profile">
                        <GanttBar label="First 90-day mission" color="blue" colStart={4} colEnd={8} opacity={0.65} />
                    </GanttRow>
                    <GanttRow label="MoD contract delivery" sub="Defense mission programme">
                        <GanttBar label="MoD mission deliveries" color="blue" colStart={0} colEnd={6} opacity={0.55} />
                    </GanttRow>
                    <GanttRow label="TRL 9 certification" sub="Full operational status">
                        <GanttBar label="TRL 9 declared" color="green" colStart={6} colEnd={9} />
                    </GanttRow>

                    {/* LoonHive section */}
                    <GanttSectionHeader label="LoonHive®" badge={<Badge label="TRL 5 → 7" style="amber" />} />
                    <GanttRow label="Simulation programme" sub="Hundreds of scenarios">
                        <GanttBar label="Sim validation · ongoing" color="amber" colStart={0} colEnd={4} />
                    </GanttRow>
                    <GanttRow label="2-balloon dual flight" sub="First real coordination">
                        <GanttBar label="First dual-balloon test" color="amber" colStart={2} colEnd={5} opacity={0.8} />
                    </GanttRow>
                    <GanttRow label="5-balloon mini-fleet" sub="Regional coverage demo">
                        <GanttBar label="5-balloon coverage demo" color="amber" colStart={4} colEnd={8} opacity={0.65} />
                    </GanttRow>
                    <GanttRow label="10+ balloon fleet" sub="First commercial constellation">
                        <GanttBar label="First commercial constellation" color="purple" colStart={8} colEnd={14} />
                    </GanttRow>
                </div>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16" />

            {/* §2 — STRATORELAY ROADMAP */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Stratorelay® Programme"
                    title="Stratorelay® — scaling the commercial engine"
                    desc="From proof-of-concept to operational tempo: the revenue foundation of the business"
                />
                <BodyText>
                    Stratorelay® reached TRL 9 and full commercial status in 2024. The programme is no longer in a development phase — the engineering challenges are solved. The roadmap is now about <strong className="font-medium text-involve-text">operational scaling</strong>: increasing mission cadence, expanding the operator network, building a multi-launch logistics capability, and hardening the Neurostar® deployment planning module to shorten the flight-readiness window.
                </BodyText>
                <BodyText>
                    The two strategic upgrades in the 2026–2027 window are: (1) a <strong className="font-medium text-involve-text">24-hour rapid deployment protocol</strong> targeting defense customers who need persistent but time-critical area coverage, and (2) a <strong className="font-medium text-involve-text">multi-launch capability</strong> allowing simultaneous Stratorelay® deployments from different sites to cover overlapping or adjacent areas — the precursor to fleet thinking without the full LoonHive® coordination overhead.
                </BodyText>

                <SplitCardGrid>
                    <SplitCell label="Current status" title="Operational — 200+ flights, active contracts">
                        Stratorelay® is flying commercially with paying customers across three verticals: <strong className="font-medium text-involve-text">Earth observation and mapping</strong> (demonstrated 1,285 km² coverage over Rome in a single mission), <strong className="font-medium text-involve-text">payload IOD rideshare</strong> (over 40 payload types elevated), and <strong className="font-medium text-involve-text">defense area surveillance</strong> (under the Italian Ministry of Defense contract). The platform requires no further TRL advancement — it is operationally mature.
                    </SplitCell>
                    <div className="bg-involve-bg2 border-t border-involve-border md:border-t-0 md:border-l border-involve-border">
                        <SplitCell label="2026–2027 focus" title="Mission tempo · 24h protocol · multi-site ops">
                            The Series A investment enables three operational scaling actions: hiring dedicated mission operations personnel to run <strong className="font-medium text-involve-text">30+ missions/year</strong> (vs ~8 in 2024), developing the <strong className="font-medium text-involve-text">24h rapid-deployment package</strong> for defense customers, and acquiring additional ground equipment to enable <strong className="font-medium text-involve-text">simultaneous multi-site launches</strong>. None of these require new technology development — they are execution and logistics investments.
                        </SplitCell>
                    </div>
                </SplitCardGrid>

                <MilestoneTable rows={[
                    { date: '2024 Q2', name: 'First commercial contract', desc: 'Paid EO mission — first external revenue', badge: <Badge label="Complete" style="green" /> },
                    { date: '2024 Q3', name: '1,285 km² Rome coverage', desc: 'Largest single-mission area coverage to date — validated predictive nav capability', badge: <Badge label="Complete" style="green" /> },
                    { date: '2025 Q2', name: 'MoD contract award', desc: '€2M Italian Ministry of Defense contract — defense vertical entry', badge: <Badge label="Complete" style="green" /> },
                    { date: '2026 Q1', name: '24h rapid-deploy protocol', desc: 'Full standard operating procedure and kit for <24h from tasking to airborne', badge: <Badge label="In progress" style="blue" /> },
                    { date: '2026 Q3', name: '30 missions / year tempo', desc: 'Ops team and logistics scaled to support 30+ missions per calendar year', badge: <Badge label="Planned" style="amber" /> },
                    { date: '2027 Q1', name: 'Multi-site concurrent launches', desc: 'Two simultaneous Stratorelay® missions from independent launch sites', badge: <Badge label="Planned" style="amber" /> },
                    { date: '2027 Q4', name: 'International deployment', desc: 'First out-of-Italy mission — NATO or ESA client geography', badge: <Badge label="Planned" style="amber" /> },
                ]} />
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16" />

            {/* §3 — STRATOSTATS v2 ROADMAP */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Stratostats® Programme"
                    title="Stratostats® — from days to months of endurance"
                    desc="v1 is the proven foundation; v2 unlocks the persistent mission market"
                />
                <BodyText>
                    Stratostats® v1 reached TRL 9 with 30+ commercial flights and over 100 test flights. It can station-keep for multi-day missions. <strong className="font-medium text-involve-text">Stratostats® v2</strong> is the programme that extends endurance from days to <strong className="font-medium text-involve-text">90+ days</strong> — the critical threshold for persistent ISR, long-range environmental monitoring, and sustained defense operations.
                </BodyText>
                <BodyText>
                    The v2 programme has four parallel workstreams: ACS upgrade (new compressor with higher duty cycle), EPS upgrade (larger battery capacity and solar area), Neurostar® v2 (refined RL model with longer-range wind prediction), and balloon envelope redesign (reduced gas permeability for multi-month inflation retention). TRL 7 is the current state — ground testing complete, initial flight tests underway.
                </BodyText>

                <div className="flex flex-col gap-[1px] bg-involve-border border border-involve-border my-8">
                    <VersionCard
                        versionLabel="Version 1"
                        name="Stratostats® v1"
                        nameColor="text-involve-green"
                        badges={<><Badge label="TRL 9" style="green" /><Badge label="Operational" style="cyan" /></>}
                        specs={[
                            { k: 'Endurance', v: 'Multi-day' },
                            { k: 'Station-keeping', v: '50 km · 90%' },
                            { k: 'Alt. adjustment', v: '±2 km · 1 m/s' },
                            { k: 'Power', v: '400W + 800Wh' },
                            { k: 'Flights', v: '30+ commercial' },
                        ]}
                        title="Proven baseline — the platform that established all commercial contracts"
                        body1="Stratostats® v1 validated the entire ACS concept, the gondola structure, the Neurostar® navigation core, and the ground operations protocol. It is the platform that flew the MoD contract entry missions and all commercial EO campaigns to date."
                        body2="v1 remains the primary defense platform through 2026 and continues to generate revenue. It does not require further development — the roadmap is to transition clients from v1 to v2 as v2 reaches TRL 9, unlocking longer mission profiles for the same operator workflow."
                    />
                    <VersionCard
                        accentTop
                        versionLabel="Version 2 — Active Development"
                        name="Stratostats® v2"
                        nameColor="text-involve-blue"
                        badges={<><Badge label="TRL 7" style="blue" /><Badge label="Target TRL 9 · 2027" style="amber" /></>}
                        specs={[
                            { k: 'Target endurance', v: '90+ days', highlight: true },
                            { k: 'Station-keeping', v: '50 km · 90%' },
                            { k: 'ACS', v: 'New compressor v2' },
                            { k: 'Power', v: '400W + 1,800Wh' },
                            { k: 'Envelope', v: 'Low-permeability film' },
                        ]}
                        title="Four parallel upgrades to reach 90-day persistence"
                        body1="v2 is not a redesign of v1 — it is a targeted upgrade across four subsystems that each limit long-duration operations. The ACS compressor is redesigned for a higher duty cycle, allowing more frequent altitude corrections over longer missions without motor wear. The EPS increases total battery capacity to 1,800 Wh and adds panel area to improve the solar charge balance at higher latitudes and winter sun angles."
                        body2="The balloon envelope switches to a lower gas permeability film to reduce helium/hydrogen leakage over months-long missions — the principal reason v1 is limited to days. The Neurostar® v2 navigation model is retrained with a longer-range wind forecast horizon (5–10 days vs 2–3 days in v1) to enable proactive trajectory planning for multi-week station-keeping."
                        deltas={[
                            { icon: '+', iconStyle: 'new', text: 'Low-permeability envelope film', sub: 'eliminates the primary duration limit of v1' },
                            { icon: '↑', iconStyle: 'up', text: 'ACS compressor v2', sub: 'higher duty cycle, optimized for sustained operation' },
                            { icon: '↑', iconStyle: 'up', text: 'EPS upgrade to 1,800 Wh total', sub: 'improved solar balance for long-duration missions' },
                            { icon: '↑', iconStyle: 'up', text: 'Neurostar® v2 — 10-day horizon', sub: 'extended forecast window enables proactive multi-week planning' },
                        ]}
                    />
                </div>

                <div className="grid grid-cols-2 gap-[1px] border border-involve-border bg-involve-border mt-0.5">
                    <ImagePlaceholder label="v2 ACS component" hint="New compressor unit or ballonet assembly on workbench — development phase hardware" className="h-[200px] border-none" />
                    <ImagePlaceholder label="v2 flight test" hint="Stratostats® v2 prototype at launch, or telemetry screen showing extended flight duration" className="h-[200px] border-none" />
                </div>

                <MilestoneTable rows={[
                    { date: '2024 Q4', name: 'Ground testing complete', desc: 'ACS v2 components bench-tested. EPS dual-bus validated. TRL 7 declared.', badge: <Badge label="Complete" style="green" /> },
                    { date: '2026 Q1', name: 'First v2 flight (7-day)', desc: 'First flight test with full v2 hardware stack targeting 7-day endurance', badge: <Badge label="In progress" style="blue" /> },
                    { date: '2026 Q2', name: '30-day endurance flight', desc: 'Validation flight targeting 30-day continuous station-keeping', badge: <Badge label="Planned" style="amber" /> },
                    { date: '2026 Q3', name: 'MoD v2 demonstration', desc: 'Extended persistence demonstration under Ministry of Defense evaluation protocol', badge: <Badge label="Planned" style="amber" /> },
                    { date: '2026 Q4', name: '90-day endurance flight', desc: 'Target endurance milestone — sustained station-keeping, full payload operation throughout', badge: <Badge label="Planned" style="amber" /> },
                    { date: '2027 Q1', name: 'TRL 9 certification', desc: 'Full operational certification — v2 enters commercial and defense service', badge: <Badge label="Planned" style="amber" /> },
                    { date: '2027 Q2', name: 'First v2 commercial mission', desc: 'First paying client mission on v2 — anticipated: ISR or extended monitoring contract', badge: <Badge label="Planned" style="amber" /> },
                ]} />

                <Callout>
                    <strong className="font-medium text-involve-text not-italic">Why 90 days matters:</strong> The defense and persistent-ISR market is structured around 90-day campaign cycles — the operational tempo of most military and border surveillance contracts. A platform that can station-keep for 90+ days without intervention matches the mission requirement natively. Below 30 days, customers must plan for platform swaps during a mission — significantly increasing operational complexity and cost. 90 days removes this barrier entirely.
                </Callout>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16" />

            {/* §4 — LOOONHIVE ROADMAP */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="LoonHive® Programme"
                    title="LoonHive® — building the stratospheric constellation"
                    desc="From single-platform to coordinated fleet: the long-range value creation programme"
                />
                <BodyText>
                    LoonHive® is the programme that transforms Involve Space from a platform company into a <strong className="font-medium text-involve-text">persistent stratospheric sensing network operator</strong>. It is the architecture for coordinating multiple Stratostats® units as a single intelligent fleet — with Neurostar® managing the joint flight plan to maximize coverage of a defined area while maintaining separation constraints and individual platform integrity.
                </BodyText>
                <BodyText>
                    The programme has two phases: <strong className="font-medium text-involve-text">simulation-first</strong> (running hundreds of coordination scenarios computationally to validate the optimization algorithm before expensive multi-balloon test flights), and <strong className="font-medium text-involve-text">incremental flight validation</strong> (2-balloon → 5-balloon → 10+ balloon flight series, each expanding the validated operational envelope). The first dual-balloon coordinated flight is planned for 2026.
                </BodyText>

                <DataTable
                    headers={['Fleet Stage', 'Platforms', 'Coverage Capability', 'Neurostar® Mode', 'Primary Market', 'Timeline']}
                    rows={[
                        ['Stage 0 — Single', '1 × Stratostats®', '50 km radius persistent', 'Single-agent RL', 'ISR · Persistent EO · IOD', <Badge label="Operational now" style="green" />],
                        ['Stage 1 — Dual', '2 × Stratostats®', 'Overlapping zones · redundant coverage', '2-agent coordination · separation constraints', 'Redundant ISR · Handoff coverage', <Badge label="2026 Q2–Q3" style="amber" />],
                        ['Stage 2 — Mini-fleet', '3–10 platforms', 'Regional area · 200–1,000 km²', 'Fleet optimizer (quantum-inspired)', 'Regional monitoring · Multi-target ISR', <Badge label="2027 Q1–Q2" style="amber" />],
                        ['Stage 3 — Regional', '10–50 platforms', 'Continental scale · persistent', 'Full LoonHive® routing', 'National defense · Continental EO', <Badge label="2027–2028" style="purple" />],
                        ['Stage 4 — Global infra.', '50–150+ platforms', 'Multi-theater · global domains', 'Adaptive re-tasking · multi-client', 'NATO · ESA · Allied defense', <Badge label="2029+" style="purple" />],
                    ]}
                />

                <SplitCardGrid>
                    <div className="border-t-2 border-involve-amber">
                        <SplitCell label="The coordination problem" title="Why classical solvers fail at fleet scale">
                            Each balloon in the fleet must be assigned an altitude trajectory that maximizes joint coverage while maintaining safe separation. For N balloons across M altitude levels, the joint action space grows as <strong className="font-medium text-involve-text">M^N</strong>. At 10 balloons and 10 altitude levels, this is 10 billion combinations. Classical solvers explore this space exhaustively — taking <strong className="font-medium text-involve-text">11 days</strong> for 150 balloons on modern hardware.
                        </SplitCell>
                    </div>
                    <div className="bg-involve-bg2 border-t-2 border-involve-blue md:border-t border-involve-border">
                        <SplitCell label="Neurostar® fleet optimizer" title="QUBO reformulation + quantum-inspired solver">
                            The Neurostar® fleet module reformulates the coordination problem as a <strong className="font-medium text-involve-text">Quadratic Unconstrained Binary Optimization (QUBO)</strong> — amenable to variational quantum and quantum-inspired solvers. Running on GPU-accelerated hardware with a simulated annealing + variational eigensolver approach, the same 150-balloon problem solves in <strong className="font-medium text-involve-text">minutes</strong>. This is not a marginal speedup — it is the difference between the fleet being operationally plannable and unmanageable.
                        </SplitCell>
                    </div>
                </SplitCardGrid>

                <MilestoneTable rows={[
                    { date: '2025 Q3', name: 'Simulation framework complete', desc: 'Full LoonHive® simulation environment validated with synthetic wind data — 500+ scenarios run', badge: <Badge label="Complete" style="green" /> },
                    { date: '2025 Q4', name: 'QUBO optimizer validated', desc: 'Quantum-inspired optimizer benchmarked: 150-balloon planning in minutes vs 11 days classical', badge: <Badge label="Complete" style="green" /> },
                    { date: '2026 Q2', name: '2-balloon coordinated flight', desc: 'First real-world dual-balloon coordination — Neurostar® managing both platforms simultaneously', badge: <Badge label="Planned" style="amber" /> },
                    { date: '2026 Q4', name: '2-balloon extended mission', desc: 'Dual-platform mission covering continuous handoff zone — persistent coverage demonstration', badge: <Badge label="Planned" style="amber" /> },
                    { date: '2027 Q1', name: '5-balloon mini-fleet', desc: 'Five simultaneously coordinated Stratostats® — regional coverage area validated in flight', badge: <Badge label="Planned" style="amber" /> },
                    { date: '2027 Q3', name: 'First commercial fleet contract', desc: 'Customer contract for multi-balloon persistent coverage — first LoonHive® revenue', badge: <Badge label="Projected" style="purple" /> },
                    { date: '2028', name: '10+ platform constellation', desc: 'Regional network — continental coverage capability for NATO / ESA market entry', badge: <Badge label="Projected" style="purple" /> },
                ]} />

                <ImagePlaceholder
                    label="LoonHive® simulation visualization"
                    hint="Pressure-colored altitude distribution map showing multi-balloon constellation over Europe — the wind layer visualization from Neurostar® sim output"
                    className="h-[240px] mt-1"
                />
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16" />

            {/* §5 — MANUFACTURING */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Manufacturing"
                    title="Manufacturing readiness and supply chain"
                    desc="Scaling from prototype production to series manufacturing alongside the platform roadmap"
                />
                <BodyText>
                    The platform roadmap is tightly coupled to manufacturing readiness. Stratorelay® and Stratostats® v1 are produced in low-rate series production using a combination of in-house assembly and specialized external suppliers. The v2 programme and LoonHive® fleet scaling require a transition to a higher-volume production model — the Series A investment allocates resources specifically for this transition.
                </BodyText>

                <DataTable
                    headers={['Component', 'Current Source', 'Production Rate', 'Scaling Path', 'Risk Level']}
                    rows={[
                        ['Balloon envelope', 'External specialist supplier', '~10–15/year', 'Second supplier qualification for fleet programme', <Badge label="Medium" style="amber" />],
                        ['ACS compressor unit', 'NablaWave partnership', '5–10/year', 'Volume agreement with NablaWave · in-house assembly', <Badge label="Medium" style="amber" />],
                        ['Gondola structure', 'In-house (composites)', '10/year', 'Jig tooling investment → 30+/year capacity', <Badge label="Low" style="green" />],
                        ['OBC + electronics', 'In-house assembly (COTS + custom PCB)', '10–15/year', 'PCB contract manufacturer for volume runs', <Badge label="Low" style="green" />],
                        ['EPS (battery packs)', 'External battery supplier', '10–15/year', 'Qualified alternate supplier already identified', <Badge label="Low" style="green" />],
                        ['Telecom module', 'Commercial satellite terminal', 'N/A — COTS', 'No change required — volume pricing negotiation', <Badge label="Low" style="green" />],
                        ['Payload interfaces', 'In-house fabrication', 'Per-mission', 'Standardized adapter kit → reduced per-mission effort', <Badge label="Low" style="green" />],
                    ]}
                />

                <Callout>
                    <strong className="font-medium text-involve-text not-italic">Key supply chain constraint:</strong> The balloon envelope and ACS compressor are the two components that constrain production rate. Both depend on specialized external suppliers. The Series A programme includes qualification of a second envelope supplier and a volume pricing agreement with NablaWave — removing the two primary supply chain bottlenecks before the LoonHive® fleet phase requires 10+ units per year.
                </Callout>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16" />

            {/* §6 — RISK REGISTER */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Risk Analysis"
                    title="Technical and programme risks"
                    desc="Known risks across the three platform programmes with mitigation approaches"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-involve-border border border-involve-border my-8">
                    <RiskCard
                        title="v2 envelope gas retention"
                        severity="amber"
                        body="The new low-permeability envelope film must retain gas for 90+ days in the stratospheric environment — UV radiation, extreme temperature cycling, and mechanical stress from altitude changes. Film performance in long-duration conditions is only partially validated at ground level."
                        mitigation="Accelerated aging tests underway. Flight test programme designed to incrementally validate 7 → 30 → 90 day thresholds before committing to full commercial deployment."
                    />
                    <RiskCard
                        title="ACS duty cycle at 90 days"
                        severity="amber"
                        body="The compressor must operate intermittently across a 90-day mission. Motor wear, bearing lubrication behaviour, and thermal cycling at stratospheric temperatures over this duration have not been fully characterized in flight."
                        mitigation="NablaWave has extended the motor's operational specification based on modified lubrication. Redundant valve actuator ensures descent capability even if compressor fails. Flight validation is the definitive test."
                    />
                    <RiskCard
                        title="Neurostar® wind forecast accuracy"
                        severity="green"
                        body="Station-keeping performance depends on the accuracy of wind layer forecasts from ECMWF and onboard sensors. Forecast errors accumulate over longer missions, and in anomalous meteorological conditions the RL agent may have insufficient information to maintain position."
                        mitigation="Deterministic algorithm always runs in parallel as fallback. v2 extends the forecast horizon to 10 days and includes an uncertainty estimator that widens the station-keeping budget in low-confidence conditions."
                    />
                    <RiskCard
                        title="LoonHive® first coordinated flight"
                        severity="amber"
                        body="The dual-balloon coordinated flight is the first time the LoonHive® coordination algorithm will be tested in real-world conditions. Simulation has validated the approach, but atmospheric variability and communication latency may produce unexpected behaviours."
                        mitigation="Both balloons carry full independent safety systems. Ground override command available at all times. First dual-flight uses conservative separation margins 3× the operational minimum."
                    />
                    <RiskCard
                        title="Regulatory airspace approval"
                        severity="green"
                        body="Multi-balloon operations may require new airspace coordination frameworks with national aviation authorities designed around single-vehicle NOTAM filings. Some jurisdictions may require special authorization for fleet operations."
                        mitigation="Legal team engaged with ENAC (Italy) and Eurocontrol on fleet operations framework. First dual-flight planned for uncongested airspace. ESA and EDA relationships provide pathway for regulatory fast-tracking."
                    />
                    <RiskCard
                        title="Envelope supplier capacity"
                        severity="green"
                        body="Current envelope supplier can supply approximately 15 units per year. Fleet programme requires 30+ by 2027. Single-source dependency creates risk if supplier encounters production or quality issues."
                        mitigation="Second supplier qualification already scoped in Series A plan. Existing supplier informed of volume growth trajectory. Inventory buffer planned for Q4 2026 build-up before fleet programme ramp."
                    />
                </div>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16" />

            {/* §7 — COMPETITIVE DIFFERENTIATION */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Market Position"
                    title="How the roadmap creates competitive distance"
                    desc="Each milestone widens the gap against HAPS competitors and satellite alternatives"
                />
                <BodyText>
                    The Stratostats® v2 and LoonHive® programmes are not just product upgrades — they are strategic moat-widening events. Each TRL step creates a new capability threshold that competitors must independently cross. The progression from single-platform to fleet is particularly hard to replicate: it requires not just more hardware, but a fleet coordination algorithm and a manufacturing scale-up that takes years to build and validate.
                </BodyText>

                <DataTable
                    headers={['Capability Milestone', 'Unlocked by', 'New market segment', 'Competitor status']}
                    rows={[
                        ['Multi-day station-keeping', 'Stratostats® v1 (TRL 9)', 'Persistent ISR · Defense contract entry', 'Only Google Loon (now closed) at comparable TRL — no active HAPS competitor at commercial level'],
                        ['Sub-€3k mission cost', 'Stratorelay® (TRL 9)', 'Commercial EO · IOD rideshare · rapid deploy', 'No competitor in stratospheric segment at this cost point; drone alternatives cannot reach altitude'],
                        ['90-day endurance', 'Stratostats® v2 (TRL 9, target 2027)', 'Persistent defense · Extended maritime ISR · Climate monitoring', 'No public competitor has demonstrated 90-day HAPS endurance; HAB programmes largely academic'],
                        ['Multi-balloon coordination', 'LoonHive® Stage 1 (2026)', 'Wide-area coverage · Redundant ISR · Fleet services', 'No active commercial HAPS operator has demonstrated coordinated multi-balloon flight'],
                        ['Continental-scale network', 'LoonHive® Stage 3 (2027–28)', 'National defense · ESA contracts · NATO frameworks', 'Google Loon programme was the only prior comparable — and it shut down'],
                    ]}
                />

                <RefNote>
                    Full competitive landscape analysis — positioning against satellite EO (Maxar, Planet), HAPS startups (Sceye, SoftBank HAPSMobile), and drone-based alternatives — is in the <strong className="font-medium">Competitive Analysis</strong> document. TRL status detail and subsystem-level maturity assessment is in <strong className="font-medium">TRL Status (IS-DR-07)</strong>.
                </RefNote>
            </ContentBlock>
        </div>
    );
}
