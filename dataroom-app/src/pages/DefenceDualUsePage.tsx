import React from 'react';
import {
    DocHeader,
    SectionHeader,
    BodyText,
    ContentBlock,
} from '../components/ui/core';

function Callout({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'green' | 'amber' }) {
    const color = variant === 'green' ? 'border-green-400/40 bg-green-400/5 text-green-400/80'
        : variant === 'amber' ? 'border-amber-400/40 bg-amber-400/5 text-amber-400/80'
            : 'border-blue-400/30 bg-blue-400/5 text-involve-muted';
    return <div className={`my-6 border-l-2 p-4 text-[0.8rem] font-light leading-relaxed ${color}`}>{children}</div>;
}

function RefNote({ children }: { children: React.ReactNode }) {
    return <p className="mt-8 text-[0.68rem] font-mono text-involve-dim leading-relaxed border-t border-involve-border pt-4">{children}</p>;
}

/* ── Local primitives ───────────────────────────────────────────── */
const StatBar4: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-4 gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
interface StatCellProps { val: string; valColor?: string; label: string; sub?: string; }
const StatCell: React.FC<StatCellProps> = ({ val, valColor = 'text-involve-text', label, sub }) => (
    <div className="bg-involve-panel hover:bg-involve-bg2 transition-colors p-6">
        <div className={`text-[1.8rem] font-semibold tracking-tight leading-none mb-1 ${valColor}`}>{val}</div>
        <div className="font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim leading-relaxed">{label}</div>
        {sub && <div className="text-[0.7rem] text-involve-dim mt-1">{sub}</div>}
    </div>
);

const CardGrid2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-2 gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
const CardGrid3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-3 gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
interface GCardProps { num: string; title: string; stat?: React.ReactNode; accent?: string; children: React.ReactNode; }
const GCard: React.FC<GCardProps> = ({ num, title, stat, accent, children }) => (
    <div className={`bg-involve-panel hover:bg-involve-bg2 transition-colors p-6 ${accent || ''}`}>
        <span className="font-mono text-[0.6rem] text-blue-400 tracking-widest mb-2 block">{num}</span>
        <div className="text-[0.88rem] font-semibold text-involve-text mb-2 tracking-tight leading-snug">{title}</div>
        <div className="text-[0.77rem] font-light text-involve-muted leading-relaxed">{children}</div>
        {stat && <div className="mt-4 pt-3 border-t border-involve-border font-mono text-[0.62rem] text-involve-dim leading-relaxed">{stat}</div>}
    </div>
);

const UsecaseGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-2 gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
interface UcCardProps { title: string; badge: React.ReactNode; accent: string; why: React.ReactNode; constraint: React.ReactNode; fullWidth?: boolean; children: React.ReactNode; }
const UcCard: React.FC<UcCardProps> = ({ title, badge, accent, why, constraint, fullWidth, children }) => (
    <div className={`bg-involve-panel hover:bg-involve-bg2 transition-colors p-6 flex flex-col gap-2 ${accent} ${fullWidth ? 'col-span-2' : ''}`}>
        <div className="flex items-start justify-between gap-4 mb-1">
            <div className="text-[0.9rem] font-semibold text-involve-text tracking-tight leading-snug">{title}</div>
            {badge}
        </div>
        <div className="text-[0.78rem] font-light text-involve-muted leading-relaxed flex-1">{children}</div>
        <div className="mt-2 pl-3 border-l-2 border-blue-400/30 bg-blue-400/[0.04] p-3 text-[0.75rem] text-involve-muted">{why}</div>
        <div className="pl-3 border-l-2 border-amber-400/25 bg-amber-400/[0.05] p-3 text-[0.73rem] text-involve-dim">{constraint}</div>
    </div>
);

const Badge: React.FC<{ color: string; children: string }> = ({ color, children }) => (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[0.58rem] tracking-widest px-2 py-0.5 rounded-sm whitespace-nowrap ${color}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-current" />{children}
    </span>
);

const ComplianceTrack: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex flex-col gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
interface CrRowProps { horizon: string; sub: string; build: string; deliverables: string; }
const CrRow: React.FC<CrRowProps> = ({ horizon, sub, build, deliverables }) => (
    <div className="grid grid-cols-[190px_220px_1fr] bg-involve-panel hover:bg-involve-bg2 transition-colors">
        <div className="p-4 border-r border-involve-border flex flex-col gap-1 justify-center">
            <span className="font-semibold text-[0.82rem] text-involve-text">{horizon}</span>
            <span className="font-mono text-[0.58rem] text-involve-dim tracking-widest">{sub}</span>
        </div>
        <div className="p-4 border-r border-involve-border text-[0.79rem] font-light text-involve-muted leading-relaxed"><strong className="text-involve-text font-medium">{build}</strong></div>
        <div className="p-4 text-[0.79rem] font-light text-involve-muted leading-relaxed">{deliverables}</div>
    </div>
);

const PhaseList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex flex-col gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
const PhaseRow: React.FC<{ label: string; sub: string; labelColor: string; children: React.ReactNode }> = ({ label, sub, labelColor, children }) => (
    <div className="grid grid-cols-[160px_1fr] bg-involve-panel hover:bg-involve-bg2 transition-colors">
        <div className={`p-4 border-r border-involve-border flex flex-col gap-1 justify-center font-mono text-[0.62rem] tracking-widest uppercase ${labelColor}`}>
            <span className="font-semibold text-[0.84rem] font-sans">{label}</span>
            <span className="text-involve-dim">{sub}</span>
        </div>
        <div className="p-4 text-[0.81rem] font-light text-involve-muted leading-relaxed">{children}</div>
    </div>
);

const PipelineList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex flex-col gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
const PlRow: React.FC<{ label: string; sub: string; children: React.ReactNode }> = ({ label, sub, children }) => (
    <div className="grid grid-cols-[200px_1fr] bg-involve-panel hover:bg-involve-bg2 transition-colors">
        <div className="p-4 border-r border-involve-border flex flex-col gap-1 justify-center">
            <span className="font-semibold text-[0.82rem] text-involve-text leading-snug">{label}</span>
            <span className="font-mono text-[0.58rem] text-involve-dim tracking-widest">{sub}</span>
        </div>
        <div className="p-4 text-[0.8rem] font-light text-involve-muted leading-relaxed">{children}</div>
    </div>
);

const FundingBand: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-4 gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
const FbCell: React.FC<{ val: string; valColor: string; label: string; sub: string }> = ({ val, valColor, label, sub }) => (
    <div className="bg-involve-panel hover:bg-involve-bg2 transition-colors p-5">
        <div className={`text-[1.5rem] font-semibold tracking-tight leading-none mb-1 ${valColor}`}>{val}</div>
        <div className="font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim leading-relaxed">{label}</div>
        <div className="text-[0.7rem] text-involve-dim mt-1">{sub}</div>
    </div>
);

const PartnerTbl: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex flex-col gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
const PtRow: React.FC<{ mode: string; modeColor: string; where: React.ReactNode; why: React.ReactNode }> = ({ mode, modeColor, where, why }) => (
    <div className="grid grid-cols-[130px_1fr_1fr] bg-involve-panel hover:bg-involve-bg2 transition-colors">
        <div className={`p-4 border-r border-involve-border font-bold text-[0.85rem] flex items-center ${modeColor}`}>{mode}</div>
        <div className="p-4 border-r border-involve-border text-[0.79rem] font-light text-involve-muted leading-relaxed">{where}</div>
        <div className="p-4 text-[0.79rem] font-light text-involve-muted leading-relaxed">{why}</div>
    </div>
);

const RiskGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-2 gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
interface RiskCardProps { title: string; badge: React.ReactNode; mitigation: React.ReactNode; children: React.ReactNode; }
const RiskCard: React.FC<RiskCardProps> = ({ title, badge, mitigation, children }) => (
    <div className="bg-involve-panel hover:bg-involve-bg2 transition-colors p-6">
        <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="font-semibold text-[0.88rem] text-involve-text tracking-tight">{title}</span>
            {badge}
        </div>
        <div className="text-[0.77rem] font-light text-involve-muted leading-relaxed">{children}</div>
        <div className="mt-3 p-3 bg-green-400/10 border-l-2 border-green-400/35 text-[0.74rem] text-green-400/85 leading-relaxed">{mitigation}</div>
    </div>
);

const ImplBand: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex flex-col gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
const ImplRow: React.FC<{ title: string; topAccent?: string; children: React.ReactNode }> = ({ title, topAccent, children }) => (
    <div className={`grid grid-cols-[240px_1fr] bg-involve-panel hover:bg-involve-bg2 transition-colors ${topAccent || ''}`}>
        <div className="p-5 border-r border-involve-border font-semibold text-[0.84rem] text-involve-text leading-snug flex items-start">{title}</div>
        <div className="p-5 text-[0.8rem] font-light text-involve-muted leading-relaxed">{children}</div>
    </div>
);

const SubSec: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="font-mono text-[0.62rem] text-involve-dim tracking-widest uppercase mt-10 mb-3 pb-2 border-b border-involve-border-med">{children}</div>
);

const Diag: React.FC<{ caption: string; children: React.ReactNode }> = ({ caption, children }) => (
    <div className="my-8 bg-involve-default border border-involve-border-med p-8 overflow-x-auto">
        {children}
        <div className="font-mono text-[0.6rem] text-involve-dim text-center mt-5 tracking-tight leading-relaxed">{caption}</div>
    </div>
);

/* ── Comparison table ───────────────────────────────────────────── */
const CompTable: React.FC = () => (
    <div className="border border-involve-border-med overflow-x-auto my-8">
        <table className="w-full text-[0.78rem] border-collapse">
            <thead>
                <tr className="bg-involve-bg2 border-b border-involve-border-med">
                    <th className="p-3 text-left font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim">Dimension</th>
                    <th className="p-3 text-left font-mono text-[0.6rem] tracking-widest uppercase text-blue-400">Stratospheric — Involve</th>
                    <th className="p-3 text-left font-mono text-[0.6rem] tracking-widest uppercase text-amber-400">Satellite EO</th>
                    <th className="p-3 text-left font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim">Drones / Tactical UAS</th>
                </tr>
            </thead>
            <tbody>
                {[
                    ['Persistence', 'Multi-day to multi-month goal for Stratostats®; v2 roadmap targets ~90 days average duration; platform designed for continuous station-keeping', 'Persistent presence in orbit, but time-on-target constrained by orbital mechanics and tasking queue — fixed revisit interval over any given point', 'Limited endurance per sortie (hours); requires rotation, basing, and logistics support for sustained coverage'],
                    ['Revisit over area of interest', 'Continuous or high-frequency over a defined theatre; rapid retasking with low latency — no wait for next orbital pass', 'Revisit depends on constellation size/orbit and tasking priorities; high-frequency tasking is expensive or requires large constellations', 'High revisit locally during sortie, but limited time and range; each sortie covers a constrained area'],
                    ['Coverage footprint', 'Wide-area footprint (hundreds of km class) at altitude — ~505 km horizon at 20 km, ~619 km at 30 km', 'Wide area, global coverage building blocks; single pass covers large swath, but coverage density depends on constellation', 'Localised coverage; designed for tactical inspection, not broad-area persistent monitoring'],
                    ['Latency', 'Low latency for local collection and downlink — dependent on communications link quality; near-real-time feasible', 'Ranges from low to high depending on data delivery chain and tasking pipeline; non-direct tasking can add significant delay', 'Low latency when communications are available locally; limited by comms range and operator proximity'],
                    ['Regulatory constraints', 'Airspace authorisations, NOTAM/coordination, high-altitude balloon procedures; ICAO Annex 2 obligations; no EU-level higher airspace regulation yet — national frameworks apply', 'Orbital licensing; imagery export restrictions vary by jurisdiction; generally established procurement pathways', 'UAS regulations (EASA/national frameworks), operational airspace restrictions; complex for cross-border operations'],
                    ['Data governance', 'Engineered for sovereign deployments and controlled dissemination; separated civil/government workloads; EU-region hosting with customer-controlled key management; aligned to GDPR and EUCI-adjacent controls', 'Increasingly security-sensitive delivery rules in EU context; Copernicus restricted data workflows; licensing complexity for sensitive applications', 'Typically tactical, local governance — still subject to privacy rules and proportionality requirements'],
                ].map(([dim, strat, sat, drone]) => (
                    <tr key={dim} className="border-b border-involve-border hover:bg-blue-400/[0.03] transition-colors">
                        <td className="p-4 font-semibold text-involve-text text-[0.8rem] align-top whitespace-nowrap">{dim}</td>
                        <td className="p-4 text-blue-400/75 font-light leading-relaxed align-top">{strat}</td>
                        <td className="p-4 text-involve-muted font-light leading-relaxed align-top">{sat}</td>
                        <td className="p-4 text-involve-muted font-light leading-relaxed align-top">{drone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

/* ── Main component ─────────────────────────────────────────────── */
export default function DefenceDualUsePage() {
    return (
        <div>
            <DocHeader
                breadcrumb="03. Defence & Dual Use"
                title="Defence & Dual-Use"
                titleStrong="Strategic Positioning Document"
                subtitle="Involve Space's thesis, positioning, and operating framework as a European Earth Intelligence infrastructure provider serving civil and defence markets with a single sovereign-grade stack. Covers the dual-use architecture, all defence use cases, regulatory and compliance framework, security and data sovereignty model, B2G procurement pathway, competitive context, and risk register."
                meta={[
                    { label: 'Document', value: 'IS-DR-DEF-01' },
                    { label: 'Prepared', value: '25 February 2026' },
                    { label: 'Classification', value: 'Series A Data Room — Confidential' },
                    { label: 'Version', value: '1.0' },
                ]}
            />

            <div className="max-w-[860px] mx-auto px-14">

                {/* §1 Executive Defence Thesis */}
                <ContentBlock>
                    <SectionHeader eyebrow="Executive Defence Thesis" title="Earth Intelligence infrastructure is inherently dual-use" desc="The same persistent sensing, secure data processing, and decision support capabilities serve both civil and public-sector missions — this is physics, not positioning" />
                    <BodyText>Earth Intelligence sits at the convergence of persistent sensing, secure data processing, and decision support. These capabilities are <strong>intrinsically dual-use</strong> because the same physical phenomena and operational needs exist across civil and public-sector missions: border integrity, maritime safety, disaster response, environmental monitoring, and critical infrastructure protection all rely on timely geospatial situational awareness.</BodyText>
                    <BodyText>Involve is not a weapons manufacturer. We deliver <strong>stratospheric sensing infrastructure and Earth intelligence services</strong>: data collection at altitude, secure transmission, processing, and analytics outputs configurable for civil and government users. Our dual-use posture is an infrastructure posture — we build a persistent sensing layer and a secure analytics layer, and we integrate into institutional workflows where appropriate, without becoming a weapons prime.</BodyText>
                    <Callout><strong>Infrastructure, not weapons:</strong> In our product structure, we explicitly position ourselves as service-centric — "we do not sell hardware or software; instead, we deliver high-value services and data" — complemented by custom missions for clients with specific operational requirements, including defence and security users.</Callout>
                    <StatBar4>
                        <StatCell val="€343bn" valColor="text-involve-text" label="EU Member States defence expenditure 2024" sub="→ €381bn estimated 2025 (EDA, constant 2024 prices)" />
                        <StatCell val="€106bn" valColor="text-blue-400" label="EU defence investment 2024" sub="+42% vs 2023 · €130bn projected 2025" />
                        <StatCell val="€7.95bn" valColor="text-cyan-400" label="European Defence Fund 2021–2027" sub="€2.7bn research · €5.3bn capability development" />
                        <StatCell val="€14.9bn" valColor="text-amber-400" label="EU Space Programme 2021–2027" sub="Copernicus €5.4bn · IRIS² €2.4bn (2023–2027)" />
                    </StatBar4>
                    <SubSec>Why Stratospheric Platforms Represent Strategic Sensing Infrastructure</SubSec>
                    <BodyText>Our platforms operate in the stratosphere at typically 20–30 km altitude, engineered for persistent monitoring and rapid tasking. The stratosphere provides a distinct operational sweet spot between drones and satellites: close enough to deliver very high-resolution imagery and low latency, yet high enough to enable wide-area coverage and persistence above most weather and conventional air traffic.</BodyText>
                    <Diag caption="FIG 1 — Geometric horizon distance at stratospheric altitudes. A single platform at 20 km has a line-of-sight horizon of ~505 km; at 30 km ~619 km. Approximate calculation based on Earth radius 6,371 km.">
                        <svg viewBox="0 0 820 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 820, display: 'block', margin: '0 auto' }}>
                            <path d="M 80 180 Q 410 100 740 180" fill="none" stroke="rgba(52,208,122,0.25)" strokeWidth="2" />
                            <text x="410" y="196" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(52,208,122,0.35)" textAnchor="middle">Earth surface (r = 6,371 km)</text>
                            <circle cx="260" cy="80" r="6" fill="var(--blue,#3d9bff)" opacity="0.8" />
                            <line x1="260" y1="86" x2="160" y2="178" stroke="rgba(61,155,255,0.3)" strokeWidth="1" strokeDasharray="5 4" />
                            <line x1="260" y1="86" x2="360" y2="178" stroke="rgba(61,155,255,0.3)" strokeWidth="1" strokeDasharray="5 4" />
                            <text x="260" y="68" fontFamily="DM Mono,monospace" fontSize="8.5" fill="#3d9bff" textAnchor="middle">20 km altitude</text>
                            <text x="260" y="58" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(61,155,255,0.5)" textAnchor="middle">Horizon ~505 km</text>
                            <line x1="162" y1="186" x2="358" y2="186" stroke="rgba(61,155,255,0.3)" strokeWidth="1" />
                            <text x="260" y="198" fontFamily="DM Mono,monospace" fontSize="7.5" fill="rgba(61,155,255,0.4)" textAnchor="middle">~505 km line-of-sight</text>
                            <circle cx="560" cy="50" r="6" fill="#00c8e0" opacity="0.8" />
                            <line x1="560" y1="56" x2="430" y2="178" stroke="rgba(0,200,224,0.3)" strokeWidth="1" strokeDasharray="5 4" />
                            <line x1="560" y1="56" x2="692" y2="178" stroke="rgba(0,200,224,0.3)" strokeWidth="1" strokeDasharray="5 4" />
                            <text x="560" y="37" fontFamily="DM Mono,monospace" fontSize="8.5" fill="#00c8e0" textAnchor="middle">30 km altitude</text>
                            <text x="560" y="27" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(0,200,224,0.5)" textAnchor="middle">Horizon ~619 km</text>
                            <line x1="432" y1="186" x2="690" y2="186" stroke="rgba(0,200,224,0.3)" strokeWidth="1" />
                            <circle cx="80" cy="168" r="4" fill="rgba(238,241,246,0.2)" />
                            <text x="80" y="155" fontFamily="DM Mono,monospace" fontSize="7.5" fill="rgba(238,241,246,0.2)" textAnchor="middle">Drone</text>
                            <text x="80" y="145" fontFamily="Inter,sans-serif" fontSize="7" fill="rgba(238,241,246,0.15)" textAnchor="middle">&lt;5 km horizon</text>
                            <circle cx="740" cy="20" r="5" fill="rgba(240,160,32,0.4)" />
                            <text x="740" y="10" fontFamily="DM Mono,monospace" fontSize="7.5" fill="rgba(240,160,32,0.5)" textAnchor="middle">Satellite</text>
                            <text x="780" y="22" fontFamily="Inter,sans-serif" fontSize="7" fill="rgba(240,160,32,0.35)">400–600 km</text>
                            <text x="780" y="34" fontFamily="Inter,sans-serif" fontSize="7" fill="rgba(240,160,32,0.25)">Fixed orbit</text>
                        </svg>
                    </Diag>
                    <SubSec>Why European Sovereign Sensing Capacity Is Structurally Relevant</SubSec>
                    <BodyText>European demand for sovereign sensing capacity is not a transient political theme — it is institutionalised through budgets, programmes, and capability roadmaps. The EU Space Strategy for Security and Defence explicitly frames space as a "strategic domain" and calls for strengthening resilience and developing space-enabled services for security and defence.</BodyText>
                    <FundingBand>
                        <FbCell val="€7.95bn" valColor="text-blue-400" label="European Defence Fund 2021–2027" sub="Collaborative R&D + capability development · SME participation incentives" />
                        <FbCell val="€5.42bn" valColor="text-cyan-400" label="Copernicus (EU Space Programme)" sub="Including restricted data workflows for security-sensitive users" />
                        <FbCell val="€2.4bn" valColor="text-green-400" label="IRIS² EU contribution 2023–2027" sub="Secure connectivity · authorised users · security-critical missions" />
                        <FbCell val="€684m" valColor="text-amber-400" label="NATO ISR force ceilings 2024" sub="€264m NISRF + €420m AWACS · explicitly funded persistent ISR" />
                    </FundingBand>
                </ContentBlock>

                {/* §2 Dual-Use Positioning */}
                <ContentBlock>
                    <SectionHeader eyebrow="Dual-Use Framework" title="Civil and defence applications share the same stack" desc="Dual-use is not a marketing label — it is the natural operating mode of Earth Intelligence infrastructure" />
                    <BodyText>Our technical stack is inherently dual-use because the platform physics, payload class, and data pipeline are identical across missions. The stratospheric persistence, high revisit, and wide-area coverage characteristics are the same whether the customer is an energy utility, a coast guard, or a national intelligence directorate. Only the assurance level, access controls, and retention policies differ — not the underlying infrastructure.</BodyText>
                    <CardGrid2>
                        <GCard num="CIVIL USE CASES" title="Infrastructure-grade monitoring for asset-intensive industries" accent="border-t-2 border-green-400" stat={<><em className="text-blue-400 not-italic">Flywheel role:</em> civil missions build operational maturity, telemetry, and dataset depth that improve performance on higher-assurance deployments</>}>
                            Infrastructure monitoring, environmental assessment, precision agriculture, rapid mapping campaigns, and smart city operations. These missions generate high operational cadence, commercial datasets that scale CLEAR's training corpus, and compliance evidence that de-risks government procurement pathways.
                        </GCard>
                        <GCard num="DEFENCE & SECURITY USE CASES" title="Sovereign persistent ISR and situational awareness services" accent="border-t-2 border-blue-400" stat={<><em className="text-blue-400 not-italic">Sovereign advantage:</em> European company · in-country platforms · data custody · no foreign IP dependency</>}>
                            Surveillance, border and maritime monitoring, critical infrastructure protection, communications-adjacent missions, and persistent ISR for military operations. These missions carry higher ACV, longer contract durations, and strategic supplier positioning.
                        </GCard>
                    </CardGrid2>
                    <SubSec>Risk Mitigation Benefits of the Dual-Use Model</SubSec>
                    <CardGrid2>
                        <GCard num="BENEFIT 01" title="Diversified demand across procurement cycles">Civil and governmental procurement cycles are not correlated. If defence investment is rising but specific programmes are delayed, commercial contracts maintain ARR. European defence spending is structurally increasing but remains cyclical at programme level — dual-use reduces concentration risk on any single budget line.</GCard>
                        <GCard num="BENEFIT 02" title="Platform utilisation and operational learning curves">Persistent civil missions generate operational telemetry, dataset growth, and reliability improvements that <strong>improve readiness for higher-assurance deployments</strong> — including government missions. Each commercial flight hour adds to the operational baseline that defence customers are buying when they select Involve.</GCard>
                        <GCard num="BENEFIT 03" title="Compliance maturity through civil-scale operations">Operating at scale in civil contexts forces robust aviation safety, data protection, and cybersecurity controls — which are prerequisites for government procurement pathways. <strong>Civil compliance is not a diluted version of defence compliance</strong>; it is the foundational layer that qualifies Involve for the next tier of assurance requirements.</GCard>
                        <GCard num="BENEFIT 04" title="End-to-end capability aligned to institutional expectations">Institutional actors — EU DGs, MoDs, NATO command structures — increasingly expect end-to-end capability with "space-enabled services" and secure dissemination. Involve's full-stack model (platform → data → CLEAR analytics) matches this requirement. Pure data vendors cannot deliver the analytics layer; pure analytics vendors cannot guarantee the data pipeline.</GCard>
                    </CardGrid2>
                </ContentBlock>

                {/* §3 Defence Use Cases */}
                <ContentBlock>
                    <SectionHeader eyebrow="Defence Use Cases" title="Seven mission domains — sensing and decision infrastructure, not weapon effects" desc="In every case, Involve's role is to provide the persistent collection, processing, and analytics layer — not kinetic or weapon system integration" />
                    <UsecaseGrid>
                        <UcCard title="ISR & Persistent Surveillance" badge={<Badge color="bg-blue-400/15 text-blue-400">Core domain</Badge>} accent="border-t-2 border-blue-400"
                            why={<><strong className="text-blue-400">Why stratosphere:</strong> Reduces observation gaps that satellite revisit cycles and drone endurance limits cannot close. Retaskable locally with low latency — continuous coverage over a defined theatre of interest.</>}
                            constraint={<><strong className="text-amber-400">Constraints:</strong> Airspace authorisation and coordination · payload power and bandwidth limits · weather and seasonal wind patterns · secure command, control, and dissemination requirements</>}>
                            Persistent ISR is a coverage problem, not a single-image problem. Decision makers need <strong>continuity, low latency, and the ability to retask rapidly</strong> when the situation evolves. Our Stratostats® architecture is explicitly designed for continuous, real-time data streams with high revisit at 20–30 km altitude, supported by autonomous wind-layer navigation via Neurostar®. NATO budgets and doctrine fund persistent ISR forces explicitly.
                        </UcCard>
                        <UcCard title="Border Monitoring" badge={<Badge color="bg-green-400/15 text-green-400">Active pipeline</Badge>} accent="border-t-2 border-green-400"
                            why={<><strong className="text-blue-400">Why stratosphere:</strong> Satellites provide wide coverage but weak continuous local persistence; drones provide local inspection but limited multi-day broad-area persistence and are subject to endurance constraints.</>}
                            constraint={<><strong className="text-amber-400">Constraints:</strong> Legal boundaries and privacy constraints in cross-border contexts · GDPR-aligned handling where imagery could include identifiable individuals · controlled access and data governance requirements</>}>
                            Border monitoring requires persistent detection of changes and events, not only periodic mapping. Our pipeline includes border monitoring discussions and projects, including engagement with the <strong>Italian Air Force</strong> for national border monitoring applications. Continuous observation enables detection of patterns and anomalies over time.
                        </UcCard>
                        <UcCard title="Maritime Domain Awareness" badge={<Badge color="bg-cyan-400/15 text-cyan-400">Active pipeline</Badge>} accent="border-t-2 border-cyan-400"
                            why={<><strong className="text-blue-400">Why stratosphere:</strong> Satellites provide periodic SAR/optical coverage with cloud and revisit constraints; drones provide strong local inspection but limited continuous multi-hundred-kilometre coverage.</>}
                            constraint={<><strong className="text-amber-400">Constraints:</strong> Launch and recovery logistics in maritime environments · jurisdictional airspace requirements · communications availability for sustained data backhaul over open ocean</>}>
                            Maritime awareness is a wide-area coverage challenge. Our commercial and government pipeline includes <strong>Mediterranean surveillance and maritime monitoring projects</strong>. A single platform at 30 km can provide line-of-sight horizon coverage of ~619 km over open water without the endurance and basing limitations of tactical drones.
                        </UcCard>
                        <UcCard title="Critical Infrastructure Protection" badge={<Badge color="bg-amber-400/15 text-amber-400">Commercial + defence</Badge>} accent="border-t-2 border-amber-400"
                            why={<><strong className="text-blue-400">Why stratosphere:</strong> Mid-layer advantage — higher persistence and coverage density than drones; lower latency and higher operational flexibility than satellites for a defined area of interest.</>}
                            constraint={<><strong className="text-amber-400">Constraints:</strong> Sensitive commercial data and national security-relevant locations require data segregation, encryption, and controlled access — particularly for government-adjacent facilities</>}>
                            Critical infrastructure protection is a monitoring and change detection problem: operators need <strong>early warning of anomalies, degradation, encroachments, and incidents</strong>. Our existing and pipeline activity includes infrastructure monitoring for pipelines, airports, roads, and critical infrastructure diligence with large industrial actors.
                        </UcCard>
                        <UcCard title="Tactical Augmentation of Satellite ISR" badge={<Badge color="bg-purple-400/15 text-purple-400">CLEAR integration</Badge>} accent="border-t-2 border-purple-400"
                            why={<><strong className="text-blue-400">Why stratosphere:</strong> Fills temporal coverage gaps between satellite passes; enables rapid retasking over a defined theatre without waiting for the next orbital window.</>}
                            constraint={<><strong className="text-amber-400">Constraints:</strong> Consistent georeferencing, processing pipeline governance, and licensing/security restrictions for sensitive or restricted EO datasets from third-party sources</>}>
                            In modern ISR architectures, the problem is not "satellites or aircraft" but multi-layer integration. Our CLEAR roadmap is designed to <strong>integrate stratospheric imagery with satellite imagery</strong> (Copernicus and commercial), creating a fused knowledge base for analytics and reporting.
                        </UcCard>
                        <UcCard title="Communications Relay, Disaster Response & Rapid Monitoring" badge={<Badge color="bg-red-400/15 text-red-400">Adjacent capability</Badge>} accent="border-t-2 border-red-400"
                            why={<><strong className="text-blue-400">Why persistence matters:</strong> Disaster response requires continuous coverage during the critical first 72-hour window — persistent platforms eliminate the gaps that scheduled satellite passes and limited drone endurance create.</>}
                            constraint={<><strong className="text-amber-400">Constraints:</strong> Relay missions require spectrum coordination and regulatory approvals; disaster deployments require expedited but compliant aviation coordination and GDPR-aligned data governance</>}>
                            High-altitude platforms are widely recognised as potential relay and resilient communications layers. We support custom missions including <strong>telecom coverage in remote areas and private, secure communications solutions</strong> for government and corporate clients, subject to regulatory compliance.
                        </UcCard>
                        <UcCard title="Strategic Monitoring: Supply Chain Resilience & Geopolitical Risk Detection" badge={<Badge color="bg-cyan-400/15 text-cyan-400">CLEAR-native</Badge>} accent="border-t-2 border-white/20" fullWidth
                            why={<><strong className="text-blue-400">Strategic monitoring:</strong> CLEAR is positioned to convert centimetre-level imagery into query-responsive intelligence, including automated reporting and multi-source integration for logistics nodes, energy corridors, and supply chain chokepoints.</>}
                            constraint={<><strong className="text-amber-400">Heightened scrutiny:</strong> Strategic monitoring raises ethical questions and requires strong internal controls — appropriate use guarantees, lawful processing, access audit trails, and avoidance of misuse. These controls are engineered into CLEAR's access governance model, not added as afterthoughts.</>}>
                            We treat strategic monitoring as a long-term downstream application of persistent EO and analytics. These use cases depend on robust governance and explainable analytics, because outputs may drive high-stakes decisions.
                        </UcCard>
                    </UsecaseGrid>
                </ContentBlock>

                {/* §4 Comparison Table */}
                <ContentBlock>
                    <SectionHeader eyebrow="Platform Comparison" title="Stratospheric systems vs satellites vs drones" desc="Six operational dimensions across three platform categories — where each wins and where trade-offs apply" />
                    <CompTable />
                </ContentBlock>

                {/* §5 Regulatory & Compliance */}
                <ContentBlock>
                    <SectionHeader eyebrow="Regulatory & Compliance" title="Multi-layer compliance framework" desc="Aviation · export controls · data protection · security governance — staged compliance build aligned to Series A scaling" />
                    <BodyText>We operate under a multi-layer compliance model: aviation and airspace compliance for flight operations; export controls for controlled items and technical assistance; and data protection and security governance for downstream services. Our approach is institutional-grade and staged — building compliance infrastructure in advance of the procurement requirements that will demand it.</BodyText>
                    <SubSec>Compliance Roadmap — Series A Execution Window</SubSec>
                    <ComplianceTrack>
                        <div className="grid grid-cols-[190px_220px_1fr] bg-involve-bg2 border-b border-involve-border-med">
                            <div className="p-3 font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim">Horizon</div>
                            <div className="p-3 font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim border-l border-involve-border">Compliance build</div>
                            <div className="p-3 font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim border-l border-involve-border">Practical deliverables</div>
                        </div>
                        <CrRow horizon="Immediate" sub="0–6 months" build="Export control governance baseline" deliverables="Controlled item classification procedure; end-user/end-use screening; sanctions screening; internal training; recordkeeping aligned to EU export control definitions including electronic transfer (Regulation EU 2021/821)" />
                        <CrRow horizon="Near-term" sub="6–18 months" build="Government procurement readiness" deliverables="Security-by-design evidence pack; operational compliance SOPs; audited data handling procedures aligned to GDPR and EUCI-adjacent controls where relevant; structured export control governance, classification playbooks, end-user screening, and licensing workflows" />
                        <CrRow horizon="Mid-term" sub="18–36 months" build="Multi-country scaling" deliverables="Cross-border licence playbooks; country-specific aviation and security requirements mapping; deployment templates for sovereign hosting and controlled dissemination; clearance-ready operating model for programmes where security requirements expand" />
                    </ComplianceTrack>
                    <CardGrid2>
                        <GCard num="EU DUAL-USE EXPORT CONTROL" title="Regulation (EU) 2021/821 — four practical implications" accent="border-t-2 border-red-400">
                            Export control assessment is not optional at scale and not limited to hardware. It can apply to: <strong>payload components</strong> meeting Annex I thresholds, <strong>encryption or high-performance processing</strong> components, <strong>technical assistance or software/technology transfer</strong> in cross-border contexts — including electronic transmission, and <strong>cyber-surveillance items</strong> not listed in Annex I, requiring due diligence and notification.
                        </GCard>
                        <GCard num="AIRSPACE & AVIATION REGULATION" title="Higher airspace operations — developing EU regulatory area" accent="border-t-2 border-amber-400">
                            EASA explicitly recognises higher airspace operations (20–40 km) as an emerging domain with no EU-level regulation yet in place. We have embedded operational competence in authorisation workflows and maintain active monitoring of regulatory developments. This is a core operational competence — persistent stratospheric services cannot scale without <strong>repeatable regulatory pathways</strong>.
                        </GCard>
                        <GCard num="GDPR & DATA PROTECTION" title="Personal data implications in urban, border, and disaster contexts" accent="border-t-2 border-blue-400">
                            Our baseline approach: data minimisation aligned to mission objectives, defined retention schedules and deletion policies, role-based access audit trails controlled dissemination, and government-grade segregation and sovereign hosting on demand.
                        </GCard>
                        <GCard num="SECURITY CLEARANCE PATHWAYS" title="Building a clearance-ready operating model for EUCI-adjacent programmes" accent="border-t-2 border-purple-400">
                            We do not claim classified operations. Our objective is to build a <strong>clearance-ready operating model</strong> so that we can participate in programmes where security requirements expand over time — not to retroactively qualify after a contract is awarded.
                        </GCard>
                    </CardGrid2>
                    <Callout variant="amber"><strong>Defence procurement requirement:</strong> MoDs and security agencies commonly require evidence of security management and information assurance, supply chain integrity and continuity planning, controlled access processes, and contractual ability to operate within specific sovereign constraints. We approach this as a long-cycle enterprise procurement motion rather than a transactional sales motion.</Callout>
                </ContentBlock>

                {/* §6 Security & Data Sovereignty */}
                <ContentBlock>
                    <SectionHeader eyebrow="Security & Data Sovereignty" title="Security model — commercial workloads and government workloads by design" desc="Segregation at the infrastructure layer, not only the application layer — with a controlled escalation path in assurance levels" />
                    <CardGrid3>
                        <GCard num="PRINCIPLE 01" title="Segregation by design" accent="border-t-2 border-blue-400">Commercial workloads and datasets are separated from government workloads and datasets at the <strong>infrastructure and access layers</strong>, not only at the application layer. Government deployments have isolated storage, separate encryption key chains, and independent audit trails from commercial customer data.</GCard>
                        <GCard num="PRINCIPLE 02" title="Least privilege and auditability" accent="border-t-2 border-green-400">Government deployments require institutional-grade audit trails and strict access controls. RBAC, multi-factor authentication, compartmentalisation, and <strong>immutable audit logs</strong> are build-to-spec controls, not post-hoc add-ons.</GCard>
                        <GCard num="PRINCIPLE 03" title="Sovereignty options, not a fixed hosting choice" accent="border-t-2 border-amber-400"><strong>CLEAR is deployable in multiple sovereignty contexts</strong> — from commercial AWS/EU-region hosting to sovereign cloud providers to on-premise dedicated environments for sensitive deployments.</GCard>
                    </CardGrid3>
                    <SubSec>CLEAR Architecture — Security and Sovereignty Implications</SubSec>
                    <BodyText>CLEAR is defined internally as "Cloud-based LLM-enhanced Earth Analytics &amp; Reconnaissance" — a cloud-native workflow converting centimetre-level imagery into query-responsive intelligence with minimal latency.</BodyText>
                    <PhaseList>
                        <PhaseRow label="Multi-source ingestion" sub="" labelColor="text-blue-400">Integration of Involve's stratospheric imagery plus satellite imagery (Copernicus and commercial) and potentially other sensor feeds. Government deployments can be restricted to specific source combinations — for example, Copernicus restricted data workflows for accredited users, without exposure to commercial data pipelines.</PhaseRow>
                        <PhaseRow label="Automated analytics" sub="" labelColor="text-green-400">Object detection, super-resolution, change detection, and report generation. Government-grade deployments include explainability requirements — analytics outputs must trace to source data and processing parameters to support decision accountability in high-stakes contexts.</PhaseRow>
                        <PhaseRow label="Interface layer" sub="" labelColor="text-amber-400">Natural language queries yielding answers with supporting maps and explanations. For government users, the interface layer can be deployed in isolated network environments — on-premise or sovereign-cloud — without dependence on public internet infrastructure.</PhaseRow>
                        <PhaseRow label="Current status" sub="TRL 5 → 7" labelColor="text-involve-dim">We treat CLEAR's current TRL 5 status and target TRL 7 as a roadmap commitment rather than a finished capability claim. The TRL 7 target is aligned to our EIC workplan. Current AWS hosting is treated as a procurement variable, not a fixed technical decision — sovereign cloud migration is scoped as a mid-term capability.</PhaseRow>
                    </PhaseList>
                    <Callout><strong>EU hosting strategy:</strong> We support EU-based hosting and sovereign options through EU-region hosting with customer-controlled key management, sovereign cloud providers and national frameworks where required, and on-premise or dedicated environments for sensitive deployments.</Callout>
                </ContentBlock>

                {/* §7 B2G Strategy */}
                <ContentBlock>
                    <SectionHeader eyebrow="B2G Strategy" title="Public procurement pathway — from pilots to framework agreements" desc="Phased approach: validation pilots → co-funded innovation → recurring multi-year framework supplier positioning" />
                    <SubSec>Current Traction and Pipeline</SubSec>
                    <BodyText>We already operate in a mixed portfolio of commercial and governmental engagements. The following examples are presented as evidence of procurement relevance and stakeholder pull — not as guaranteed revenue until contracted and fully executed.</BodyText>
                    <PipelineList>
                        <PlRow label="MBDA Italy" sub="Contracted">Contract for a stratospheric <strong>defence communications system</strong> — demonstrating Involve's ability to deliver government-grade hardware and integration capability to a Tier-1 European defence prime.</PlRow>
                        <PlRow label="PNRM (Italian Armaments)" sub="Contracted">Secured <strong>surveillance contract</strong> with the Italian National Armaments Directorate — a direct MoD procurement relationship establishing Involve as a qualified defence supplier under Italian procurement frameworks.</PlRow>
                        <PlRow label="Elettronica S.p.A." sub="MoU under contracting">MoU for <strong>testing positional identification systems</strong> — technical collaboration with a major Italian defence electronics company, relevant to EW/SIGINT-adjacent stratospheric applications.</PlRow>
                        <PlRow label="Danish MoD" sub="Technical discussions">Technical discussions regarding <strong>Greenland monitoring</strong> — illustrating cross-border European defence interest in stratospheric sensing for remote/Arctic area monitoring where terrestrial and satellite coverage is limited.</PlRow>
                    </PipelineList>
                    <SubSec>Strategic Procurement Logic — Three Phases</SubSec>
                    <PhaseList>
                        <PhaseRow label="Phase A" sub="Pilots & PoCs" labelColor="text-involve-dim">Pilots, feasibility studies, and proofs-of-concept to validate operational fit, airspace feasibility, and data workflows. We have executed <strong>30+ experimental commercial launches</strong> building operational credibility and data assets that are prerequisites for scalable service delivery.</PhaseRow>
                        <PhaseRow label="Phase B" sub="Co-funded innovation" labelColor="text-amber-400">Leverage European and national programmes co-funding development, qualification, and demonstrations. <strong>Benchmark: EuroHAPS</strong> — Thales Alenia Space signed a €43M contract for the EDF-funded EuroHAPS demonstration project, coordinating 11 nations across complementary stratospheric ISR/communications demonstrators.</PhaseRow>
                        <PhaseRow label="Phase C" sub="Framework agreements" labelColor="text-blue-400">Multi-year framework positions with MoDs, coast guards, civil protection agencies, and border agencies — as a strategic supplier of persistent sensing services and analytics under defined SLAs and assurance requirements. The EU's emerging defence simplification directive permits 10-year framework agreements.</PhaseRow>
                    </PhaseList>
                    <SubSec>Institutional Programme Alignment</SubSec>
                    <CardGrid3>
                        <GCard num="EU SPACE STRATEGY — SECURITY & DEFENCE" title="Dual-use services and tailored delivery rules">The Joint Communication explicitly states that "dual-use services provided by EU space programmes and by commercial entities… will be further developed" and references the need for tailored rules for security-sensitive delivery. <strong>This policy language directly describes our positioning.</strong></GCard>
                        <GCard num="GOVSATCOM AND IRIS²" title="Secure connectivity expectations for authorised users">GOVSATCOM and IRIS² address secure connectivity for authorised users and security-critical missions, shaping expectations for secure, assured service delivery. These programmes define the assurance and sovereignty standards that commercial providers must match to participate in sovereign-adjacent procurement.</GCard>
                        <GCard num="EUROPEAN DEFENCE FUND" title="€7.953bn collaborative development vehicle">EDF's financial envelope (2021–2027) and programme design — including collaborative development requirements and SME participation incentives — create structural support for European defence innovation. EDF is both a co-funding source and a signal of institutional support for the stratospheric domain.</GCard>
                    </CardGrid3>
                    <Callout variant="green"><strong>Timeline realism:</strong> We explicitly recognise procurement lead times of 12–36 months for larger frameworks, airspace authorisation complexity across multiple jurisdictions, qualification and reliability requirements for persistent operations, and maturity requirements for secure analytics platforms.</Callout>
                </ContentBlock>

                {/* §8 Competitive Context */}
                <ContentBlock>
                    <SectionHeader eyebrow="Competitive Context" title="Compete, partner, and complement — across five competitor categories" desc="Involve is positioned as a complementary infrastructure layer — partnering where scale and certification favour primes, competing where persistence economics and full-stack analytics differentiate" />
                    <PartnerTbl>
                        <div className="grid grid-cols-[130px_1fr_1fr] bg-involve-bg2 border-b border-involve-border-med">
                            <div className="p-3 font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim">Mode</div>
                            <div className="p-3 font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim border-l border-involve-border">Where it applies</div>
                            <div className="p-3 font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim border-l border-involve-border">Why it is rational</div>
                        </div>
                        <PtRow mode="Compete" modeColor="text-red-400"
                            where={<>Persistent regional monitoring services, rapid tasking, and <strong>full-stack delivery</strong> where customers want a turnkey layer — no systems integrator in the middle</>}
                            why="Differentiation through persistence economics, dual-platform architecture (Stratostats® + Stratorelay®), and CLEAR analytics roadmap — capabilities no pure satellite or pure analytics vendor can bundle in a single contract" />
                        <PtRow mode="Partner" modeColor="text-amber-400"
                            where={<>Prime-led <strong>C5ISR programmes</strong>, national frameworks requiring deep certification and systems integration — where primes own the programme and Involve provides a layer</>}
                            why="Primes own programme scale, security certifications, and MoD relationships; Involve provides a persistent sensing layer and proprietary datasets. Strategy is not to displace primes but to be the stratospheric data supplier inside their architectures" />
                        <PtRow mode="Complement" modeColor="text-blue-400"
                            where={<><strong>Satellite ISR programmes</strong>, Copernicus-enabled workflows, NATO and EU "space-enabled services" ecosystem — where orbital coverage is the baseline and stratospheric persistence adds the temporal layer</>}
                            why="Stratospheric persistence fills temporal gaps and enhances taskability over a defined region; satellite provides wide-area context. CLEAR integrates both — creating a combined intelligence output that neither alone can generate" />
                    </PartnerTbl>
                    <SubSec>Five Competitor Categories</SubSec>
                    <CardGrid2>
                        <GCard num="CATEGORY 01 — DEFENCE PRIMES" title="Airbus D&S, Thales, Leonardo, BAE Systems">Primes dominate system-of-systems integration, programme management, and the MoD interface for major ISR, communications, and C2 programmes. Our strategy is not to displace primes — it is to <strong>provide a persistent sensing layer and analytics services that integrate into prime-led architectures</strong>.</GCard>
                        <GCard num="CATEGORY 02 — SATELLITE ISR & EO" title="Maxar, Planet Labs, ICEYE, Capella Space">Satellite EO providers offer global coverage and mature procurement pathways. They face structural constraints in continuous local persistence. Our position: <strong>augment satellites, not replace them</strong> — persistent local sensing plus faster retasking over a defined region.</GCard>
                        <GCard num="CATEGORY 03 — HAPS & STRATOSPHERIC" title="Airbus Zephyr (solar fixed-wing), Near Space Labs (balloon-based)">The HAPS domain includes solar pseudo-satellites, airships, and stratospheric balloons. Our differentiation: <strong>full-stack platform + AI + analytics (CLEAR)</strong>, dual-platform architecture (heavy persistent + light rapid-deploy), and reusability emphasis for cost efficiency.</GCard>
                        <GCard num="CATEGORY 04 — AI DEFENCE PLATFORMS" title="Palantir Technologies and niche spatial SaaS">AI and analytics vendors can be competitors or partners. Key advantage vs Palantir-type platforms: Involve <strong>controls the primary data acquisition pipeline</strong> — not dependent on third-party data availability or licensing restrictions.</GCard>
                    </CardGrid2>
                </ContentBlock>

                {/* §9 Risk Factors */}
                <ContentBlock>
                    <SectionHeader eyebrow="Risk Register" title="Risk factors and mitigations" desc="Risk disclosure is a core element of institutional readiness — dual-use infrastructure attracts scrutiny and must be managed with clear governance" />
                    <RiskGrid>
                        <RiskCard title="Regulatory risk" badge={<Badge color="bg-amber-400/15 text-amber-400">Medium</Badge>} mitigation={<><strong>Mitigation:</strong> Embedded operational competence in authorisation workflows; active monitoring of regulatory developments as a core operational function; progressive scaling with built-in authorisation lead times per jurisdiction</>}>
                            Airspace regimes for higher-altitude operations are evolving. EASA explicitly recognises higher airspace operations as an emerging domain with no single EU-level regulation today, creating multi-jurisdictional complexity.
                        </RiskCard>
                        <RiskCard title="Political & procurement risk" badge={<Badge color="bg-amber-400/15 text-amber-400">Medium</Badge>} mitigation={<><strong>Mitigation:</strong> Dual-use diversification reduces dependence on single programmes; phased procurement strategy with civil revenue providing baseline ARR during defence cycle delays; multiple national engagements reduce single-country concentration</>}>
                            Defence and security procurement is exposed to budget reprioritisation, programme delays, and changing institutional requirements. EU defence investment is rising, but procurement cycles remain long and sensitive to political shifts.
                        </RiskCard>
                        <RiskCard title="Export control & cross-border delivery risk" badge={<Badge color="bg-red-400/15 text-red-400">Managed</Badge>} mitigation={<><strong>Mitigation:</strong> Structured export control governance, per-component classification playbooks, end-user screening procedures, licensing where required; export control assessment embedded into product development and commercial processes from the outset</>}>
                            Regulation (EU) 2021/821 can apply to hardware, software, technology transfer, and technical assistance — including electronic transmission. As Involve scales cross-border, the compliance surface area expands.
                        </RiskCard>
                        <RiskCard title="Airspace constraints & operational risk" badge={<Badge color="bg-blue-400/15 text-blue-400">Low-Medium</Badge>} mitigation={<><strong>Mitigation:</strong> Conservative flight safety engineering; mission SOPs with redundancy planning; progressive geographic scaling; existing authorisation relationships in Italy as the scaling template</>}>
                            Persistent deployments require repeatable authorisation approvals, safe ascent/descent procedures, and coordination obligations. Obtaining authorisations in new jurisdictions can take 3–12 months and is not guaranteed in advance.
                        </RiskCard>
                        <RiskCard title="Ethical scrutiny of dual-use technologies" badge={<Badge color="bg-amber-400/15 text-amber-400">Medium</Badge>} mitigation={<><strong>Mitigation:</strong> Use-case review processes; contractual constraints on application scope; governance controls (access control, audit logging, data retention limits); remaining within lawful and regulated end-use boundaries; explicit internal policy on prohibited use cases</>}>
                            Persistent sensing capabilities can raise ethical questions regarding surveillance, misuse, and proportionality — amplified by AI-driven analytics and automated reporting features.
                        </RiskCard>
                        <RiskCard title="CLEAR maturity risk" badge={<Badge color="bg-blue-400/15 text-blue-400">Low-Medium</Badge>} mitigation={<><strong>Mitigation:</strong> Transparent TRL framing in all government discussions; staged capability claims that match the development roadmap; Series A funding directly targets CLEAR platform development and security compliance investment</>}>
                            CLEAR is at TRL 5 today with a target of TRL 7 under the EIC-aligned workplan. Government procurement expectations for analytics platforms can exceed the current capability state.
                        </RiskCard>
                    </RiskGrid>
                </ContentBlock>

                {/* §10 Long-Term Positioning */}
                <ContentBlock>
                    <SectionHeader eyebrow="Long-Term Positioning" title="Four structural drivers of long-term defensibility" desc="European Earth Intelligence infrastructure — positioned at the intersection of expanding security budgets, persistent ISR demand, dual-use resilience, and infrastructure-grade defensibility" />
                    <ImplBand>
                        <ImplRow title="European security budgets are structurally expanding" topAccent="border-t-2 border-blue-400">EU Member States' defence expenditure reached €343bn in 2024 (estimated €381bn in 2025). The EDF (€7.953bn), EU Space Programme (€14.88bn), and IRIS² (€2.4bn) are multi-year committed funding instruments, not discretionary budgets. <strong>This is not a cycle; it is a structural reset of European security spending</strong> that will sustain procurement demand for persistent sensing infrastructure for at least the 2021–2030 planning horizon.</ImplRow>
                        <ImplRow title="Doctrine demands persistent, multi-domain ISR">NATO's Joint ISR framework emphasises interoperability and the networking environment for secure ISR dissemination. NATO common-funded budget ceilings explicitly fund ISR forces (€264m NISRF, €420m AWACS for 2024). <strong>Institutional doctrine increasingly treats persistent multi-domain sensing as a baseline requirement</strong>, not an optional capability uplift.</ImplRow>
                        <ImplRow title="Dual-use is a resilience mechanism for the company">Civil markets expand Involve's TAM, increase platform utilisation and dataset generation, and support a sustainable transition from pilots to recurring contracts. Commercial revenue provides the baseline ARR stability that allows defence procurement cycles (12–36+ months) to be managed without existential cash flow risk. <strong>The dual-use model is how infrastructure companies survive the long procurement timelines that would otherwise make defence-only models extremely capital-intensive.</strong></ImplRow>
                        <ImplRow title="Infrastructure positioning is strategically defensible">Infrastructure positioning supports partnerships with primes without creating competitive conflict; complements satellites without requiring orbital capital expenditure; and avoids the regulatory, ethical, and reputational pitfalls associated with developing weapon systems. <strong>This positioning is consistent with our Series A narrative and EIC-aligned roadmap</strong>: a European Earth Intelligence infrastructure provider, not a defence contractor.</ImplRow>
                    </ImplBand>
                    <Callout variant="green"><strong>Series A investor framing:</strong> The defence and dual-use thesis is not a speculative overlay on a commercial business — it is the second revenue channel of a dual-track model that expands TAM, increases contract duration and ACV, and deepens switching costs through sovereign data custody. Every Series A-funded capability simultaneously serves civil and defence markets. The marginal cost of adding a second revenue channel to an existing infrastructure platform is the strongest possible argument for the investment.</Callout>
                    <RefNote>Sources: NATO Joint ISR doctrine · EU Space Programme Regulation 2021/696 · EU Space Strategy for Security and Defence (Joint Communication) · EU Strategic Compass · European Defence Agency · European Defence Fund (EUR-Lex) · EUSPA/GOVSATCOM · EASA Higher Airspace Operations · ICAO Annex 2 · GDPR Regulation 2016/679 · EU Dual-Use Regulation 2021/821 · Commission Decision 2015/444 (EUCI) · Thales Alenia Space / EuroHAPS press release · EUSPA EO Market Report 2024. Full source list with footnote references [1–61] available in the source document.</RefNote>
                </ContentBlock>

            </div>
        </div>
    );
}
