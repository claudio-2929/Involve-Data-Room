import { PageHeader, AbstractBox, ContentBlock, BodyText, SectionHeading, Card } from '../components/ui/core';
import { NextSectionCard } from '../components/shared/NavigationHelpers';
import { Layers, Cpu, Zap, Radio, Shield, Server } from 'lucide-react';

function TRLIndicator({ level }: { level: number }) {
    return (
        <div className="flex items-center gap-3 bg-involve-bg border border-involve-border px-3 py-1.5 rounded-lg inline-flex">
            <span className="text-xs font-mono text-involve-muted uppercase tracking-widest">TRL</span>
            <div className="flex gap-1 items-end h-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div
                        key={i}
                        className={`w-1 transition-all ${i <= level
                            ? i >= 7 ? 'bg-involve-cyan h-full' : 'bg-involve-cyan/60 h-[70%]'
                            : 'bg-involve-border h-[40%]'
                            }`}
                    />
                ))}
            </div>
            <span className="text-sm font-mono text-involve-text min-w-[1ch]">{level}</span>
        </div>
    );
}

function SubsystemCard({ icon: Icon, title, description, trl }: { icon: any, title: string, description: string, trl: number }) {
    return (
        <Card interactive className="flex flex-col h-full group">
            <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-involve-cyan/10 border border-involve-cyan/30 flex items-center justify-center text-involve-cyan group-hover:scale-110 group-hover:bg-involve-cyan/20 transition-all">
                    <Icon size={20} />
                </div>
                <TRLIndicator level={trl} />
            </div>
            <h4 className="text-lg font-medium text-involve-text mb-2 tracking-wide group-hover:text-involve-cyan transition-colors">{title}</h4>
            <p className="text-sm text-involve-muted leading-relaxed flex-1">{description}</p>
        </Card>
    );
}

export default function CLEARPlatformPage() {
    return (
        <div className="animate-in fade-in duration-500">
            <PageHeader
                title="CLEAR Platform"
                subtitle="The proprietary AI-driven intelligent navigation and station-keeping system at the core of Involve Space's capability."
                lastUpdated="November 2026"
            />

            <AbstractBox>
                The CLEAR (Continuous Layered Elevation and Routing) platform is a software-defined propulsion surrogate. Rather than burning heavy batteries on propellers to fight stratospheric winds, CLEAR utilizes real-time predictive meteorological modeling to change altitude and "ride" opposing wind currents. This achieves a 10x reduction in platform weight and energy consumption compared to traditional HAPS.
            </AbstractBox>

            <ContentBlock>
                <SectionHeading>System Architecture</SectionHeading>

                {/* Placeholder for complex diagram module */}
                <div className="w-full h-64 md:h-80 bg-involve-panel border border-involve-border rounded-xl mb-12 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-involve-bg to-transparent"></div>

                    <Layers size={48} className="text-involve-cyan/50 mb-4 z-10" />
                    <p className="text-involve-muted font-mono text-sm z-10 tracking-widest uppercase mb-2">Interactive Diagram Placeholder</p>
                    <p className="text-involve-muted/60 text-xs max-w-sm text-center z-10">
                        [A dynamically generated SVG of the CLEAR feedback loop will be embedded here showing the relationship between historical weather data, live sensors, and predictive neural networks.]
                    </p>
                </div>
            </ContentBlock>

            <ContentBlock>
                <SectionHeading>Core Subsystems</SectionHeading>
                <BodyText>
                    The platform operates via continuous interaction between five proprietary technological pillars, built entirely in-house to ensure sovereign capability and deep integration.
                </BodyText>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <SubsystemCard
                        icon={Cpu}
                        title="Predictive Neural Net"
                        description="Trained on 40 years of ECMWF global wind data to predict multi-layer stratospheric wind vectors 72 hours in advance with 94% accuracy."
                        trl={7}
                    />
                    <SubsystemCard
                        icon={Zap}
                        title="Energy Orchestrator"
                        description="Dynamically routes power between payload, telemetry, and ascent/descent control systems based on real-time solar incidence and battery degradation metrics."
                        trl={8}
                    />
                    <SubsystemCard
                        icon={Radio}
                        title="Mesh Telemetry Network"
                        description="Allows multiple sovereign platforms to communicate directly, sharing localized wind node data to improve fleet-wide prediction accuracy without ground-station dependency."
                        trl={6}
                    />
                    <SubsystemCard
                        icon={Shield}
                        title="Encrypted Command"
                        description="Military-grade AES-256 encryption layer wrapping all C2 (Command and Control) streams, specifically developed to comply with dual-use defense standards."
                        trl={7}
                    />
                    <SubsystemCard
                        icon={Server}
                        title="Digital Twin Simulator"
                        description="A cloud-based parallel environment where mission profiles are simulated 10,000+ times against Monte Carlo weather variants before launch execution."
                        trl={9}
                    />
                </div>
            </ContentBlock>

            <ContentBlock>
                <SectionHeading>Technical Validation</SectionHeading>
                <div className="bg-involve-panel/50 border border-emerald-500/20 rounded-xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full"></div>
                    <h4 className="text-emerald-400 font-medium mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        ESA InCubed Validation (October 2026)
                    </h4>
                    <p className="text-sm text-involve-muted leading-relaxed max-w-3xl">
                        During joint testing supervised by European Space Agency auditors, the CLEAR algorithm successfully demonstrated <span className="text-involve-text">sub-5km station-keeping over a specific geographic bounding box for 14 continuous days</span>, executing altitude shifts with a margin of error regarding altitude of ±15m. Battery reserve limits never dropped below 30% of critical capacity throughout the nighttime cycles.
                    </p>
                </div>
            </ContentBlock>

            <NextSectionCard
                title="Data Pipeline Architecture"
                description="Review how multi-spectral imaging and RF intelligence flows from stratosphere to customer edge."
                path="/dataroom/02_Product_and_Technology/data-pipeline"
            />
        </div>
    );
}
