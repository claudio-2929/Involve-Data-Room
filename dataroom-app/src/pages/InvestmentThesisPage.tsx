import { DocHeader, SectionHeader, ContentBlock, SectionDivider } from '../components/ui/core';
import { NextSectionCard } from '../components/shared/NavigationHelpers';

// ── Shared primitives (matching Market Overview) ───────────────────────────────

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

function StatsBar({ stats }: { stats: { val: string; valSuffix?: string; label: string; sub: string }[] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-involve-border border border-involve-border my-8">
            {stats.map((s, i) => (
                <div key={i} className="bg-involve-panel p-6 hover:bg-involve-bg transition-colors text-center">
                    <div className="text-[1.8rem] font-semibold tracking-[-0.04em] text-involve-text leading-none mb-2">
                        {s.val}<span className="text-involve-blue">{s.valSuffix}</span>
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-involve-dim leading-snug">{s.label}</div>
                    {s.sub && <div className="text-[10px] text-involve-dim mt-2 italic">{s.sub}</div>}
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
                        <tr key={ri} className="border-b border-involve-border hover:bg-involve-bg transition-colors last:border-b-0">
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

function PillarGrid({ pillars }: { pillars: { icon: string; title: string; body: string; tagLayer: string }[] }) {
    const colors = ['rgba(61,155,255,0.4)', 'rgba(61,214,200,0.4)', 'rgba(167,139,250,0.4)', 'rgba(240,160,32,0.4)', 'rgba(61,224,135,0.4)'];
    const textColors = ['text-involve-blue', 'text-involve-cyan', 'text-[#a78bfa]', 'text-involve-amber', 'text-involve-green'];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-involve-border border border-involve-border my-8">
            {pillars.map((c, i) => (
                <div key={i} className="bg-involve-panel p-6 hover:bg-involve-bg transition-colors" style={{ borderTop: `2px solid ${colors[i % colors.length]}` }}>
                    <span className={`text-[22px] mb-3 block`}>{c.icon}</span>
                    <div className="text-[14px] font-semibold text-involve-text mb-2 leading-tight">{c.title}</div>
                    <div className="text-[12px] font-light text-involve-muted leading-relaxed mb-4">{c.body}</div>
                    <div className="border-t border-involve-border pt-3 mt-auto">
                        <div className={`font-mono text-[10px] tracking-[0.12em] uppercase ${textColors[i % textColors.length]}`}>{c.tagLayer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function LayerRow({ layer, layerLabel, desc, badgeLabel, badgeColor }: {
    layer: string; layerLabel: string; desc: string; badgeLabel: string; badgeColor: 'blue' | 'cyan' | 'purple' | 'amber' | 'green';
}) {
    return (
        <div className={`grid border-b border-involve-border transition-colors hover:bg-involve-bg`} style={{ gridTemplateColumns: '60px 1fr 140px' }}>
            <div className="p-4 border-r border-involve-border font-mono text-[11px] tracking-[0.1em] text-involve-dim flex items-center justify-center">
                {layer}
            </div>
            <div className="p-4 flex flex-col gap-1">
                <div className={`text-[14px] font-semibold text-involve-text`}>{layerLabel}</div>
                <div className="text-[12px] font-light text-involve-muted leading-relaxed">{desc}</div>
            </div>
            <div className="p-4 border-l border-involve-border flex items-center justify-center">
                <Badge color={badgeColor}>{badgeLabel}</Badge>
            </div>
        </div>
    );
}

// ── Funnel Visual / Proceeds Bars ─────────────────────────────────────────────

function ProceedRow({ pct, label, amt, barColorClass }: {
    pct: string; label: string; amt: string; barColorClass: string;
}) {
    return (
        <div className={`grid border-b border-involve-border transition-colors hover:bg-involve-bg`} style={{ gridTemplateColumns: '70px 1fr 90px' }}>
            <div className="p-3 border-r border-involve-border font-mono text-[13px] tracking-tight text-involve-blue flex items-center justify-end font-medium">
                {pct}
            </div>
            <div className="p-3 border-r border-involve-border flex items-center">
                <div className={`h-8 flex items-center px-4 font-mono text-[12px] font-medium rounded-sm ${barColorClass} text-involve-text w-full`} style={{ width: pct }}>
                    <span className="truncate">{label}</span>
                </div>
            </div>
            <div className="p-3 flex items-center justify-end font-mono text-[13px] text-involve-dim">
                {amt}
            </div>
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function InvestmentThesisPage() {
    return (
        <div className="animate-in fade-in duration-500 w-full max-w-5xl mx-auto pb-20">
            <DocHeader
                breadcrumb={<>00. Executive Overview <span className="opacity-30 mx-1">›</span> <span className="text-involve-blue">Investment Thesis</span></>}
                title="Investment"
                titleStrong="Thesis"
                subtitle="Involve Space is building a sovereign, persistent Earth Intelligence infrastructure at the convergence of stratospheric sensing, autonomous flight control, and AI-native geospatial intelligence."
                meta={[
                    { label: 'Round Target', value: '€20M' },
                    { label: 'Stage', value: 'Series A' },
                    { label: 'Year', value: '2026' },
                    { label: 'Classification', value: 'Confidential' },
                ]}
            />

            {/* §1 Executive Summary */}
            <ContentBlock>
                <SectionHeader eyebrow="01" title="Executive Summary" desc="The investment thesis at a glance" />
                <Callout>
                    <strong className="text-involve-text font-medium not-italic">Involve Space</strong> is building a sovereign, persistent Earth Intelligence infrastructure integrating stratospheric sensing platforms, proprietary autonomous flight control (Neurostar), and an AI-native Geo-Intelligence layer (CLEAR) — positioned at the convergence of three structurally expanding markets.
                </Callout>

                <StatsBar stats={[
                    { val: '€20', valSuffix: 'M', label: 'Series A Target', sub: '' },
                    { val: '$37', valSuffix: 'B', label: 'GeoAI Market 2025', sub: '' },
                    { val: '>$60', valSuffix: 'B', label: 'GeoAI Market 2030', sub: '' },
                    { val: '3', label: 'Integrated Layers', sub: '' },
                    { val: '~11', valSuffix: '%', label: 'GeoAI CAGR', sub: '' },
                ]} />

                <PillarGrid pillars={[
                    { icon: '🛰️', title: 'GeoAI & Geospatial Intelligence', body: '~$37B in 2025, projected to exceed $60B by 2030 at ~11% CAGR. CLEAR targets this layer directly.', tagLayer: 'Primary Market' },
                    { icon: '🌍', title: 'Commercial & Defence EO', body: 'Satellite data services approaching ~$30B by 2030. Defence represents ~25% of EO-related global spend.', tagLayer: 'Defence Tailwind' },
                    { icon: '🧠', title: 'AI-Driven Decision Intelligence', body: 'Decision intelligence platforms estimated to exceed $100B globally within this decade — CLEAR\'s long-term horizon.', tagLayer: 'Emerging Layer' },
                ]} />

                <div className="bg-involve-panel border border-involve-border p-6 mt-6">
                    <div className="text-[14px] font-semibold text-involve-text mb-2">Series A Mission</div>
                    <div className="text-[13px] font-light text-involve-muted leading-relaxed">The €20M Series A transitions Involve from validated deep-tech platform to industrial-scale infrastructure operator — accelerating fleet deployment, CLEAR commercialization, and international expansion across EU and US markets.</div>
                </div>
            </ContentBlock>

            <SectionDivider />

            {/* §2 Market Opportunity */}
            <ContentBlock>
                <SectionHeader eyebrow="02" title="Market Opportunity & Structural Context" desc="Large, multi-layered addressable market with structural and sovereign tailwinds" />

                <DataTable
                    headers={['Market Segment', '2024–2025 Size', '2030 Projection', 'CAGR']}
                    rows={[
                        ['Global GeoAI & Geospatial Intelligence', '~$37B', '>$60B', '~11%'],
                        ['Geospatial Imagery Analytics', '~$12B', '~$18–19B', '~9%'],
                        ['Satellite Data Services', '~$12B', '~$30B', '>15%'],
                        ['Commercial Earth Observation', '~$5B', '>$10B', '~12%'],
                        ['AI Decision Intelligence (cross-sector)', '—', '>$100B', 'High'],
                    ]}
                />

                <PillarGrid pillars={[
                    { icon: '🛡️', title: 'Defence Intelligence Spend', body: '~25% of satellite and EO-related global spending is defence and intelligence — a stable, long-cycle procurement market.', tagLayer: 'Defence' },
                    { icon: '🇪🇺', title: 'European Strategic Autonomy', body: 'EU dual-use funding frameworks accelerating sovereign infrastructure investments, benefiting European-headquartered operators.', tagLayer: 'Sovereign' },
                    { icon: '🌪️', title: 'Climate & Infrastructure Risk', body: 'Increased climate-related disasters driving government procurement of persistent environmental monitoring systems.', tagLayer: 'Civil' },
                ]} />
            </ContentBlock>

            <SectionDivider />

            {/* §3 Structural Market Gap */}
            <ContentBlock>
                <SectionHeader eyebrow="03" title="The Structural Market Gap" desc="Today's EO ecosystem is fragmented — no vertically integrated Earth Intelligence infrastructure exists" />

                <Callout>
                    There is currently <strong className="text-involve-text font-medium not-italic">no vertically integrated, persistent, AI-native Earth Intelligence infrastructure</strong> combining a controlled sensing layer, an autonomous optimization layer, and an intelligence orchestration layer. Involve fills this structural gap.
                </Callout>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-involve-border border border-involve-border my-8">
                    {[
                        { icon: '🛰️', title: 'Satellites', body: 'Periodic coverage, limited persistence. Cannot loiter or dynamically retask over a target area.' },
                        { icon: '🚁', title: 'Drone Systems', body: 'Localized footprint, operationally constrained. No persistent regional coverage at altitude.' },
                        { icon: '📦', title: 'Data Vendors', body: 'Sell imagery without integrated intelligence. No vertical control of the sensing layer.' },
                        { icon: '📊', title: 'Analytics Platforms', body: 'Rely on third-party data they do not control. No sensing-layer ownership.' },
                    ].map((item, i) => (
                        <div key={i} className="bg-involve-panel p-5 hover:bg-involve-bg transition-colors">
                            <div className="text-xl mb-3">{item.icon}</div>
                            <div className="text-[13px] font-semibold text-involve-text mb-1">{item.title}</div>
                            <div className="text-[12px] font-light text-involve-muted leading-relaxed">{item.body}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 font-mono text-[10px] tracking-[0.15em] uppercase text-involve-text border-b border-involve-border pb-3 mb-4">Involve's Answer — Three Integrated Layers</div>
                <div className="border border-involve-border overflow-hidden">
                    <LayerRow layer="L1" layerLabel="Controlled Sensing Layer" desc="Stratostats and Stratorelay platforms provide persistent, taskable regional coverage at lower revisit cost than satellites." badgeLabel="Hardware" badgeColor="cyan" />
                    <LayerRow layer="L2" layerLabel="Autonomous Optimization Layer" desc="Neurostar flight control enables autonomous navigation, mission optimization, and fleet-level coordination." badgeLabel="AI / Software" badgeColor="blue" />
                    <LayerRow layer="L3" layerLabel="Intelligence Orchestration Layer" desc="CLEAR GeoAI transforms multi-source data into actionable intelligence via vision-language models and agent orchestration." badgeLabel="Platform" badgeColor="purple" />
                </div>
            </ContentBlock>

            <SectionDivider />

            {/* §4 Architecture */}
            <ContentBlock>
                <SectionHeader eyebrow="04" title="Involve's Integrated Architecture" desc="Three compounding technological layers, each reinforcing the others" />

                <PillarGrid pillars={[
                    { icon: '🎈', title: 'Stratospheric Platforms', body: 'Stratostats, Stratorelay, and the LoonHive roadmap provide persistent regional coverage, lower revisit cost versus satellites, taskable missions, and modular payload integration. Persistence increases data frequency and economic value per monitored asset.', tagLayer: 'Hardware Layer' },
                    { icon: '🧭', title: 'Neurostar — Autonomous Flight Control', body: 'Enables autonomous navigation, mission optimization, energy-efficient persistence, and fleet-level coordination logic. Creates defensibility at the mobility and control layer.', tagLayer: 'Control Layer' },
                    { icon: '✨', title: 'CLEAR — GeoAI Infrastructure Layer', body: 'Transforms multi-source geospatial data into actionable intelligence through vision-language models, structured geospatial databases, tool-based agent orchestration, and automated time-series analysis.', tagLayer: 'Intelligence Layer' },
                ]} />

                <div className="bg-involve-panel border border-involve-border p-6 mt-6 border-l-2 border-l-involve-cyan">
                    <div className="text-[14px] font-semibold text-involve-text mb-2">Compounding Effect</div>
                    <div className="text-[13px] font-light text-involve-muted leading-relaxed">Each layer reinforces the others. More flights generate richer training data, improving Neurostar efficiency, enabling lower-cost CLEAR data provision, and compounding the intelligence and margin advantage over time. CLEAR enables clients to interact with Earth data as a decision system rather than as raw imagery.</div>
                </div>
            </ContentBlock>

            <SectionDivider />

            {/* §5 Positioning */}
            <ContentBlock>
                <SectionHeader eyebrow="05" title="Competitive Positioning" desc="Vertical integration as the primary competitive moat" />

                <Callout>
                    Most competitors operate in a <strong className="text-involve-text font-medium not-italic">single layer</strong> — satellite imaging, analytics software, or data aggregation. Involve controls both the sensing layer and the intelligence layer, enabling structural margin expansion unavailable to point-solution providers.
                </Callout>

                <div className="border border-involve-border overflow-hidden">
                    <LayerRow layer="✦" layerLabel="Persistent Regional Monitoring" desc="Stratospheric platforms provide dwell time and revisit frequency unavailable from satellites or drones at comparable cost." badgeLabel="Unique" badgeColor="cyan" />
                    <LayerRow layer="✦" layerLabel="AI-Native Orchestration" desc="CLEAR is purpose-built for Earth data — not a general analytics platform retrofitted to geospatial use cases." badgeLabel="Proprietary" badgeColor="blue" />
                    <LayerRow layer="✦" layerLabel="Sovereign Positioning in Europe" desc="European-headquartered, EU dual-use compliant, aligned with strategic autonomy frameworks and EU data residency requirements." badgeLabel="Strategic" badgeColor="green" />
                    <LayerRow layer="✦" layerLabel="Dual-Use Readiness" desc="Platform architecture and certifications support both civil and defence procurement pathways simultaneously." badgeLabel="Defence" badgeColor="amber" />
                    <LayerRow layer="✦" layerLabel="Data Compounding Effect" desc="Each flight enriches proprietary datasets, improving AI models and widening the intelligence gap versus new entrants regardless of capital." badgeLabel="Flywheel" badgeColor="purple" />
                </div>
            </ContentBlock>

            <SectionDivider />

            {/* §6 Business Model */}
            <ContentBlock>
                <SectionHeader eyebrow="06" title="Business Model" desc="Dual revenue model with long-term SaaS migration trajectory" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-involve-border border border-involve-border my-8">
                    <div className="bg-involve-panel p-6">
                        <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-cyan border-b border-involve-border pb-3 mb-4">Phase 1 — Current</div>
                        <div className="text-[14px] font-semibold text-involve-text mb-3">Mission-Based Revenue</div>
                        {[
                            'Tasking services', 'Dedicated monitoring contracts', 'Public sector programs', 'Defence contracts'
                        ].map((c, i) => (
                            <div key={i} className="flex gap-3 mb-3 text-[13px] text-involve-muted font-light">
                                <strong className="text-involve-blue">→</strong> {c}
                            </div>
                        ))}
                    </div>
                    <div className="bg-involve-panel p-6">
                        <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-blue border-b border-involve-border pb-3 mb-4">Phase 2 — Scaling</div>
                        <div className="text-[14px] font-semibold text-involve-text mb-3">Recurring SaaS Revenue (CLEAR)</div>
                        {[
                            'Subscription-based access', 'Verticalized analytics modules', 'API integrations', 'Enterprise deployment'
                        ].map((c, i) => (
                            <div key={i} className="flex gap-3 mb-3 text-[13px] text-involve-muted font-light">
                                <strong className="text-involve-blue">→</strong> {c}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-involve-panel border border-involve-border p-6 mt-6">
                    <div className="text-[14px] font-semibold text-involve-text mb-2">Long-Term Objective</div>
                    <div className="text-[13px] font-light text-involve-muted leading-relaxed">Transition from project-heavy revenue mix to <strong className="text-involve-text font-medium">recurring SaaS-driven infrastructure revenue</strong> — increasing ARR contribution, expanding gross margins through proprietary data ownership, and reducing dependency on single-mission revenue cycles.</div>
                </div>
            </ContentBlock>

            <SectionDivider />

            {/* §7 Traction */}
            <ContentBlock>
                <SectionHeader eyebrow="07" title="Traction & Validation" desc="Institutional validation materially reducing technical and commercial risk" />

                <PillarGrid pillars={[
                    { icon: '🏅', title: 'EIC Accelerator Award', body: 'European Innovation Council grant and equity commitment — among the most selective deep-tech programs in Europe. Public funding has materially reduced technical risk.', tagLayer: 'Institutional' },
                    { icon: '🛡️', title: 'Defence Contracts', body: 'Active defence-related contracts validating dual-use operational capability at national level.', tagLayer: 'Revenue' },
                    { icon: '⚡', title: 'Energy & Infrastructure', body: 'Active commercial engagements in energy and infrastructure sectors demonstrating civil market readiness and pipeline depth.', tagLayer: 'Commercial' },
                    { icon: '🔬', title: 'Pilot Development', body: 'Active pilot programs across multiple verticals, validating product-market fit and informing the CLEAR commercialization roadmap.', tagLayer: 'Operational' },
                ]} />
            </ContentBlock>

            <SectionDivider />

            {/* §8 Scaling */}
            <ContentBlock>
                <SectionHeader eyebrow="08" title="Scaling Strategy" desc="Three parallel scaling vectors funded by Series A proceeds" />

                <div className="border border-involve-border overflow-hidden mt-6">
                    <LayerRow layer="8.1" layerLabel="Fleet Industrialization" desc="Finalize TRL 9 readiness · Increase launch frequency · Standardize production · Reduce unit costs through manufacturing scale." badgeLabel="Hardware" badgeColor="cyan" />
                    <LayerRow layer="8.2" layerLabel="CLEAR Commercial Deployment" desc="Vertical MVPs across energy, agriculture, maritime · Enterprise integrations · API ecosystem development." badgeLabel="Platform" badgeColor="blue" />
                    <LayerRow layer="8.3" layerLabel="Geographic Expansion" desc="EU commercial scaling from Italian base · US branch activation targeting defence and federal procurement sectors." badgeLabel="GTM" badgeColor="green" />
                </div>
            </ContentBlock>

            <SectionDivider />

            {/* §9 Financials */}
            <ContentBlock>
                <SectionHeader eyebrow="09" title="Financial Outlook" desc="Revenue driven by mission contracts, SaaS penetration, and data margin expansion" />

                <PillarGrid pillars={[
                    { icon: '📈', title: 'Increasing ARR Contribution', body: 'Migration from project revenue to recurring SaaS increases predictability and investor-grade ARR metrics over the planning horizon.', tagLayer: 'SaaS' },
                    { icon: '💰', title: 'Expanding Gross Margins', body: 'Proprietary data ownership drives margin expansion — DaaS targets 90%+ gross margin at scale through multi-tenant data monetization.', tagLayer: 'Margins' },
                    { icon: '🔄', title: 'Reduced Single-Mission Dependency', body: 'Portfolio diversification across defence, civil, and SaaS reduces revenue concentration risk over time.', tagLayer: 'Diversification' },
                ]} />

                <div className="bg-involve-panel border border-involve-border p-6 mt-6">
                    <div className="text-[14px] font-semibold text-involve-text mb-2">Capital Deployment Philosophy</div>
                    <div className="text-[13px] font-light text-involve-muted leading-relaxed">Capital is deployed to accelerate structural positioning rather than to subsidize operating losses. Proceeds fund fleet industrialization, AI commercialization, and market entry — each generating compounding returns through data and platform network effects.</div>
                </div>
            </ContentBlock>

            <SectionDivider />

            {/* §10 Proceeds */}
            <ContentBlock>
                <SectionHeader eyebrow="10" title="Use of Proceeds — €20M" desc="Indicative allocation across five strategic categories" />

                <div className="border border-involve-border overflow-hidden mt-6">
                    <ProceedRow pct="30%" label="Fleet Industrialization & Scaling" amt="€6M" barColorClass="bg-involve-cyan/15 border-l-2 border-l-involve-cyan" />
                    <ProceedRow pct="25%" label="CLEAR Development & AI Infrastructure" amt="€5M" barColorClass="bg-involve-blue/15 border-l-2 border-l-involve-blue" />
                    <ProceedRow pct="20%" label="Commercial Expansion (EU + US)" amt="€4M" barColorClass="bg-involve-green/15 border-l-2 border-l-involve-green" />
                    <ProceedRow pct="15%" label="Operations & Key Hires" amt="€3M" barColorClass="bg-involve-amber/15 border-l-2 border-l-involve-amber" />
                    <ProceedRow pct="10%" label="Certifications, Compliance & Working Capital Buffer" amt="€2M" barColorClass="bg-[rgba(167,139,250,0.15)] border-l-2 border-l-[#a78bfa] text-[#a78bfa]" />
                </div>
            </ContentBlock>

            <SectionDivider />

            {/* §11 Vision */}
            <ContentBlock>
                <SectionHeader eyebrow="11" title="Long-Term Vision" desc="From technology developer to strategic Earth Intelligence infrastructure operator" />

                <PillarGrid pillars={[
                    { icon: '📡', title: 'Physical Sensing Control', body: 'Proprietary stratospheric fleet providing persistent, sovereign coverage across Europe and expanding to global operations.', tagLayer: 'Hardware' },
                    { icon: '🗄️', title: 'Data Orchestration', body: 'Controlling the collection, processing, and distribution of high-value Earth observation data at continental infrastructure scale.', tagLayer: 'Platform' },
                    { icon: '🤖', title: 'AI-Based Decision Layers', body: 'CLEAR as the intelligence substrate through which governments and enterprises interpret and act on Earth data.', tagLayer: 'Software' },
                ]} />

                <div className="my-10 px-6 py-8 bg-involve-panel border border-involve-border border-l-4 border-l-involve-blue text-[16px] md:text-[18px] font-light text-involve-text leading-[1.8] italic">
                    <strong className="text-involve-blue font-semibold not-italic">Involve is not building a balloon company.</strong><br /><br />
                    It is building a <strong className="font-semibold not-italic text-involve-text">persistent Earth Intelligence infrastructure</strong> positioned at the intersection of GeoAI, sovereign sensing, and AI-driven decision systems.<br /><br />
                    The Series A round represents the inflection point from validated deep-tech platform to <strong className="font-semibold not-italic text-involve-text">scalable industrial infrastructure</strong> — transitioning Involve from technology developer to strategic infrastructure operator within the global decision intelligence ecosystem.
                </div>
            </ContentBlock>

            <NextSectionCard
                title="Market Overview & TAM / SAM / SOM Analysis"
                description="Quantified market opportunity for Involve Space's integrated Earth intelligence platform."
                path="/dataroom/01_Strategy_and_Market/01_Market_Overview_TAM_SAM_SOM"
            />
        </div>
    );
}
