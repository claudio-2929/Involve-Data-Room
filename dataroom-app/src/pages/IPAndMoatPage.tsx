import React from 'react';
import {
    DocHeader,
    SectionHeader,
    BodyText,
    ContentBlock,
} from '../components/ui/core';

// LOCAL PRIMITIVES
function Callout({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'green' | 'amber' | 'blue' | 'purple' | 'cyan' | 'red' }) {
    const color = variant === 'green' ? 'border-green-400/40 bg-green-400/5 text-green-400/80'
        : variant === 'amber' ? 'border-amber-400/40 bg-amber-400/5 text-amber-400/80'
            : variant === 'blue' ? 'border-blue-400/40 bg-blue-400/5 text-blue-400/80'
                : variant === 'purple' ? 'border-purple-400/40 bg-purple-400/5 text-purple-400/80'
                    : variant === 'cyan' ? 'border-cyan-400/40 bg-cyan-400/5 text-cyan-400/80'
                        : variant === 'red' ? 'border-red-400/40 bg-red-400/5 text-red-400/80'
                            : 'border-blue-400/30 bg-blue-400/5 text-involve-muted';
    return <div className={`my-6 border-l-2 p-4 text-[0.8rem] font-light leading-relaxed ${color}`}>{children}</div>;
}

function RefNote({ children }: { children: React.ReactNode }) {
    return <p className="mt-8 text-[0.68rem] font-mono text-involve-dim leading-relaxed border-t border-involve-border pt-4">{children}</p>;
}

const SubSec: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="font-mono text-[0.8rem] font-medium text-involve-dim tracking-[0.08em] uppercase mt-9 mb-4">{children}</h3>
);

// Tables
const TblWrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="border border-involve-border-med overflow-x-auto my-8">
        <table className="w-full text-[0.78rem] border-collapse">{children}</table>
    </div>
);

const Th: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <th className="p-3 text-left font-mono text-[0.6rem] tracking-widest uppercase text-involve-dim bg-involve-bg2 border-b border-involve-border-med">{children}</th>
);

const Td: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <td className="p-4 border-b border-involve-border text-involve-muted font-light leading-relaxed align-top">{children}</td>
);

// Badges
const Badge: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[0.58rem] tracking-widest px-2 py-0.5 rounded-sm whitespace-nowrap ${color}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-current" />{children}
    </span>
);

const badgeVariants: Record<string, string> = {
    green: 'bg-green-400/15 text-green-400',
    amber: 'bg-amber-400/15 text-amber-400',
    blue: 'bg-blue-400/15 text-blue-400',
    cyan: 'bg-cyan-400/15 text-cyan-400',
    purple: 'bg-purple-400/15 text-purple-400',
    red: 'bg-red-400/15 text-red-400',
};

// IP Asset Rows
const IpAssetRow: React.FC<{ name: string; sub: string; meta1: string; badgeVariant: string; badgeText: string; meta2: string }> = ({ name, sub, meta1, badgeVariant, badgeText, meta2 }) => (
    <div className="grid md:grid-cols-[1fr_120px_100px_120px] grid-cols-[1fr] gap-2 md:gap-0 items-center p-4 border-b border-involve-border hover:bg-white/[0.02] transition-colors">
        <div>
            <div className="font-semibold text-[0.85rem] text-involve-text tracking-tight mb-0.5">{name}</div>
            <div className="text-[0.7rem] font-light text-involve-muted">{sub}</div>
        </div>
        <div className="font-mono text-[0.6rem] text-involve-dim uppercase tracking-widest">{meta1}</div>
        <div><Badge color={badgeVariants[badgeVariant]}>{badgeText}</Badge></div>
        <div className="font-mono text-[0.6rem] text-involve-dim uppercase tracking-widest md:text-right">{meta2}</div>
    </div>
);

// Flow Rows
const FlowRow: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div className="grid md:grid-cols-[160px_1fr] border-b border-involve-border hover:bg-involve-bg2 transition-colors">
        <div className="p-4 md:border-r border-b md:border-b-0 border-involve-border font-mono text-[0.65rem] tracking-widest text-involve-dim uppercase flex items-center">{label}</div>
        <div className="p-4 text-[0.8rem] font-light text-involve-muted leading-relaxed">{children}</div>
    </div>
);

// Pillar Grid
const PillarGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid md:grid-cols-2 gap-4 my-6">{children}</div>
);

const PillarCard: React.FC<{ title: string; badgeVariant: string; badgeText: string; children: React.ReactNode }> = ({ title, badgeVariant, badgeText, children }) => (
    <div className="bg-involve-panel border border-involve-border p-5 flex flex-col gap-3 hover:border-involve-border-med transition-colors">
        <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-involve-blue flex-shrink-0" />
            <div className="font-semibold text-[0.82rem] text-involve-text tracking-tight flex-1">{title}</div>
            <Badge color={badgeVariants[badgeVariant]}>{badgeText}</Badge>
        </div>
        <div className="text-[0.76rem] font-light text-involve-muted leading-relaxed pl-4 border-l border-involve-border/50">{children}</div>
    </div>
);

// Flywheel
const FlywheelSteps: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex flex-col gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);

const FlywheelStep: React.FC<{ num: string; title: string; children: React.ReactNode }> = ({ num, title, children }) => (
    <div className="grid grid-cols-[60px_1fr] bg-involve-panel hover:bg-involve-bg2 transition-colors group">
        <div className="flex items-center justify-center border-r border-involve-border font-mono text-[1.2rem] text-blue-400/40 group-hover:text-blue-400 transition-colors">{num}</div>
        <div className="p-5">
            <div className="font-semibold text-[0.88rem] text-involve-text mb-1 tracking-tight">{title}</div>
            <div className="text-[0.78rem] font-light text-involve-muted leading-relaxed">{children}</div>
        </div>
    </div>
);

// Stats Bar
const StatsBar3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid md:grid-cols-3 gap-px bg-white/[0.07] border border-involve-border-med my-8">{children}</div>
);

const StatCell: React.FC<{ val: React.ReactNode; label: string }> = ({ val, label }) => (
    <div className="bg-involve-panel p-6 hover:bg-involve-bg2 transition-colors text-center flex flex-col items-center justify-center gap-2">
        <div className="text-[2rem] font-semibold text-involve-text tracking-tight">{val}</div>
        <div className="font-mono text-[0.6rem] text-involve-dim uppercase tracking-widest">{label}</div>
    </div>
);

// Moat Layers
const MoatLayers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex flex-col border border-involve-border-med my-8 bg-white/[0.02] overflow-x-auto min-w-[600px]">{children}</div>
);

const MoatLayerHeader: React.FC = () => (
    <div className="grid grid-cols-[200px_1fr_120px] bg-involve-bg2 border-b border-involve-border p-3">
        <span className="font-mono text-[0.58rem] tracking-widest uppercase text-involve-dim">Layer</span>
        <span className="font-mono text-[0.58rem] tracking-widest uppercase text-involve-dim">Description</span>
        <span className="font-mono text-[0.58rem] tracking-widest uppercase text-involve-dim text-center">Strength (Now → 2028)</span>
    </div>
);

const MoatDot: React.FC<{ active?: boolean; partial?: boolean }> = ({ active, partial }) => {
    let bg = 'bg-involve-border opacity-50';
    if (active) bg = 'bg-blue-400';
    if (partial) bg = 'bg-blue-400/40';
    return <div className={`w-3 h-3 rounded-full ${bg}`} />;
}

const MoatLayer: React.FC<{ label: string; desc: string; strength: ('active' | 'partial' | 'empty')[] }> = ({ label, desc, strength }) => (
    <div className="grid grid-cols-[200px_1fr_120px] border-b border-involve-border hover:bg-involve-panel transition-colors">
        <div className="p-4 border-r border-involve-border font-semibold text-[0.8rem] text-involve-text flex items-center leading-snug">{label}</div>
        <div className="p-4 border-r border-involve-border text-[0.75rem] font-light text-involve-muted leading-relaxed">{desc}</div>
        <div className="p-4 flex items-center justify-center gap-1">
            {strength.map((s, i) => <MoatDot key={i} active={s === 'active'} partial={s === 'partial'} />)}
        </div>
    </div>
);

// Def Matrix
const DefMatrix: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex flex-col border border-involve-border-med my-8 bg-white/[0.02] overflow-x-auto min-w-[700px]">{children}</div>
);

const DefMatrixHeader: React.FC = () => (
    <div className="grid grid-cols-[30%_1fr_1fr_1fr_1fr] bg-involve-bg2 border-b border-involve-border p-3">
        <span className="font-mono text-[0.58rem] tracking-widest uppercase text-involve-dim">Dimension</span>
        <span className="font-mono text-[0.58rem] tracking-widest uppercase text-blue-400 text-center">Involve</span>
        <span className="font-mono text-[0.58rem] tracking-widest uppercase text-involve-dim text-center">Satellite EO</span>
        <span className="font-mono text-[0.58rem] tracking-widest uppercase text-involve-dim text-center">Other HAPS</span>
        <span className="font-mono text-[0.58rem] tracking-widest uppercase text-involve-dim text-center">EO Analytics</span>
    </div>
);

const DefMatrixRow: React.FC<{ label: string; v1: [string, string]; v2: [string, string]; v3: [string, string]; v4: [string, string] }> = ({ label, v1, v2, v3, v4 }) => {
    const renderCell = ([status, text]: [string, string]) => {
        let color = 'text-involve-dim';
        if (status === 'chk') color = 'text-blue-400 font-medium';
        if (status === 'cross') color = 'text-involve-dim/50';
        if (status === 'partial-txt') color = 'text-amber-400/80';
        return <div className={`p-4 border-r border-involve-border text-[0.75rem] flex items-center justify-center text-center ${color}`}>{text}</div>;
    };
    return (
        <div className="grid grid-cols-[30%_1fr_1fr_1fr_1fr] border-b border-involve-border hover:bg-involve-panel transition-colors">
            <div className="p-4 border-r border-involve-border font-semibold text-[0.8rem] text-involve-text flex items-center">{label}</div>
            {renderCell(v1)}
            {renderCell(v2)}
            {renderCell(v3)}
            {renderCell(v4)}
        </div>
    );
};


export default function IPAndMoatPage() {
    return (
        <div>
            <DocHeader
                breadcrumb="07. IP & Moat"
                title="Intellectual Property &"
                titleStrong="Defensibility Strategy"
                subtitle="A detailed mapping of Involve Space's proprietary assets, patent strategy, dual-use technology stack, software/AI barrier to entry, and the long-term structural defensibility derived from the stratospheric data flywheel."
                meta={[
                    { label: 'Classification', value: 'Series A Data Room — Confidential' },
                    { label: 'Updated', value: '25 February 2026' }
                ]}
            />

            <div className="max-w-[860px] mx-auto md:px-14 px-4 overflow-x-hidden">
                {/* 07.01 IP PORTFOLIO OVERVIEW */}
                <ContentBlock>
                    <SectionHeader eyebrow="07.01 — IP Portfolio Overview" title="Intellectual Property Master Ledger" desc="The comprehensive mapping of patents, trademarks, software copyrights, and trade secrets" />

                    <BodyText>
                        Involve Space's IP portfolio is designed to protect a vertically integrated model — spanning hardware systems, control software, branded products, and geospatial analytics. The core strategy relies on a combination of <strong>targeted patent filings</strong> for externally observable hardware innovations, and rigorous <strong>trade secret protection</strong> for the Neurostar and CLEAR AI stacks.
                    </BodyText>

                    <div className="bg-white/[0.04] border border-involve-border-med mt-6">
                        <IpAssetRow name="Stratostats®" sub="Stratospheric pseudo-satellite platform name" meta1="Trademark" badgeVariant="green" badgeText="Registered" meta2="Italy / EU" />
                        <IpAssetRow name="LoonHive®" sub="Stratospheric balloon constellation platform" meta1="Trademark" badgeVariant="green" badgeText="Registered" meta2="Italy / EU" />
                        <IpAssetRow name="Neurostar®" sub="AI flight control and mission management system" meta1="Trademark" badgeVariant="green" badgeText="Registered" meta2="Italy / EU" />
                        <IpAssetRow name="Probe on-board software" sub="Original flight software license" meta1="Copyright / License" badgeVariant="green" badgeText="Registered" meta2="Italy" />
                        <IpAssetRow name="Probe and balloon engineering design" sub="Mechanical and structural engineering project" meta1="Copyright" badgeVariant="green" badgeText="Registered" meta2="Italy" />
                        <IpAssetRow name="Pressurization & buoyancy system" sub="Dual-balloon altitude control architecture" meta1="Patent" badgeVariant="amber" badgeText="In Filing" meta2="Italy / PCT" />
                        <IpAssetRow name="Reusable flight hardware system" sub="Apex valve, gondola reusability architecture" meta1="Patent" badgeVariant="amber" badgeText="In Filing" meta2="Italy / PCT" />
                        <IpAssetRow name="Neurostar control stack" sub="AI navigation, station-keeping, fleet optimization algorithms" meta1="Trade Secret" badgeVariant="blue" badgeText="Protected" meta2="Confidential" />
                        <IpAssetRow name="Quantum-inspired optimization" sub="NP-hard constellation management algorithms" meta1="Trade Secret" badgeVariant="blue" badgeText="Protected" meta2="Confidential" />
                        <IpAssetRow name="CLEAR GeoAI platform" sub="LLM-enhanced Earth analytics pipeline and interface" meta1="Trade Secret + Copyright" badgeVariant="blue" badgeText="Protected" meta2="Confidential" />
                        <IpAssetRow name="Da Vinci Caelum Kit" sub="Educational DIY stratospheric launch system" meta1="Copyright / Trademark" badgeVariant="cyan" badgeText="In Progress" meta2="Italy / EU" />
                    </div>

                    <RefNote>
                        → Full FTO (Freedom to Operate) analysis attached: Involve_Space_FTO_w_Letters.pdf — IP counsel: Praxi IP, strategic IP partner for patent strategy and commercialization.
                    </RefNote>
                </ContentBlock>

                {/* 07.02 PATENTS & TRADEMARKS */}
                <ContentBlock>
                    <SectionHeader eyebrow="07.02 — Patents & Trademarks" title="Patent Filings & Trademark Portfolio" desc="Hardware patent strategy, filing rationale, and brand protection coverage" />

                    <BodyText>
                        Involve's patent strategy is deliberately <strong>selective and hardware-focused</strong>. Patent filings are reserved for innovations that are independently discoverable through flight operations, commercially observable, or which define physical mechanisms that competitors could reproduce without access to software. Software, AI algorithms, and operational methods are intentionally excluded from patent filings to preserve confidentiality.
                    </BodyText>
                    <BodyText>
                        This approach is consistent with the advice of Praxi IP, Involve's dedicated IP counsel, and aligns with standard practice in aerospace and deep-tech ventures where software-heavy innovations are more durably protected as trade secrets than through patent disclosure.
                    </BodyText>

                    <SubSec>Patent Filings — Detail</SubSec>
                    <TblWrap>
                        <thead>
                            <tr>
                                <Th>Innovation</Th>
                                <Th>Filing Type</Th>
                                <Th>Status</Th>
                                <Th>Jurisdiction</Th>
                                <Th>Rationale</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td>Dual-balloon pressurization & buoyancy system</Td>
                                <Td>Utility Patent</Td>
                                <Td><Badge color={badgeVariants.amber}>In Filing</Badge></Td>
                                <Td>Italy → PCT</Td>
                                <Td>Core altitude-control mechanism; externally observable; no software disclosure required</Td>
                            </tr>
                            <tr>
                                <Td>Apex servo-actuated gas release valve</Td>
                                <Td>Utility Patent</Td>
                                <Td><Badge color={badgeVariants.amber}>In Filing</Badge></Td>
                                <Td>Italy → PCT</Td>
                                <Td>Unique descent-profile control; enables precision landing and full balloon reusability</Td>
                            </tr>
                            <tr>
                                <Td>Reusable gondola structural architecture</Td>
                                <Td>Utility Patent</Td>
                                <Td><Badge color={badgeVariants.cyan}>Scoping</Badge></Td>
                                <Td>Italy / EU</Td>
                                <Td>Modular carbon-fiber gondola with rapid payload swap and multi-mission reuse design</Td>
                            </tr>
                            <tr>
                                <Td>Low-pressure axial compressor adaptation</Td>
                                <Td>Utility / Design Patent</Td>
                                <Td><Badge color={badgeVariants.cyan}>Scoping</Badge></Td>
                                <Td>Italy / EU</Td>
                                <Td>Off-the-shelf drone compressor adapted for stratospheric low-pressure conditions</Td>
                            </tr>
                        </tbody>
                    </TblWrap>

                    <Callout variant="amber">
                        <strong>Filing strategy note:</strong> Involve pursues Italian national filings first (lowest cost, fast prosecution), then PCT international phase for claims with global commercial relevance. EU and US national phases to be entered within 18 months of PCT filing in line with Series A commercialization timeline.
                    </Callout>

                    <SubSec>Reusable Balloon & Flight Hardware — IP Detail</SubSec>
                    <div className="border-t border-involve-border">
                        <FlowRow label="Apex Valve System">
                            <strong>Pressurized servo valve at balloon apex</strong> — designed to release controlled amounts of lifting gas during descent, enabling precise descent profiles and safe, low-impact landings. The valve can be commanded autonomously by the onboard computer or by remote uplink, allowing dual-mode operation. This mechanism is foundational to Involve's reusability claim: standard stratospheric balloons burst or are cut, destroying the balloon on every flight. Involve's valve system enables the balloon envelope to be recovered intact and reused for up to ten flights.
                        </FlowRow>
                        <FlowRow label="Dual-Balloon Architecture">
                            <strong>Outer ballast gas envelope + inner ballonet</strong> — the outer envelope contains the primary lifting gas (hydrogen or helium), while an inner ballonet can be inflated or deflated by the onboard compressor to adjust the system's effective buoyancy. By varying ballonet volume, the platform ascends or descends into different wind layers, enabling active station-keeping. This dual-balloon architecture is a significant departure from conventional single-envelope stratospheric balloon designs.
                        </FlowRow>
                        <FlowRow label="Reusable Architecture">
                            <strong>Both gondola and balloon designed for 10+ reuses</strong>, each system rated for three-month flight time, yielding up to 21,600 flight hours per balloon asset before retirement. The gondola is manufactured from carbon fiber (Acus Composites partnership) for low weight and high structural durability. This architecture reduces per-mission amortized hardware cost to well under €5,000, versus €30,000+ for single-use alternatives at comparable payload capacity.
                        </FlowRow>
                        <FlowRow label="FTO Analysis">
                            Freedom-to-operate analysis has been conducted by Praxi IP. No blocking third-party IP has been identified in the pressurization system, apex valve, or gondola reusability space. The FTO letter is available in the attached annex. Ongoing freedom-to-operate monitoring is maintained on a quarterly basis as the competitive landscape evolves.
                        </FlowRow>
                    </div>

                    <SubSec>Trademark Portfolio</SubSec>
                    <TblWrap>
                        <thead>
                            <tr>
                                <Th>Mark</Th>
                                <Th>Type</Th>
                                <Th>Status</Th>
                                <Th>Classes</Th>
                                <Th>Strategic Purpose</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td>INVOLVE SPACE</Td>
                                <Td>Word + Logo</Td>
                                <Td><Badge color={badgeVariants.green}>Registered</Badge></Td>
                                <Td>9, 12, 35, 42</Td>
                                <Td>Corporate identity; protects against brand dilution in aerospace and SaaS markets</Td>
                            </tr>
                            <tr>
                                <Td>STRATOSTATS®</Td>
                                <Td>Word Mark</Td>
                                <Td><Badge color={badgeVariants.green}>Registered</Badge></Td>
                                <Td>12, 42</Td>
                                <Td>Product identity for flagship heavy HAPS platform; prevents competitive brand confusion</Td>
                            </tr>
                            <tr>
                                <Td>LOONHIVE®</Td>
                                <Td>Word Mark</Td>
                                <Td><Badge color={badgeVariants.green}>Registered</Badge></Td>
                                <Td>12, 42, 38</Td>
                                <Td>Constellation product identity; critical for future telecom and EO DaaS licensing</Td>
                            </tr>
                            <tr>
                                <Td>NEUROSTAR®</Td>
                                <Td>Word Mark</Td>
                                <Td><Badge color={badgeVariants.green}>Registered</Badge></Td>
                                <Td>9, 42</Td>
                                <Td>AI software suite identity; supports future licensing to drone/satellite operators</Td>
                            </tr>
                            <tr>
                                <Td>DA VINCI CAELUM</Td>
                                <Td>Word + Design</Td>
                                <Td><Badge color={badgeVariants.cyan}>In Progress</Badge></Td>
                                <Td>9, 28, 41</Td>
                                <Td>Educational product brand; B2C channel and STEM outreach pipeline</Td>
                            </tr>
                            <tr>
                                <Td>CLEAR</Td>
                                <Td>Word Mark</Td>
                                <Td><Badge color={badgeVariants.cyan}>In Progress</Badge></Td>
                                <Td>9, 42</Td>
                                <Td>GeoAI platform brand; central to DaaS/SaaS commercial identity from 2026</Td>
                            </tr>
                            <tr>
                                <Td>STRATORELAY</Td>
                                <Td>Word Mark</Td>
                                <Td><Badge color={badgeVariants.cyan}>In Progress</Badge></Td>
                                <Td>12, 42</Td>
                                <Td>Lightweight mapping platform identity; protects the entry-level product line</Td>
                            </tr>
                        </tbody>
                    </TblWrap>
                </ContentBlock>

                {/* 07.03 PROPRIETARY AI & ALGORITHMS */}
                <ContentBlock>
                    <SectionHeader eyebrow="07.03 — Proprietary AI & Algorithms" title="Neurostar Software & Autonomous Control Stack" desc="The AI-driven software IP that makes stratospheric platforms commercially viable" />
                    <BodyText>
                        Involve's most strategically valuable IP is not hardware — it is <strong>Neurostar</strong>, the proprietary AI software suite that converts passive, wind-drifting stratospheric balloons into actively positioned, commercially useful platforms. Without Neurostar, Involve's balloons are expensive weather balloons. With Neurostar, they are autonomous Earth observation infrastructure.
                    </BodyText>
                    <BodyText>
                        Neurostar is designed as a <strong>scalable, modular AI stack</strong> applicable to single platforms and multi-platform constellations alike. Its architecture supports continuous learning from operational data, simulation-driven optimization, and real-time feedback loops. This is a major barrier to competitive entry: replicating the hardware is feasible; replicating a trained, flight-validated AI control system with four years of atmospheric operational data is not.
                    </BodyText>

                    <Callout variant="green">
                        <strong>Validation note:</strong> Neurostar's technical approach has been validated by Salvatore Candido (ex-CTO, Google Loon Project), the most credible external reference in stratospheric balloon autonomous control. His assessment supports the view that Involve's AI capabilities are at or above the level achieved by Project Loon before its discontinuation in 2021.
                    </Callout>

                    <SubSec>Neurostar Module Architecture</SubSec>
                    <TblWrap>
                        <thead>
                            <tr>
                                <Th>Module</Th>
                                <Th>Function</Th>
                                <Th>TRL</Th>
                                <Th>IP Status</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td>StationSeeker / AI</Td>
                                <Td>Predicts wind direction/intensity at altitude; computes real-time altitude adjustments for station-keeping. Integrates onboard sensor data with ECMWF atmospheric models.</Td>
                                <Td><Badge color={badgeVariants.amber}>TRL 6</Badge></Td>
                                <Td>Trade Secret</Td>
                            </tr>
                            <tr>
                                <Td>StratoLoop</Td>
                                <Td>Long-range global trajectory planner. Determines multi-day paths to allow any platform to reach any target area on Earth, overcoming cases where local station-keeping is not physically possible.</Td>
                                <Td><Badge color={badgeVariants.amber}>TRL 6</Badge></Td>
                                <Td>Trade Secret</Td>
                            </tr>
                            <tr>
                                <Td>StratoEye</Td>
                                <Td>Global planning and prioritization tool. Identifies regions with maximum navigability and station-keeping potential. Guides commercial expansion strategy; selects optimal launch windows and areas of interest.</Td>
                                <Td><Badge color={badgeVariants.cyan}>TRL 6+</Badge></Td>
                                <Td>Trade Secret</Td>
                            </tr>
                            <tr>
                                <Td>Quantum Fleet Optimizer</Td>
                                <Td>QUBO/QURO-based optimization for constellation management. Reduces NP-hard fleet coordination computation from ~11 days (classical) to minutes. Enables real-time management of 150+ balloon constellations.</Td>
                                <Td><Badge color={badgeVariants.amber}>TRL 5</Badge></Td>
                                <Td>Trade Secret</Td>
                            </tr>
                            <tr>
                                <Td>Linear Trajectory Tracker</Td>
                                <Td>Path-following algorithm for SAR-compatible operations. Enables platform to maintain linear trajectories over defined ground tracks with less than 10 km deviation over 100 km — enabling synthetic aperture radar sensing.</Td>
                                <Td><Badge color={badgeVariants.cyan}>Development</Badge></Td>
                                <Td>Trade Secret</Td>
                            </tr>
                            <tr>
                                <Td>Super-Resolution Processor</Td>
                                <Td>Physics-informed super-resolution algorithm applied both to atmospheric model data (ECMWF up to 400 isobaric levels) and to mission imagery, achieving centimetre-level resolution from stratospheric altitude.</Td>
                                <Td><Badge color={badgeVariants.amber}>TRL 5</Badge></Td>
                                <Td>Trade Secret</Td>
                            </tr>
                            <tr>
                                <Td>Object Detector</Td>
                                <Td>YOLO-based object detection and change detection layer applied to stratospheric imagery. Pre-trained on aerial datasets; fine-tuned on proprietary stratospheric imagery from 200+ flights.</Td>
                                <Td><Badge color={badgeVariants.amber}>TRL 5</Badge></Td>
                                <Td>Trade Secret</Td>
                            </tr>
                        </tbody>
                    </TblWrap>

                    <SubSec>Technical Barriers to Replication</SubSec>
                    <div className="border-t border-involve-border">
                        <FlowRow label="Training Data">
                            Neurostar's models have been trained and continuously updated on <strong>four years of atmospheric and flight operational data</strong> across 200+ missions spanning multiple seasons, altitudes, and geographies. A competitor beginning today would require years of comparable flight campaigns before their models reach similar performance. This data accumulation advantage grows with every additional Involve mission.
                        </FlowRow>
                        <FlowRow label="Google Loon Origins">
                            Neurostar's development started from the codebase that Salvatore Candido (ex-CTO, Loon) developed for Alphabet's Loon Project — the largest stratospheric balloon initiative ever executed. This foundation has been <strong>modernized with post-2021 AI breakthroughs</strong> including deep reinforcement learning, physics-informed neural networks, and quantum-inspired optimization. Involve holds the operational know-how of both the Loon era and current-generation AI simultaneously.
                        </FlowRow>
                        <FlowRow label="Quantum Advantage">
                            Classical algorithms for managing fleets of 150+ stratospheric platforms face exponential computation growth — benchmarks indicate ~11 days to compute optimal configurations for a 100-balloon constellation using classical approaches. Involve's <strong>quantum-inspired QUBO/QURO formulations</strong> reduce this to minutes, enabling real-time fleet management. This is not a marginal performance improvement; it is the difference between commercial viability and impracticality at constellation scale.
                        </FlowRow>
                        <FlowRow label="Vertical Integration">
                            Neurostar is co-designed with the hardware it controls. The compressor response curves, ballonet dynamics, solar panel degradation models, and communication latencies are all built into the control loop. A third party licensing only the software would need to redesign it entirely for different hardware. A third party building similar hardware would need to build an entirely new AI stack. <strong>The integration is the moat.</strong>
                        </FlowRow>
                    </div>

                    <SubSec>CLEAR GeoAI Platform — Proprietary AI Layer</SubSec>
                    <BodyText>
                        Complementing Neurostar, <strong>CLEAR</strong> (Cloud-based LLM-enhanced Earth Analytics & Reconnaissance) is Involve's second major proprietary AI asset. Where Neurostar controls platforms, CLEAR monetizes their output. CLEAR transforms centimetre-resolution stratospheric imagery into a conversational intelligence service, currently without direct peer in the EO market.
                    </BodyText>

                    <PillarGrid>
                        <PillarCard title="LLM Agent Layer" badgeVariant="purple" badgeText="Novel">
                            Proprietary LLM orchestration layer that translates user natural-language queries into geospatial operations across the data cube, returning narrative answers with annotated map overlays and numerical KPIs. No competitor offers an out-of-the-box equivalent.
                        </PillarCard>
                        <PillarCard title="Geospatial Data Cube" badgeVariant="cyan" badgeText="Proprietary">
                            Multi-source fusion architecture combining Involve stratospheric imagery with Copernicus/satellite data, meteorological feeds, and open socio-economic datasets. Continuously updated per operational area. Depth grows with every flight — no competitor can replicate without equivalent flight history.
                        </PillarCard>
                        <PillarCard title="Semantic Segmentation" badgeVariant="blue" badgeText="AI">
                            Object/anomaly detection and semantic land-use segmentation pipeline fine-tuned on proprietary stratospheric-altitude imagery. Performs significantly better on HAPS imagery than models trained on satellite or aerial datasets due to unique geometry and resolution profile.
                        </PillarCard>
                        <PillarCard title="Spatiotemporal Forecasting" badgeVariant="amber" badgeText="Predictive">
                            Forecasting networks that project future states (traffic evolution, flood exposure, construction change) from time-series of stratospheric observations. Enables CLEAR to deliver not just current state but near-future intelligence — a capability beyond any current commercial EO analytics product.
                        </PillarCard>
                    </PillarGrid>
                </ContentBlock>

                {/* 07.04 DATA OWNERSHIP & COMPOUNDING ADVANTAGE */}
                <ContentBlock>
                    <SectionHeader eyebrow="07.04 — Data Ownership & Compounding Advantage" title="Data Ownership & Compounding Flywheel" desc="How proprietary data accumulation creates a self-reinforcing competitive advantage over time" />
                    <BodyText>
                        Involve owns <strong>100% of all data collected across all missions</strong>. Every flight generates unique, ultra-high-resolution stratospheric imagery that no other entity on Earth holds. This data asset has two compounding properties: it improves Involve's AI systems directly, and it creates a proprietary intelligence archive that cannot be purchased or replicated on any timeline by any competitor.
                    </BodyText>
                    <BodyText>
                        The transition to a DaaS model in 2026 transforms this data accumulation from an operational byproduct into the primary revenue driver. The same dataset is sold multiple times across different customers and sectors — infrastructure operators, insurers, municipalities, defence agencies — at margins exceeding 90%. The <strong>data flywheel</strong> means that each new flight simultaneously generates revenue, improves AI model performance, and deepens the proprietary intelligence archive.
                    </BodyText>

                    <SubSec>The Involve Data Flywheel</SubSec>
                    <FlywheelSteps>
                        <FlywheelStep num="01" title="Proprietary Flight Operations">
                            Involve deploys Stratorelay and Stratostats platforms over target areas. Each flight generates <strong>ultra-high-resolution optical imagery (5–10 cm/pixel)</strong>, sensor telemetry, atmospheric profiling data, and operational performance logs that no competitor can obtain.
                        </FlywheelStep>
                        <FlywheelStep num="02" title="AI Model Improvement">
                            Flight data feeds back into continuous training pipelines for Neurostar (navigation performance, atmospheric model calibration) and CLEAR (object detection fine-tuning, geospatial segmentation, LLM context enrichment). <strong>Every mission makes the AI systems more accurate.</strong>
                        </FlywheelStep>
                        <FlywheelStep num="03" title="Better Products at Lower Cost">
                            Improved AI models enable more efficient station-keeping (less energy, fewer launches per coverage unit), higher-quality analytics output from CLEAR, and more accurate mission planning. <strong>Unit economics improve non-linearly</strong> as the model stack matures — target cost per km² drops from €0.6 toward ~€0.3 by 2028.
                        </FlywheelStep>
                        <FlywheelStep num="04" title="Multi-Tenant Data Monetization">
                            The proprietary data archive is sold simultaneously to multiple customers across different vertical applications — the same km² of Milan imagery serves an insurance company, a municipality, and a logistics firm. <strong>The marginal cost of an additional data customer approaches zero</strong>, driving gross margins above 90% at scale.
                        </FlywheelStep>
                        <FlywheelStep num="05" title="Widening Intelligence Gap">
                            The data archive's temporal depth creates an intelligence layer that competitors cannot instantly replicate regardless of capital. <strong>A new entrant today would require 4+ years of continuous flight operations</strong> to match Involve's historical data coverage before achieving equivalent AI model performance. This gap widens with every passing month.
                        </FlywheelStep>
                    </FlywheelSteps>

                    <SubSec>Data Ownership & Licensing Model</SubSec>
                    <TblWrap>
                        <thead>
                            <tr>
                                <Th>Data Category</Th>
                                <Th>Ownership</Th>
                                <Th>Usage Rights to Client</Th>
                                <Th>Involve Retains</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td>Custom Mission Imagery</Td>
                                <Td>Involve Space</Td>
                                <Td>Non-exclusive licence for defined use case and geography</Td>
                                <Td>Full archive, re-licensing rights, AI training rights</Td>
                            </tr>
                            <tr>
                                <Td>DaaS Subscription Data</Td>
                                <Td>Involve Space</Td>
                                <Td>Access licence during subscription period; no perpetual rights</Td>
                                <Td>Full ownership; data monetized across multiple concurrent subscribers</Td>
                            </tr>
                            <tr>
                                <Td>CLEAR Analytics Outputs</Td>
                                <Td>Involve Space</Td>
                                <Td>Derivative outputs (maps, KPIs, reports) belong to client</Td>
                                <Td>Underlying raw data, model weights, pipeline logic</Td>
                            </tr>
                            <tr>
                                <Td>Defence / Classified Missions</Td>
                                <Td>Negotiated</Td>
                                <Td>Exclusive licence possible; priced at premium</Td>
                                <Td>Hardware, software, operational IP; data transferred by agreement</Td>
                            </tr>
                            <tr>
                                <Td>AI Training Data</Td>
                                <Td>Involve Space</Td>
                                <Td>No client rights</Td>
                                <Td>All flight telemetry, sensor data, atmospheric profiles — never disclosed</Td>
                            </tr>
                        </tbody>
                    </TblWrap>

                    <Callout variant="purple">
                        <strong>Data sovereignty by design:</strong> All CLEAR platform data is processed and stored on EU-compliant cloud infrastructure (AWS EU regions), with GDPR-compliant data handling and data residency guarantees. For defence and institutional clients requiring data sovereignty, on-premise deployment options are available from 2027. The architecture is designed to meet EU data protection frameworks and NATO STANAG compatibility requirements.
                    </Callout>

                    <StatsBar3>
                        <StatCell val={<>200<span className="text-blue-400 text-[1.5rem]">+</span></>} label="Flights in proprietary archive" />
                        <StatCell val={<>€0.6<span className="text-[1.2rem] font-medium text-involve-dim">/km²</span></>} label="Data production cost" />
                        <StatCell val={<>90<span className="text-green-400 text-[1.5rem]">%+</span></>} label="Gross margin — DaaS at scale" />
                    </StatsBar3>
                </ContentBlock>

                {/* 07.05 LONG-TERM DEFENSIBILITY */}
                <ContentBlock>
                    <SectionHeader eyebrow="07.05 — Long-Term Defensibility Strategy" title="Long-Term Competitive Defensibility" desc="Why the moat grows stronger over time and why replication becomes harder, not easier" />
                    <BodyText>
                        Involve's competitive moat is multi-layered and compounding. Individual layers — IP protection, technical performance, data accumulation, operational know-how — each create friction against replication. Together, they create a <strong>structural defensibility position</strong> that strengthens as the company scales. This section maps each layer of the moat, its current strength, and its trajectory.
                    </BodyText>

                    <SubSec>Moat Layer Map — Current & Trajectory</SubSec>
                    <MoatLayers>
                        <MoatLayerHeader />
                        <MoatLayer label="Proprietary AI stack" desc="Neurostar trained on 4+ years of flight data; quantum fleet optimizer; CLEAR LLM analytics. Replication requires years of flight campaigns and independent R&D investment estimated at €10M+." strength={['active', 'active', 'active', 'active', 'active']} />
                        <MoatLayer label="Proprietary data archive" desc="200+ flights of centimetre-resolution stratospheric imagery with unique temporal depth. Grows non-linearly as constellation scales. Oldest archives become reference baselines for change detection — increasingly irreplaceable." strength={['active', 'active', 'active', 'active', 'partial']} />
                        <MoatLayer label="Hardware reusability IP" desc="Patented pressurization, apex valve, and gondola architecture reducing per-mission cost to <€7,300. No competitor has demonstrated comparable balloon reusability beyond a single flight." strength={['active', 'active', 'active', 'active', 'partial']} />
                        <MoatLayer label="Google Loon lineage" desc="Board members and advisors include ex-CEO (Westgarth), ex-CTO (Candido), ex-Program Manager (Lucero), and ex-Balloon Manufacturing Manager (Bergmann) of Google Loon — the only comparable stratospheric balloon program ever executed. This institutional knowledge is non-transferable." strength={['active', 'active', 'active', 'active', 'active']} />
                        <MoatLayer label="Regulatory expertise & relationships" desc="HAPS airspace regulation is unique, complex, and jurisdiction-specific. Involve is recognized as a European expert in stratospheric balloon regulation, with established relationships with ENAC, EASA, and national authorization offices. Regulatory navigation capability cannot be purchased." strength={['active', 'active', 'active', 'active', 'partial']} />
                        <MoatLayer label="Registered trademarks & brand equity" desc="All major product names registered. LarioSpace event creates annual brand reinforcement across the European aerospace ecosystem. Growing public launch visibility (200+ missions) builds institutional trust." strength={['active', 'active', 'active', 'partial', 'partial']} />
                        <MoatLayer label="Customer lock-in (DaaS model)" desc="Subscription customers integrate CLEAR into their decision workflows (insurance underwriting, municipal planning, infrastructure maintenance). Switching costs increase over time as historical baselines and CLEAR's sector-specific fine-tuning become embedded in client operations." strength={['partial', 'partial', 'active', 'active', 'active']} />
                        <MoatLayer label="Defence contract depth" desc="€2M MoD contract establishes classified operational credibility and creates contractual barriers: classified operations require security clearances, data sovereignty frameworks, and established trust relationships that no new entrant can replicate commercially." strength={['active', 'active', 'active', 'partial', 'partial']} />
                    </MoatLayers>

                    <SubSec>Competitive Defensibility Matrix</SubSec>
                    <BodyText>How Involve compares to key competitor categories across defensibility dimensions.</BodyText>
                    <DefMatrix>
                        <DefMatrixHeader />
                        <DefMatrixRow label="Reusable hardware IP" v1={['chk', '✓ Yes']} v2={['cross', '– N/A']} v3={['cross', '✗ No']} v4={['cross', '– N/A']} />
                        <DefMatrixRow label="Proprietary AI navigation" v1={['chk', '✓ Yes']} v2={['cross', '– N/A']} v3={['cross', '✗ No']} v4={['cross', '– N/A']} />
                        <DefMatrixRow label="Quantum-optimized constellation" v1={['chk', '✓ Yes']} v2={['partial-txt', '~ Partial']} v3={['cross', '✗ No']} v4={['cross', '– N/A']} />
                        <DefMatrixRow label="Proprietary imagery archive" v1={['chk', '✓ Yes']} v2={['chk', '✓ Yes']} v3={['cross', '✗ No']} v4={['partial-txt', '~ Partial']} />
                        <DefMatrixRow label="Conversational GeoAI platform" v1={['chk', '✓ CLEAR']} v2={['cross', '✗ No']} v3={['cross', '✗ No']} v4={['cross', '✗ No']} />
                        <DefMatrixRow label="Multi-source data fusion" v1={['chk', '✓ Yes']} v2={['partial-txt', '~ Partial']} v3={['cross', '✗ No']} v4={['partial-txt', '~ Partial']} />
                        <DefMatrixRow label="Registered product trademarks" v1={['chk', '✓ Yes']} v2={['chk', '✓ Yes']} v3={['partial-txt', '~ Partial']} v4={['chk', '✓ Yes']} />
                        <DefMatrixRow label="Google Loon advisory team" v1={['chk', '✓ Unique']} v2={['cross', '✗ No']} v3={['cross', '✗ No']} v4={['cross', '✗ No']} />
                        <DefMatrixRow label="Active HAPS regulatory expertise" v1={['chk', '✓ Yes']} v2={['cross', '– N/A']} v3={['partial-txt', '~ Partial']} v4={['cross', '– N/A']} />
                        <DefMatrixRow label="Real-time defence-cleared ops" v1={['chk', '✓ Active']} v2={['chk', '✓ Yes']} v3={['cross', '✗ No']} v4={['partial-txt', '~ Partial']} />
                    </DefMatrix>

                    <SubSec>IP Expansion Roadmap — 2026–2029</SubSec>
                    <TblWrap>
                        <thead>
                            <tr>
                                <Th>Horizon</Th>
                                <Th>IP Action</Th>
                                <Th>Rationale</Th>
                                <Th>Priority</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td>2026 Q1–Q2</Td>
                                <Td>Complete PCT filing for pressurization system & apex valve</Td>
                                <Td>International phase enables EU/US enforcement ahead of market entry in those regions</Td>
                                <Td><Badge color={badgeVariants.red}>High</Badge></Td>
                            </tr>
                            <tr>
                                <Td>2026 Q3</Td>
                                <Td>Register CLEAR trademark across EU + US</Td>
                                <Td>DaaS platform launch; brand protection in primary commercial markets</Td>
                                <Td><Badge color={badgeVariants.red}>High</Badge></Td>
                            </tr>
                            <tr>
                                <Td>2026–2027</Td>
                                <Td>Patent scope expansion — inter-platform communication architecture</Td>
                                <Td>LoonHive constellation rollout; inter-platform RF protocol is independently observable and patentable</Td>
                                <Td><Badge color={badgeVariants.amber}>Medium</Badge></Td>
                            </tr>
                            <tr>
                                <Td>2027</Td>
                                <Td>Explore Neurostar licensing programme</Td>
                                <Td>Potential recurring revenue stream from drone operators, satellite constellation managers; each licence reinforces Neurostar as industry standard</Td>
                                <Td><Badge color={badgeVariants.amber}>Medium</Badge></Td>
                            </tr>
                            <tr>
                                <Td>2027–2028</Td>
                                <Td>Patent SAR trajectory-tracking algorithm (if novel claim supported)</Td>
                                <Td>Linear path-following for SAR opens defence/dual-use segment; patent strengthens exclusivity in SAR-capable HAPS</Td>
                                <Td><Badge color={badgeVariants.cyan}>Contingent</Badge></Td>
                            </tr>
                            <tr>
                                <Td>2028–2029</Td>
                                <Td>Expand CLEAR data copyright to cover GeoAI knowledge graph</Td>
                                <Td>Compiled geospatial knowledge graph is a copyrightable database; formal protection strengthens DaaS licensing terms</Td>
                                <Td><Badge color={badgeVariants.cyan}>Contingent</Badge></Td>
                            </tr>
                            <tr>
                                <Td>Ongoing</Td>
                                <Td>Quarterly FTO monitoring & landscape watch</Td>
                                <Td>HAPS and GeoAI competitive landscape is evolving rapidly; ongoing monitoring prevents freedom-to-operate surprises</Td>
                                <Td><Badge color={badgeVariants.blue}>Continuous</Badge></Td>
                            </tr>
                        </tbody>
                    </TblWrap>

                    <Callout variant="green">
                        <strong>Long-term strategic view:</strong> Involve's IP advantage is not a static snapshot — it is a compounding system. More flights → better AI → cheaper operations → more customers → more flights. More customers → richer data archive → stronger CLEAR intelligence → deeper customer lock-in. The moat widens with every passing quarter of operation. The Series A funding accelerates this flywheel from a slow start to escape velocity. By the time a well-funded competitor could theoretically replicate Involve's hardware and initiate AI training, Involve will have 4–6 additional years of proprietary operational data, a fully deployed LoonHive constellation, and an embedded customer base whose workflows depend on CLEAR. The window for effective competitive entry is narrowing.
                    </Callout>

                    <RefNote>
                        → Cross-reference: 07.02 Patents & Trademarks · 07.03 Proprietary AI & Algorithms · 02.04 Neurostar Flight Control System · 02.05 CLEAR GeoAI Infrastructure Layer · 01.02 Investor Deck — Competitive Positioning
                    </RefNote>
                </ContentBlock>

            </div>
        </div>
    );
}
