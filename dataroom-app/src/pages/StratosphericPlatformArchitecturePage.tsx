import { cn } from '../components/ui/core';
import { DocHeader, SectionHeader, BodyText, ContentBlock } from '../components/ui/core';
import { NextSectionCard } from '../components/shared/NavigationHelpers';
import { CompareBand, CompareCol, SubsysGrid, SubsysCard, SplitCardGrid, SplitCell, Badge, ImagePlaceholder } from '../components/ui/TechSpecific';
import { StratostatsArchitectureSVG, ACSControlLoopSVG, StratorelaySubsystemSVG, LoonHiveArchitectureSVG } from '../components/ui/SVGs';

export default function StratosphericPlatformArchitecturePage() {
    return (
        <div className="animate-in fade-in duration-500 w-full max-w-5xl mx-auto pb-20">
            <DocHeader
                breadcrumb={<>02. Product &amp; Technology <span className="opacity-30 mx-1">›</span> <span className="text-involve-blue">Platform Architecture</span></>}
                title="Stratospheric Platform"
                titleStrong="Architecture"
                subtitle="Engineering-level architecture of both stratospheric platforms. Covers subsystem design, the Altitude Control System, power, telecommunications, modular payload bay, gondola structure, and full mission lifecycle."
                meta={[
                    { label: 'Document', value: 'IS-DR-02' },
                    { label: 'Platforms', value: 'Stratostats® · Stratorelay®' },
                    { label: 'TRL', value: 'TRL 9 (v1) · TRL 7 (v2)' },
                    { label: 'Revision', value: 'A — Feb 2026' },
                ]}
            />

            {/* 1. PLATFORM PHILOSOPHY */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Design Philosophy"
                    title="Two platforms, one architecture logic"
                    desc="Same altitude layer, same payload interface — differentiated by navigation mode and operational profile"
                />

                <BodyText>
                    Both Involve Space platforms operate in the same altitude band (20–30 km), carry the same modular payload bay, and connect to the same ground segment. The critical design fork is <strong className="font-medium text-involve-text">navigation strategy</strong>: Stratostats® continuously controls its altitude to station-keep over a target area; Stratorelay® deploys at a time and place where atmospheric winds will passively carry it over the target.
                </BodyText>

                <BodyText>
                    This gives operators a genuine economic choice. Stratostats® is the right tool when persistence and location-lock are requirements — ISR, continuous monitoring, defense. Stratorelay® is the right tool when the mission is on-demand, area-coverage, or cost-constrained — agricultural surveys, emergency mapping, rapid IOD validation.
                </BodyText>

                <CompareBand>
                    <CompareCol
                        tag="Active Platform"
                        name="Stratostats®"
                        nameColor="text-involve-blue"
                        sub="Autonomous altitude control · Station-keeping · Extended persistence"
                        badges={
                            <>
                                <Badge label="TRL 9 (v1)" style="green" />
                                <Badge label="TRL 7 (v2)" style="amber" />
                            </>
                        }
                        imagePlaceholderLabel="Stratostats® in flight"
                        imagePlaceholderHint="Balloon at stratospheric altitude — full platform with gondola visible below balloon envelope"
                        specs={[
                            { key: "Altitude", val: "18–30 km operational" },
                            { key: "Navigation", val: "Active — ACS pressurization", highlight: true },
                            { key: "Altitude range", val: "4 km adjustment range" },
                            { key: "Altitude speed", val: "1 m/s average (ACS)" },
                            { key: "Station-keeping", val: "50 km radius · 90% time", highlight: true },
                            { key: "Endurance", val: "90+ days (v2 target)" },
                            { key: "Ascent rate", val: "2–4 m/s" },
                            { key: "Power", val: "400 W solar + 800 Wh + 1000 Wh" },
                            { key: "Telecom", val: ">30 Mbps satellite uplink" },
                            { key: "OBC", val: "Custom + GPS up to 80 km" },
                            { key: "Flights executed", val: "30+ commercial · 100+ test", highlight: true },
                        ]}
                    />
                    <CompareCol
                        tag="Minimum Viable Platform"
                        name="Stratorelay®"
                        nameColor="text-involve-green"
                        sub="Predictive wind-drift · Cost-optimized · Single-operator deployment"
                        badges={
                            <>
                                <Badge label="TRL 8" style="green" />
                                <Badge label="Commercial" style="cyan" />
                            </>
                        }
                        imagePlaceholderLabel="Stratorelay® launch"
                        imagePlaceholderHint="Compact balloon at launch, single operator — showing simplified design vs Stratostats®"
                        specs={[
                            { key: "Altitude", val: "18–30 km operational" },
                            { key: "Navigation", val: "Passive — predictive wind-drift" },
                            { key: "Altitude control", val: "None — single float altitude" },
                            { key: "Deployment", val: "48 hours · 1 operator", highlight: true },
                            { key: "Launch platform", val: "Any surface, including a van", highlight: true },
                            { key: "Mission cost", val: "€2,000–3,000 end-to-end", highlight: true },
                            { key: "Mission length", val: "Hours to 2–5 days" },
                            { key: "Coverage (validated)", val: "181 km² Milan · 1,285 km² Rome" },
                            { key: "Coverage per 18 h", val: "Up to 1,285 km²" },
                            { key: "Key dependency", val: "Neurostar® deployment planning" },
                            { key: "Status", val: "Fully commercial · ongoing missions", highlight: true },
                        ]}
                    />
                </CompareBand>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* 2. STRATOSTATS® ARCHITECTURE */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Stratostats® · Deep Dive"
                    title="Stratostats® subsystem architecture"
                    desc="Seven primary subsystems, all coordinated through OBC + Neurostar®"
                />

                <BodyText>
                    Stratostats® is a <strong className="font-medium text-involve-text">stratospheric pseudo-satellite</strong> — a balloon-lifted vehicle capable of persistent, controlled operation in the 20–30 km altitude band. Unlike weather balloons that drift passively or satellites that follow fixed orbital paths, it navigates by commanding its own altitude to move in and out of wind layers with different directions and speeds, then drifting laterally until the next correction.
                </BodyText>

                <BodyText>
                    The vehicle is organized around seven tightly integrated subsystems. The <strong className="font-medium text-involve-text">OBC (On-Board Computer)</strong> running Neurostar® acts as the central nervous system — receiving sensor inputs from all subsystems, computing navigation commands, and issuing control signals to the ACS. Every subsystem is redundantly connected to prevent single-point failures.
                </BodyText>

                <StratostatsArchitectureSVG />
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* 3. ALTITUDE CONTROL SYSTEM */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Key Differentiator"
                    title="Altitude Control System (ACS)"
                    desc="The proprietary mechanism that enables station-keeping in the stratosphere"
                />

                <BodyText>
                    The ACS is the engineering differentiator of Stratostats®. Every competitor in the HAPS space faces the same fundamental challenge: stratospheric winds at a given altitude will carry a balloon off-target. The Involve solution is to control altitude precisely, using internal pressurization to move the vehicle into wind layers that carry it back toward the target.
                </BodyText>

                <BodyText>
                    The core insight is that at 18–21 km altitude, there are typically wind inversions — the wind reverses direction between closely spaced altitude bands. By navigating within this 4 km range, Neurostar® can exploit these inversions to maintain station over a target, achieving a 50 km radius station-keeping constraint 90% of the time.
                </BodyText>

                <div className="border border-involve-border/50 border-t-2 border-t-involve-blue bg-involve-panel my-8">
                    <div className="p-5 border-b border-involve-border/50 flex items-center justify-between gap-4">
                        <div className="text-[15px] font-semibold text-involve-text tracking-tight">ACS — Component Architecture</div>
                        <Badge label="Stratostats® v2 · TRL 7 → TRL 9" style="amber" />
                    </div>
                    <div className="p-0 sm:p-4">
                        <ACSControlLoopSVG className="my-0 border-none bg-transparent" />

                        <SplitCardGrid>
                            <SplitCell label="Ascent mechanism" title="Compressor fills ballonet → vehicle rises">
                                When Neurostar® determines the vehicle needs to ascend to a higher-speed or direction-favourable wind layer, it commands the <strong className="font-medium text-involve-text">axial compressor</strong> to push atmospheric air into the internal ballonet. This increases the volume-to-mass ratio of the total envelope, increasing buoyancy and lifting the vehicle. The low-pressure axial compressor design — adapted from drone propulsion technology in collaboration with NablaWave — was purpose-developed for the low-density stratospheric environment where standard compressors fail.
                            </SplitCell>
                            <div className="bg-involve-default border-t border-involve-border/50 sm:border-t-0 sm:border-l sm:mt-0">
                                <SplitCell label="Descent mechanism" title="Vent valve releases air → vehicle descends">
                                    To descend, Neurostar® opens the <strong className="font-medium text-involve-text">motor-actuated vent valve</strong>, releasing pressurized air from the ballonet through a controlled orifice. As internal volume decreases, buoyancy drops and the vehicle descends at approximately <strong className="font-medium text-involve-text">1 m/s average</strong>. The Remote Differential Pressure Sensor monitors the pressure difference between the inner ballonet and the outer envelope continuously, feeding back to the OBC control loop. The 4 km usable adjustment range in altitude maps to the typical wind inversion profile at 18–22 km.
                                </SplitCell>
                            </div>
                        </SplitCardGrid>
                    </div>
                </div>

                <div className="my-8 p-4 bg-involve-blue/5 border-l-2 border-l-involve-blue/50 text-[13px] text-involve-muted italic leading-relaxed">
                    <strong className="font-medium text-involve-text not-italic">NablaWave partnership:</strong> The low-pressure axial compressor is the component most technically demanding to adapt for stratospheric conditions. Standard electric compressors are designed for sea-level air density (~1.2 kg/m³); at 20 km altitude, density is approximately 0.09 kg/m³ — 13x thinner. Involve collaborated with NablaWave to develop a modified drone motor + rotor configuration specifically validated for this regime. This component represents a significant engineering moat: the design took years to validate and is not reproducible from commercial off-the-shelf components.
                </div>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* 4. SUBSYSTEM DETAIL CARDS */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Stratostats® · All Subsystems"
                    title="Full subsystem reference"
                />

                <BodyText>Engineering-level specification and design rationale for each of the seven subsystems</BodyText>

                <SubsysGrid>
                    <SubsysCard
                        num="01 — ENVELOPE" title="Balloon Envelope"
                        body={
                            <>The primary lifting body. A large-volume polyethylene envelope filled with helium or hydrogen. The shape and material distribution are determined by a proprietary <strong className="font-medium text-involve-text">gore algorithm</strong> that computes the optimal cut pattern for minimum stress concentration under the differential pressure loading specific to stratospheric conditions.</>
                        }
                        specs={[
                            { key: "Material", val: "Ultra-thin polyethylene film" },
                            { key: "Design", val: "Proprietary gore algorithm" },
                            { key: "Lifting gas", val: "Helium (He) · or Hydrogen (H₂)" },
                            { key: "Contains", val: "Internal ballonet (ACS)" }
                        ]}
                    />
                    <div className="border-t-2 border-t-amber-500/50">
                        <SubsysCard
                            num="02 — ACS" title="Altitude Control System"
                            body={
                                <>Internal ballonet pressurized by a low-pressure axial compressor. Vent valve for deflation. Remote Differential Pressure Sensor for closed-loop control. Enables ±2 km altitude adjustment at 1 m/s average, within a 4 km usable band. <em className="italic opacity-80 mt-1 block">See detailed ACS section above.</em></>
                            }
                            specs={[
                                { key: "Altitude range", val: "4 km usable band" },
                                { key: "Ascent rate", val: "~1 m/s (ACS commanded)" },
                                { key: "Compressor", val: "NablaWave · low-pressure axial" },
                                { key: "TRL (v2)", val: "7 → target 9 by 2026" }
                            ]}
                        />
                    </div>
                    <div className="border-t-2 border-t-involve-blue/60">
                        <SubsysCard
                            num="03 — OBC" title="On-Board Computer"
                            body={
                                <>Custom-built OBC running the Neurostar® navigation software. Reads GPS position (functional up to 80 km), atmospheric pressure and temperature sensors, and compressor state. Executes the real-time RL navigation policy and issues commands to ACS actuators at control loop frequency.</>
                            }
                            specs={[
                                { key: "GPS ceiling", val: "Up to 80 km altitude" },
                                { key: "Sensors", val: "Pressure · temp · IMU · GPS" },
                                { key: "Software", val: "Neurostar® RL navigation core" },
                                { key: "Fallback", val: "Deterministic algorithm (active)" }
                            ]}
                        />
                    </div>
                    <SubsysCard
                        num="04 — EPS" title="Electrical Power System"
                        body={
                            <>Dual-bus architecture that electrically isolates the compressor from all other systems. If the compressor bus fails, navigation and comms remain powered on the main bus. Solar panels on the gondola charge both batteries. Designed for the high radiation environment and extreme temperature cycling.</>
                        }
                        specs={[
                            { key: "Solar generation", val: "400 W peak (stratospheric)" },
                            { key: "Main battery", val: "800 Wh Li-ion (main bus)" },
                            { key: "Compressor battery", val: "1,000 Wh LiPo (isolated bus)" },
                            { key: "Architecture", val: "Dual-bus isolation · PMU" }
                        ]}
                    />
                    <SubsysCard
                        num="05 — TELECOM" title="Telecommunications"
                        body={
                            <>High-bandwidth satellite communications link providing both command & control uplink and high-speed data downlink. Enables real-time monitoring and live payload data streaming. Consistently operational across all Involve flights — TRL 9 status with no recorded link failures in commercial missions.</>
                        }
                        specs={[
                            { key: "Downlink bandwidth", val: ">30 Mbps" },
                            { key: "Link type", val: "Satellite — LEO/GEO" },
                            { key: "C2 uplink", val: "Real-time command relay" },
                            { key: "TRL", val: "9 — operational on all flights" }
                        ]}
                    />
                    <div className="border-t-2 border-t-involve-cyan/50">
                        <SubsysCard
                            num="06 — PAYLOAD" title="Modular Payload Bay"
                            body={
                                <>Standardized mechanical and electrical interfaces enable different sensor packages to be integrated without gondola redesign. This is the commercial revenue driver — clients fly their payloads, or Involve flies its own sensing stack (cameras, SAR, multispectral) for data-as-a-service missions. Over 40 distinct types flown.</>
                            }
                            specs={[
                                { key: "Interface", val: "Standardized mech + elec" },
                                { key: "Payloads flown", val: "40+ types" },
                                { key: "Sensor types", val: "EO · SAR · Multispectral · IOD" },
                                { key: "Integration time", val: "Hours (standardized IF)" }
                            ]}
                        />
                    </div>
                    <SubsysCard
                        num="07 — GONDOLA" title="Gondola Structure"
                        body={
                            <>The primary structural enclosure for all electronic subsystems. Carbon fibre and glass fibre composite construction provides the highest stiffness-to-mass ratio available. The external shape was optimized via CFD analysis to minimize drag and pendulum oscillation — a critical stability factor for imaging.</>
                        }
                        specs={[
                            { key: "Materials", val: "Carbon/Glass fibre composite" },
                            { key: "Optimization", val: "CFD drag + pendulum analysis" },
                            { key: "Thermal", val: "Insulated for –60°C stratosphere" },
                            { key: "Mounts", val: "Vibration-isolated brackets" }
                        ]}
                    />
                    <div className="border-t-2 border-t-involve-green/50">
                        <SubsysCard
                            num="08 — SAFETY" title="Safety Systems"
                            body={
                                <>Multi-layer, independent safety systems required by European aviation regulatory framework (SERA / national CAAs). All systems operate on independent power and logic from the main mission systems. Fully validated across all commercial and test flights.</>
                            }
                            specs={[
                                { key: "Parachute", val: "Deployment on termination" },
                                { key: "Termination valve", val: "Rapid gas release on CMD" },
                                { key: "Tracking", val: "Multi-GPS (independent)" },
                                { key: "Locating", val: "Acoustic beeper + alerting lights" }
                            ]}
                        />
                    </div>

                    {/* Image placeholder card */}
                    <div className="bg-involve-panel flex overflow-hidden min-h-[260px]">
                        <ImagePlaceholder label="Gondola detail photo" hint="Close-up of gondola showing payload bay, antenna array, solar panels, and structural frame" className="w-full border-none rounded-none bg-involve-default" />
                    </div>
                </SubsysGrid>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* 5. STRATORELAY ARCHITECTURE */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Stratorelay® · Deep Dive"
                    title="Stratorelay® — passive navigation system"
                    desc="How predictive deployment replaces active altitude control"
                />

                <BodyText>
                    Stratorelay® inverts the Stratostats® design philosophy: instead of continuously fighting atmospheric winds to stay on target, it uses <strong className="font-medium text-involve-text">predictive weather modelling to choose when and where to launch</strong> so that the winds themselves carry it where it needs to go. This is analogous to sailing downwind rather than tacking — fundamentally simpler and cheaper, within the constraint that you cannot change course mid-mission.
                </BodyText>

                <BodyText>
                    The key enabling technology is the <strong className="font-medium text-involve-text">Neurostar® deployment planning module</strong>, which ingests ECMWF weather forecasts and runs trajectory simulations to identify the optimal launch window, launch position, and initial altitude that will route the balloon over the target area within the required mission window.
                </BodyText>

                <StratorelaySubsystemSVG />

                <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-[1px] bg-involve-border border border-involve-border/50 my-8">
                    <div className="bg-involve-panel p-6 sm:p-8">
                        <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-involve-muted mb-3">Stratorelay® · Mission Logic</div>
                        <h4 className="text-[15px] font-semibold text-involve-text mb-2">Pre-flight trajectory planning replaces onboard control</h4>
                        <p className="text-[13px] font-light text-involve-muted leading-relaxed mb-4">
                            A typical Stratorelay® engagement works in three phases: <strong className="font-medium text-involve-text">(1) Planning</strong> — Neurostar® simulates hundreds of trajectory scenarios against the 10-day ECMWF forecast, outputting the optimal launch window and coordinates. <strong className="font-medium text-involve-text">(2) Launch</strong> — a single operator fills and releases the balloon from any ground surface (a van, a field, a rooftop) within 48 hours of engagement. No specialized launch infrastructure required. <strong className="font-medium text-involve-text">(3) Mission</strong> — the balloon climbs to float altitude where the selected wind layer carries it over the target. The operator monitors via telecom downlink. Recovery follows standard parachute descent.
                        </p>
                        <p className="text-[13px] font-light text-involve-muted leading-relaxed">
                            The limitation is that if winds deviate significantly from forecast, the trajectory cannot be corrected. Stratorelay® is therefore suitable for missions where approximate, predictable coverage is sufficient — area mapping, IOD rideshare, scientific missions. For persistent, location-specific surveillance, Stratostats® is required.
                        </p>

                        <div className="mt-8 flex flex-col gap-1.5 border-t border-involve-border/50 pt-4">
                            {[
                                { k: "Deployment time", v: "Within 48 hours of tasking" },
                                { k: "Team size", v: "1 operator" },
                                { k: "Launch infrastructure", v: "None — van/field/rooftop" },
                                { k: "Mission cost", v: "€2,000–3,000 complete" },
                                { k: "Coverage (validated)", v: "181 km² (Milan) · 1,285 km² (Rome)" },
                                { k: "Endurance", v: "Hours → 2–5 days depending on float altitude" }
                            ].map((s, i) => (
                                <div key={i} className="flex justify-between items-center text-xs py-1 border-b border-involve-border/30 last:border-none gap-4">
                                    <span className="font-mono text-[10px] text-involve-muted tracking-wide shrink-0">{s.k}</span>
                                    <span className="font-medium text-involve-text text-right">{s.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-involve-default min-h-[260px] flex overflow-hidden">
                        <ImagePlaceholder label="Trajectory map" hint="Neurostar® trajectory prediction over Milan or Rome — wind-coloured path overlay on map" className="w-full border-none" />
                    </div>
                </div>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* 6. MISSION LIFECYCLE */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Operations"
                    title="Full mission lifecycle"
                    desc="Phase-by-phase walkthrough for a Stratostats® standard mission"
                />

                <BodyText>
                    Each Stratostats® mission follows a structured lifecycle managed by the Involve mission control team using a proprietary operations software layer. The OBC + Neurostar® runs autonomously during float, but ground operators monitor all telemetry and can issue override commands at any time through the satellite uplink.
                </BodyText>

                <div className="flex flex-col border border-involve-border/50 rounded-sm overflow-hidden my-8">
                    {[
                        {
                            phase: "Phase 1", title: "Pre-mission",
                            content: <><strong>Mission planning and payload integration.</strong> Target area defined. Neurostar® StratoEye runs feasibility analysis — verifying the target is reachable from proposed launch coordinates given forecast wind conditions. Payload integrated into bay and tested. Safety systems inspection. Launch window confirmed with local aviation authority (NOTAM filed).</>
                        },
                        {
                            phase: "Phase 2", title: "Launch & Ascent",
                            content: <><strong>Gas fill, release, and climb to float altitude.</strong> The balloon is filled with helium/hydrogen on the launch pad. After system checks, it is released and climbs at <strong>2–4 m/s</strong> through the troposphere and tropopause. GPS and telemetry are tracked continuously. Neurostar® transitions from passive monitoring to active mode once the vehicle approaches the target float altitude band.</>
                        },
                        {
                            phase: "Phase 3", title: "Float & Station-keeping", dotBg: "bg-amber-500 shadow-[0_0_8px_rgba(240,160,32,0.6)]",
                            content: <>
                                <strong>Primary mission phase — active ACS station-keeping.</strong> Neurostar® continuously reads GPS position, atmospheric data, and wind estimates from onboard sensors + ECMWF model. It computes altitude commands at each control loop step, issuing compressor or vent valve signals to keep the vehicle within the 50 km target radius. The payload operates continuously. Ground operators monitor via live telemetry stream.
                                <ul className="mt-3 pl-4 list-disc space-y-1 marker:text-involve-muted">
                                    <li>Altitude band: 18–22 km (wind inversion zone)</li>
                                    <li>Station-keeping achieved: 50 km radius, 90% of time</li>
                                    <li>Payload data downlinked continuously via &gt;30 Mbps satellite link</li>
                                    <li>Typical mission duration: days to 90+ days (v2)</li>
                                </ul>
                            </>
                        },
                        {
                            phase: "Phase 4", title: "Termination", dotBg: "bg-red-500 shadow-[0_0_8px_rgba(255,96,96,0.6)]",
                            content: <><strong>Mission end — commanded or autonomous cutdown.</strong> On scheduled mission end, an anomaly trigger, or low battery condition, the ground operator (or OBC autonomously) fires the termination signal. The termination valve opens, rapidly releasing lifting gas. The parachute deploys and the gondola descends to a pre-calculated recovery zone.</>
                        },
                        {
                            phase: "Phase 5", title: "Recovery", dotBg: "bg-involve-green shadow-[0_0_8px_rgba(52,208,122,0.6)]",
                            content: <><strong>Gondola retrieval and refurbishment.</strong> Multi-GPS tracking, acoustic beeper, and lights guide the recovery team to the landing site. The gondola is retrieved and transported back to the operations base. After inspection, most gondola components are refurbished and reused. The balloon envelope is typically replaced. Payload data is extracted and transferred to the data infrastructure pipeline.</>
                        }
                    ].map((row, i) => (
                        <div key={i} className="grid grid-cols-[110px_16px_1fr] sm:grid-cols-[160px_16px_1fr] items-stretch bg-involve-panel border-b border-involve-border/50 last:border-none hover:bg-involve-panel/80 transition-colors">
                            <div className="p-4 sm:p-5 font-mono text-[9px] sm:text-[10px] text-involve-muted tracking-[0.1em] uppercase flex flex-col justify-center border-r border-involve-border/60">
                                <span className="text-[12px] sm:text-[14px] font-medium font-sans tracking-normal text-involve-blue mb-1 normal-case">{row.title}</span>
                                {row.phase}
                            </div>
                            <div className="relative flex flex-col items-center">
                                <div className="absolute inset-y-0 w-px bg-involve-border/80"></div>
                                <div className={cn("w-2.5 h-2.5 rounded-full z-10 mt-[26px] shrink-0", row.dotBg || "bg-involve-blue shadow-[0_0_8px_rgba(61,155,255,0.6)]")}></div>
                            </div>
                            <div className="p-4 sm:p-5 text-[13px] font-light text-involve-muted leading-relaxed">
                                {row.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-involve-border border border-involve-border/50 my-8">
                    <div className="bg-involve-panel flex overflow-hidden min-h-[200px]">
                        <ImagePlaceholder label="Launch sequence photo" hint="Team preparing or releasing balloon at launch site — gas fill or initial rise" className="w-full border-none" />
                    </div>
                    <div className="bg-involve-panel flex overflow-hidden min-h-[200px]">
                        <ImagePlaceholder label="Recovery photo" hint="Gondola on the ground after landing — recovery team with retrieved platform" className="w-full border-none" />
                    </div>
                </div>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* 7. PAYLOAD MODULARITY */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Payload System"
                    title="Modular payload architecture"
                    desc="Standardized integration enabling diverse sensing across EO, SAR, SIGINT, and scientific payloads"
                />

                <BodyText>
                    The payload bay is the commercial revenue interface of the platform. A standardized mechanical mounting system and electrical power + data bus allow different sensor packages to be integrated in hours, not weeks. This is the physical mechanism by which Involve serves both its own data-as-a-service missions (flying its own cameras and sensors) and third-party rideshare customers (flying customer payloads to the stratosphere).
                </BodyText>

                <BodyText>
                    As CLEAR matures, the payload architecture also becomes the sensing input layer of the intelligence system — each payload type requiring a corresponding CLEAR vision agent module to process its data output.
                </BodyText>

                <div className="my-8 overflow-x-auto border border-involve-border">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-involve-default font-mono text-[10px] text-involve-muted tracking-widest uppercase border-b border-involve-border">
                            <tr>
                                <th className="px-4 py-3 font-medium">Payload Type</th>
                                <th className="px-4 py-3 font-medium hidden md:table-cell">Application Domain</th>
                                <th className="px-4 py-3 font-medium hidden md:table-cell">Data Output</th>
                                <th className="px-4 py-3 font-medium">CLEAR Agent</th>
                                <th className="px-4 py-3 font-medium">Missions Flown</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-involve-border/50 text-xs text-involve-text font-light">
                            {[
                                { type: "High-res EO cameras", domain: "Earth observation, mapping, surveillance", output: "10 cm/px visible imagery, video", agent: "Vision agents — operational", badge: { label: "30+ commercial", style: "green" as const } },
                                { type: "Multispectral sensors", domain: "Agriculture, vegetation health, environmental", output: "NDVI, band-separated rasters", agent: "Spectral analysis agents (WIP)", badge: { label: "Multiple", style: "green" as const } },
                                { type: "SAR (Synthetic Aperture Radar)", domain: "Defense, maritime, all-weather EO", output: "Backscatter intensity, interferograms", agent: "SAR processing agents (planned)", badge: { label: "MoD programme", style: "amber" as const } },
                                { type: "Hyperspectral", domain: "Mining, precision agriculture, environmental", output: "Full spectral cube per pixel", agent: "Spectral library matching (planned)", badge: { label: "In integration", style: "cyan" as const } },
                                { type: "SIGINT / RF monitoring", domain: "Defense, border, maritime domain awareness", output: "RF signal capture, frequency maps", agent: "RF analysis agents (planned)", badge: { label: "Qualification", style: "amber" as const } },
                                { type: "Customer IOD payloads", domain: "Satellite instrument validation, EDL testing", output: "Telemetry, performance data", agent: "Not applicable", badge: { label: "Active rideshare", style: "green" as const } },
                                { type: "Scientific instruments", domain: "Atmospheric research, radiation, cosmic rays", output: "Time-series sensor data", agent: "Not applicable", badge: { label: "Multiple institutions", style: "green" as const } },
                            ].map((row, i) => (
                                <tr key={i} className="bg-involve-panel hover:bg-involve-blue/5 transition-colors">
                                    <td className="px-4 py-3 font-medium text-involve-text">{row.type}</td>
                                    <td className="px-4 py-3 text-involve-muted hidden md:table-cell">{row.domain}</td>
                                    <td className="px-4 py-3 text-involve-muted hidden md:table-cell">{row.output}</td>
                                    <td className="px-4 py-3 text-involve-muted">{row.agent}</td>
                                    <td className="px-4 py-3"><Badge label={row.badge.label} style={row.badge.style} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="border border-involve-border/50 flex overflow-hidden min-h-[240px] mt-1">
                    <ImagePlaceholder
                        label="Payload bay photo"
                        hint="Open gondola showing payload bay with a sensor integrated — ideally with a camera or multispectral unit visible in the mount"
                        className="w-full border-none"
                    />
                </div>

                <div className="my-6 p-4 bg-involve-panel border border-involve-border border-l-2 border-l-involve-blue text-[13px] text-involve-blue leading-relaxed font-mono">
                    Detailed payload-to-CLEAR data pipeline architecture is documented in <strong className="font-medium">CLEAR GeoAI Layer (IS-DR-06)</strong>. SAR-specific data products and StratoSAR programme details are in the <strong className="font-medium">Defense Use Cases</strong> document.
                </div>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* 8. LoonHive® FLEET ARCHITECTURE */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Fleet Architecture"
                    title="LoonHive® — from platform to constellation"
                    desc="How multiple Stratostats® units are coordinated into a persistent sensing network"
                />

                <BodyText>
                    LoonHive® is the fleet coordination architecture that transforms individual Stratostats® units into a geographically distributed sensing network. It extends the single-platform station-keeping problem into a multi-agent optimization: given N balloons with individual position states and ACS capabilities, compute the altitude command sequence for each unit that collectively maximizes coverage of a defined area while satisfying separation constraints.
                </BodyText>

                <SplitCardGrid>
                    <SplitCell label="The computational challenge" title="Classical solvers: 11 days for 150+ balloons">
                        Classical optimization solvers treat each balloon as an independent agent and exhaustively search the joint action space. For a 150-balloon fleet, this joint space is astronomically large — runtime on conventional hardware exceeds <strong className="font-medium text-involve-text">11 days</strong> per planning cycle, making real-time or even daily replanning impossible. Any fleet-level HAPS operator faces this problem. Most solve it by dramatically reducing fleet size, accepting much lower coverage density.
                    </SplitCell>
                    <div className="bg-involve-default border-t border-involve-border/50 sm:border-t-0 sm:border-l border-involve-blue/40 border-t-2">
                        <SplitCell label="Neurostar® fleet solution" title="Quantum-inspired optimization: minutes">
                            The Neurostar® fleet module applies a <strong className="font-medium text-involve-text">quantum-inspired combinatorial optimization approach</strong> (based on simulated annealing and variational quantum eigensolver frameworks) to the same problem. By reformulating the fleet coordination as a QUBO (Quadratic Unconstrained Binary Optimization) problem and solving it on GPU-accelerated hardware, the planning cycle for 150+ balloons completes in <strong className="font-medium text-involve-text">minutes</strong>. This is not a marginal improvement — it is the difference between the fleet being practically unmanageable and fully operational.
                        </SplitCell>
                    </div>
                </SplitCardGrid>

                <LoonHiveArchitectureSVG />

                <div className="my-6 p-4 bg-involve-panel border border-involve-border border-l-2 border-l-involve-blue text-[13px] text-involve-blue leading-relaxed font-mono">
                    LoonHive® design specifications, hundreds of simulations completed, and incremental flight test roadmap starting 2026 are detailed in the <strong className="font-medium">HAPS Roadmap</strong> document (IS-DR-04). Neurostar® fleet optimization algorithm details are in <strong className="font-medium">Flight Control System</strong> (IS-DR-05).
                </div>
            </ContentBlock>

            <NextSectionCard
                title="Stratorelay, Stratostats & LoonHive Roadmap"
                description="The development and commercialization timeline for the stratospheric fleet."
                path="/dataroom/02_Product_and_Technology/03_Stratorelay_Stratostats_LoonHive_Roadmap"
            />
        </div>
    );
}
