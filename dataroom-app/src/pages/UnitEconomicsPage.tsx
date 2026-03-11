import { PageHeader, AbstractBox, ContentBlock, MetricCard, SectionHeading, BodyText } from '../components/ui/core';
import { NextSectionCard } from '../components/shared/NavigationHelpers';
import { Download } from 'lucide-react';

export default function UnitEconomicsPage() {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-start mb-10">
                <PageHeader
                    title="Unit Economics & Margins"
                    subtitle="A detailed breakdown of the platform lifecycle cost and Data-as-a-Service margin structure."
                    lastUpdated="Q3 2026"
                />

                {/* Scenario Toggle Layer Placeholder */}
                <div className="hidden lg:flex items-center bg-involve-panel border border-involve-border rounded-lg p-1 mt-2">
                    <button className="px-4 py-1.5 text-sm font-medium rounded-md bg-involve-cyan/10 text-involve-cyan border border-involve-cyan/20">Base Case</button>
                    <button className="px-4 py-1.5 text-sm font-medium rounded-md text-involve-muted hover:text-involve-text transition-colors">Conservative</button>
                    <button className="px-4 py-1.5 text-sm font-medium rounded-md text-involve-muted hover:text-involve-text transition-colors">Bull</button>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <MetricCard label="Platform CapEx (CLEAR)" value="€85k" trend="-15% YoY" suffix="/ unit" />
                <MetricCard label="Flight Endurance" value="45" trend="Target 90" suffix=" days" />
                <MetricCard label="Cost per Flight Hour" value="€75" trend="-20% YoY" />
                <MetricCard label="Gross Margin (DaaS)" value="82%" trend="+5% YoY" />
            </div>

            <AbstractBox>
                The financial moat of Involve Space relies on shifting Earth Observation from a high-CapEx hardware business to a high-margin software business. By drastically reducing the cost of the physical asset (the balloon + CLEAR platform) compared to a satellite, the business model can absorb higher hardware loss rates while still achieving software-like margins (&gt;80%) on the resulting data and telecommunications services.
            </AbstractBox>

            <ContentBlock>
                <SectionHeading>Cost Structure Comparison</SectionHeading>
                <BodyText>
                    Traditional LEO (Low Earth Orbit) satellites require significant upfront capital not just for manufacturing, but for launch integration. The Involve approach bypasses launch vehicles entirely.
                </BodyText>

                {/* Placeholder for Data Chart Grid */}
                <div className="w-full h-80 bg-involve-panel border border-involve-border rounded-xl mt-6 p-6 flex flex-col relative overflow-hidden">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="text-sm font-mono tracking-widest uppercase text-involve-muted">Lifecycle Cost: LEO vs Involve HAPS</h4>
                        <div className="flex gap-2">
                            <span className="flex items-center gap-1 text-xs text-involve-muted"><div className="w-2 h-2 bg-involve-border rounded-full"></div> LEO Microsat</span>
                            <span className="flex items-center gap-1 text-xs text-involve-text"><div className="w-2 h-2 bg-involve-cyan rounded-full"></div> Involve CLEAR Platform</span>
                        </div>
                    </div>

                    <div className="flex-1 flex items-end justify-center gap-12 md:gap-24 opacity-80 pb-4">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs text-involve-muted mb-1">Manufacturing</span>
                            <div className="flex items-end gap-4 h-full">
                                <div className="w-12 md:w-16 bg-involve-border rounded-t-sm h-[80%] relative group">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">€3M</div>
                                </div>
                                <div className="w-12 md:w-16 bg-involve-cyan/80 rounded-t-sm h-[10%] relative group">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-involve-cyan opacity-0 group-hover:opacity-100 transition-opacity">€85k</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs text-involve-muted mb-1">Launch/Deployment</span>
                            <div className="flex items-end gap-4 h-full">
                                <div className="w-12 md:w-16 bg-involve-border rounded-t-sm h-[60%] relative group">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">€1M</div>
                                </div>
                                <div className="w-12 md:w-16 bg-involve-cyan/80 rounded-t-sm h-[2%] relative group">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-involve-cyan opacity-0 group-hover:opacity-100 transition-opacity">€5k</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2 hidden sm:flex">
                            <span className="text-xs text-involve-muted mb-1">Operations (1 Yr)</span>
                            <div className="flex items-end gap-4 h-full">
                                <div className="w-12 md:w-16 bg-involve-border rounded-t-sm h-[20%] relative group">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">€150k</div>
                                </div>
                                <div className="w-12 md:w-16 bg-involve-cyan/80 rounded-t-sm h-[30%] relative group shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-involve-cyan opacity-0 group-hover:opacity-100 transition-opacity">€250k</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentBlock>

            <ContentBlock>
                <SectionHeading>Financial Export Module</SectionHeading>
                <div className="bg-involve-bg border border-involve-border rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 className="text-lg font-medium text-involve-text mb-2">Detailed Financial Model (XLSX)</h4>
                        <p className="text-sm text-involve-muted max-w-xl">
                            Download the complete interactive Excel model including P&L, balance sheet, cash flow statements, and variable scenario toggles.
                        </p>
                    </div>
                    <button className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-involve-panel border border-involve-cyan/30 text-involve-cyan rounded-lg hover:bg-involve-cyan/10 transition-colors group">
                        <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                        <span className="font-medium">Download Model</span>
                    </button>
                </div>
            </ContentBlock>

            <NextSectionCard
                title="Industrialization & Operations Strategy"
                description="Review the roadmap for scalable platform manufacturing and fleet operations."
                path="/dataroom/06_Industrialization_and_Operations/01_Industrialization_and_Operations_Strategy"
            />
        </div>
    );
}
