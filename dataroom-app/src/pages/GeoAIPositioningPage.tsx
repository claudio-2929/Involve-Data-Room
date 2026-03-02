import { DocHeader, SectionHeader, BodyText, ContentBlock, SectionDivider } from '../components/ui/core';
import { NextSectionCard } from '../components/shared/NavigationHelpers';

// ── Shared primitives ────────────────────────────────────────────────────────

function Badge({ color, children }: { color: 'blue' | 'green' | 'amber' | 'cyan' | 'purple'; children: React.ReactNode }) {
    const styles = {
        blue: 'bg-involve-blue/14 text-involve-blue',
        green: 'bg-involve-green/12 text-involve-green',
        amber: 'bg-involve-amber/12 text-involve-amber',
        cyan: 'bg-involve-cyan/12 text-involve-cyan',
        purple: 'bg-[rgba(167,139,250,0.12)] text-[#a78bfa]',
    };
    return (
        <span className={`inline-flex items-center gap-1 font-mono text-[10px] font-medium tracking-[0.1em] px-2 py-0.5 rounded-sm whitespace-nowrap before:content-[''] before:block before:w-1.5 before:h-1.5 before:rounded-full before:bg-current ${styles[color]}`}>
            {children}
        </span>
    );
}

function Callout({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'green' | 'amber' }) {
    const border = variant === 'green' ? 'border-l-involve-green bg-involve-green/8' : variant === 'amber' ? 'border-l-involve-amber bg-involve-amber/8' : 'border-l-involve-blue/30 bg-involve-blue/6';
    return (
        <div className={`my-7 px-5 py-4 border-l-2 ${border} text-sm font-light text-involve-muted italic leading-relaxed`}>
            {children}
        </div>
    );
}

function RefNote({ children }: { children: React.ReactNode }) {
    return (
        <div className="my-6 px-4 py-3 bg-involve-panel border border-involve-border border-l-2 border-l-involve-blue font-mono text-[11px] text-involve-blue/65 leading-relaxed">
            {children}
        </div>
    );
}

function StatsBar({ stats }: { stats: { val: string; valSuffix?: string; label: string; sub: string }[] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-involve-border border border-involve-border my-8">
            {stats.map((s, i) => (
                <div key={i} className="bg-involve-panel p-6 hover:bg-involve-bg transition-colors">
                    <div className="text-[1.8rem] font-semibold tracking-[-0.04em] text-involve-text leading-none mb-1">
                        {s.val}<span className="text-involve-blue">{s.valSuffix}</span>
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-involve-dim leading-snug">{s.label}</div>
                    <div className="text-[11px] text-involve-dim mt-1">{s.sub}</div>
                </div>
            ))}
        </div>
    );
}

// ── Evolution Track ──────────────────────────────────────────────────────────

function EvoTrack() {
    const stages = [
        {
            era: 'EO 1.0 · Pre-2010s', label: 'Data Collection', labelColor: 'text-involve-muted',
            sub: 'Government imagery · coarse coverage · long latency', borderColor: 'border-t-involve-border',
            desc: 'Governments and early satellite firms provided imagery with limited resolution and revisit schedules measured in days or weeks. Analysis required specialist GIS teams and significant post-processing time. Outputs were static reports, not operational decisions.',
            traits: ['Government-dominated supply', 'Weeks-long delivery cycles', 'Specialist GIS expertise required', 'Static output formats'],
        },
        {
            era: 'EO 2.0 · 2010s', label: 'Sensor Proliferation', labelColor: 'text-involve-amber',
            sub: 'Micro-satellite constellations · analytics startups · data overload', borderColor: 'border-t-involve-amber',
            desc: 'Planet, ICEYE, and dozens of startups drove resolution up and revisit times down. Simultaneously, analytics companies emerged to apply computer vision and statistical methods to the resulting imagery. The result: more data than anyone could process, and a proliferation of disconnected tools.',
            traits: ['Commercial constellations scale', 'Standalone analytics tools', 'WEF: 2 exabytes by 2032', 'Data bottleneck emerges'],
        },
        {
            era: 'EO 3.0 · Now', label: 'Intelligence Infrastructure', labelColor: 'text-involve-blue',
            sub: 'Continuous AI-fused intelligence · always-on services · decision layer', borderColor: 'border-t-involve-blue',
            desc: 'Constant data streams from space, stratosphere, and ground are integrated with AI to support immediate decisions. The ICEYE–Esri model reframes geospatial intelligence as an infrastructure subscription — not a report, but a continuous geo-streaming layer users embed into operational workflows.',
            traits: ['Multi-domain sensor fusion', 'Always-on intelligence streams', 'Agentic AI orchestration', 'Embedded in operations'],
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-involve-border border border-involve-border my-8">
            {stages.map((s, i) => (
                <div key={i} className={`bg-involve-panel p-7 flex flex-col border-t-2 ${s.borderColor} hover:bg-involve-bg transition-colors`}>
                    <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-dim mb-2">{s.era}</div>
                    <div className={`text-[1.1rem] font-semibold tracking-tight mb-1 ${s.labelColor}`}>{s.label}</div>
                    <div className="text-[12px] font-light text-involve-dim italic mb-4">{s.sub}</div>
                    <div className="text-[12.5px] font-light text-involve-muted leading-relaxed flex-1 mb-4">{s.desc}</div>
                    <div className="flex flex-col gap-1.5">
                        {s.traits.map((t, j) => (
                            <div key={j} className="flex items-center gap-2 text-[12px] text-involve-dim">
                                <span className="font-mono text-[10px] text-involve-dim">—</span>{t}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

// ── Card Grid ────────────────────────────────────────────────────────────────

function CardGrid3({ cards }: { cards: { num: string; title: string; body: React.ReactNode; stat: string; borderColor?: string; numColor?: string }[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-involve-border border border-involve-border my-8">
            {cards.map((c, i) => (
                <div key={i} className={`bg-involve-panel p-6 flex flex-col hover:bg-involve-bg transition-colors border-t-2 ${c.borderColor ?? 'border-t-involve-border'}`}>
                    <span className={`font-mono text-[10px] tracking-[0.15em] uppercase mb-2 ${c.numColor ?? 'text-involve-blue'}`}>{c.num}</span>
                    <div className="text-[13.5px] font-semibold text-involve-text mb-2 leading-tight">{c.title}</div>
                    <div className="text-[12px] font-light text-involve-muted leading-relaxed flex-1">{c.body}</div>
                    <div className="mt-4 pt-3 border-t border-involve-border font-mono text-[10px] text-involve-dim leading-relaxed">{c.stat}</div>
                </div>
            ))}
        </div>
    );
}

function CardGrid2({ cards }: { cards: { num: string; title: string; body: React.ReactNode; stat: string; borderColor?: string }[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-involve-border border border-involve-border my-8">
            {cards.map((c, i) => (
                <div key={i} className={`bg-involve-panel p-6 flex flex-col hover:bg-involve-bg transition-colors border-t-2 ${c.borderColor ?? 'border-t-involve-border'}`}>
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-blue mb-2">{c.num}</span>
                    <div className="text-[13.5px] font-semibold text-involve-text mb-2 leading-tight">{c.title}</div>
                    <div className="text-[12px] font-light text-involve-muted leading-relaxed flex-1">{c.body}</div>
                    <div className="mt-4 pt-3 border-t border-involve-border font-mono text-[10px] text-involve-dim leading-relaxed">{c.stat}</div>
                </div>
            ))}
        </div>
    );
}

// ── Capability Stack ─────────────────────────────────────────────────────────

function CapabilityStack() {
    const rows = [
        { label: 'Classical GIS', sublabel: 'Deterministic', labelColor: 'text-involve-dim', content: 'Structured geodata storage, overlay queries, static map output. Human analyst interprets results. No learning, no multi-modal fusion. Output: maps and reports.' },
        { label: 'EO Analytics', sublabel: 'Statistical', labelColor: 'text-involve-amber', content: 'Classical computer vision on satellite imagery — change detection, NDVI, object classification using hand-engineered features. Faster than manual GIS but still single-source, periodic, and requires human review.' },
        { label: 'GeoAI', sublabel: 'Multi-modal ML', labelColor: 'text-involve-blue', content: 'Deep learning on multi-modal inputs (imagery, SAR, LiDAR, IoT, weather). Spatially-explicit models — location-aware architecture. Foundation models compress vast archives. High-accuracy classification without per-task training. Probabilistic outputs with uncertainty quantification.' },
        { label: 'Agentic GeoAI', sublabel: 'Orchestration', labelColor: 'text-involve-green', content: 'AI agents that autonomously task sensors, route intelligence requests, fuse outputs across domains, and trigger operational responses. The system decides which sensor to use, when to acquire data, and how to deliver insight. CLEAR is designed for this layer: agentic decoupling across multi-modal vision agents, with natural language interfaces and automated reporting.' },
    ];
    return (
        <div className="flex flex-col gap-px bg-involve-border border border-involve-border my-8">
            <div className="bg-involve-bg px-4 py-2 font-mono text-[10px] tracking-[0.12em] uppercase text-involve-dim border-b border-involve-border">GeoAI Capability Progression</div>
            {rows.map((r, i) => (
                <div key={i} className="grid bg-involve-panel hover:bg-involve-bg transition-colors" style={{ gridTemplateColumns: '180px 1fr' }}>
                    <div className="px-5 py-5 font-mono text-[11px] tracking-[0.1em] uppercase flex flex-col justify-center border-r border-involve-border leading-snug">
                        <span className={`text-[13px] font-semibold font-sans tracking-normal mb-0.5 ${r.labelColor}`}>{r.label}</span>
                        <span className="text-involve-dim text-[10px]">{r.sublabel}</span>
                    </div>
                    <div className="px-5 py-5 text-[12.5px] font-light text-involve-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: r.content.replace('Spatially-explicit models', '<strong class="font-medium text-involve-text">Spatially-explicit models</strong>').replace('autonomously task sensors', '<strong class="font-medium text-involve-text">autonomously task sensors</strong>') }} />
                </div>
            ))}
        </div>
    );
}

// ── Domain Grid ──────────────────────────────────────────────────────────────

function DomainGrid() {
    const domains = [
        { color: 'bg-involve-blue', label: 'Sovereignty & Strategic Autonomy', title: 'Nations want independent access to Earth data', body: "Europe's Copernicus Sentinel constellations and the proposed EU Governmental EO Service explicitly aim for autonomy in weather, environment, and security data. NATO's JADC2 and US Space Force modernization both depend on integrated geospatial ISR. Governments view geospatial infrastructure as critical to sovereignty — building their own capabilities rather than depending on foreign providers. This creates a structural demand pull for sovereign-controlled, domestic sensing infrastructure." },
        { color: 'bg-involve-amber', label: 'Climate Risk Exposure', title: 'Climate change is now a systemic economic risk', body: 'WEF ranks failure to mitigate climate change among the top near-term global threats. Businesses and regulators demand quantifiable climate analytics. Continuous Earth monitoring feeds adaptation: tracking ice melt, deforestation, flood extents, and urban heat islands. Companies like Satelligence have noted that embedding "Earth Intelligence" into supply-chain decisions is no longer optional — it is central to risk management.' },
        { color: 'bg-involve-green', label: 'Energy Transition', title: 'Renewables and smart grids depend on geospatial data', body: 'Solar irradiance mapping, land-use analysis for wind farms, grid stability monitoring, and vegetation management along transmission corridors all require persistent, AI-enhanced Earth data. The US DOE explicitly calls out satellite imagery and AI/ML analytics for enhanced vegetation management as operational requirements — not future-state experiments.' },
        { color: 'bg-[#a78bfa]', label: 'Defence Modernisation', title: 'Real-time ISR now extends beyond satellites', body: "Current conflicts have highlighted the need for real-time situational awareness at operational tempo. ISR now extends beyond orbital satellites to high-altitude platforms and UAVs, fusing multiple domains. IRIS-France notes that Western militaries are rapidly integrating space and stratospheric sensors for persistent, AI-driven data fusion. The stratospheric layer specifically fills the gap between drones (short-range, weather-limited) and satellites (fixed orbit, coarse revisit) — with both persistence and re-taskability." },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-involve-border border border-involve-border my-8">
            {domains.map((d, i) => (
                <div key={i} className="bg-involve-panel p-6 hover:bg-involve-bg transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${d.color}`} />
                        <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-involve-dim">{d.label}</div>
                    </div>
                    <div className="text-[14px] font-semibold text-involve-text mb-2">{d.title}</div>
                    <div className="text-[12px] font-light text-involve-muted leading-relaxed">{d.body}</div>
                </div>
            ))}
            {/* Supply Chain — full width */}
            <div className="bg-involve-blue/4 p-6 hover:bg-involve-bg transition-colors md:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0 bg-involve-cyan" />
                    <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-involve-dim">Supply Chain Resilience</div>
                </div>
                <div className="text-[14px] font-semibold text-involve-cyan mb-2">Global supply chains embed Earth Intelligence into logistics and insurance</div>
                <div className="text-[12px] font-light text-involve-muted leading-relaxed max-w-2xl">Firms use satellite analytics to monitor shipping routes, ports, factories, and commodity landscapes for risk — crop failures, fires, flooding, sanctions enforcement. This embeds Earth Intelligence directly into financial risk models and supply-chain operations platforms. The industry direction is clear: <strong className="font-medium text-involve-text">geospatial, AI, IoT, and cloud are converging into new "digital infrastructures"</strong> that businesses pay for on subscription, just as they pay for cloud compute and networking today.</div>
            </div>
        </div>
    );
}

// ── Competitor Table ─────────────────────────────────────────────────────────

function CompTable() {
    const rows = [
        { group: 'Satellite Operators', name: 'Planet Labs, Maxar, ICEYE, BlackSky', detail: 'Own: satellite constellations, basic analytics dashboards, government distribution relationships. Lack: persistence over a single area (orbit-constrained revisit), re-taskability within hours, low-cost deployment, and an integrated AI intelligence layer.', gap: <Badge color="blue">Persistence + AI layer</Badge> },
        { group: 'EO Analytics Firms — Software-first, Data-light', name: 'Orbital Insight, Descartes Labs, Capella Insight, Upstream Tech', detail: 'Own: AI models, domain analytics, customer relationships in specific verticals. Lack: hardware — they purchase third-party imagery and are therefore dependent on external data providers for quality, cadence, and availability.', gap: <Badge color="green">Hardware independence</Badge> },
        { group: 'Defence Integrators and Primes', name: 'Lockheed Martin, Thales, BAE Systems', detail: 'Own: defence distribution, program management depth, classified infrastructure access. Lack: entrepreneurial speed, commercial infrastructure pricing, proprietary AI layer. Programmes are classified, slow to procure, and not available commercially.', gap: <Badge color="amber">Agility + dual-use commercial</Badge> },
        { group: 'AI-first SaaS / Intelligence Platforms', name: 'Palantir, Anduril, niche spatial SaaS', detail: 'Own: data platform infrastructure, government integration, AI orchestration frameworks. Lack: control over data acquisition — they ingest whatever is available. Their data quality depends on third-party supply.', gap: <Badge color="purple">Proprietary data pipeline</Badge> },
    ];

    return (
        <div className="flex flex-col gap-px bg-involve-border border border-involve-border my-8">
            {/* Header */}
            <div className="grid bg-involve-bg border-b border-involve-border" style={{ gridTemplateColumns: '200px 1fr 160px' }}>
                {['Competitor type', 'What they own · What they lack', "Involve's gap vs them"].map((h, i) => (
                    <div key={i} className="px-4 py-3 font-mono text-[10px] tracking-[0.12em] uppercase text-involve-dim border-r border-involve-border last:border-r-0">{h}</div>
                ))}
            </div>
            {rows.map((r, ri) => (
                <>
                    {/* Group subheader */}
                    <div key={`g${ri}`} className="px-4 py-2 font-mono text-[10px] tracking-[0.1em] uppercase text-involve-dim bg-involve-bg border-b border-involve-border">{r.group}</div>
                    <div key={`r${ri}`} className="grid bg-involve-panel hover:bg-involve-bg transition-colors" style={{ gridTemplateColumns: '200px 1fr 160px' }}>
                        <div className="px-4 py-4 text-[13px] font-medium text-involve-text border-r border-involve-border leading-snug">{r.name}</div>
                        <div className="px-4 py-4 text-[12px] font-light text-involve-muted border-r border-involve-border leading-relaxed">{r.detail}</div>
                        <div className="px-4 py-4">{r.gap}</div>
                    </div>
                </>
            ))}
            {/* Involve row */}
            <div className="px-4 py-2 font-mono text-[10px] tracking-[0.1em] uppercase text-involve-dim bg-involve-blue/4 border-y border-involve-blue/20">Involve Space — Full-Stack Earth Intelligence</div>
            <div className="grid bg-involve-blue/4" style={{ gridTemplateColumns: '200px 1fr 160px' }}>
                <div className="px-4 py-4 text-[13px] font-medium text-involve-blue border-r border-involve-border">Involve Space</div>
                <div className="px-4 py-4 text-[12px] font-light text-involve-muted border-r border-involve-border leading-relaxed"><strong className="font-medium text-involve-text">Owns all three layers:</strong> stratospheric sensing hardware (Stratostats® + Stratorelay®), autonomous navigation and data infrastructure (Neurostar®), and AI-native GeoAI platform (CLEAR). Persistent stratospheric coverage cannot be replicated by satellite operators. Proprietary data pipeline cannot be matched by analytics-only firms. <strong className="font-medium text-involve-text">No single competitor covers this spectrum in the stratospheric domain.</strong></div>
                <div className="px-4 py-4"><Badge color="green">Integrated infrastructure</Badge></div>
            </div>
        </div>
    );
}

// ── Implications Band ────────────────────────────────────────────────────────

function ImplBand() {
    const rows = [
        { title: 'Owning sensing + AI yields leverage', body: 'Control over the full stack — from data capture to intelligence delivery — creates <strong>high switching costs</strong>: customers relying on Involve\'s data loop cannot easily substitute only a part without losing either persistence or the integrated insight. It also multiplies value: each additional sensor or data source strengthens models, which increases demand for more data. In technology M&A, companies securing "strategic control of data" and convergence of hardware and software have been most competitive.', borderTop: true },
        { title: 'Infrastructure logic enhances defensibility', body: 'Infrastructure platforms benefit from scale and network effects. Every new user that depends on Involve\'s intelligence layer deepens its moat. As more civil and defence actors integrate Involve\'s data into operations, Involve can leverage that scale to improve models, negotiate data partnerships, and standardise APIs. Infrastructure players also enjoy <strong>more stable, recurring subscription revenue</strong> than one-off data or analytics sales.' },
        { title: 'Category creation — "Earth Intelligence Infrastructure" — is achievable', body: '"Geospatial intelligence" was historically military jargon. "Earth observation" is too broad. But "Earth Intelligence Infrastructure" is emerging as a distinct category. By articulating itself as an infrastructure provider, <strong>Involve can claim category leadership</strong> rather than a position in an existing contested market.' },
        { title: 'Dual-use and sovereignty — a structural procurement advantage', body: "Involve's technology serves both commercial and national-security needs, appealing to a wider set of stakeholders. In contexts where <strong>strategic data sovereignty is a procurement criterion</strong> — increasingly the case across Europe and NATO — having a domestic provider and non-satellite sensing modality is a decisive advantage." },
    ];
    return (
        <div className="flex flex-col gap-px bg-involve-border border border-involve-border my-8">
            {rows.map((r, i) => (
                <div key={i} className={`grid bg-involve-panel hover:bg-involve-bg transition-colors ${i === 0 ? 'border-t-2 border-involve-blue' : ''}`} style={{ gridTemplateColumns: '260px 1fr' }}>
                    <div className="px-5 py-5 text-[14px] font-semibold text-involve-text leading-snug border-r border-involve-border flex items-start">{r.title}</div>
                    <div className="px-5 py-5 text-[12.5px] font-light text-involve-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: r.body }} />
                </div>
            ))}
        </div>
    );
}

// ── Split 2 ──────────────────────────────────────────────────────────────────

function SatVsHAPS() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-involve-border border border-involve-border my-8">
            <div className="bg-involve-panel p-6">
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-dim mb-2">Orbiting Satellites</div>
                <div className="text-[14px] font-semibold text-involve-text mb-3">Global reach, fixed revisit schedule</div>
                <div className="text-[12px] font-light text-involve-muted leading-relaxed mb-4">Traditional EO uses orbiting satellites for global snapshots — high resolution at high launch cost, but episodic: coverage is tied to the orbital period. A satellite photographs your area of interest on a schedule. It cannot loiter. It cannot be rapidly retasked to a new region without waiting for the next orbital window. Re-launch after a failure is a $100M+ event.</div>
                <ul className="flex flex-col gap-1.5">
                    {['Global coverage but sparse temporal density', 'Fixed revisit intervals — orbital mechanics determine coverage', 'High launch and replacement cost', 'Cannot loiter over a specific target'].map((item, i) => (
                        <li key={i} className="text-[12px] font-light text-involve-muted">• {item}</li>
                    ))}
                </ul>
            </div>
            <div className="bg-involve-blue/4 p-6 border-t-2 border-involve-blue">
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-dim mb-2">Stratospheric Platforms (HAPS)</div>
                <div className="text-[14px] font-semibold text-involve-blue mb-3">Regional persistence, rapid re-deployment, reusable</div>
                <div className="text-[12px] font-light text-involve-muted leading-relaxed mb-4">Stratospheric platforms loiter over an area for days or weeks at a fraction of satellite cost. Airbus Zephyr flew <strong className="font-medium text-involve-text">64 days continuously</strong>. Involve's Stratostats® v2 targets 90+ days. Unlike a satellite, a platform can be recovered, refurbished, and re-deployed. Real-time intelligence requires continuous monitoring — HAPS provides the "standing watch" that orbital mechanics prevents.</div>
                <ul className="flex flex-col gap-1.5">
                    {['Persistent coverage over target area — not scheduled revisit', 'Rapidly retasked — re-deploy within 48 hours', 'Reusable hardware — recovery and refurbishment cycle', 'Lower regulatory burden than orbital launches'].map((item, i) => (
                        <li key={i} className="text-[12px] font-medium text-involve-blue">• {item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function FullStackRows() {
    const rows = [
        { layer: 'Hardware Layer', sublabel: 'Data ownership', color: 'text-involve-amber', borderColor: 'border-t-involve-amber', content: "Controlling the sensing hardware means owning the raw data pipeline. Many competitors outsource satellites or rely on commercial data providers. Involve's <strong>independence on hardware yields proprietary data</strong> — an advantage for unique coverage density, operational stealth (dual-use), and guaranteed availability without third-party dependency. Stratostats® and Stratorelay® are the hardware layer; no external provider can replicate Involve's persistent stratospheric data stream." },
        { layer: 'Data & Orchestration', sublabel: 'Fusion layer', color: 'text-involve-blue', borderColor: '', content: 'Beyond hardware, one must manage, tag, index, and fuse data across sources. Involve\'s data infrastructure ingests multiple sensor feeds (EO, SAR, multispectral, IoT) into a unified system. The <strong>orchestration capability</strong> — deciding which sensor to task, when to acquire, and how to align outputs — is itself a competitive edge. This is the layer that enables multi-tenancy: multiple customers consuming the same persistent data stream, multiplying margin without multiplying cost.' },
        { layer: 'Intelligence (AI) Layer', sublabel: 'CLEAR platform', color: 'text-involve-green', borderColor: '', content: "Converting data to intelligence requires AI models and domain-specific workflows. A pure hardware firm delivers imagery; a pure software firm needs to license data from someone else. Involve's integrated model delivers both — enabling <strong>tighter innovation loops</strong>. CLEAR's agentic architecture (prompt router, vision agents, standardizer) processes data from all Involve platforms into structured intelligence output: annotated maps, sector reports, quantitative alerts, and API streams." },
    ];
    return (
        <div className="flex flex-col gap-px bg-involve-border border border-involve-border my-4">
            {rows.map((r, i) => (
                <div key={i} className={`grid bg-involve-panel hover:bg-involve-bg transition-colors ${r.borderColor ? `border-t-2 ${r.borderColor}` : ''}`} style={{ gridTemplateColumns: '180px 1fr' }}>
                    <div className="px-5 py-5 font-mono text-[11px] tracking-[0.1em] uppercase flex flex-col justify-center border-r border-involve-border leading-snug">
                        <span className={`text-[13px] font-semibold font-sans tracking-normal mb-0.5 ${r.color}`}>{r.layer}</span>
                        <span className="text-involve-dim text-[10px]">{r.sublabel}</span>
                    </div>
                    <div className="px-5 py-5 text-[12.5px] font-light text-involve-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: r.content }} />
                </div>
            ))}
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function GeoAIPositioningPage() {
    return (
        <div className="animate-in fade-in duration-500 w-full max-w-5xl mx-auto pb-20">
            <DocHeader
                breadcrumb={<>01. Strategy &amp; Market <span className="opacity-30 mx-1">›</span> <span className="text-involve-blue">GeoAI &amp; Earth Intelligence Positioning</span></>}
                title="GeoAI & Earth Intelligence"
                titleStrong="Strategic Category Positioning"
                subtitle="How the Earth Intelligence category is forming, why it is becoming foundational infrastructure, and where Involve Space sits within it. Covers the EO-to-Intelligence evolution, GeoAI definition, hardware–AI convergence thesis, multidomain fusion, competitive landscape framing, and the strategic implications of vertical integration."
                meta={[
                    { label: 'Document', value: 'IS-DR-MKT-02' },
                    { label: 'Type', value: 'Strategic positioning · Category analysis' },
                    { label: 'Audience', value: 'Investor · Partner · Strategic' },
                    { label: 'Revision', value: 'A — Feb 2026' },
                ]}
            />

            {/* §1 Executive Overview */}
            <ContentBlock>
                <SectionHeader eyebrow="Executive Overview" title="Earth Intelligence: from data product to foundational infrastructure" desc="AI is not a tool layered on top of Earth Observation — it is the catalyst transforming geospatial data into decision-ready intelligence" />
                <BodyText>GeoAI and "Earth Intelligence" mark a structural shift beyond traditional Earth Observation. Rather than simply collecting imagery (EO 1.0) or running standalone analytics (EO 2.0), the industry is converging on an integrated intelligence layer: <strong className="text-involve-text font-medium">continuous, multi-source sensing fused with advanced AI to deliver real-time insights</strong>. In this paradigm, AI is the catalyst that transforms vast geospatial data into decisions.</BodyText>
                <BodyText>Involve Space sits at the nexus of this transformation: persistent stratospheric sensor fleets coupled with a GeoAI orchestration layer (CLEAR). By <strong className="text-involve-text font-medium">controlling both sensing hardware and the AI-driven intelligence layer end-to-end</strong>, Involve aligns with the emerging model of Earth Intelligence as foundational infrastructure — akin to cloud computing or energy networks. Most players in this space focus on only one piece of the stack. Involve's vertical integration is the structural differentiator.</BodyText>

                {/* Positioning summary */}
                <div className="border border-involve-blue/20 bg-involve-blue/4 p-8 my-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: 'Category position', val: 'Earth Intelligence Infrastructure', valColor: 'text-involve-blue', desc: "Not a satellite operator. Not an analytics vendor. The first vertically-integrated stratospheric sensing + GeoAI platform." },
                        { label: 'Stack ownership', val: 'Sensing → Data → AI → Intelligence', valColor: 'text-involve-text', desc: 'Every layer controlled in-house: platforms, Neurostar® navigation, CLEAR GeoAI, and data infrastructure.' },
                        { label: 'Market timing', val: 'Category formation window open', valColor: 'text-involve-green', desc: 'Resembles early cloud: sensors are cheaper, AI is powerful enough, end-users have demand and budget simultaneously.' },
                    ].map((item, i) => (
                        <div key={i}>
                            <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-involve-dim mb-1">{item.label}</div>
                            <div className={`text-[15px] font-semibold mb-1 ${item.valColor}`}>{item.val}</div>
                            <div className="text-[12px] font-light text-involve-muted leading-relaxed">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </ContentBlock>

            <SectionDivider />

            {/* §2 Industry Evolution */}
            <ContentBlock>
                <SectionHeader eyebrow="Industry Evolution" title="From EO 1.0 to Intelligence Infrastructure" desc="Three stages of Earth Observation evolution — and three industry pressures driving the transition to EO 3.0" />
                <EvoTrack />

                <CardGrid3 cards={[
                    { num: 'PRESSURE 01', title: 'Sensor proliferation and data overload', body: 'Satellite constellations and HAPS generate petabytes of imagery. Without AI, "actionable insights" become almost impossible — there is simply too much data for manual analysis to handle.', stat: '2 exabytes of satellite data projected by 2032 (WEF) — the data bottleneck is the constraint, not data availability', borderColor: 'border-t-involve-border/40' },
                    { num: 'PRESSURE 02', title: 'Real-time decision requirements', body: <>Climate disasters, infrastructure failures, and military events unfold in hours. Users now expect geospatial intelligence as an <strong>"always-on" service</strong> — analogous to subscribing to an insurance policy that provides immediate risk awareness rather than periodic assessments.</>, stat: 'Operational standard: continuous geo-streaming embedded directly into GIS and decision tools', borderColor: 'border-t-involve-amber' },
                    { num: 'PRESSURE 03', title: 'Geopolitical and environmental instability', body: <>Climate volatility and great-power competition raise the stakes. Military and policy planners now see space-based ISR as <strong>essential infrastructure</strong>. Europe explicitly calls for EO to be treated as strategic infrastructure for climate resilience, disaster response, and security.</>, stat: '$2.718tn global military expenditure in 2024 — steepest increase since at least 1988 (SIPRI)', borderColor: 'border-t-[#ff6060]/40' },
                ]} />
            </ContentBlock>

            <SectionDivider />

            {/* §3 Defining GeoAI */}
            <ContentBlock>
                <SectionHeader eyebrow="Technology Definition" title="What GeoAI is — and what it is not" desc="GeoAI goes beyond traditional GIS and classical EO analytics — it applies deep learning to multi-modal geospatial inputs with spatially-explicit models" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-involve-border border border-involve-border mb-8">
                    <div className="bg-involve-panel p-6">
                        <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-dim mb-2">Traditional GIS</div>
                        <div className="text-[14px] font-semibold text-involve-text mb-3">Deterministic overlays on structured geodata</div>
                        <div className="text-[12px] font-light text-involve-muted leading-relaxed">GIS (Geographic Information Systems) are platforms for storing, managing, and visualizing structured geodata using deterministic overlays and queries. Classical EO analytics apply computer vision or statistical methods to imagery. <strong className="font-medium text-involve-text">Outputs are static and require human interpretation</strong> to translate into decisions.</div>
                    </div>
                    <div className="bg-involve-bg p-6 border-t-2 border-involve-blue">
                        <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-dim mb-2">GeoAI</div>
                        <div className="text-[14px] font-semibold text-involve-text mb-3">Machine learning on multi-modal spatial inputs</div>
                        <div className="text-[12px] font-light text-involve-muted leading-relaxed">GeoAI uses machine learning and deep learning to extract, classify, and detect patterns from multi-modal geospatial inputs: images, LiDAR, IoT sensors, and even text. It encompasses <strong className="font-medium text-involve-text">"spatially explicit" AI models</strong> tailored to geography — models that factor in location, shape, and proximity for tasks like object detection, pattern recognition, and spatiotemporal forecasting.</div>
                    </div>
                </div>

                <BodyText>The rise of <strong className="text-involve-text font-medium">geospatial foundation models</strong> is amplifying GeoAI's potential. Just as large language models embed text semantics, emerging geospatial foundation models embed visual and spatial context, compressing vast imagery archives into compact representations. IBM's Prithvi-EO series enables processing of decades of satellite data via "earth embeddings" — mapping forests, floods, and infrastructure with high accuracy.</BodyText>
                <BodyText>The most advanced GeoAI systems balance predictive performance with interpretability. In parallel, <strong className="text-involve-text font-medium">agentic systems</strong> are emerging — AI agents that autonomously task sensors, dispatch platforms to detected events, and orchestrate multi-modal pipelines. Involve's CLEAR platform is architected exactly for this role: a cloud-based GeoAI orchestration layer that ingests multi-source feeds, applies foundation-model analytics, and coordinates platform re-tasking.</BodyText>
                <CapabilityStack />
            </ContentBlock>

            <SectionDivider />

            {/* §4 Earth Intelligence as Infrastructure */}
            <ContentBlock>
                <SectionHeader eyebrow="Structural Framework" title="Earth Intelligence as foundational infrastructure" desc="Five macro drivers are making geospatial AI a ubiquitous platform — on par with cloud and energy networks" />
                <BodyText>"Earth Intelligence" refers to treating geospatial data and AI as core infrastructure — not a discretionary analytics service, but a <strong className="text-involve-text font-medium">foundational decision-support layer</strong> embedded in operations. The EU Space Conference declared that space assets (satellite navigation, EO, communications) are strategic infrastructure vital for climate monitoring, disaster response, security, and economic resilience.</BodyText>
                <DomainGrid />
            </ContentBlock>

            <SectionDivider />

            {/* §5 Hardware + AI Convergence */}
            <ContentBlock>
                <SectionHeader eyebrow="Strategic Thesis" title="Convergence of hardware and AI — why owning the full stack matters" desc="McKinsey observes that the most competitive technology acquirers target 'strategic control of data, AI models, and computing efficiency' — this maps directly to Involve's architecture" />
                <BodyText>In technology industries, leaders strive for end-to-end control of the stack. McKinsey's analysis of technology M&amp;A finds that recent targets are structured around "strategic control of data, access to AI models, and computing efficiency" — and predicts convergence of hardware, cloud, and model layers to secure performance and IP. In the GeoAI context, controlling the sensor layer, the data processing layer, and the intelligence layer creates a compounding moat: each additional data source strengthens models, which in turn increases demand for more data.</BodyText>
                <SatVsHAPS />
                <div className="mt-6 mb-2 font-mono text-[10px] tracking-[0.12em] uppercase text-involve-dim">Involve Space — Full Stack Control</div>
                <FullStackRows />
                <Callout variant="green"><strong className="text-involve-text font-medium not-italic">The moat mechanism:</strong> Vertical integration across sensing, data, and AI creates defensibility in two directions. First, new customers face switching costs because Involve controls both input (unique persistent data with no open-access equivalent) and output (tailored, domain-specific intelligence). Second, the data flywheel compounds: each mission generates labelled data that improves models, which delivers better intelligence, which attracts more customers, which funds more missions.</Callout>
            </ContentBlock>

            <SectionDivider />

            {/* §6 Multidomain Intelligence */}
            <ContentBlock>
                <SectionHeader eyebrow="Future Architecture" title="Multidomain intelligence evolution" desc="Earth Intelligence will not be siloed by altitude or sector — it blends space, stratosphere, aerial, and ground sensing across civil and defence domains" />
                <BodyText>The future of Earth Intelligence is inherently multi-domain. It blends space, stratospheric, aerial, and ground sensing — and it serves both civil and defence simultaneously. Currently, EO and ISR systems have been somewhat siloed: civil satellites for weather and mapping, military satellites for reconnaissance, drones for local tasks. GeoAI demands fusion across these silos.</BodyText>
                <CardGrid2 cards={[
                    { num: 'DOMAIN 01 — STRATOSPHERE', title: 'The persistence layer that satellites cannot provide', body: <>High-altitude drones and balloons serve both commercial (telecom, environmental) and military (ISR, communications relay) missions. This domain provides <strong>persistent monitoring without the diplomatic complications of satellite overflight</strong> and without the range limitations of conventional aircraft. Involve operates in this domain by design — and has the only commercial HAPS platform with demonstrated station-keeping TRL 9.</>, stat: 'Involve position: Stratostats® TRL 9 · 200+ flights · only commercial HAPS with persistent station-keeping at this maturity level', borderColor: 'border-t-involve-blue' },
                    { num: 'DOMAIN 02 — SATELLITE', title: 'Complementary global coverage layer', body: <>New constellations — optical, radar (SAR), hyperspectral — will complement stratospheric data, not replace it. A forest cover analysis might use daily UAV scans plus weekly satellite imagery plus continuous HAPS data. <strong>GeoAI's role is fusion</strong>: ingesting all three into a unified model that resolves the temporal and spatial gaps each source alone cannot fill.</>, stat: 'CLEAR role: Ingests Copernicus, commercial satellite, IoT feeds alongside Involve platform data — single intelligence output regardless of source', borderColor: 'border-t-involve-amber' },
                    { num: 'DOMAIN 03 — GROUND / IOT', title: 'In-situ context that remote sensing alone cannot provide', body: <>Sensors on the ground — weather stations, seismographs, traffic cameras, industrial IoT — add the physical context that aerial imagery cannot directly measure. Future GeoAI platforms will correlate in-situ signals with aerial data. <strong>CLEAR's architecture is designed to be domain-agnostic</strong>, accepting any structured sensor feed alongside platform imagery.</>, stat: 'CLEAR architecture: Multi-source fusion — agentic decoupling allows any sensor type to be added as a new vision agent module', borderColor: 'border-t-involve-green' },
                    { num: 'DOMAIN 04 — CIVIL–DEFENCE CONVERGENCE', title: 'Dual-use by design — same algorithms, different frontends', body: <>The same geospatial AI platforms are used for climate resilience and national security. Mapping wildfire risk and mapping battlefield terrain both use similar algorithms on multispectral imagery. Involve's platform is dual-use by design. <strong>The same CLEAR layer can feed different frontends</strong> for different customer types.</>, stat: 'Involve dual-use: MoD contract for defence ISR · commercial EO mapping · IOD rideshare · agricultural intelligence — same platform, different customers', borderColor: 'border-t-[#a78bfa]/60' },
                ]} />
            </ContentBlock>

            <SectionDivider />

            {/* §7 Competitive Landscape */}
            <ContentBlock>
                <SectionHeader eyebrow="Competitive Landscape" title="Structural positioning across the competitor landscape" desc="Involve occupies a category position that no existing player covers — not because it is better at one layer, but because it controls all three" />
                <BodyText>The competitive landscape for Earth Intelligence is organised around players who own one or two layers of the sensing-to-intelligence stack. <strong className="text-involve-text font-medium">No pure competitor covers the entire spectrum with the same sensor modality</strong> (stratosphere) and an integrated AI platform. Understanding where each competitor type sits explains why Involve's vertical integration is structurally differentiated, not just technically distinct.</BodyText>
                <CompTable />
            </ContentBlock>

            <SectionDivider />

            {/* §8 Why This Moment Matters */}
            <ContentBlock>
                <SectionHeader eyebrow="Market Timing" title="Why this moment matters — five timing indicators" desc="Sensors are cheaper, AI is powerful enough, and end-users have both demand and budget — a rare alignment that mirrors the early days of cloud infrastructure" />
                <StatsBar stats={[
                    { val: '$12.1', valSuffix: 'bn', label: 'Satellite data services 2024', sub: '→ $29.6bn by 2030 · 16.3% CAGR' },
                    { val: '25', valSuffix: '%', label: 'HAPS market CAGR (2026–2031)', sub: '→ $4.3bn by 2031 (Mordor Intelligence)' },
                    { val: '$470', valSuffix: 'M', label: 'GeoAI solutions by 2030', sub: '25% CAGR · from sub-$100M base today' },
                    { val: '$2.7', valSuffix: 'tn', label: 'Global military spend 2024', sub: '+9.4% YoY · steepest increase since 1988' },
                ]} />
                <CardGrid3 cards={[
                    { num: 'INDICATOR 01', title: 'Surging geospatial markets across all segments', body: 'Satellite data services are growing at 16.3% CAGR. The defence/security segment is already ~25% of this market. High-growth niches — climate monitoring, 5G relay, HAPS telecommunications — are compounding growth. GeoAI solutions specifically are forecast at 25% CAGR, reflecting AI\'s penetration of the geospatial workflow.', stat: 'Defence share: ~25% of satellite data services market today — and defence spend is accelerating', borderColor: 'border-t-involve-green' },
                    { num: 'INDICATOR 02', title: 'Pent-up demand from commercial digitisation', body: 'Smart-city initiatives, digital twins, precision agriculture, and industrial asset monitoring all require continuous remote sensing. As companies digitise physical assets — pipelines, mines, farms, transmission corridors — they demand always-on monitoring. This is latent demand that existing technology could not previously serve economically.', stat: 'Digital twins: $21bn (2025) → $150bn (2030) at 47.9% CAGR — all require persistent EO updates', borderColor: 'border-t-involve-blue' },
                    { num: 'INDICATOR 03', title: 'Defence procurement at record pace and openness to commercial', body: <>Global military budgets at $2.718tn — the highest ever recorded. Procurement is opening to commercial: NRO's "largest-ever" decade-long EOCL commercial imagery contracts prove governments will buy commercial at scale when it improves resilience.</>, stat: 'MoD entry: Involve\'s €2M Italian MoD contract is the template — replicable across NATO procurement vehicles', borderColor: 'border-t-involve-amber' },
                    { num: 'INDICATOR 04', title: 'Climate and nature mandates creating regulatory demand', body: <>International commitments (Paris Agreement, Global Stocktake) and emerging regulations require enhanced monitoring of emissions, land-use, and hazards. COP29 and the UN explicitly recognised EO and AI systems as critical for resilience. <strong>Corporates must report what they previously only needed to estimate.</strong></>, stat: 'Emerging compliance: CSRD, TNFD, SFDR all create mandatory monitoring obligations for large corporates', borderColor: 'border-t-involve-green/50' },
                    { num: 'INDICATOR 05', title: 'AI adoption in geospatial workflows is accelerating', body: 'Platform providers (Esri, Google Earth Engine) are embedding ML features and integrating with enterprise data stacks. The GEO/OECD AI for Earth initiative shows that organisations now expect GeoAI capabilities as first-class features — not specialised add-ons. Spatial analytics are becoming standard capabilities in data platforms, not optional extensions.', stat: 'Platform signal: Esri + ICEYE integration embeds continuous SAR directly into ArcGIS operations workflows', borderColor: 'border-t-[#a78bfa]/60' },
                    { num: 'TIMING SYNTHESIS', title: 'The cloud parallel — a rare confluence window', body: <>Taken together, these trends imply a rare alignment: <strong>sensors are cheaper and more available, AI is powerful enough to use them, and end-users have both demand and budget simultaneously</strong>. In broad strokes, this resembles the early days of cloud computing — large unmet demand meeting new enabling technology. This confluence creates a window where a new category — Earth Intelligence — can be shaped by an early leader.</>, stat: 'Window thesis: Category leaders in infrastructure technology tend to be defined in the first 3–5 years of formation — before the category becomes contested by incumbents', borderColor: 'border-t-involve-cyan', numColor: 'text-involve-cyan' },
                ]} />
            </ContentBlock>

            <SectionDivider />

            {/* §9 Strategic Positioning Implications */}
            <ContentBlock>
                <SectionHeader eyebrow="Strategic Conclusions" title="Four strategic positioning implications" desc="How the above analysis translates into defensible competitive advantages for Involve Space" />
                <ImplBand />
                <Callout variant="green"><strong className="text-involve-text font-medium not-italic">Investor-grade conclusion:</strong> Involve's structural positioning — controlling sensors, data, and AI — aligns with the deep market forces at play. This is not merely a business plan; it is a solution emerging naturally from the industry's evolution. The company is poised to benefit from ongoing shifts towards integrated geospatial infrastructure, and its positioning is both <strong className="text-involve-text font-medium not-italic">timely</strong> (the category formation window is open now) and <strong className="text-involve-text font-medium not-italic">defensible</strong> (vertical integration creates compounding switching costs at every layer of the stack).</Callout>
                <RefNote>Sources: GEO / AI for Good Summit · WEF (2024) · SIPRI (2025) · EU Space Conference / Copernicus · McKinsey Technology M&amp;A · IRIS-France (2026) · TRENDS Research &amp; Advisory · Grand View Research · Mordor Intelligence · IndustryARC · Satelligence · Esri GeoAI Documentation · GeoBuiz 2026. Full source list with footnote references [1–37] available in the source document.</RefNote>
            </ContentBlock>

            <NextSectionCard
                title="Competitive Landscape Analysis"
                description="Deep-dive competitive analysis across satellite operators, analytics vendors, defence integrators, and AI platforms."
                path="/dataroom/01_Strategy_and_Market/03_Competitive_Landscape_Analysis"
            />
        </div>
    );
}
