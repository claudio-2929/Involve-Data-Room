import { DocHeader, SectionHeader } from '../components/ui/core';
import PageNavigation from '../components/ui/PageNavigation';
import {
    Zap, Globe, BrainCircuit, Flag, ShieldAlert,
    Satellite, LocateFixed, Database, Layers, CheckCircle2,
    BarChart3, PiggyBank, Target
} from 'lucide-react';

export default function InvestmentThesisPage() {
    return (
        <div className="animate-in fade-in duration-500">
            <DocHeader
                breadcrumb="Series A · Confidential"
                title="Investment Thesis"
                subtitle="Involve Space is building a sovereign, persistent Earth Intelligence infrastructure at the convergence of stratospheric sensing, autonomous flight control, and AI-native geospatial intelligence."
                meta={[
                    { label: "Round Target", value: "€20M" },
                    { label: "Stage", value: "Series A" },
                    { label: "Year", value: "2026" },
                    { label: "Classification", value: "Confidential" }
                ]}
            />

            {/* TOC */}
            <div className="bg-involve-panel border border-involve-border rounded-xl p-7 mb-16">
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-involve-dim mb-4">Contents</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {[
                        "Executive Summary", "Market Opportunity", "Structural Market Gap",
                        "Integrated Architecture", "Competitive Positioning", "Business Model",
                        "Traction & Validation", "Scaling Strategy", "Financial Outlook",
                        "Use of Proceeds", "Long-Term Vision"
                    ].map((item, i) => (
                        <a key={i} href={`#s${i + 1}`} className="flex items-center gap-2.5 text-involve-muted text-[13px] py-2 px-3 rounded-md hover:bg-involve-bg2 hover:text-involve-blue transition-colors">
                            <span className="font-mono text-[10px] text-involve-dim min-w-[24px]">{(i + 1).toString().padStart(2, '0')}</span>
                            {item}
                        </a>
                    ))}
                </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-involve-border border border-involve-border rounded-xl overflow-hidden mb-16">
                {[
                    { val: "€20M", lbl: "Series A Target" },
                    { val: "$37B", lbl: "GeoAI Market 2025" },
                    { val: ">$60B", lbl: "GeoAI Market 2030" },
                    { val: "3", lbl: "Integrated Layers" },
                    { val: "~11%", lbl: "GeoAI CAGR" }
                ].map((stat, i) => (
                    <div key={i} className="bg-involve-panel p-6 text-center">
                        <div className="text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-involve-text to-involve-blue mb-1">
                            {stat.val}
                        </div>
                        <div className="font-mono text-[9px] tracking-widest uppercase text-involve-dim">
                            {stat.lbl}
                        </div>
                    </div>
                ))}
            </div>

            {/* 01 */}
            <section id="s1" className="mb-20 scroll-mt-24">
                <SectionHeader eyebrow="01" title="Executive Summary" desc="The investment thesis at a glance" />

                <div className="bg-involve-blue/5 border border-involve-blue/20 rounded-xl p-6 text-[14px] text-involve-muted leading-relaxed mb-6">
                    <strong className="text-involve-text">Involve Space</strong> is building a sovereign, persistent Earth Intelligence infrastructure integrating stratospheric sensing platforms, proprietary autonomous flight control (Neurostar), and an AI-native Geo-Intelligence layer (CLEAR) — positioned at the convergence of three structurally expanding markets.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6 hover:border-involve-blue/30 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-involve-blue/10 text-involve-blue flex items-center justify-center mb-4">
                            <Database size={20} />
                        </div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">GeoAI & Geospatial Intelligence</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed">~$37B in 2025, projected to exceed $60B by 2030 at ~11% CAGR. CLEAR targets this layer directly.</p>
                        <span className="inline-block mt-3 font-mono text-[9px] tracking-widest uppercase text-involve-blue bg-involve-blue/10 px-2 py-0.5 rounded">Primary Market</span>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6 hover:border-involve-cyan/30 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-involve-cyan/10 text-involve-cyan flex items-center justify-center mb-4">
                            <Globe size={20} />
                        </div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">Commercial & Defence EO</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed">Satellite data services approaching ~$30B by 2030. Defence represents ~25% of EO-related global spend.</p>
                        <span className="inline-block mt-3 font-mono text-[9px] tracking-widest uppercase text-involve-cyan bg-involve-cyan/10 px-2 py-0.5 rounded">Defence Tailwind</span>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6 hover:border-involve-purple/30 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-involve-purple/10 text-involve-purple flex items-center justify-center mb-4">
                            <BrainCircuit size={20} />
                        </div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">AI-Driven Decision Intelligence</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed">Decision intelligence platforms estimated to exceed $100B globally within this decade — CLEAR's long-term horizon.</p>
                        <span className="inline-block mt-3 font-mono text-[9px] tracking-widest uppercase text-involve-purple bg-involve-purple/10 px-2 py-0.5 rounded">Emerging Layer</span>
                    </div>
                </div>

                <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-involve-text mb-2">Series A Mission</h4>
                    <p className="text-[14px] text-involve-muted leading-relaxed">The €20M Series A transitions Involve from validated deep-tech platform to industrial-scale infrastructure operator — accelerating fleet deployment, CLEAR commercialization, and international expansion across EU and US markets.</p>
                </div>
            </section>

            {/* 02 */}
            <section id="s2" className="mb-20 scroll-mt-24">
                <SectionHeader eyebrow="02" title="Market Opportunity & Structural Context" desc="Large, multi-layered addressable market with structural and sovereign tailwinds" />

                <div className="bg-involve-panel border border-involve-border rounded-xl overflow-hidden mb-6">
                    <table className="w-full text-left text-[13px]">
                        <thead>
                            <tr className="border-b border-involve-border bg-involve-bg/50">
                                <th className="py-3 px-4 font-mono text-[10px] tracking-widest uppercase text-involve-dim font-normal">Market Segment</th>
                                <th className="py-3 px-4 font-mono text-[10px] tracking-widest uppercase text-involve-dim font-normal">2024–2025 Size</th>
                                <th className="py-3 px-4 font-mono text-[10px] tracking-widest uppercase text-involve-dim font-normal">2030 Projection</th>
                                <th className="py-3 px-4 font-mono text-[10px] tracking-widest uppercase text-involve-dim font-normal">CAGR</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-involve-border text-involve-muted">
                            <tr className="hover:bg-involve-bg2 transition-colors"><td className="py-3 px-4 text-involve-text font-medium">Global GeoAI & Geospatial Intelligence</td><td className="py-3 px-4">~$37B</td><td className="py-3 px-4">&gt;$60B</td><td className="py-3 px-4">~11%</td></tr>
                            <tr className="hover:bg-involve-bg2 transition-colors"><td className="py-3 px-4 text-involve-text font-medium">Geospatial Imagery Analytics</td><td className="py-3 px-4">~$12B</td><td className="py-3 px-4">~$18–19B</td><td className="py-3 px-4">~9%</td></tr>
                            <tr className="hover:bg-involve-bg2 transition-colors"><td className="py-3 px-4 text-involve-text font-medium">Satellite Data Services</td><td className="py-3 px-4">~$12B</td><td className="py-3 px-4">~$30B</td><td className="py-3 px-4">&gt;15%</td></tr>
                            <tr className="hover:bg-involve-bg2 transition-colors"><td className="py-3 px-4 text-involve-text font-medium">Commercial Earth Observation</td><td className="py-3 px-4">~$5B</td><td className="py-3 px-4">&gt;$10B</td><td className="py-3 px-4">~12%</td></tr>
                            <tr className="hover:bg-involve-bg2 transition-colors"><td className="py-3 px-4 text-involve-text font-medium">AI Decision Intelligence (cross-sector)</td><td className="py-3 px-4">—</td><td className="py-3 px-4">&gt;$100B</td><td className="py-3 px-4">High</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-involve-amber/10 text-involve-amber flex items-center justify-center mb-4"><ShieldAlert size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">Defence Intelligence Spend</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed">~25% of satellite and EO-related global spending is defence and intelligence — a stable, long-cycle procurement market.</p>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-involve-blue/10 text-involve-blue flex items-center justify-center mb-4"><Flag size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">European Strategic Autonomy</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed">EU dual-use funding frameworks accelerating sovereign infrastructure investments, benefiting European-headquartered operators.</p>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-involve-green/10 text-involve-green flex items-center justify-center mb-4"><Zap size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">Climate & Infrastructure Risk</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed">Increased climate-related disasters driving government procurement of persistent environmental monitoring systems.</p>
                    </div>
                </div>
            </section>

            {/* 03 */}
            <section id="s3" className="mb-20 scroll-mt-24">
                <SectionHeader eyebrow="03" title="The Structural Market Gap" desc="Today's EO ecosystem is fragmented — no vertically integrated Earth Intelligence infrastructure exists" />

                <div className="bg-involve-blue/5 border border-involve-blue/20 rounded-xl p-6 text-[14px] text-involve-muted leading-relaxed mb-6">
                    There is currently <strong className="text-involve-text">no vertically integrated, persistent, AI-native Earth Intelligence infrastructure</strong> combining a controlled sensing layer, an autonomous optimization layer, and an intelligence orchestration layer. Involve fills this structural gap.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-5">
                        <div className="text-xl mb-3">🛰️</div>
                        <h4 className="text-[13px] font-semibold text-involve-text mb-1">Satellites</h4>
                        <p className="text-[12px] text-involve-muted leading-relaxed">Periodic coverage, limited persistence. Cannot loiter or dynamically retask over a target area.</p>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-5">
                        <div className="text-xl mb-3">🚁</div>
                        <h4 className="text-[13px] font-semibold text-involve-text mb-1">Drone Systems</h4>
                        <p className="text-[12px] text-involve-muted leading-relaxed">Localized footprint, operationally constrained. No persistent regional coverage at altitude.</p>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-5">
                        <div className="text-xl mb-3">📦</div>
                        <h4 className="text-[13px] font-semibold text-involve-text mb-1">Data Vendors</h4>
                        <p className="text-[12px] text-involve-muted leading-relaxed">Sell imagery without integrated intelligence. No vertical control of the sensing layer.</p>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-5">
                        <div className="text-xl mb-3">📊</div>
                        <h4 className="text-[13px] font-semibold text-involve-text mb-1">Analytics Platforms</h4>
                        <p className="text-[12px] text-involve-muted leading-relaxed">Rely on third-party data they do not control. No sensing-layer ownership.</p>
                    </div>
                </div>

                <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-involve-text mb-4">Involve's Answer — Three Integrated Layers</h4>
                    <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-4 bg-involve-bg2 border border-involve-border rounded-lg p-4">
                            <span className="font-mono text-[11px] text-involve-dim w-6 text-center">L1</span>
                            <div className="flex-1">
                                <h5 className="text-[13px] font-semibold text-involve-text mb-0.5">Controlled Sensing Layer</h5>
                                <p className="text-[12px] text-involve-muted">Stratostats and Stratorelay platforms provide persistent, taskable regional coverage.</p>
                            </div>
                            <span className="font-mono text-[9px] tracking-widest uppercase text-involve-cyan bg-involve-cyan/10 px-2 py-0.5 rounded border border-involve-cyan/20">Hardware</span>
                        </div>
                        <div className="flex items-center gap-4 bg-involve-bg2 border border-involve-border rounded-lg p-4">
                            <span className="font-mono text-[11px] text-involve-dim w-6 text-center">L2</span>
                            <div className="flex-1">
                                <h5 className="text-[13px] font-semibold text-involve-text mb-0.5">Autonomous Optimization Layer</h5>
                                <p className="text-[12px] text-involve-muted">Neurostar flight control enables autonomous navigation and fleet coordination.</p>
                            </div>
                            <span className="font-mono text-[9px] tracking-widest uppercase text-involve-blue bg-involve-blue/10 px-2 py-0.5 rounded border border-involve-blue/20">AI / Software</span>
                        </div>
                        <div className="flex items-center gap-4 bg-involve-bg2 border border-involve-border rounded-lg p-4">
                            <span className="font-mono text-[11px] text-involve-dim w-6 text-center">L3</span>
                            <div className="flex-1">
                                <h5 className="text-[13px] font-semibold text-involve-text mb-0.5">Intelligence Orchestration Layer</h5>
                                <p className="text-[12px] text-involve-muted">CLEAR GeoAI transforms multi-source data into actionable intelligence.</p>
                            </div>
                            <span className="font-mono text-[9px] tracking-widest uppercase text-involve-purple bg-involve-purple/10 px-2 py-0.5 rounded border border-involve-purple/20">Platform</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 04 */}
            <section id="s4" className="mb-20 scroll-mt-24">
                <SectionHeader eyebrow="04" title="Involve's Integrated Architecture" desc="Three compounding technological layers, each reinforcing the others" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6 hover:border-involve-cyan/30 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-involve-cyan/10 text-involve-cyan flex items-center justify-center mb-4"><Satellite size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">Stratospheric Platforms</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed mb-4">Stratostats, Stratorelay, and the LoonHive roadmap provide persistent regional coverage, lower revisit cost versus satellites, taskable missions, and modular payload integration.</p>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-cyan bg-involve-cyan/10 px-2 py-0.5 rounded">Hardware Layer</span>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6 hover:border-involve-blue/30 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-involve-blue/10 text-involve-blue flex items-center justify-center mb-4"><LocateFixed size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">Neurostar — Autonomous Flight</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed mb-4">Enables autonomous navigation, mission optimization, energy-efficient persistence, and fleet-level coordination logic. Creates defensibility at the mobility and control layer.</p>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-blue bg-involve-blue/10 px-2 py-0.5 rounded">Control Layer</span>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6 hover:border-involve-purple/30 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-involve-purple/10 text-involve-purple flex items-center justify-center mb-4"><Layers size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">CLEAR — GeoAI Infrastructure Layer</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed mb-4">Transforms multi-source geospatial data into actionable intelligence through vision-language models, structured geospatial databases, and tool-based agent orchestration.</p>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-purple bg-involve-purple/10 px-2 py-0.5 rounded">Intelligence Layer</span>
                    </div>
                </div>

                <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-involve-text mb-2">Compounding Effect</h4>
                    <p className="text-[14px] text-involve-muted leading-relaxed">Each layer reinforces the others. More flights generate richer training data, improving Neurostar efficiency, enabling lower-cost CLEAR data provision, and compounding the intelligence and margin advantage over time. CLEAR enables clients to interact with Earth data as a decision system rather than as raw imagery.</p>
                </div>
            </section>

            {/* 05 */}
            <section id="s5" className="mb-20 scroll-mt-24">
                <SectionHeader eyebrow="05" title="Competitive Positioning" desc="Vertical integration as the primary competitive moat" />

                <div className="bg-involve-blue/5 border border-involve-blue/20 rounded-xl p-6 text-[14px] text-involve-muted leading-relaxed mb-6">
                    Most competitors operate in a <strong className="text-involve-text">single layer</strong> — satellite imaging, analytics software, or data aggregation. Involve controls both the sensing layer and the intelligence layer, enabling structural margin expansion unavailable to point-solution providers.
                </div>

                <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-4 bg-involve-panel border border-involve-border rounded-lg p-4 hover:border-involve-blue/30 transition-colors">
                        <span className="font-mono text-[14px] text-involve-dim w-6 text-center">✦</span>
                        <div className="flex-1">
                            <h5 className="text-[13px] font-semibold text-involve-text mb-0.5">Persistent Regional Monitoring</h5>
                            <p className="text-[12px] text-involve-muted">Stratospheric platforms provide dwell time and revisit frequency unavailable from satellites.</p>
                        </div>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-cyan bg-involve-cyan/10 px-2 py-0.5 rounded border border-involve-cyan/20">Unique</span>
                    </div>
                    <div className="flex items-center gap-4 bg-involve-panel border border-involve-border rounded-lg p-4 hover:border-involve-blue/30 transition-colors">
                        <span className="font-mono text-[14px] text-involve-dim w-6 text-center">✦</span>
                        <div className="flex-1">
                            <h5 className="text-[13px] font-semibold text-involve-text mb-0.5">AI-Native Orchestration</h5>
                            <p className="text-[12px] text-involve-muted">CLEAR is purpose-built for Earth data — not a general analytics platform retrofitted.</p>
                        </div>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-blue bg-involve-blue/10 px-2 py-0.5 rounded border border-involve-blue/20">Proprietary</span>
                    </div>
                    <div className="flex items-center gap-4 bg-involve-panel border border-involve-border rounded-lg p-4 hover:border-involve-blue/30 transition-colors">
                        <span className="font-mono text-[14px] text-involve-dim w-6 text-center">✦</span>
                        <div className="flex-1">
                            <h5 className="text-[13px] font-semibold text-involve-text mb-0.5">Sovereign Positioning in Europe</h5>
                            <p className="text-[12px] text-involve-muted">EU dual-use compliant, aligned with strategic autonomy frameworks and EU residency.</p>
                        </div>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-green bg-involve-green/10 px-2 py-0.5 rounded border border-involve-green/20">Strategic</span>
                    </div>
                    <div className="flex items-center gap-4 bg-involve-panel border border-involve-border rounded-lg p-4 hover:border-involve-blue/30 transition-colors">
                        <span className="font-mono text-[14px] text-involve-dim w-6 text-center">✦</span>
                        <div className="flex-1">
                            <h5 className="text-[13px] font-semibold text-involve-text mb-0.5">Dual-Use Readiness</h5>
                            <p className="text-[12px] text-involve-muted">Platform architecture supports civil and defence procurement pathways simultaneously.</p>
                        </div>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-amber bg-involve-amber/10 px-2 py-0.5 rounded border border-involve-amber/20">Defence</span>
                    </div>
                </div>
            </section>

            {/* 06 */}
            <section id="s6" className="mb-20 scroll-mt-24">
                <SectionHeader eyebrow="06" title="Business Model" desc="Dual revenue model with long-term SaaS migration trajectory" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="font-mono text-[10px] tracking-widest uppercase text-involve-cyan mb-3">Phase 1 — Current</div>
                        <h4 className="text-[15px] font-semibold text-involve-text mb-3">Mission-Based Revenue</h4>
                        <ul className="flex flex-col gap-2">
                            {["Tasking services", "Dedicated monitoring contracts", "Public sector programs", "Defence contracts"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-[13px] text-involve-muted">
                                    <span className="text-involve-blue">→</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="font-mono text-[10px] tracking-widest uppercase text-involve-blue mb-3">Phase 2 — Scaling</div>
                        <h4 className="text-[15px] font-semibold text-involve-text mb-3">Recurring SaaS Revenue (CLEAR)</h4>
                        <ul className="flex flex-col gap-2">
                            {["Subscription-based access", "Verticalized analytics modules", "API integrations", "Enterprise deployment"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-[13px] text-involve-muted">
                                    <span className="text-involve-blue">→</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-involve-text mb-2">Long-Term Objective</h4>
                    <p className="text-[14px] text-involve-muted leading-relaxed">Transition from project-heavy revenue mix to <strong className="text-involve-text font-medium">recurring SaaS-driven infrastructure revenue</strong> — increasing ARR contribution, expanding gross margins through proprietary data ownership, and reducing dependency on single-mission revenue cycles.</p>
                </div>
            </section>

            {/* 07 */}
            <section id="s7" className="mb-20 scroll-mt-24">
                <SectionHeader eyebrow="07" title="Traction & Validation" desc="Institutional validation materially reducing technical and commercial risk" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-involve-blue/10 text-involve-blue flex items-center justify-center mb-4"><CheckCircle2 size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">EIC Accelerator Award</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed mb-4">European Innovation Council grant and equity commitment — among the most selective deep-tech programs in Europe. Public funding has materially reduced technical risk.</p>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-blue bg-involve-blue/10 px-2 py-0.5 rounded">Institutional</span>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-involve-amber/10 text-involve-amber flex items-center justify-center mb-4"><ShieldAlert size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">Defence Contracts</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed mb-4">Active defence-related contracts validating dual-use operational capability at national level.</p>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-blue bg-involve-blue/10 px-2 py-0.5 rounded">Revenue</span>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-involve-cyan/10 text-involve-cyan flex items-center justify-center mb-4"><Zap size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">Energy & Infrastructure</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed mb-4">Active commercial engagements in energy and infrastructure sectors demonstrating civil market readiness and pipeline depth.</p>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-blue bg-involve-blue/10 px-2 py-0.5 rounded">Commercial</span>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-involve-green/10 text-involve-green flex items-center justify-center mb-4"><Target size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">Pilot Development</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed mb-4">Active pilot programs across multiple verticals, validating product-market fit and informing the CLEAR commercialization roadmap.</p>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-blue bg-involve-blue/10 px-2 py-0.5 rounded">Operational</span>
                    </div>
                </div>
            </section>

            {/* 08 */}
            <section id="s8" className="mb-20 scroll-mt-24">
                <SectionHeader eyebrow="08" title="Scaling Strategy" desc="Three parallel scaling vectors funded by Series A proceeds" />

                <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-4 bg-involve-panel border border-involve-border rounded-lg p-4">
                        <span className="font-mono text-[11px] text-involve-dim w-6 text-center">8.1</span>
                        <div className="flex-1">
                            <h5 className="text-[13px] font-semibold text-involve-text mb-0.5">Fleet Industrialization</h5>
                            <p className="text-[12px] text-involve-muted">Finalize TRL 9 readiness · Increase launch frequency · Standardize production · Reduce unit costs through manufacturing scale.</p>
                        </div>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-cyan bg-involve-cyan/10 px-2 py-0.5 rounded border border-involve-cyan/20">Hardware</span>
                    </div>
                    <div className="flex items-center gap-4 bg-involve-panel border border-involve-border rounded-lg p-4">
                        <span className="font-mono text-[11px] text-involve-dim w-6 text-center">8.2</span>
                        <div className="flex-1">
                            <h5 className="text-[13px] font-semibold text-involve-text mb-0.5">CLEAR Commercial Deployment</h5>
                            <p className="text-[12px] text-involve-muted">Vertical MVPs across energy, agriculture, maritime · Enterprise integrations · API ecosystem development.</p>
                        </div>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-blue bg-involve-blue/10 px-2 py-0.5 rounded border border-involve-blue/20">Platform</span>
                    </div>
                    <div className="flex items-center gap-4 bg-involve-panel border border-involve-border rounded-lg p-4">
                        <span className="font-mono text-[11px] text-involve-dim w-6 text-center">8.3</span>
                        <div className="flex-1">
                            <h5 className="text-[13px] font-semibold text-involve-text mb-0.5">Geographic Expansion</h5>
                            <p className="text-[12px] text-involve-muted">EU commercial scaling from Italian base · US branch activation targeting defence and federal procurement sectors.</p>
                        </div>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-involve-green bg-involve-green/10 px-2 py-0.5 rounded border border-involve-green/20">GTM</span>
                    </div>
                </div>
            </section>

            {/* 09 */}
            <section id="s9" className="mb-20 scroll-mt-24">
                <SectionHeader eyebrow="09" title="Financial Outlook" desc="Revenue driven by mission contracts, SaaS penetration, and data margin expansion" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-involve-blue/10 text-involve-blue flex items-center justify-center mb-4"><BarChart3 size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">Increasing ARR Contribution</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed">Migration from project revenue to recurring SaaS increases predictability and investor-grade ARR metrics over the planning horizon.</p>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-involve-green/10 text-involve-green flex items-center justify-center mb-4"><PiggyBank size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">Expanding Gross Margins</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed">Proprietary data ownership drives margin expansion — DaaS targets 90%+ gross margin at scale through multi-tenant monetization.</p>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-involve-cyan/10 text-involve-cyan flex items-center justify-center mb-4"><Layers size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">Reduced Dependency</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed">Portfolio diversification across defence, civil, and SaaS reduces revenue concentration risk over time.</p>
                    </div>
                </div>

                <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-involve-text mb-2">Capital Deployment Philosophy</h4>
                    <p className="text-[14px] text-involve-muted leading-relaxed">Capital is deployed to accelerate structural positioning rather than to subsidize operating losses. Proceeds fund fleet industrialization, AI commercialization, and market entry — each generating compounding returns through data and platform network effects.</p>
                </div>
            </section>

            {/* 10 */}
            <section id="s10" className="mb-20 scroll-mt-24">
                <SectionHeader eyebrow="10" title="Use of Proceeds — €20M" desc="Indicative allocation across five strategic categories" />

                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-[46px_1fr_50px] gap-3 items-center">
                        <span className="font-mono text-sm font-medium text-involve-blue text-right">30%</span>
                        <div className="relative h-9 bg-involve-bg2 border border-involve-border rounded-md overflow-hidden flex items-center px-3">
                            <div className="absolute top-0 left-0 bottom-0 w-[30%] bg-involve-cyan/20 border-r border-involve-cyan/30 rounded-r-md"></div>
                            <span className="relative z-10 text-[13px] text-involve-text">Fleet Industrialization & Scaling</span>
                        </div>
                        <span className="font-mono text-xs text-involve-dim text-right">€6M</span>
                    </div>

                    <div className="grid grid-cols-[46px_1fr_50px] gap-3 items-center">
                        <span className="font-mono text-sm font-medium text-involve-blue text-right">25%</span>
                        <div className="relative h-9 bg-involve-bg2 border border-involve-border rounded-md overflow-hidden flex items-center px-3">
                            <div className="absolute top-0 left-0 bottom-0 w-[25%] bg-involve-blue/20 border-r border-involve-blue/30 rounded-r-md"></div>
                            <span className="relative z-10 text-[13px] text-involve-text">CLEAR Development & AI Infrastructure</span>
                        </div>
                        <span className="font-mono text-xs text-involve-dim text-right">€5M</span>
                    </div>

                    <div className="grid grid-cols-[46px_1fr_50px] gap-3 items-center">
                        <span className="font-mono text-sm font-medium text-involve-blue text-right">20%</span>
                        <div className="relative h-9 bg-involve-bg2 border border-involve-border rounded-md overflow-hidden flex items-center px-3">
                            <div className="absolute top-0 left-0 bottom-0 w-[20%] bg-involve-green/20 border-r border-involve-green/30 rounded-r-md"></div>
                            <span className="relative z-10 text-[13px] text-involve-text">Commercial Expansion (EU + US)</span>
                        </div>
                        <span className="font-mono text-xs text-involve-dim text-right">€4M</span>
                    </div>

                    <div className="grid grid-cols-[46px_1fr_50px] gap-3 items-center">
                        <span className="font-mono text-sm font-medium text-involve-blue text-right">15%</span>
                        <div className="relative h-9 bg-involve-bg2 border border-involve-border rounded-md overflow-hidden flex items-center px-3">
                            <div className="absolute top-0 left-0 bottom-0 w-[15%] bg-involve-amber/20 border-r border-involve-amber/30 rounded-r-md"></div>
                            <span className="relative z-10 text-[13px] text-involve-text">Operations & Key Hires</span>
                        </div>
                        <span className="font-mono text-xs text-involve-dim text-right">€3M</span>
                    </div>

                    <div className="grid grid-cols-[46px_1fr_50px] gap-3 items-center">
                        <span className="font-mono text-sm font-medium text-involve-blue text-right">10%</span>
                        <div className="relative h-9 bg-involve-bg2 border border-involve-border rounded-md overflow-hidden flex items-center px-3">
                            <div className="absolute top-0 left-0 bottom-0 w-[10%] bg-involve-purple/20 border-r border-involve-purple/30 rounded-r-md"></div>
                            <span className="relative z-10 text-[13px] text-involve-text">Certifications, Compliance & Buffer</span>
                        </div>
                        <span className="font-mono text-xs text-involve-dim text-right">€2M</span>
                    </div>
                </div>
            </section>

            {/* 11 */}
            <section id="s11" className="mb-8 scroll-mt-24">
                <SectionHeader eyebrow="11" title="Long-Term Vision" desc="From technology developer to strategic Earth Intelligence infrastructure operator" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-involve-cyan/10 text-involve-cyan flex items-center justify-center mb-4"><Satellite size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">Physical Sensing Control</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed">Proprietary stratospheric fleet providing persistent, sovereign coverage across Europe and expanding to global operations.</p>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-involve-blue/10 text-involve-blue flex items-center justify-center mb-4"><Database size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">Data Orchestration</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed">Controlling the collection, processing, and distribution of high-value Earth observation data at continental infrastructure scale.</p>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-involve-purple/10 text-involve-purple flex items-center justify-center mb-4"><BrainCircuit size={20} /></div>
                        <h4 className="text-sm font-semibold text-involve-text mb-2">AI-Based Decision Layers</h4>
                        <p className="text-[13px] text-involve-muted leading-relaxed">CLEAR as the intelligence substrate through which governments and enterprises interpret and act on Earth data.</p>
                    </div>
                </div>

                <div className="bg-involve-panel border border-involve-border border-l-[3px] border-l-involve-blue rounded-r-xl rounded-l-sm p-8 md:p-10 mb-8">
                    <p className="text-lg md:text-[19px] font-light leading-relaxed text-involve-text tracking-[-0.01em]">
                        <strong className="font-semibold text-involve-blue">Involve is not building a balloon company.</strong><br /><br />
                        It is building a <strong className="font-medium">persistent Earth Intelligence infrastructure</strong> positioned at the intersection of GeoAI, sovereign sensing, and AI-driven decision systems.<br /><br />
                        The Series A round represents the inflection point from validated deep-tech platform to <strong className="font-medium">scalable industrial infrastructure</strong> — transitioning Involve from technology developer to strategic infrastructure operator within the global decision intelligence ecosystem.
                    </p>
                </div>
            </section>

            <PageNavigation
                next={{
                    title: "Investor Deck (Latest)",
                    desc: "The primary pitch deck for the current Series A funding round.",
                    path: "/dataroom/00_Executive_Overview/02_Investor_Deck_Latest"
                }}
            />
        </div>
    );
}
