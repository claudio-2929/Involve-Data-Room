import { DocHeader, SectionHeader, BodyText, ContentBlock, SectionDivider } from '../components/ui/core';
import { NextSectionCard } from '../components/shared/NavigationHelpers';

// ── Shared primitives ───────────────────────────────────────────────────────

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

function Callout({ children }: { children: React.ReactNode }) {
    return (
        <div className="my-7 px-5 py-4 bg-involve-blue/6 border-l-2 border-involve-blue/30 text-sm font-light text-involve-muted italic leading-relaxed">
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
                    <div className="text-[1.9rem] font-semibold tracking-[-0.04em] text-involve-text leading-none mb-1">
                        {s.val}<span className="text-involve-blue">{s.valSuffix}</span>
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-involve-dim leading-snug">{s.label}</div>
                    <div className="text-[11px] text-involve-dim mt-1 italic">{s.sub}</div>
                </div>
            ))}
        </div>
    );
}

function DataTable({ headers, rows, highlightCol }: {
    headers: string[];
    rows: (string | React.ReactNode)[][];
    highlightCol?: number;
}) {
    return (
        <div className="my-8 overflow-x-auto border border-involve-border">
            <table className="w-full text-[12px] border-collapse">
                <thead>
                    <tr className="bg-involve-panel border-b border-involve-border">
                        {headers.map((h, i) => (
                            <th key={i} className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.12em] uppercase text-involve-dim font-medium whitespace-nowrap">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, ri) => (
                        <tr key={ri} className="border-b border-involve-border hover:bg-involve-blue/5 transition-colors last:border-b-0">
                            {row.map((cell, ci) => (
                                <td key={ci} className={`px-4 py-3 font-light leading-snug align-top ${ci === 0 ? 'font-medium text-involve-text' : 'text-involve-muted'} ${highlightCol !== undefined && ci === highlightCol ? 'text-involve-green font-medium' : ''}`}>
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

function Split2({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-involve-border border border-involve-border my-8">
            <div className="bg-involve-panel p-6">{left}</div>
            <div className="bg-involve-bg p-6">{right}</div>
        </div>
    );
}

function SplitCell({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
    return (
        <div>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-dim mb-2">{label}</div>
            <div className="text-[14px] font-semibold text-involve-text mb-2">{title}</div>
            <div className="text-[12.5px] font-light text-involve-muted leading-relaxed">{children}</div>
        </div>
    );
}

// ── Driver Cards ─────────────────────────────────────────────────────────────

function DriverGrid({ cards }: { cards: { num: string; title: string; body: string; statVal: string; statLabel: string; accentColor?: string }[] }) {
    const colors = ['rgba(61,155,255,0.4)', 'rgba(240,160,32,0.4)', 'rgba(52,208,122,0.4)'];
    const textColors = ['text-involve-blue', 'text-involve-amber', 'text-involve-green'];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-involve-border border border-involve-border my-8">
            {cards.map((c, i) => (
                <div key={i} className="bg-involve-panel p-6 hover:bg-involve-bg transition-colors" style={{ borderTop: `2px solid ${c.accentColor ?? colors[i]}` }}>
                    <span className={`font-mono text-[10px] tracking-[0.15em] text-involve-blue mb-2 block ${i > 0 ? textColors[i] : ''}`}>{c.num}</span>
                    <div className="text-[14px] font-semibold text-involve-text mb-2 leading-tight">{c.title}</div>
                    <div className="text-[12px] font-light text-involve-muted leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: c.body }} />
                    <div className="border-t border-involve-border pt-3 mt-2">
                        <div className={`text-[1.1rem] font-semibold tracking-tight ${textColors[i]}`}>{c.statVal}</div>
                        <div className="font-mono text-[10px] text-involve-dim mt-1">{c.statLabel}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ── Funnel Visual ─────────────────────────────────────────────────────────────

function FunnelRow({ layer, layerLabel, barWidth, barLabel, mainVal, subVal, accent }: {
    layer: string; layerLabel: string; barWidth: string; barLabel: string; mainVal: string; subVal: string; accent?: boolean;
}) {
    return (
        <div className={`grid border-b border-involve-border transition-colors hover:bg-involve-bg ${accent ? 'border-t-2 border-t-involve-blue bg-involve-blue/4' : ''}`} style={{ gridTemplateColumns: '120px 1fr 180px' }}>
            <div className="p-4 border-r border-involve-border font-mono text-[10px] tracking-[0.1em] uppercase flex flex-col gap-1">
                <span className="text-involve-dim text-[9px]">{layer}</span>
                <span className={`text-[12px] font-semibold ${accent ? 'text-involve-blue' : 'text-involve-muted'}`}>{layerLabel}</span>
            </div>
            <div className="p-3 border-r border-involve-border flex items-center">
                <div className={`h-7 flex items-center px-3 font-mono text-[11px] font-medium rounded-sm ${accent ? 'bg-involve-blue/22 border-l-2 border-involve-blue text-involve-blue' : 'bg-involve-blue/10 border-l-2 border-involve-blue/40 text-involve-blue/60'} text-[10px]`} style={{ width: barWidth }}>
                    {barLabel}
                </div>
            </div>
            <div className="p-4 flex flex-col gap-1">
                <div className={`text-[15px] font-semibold tracking-tight ${accent ? 'text-involve-blue' : 'text-involve-text'}`}>{mainVal}</div>
                <div className="font-mono text-[10px] text-involve-dim">{subVal}</div>
            </div>
        </div>
    );
}

// ── SOM Scenario Cards ────────────────────────────────────────────────────────

function ScenarioGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-involve-border border border-involve-border my-8">
            {/* Conservative */}
            <div className="bg-involve-panel p-6 flex flex-col gap-2">
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-dim">Conservative Scenario</div>
                <div className="text-[14px] font-semibold text-involve-text">Limited sell-through, early friction</div>
                <div className="text-[2rem] font-semibold tracking-tight text-involve-muted leading-none">€7.2M</div>
                <div className="font-mono text-[10px] text-involve-dim">Stable across 2026–28</div>
                <div className="grid grid-cols-3 gap-1 mt-2">
                    {['2026', '2027', '2028'].map(y => (
                        <div key={y} className="bg-involve-bg p-2 rounded-sm">
                            <div className="font-mono text-[10px] text-involve-dim">{y}</div>
                            <div className="text-[13px] font-semibold text-involve-muted mt-0.5">€7.2M</div>
                        </div>
                    ))}
                </div>
                <div className="text-[12px] font-light text-involve-muted border-t border-involve-border pt-3 mt-1 leading-relaxed">Fleet: 6/6/6 platforms. Contracted theatres per platform: 0.6. Blended ACV: €2.0M. Reflects early procurement friction, export controls, and slow integration timelines.</div>
            </div>
            {/* Base */}
            <div className="bg-involve-panel p-6 flex flex-col gap-2 border-t-2 border-involve-blue">
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-blue">Base Scenario — Primary forecast</div>
                <div className="text-[14px] font-semibold text-involve-text">Improving utilisation + early multi-tenancy</div>
                <div className="text-[2rem] font-semibold tracking-tight text-involve-blue leading-none">€36M</div>
                <div className="font-mono text-[10px] text-involve-blue/50">by 2028</div>
                <div className="grid grid-cols-3 gap-1 mt-2">
                    {[['2026', '€14.4M'], ['2027', '€24.0M'], ['2028', '€36.0M']].map(([y, v]) => (
                        <div key={y} className="bg-involve-bg p-2 rounded-sm border border-involve-blue/15">
                            <div className="font-mono text-[10px] text-involve-dim">{y}</div>
                            <div className="text-[13px] font-semibold text-involve-blue mt-0.5">{v}</div>
                        </div>
                    ))}
                </div>
                <div className="text-[12px] font-light text-involve-muted border-t border-involve-border pt-3 mt-1 leading-relaxed">Fleet: 6/10/15 platforms. Contracted theatres per platform: 0.8. Blended ACV: €3.0M. CLEAR begins contributing revenue per platform. Primary scenario for Series A modelling.</div>
            </div>
            {/* Aggressive */}
            <div className="bg-involve-panel p-6 flex flex-col gap-2 border-t-2 border-involve-green">
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-green">Aggressive Scenario</div>
                <div className="text-[14px] font-semibold text-involve-text">Multi-tenant analytics — CLEAR monetisation</div>
                <div className="text-[2rem] font-semibold tracking-tight text-involve-green leading-none">€90M</div>
                <div className="font-mono text-[10px] text-involve-green/50">by 2028</div>
                <div className="grid grid-cols-3 gap-1 mt-2">
                    {[['2026', '€36.0M'], ['2027', '€63.0M'], ['2028', '€90.0M']].map(([y, v]) => (
                        <div key={y} className="bg-involve-bg p-2 rounded-sm border border-involve-green/10">
                            <div className="font-mono text-[10px] text-involve-dim">{y}</div>
                            <div className="text-[13px] font-semibold text-involve-green mt-0.5">{v}</div>
                        </div>
                    ))}
                </div>
                <div className="text-[12px] font-light text-involve-muted border-t border-involve-border pt-3 mt-1 leading-relaxed">Fleet: 8/14/20 platforms. Contracted theatres per platform: 1.0 (repeatable + multi-tenant analytics). Blended ACV: €4.5M. Multi-tenancy and CLEAR monetisation meaningfully improves revenue per platform.</div>
            </div>
        </div>
    );
}

// ── Positioning Pillars ───────────────────────────────────────────────────────

const pillars = [
    {
        name: 'Persistence & tasking flexibility',
        logic: 'HAPS-class systems maintain quasi-fixed presence at 20–50 km, enabling persistence over a target region rather than periodic revisits. For infrastructure corridors and maritime approaches, persistence is more valuable than global coverage.',
        evidence: [['blue', 'ITU HAPS definition'], ['green', 'Airbus Zephyr comparator'], ['green', 'NASA SPB 100-day missions']] as const,
    },
    {
        name: 'Cost per monitored km²',
        logic: 'A persistent stratospheric platform concentrates sensing into the specific theatre where the buyer has risk exposure. Multi-tenancy on the same data stream — structurally impossible with tasked satellite capacity — allows unit economics to improve with scale without proportional capex.',
        evidence: [['blue', 'DOE remote sensing guidance'], ['blue', 'Bottom-up TAM model']] as const,
    },
    {
        name: 'Data ownership & sovereignty',
        logic: 'EU policy explicitly centres autonomy and security for observation and monitoring capabilities. "Who controls tasking, raw data custody, and model pipelines" is increasingly a procurement criterion, not just a technical feature. Involve controls all three.',
        evidence: [['amber', 'EU Space Strategy for Security'], ['amber', 'USSF Commercial Space Strategy']] as const,
    },
    {
        name: 'Infrastructure monitoring pull',
        logic: '~79–80M km of power lines globally, 1M+ km gas pipelines, 0.5M km oil pipelines, 1.17M km rail. As monitoring systems become digital, fusing persistent sensing with AI-based prioritisation becomes an operating necessity. US DOE explicitly calls out satellite imagery + AI/ML for vegetation management.',
        evidence: [['green', 'IEA · GEM · UIC data'], ['green', 'DOE vegetation management guide']] as const,
    },
    {
        name: 'Margin compounding mechanism',
        logic: 'Each incremental platform expands the labelled dataset, improves models, and increases the number of CLEAR workflows sold on top of the same underlying collection. Vendors who package repeatable, domain-specific solutions capture a greater share of value over time.',
        evidence: [['blue', 'Gartner Earth intelligence'], ['blue', 'Data flywheel model']] as const,
    },
];

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function MarketOverviewPage() {
    return (
        <div className="animate-in fade-in duration-500 w-full max-w-5xl mx-auto pb-20">
            <DocHeader
                breadcrumb={<>01. Strategy &amp; Market <span className="opacity-30 mx-1">›</span> <span className="text-involve-blue">Market Overview &amp; TAM/SAM/SOM</span></>}
                title="Market Overview &"
                titleStrong="TAM / SAM / SOM Analysis"
                subtitle="Quantified market opportunity for Involve Space's integrated Earth intelligence platform. Covers the macro demand thesis, top-down and bottom-up TAM sizing, SAM definition by geography and vertical, fleet-bounded SOM scenarios, and competitive positioning."
                meta={[
                    { label: 'Document', value: 'IS-DR-08' },
                    { label: 'Market definition', value: 'GeoAI / Geospatial Intelligence' },
                    { label: 'Primary sources', value: 'Gartner · MnM · GVR · EUSPA · SIPRI · IEA' },
                    { label: 'Revision', value: 'A — Feb 2026' },
                ]}
            />

            {/* §1 Executive Thesis */}
            <ContentBlock>
                <SectionHeader eyebrow="Executive Thesis" title="Earth intelligence is structurally expanding" desc="Three macro forces reinforcing each other — AI cost reduction, geopolitical demand pull, and infrastructure monitoring pressure" />
                <BodyText>The Earth intelligence market is not in a cyclical expansion — it is undergoing a structural shift in how geospatial signals are consumed. Three independent forces are accelerating simultaneously: <strong className="text-involve-text font-medium">AI is collapsing the cost and latency of converting raw geospatial data into decisions</strong>, geopolitics is raising the value of persistent sensing and sovereign supply chains, and the physical infrastructure transition is multiplying the monitoring workload on assets not built for today's operational environment.</BodyText>
                <BodyText>Gartner forecasts that <strong className="text-involve-text font-medium">80% of enterprise software will be multimodal by 2030</strong> (up from &lt;10% in 2024) — a direct enabler for operationalising imagery, SAR, and spatial signals at scale. In parallel, Gartner defines "Earth intelligence" as AI applied to EO data and forecasts direct vendor revenues rising to over <strong className="text-involve-text font-medium">$4.2bn by 2030</strong>, with enterprises becoming the majority buyer.</BodyText>

                <StatsBar stats={[
                    { val: '$37', valSuffix: 'bn', label: 'GeoAI market TAM 2025', sub: '→ $62.9bn by 2030 (11.1% CAGR)' },
                    { val: '$2.7', valSuffix: 'T', label: 'World military expenditure 2024', sub: 'Steepest YoY rise since 1988 — SIPRI' },
                    { val: '80', valSuffix: 'M km', label: 'Power grid lines globally', sub: 'Must be built/refurbished by 2040 — IEA' },
                    { val: '55', valSuffix: '%', label: 'NATO share of global military spend', sub: '= $1.5T — highest-priority buyer base' },
                ]} />

                <DriverGrid cards={[
                    {
                        num: 'DRIVER 01 — AI COST COLLAPSE',
                        title: 'AI making geospatial actionable at enterprise scale',
                        body: 'Geospatial data is moving from "specialist GIS output" to a standard input modality in mainstream decision workflows. Gartner\'s multimodal enterprise forecast signals that the integration layer is being built now — and platforms that already have the data pipeline and domain models in place are positioned to capture disproportionate early share.',
                        statVal: '80%',
                        statLabel: 'Enterprise software multimodal by 2030 — Gartner',
                    },
                    {
                        num: 'DRIVER 02 — GEOPOLITICS',
                        title: 'Persistent ISR and sovereign sensing becoming policy priority',
                        body: 'High-intensity conflict has validated commercial sensing and analytics — pulling demand forward for hybrid architectures combining sovereign and commercial capacity. EU Space Strategy explicitly frames observation as strategic autonomy infrastructure. Willingness-to-pay for persistence, redundancy, and data sovereignty is rising structurally.',
                        statVal: '$2.718T',
                        statLabel: 'World military spend 2024 — steepest rise since 1988',
                        accentColor: 'rgba(240,160,32,0.4)',
                    },
                    {
                        num: 'DRIVER 03 — INFRASTRUCTURE SCALE',
                        title: 'Critical infrastructure monitoring demand structurally expanding',
                        body: 'National energy, transport, and pipeline infrastructure is growing faster than labour-intensive inspection can scale. IEA: $140bn invested in power transmission in 2023 (+10% YoY). DOE explicitly endorses satellite imagery + AI/ML analytics for enhanced vegetation management.',
                        statVal: '$140bn',
                        statLabel: 'Global power grid investment 2023 — IEA',
                        accentColor: 'rgba(52,208,122,0.4)',
                    },
                ]} />

                <Callout><strong className="text-involve-text font-medium not-italic">Investment thesis implication:</strong> Against this backdrop, Involve Space's integrated architecture (stratospheric platforms + autonomous control + GeoAI platform) maps to an emerging procurement logic — governments and critical-infrastructure operators increasingly prefer "persistent coverage + analytics + tasking/control" as a single managed capability, especially when sovereignty, data ownership, and dual-use constraints apply.</Callout>
            </ContentBlock>

            <SectionDivider />

            {/* §2 TAM — Top Down */}
            <ContentBlock>
                <SectionHeader eyebrow="Total Addressable Market — Layer A" title="Global geospatial intelligence market baselines" desc="Multiple market definitions presented transparently — conservative core GI baseline chosen for investor diligence" />
                <BodyText>The market is reported with materially different scopes depending on whether consumer location-based services, mapping, and broad GIS software are included. The correct approach for investor diligence is to present multiple baselines, then choose a conservative "core GI" baseline aligned with Involve Space's revenue model — enterprise and government infrastructure, national security, and regulated sectors rather than consumer LBS.</BodyText>

                <DataTable
                    headers={['Market Segment', 'Scope', 'Size (latest year)', 'CAGR', '2030 Forecast', 'Source']}
                    rows={[
                        [<span className="text-involve-blue font-medium">Geospatial Intelligence (GeoAI) ← <em className="font-light text-[11px]">Selected baseline</em></span>, 'GeoAI platforms, analytics and services — gov + enterprise', <span className="text-involve-green font-medium">$37.13bn (2025)</span>, <span className="text-involve-green font-medium">11.1%</span>, <span className="text-involve-green font-medium">$62.88bn</span>, 'MarketsandMarkets'],
                        ['Geospatial Analytics (broad)', 'Includes location analytics, GIS, mapping — may include consumer LBS', '$114.32bn (2024)', '11.3%', '$226.53bn', 'Grand View Research'],
                        ['Earth Observation (data/services)', 'EO data and remote sensing technologies', '$5.10bn (2024)', '6.2%', '$7.24bn', 'Grand View Research'],
                        ['Satellite Data Services', 'Satellite-derived data products across verticals', '$12.12bn (2024)', '16.3%', '$29.59bn', 'Grand View Research'],
                        ['"Earth intelligence" vendor revenue', 'EO data + analysis services + EO-specific applications (AI-on-EO — Gartner narrow)', '~$3.8bn (2025)', 'n/a', '>$4.2bn', 'Gartner'],
                        ['EO demand-side revenues (EU model)', 'EO data and services purchase — demand-side, forecast to 2033', '€3.4bn (2023)', '~5.8%', '~€5.1bn (2030)', 'EUSPA'],
                    ]}
                />
                <BodyText><strong className="text-involve-text font-medium">Selected baseline interpretation:</strong> For an Earth Intelligence infrastructure company selling managed sensing + analytics to enterprises and governments, the most decision-useful top-down TAM is the <strong className="text-involve-text font-medium">Geospatial Intelligence (GeoAI) market at $37.1bn (2025), growing to $62.9bn (2030)</strong> at 11.1% CAGR.</BodyText>
            </ContentBlock>

            <SectionDivider />

            {/* §3 TAM — Layer B */}
            <ContentBlock>
                <SectionHeader eyebrow="Total Addressable Market — Layer B" title="Adjacent spend pools — the budget substrate expanding GI" desc="These markets should not be added to Layer A; they explain why GI budgets are expanding structurally" />
                <BodyText>Layer B presents adjacent spend pools in which geospatial intelligence is increasingly embedded. These are used to (i) explain why GI budgets expand structurally, and (ii) identify vertical-focused demand for SAM/SOM modelling. They should not be naively added to Layer A as much of the supplier revenue in Layer A flows from these end-market budgets — the relationship is attachment, not addition.</BodyText>

                <DataTable
                    headers={['Adjacent Market', '2024–25 Size', 'CAGR', '2030 Forecast', 'Why it overlaps with GI', 'Overlap assumption']}
                    rows={[
                        ['Decision Intelligence', '$13.3–15.2bn (2024)', '15.4–24.7%', '$36–50bn', 'Location and EO-derived signals become standard input into decision workflows as multimodal/AI tooling matures', <Badge color="blue">5–15%</Badge>],
                        ['Risk Analytics', '$32.25bn (2025)', '9.7%', '$51.34bn', 'Climate risk, supply-chain risk, asset risk increasingly use geospatial and EO features', <Badge color="blue">5–10%</Badge>],
                        ['Digital Twin', '$21.14bn (2025)', '47.9%', '$149.81bn', 'Infrastructure and territory digital twins require persistent updating, change detection, and alignment across sensors', <Badge color="amber">3–8%</Badge>],
                        ['Asset Integrity Management', '$23.85bn (2024)', 'Growing through 2030', 'Forecast positive', 'Pipelines, energy assets and industrial infrastructure increasingly use remote sensing for screening and prioritisation', <Badge color="blue">5–12%</Badge>],
                        ['Structural Health Monitoring', '$1.394bn (2024)', '~19.8%', '$4.085bn', 'Monitoring shifting from periodic inspections to analytics-driven condition assessment; EO can complement ground sensors', <Badge color="blue">10–25%</Badge>],
                        ['ISR Market (defence, broad)', '$52.1bn (2024)', '4.5%', '$67.8bn', 'EO and geospatial analytics are core ISR subcomponents; commercial imagery procurement is rising', <Badge color="green">5–12%</Badge>],
                    ]}
                />
                <Callout><strong className="text-involve-text font-medium not-italic">Implication:</strong> Layer B markets demonstrate that the budget substrates into which GI is embedding are large and, in many cases, growing faster than the EO-only marketplace. Gartner's forecast that enterprises become the majority spender on Earth intelligence by 2030 supports this direction.</Callout>
            </ContentBlock>

            <SectionDivider />

            {/* §4 Bottom-Up TAM */}
            <ContentBlock>
                <SectionHeader eyebrow="Bottom-Up Market Logic" title="Infrastructure monitoring wallet — asset-based TAM" desc="An independent TAM constructed from global asset base × monitoring spend economics — not a duplicate of Layer A" />
                <BodyText>This constructs an alternative TAM from the "physics and economics" of monitoring: how many critical assets exist globally and what it costs to monitor them at operational cadence. This is a <strong className="text-involve-text font-medium">wallet-based view</strong> anchored to infrastructure scale — not a supplier revenue estimate. It explains one of the core "why now" demand engines for the category.</BodyText>

                <DataTable
                    headers={['Asset Class', 'Asset Base', 'Monitoring spend / unit (annual)', 'Implied annual TAM', 'Calibration basis']}
                    rows={[
                        ['Electricity transmission corridors', '~7,000,000 km', '$150–$450 / km', <span className="text-involve-green font-medium">$1.05–$3.15bn</span>, 'Satellite + AI for vegetation and corridor risk explicitly referenced as "enhanced" approach in US DOE guidance'],
                        ['Oil + gas transmission pipelines', '~1,504,000 km', '$500–$2,000 / km', <span className="text-involve-green font-medium">$0.75–$3.01bn</span>, 'Below expensive in-line inspection campaign economics; EO/HAPS positioned as screening + anomaly detection'],
                        ['Rail networks', '~1,170,000 km', '$400–$1,200 / km', <span className="text-involve-green font-medium">$0.47–$1.40bn</span>, 'EU maintenance benchmark: €39,600/km total; allocating 1–3% to monitoring/analytics is economically plausible'],
                        ['Ports and terminals', '~3,600 ports', '$75k–$250k / port', <span className="text-involve-green font-medium">$0.27–$0.90bn</span>, 'Coastal surveillance, congestion/throughput proxies, security monitoring, climate impact screening'],
                        ['Defence ISR (EO-relevant)', 'Buyer budgets', '$1.0–$3.0bn (total addressable slice)', <span className="text-involve-green font-medium">$1.0–$3.0bn</span>, 'Calibrated by scale of NRO commercial imagery contracts and NATO\'s disproportionate defence spend concentration'],
                        [<strong className="text-involve-blue font-medium">Bottom-up TAM total (monitoring / analytics slice — conservative)</strong>, '', '', <span className="text-involve-green font-semibold text-[15px]">$3.5 – $11.5bn<div className="font-mono text-[10px] text-involve-dim font-normal mt-0.5">annual · global</div></span>, 'Monetisable monitoring layer only. Does not include full O&M or distribution grid monitoring across all 80M km.'],
                    ]}
                />
                <Callout><strong className="text-involve-text font-medium not-italic">Reconciliation with Layer A:</strong> A $3.5–$11.5bn infrastructure + defence monitoring layer sits <em>inside</em> the broader $37–$63bn GeoAI/geospatial intelligence market. This means the bottom-up model does not require inflating Layer A — it explains one major "why now" demand engine for the category.</Callout>
            </ContentBlock>

            <SectionDivider />

            {/* §5 SAM */}
            <ContentBlock>
                <SectionHeader eyebrow="Serviceble Available Market" title="SAM — Europe + NATO + US, infrastructure and defence verticals" desc="Geography and vertical filters applied to TAM to reach the addressable market for Involve Space's current positioning" />
                <BodyText>SAM is defined as <strong className="text-involve-text font-medium">Europe + NATO-aligned markets + United States</strong>, constrained to verticals where (i) sovereignty/dual-use procurement matters and (ii) persistent monitoring creates quantifiable ROI: critical infrastructure monitoring, defence/national security, and P&amp;C insurance applications.</BodyText>

                <Split2
                    left={<SplitCell label="Geographic filter — 60–70% regional share" title="North America + Europe = 66% of EO revenue">
                        Two independent data points support a 60–70% "sovereign-aligned demand share" assumption:<br /><br />
                        <strong className="text-involve-text font-medium">EO revenue concentration (Novaspace/Reuters):</strong> North America = 44%, Europe = 22% → combined 66% of global EO revenue in 2023.<br /><br />
                        <strong className="text-involve-text font-medium">Defence spend (SIPRI):</strong> NATO members represent 55% of global military expenditure in 2024 ($1.506T of $2.718T).<br /><br />
                        SAM applies a <strong className="text-involve-text font-medium">0.60–0.70 regional accessibility multiplier</strong> to the relevant vertical slice of TAM.
                    </SplitCell>}
                    right={<SplitCell label="Vertical filter — 30–45% of GeoAI market" title="Infrastructure, defence, and regulated sectors only">
                        Involve Space excludes GI demand driven by consumer and advertising use cases. There is no single universally accepted published split of the GeoAI market by vertical — this memo therefore uses an explicit conservative assumption:<br /><br />
                        <strong className="text-involve-text font-medium">Vertical relevance factor (assumption): 30–45%</strong> of the global GeoAI/geospatial intelligence market corresponds to infrastructure/energy, defence/national security, and insurance/financial risk use cases where sovereign or regulated procurement is a meaningful factor.
                    </SplitCell>}
                />

                {/* SAM Funnel */}
                <div className="border border-involve-border overflow-hidden my-8">
                    <FunnelRow layer="LAYER" layerLabel="TAM" barWidth="100%" barLabel="Global GeoAI / Geospatial Intelligence Market — all geographies, all verticals" mainVal="$37.1bn → $62.9bn" subVal="2025 → 2030 · 11.1% CAGR" />
                    <FunnelRow layer="FILTER" layerLabel="Vertical" barWidth="45%" barLabel="Infra + defence + insurance verticals (30–45% of TAM)" mainVal="×0.30 to ×0.45" subVal="Infrastructure · Defence · Insurance only" />
                    <FunnelRow layer="FILTER" layerLabel="Geography" barWidth="28%" barLabel="Europe + NATO + US (60–70% regional share)" mainVal="×0.60 to ×0.70" subVal="North America + Europe = 66% EO revenue" />
                    <FunnelRow layer="RESULT" layerLabel="SAM" barWidth="20%" barLabel="Involve Space SAM" mainVal="$6.7bn → $19.8bn" subVal="2025 range: $6.7–$11.7bn · 2030: $11.3–$19.8bn" accent />
                </div>

                <DataTable
                    headers={['Year', 'Global GeoAI TAM', 'Vertical relevance (assumption)', 'Region accessibility', 'SAM (range)']}
                    rows={[
                        ['2025', '$37.13bn', '30–45%', '60–70% (Europe + NATO + US)', <strong className="text-involve-green font-medium">$6.7bn – $11.7bn</strong>],
                        ['2030', '$62.88bn', '30–45%', '60–70%', <strong className="text-involve-green font-medium">$11.3bn – $19.8bn</strong>],
                    ]}
                />
                <BodyText>This SAM definition is deliberately narrower than the broader "geospatial analytics" market sizing ($114bn in 2024) because that broader market embeds consumer LBS and cross-industry GIS tooling that is not aligned with sovereign / dual-use positioning.</BodyText>
            </ContentBlock>

            <SectionDivider />

            {/* §6 SOM */}
            <ContentBlock>
                <SectionHeader eyebrow="Serviceble Obtainable Market" title="SOM — fleet-bounded revenue scenarios" desc="SOM is modelled from capacity constraints (fleet scale and deployments) rather than market share assumptions" />
                <BodyText>SOM is bounded by (i) platform count, (ii) operational uptime, (iii) sensor mix and re-tasking, and (iv) geographic/regulatory constraints. This approach is appropriate for persistent stratospheric infrastructure: even with strong demand, revenue is limited by fleet capacity — not by market share dynamics.</BodyText>

                {/* Operating assumptions */}
                <div className="bg-involve-panel border border-involve-border border-l-2 border-l-involve-blue p-6 my-6">
                    <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-dim mb-4">Operating assumptions (explicit — not proprietary)</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <div className="font-mono text-[10px] text-involve-dim mb-1">Average contract duration</div>
                            <div className="text-[14px] font-medium text-involve-text">12–36 months</div>
                            <div className="text-[11px] text-involve-dim mt-1">Subscription + mission/tasking fee structure</div>
                        </div>
                        <div>
                            <div className="font-mono text-[10px] text-involve-dim mb-1">Platform utilisation</div>
                            <div className="text-[14px] font-medium text-involve-text">70–85% revenue uptime</div>
                            <div className="text-[11px] text-involve-dim mt-1">After maintenance, regulatory stand-down, repositioning</div>
                        </div>
                        <div>
                            <div className="font-mono text-[10px] text-involve-dim mb-1">ACV by customer type</div>
                            <div className="text-[13px] font-light text-involve-text leading-relaxed">Infrastructure: €1.5–4.0M<br />Defence: €3.0–8.0M<br />Insurance P&amp;C: €1.0–3.0M</div>
                        </div>
                    </div>
                </div>

                <ScenarioGrid />

                <Callout><strong className="text-involve-text font-medium not-italic">How to interpret these numbers:</strong> These trajectories are not predicated on winning a large fraction of SAM — they are bounded by fleet capacity and a conservative number of "contracted theatres." The conservative case assumes early go-to-market friction. The aggressive case assumes that multi-tenancy and software-layer monetisation (CLEAR) meaningfully improves revenue per platform by 2027–28 without requiring proportional growth in operating headcount.</Callout>
            </ContentBlock>

            <SectionDivider />

            {/* §7 Competitive Landscape */}
            <ContentBlock>
                <SectionHeader eyebrow="Competitive Landscape" title="Where Involve Space sits structurally" desc="Integrated sensing + autonomous control + GeoAI platform — distinct from pure satellite operators, pure analytics vendors, and defence integrators" />
                <BodyText>Involve Space sits in a hybrid category that does not map cleanly onto existing market participants. Pure satellite operators provide data but cannot offer persistence or sovereign data custody. Pure analytics vendors can produce insights but depend on third-party data streams they cannot control. Involve is the only active European company attempting to own the full stack from stratospheric collection to sovereign intelligence delivery.</BodyText>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-involve-border border border-involve-border my-8">
                    <div className="bg-involve-panel p-6">
                        <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-blue border-b border-involve-border pb-3 mb-4">Satellite Operators — Data supply and tasking economics</div>
                        {[
                            { name: 'Planet', desc: 'High-revisit optical constellations. High volume, lower resolution. Cannot offer persistent tasking over a specific theatre.' },
                            { name: 'Maxar', desc: 'High-resolution imagery and government contracts. NRO commercial imagery partner (EOCL — "valued at billions"). Strong gov channel but orbital revisit constraints.' },
                            { name: 'ICEYE', desc: 'SAR constellations with ISR positioning. Growing defence user base but no persistent targeting capability for specific corridors.' },
                            { name: 'BlackSky', desc: 'Time-dominant imagery + analytics. Rapid revisit framing but not true persistence — key differentiator for infrastructure use cases.' },
                        ].map((c, i) => (
                            <div key={i} className="flex gap-3 mb-4 last:mb-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-involve-dim/30 mt-1.5 flex-shrink-0" />
                                <div>
                                    <div className="text-[13px] font-medium text-involve-text mb-0.5">{c.name}</div>
                                    <div className="text-[12px] font-light text-involve-muted leading-relaxed">{c.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-involve-panel p-6">
                        <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-amber border-b border-involve-border pb-3 mb-4">Analytics Vendors &amp; Defence Integrators</div>
                        {[
                            { name: 'Orbital Insight / Kayrros / RS Metrics', desc: 'Software-first, data-agnostic analytics. Strong insight products but dependent on third-party data streams they cannot guarantee.' },
                            { name: 'Palantir', desc: 'Defence distribution and integration depth. "Integration over heterogeneous sensors" architecture — not owning a new stratospheric sensing layer.' },
                            { name: 'Anduril', desc: 'Defence-native sensing and AI company. US-centric, focused on autonomous systems rather than persistent stratospheric sensing.' },
                        ].map((c, i) => (
                            <div key={i} className="flex gap-3 mb-4 last:mb-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-involve-amber/50 mt-1.5 flex-shrink-0" />
                                <div>
                                    <div className="text-[13px] font-medium text-involve-text mb-0.5">{c.name}</div>
                                    <div className="text-[12px] font-light text-involve-muted leading-relaxed">{c.desc}</div>
                                </div>
                            </div>
                        ))}
                        <div className="flex gap-3 mt-4 pt-4 border-t border-involve-border">
                            <div className="w-1.5 h-1.5 rounded-full bg-involve-blue mt-1.5 flex-shrink-0" />
                            <div>
                                <div className="text-[13px] font-medium text-involve-blue mb-0.5">Involve Space — structural position</div>
                                <div className="text-[12px] font-light text-involve-muted leading-relaxed">Not "a satellite company" and not "just analytics." Controls the full stack from persistent stratospheric collection to sovereign-grade intelligence delivery. Only active European commercial operator in this category.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentBlock>

            <SectionDivider />

            {/* §8 Strategic Positioning */}
            <ContentBlock>
                <SectionHeader eyebrow="Strategic Positioning" title="Five investor-relevant structural advantages" desc="Persistent stratospheric sensing + AI orchestration creates advantage across five dimensions that compound over time" />

                <div className="flex flex-col gap-px bg-involve-border border border-involve-border my-8">
                    {/* Header */}
                    <div className="grid bg-involve-bg border-b border-involve-border" style={{ gridTemplateColumns: '200px 1fr 140px' }}>
                        {['Dimension', 'Strategic logic', 'Evidence basis'].map((h, i) => (
                            <div key={i} className="px-4 py-3 font-mono text-[10px] tracking-[0.12em] uppercase text-involve-dim border-r border-involve-border last:border-r-0">{h}</div>
                        ))}
                    </div>
                    {pillars.map((p, i) => (
                        <div key={i} className="grid bg-involve-panel hover:bg-involve-bg transition-colors" style={{ gridTemplateColumns: '200px 1fr 140px' }}>
                            <div className="px-4 py-3 text-[13px] font-medium text-involve-text border-r border-involve-border leading-snug">{p.name}</div>
                            <div className="px-4 py-3 text-[12px] font-light text-involve-muted border-r border-involve-border leading-relaxed">{p.logic}</div>
                            <div className="px-4 py-3 flex flex-col gap-1">{p.evidence.map(([color, label]) => <Badge key={label} color={color as any}>{label}</Badge>)}</div>
                        </div>
                    ))}
                </div>

                <Callout><strong className="text-involve-text font-medium not-italic">Investor-grade conclusion:</strong> The market is large enough on a conservative basis ($37bn → $63bn by 2030 for GeoAI GI) and the vertical demand substrates are strong. The primary diligence question is therefore not "does demand exist?" but "<strong className="text-involve-text font-medium not-italic">can Involve Space scale the fleet, secure sovereign-aligned contracts, and convert persistent sensing into repeatable workflows faster than pure-play data providers and integrators can commoditise the analytics layer?</strong>" The SOM model shows that, if fleet scale is achieved, revenue can become material by 2028 without requiring implausible market share assumptions.</Callout>

                <RefNote>Sources: Gartner (Earth intelligence / multimodal enterprise) · MarketsandMarkets (GeoAI, Decision Intelligence, Risk Analytics, Digital Twin) · Grand View Research (Geospatial Analytics, EO, Satellite Data) · EUSPA Market Report 2024 · SIPRI Military Expenditure 2024 · IEA Grid Investment 2023 · Global Energy Monitor (Gas + Oil Infrastructure Trackers) · UIC World Rail Statistics · US DOE Vegetation Management Guide · ITU HAPS backgrounder · Airbus Zephyr · NASA SPB programme · NRO EOCL contract announcement · EU Space Strategy for Security and Defence · USSF Commercial Space Strategy · Novaspace/Reuters EO market sizing 2024.</RefNote>
            </ContentBlock>

            <NextSectionCard
                title="GeoAI & Earth Intelligence Positioning"
                description="Strategic category analysis: how the Earth Intelligence category is forming and where Involve Space sits within it."
                path="/dataroom/01_Strategy_and_Market/02_GeoAI_and_Earth_Intelligence_Positioning"
            />
        </div>
    );
}
