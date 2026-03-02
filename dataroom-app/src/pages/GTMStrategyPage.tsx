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

/* ── Local layout primitives ────────────────────────────────────── */
const Split2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-2 gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
const SplitCell: React.FC<{ label: string; title: string; accent?: string; children: React.ReactNode }> = ({ label, title, accent, children }) => (
    <div className={`bg-involve-panel p-6 ${accent ? `border-t-2 ${accent}` : ''}`}>
        <div className="font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim mb-2">{label}</div>
        <div className="text-[0.88rem] font-semibold text-involve-text mb-3 tracking-tight">{title}</div>
        <div className="text-[0.79rem] font-light text-involve-muted leading-relaxed">{children}</div>
    </div>
);

const RevStack: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex flex-col gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
interface RevTierProps { label: string; sub: string; desc: React.ReactNode; marginVal: string; marginLabel: string; accentColor: string; }
const RevTier: React.FC<RevTierProps> = ({ label, sub, desc, marginVal, marginLabel, accentColor }) => (
    <div className={`grid grid-cols-[220px_1fr_120px] bg-involve-panel hover:bg-involve-bg2 transition-colors border-l-[3px] ${accentColor}`}>
        <div className="p-4 border-r border-involve-border">
            <span className="font-mono text-[0.58rem] text-involve-dim tracking-widest uppercase block mb-1">{sub}</span>
            <span className="font-semibold text-[0.84rem] text-involve-text">{label}</span>
        </div>
        <div className="p-4 text-[0.8rem] font-light text-involve-muted leading-relaxed border-r border-involve-border">{desc}</div>
        <div className="p-4 flex flex-col gap-1">
            <span className={`text-[0.9rem] font-semibold tracking-tight ${accentColor.replace('border-l-[3px]', '').trim()}`}>{marginVal}</span>
            <span className="font-mono text-[0.57rem] text-involve-dim">{marginLabel}</span>
        </div>
    </div>
);

const SegGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-3 gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
interface SegCardProps { label: string; title: string; dotColor: string; borderColor: string; entry: string; children: React.ReactNode; }
const SegCard: React.FC<SegCardProps> = ({ label, title, dotColor, borderColor, entry, children }) => (
    <div className={`bg-involve-panel hover:bg-involve-bg2 transition-colors p-6 ${borderColor}`}>
        <div className="flex items-center gap-2 mb-2">
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColor}`} />
            <span className="font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim">{label}</span>
        </div>
        <div className="text-[0.88rem] font-semibold text-involve-text mb-2 tracking-tight">{title}</div>
        <div className="text-[0.76rem] font-light text-involve-muted leading-relaxed">{children}</div>
        <div className="mt-3 pt-3 border-t border-involve-border font-mono text-[0.6rem] text-involve-dim leading-relaxed">{entry}</div>
    </div>
);

const FunnelTrack: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-3 gap-px bg-white/[0.12] border border-involve-border-med my-8">{children}</div>
);
interface FunnelStepProps { num: string; title: string; kpi: React.ReactNode; accentBorder: string; children: React.ReactNode; }
const FunnelStep: React.FC<FunnelStepProps> = ({ num, title, kpi, accentBorder, children }) => (
    <div className={`bg-involve-panel hover:bg-involve-bg2 transition-colors p-6 flex flex-col gap-2 border-t-2 ${accentBorder} relative`}>
        <div className="font-mono text-[0.6rem] text-blue-400 tracking-widest">{num}</div>
        <div className="text-[0.9rem] font-semibold text-involve-text tracking-tight">{title}</div>
        <div className="text-[0.77rem] font-light text-involve-muted leading-relaxed flex-1">{children}</div>
        <div className="mt-3 pt-3 border-t border-involve-border font-mono text-[0.62rem] text-involve-dim leading-relaxed">{kpi}</div>
    </div>
);

const DefTrack: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex flex-col gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
const DefRow: React.FC<{ name: string; sub: string; children: React.ReactNode }> = ({ name, sub, children }) => (
    <div className="grid grid-cols-[220px_1fr] bg-involve-panel hover:bg-involve-bg2 transition-colors">
        <div className="p-4 border-r border-involve-border flex flex-col gap-1 justify-center">
            <span className="font-semibold text-[0.84rem] text-involve-text leading-snug">{name}</span>
            <span className="font-mono text-[0.58rem] text-involve-dim tracking-widest">{sub}</span>
        </div>
        <div className="p-4 text-[0.79rem] font-light text-involve-muted leading-relaxed">{children}</div>
    </div>
);

const PhaseList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex flex-col gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
const PhaseRow: React.FC<{ label: string; sub: string; labelColor: string; children: React.ReactNode }> = ({ label, sub, labelColor, children }) => (
    <div className="grid grid-cols-[160px_1fr] bg-involve-panel hover:bg-involve-bg2 transition-colors">
        <div className={`p-4 border-r border-involve-border flex flex-col gap-1 justify-center font-mono text-[0.62rem] tracking-widest uppercase ${labelColor}`}>
            <span className="font-semibold text-[0.85rem] font-sans">{label}</span>
            <span className="text-involve-dim">{sub}</span>
        </div>
        <div className="p-4 text-[0.81rem] font-light text-involve-muted leading-relaxed">{children}</div>
    </div>
);

const ClearGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-2 gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
const ClearCard: React.FC<{ label: string; title: string; accent: string; children: React.ReactNode }> = ({ label, title, accent, children }) => (
    <div className={`bg-involve-panel hover:bg-involve-bg2 transition-colors p-6 border-t-2 ${accent}`}>
        <div className="font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim mb-2">{label}</div>
        <div className="text-[0.88rem] font-semibold text-involve-text mb-2 tracking-tight">{title}</div>
        <div className="text-[0.77rem] font-light text-involve-muted leading-relaxed">{children}</div>
    </div>
);

const OrgGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-3 gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);
const OrgCard: React.FC<{ tag: string; title: string; accent: string; children: React.ReactNode }> = ({ tag, title, accent, children }) => (
    <div className={`bg-involve-panel hover:bg-involve-bg2 transition-colors p-5 border-t-2 ${accent}`}>
        <span className="font-mono text-[0.58rem] tracking-widest uppercase text-involve-dim block mb-2">{tag}</span>
        <div className="text-[0.84rem] font-semibold text-involve-text mb-2 tracking-tight">{title}</div>
        <div className="text-[0.75rem] font-light text-involve-muted leading-relaxed">{children}</div>
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

const Diag: React.FC<{ caption: string; children: React.ReactNode }> = ({ caption, children }) => (
    <div className="my-8 bg-involve-default border border-involve-border-med p-8 overflow-x-auto">
        {children}
        <div className="font-mono text-[0.6rem] text-involve-dim text-center mt-5 tracking-tight leading-relaxed">{caption}</div>
    </div>
);

/* ── Main component ─────────────────────────────────────────────── */
export default function GTMStrategyPage() {
    return (
        <div>
            <DocHeader
                breadcrumb="01. Strategy & Market › GTM Strategy"
                title="Civil & Defence"
                titleStrong="Go-To-Market Strategy"
                subtitle="Involve Space's commercial architecture from bespoke missions to infrastructure-grade recurring intelligence. Covers the dual-track civil and defence approach, the revenue stack, CLEAR's role as a strategic upsell layer, data scaling phases, the revenue flywheel, and organisational requirements."
                meta={[
                    { label: 'Document', value: 'IS-DR-COM-01' },
                    { label: 'Model type', value: 'Hybrid · Mission → Contract → SaaS' },
                    { label: 'Markets', value: 'Civil B2B/B2G · Defence/Institutional' },
                    { label: 'Revision', value: 'A — Feb 2026' },
                ]}
            />

            <div className="max-w-[860px] mx-auto px-14">

                {/* §1 Commercial Thesis */}
                <ContentBlock>
                    <SectionHeader eyebrow="Commercial Thesis" title="From bespoke missions to infrastructure-grade intelligence" desc="A hybrid revenue model evolving through three stages — custom flights, recurring monitoring, and SaaS analytics" />
                    <BodyText>Involve employs a hybrid revenue model that evolves from bespoke missions to scalable recurring contracts. It serves both civilian and defence ("dual-use") markets with stratospheric sensing platforms and data services. The business is transitioning from one-off flights toward <strong>continuous monitoring contracts and SaaS analytics</strong> through the CLEAR platform — mirroring the industry-wide shift from "price-per-kilometre" to "insights-as-a-service."</BodyText>
                    <BodyText>Involve's ambition is to become an <strong>infrastructure-grade intelligence platform</strong> — structurally analogous to Palantir's data-fusion model but with direct control over sensors. Its vertically-integrated stack (hardware → data → AI workflows) creates high switching costs and a compounding competitive moat.</BodyText>
                    <Split2>
                        <SplitCell label="Civil Track" title="Asset-intensive industries — operational efficiency" accent="border-t-2 border-green-400">
                            Targets energy, utilities, infrastructure, insurance, and municipalities where geospatial intelligence drives measurable operational efficiency: lower inspection costs, faster incident response, better underwriting models, and proactive maintenance.
                            <ul className="mt-2 pl-4 flex flex-col gap-1 text-[0.77rem]">
                                <li>Entry: pilot projects and use-case demonstrations</li>
                                <li>Expand: multi-year monitoring contracts per site</li>
                                <li>Scale: CLEAR SaaS subscriptions per vertical workflow</li>
                            </ul>
                        </SplitCell>
                        <SplitCell label="Defence & Institutional Track" title="Sovereign European sensing partner — mission-critical ISR" accent="border-t-2 border-blue-400">
                            Positions Involve as a European sovereign sensing partner providing persistent, mission-critical intelligence. Defence and government clients follow formal RFP/tender processes with 12–36+ month cycles — but commit to multi-year framework agreements.
                            <ul className="mt-2 pl-4 flex flex-col gap-1 text-[0.77rem]">
                                <li>Entry: co-funded R&amp;D and technology demonstrators</li>
                                <li>Expand: competitive tenders and EU/NATO frameworks</li>
                                <li>Scale: strategic supplier status and CLEAR integration</li>
                            </ul>
                        </SplitCell>
                    </Split2>
                </ContentBlock>

                {/* §2 Revenue Architecture */}
                <ContentBlock>
                    <SectionHeader eyebrow="Revenue Architecture" title="Layered revenue stack — increasing margin up the value chain" desc="Each layer builds on the one below — moving from hardware operations toward high-margin recurring software revenue" />
                    <BodyText>Involve's revenue flows through four layered offerings that increase in scale and margin as customers deepen their engagement. The strategic goal is to shift revenue mix progressively toward the upper layers — particularly CLEAR SaaS, which carries industry-benchmark gross margins of <strong>70–90%</strong> with minimal incremental cost per additional customer.</BodyText>
                    <RevStack>
                        <div className="grid grid-cols-[220px_1fr_120px] bg-involve-bg2 border-b border-involve-border-med">
                            <div className="font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim p-3">Offering</div>
                            <div className="font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim p-3 border-l border-involve-border">Description &amp; commercial logic</div>
                            <div className="font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim p-3 border-l border-involve-border">Gross margin</div>
                        </div>
                        <RevTier label="Custom Missions" sub="Tier 1 — Entry · B2G / B2B · One-off" accentColor="border-white/20 text-involve-dim" marginVal="Low" marginLabel="Cost-recovery + modest"
                            desc={<>Tailored stratospheric flights for one-off tasks: surveys, R&D projects, urgent event response. Full-cost-recovery pricing with modest margins. These missions <strong>bootstrap growth and establish credibility</strong> — especially when customers require unique corridors, specific sensors, or strict data sovereignty.</>} />
                        <RevTier label="Monitoring Contracts" sub="Tier 2 — Recurring · 3–5+ year terms" accentColor="border-amber-400 text-amber-400" marginVal="Medium" marginLabel="Scale & predictability"
                            desc={<>Recurring service agreements providing periodic or continuous stratospheric monitoring over customer sites or regions. Shifts the model from "tasking per image" to <strong>scheduled coverage with a fixed annual fee</strong> — smoothing revenues and improving planning visibility.</>} />
                        <RevTier label="CLEAR Intelligence" sub="Tier 3 — SaaS · Subscription software" accentColor="border-blue-400 text-blue-400" marginVal="High" marginLabel="70–90% industry benchmark"
                            desc={<>On top of raw data, CLEAR packages AI-driven alerts, analytics, and decision-support tools into a subscription layer. Each monitoring contract becomes an upsell opportunity. Incremental cost per additional customer is minimal — classic SaaS unit economics. This layer significantly raises average revenue per customer and is the primary long-term margin driver.</>} />
                        <RevTier label="Data Services & Bundles" sub="Tier 4 — Platform · Licensing + integrations" accentColor="border-green-400 text-green-400" marginVal="Very High" marginLabel="~90% target on data layer"
                            desc={<>As Involve's data archive matures, it can license time-series imagery, offer integrated bundles combining stratospheric, satellite, and terrestrial sensor feeds, and expose data APIs to third-party developers. These offerings <strong>diversify revenue and deepen customer relationships</strong> without proportional growth in operational cost.</>} />
                    </RevStack>
                    <Diag caption="FIG 1 — Revenue margin progression by tier. Strategic goal: shift revenue mix toward CLEAR SaaS and Data Platform layers over the Series A execution window.">
                        <svg viewBox="0 0 820 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 820, display: 'block', margin: '0 auto' }}>
                            <defs>
                                <linearGradient id="mg" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="rgba(238,241,246,0.15)" />
                                    <stop offset="33%" stopColor="rgba(240,160,32,0.4)" />
                                    <stop offset="66%" stopColor="rgba(61,155,255,0.6)" />
                                    <stop offset="100%" stopColor="rgba(52,208,122,0.8)" />
                                </linearGradient>
                            </defs>
                            <text x="8" y="18" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(238,241,246,0.3)" letterSpacing="0.8">GROSS MARGIN PROGRESSION</text>
                            <rect x="8" y="26" width="804" height="14" rx="2" fill="url(#mg)" />
                            <text x="8" y="58" fontFamily="DM Mono,monospace" fontSize="7.5" fill="rgba(238,241,246,0.3)">Custom Missions</text>
                            <text x="8" y="68" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(238,241,246,0.18)">Low margin</text>
                            <text x="210" y="58" fontFamily="DM Mono,monospace" fontSize="7.5" fill="rgba(240,160,32,0.6)">Monitoring Contracts</text>
                            <text x="210" y="68" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(240,160,32,0.35)">Medium · predictable</text>
                            <text x="450" y="58" fontFamily="DM Mono,monospace" fontSize="7.5" fill="rgba(61,155,255,0.8)">CLEAR SaaS</text>
                            <text x="450" y="68" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(61,155,255,0.45)">70–90% benchmark</text>
                            <text x="640" y="58" fontFamily="DM Mono,monospace" fontSize="7.5" fill="rgba(52,208,122,0.85)">Data Platform</text>
                            <text x="640" y="68" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(52,208,122,0.45)">~90% target</text>
                            <text x="400" y="95" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(238,241,246,0.22)" textAnchor="middle" letterSpacing="1.5">MARGIN IMPROVES AS REVENUE MIX SHIFTS UP THE STACK →</text>
                        </svg>
                    </Diag>
                </ContentBlock>

                {/* §3 Civil GTM */}
                <ContentBlock>
                    <SectionHeader eyebrow="Civil GTM" title="Civil strategy — five target segments and the land-and-expand funnel" desc="Entry through specific operational pain points, expansion through monitoring contracts, lock-in through CLEAR workflows" />
                    <SegGrid>
                        <SegCard label="Segment 01" title="Energy & Utilities" dotColor="bg-amber-400" borderColor="border-t-2 border-amber-400" entry="Entry use case: Stratorelay® corridor pass → pipeline leak screening or vegetation encroachment mapping">
                            Oil &amp; gas pipelines, electrical grids, water and gas networks. Large, fixed assets with <strong>safety, environmental, and regulatory risk</strong>. Annual monitoring spend per km is economically justified by the cost of a single outage or leak incident.
                        </SegCard>
                        <SegCard label="Segment 02" title="Infrastructure & Construction" dotColor="bg-blue-400" borderColor="border-t-2 border-blue-400" entry="Entry use case: Rail corridor inspection flight → structural deformation or embankment change detection">
                            Transport networks (roads, bridges, rail), telecom towers, mining operations. Assets needing monitoring for <strong>structural condition, compliance, and change detection</strong>.
                        </SegCard>
                        <SegCard label="Segment 03" title="Environmental & Climate" dotColor="bg-green-400" borderColor="border-t-2 border-green-400" entry="Entry use case: Multi-spectral survey → NDVI baseline for regulatory compliance reporting">
                            Agencies and NGOs tracking deforestation, crop health, wildfire risk, and urban expansion. Regulatory and ESG mandates (CSRD, TNFD) are creating <strong>mandatory reporting obligations</strong> that require verified geospatial evidence.
                        </SegCard>
                        <SegCard label="Segment 04" title="Insurance & Finance" dotColor="bg-purple-400" borderColor="border-t-2 border-purple-400" entry="Entry use case: Post-event flood imagery purchase → subscribe to CLEAR flood/fire alert services">
                            Property/casualty insurers, reinsurers, and banks seeking risk assessment. <strong>Persistent coverage provides the near-real-time imagery</strong> needed to convert manual claims validation into automated alert-triggered workflows.
                        </SegCard>
                        <SegCard label="Segment 05" title="Municipalities & Smart Cities" dotColor="bg-cyan-400" borderColor="border-t-2 border-cyan-400" entry="Entry use case: Urban land-use change detection → continuous smart city monitoring dashboard via CLEAR">
                            Urban planners and civil protection departments managing land use, disaster response, waste monitoring, and urban heat. <strong>Digital twin infrastructure</strong> requires persistent updating with high-cadence aerial data.
                        </SegCard>
                        <div className="bg-involve-bg2 border border-dashed border-white/20 flex items-center justify-center p-6 text-involve-text/20 font-mono text-[0.6rem] tracking-widest uppercase text-center">Civil segment imagery placeholder</div>
                    </SegGrid>
                    <div className="font-mono text-[0.62rem] text-involve-dim tracking-widest uppercase mt-6 mb-2">Civil GTM Funnel — Pilot → Monitor → SaaS</div>
                    <FunnelTrack>
                        <FunnelStep num="STAGE 01 — PILOT" title="Use-case driven flight" accentBorder="border-white/20" kpi={<><em className="text-blue-400 not-italic">Success metric:</em> demonstrated cost saving or decision improvement vs existing method</>}>
                            Customer funds a tailored flight to solve a specific operational problem. <strong>Low commitment, high-impact demonstration</strong>. Involve delivers a result directly comparable to existing inspection costs, making ROI immediately visible.
                        </FunnelStep>
                        <FunnelStep num="STAGE 02 — CONTRACT" title="Multi-year monitoring agreement" accentBorder="border-amber-400" kpi={<><em className="text-blue-400 not-italic">Key insight:</em> clients prefer predictable subscription pricing over ad-hoc buys — EO industry-wide trend</>}>
                            Pilot success converts to a <strong>3–5 year monitoring contract</strong> with scheduled coverage and a fixed annual fee. Involve becomes an operational supplier — not a project vendor.
                        </FunnelStep>
                        <FunnelStep num="STAGE 03 — SAAS" title="CLEAR platform integration" accentBorder="border-blue-400" kpi={<><em className="text-blue-400 not-italic">Margin impact:</em> CLEAR layer raises overall contract value significantly with minimal incremental delivery cost</>}>
                            Monitoring contract customer adopts CLEAR dashboards, API feeds, and automated alerts — co-developed around their specific workflows. <strong>CLEAR becomes embedded in operations</strong>: integrated with SCADA, GIS, or ERP systems. High switching costs.
                        </FunnelStep>
                    </FunnelTrack>
                </ContentBlock>

                {/* §4 Defence GTM */}
                <ContentBlock>
                    <SectionHeader eyebrow="Defence & Institutional GTM" title="Defence strategy — procurement paths and sovereign positioning" desc="Multi-year formal procurement cycles with high ACV and strategic supplier evolution — patience required, stickiness exceptional" />
                    <BodyText>Defence and government clients follow formal RFP/tender processes. Sales cycles are typically <strong>12–36+ months</strong> with extensive evaluation, security certification requirements, and budget cycles measured in parliamentary terms. Defence contracts, once awarded, are highly sticky — agencies prefer committing to long-term programmes rather than re-running tenders.</BodyText>
                    <DefTrack>
                        <div className="grid grid-cols-[220px_1fr] bg-involve-bg2 border-b border-involve-border-med">
                            <div className="p-3 font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim">Procurement path</div>
                            <div className="p-3 font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim border-l border-involve-border">Description, timing and Involve's positioning</div>
                        </div>
                        <DefRow name="Co-funded R&D / Demonstrators" sub="Entry point — shared risk">
                            Involve enters through collaborative research projects — EU/NATO tech programmes, PESCO initiatives, ESA co-funding — or small technology demonstrators. These allow government to <strong>share development risk</strong> and evaluate capability before committing to operational procurement.
                        </DefRow>
                        <DefRow name="Competitive Tenders & EU Frameworks" sub="Multi-year contracts · structured process">
                            Involve bids on EU-level or national procurement tenders for multi-year monitoring systems. The EU's emerging defence simplification directive <strong>permits 10-year framework agreements</strong> — enabling extended contracts that provide genuine revenue stability.
                        </DefRow>
                        <DefRow name="Sovereign Positioning" sub="European data autonomy narrative">
                            Involve's status as a European company with in-country platforms and full data custody is a <strong>structural selling point</strong> — offering unencumbered data with no foreign IP or control issues.
                        </DefRow>
                        <DefRow name="Civil Government / Institutional" sub="Environmental agencies · DGs · UN bodies">
                            Civil government customers often use annual budgets, grants, or inter-agency agreements. Multilateral agencies (EU Directorates-General, UN bodies) may procure sustained EO services through framework contracts.
                        </DefRow>
                        <DefRow name="Strategic Supplier Evolution" sub="Long-term programme partnership">
                            Successfully fulfilling initial contracts raises Involve to <strong>"preferred supplier" status</strong>. A national defence force might first buy occasional flights, then sign a long-term coverage contract, and eventually integrate CLEAR into their intelligence systems.
                        </DefRow>
                    </DefTrack>
                    <Callout variant="amber"><strong>Civil vs Defence sales — key differences:</strong> Defence deals emphasise capability and sovereignty — governments pay for the <em>ability to task or collect anywhere, anytime</em>. Contracts include stringent IP/data terms, security standards compliance (ISO 27001, export controls), and require navigation of ministers, procurement officers, and military end-users simultaneously.</Callout>
                </ContentBlock>

                {/* §5 Data Scaling */}
                <ContentBlock>
                    <SectionHeader eyebrow="Data Strategy" title="Data scaling — four phases toward a proprietary data moat" desc="Each phase adds proprietary data that competitors cannot replicate — compounding the value of the CLEAR intelligence layer" />
                    <BodyText>Involve's data assets evolve in phases. The strategic goal is to build a proprietary, continuously-growing data moat that makes CLEAR progressively more accurate, makes customers increasingly dependent on historical continuity, and makes competitive displacement progressively harder over time.</BodyText>
                    <PhaseList>
                        <PhaseRow label="Phase 1" sub="Now" labelColor="text-involve-dim">
                            <strong>Public &amp; In-House Data.</strong> Initially, Involve utilises open-source satellite data (Copernicus Sentinel, Landsat) and meteorological feeds to bootstrap CLEAR analytics. Combined with data from early stratospheric flights, this provides basic insights. The differentiation at this stage is in the <strong>analytics layer and the sensor platform</strong>, not the data itself.
                        </PhaseRow>
                        <PhaseRow label="Phase 2" sub="Series A window" labelColor="text-amber-400">
                            <strong>Expanding Proprietary Fleet.</strong> As Involve scales Stratostats®, Stratorelay®, and eventually LoonHive®, it accumulates unique high-altitude imagery, radar, and atmospheric sensing with no open-access equivalent. This proprietary data — <strong>continuous, high-cadence coverage over specific targets</strong> — adds exclusive value.
                        </PhaseRow>
                        <PhaseRow label="Phase 3" sub="2027–2028" labelColor="text-blue-400">
                            <strong>Strategic Data Acquisitions.</strong> Once the core sensor base is established, Involve may selectively acquire or license complementary data — mid-resolution imagery from CubeSat constellations, licensed AIS vessel tracking data, or industrial IoT feeds. These acquisitions are <strong>tactical gap-filling</strong>, not broad mercenary acquisitions.
                        </PhaseRow>
                        <PhaseRow label="Phase 4" sub="2028–2029+" labelColor="text-purple-400">
                            <strong>Multidomain Integration.</strong> Interlinks spaceborne, aerial (HAPS + UAV), and ground-based (IoT sensors, radar) data streams into a unified intelligence fabric. CLEAR then ingests multi-domain inputs and enables <strong>holistic situational awareness</strong> that no single-domain provider can match.
                        </PhaseRow>
                    </PhaseList>
                    <Callout variant="green"><strong>Defensibility mechanics:</strong> High switching costs emerge when customers embed Involve's unique data products and analytics into daily operations. Moving to a competitor would require retraining models on different data, rebuilding pipelines, and losing historical archive context.</Callout>
                </ContentBlock>

                {/* §6 CLEAR */}
                <ContentBlock>
                    <SectionHeader eyebrow="CLEAR Platform" title="CLEAR — from raw data to repeatable intelligence revenue" desc="CLEAR is not 'magic AI' — it is a disciplined analytics layer that converts more data into more insight and higher contract value" />
                    <BodyText>The CLEAR platform is Involve's intelligence core and the primary long-term margin driver. It transforms raw sensor feeds into actionable insights, drives upsell on existing monitoring contracts, and enables cross-vertical expansion without linear cost increases.</BodyText>
                    <ClearGrid>
                        <ClearCard label="Revenue driver 01" title="Increasing ARPU through analytics upsell" accent="border-blue-400">
                            Customers who paid for imagery can pay extra for <strong>AI-driven alerts, trend dashboards, and reporting</strong>. This raises average revenue per user/contract without requiring additional platform flights.
                        </ClearCard>
                        <ClearCard label="Revenue driver 02" title="Converting monitoring to intelligence subscriptions" accent="border-green-400">
                            CLEAR layers on continuous data flows to deliver intelligence products: anomaly alerts, trend analyses, predictive models. Instead of delivering raw pipeline images, CLEAR flags <strong>potential leak signatures or encroachment events automatically</strong>.
                        </ClearCard>
                        <ClearCard label="Revenue driver 03" title="Cross-vertical R&D reuse — expand without linear cost" accent="border-amber-400">
                            CLEAR's modular design means algorithms developed for one vertical reuse across others. <strong>Urban change-detection code serves oil rig monitoring</strong>; vegetation stress analysis applies to both power utilities and precision agriculture.
                        </ClearCard>
                        <ClearCard label="Revenue driver 04" title="Multi-source fusion — single-pane intelligence view" accent="border-purple-400">
                            CLEAR fuses Involve's multi-domain data and external feeds into a unified system. Clients gain a <strong>single intelligence view across their entire operational landscape</strong>. This mirrors how Palantir's platforms unify disparate data sources — but here Involve controls the primary data source.
                        </ClearCard>
                        <ClearCard label="Revenue driver 05" title="Structured workflows — mission templates" accent="border-cyan-400">
                            CLEAR codifies customers' decision processes into "mission templates" — a <strong>compliance monitoring workflow</strong>, a disaster response workflow, a border surveillance workflow. Template libraries are reusable across customers in the same vertical, reducing delivery cost per new client.
                        </ClearCard>
                        <div className="bg-involve-bg2 border border-dashed border-white/20 flex items-center justify-center p-6 text-involve-text/20 font-mono text-[0.6rem] tracking-widest uppercase text-center">CLEAR dashboard screenshot placeholder</div>
                    </ClearGrid>
                </ContentBlock>

                {/* §7 Revenue Flywheel */}
                <ContentBlock>
                    <SectionHeader eyebrow="Business Model Mechanics" title="The revenue-scaling flywheel" desc="Five self-reinforcing loops — each cycle amplifies Involve's value proposition and competitive position" />
                    <BodyText>Involve's business model forms a classic scaling flywheel. The five loops are mutually reinforcing: each one generates an input to the next, and the cycle accelerates as each component matures.</BodyText>
                    <Diag caption="FIG 2 — Revenue-scaling flywheel. Each loop amplifies the next. The cycle does not require an external trigger — every successful mission and contract renewal adds momentum to all five loops simultaneously.">
                        <svg viewBox="0 0 820 440" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 820, display: 'block', margin: '0 auto' }}>
                            <defs>
                                <marker id="fw-a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><polygon points="0 0,8 4,0 8" fill="rgba(61,155,255,0.5)" /></marker>
                                <filter id="glow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                            </defs>
                            <circle cx="410" cy="220" r="62" fill="rgba(61,155,255,0.07)" stroke="rgba(61,155,255,0.4)" strokeWidth="1.8" filter="url(#glow)" />
                            <text x="410" y="212" fontFamily="DM Mono,monospace" fontSize="9" fill="#3d9bff" textAnchor="middle" letterSpacing="0.8">REVENUE</text>
                            <text x="410" y="226" fontFamily="DM Mono,monospace" fontSize="9" fill="#3d9bff" textAnchor="middle" letterSpacing="0.8">FLYWHEEL</text>
                            <text x="410" y="242" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(61,155,255,0.5)" textAnchor="middle">self-reinforcing</text>
                            <rect x="330" y="18" width="160" height="60" rx="3" fill="#0f1218" stroke="rgba(52,208,122,0.5)" strokeWidth="1.3" />
                            <text x="410" y="43" fontFamily="DM Mono,monospace" fontSize="9" fill="rgba(52,208,122,0.85)" textAnchor="middle">FLEET GROWTH</text>
                            <text x="410" y="58" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.35)" textAnchor="middle">More platforms · more coverage days</text>
                            <text x="410" y="70" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.3)" textAnchor="middle">→ incremental proprietary data</text>
                            <rect x="586" y="96" width="180" height="60" rx="3" fill="#0f1218" stroke="rgba(61,155,255,0.5)" strokeWidth="1.3" />
                            <text x="676" y="121" fontFamily="DM Mono,monospace" fontSize="9" fill="rgba(61,155,255,0.85)" textAnchor="middle">BETTER INTELLIGENCE</text>
                            <text x="676" y="137" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.35)" textAnchor="middle">More training data → CLEAR improves</text>
                            <text x="676" y="149" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.3)" textAnchor="middle">→ more accurate, actionable insights</text>
                            <rect x="590" y="316" width="180" height="60" rx="3" fill="#0f1218" stroke="rgba(240,160,32,0.5)" strokeWidth="1.3" />
                            <text x="680" y="341" fontFamily="DM Mono,monospace" fontSize="9" fill="rgba(240,160,32,0.85)" textAnchor="middle">STRONGER CONTRACTS</text>
                            <text x="680" y="357" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.35)" textAnchor="middle">Superior insights → more clients</text>
                            <text x="680" y="369" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.3)" textAnchor="middle">→ larger deals · new verticals</text>
                            <rect x="48" y="316" width="180" height="60" rx="3" fill="#0f1218" stroke="rgba(167,139,250,0.5)" strokeWidth="1.3" />
                            <text x="138" y="341" fontFamily="DM Mono,monospace" fontSize="9" fill="rgba(167,139,250,0.85)" textAnchor="middle">HIGHER ARR</text>
                            <text x="138" y="357" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.35)" textAnchor="middle">Monitoring + CLEAR subscriptions</text>
                            <text x="138" y="369" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.3)" textAnchor="middle">→ Annual Recurring Revenue grows</text>
                            <rect x="50" y="96" width="180" height="60" rx="3" fill="#0f1218" stroke="rgba(0,200,224,0.5)" strokeWidth="1.3" />
                            <text x="140" y="121" fontFamily="DM Mono,monospace" fontSize="9" fill="rgba(0,200,224,0.85)" textAnchor="middle">REINVESTMENT</text>
                            <text x="140" y="137" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.35)" textAnchor="middle">ARR funds fleet expansion</text>
                            <text x="140" y="149" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.3)" textAnchor="middle">→ R&amp;D · sensors · platform build</text>
                            <path d="M490,48 Q580,60 590,110" fill="none" stroke="rgba(61,155,255,0.4)" strokeWidth="1.5" markerEnd="url(#fw-a)" />
                            <path d="M676,158 Q720,220 678,314" fill="none" stroke="rgba(61,155,255,0.35)" strokeWidth="1.5" markerEnd="url(#fw-a)" />
                            <path d="M590,346 Q410,410 230,346" fill="none" stroke="rgba(61,155,255,0.3)" strokeWidth="1.5" markerEnd="url(#fw-a)" />
                            <path d="M140,314 Q100,220 142,158" fill="none" stroke="rgba(61,155,255,0.3)" strokeWidth="1.5" markerEnd="url(#fw-a)" />
                            <path d="M230,110 Q290,55 330,52" fill="none" stroke="rgba(61,155,255,0.35)" strokeWidth="1.5" markerEnd="url(#fw-a)" />
                        </svg>
                    </Diag>
                    <PhaseList>
                        {[
                            { label: 'Loop 1', sub: 'Fleet → Data', color: 'text-green-400', content: 'Each new balloon/sensor adds coverage days and area monitored, generating incremental proprietary data. The data accumulates as a time-series archive with compounding historical depth.' },
                            { label: 'Loop 2', sub: 'Data → Intelligence', color: 'text-blue-400', content: "The expanded dataset improves CLEAR's analytics — deeper time series, more training examples, better anomaly baselines. Intelligence outputs become more accurate and comprehensive with every new data point." },
                            { label: 'Loop 3', sub: 'Intelligence → Contracts', color: 'text-amber-400', content: 'Superior insights win more clients and larger deals. Existing customers expand scope — more sites, higher-tier CLEAR services — as trust grows. New verticals open with proven analytics that require no per-vertical R&D from scratch.' },
                            { label: 'Loop 4', sub: 'Contracts → ARR', color: 'text-purple-400', content: 'Larger, recurring monitoring contracts and CLEAR subscriptions increase Annual Recurring Revenue. A portion of ARR is reinvested into R&D and fleet expansion, closing the loop.' },
                            { label: 'Loop 5', sub: 'ARR → Fleet', color: 'text-cyan-400', content: 'Reinvestment funds additional balloon platforms, sensor upgrades, and CLEAR platform development. This directly feeds Loop 1 — circling back to fleet growth and the next cycle of data accumulation.' },
                        ].map(({ label, sub, color, content }) => (
                            <PhaseRow key={label} label={label} sub={sub} labelColor={color}>{content}</PhaseRow>
                        ))}
                    </PhaseList>
                </ContentBlock>

                {/* §8 Multidomain Expansion */}
                <ContentBlock>
                    <SectionHeader eyebrow="Long-Range Commercial Vision" title="Multidomain commercial expansion" desc="From stratospheric-only sensing today to a full multi-domain intelligence platform — a structural vision framed without overcommitment" />
                    <BodyText>Involve's long-term commercial plan envisions an evolution from stratospheric-only sensing to a truly multi-domain platform. This is not an immediate roadmap but a structural vision: each domain integration widens the intelligence offering and deepens customer lock-in.</BodyText>
                    <div className="grid grid-cols-2 gap-px bg-white/[0.07] border border-involve-border-med my-8">
                        <SplitCell label="Current — Core" title="Stratospheric sensing" accent="border-t-2 border-green-400">Using Stratostats® and Stratorelay® for broad-area monitoring. Persistence and low cost per km² — far cheaper than satellites for continuous coverage. The active revenue-generating foundation.</SplitCell>
                        <SplitCell label="Near-term — Layer 2" title="Satellite augmentation" accent="border-t-2 border-blue-400">Integrating satellite imagery (optical, SAR) for worldwide reach — denied areas, open ocean, polar regions. Together, the combination covers both the "always-on" theatre-level watch and the "everywhere" global snapshot.</SplitCell>
                        <SplitCell label="Medium-term — Layer 3" title="Aerial & ground sensor integration" accent="border-t-2 border-amber-400">UAV/drone feeds and ground IoT yield hyper-local data that stratospheric platforms cannot achieve at cost. HAPS acts as the strategic eye; UAV acts as the tactical investigator dispatched when HAPS detects an anomaly.</SplitCell>
                        <SplitCell label="Long-term — Layer 4" title="Full intelligence orchestration" accent="border-t-2 border-purple-400">All domains feed into CLEAR, which prioritises and synthesises across them. A complete systems-of-systems view: space images detect a new structure → HAPS collects closer views → drone performs detailed inspection → CLEAR delivers the unified intelligence picture.</SplitCell>
                    </div>
                </ContentBlock>

                {/* §9 Org Scaling */}
                <ContentBlock>
                    <SectionHeader eyebrow="Organisation" title="Organisational scaling requirements" desc="Six functions that must scale in parallel with the commercial strategy to sustain simultaneous civil and defence engagements" />
                    <OrgGrid>
                        <OrgCard tag="Function 01" title="Civil BD & Defence BD" accent="border-green-400">Dedicated business development teams for each track. <strong>Civil BD</strong> focuses on industry verticals and commercial partners. <strong>Defence BD</strong> navigates procurement rules, security requirements, ministries, and EU/NATO frameworks.</OrgCard>
                        <OrgCard tag="Function 02" title="Enterprise Sales & Solutions Architecture" accent="border-blue-400">Senior enterprise sales force managing large accounts, upselling monitoring contracts, and closing CLEAR subscriptions. <strong>Solutions architects</strong> configure CLEAR proofs-of-concept and pilots.</OrgCard>
                        <OrgCard tag="Function 03" title="Technical Pre-Sales & Integration" accent="border-amber-400">Strong technical pre-sales with geospatial and AI expertise. Works with customers to ensure seamless integration of CLEAR with client IT systems — <strong>SCADA, GIS, ERPs</strong>.</OrgCard>
                        <OrgCard tag="Function 04" title="Compliance & Security" accent="border-red-400">Critical for defence and government contracts. Requires <strong>ISO 27001, GDPR, export control compliance</strong>, and potentially a "Trusted Supply Chain" certification for EU defence framework eligibility.</OrgCard>
                        <OrgCard tag="Function 05" title="Operations & Fleet Delivery" accent="border-cyan-400">Manages the stratospheric fleet, data pipelines, and platform uptime. As monitoring contracts grow, <strong>standardised SOPs</strong> for launch scheduling, data processing, and quality control ensure consistent delivery.</OrgCard>
                        <OrgCard tag="Function 06" title="Customer Success & Renewals" accent="border-purple-400">High-touch account management to handle ongoing support, coordinate CLEAR co-development, and drive contract renewals. Directly responsible for <strong>net revenue retention</strong>.</OrgCard>
                    </OrgGrid>
                </ContentBlock>

                {/* §10 Strategic Implications */}
                <ContentBlock>
                    <SectionHeader eyebrow="Strategic Conclusions" title="Five strategic implications of the GTM architecture" desc="How the commercial model underpins Involve's infrastructure thesis and Series A investment case" />
                    <ImplBand>
                        <ImplRow title="Infrastructure-grade asset construction" topAccent="border-t-2 border-blue-400">By tying together hardware, data networks, and analytics into a unified platform, Involve moves beyond a project shop to a <strong>backbone provider</strong>. The focus on long-term contracts and recurring SaaS mirrors how infrastructure is monetised in telecoms and cloud.</ImplRow>
                        <ImplRow title="Dual-use hedges revenue risk">Serving both civil and defence markets hedges against cycle risk. Investors prize this dual-stream because it <strong>broadens addressable market and smooths revenue cycles</strong> — a structural advantage over pure-commercial or pure-defence EO players.</ImplRow>
                        <ImplRow title="Data ownership drives defensibility">Owning unique, continuous data cuts off competitors. Involve's proprietary stratospheric archive creates a <strong>high entry barrier</strong> — competitors cannot purchase historical stratospheric time-series from any other source.</ImplRow>
                        <ImplRow title="Multi-domain leverage compounds the moat">Integrating across sensing domains gives structural leverage. Involve's long-term vision to orchestrate multi-layered sensing means CLEAR becomes the <strong>go-to geospatial decision-support platform for Europe and allied markets</strong>.</ImplRow>
                        <ImplRow title="Series A investment has a coherent commercial home">Every element of the GTM — business model, sales approach, data roadmap, CLEAR development, organisational scaling — is internally consistent and mutually reinforcing. The Series A investment directly unlocks the monitoring contract and CLEAR SaaS revenue tiers that the model depends on.</ImplRow>
                    </ImplBand>
                    <Callout variant="green"><strong>Investor-grade synthesis:</strong> Involve's GTM strategy is analytical and systematic — it recognises real EO adoption dynamics (the "pilot trap," long defence cycles, the shift from price-per-km to insights-as-a-service) and structures each commercial path accordingly.</Callout>
                    <RefNote>Sources: Geoawesome (EO business model evolution) · Finro / SaaS benchmark data · TerraWatch Space (EO adoption curve · defence paradox) · EU Defence Procurement Directive · Satellogic / Albania case study · Seat11a Palantir analysis · Cyclopspace (dual-use investor thesis). Full source list with footnote references [1–22] available in the source document.</RefNote>
                </ContentBlock>

            </div>
        </div>
    );
}
