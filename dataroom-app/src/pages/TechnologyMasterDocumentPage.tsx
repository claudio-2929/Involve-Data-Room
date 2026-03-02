import { DocHeader, SectionHeader, BodyText, ContentBlock } from '../components/ui/core';
import { NextSectionCard } from '../components/shared/NavigationHelpers';
import { StatsBar, StatCell, TechGrid, TechCard, Badge, ImagePlaceholder } from '../components/ui/TechSpecific';
import { SystemInterconnectSVG, DataFlywheelSVG } from '../components/ui/SVGs';

export default function TechnologyMasterDocumentPage() {
    return (
        <div className="animate-in fade-in duration-500 w-full max-w-5xl mx-auto pb-20">
            <DocHeader
                breadcrumb={<>02. Product &amp; Technology <span className="opacity-30 mx-1">›</span> <span className="text-involve-blue">Technology Master Document</span></>}
                title="Technology Overview &"
                titleStrong="System Architecture"
                subtitle="A system-level map of Involve Space's proprietary technology stack — what each technology does, how they interconnect, and why the vertical integration creates a structural advantage in stratospheric Earth intelligence."
                meta={[
                    { label: 'Document', value: 'IS-DR-01' },
                    { label: 'Coverage', value: 'Full Stack — Hardware · Autonomy · GeoAI' },
                    { label: 'TRL Range', value: 'TRL 5 (CLEAR) → TRL 9 (Stratorelay®)' },
                    { label: 'Revision', value: 'A — Feb 2026' },
                ]}
            />

            {/* ─── §1. WHAT INVOLVE SPACE BUILDS ─── */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Executive Overview"
                    title="What Involve Space builds"
                    desc="Stratospheric intelligence infrastructure — sensing, autonomy, and AI as one system"
                />

                <BodyText>
                    Involve Space designs, builds, and operates <strong className="font-medium text-involve-text">autonomous stratospheric platforms</strong> that carry sensing payloads to altitudes of 20–30 km — the stratosphere — and maintain position there for hours, days, or weeks. From that altitude layer, the platforms collect <strong className="font-medium text-involve-text">ultra-high-resolution Earth observation data</strong> with persistence and coverage no satellite or drone can match. That data feeds <strong className="font-medium text-involve-text">CLEAR</strong>, a proprietary AI-native geospatial intelligence system that converts raw imagery into structured, queryable intelligence.
                </BodyText>

                <BodyText>
                    The three core capabilities — <strong className="font-medium text-involve-text">stratospheric platforms</strong>, <strong className="font-medium text-involve-text">autonomous navigation</strong>, and <strong className="font-medium text-involve-text">GeoAI analytics</strong> — are not independent products. They are co-designed subsystems with shared data flows, interdependent control loops, and compounding value. This vertical integration is the structural core of the company.
                </BodyText>

                <StatsBar>
                    <StatCell value="200" unit="+" label="Flights executed" />
                    <StatCell value="30" unit="km" label="Max operating altitude" />
                    <StatCell value="90" unit="+d" label="Max endurance (Stratostats® v2)" />
                    <StatCell value="10" unit="cm" label="Imagery resolution per pixel" />
                </StatsBar>

                {/* Hero Image */}
                <div className="mt-1">
                    <ImagePlaceholder
                        label="Hero Image"
                        hint="Stratostats® in flight at stratospheric altitude — recommended: wide landscape shot showing balloon with Earth curvature below"
                        className="h-[320px]"
                    />
                </div>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* ─── §2. THE TECHNOLOGY STACK ─── */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Proprietary Technologies"
                    title="Four technologies, one integrated stack"
                    desc="Each technology is proprietary, at advanced TRL, and designed to interact with the others"
                />

                <BodyText>
                    Involve Space has developed four core proprietary technologies. Three operate at the <strong className="font-medium text-involve-text">hardware + autonomy layer</strong> (Stratostats®, Stratorelay®, LoonHive®) and one at the <strong className="font-medium text-involve-text">intelligence layer</strong> (CLEAR). All four are orchestrated by <strong className="font-medium text-involve-text">Neurostar®</strong>, the AI-based mission control and navigation system that runs across all platform types.
                </BodyText>

                <TechGrid>
                    <TechCard
                        title="Stratostats®"
                        role="Active Pseudo-Satellite Platform"
                        badgeLabel="TRL 9"
                        badgeStyle="green"
                        description="Fully autonomous stratospheric platform with active altitude control. Navigates by shifting between wind layers at different altitudes — like a sailboat exploiting wind direction changes. Carries a modular payload bay and maintains position over a target area for extended missions."
                        imagePlaceholderLabel="Stratostats® Photo"
                        imagePlaceholderHint="Balloon + gondola at launch or in flight"
                        specs={{
                            "Altitude": "20–30 km",
                            "Endurance": "90+ days (v2)",
                            "Station-keeping": "50 km radius, 90% time",
                            "Telecom": ">30 Mbps satellite link",
                            "Power": "400 W solar + 1,800 Wh battery"
                        }}
                    />
                    <TechCard
                        title="Stratorelay®"
                        role="Minimum Viable Platform — Passive Navigation"
                        badgeLabel="TRL 8"
                        badgeStyle="green"
                        description="Cost-optimized platform without active altitude control. Uses predictive deployment software to calculate optimal launch time and position so that atmospheric winds naturally carry it over the target area. Deployed within 48h by one operator, from any surface including a van."
                        imagePlaceholderLabel="Stratorelay® Photo"
                        imagePlaceholderHint="Small balloon at launch — simplified design vs Stratostats®"
                        specs={{
                            "Mission cost": "€2,000–3,000 end-to-end",
                            "Deployment": "1 operator · within 48h",
                            "Navigation": "Predictive wind-drift (passive)",
                            "Demonstrated": "181 km² Milan · 1,285 km² Rome"
                        }}
                    />
                    <TechCard
                        title="LoonHive®"
                        role="Scalable Stratospheric Constellation"
                        badgeLabel="TRL 5"
                        badgeStyle="amber"
                        description="The fleet architecture layer. Multiple Stratostats® units coordinated as a sensing network, delivering continuous coverage of entire regions. Classical solvers need 11 days to optimize a 150-balloon configuration — Neurostar® solves the same problem in minutes using a quantum-inspired approach."
                        imagePlaceholderLabel="LoonHive® Simulation"
                        imagePlaceholderHint="Constellation simulation over Europe — the pressure-colored distribution map"
                        specs={{
                            "Scale": "2 → 150+ platforms",
                            "Optimization": "Quantum-inspired · minutes vs 11 days",
                            "Coverage": "Regional → continental",
                            "First flights": "2026 (incremental)"
                        }}
                    />
                    <TechCard
                        title="CLEAR"
                        role="GeoAI Platform — Earth Analytics & Reconnaissance"
                        badgeLabel="TRL 5"
                        badgeStyle="amber"
                        description="Cloud-native AI platform that converts stratospheric imagery into natural language-responsive intelligence. Users query in plain language; CLEAR returns annotated maps, reports, and quantitative insights. Integrates proprietary stratospheric data with external sources (Copernicus, commercial satellites, IoT)."
                        imagePlaceholderLabel="CLEAR Interface Screenshot"
                        imagePlaceholderHint="CLEAR dashboard with GeoAssistant panel open — the sign-in or data catalog view"
                        specs={{
                            "Interface": "Natural language queries",
                            "Architecture": "Agentic decoupling · multi-model",
                            "Output": "Reports · maps · quantitative data",
                            "Target": "TRL 7 by end-2026"
                        }}
                    />
                </TechGrid>

                {/* Neurostar® — full-width two-column card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-involve-border border border-involve-border border-t-2 border-t-involve-blue mt-[1px]">
                    <div className="bg-involve-panel p-7">
                        <div className="flex items-start justify-between gap-3 mb-1">
                            <div>
                                <div className="text-[1rem] font-semibold text-involve-text tracking-tight">Neurostar®</div>
                                <div className="font-mono text-[10px] text-involve-muted tracking-[0.06em] mt-1">AI Mission Control &amp; Navigation Suite — runs across all platforms</div>
                            </div>
                            <Badge label="TRL 6" style="cyan" />
                        </div>
                        <p className="text-[13px] font-light text-involve-muted leading-relaxed mt-3">
                            The AI software suite that enables active control of stratospheric balloons — and the connective tissue of the entire stack. Unlike passive systems that drift unpredictably, Neurostar® reads atmospheric data from onboard sensors and ECMWF weather forecasts in real time, then commands the altitude control system to navigate into wind layers that push the platform toward its goal.
                        </p>
                        <p className="text-[13px] font-light text-involve-muted leading-relaxed mt-2">
                            Neurostar® is not a single algorithm. It is a suite of tools: <strong className="font-medium text-involve-text">StationSeeker/AI</strong> for real-time altitude navigation, <strong className="font-medium text-involve-text">StratoLoop</strong> for long-range trajectory planning, <strong className="font-medium text-involve-text">StratoEye</strong> for global feasibility mapping, and a <strong className="font-medium text-involve-text">quantum-inspired fleet optimizer</strong> for LoonHive® coordination. The navigation core is a deep reinforcement learning MultiLayer Perceptron trained on 3 years of global wind data.
                        </p>
                        <div className="mt-5 flex flex-col gap-1.5 border-t border-involve-border/50 pt-4">
                            {[
                                { k: "Core method", v: "Deep RL (MLP) + Deterministic fallback" },
                                { k: "Training data", v: "3 years global wind DB + ECMWF" },
                                { k: "Tools", v: "StationSeeker · StratoLoop · StratoEye" },
                                { k: "Fleet mode", v: "Quantum-inspired optimization" }
                            ].map((s, i) => (
                                <div key={i} className="flex justify-between items-center text-xs py-1 border-b border-involve-border/30 last:border-none gap-4">
                                    <span className="font-mono text-[10px] text-involve-muted tracking-wide shrink-0">{s.k}</span>
                                    <span className="font-medium text-involve-text text-right">{s.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-involve-default min-h-[220px] flex">
                        <ImagePlaceholder
                            label="Neurostar® AI Diagram"
                            hint="The AI agent logic diagram — compressor/valve action flow, wind estimator, decision maker blocks"
                            className="w-full border-none"
                        />
                    </div>
                </div>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* ─── §3. SYSTEM INTERCONNECTION ─── */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="System Interconnection"
                    title="How the technologies interconnect"
                    desc="Data flows, control signals, and feedback loops across the full stack"
                />

                <BodyText>
                    The five technologies do not operate in isolation. They form a <strong className="font-medium text-involve-text">closed-loop system</strong>: physical platforms collect data, Neurostar® uses that data to navigate, CLEAR consumes the imagery to produce intelligence, and intelligence outputs can trigger new mission tasking. Each loop reinforces the others — more flight data trains a better Neurostar®, a better Neurostar® enables more precise missions, and more precise missions produce better data for CLEAR.
                </BodyText>

                <SystemInterconnectSVG />
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* ─── §4. DATA FLYWHEEL ─── */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Vertical Integration Logic"
                    title="The data flywheel"
                    desc="Why controlling the full stack creates compounding value"
                />

                <BodyText>
                    Involve Space does not buy data from third parties to feed its AI — it generates that data from infrastructure it owns. This is the structural core of the company's competitive advantage. Each element of the stack feeds the next, and each operational cycle makes the system as a whole more capable.
                </BodyText>

                <DataFlywheelSVG />

                <div className="my-6 p-4 bg-involve-blue/5 border-l-2 border-l-involve-blue/50 text-[13px] text-involve-muted italic leading-relaxed">
                    <strong className="font-medium text-involve-text not-italic">Why this matters for investors:</strong> Competitors offering EO analytics without sensing infrastructure are constrained by third-party data availability, resolution, and cadence. Involve controls its data source. The AI system trains on proprietary data that no external party can replicate — the archive grows with each flight and has no open-access equivalent.
                </div>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* ─── §5. MISSION ARCHITECTURE TABLE ─── */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Mission Architecture"
                    title="How technology maps to missions"
                />

                <BodyText>Which platform combination is used for each mission type</BodyText>

                <div className="my-8 overflow-x-auto border border-involve-border">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-involve-default font-mono text-[10px] text-involve-muted tracking-widest uppercase border-b border-involve-border">
                            <tr>
                                <th className="px-4 py-3 font-medium">Mission Type</th>
                                <th className="px-4 py-3 font-medium hidden sm:table-cell">Platform</th>
                                <th className="px-4 py-3 font-medium hidden md:table-cell">Navigation</th>
                                <th className="px-4 py-3 font-medium hidden lg:table-cell">AI System</th>
                                <th className="px-4 py-3 font-medium hidden lg:table-cell">Typical Output</th>
                                <th className="px-4 py-3 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-involve-border/50 text-xs text-involve-text font-light">
                            {[
                                {
                                    missionType: "On-demand area mapping",
                                    platform: "Stratorelay®",
                                    nav: "Predictive wind-drift (Neurostar® deployment planning)",
                                    ai: "CLEAR — post-flight processing",
                                    output: "Orthorectified imagery, change detection maps",
                                    badge: { label: "Commercial", style: "green" as const }
                                },
                                {
                                    missionType: "Persistent surveillance / ISR",
                                    platform: "Stratostats®",
                                    nav: "Neurostar® active station-keeping",
                                    ai: "CLEAR — real-time query interface",
                                    output: "Continuous video · anomaly alerts · sector reports",
                                    badge: { label: "Operational", style: "green" as const }
                                },
                                {
                                    missionType: "Defense / reconnaissance",
                                    platform: "Stratostats® + SAR payload",
                                    nav: "Neurostar® active · classified routing",
                                    ai: "CLEAR — restricted intelligence layer",
                                    output: "SAR imagery · RF monitoring · EW data",
                                    badge: { label: "MoD Contract", style: "cyan" as const }
                                },
                                {
                                    missionType: "Continental monitoring",
                                    platform: "LoonHive® constellation",
                                    nav: "Neurostar® fleet coordination · quantum-opt.",
                                    ai: "CLEAR — multi-source fusion",
                                    output: "Regional intelligence dashboards",
                                    badge: { label: "Roadmap 2027", style: "amber" as const }
                                },
                                {
                                    missionType: "Payload / satellite IOD",
                                    platform: "Stratostats® / Stratorelay®",
                                    nav: "Neurostar® trajectory planning",
                                    ai: "Telemetry logging only",
                                    output: "Performance data, EDL validation",
                                    badge: { label: "Commercial", style: "green" as const }
                                },
                                {
                                    missionType: "Agricultural intelligence",
                                    platform: "Stratorelay® (multi-launch campaign)",
                                    nav: "Predictive deployment per field zone",
                                    ai: "CLEAR — crop health indices, harvest prediction",
                                    output: "NDVI maps · anomaly reports · NL summaries",
                                    badge: { label: "CLEAR Beta", style: "cyan" as const }
                                }
                            ].map((row, i) => (
                                <tr key={i} className="bg-involve-panel hover:bg-involve-blue/5 transition-colors">
                                    <td className="px-4 py-3 font-medium text-involve-text">{row.missionType}</td>
                                    <td className="px-4 py-3 text-involve-muted hidden sm:table-cell">{row.platform}</td>
                                    <td className="px-4 py-3 text-involve-muted hidden md:table-cell">{row.nav}</td>
                                    <td className="px-4 py-3 text-involve-muted hidden lg:table-cell">{row.ai}</td>
                                    <td className="px-4 py-3 text-involve-muted hidden lg:table-cell">{row.output}</td>
                                    <td className="px-4 py-3"><Badge label={row.badge.label} style={row.badge.style} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Two image placeholders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-involve-border border border-involve-border/50 mt-1">
                    <div className="bg-involve-panel flex overflow-hidden min-h-[220px]">
                        <ImagePlaceholder
                            label="Mission Operations Image"
                            hint="Ground control / launch team in the field — or mission control screen during a flight"
                            className="w-full border-none"
                        />
                    </div>
                    <div className="bg-involve-panel flex overflow-hidden min-h-[220px]">
                        <ImagePlaceholder
                            label="Aerial Imagery Sample"
                            hint="High-resolution imagery captured from stratosphere — Milan/Rome mapping, or agriculture sample"
                            className="w-full border-none"
                        />
                    </div>
                </div>

                <div className="my-6 p-4 bg-involve-panel border border-involve-border border-l-2 border-l-involve-blue text-[13px] text-involve-blue leading-relaxed font-mono">
                    Detailed platform-level engineering for each mission configuration is provided in <strong className="font-medium">Platform Architecture (IS-DR-03)</strong>. CLEAR analytics pipeline is expanded in <strong className="font-medium">CLEAR GeoAI Layer (IS-DR-06)</strong>. Mission-level use cases are detailed in the <strong className="font-medium">Use Cases</strong> documentation.
                </div>
            </ContentBlock>

            <NextSectionCard
                title="Stratospheric Platform Architecture"
                description="Engineering overview of Stratostats® and Stratorelay® subsystems."
                path="/dataroom/02_Product_and_Technology/02_Stratospheric_Platform_Architecture"
            />
        </div>
    );
}
