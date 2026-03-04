import { cn } from './core';

// ---- Stratostats Subsystem Architecture SVG ----

export function StratostatsArchitectureSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[800px] block mx-auto">
                <defs>
                    <marker id="a-b" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" className="fill-involve-blue" /></marker>
                    <marker id="a-g" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#34d07a" /></marker>
                    <marker id="a-d" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" className="fill-involve-dim" /></marker>
                    <filter id="blue-glow"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                </defs>

                {/* Central OBC node */}
                <rect x="295" y="168" width="210" height="76" rx="4"
                    className="fill-involve-blue/5 stroke-involve-blue/50" strokeWidth="1.8"
                    filter="url(#blue-glow)" />
                <text x="400" y="194" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="10" className="fill-involve-blue" textAnchor="middle" letterSpacing="1">OBC + NEUROSTAR®</text>
                <text x="400" y="212" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" className="fill-involve-blue/60" textAnchor="middle">Real-time nav · Closed-loop control</text>
                <text x="400" y="226" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" className="fill-involve-blue/50" textAnchor="middle">GPS to 80 km · Atmospheric sensors</text>
                <text x="400" y="238" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7.5" className="fill-involve-blue/40" textAnchor="middle">Neurostar® RL agent · ECMWF wind model</text>

                {/* 1 — BALLOON + ACS (top) */}
                <rect x="270" y="18" width="260" height="80" rx="3" stroke="rgba(240,160,32,0.5)" strokeWidth="1.3" className="fill-involve-bg2" />
                <text x="400" y="43" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9.5" fill="rgba(240,160,32,0.85)" textAnchor="middle" letterSpacing="0.5">BALLOON ENVELOPE + ACS</text>
                <text x="400" y="59" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Polyethylene envelope · Proprietary gore algorithm</text>
                <text x="400" y="73" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Internal ballonet · Low-pressure axial compressor</text>
                <text x="400" y="87" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Vent valve · Remote Differential Pressure Sensor</text>
                <line x1="400" y1="100" x2="400" y2="166" stroke="rgba(240,160,32,0.5)" strokeWidth="1.5" markerEnd="url(#a-b)" strokeDasharray="4 3" />
                <text x="406" y="138" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" fill="rgba(240,160,32,0.45)">compress / vent cmd</text>

                {/* 2 — TELECOM (top right) */}
                <rect x="594" y="80" width="196" height="70" rx="3" strokeWidth="1" className="fill-involve-bg2 stroke-involve-border" />
                <text x="692" y="104" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" textAnchor="middle" className="fill-involve-text">TELECOM SYSTEM</text>
                <text x="692" y="120" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">&gt;30 Mbps satellite link</text>
                <text x="692" y="134" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">C2 uplink · Data downlink</text>
                <line x1="594" y1="115" x2="507" y2="196" strokeWidth="1" markerEnd="url(#a-b)" className="stroke-involve-border" />

                {/* 3 — PAYLOAD BAY (right) */}
                <rect x="618" y="190" width="172" height="70" rx="3" stroke="rgba(0,200,224,0.35)" strokeWidth="1" className="fill-involve-bg2" />
                <text x="704" y="214" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" fill="rgba(0,200,224,0.75)" textAnchor="middle">PAYLOAD BAY</text>
                <text x="704" y="230" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Standardized mech + elec IF</text>
                <text x="704" y="244" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">EO · SAR · Multispectral · SIGINT</text>
                <line x1="618" y1="225" x2="507" y2="215" stroke="rgba(0,200,224,0.4)" strokeWidth="1" markerEnd="url(#a-b)" />

                {/* 4 — SAFETY SYSTEMS (bottom right) */}
                <rect x="596" y="306" width="194" height="70" rx="3" stroke="rgba(52,208,122,0.3)" strokeWidth="1" className="fill-involve-bg2" />
                <text x="693" y="330" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" fill="rgba(52,208,122,0.7)" textAnchor="middle">SAFETY SYSTEMS</text>
                <text x="693" y="346" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Parachute · Termination valve</text>
                <text x="693" y="360" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Multi-GPS · Beeper · Lights</text>
                <line x1="596" y1="341" x2="507" y2="240" stroke="rgba(52,208,122,0.3)" strokeWidth="1" markerEnd="url(#a-b)" />

                {/* 5 — EPS (bottom left) */}
                <rect x="10" y="306" width="194" height="70" rx="3" strokeWidth="1" className="fill-involve-bg2 stroke-involve-border" />
                <text x="107" y="330" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" textAnchor="middle" className="fill-involve-text">EPS — DUAL BUS</text>
                <text x="107" y="346" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">800 Wh Li-ion main bus</text>
                <text x="107" y="360" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">1,000 Wh LiPo compressor bus</text>
                <line x1="204" y1="341" x2="293" y2="240" strokeWidth="1" markerEnd="url(#a-b)" className="stroke-involve-border" />
                <text x="62" y="304" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" className="fill-involve-dim">400 W solar →</text>

                {/* 6 — GONDOLA STRUCTURE (bottom) */}
                <rect x="270" y="326" width="260" height="68" rx="3" strokeWidth="1" className="fill-involve-bg2 stroke-involve-border" />
                <text x="400" y="350" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" textAnchor="middle" className="fill-involve-dim">GONDOLA STRUCTURE</text>
                <text x="400" y="366" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Carbon fibre + Glass fibre · CFD-optimized</text>
                <text x="400" y="380" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Thermal insulation · Vibration-isolated mounts</text>
                <line x1="400" y1="326" x2="400" y2="246" strokeWidth="1" markerEnd="url(#a-d)" className="stroke-involve-border" />

                {/* 7 — GROUND STATION (left, external) */}
                <rect x="10" y="158" width="194" height="90" rx="3" strokeWidth="1" strokeDasharray="5 4" className="fill-involve-bg2 stroke-involve-border" />
                <text x="107" y="183" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" textAnchor="middle" className="fill-involve-text">GROUND STATION</text>
                <text x="107" y="199" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Mission control</text>
                <text x="107" y="213" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">C2 interface</text>
                <text x="107" y="227" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Telemetry monitoring</text>
                <line x1="204" y1="202" x2="293" y2="202" strokeWidth="1" markerEnd="url(#a-b)" className="stroke-involve-border" />
                <line x1="288" y1="210" x2="204" y2="210" strokeWidth="1" markerEnd="url(#a-d)" className="stroke-involve-border" />
                <text x="249" y="198" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="6.5" textAnchor="middle" className="fill-involve-dim">C2 UPLINK</text>
                <text x="249" y="218" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="6.5" textAnchor="middle" className="fill-involve-dim">TLM DOWNLINK</text>
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed">
                FIG. 1 — STRATOSTATS SUBSYSTEM ARCHITECTURE AND DEPENDENCY GRAPH
            </div>
        </div>
    );
}

// ---- ACS Control Loop SVG ----

export function ACSControlLoopSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[700px] block mx-auto">
                <defs>
                    <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#3d9bff" /></marker>
                    <marker id="arr-g" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#34d07a" /></marker>
                    <marker id="arr-o" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#f0a020" /></marker>
                </defs>

                {/* Neurostar node */}
                <rect x="250" y="20" width="200" height="70" rx="4" fill="rgba(61,155,255,0.1)" stroke="#3d9bff" strokeWidth="1.5" />
                <text x="350" y="45" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="10" fill="#3d9bff" textAnchor="middle" letterSpacing="1">NEUROSTAR® RL AGENT</text>
                <text x="350" y="60" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="9" textAnchor="middle" className="fill-involve-muted">Determines target altitude</text>
                <text x="350" y="75" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="9" textAnchor="middle" className="fill-involve-muted">based on wind layer models</text>

                {/* Low level controller */}
                <rect x="250" y="140" width="200" height="60" rx="3" strokeWidth="1" className="fill-involve-bg2 stroke-involve-border" />
                <text x="350" y="162" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" textAnchor="middle" className="fill-involve-text">PID CONTROLLER</text>
                <text x="350" y="178" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Converts altitude delta to actuator commands</text>

                {/* Actuators */}
                <rect x="100" y="230" width="160" height="60" rx="3" stroke="rgba(52,208,122,0.4)" strokeWidth="1" className="fill-involve-bg2" />
                <text x="180" y="252" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" fill="#34d07a" textAnchor="middle">COMPRESSOR</text>
                <text x="180" y="268" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Increases density → Descend</text>

                <rect x="440" y="230" width="160" height="60" rx="3" stroke="rgba(240,160,32,0.4)" strokeWidth="1" className="fill-involve-bg2" />
                <text x="520" y="252" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" fill="#f0a020" textAnchor="middle">VENT VALVE</text>
                <text x="520" y="268" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Decreases density → Ascend</text>

                {/* Connections */}
                <line x1="350" y1="90" x2="350" y2="137" stroke="#3d9bff" strokeWidth="1.5" markerEnd="url(#arr)" />
                <text x="360" y="118" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8" fill="#3d9bff">Target Z</text>

                <path d="M 300 200 L 300 215 L 180 215 L 180 227" fill="none" stroke="#34d07a" strokeWidth="1.5" markerEnd="url(#arr-g)" />
                <text x="235" y="210" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" fill="#34d07a">PWM / ON</text>

                <path d="M 400 200 L 400 215 L 520 215 L 520 227" fill="none" stroke="#f0a020" strokeWidth="1.5" markerEnd="url(#arr-o)" />
                <text x="445" y="210" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" fill="#f0a020">OPEN CMD</text>

                {/* Feedback loop */}
                <path d="M 100 260 L 40 260 L 40 170 L 247 170" fill="none" strokeWidth="1" strokeDasharray="4 4" markerEnd="url(#arr)" className="stroke-involve-border" />
                <path d="M 600 260 L 660 260 L 660 170 L 453 170" fill="none" strokeWidth="1" strokeDasharray="4 4" markerEnd="url(#arr)" className="stroke-involve-border" />

                <rect x="58" y="160" width="100" height="20" rx="2" className="fill-involve-bg" />
                <text x="108" y="174" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" textAnchor="middle" className="fill-involve-muted">ALTITUDE SENSOR</text>

                <rect x="542" y="160" width="100" height="20" rx="2" className="fill-involve-bg" />
                <text x="592" y="174" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" textAnchor="middle" className="fill-involve-muted">GPS Z-AXIS</text>
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed">
                FIG. 2 — ACS CLOSED-LOOP CONTROL ARCHITECTURE
            </div>
        </div>
    );
}

// ---- Stratorelay Subsystem SVG ----

export function StratorelaySubsystemSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[600px] block mx-auto">
                <defs>
                    <marker id="ar" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" className="fill-involve-dim" /></marker>
                </defs>

                <line x1="120" y1="140" x2="480" y2="140" strokeWidth="1" strokeDasharray="2 4" className="stroke-involve-border" />

                {/* Balloon */}
                <circle cx="300" cy="80" r="40" stroke="rgba(52,208,122,0.5)" strokeWidth="1.5" className="fill-involve-bg2" />
                <path d="M 285 115 L 315 115 L 300 135 Z" stroke="rgba(52,208,122,0.5)" strokeWidth="1.5" className="fill-involve-bg2" />
                <text x="300" y="85" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" fill="rgba(52,208,122,0.8)" textAnchor="middle">ZERO-PRESSURE</text>

                {/* Parachute */}
                <path d="M 280 155 Q 300 145 320 155 L 300 180 Z" strokeWidth="1" className="fill-involve-bg2 stroke-involve-border" />
                <text x="350" y="165" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" className="fill-involve-muted">Parachute</text>

                {/* Payload */}
                <rect x="270" y="195" width="60" height="40" rx="3" stroke="rgba(0,200,224,0.5)" strokeWidth="1.5" className="fill-involve-bg2" />
                <text x="300" y="213" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8" fill="rgba(0,200,224,0.8)" textAnchor="middle">PAYLOAD</text>
                <text x="300" y="225" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="6.5" textAnchor="middle" className="fill-involve-dim">+ Tracker</text>

                <line x1="300" y1="135" x2="300" y2="195" strokeWidth="1.5" className="stroke-involve-border" />

                {/* Callouts */}
                <path d="M 255 70 L 220 50 L 160 50" fill="none" strokeWidth="1" className="stroke-involve-border" />
                <text x="150" y="53" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="end" className="fill-involve-muted">No envelope pressurization</text>

                <path d="M 265 215 L 220 215 L 160 215" fill="none" strokeWidth="1" className="stroke-involve-border" />
                <text x="150" y="218" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="end" className="fill-involve-muted">Integrated sensor suites</text>

                <path d="M 335 215 L 360 215 L 400 215" fill="none" strokeWidth="1" className="stroke-involve-border" />
                <text x="410" y="218" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="start" className="fill-involve-muted">Redundant GPS tracking</text>
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed">
                FIG. 3 — STRATORELAY MINIMAL VIABLE ARCHITECTURE
            </div>
        </div>
    );
}

// ---- LoonHive Fleet Architecture SVG ----

export function LoonHiveArchitectureSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[800px] block mx-auto">
                <defs>
                    <marker id="a-sc" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="rgba(61,155,255,0.5)" /></marker>
                </defs>

                {/* Stage 1 — Single */}
                <rect x="8" y="44" width="164" height="110" rx="3" stroke="rgba(61,155,255,0.55)" strokeWidth="1.3" className="fill-involve-bg2" />
                <text x="90" y="68" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" fill="#3d9bff" textAnchor="middle">SINGLE PLATFORM</text>
                <text x="90" y="84" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">1 Stratostats®</text>
                <text x="90" y="98" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">50 km radius · 90+ days</text>
                <text x="90" y="112" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Neurostar® station-keeping</text>
                <text x="90" y="145" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7.5" fill="rgba(52,208,122,0.7)" textAnchor="middle">TRL 9 · Operational</text>

                {/* Stage 2 — Small fleet */}
                <rect x="204" y="34" width="174" height="124" rx="3" stroke="rgba(240,160,32,0.4)" strokeWidth="1" className="fill-involve-bg2" />
                <text x="291" y="58" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" fill="rgba(240,160,32,0.8)" textAnchor="middle">SMALL FLEET</text>
                <text x="291" y="74" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">2–10 Stratostats®</text>
                <text x="291" y="88" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Overlapping coverage zones</text>
                <text x="291" y="102" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">LoonHive® coordination</text>
                <text x="291" y="116" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Redundant data paths</text>
                <text x="291" y="152" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7.5" fill="rgba(240,160,32,0.65)" textAnchor="middle">TRL 5 · 2026 flight tests</text>

                {/* Stage 3 — Regional */}
                <rect x="412" y="24" width="174" height="144" rx="3" strokeWidth="1" className="fill-involve-bg2 stroke-involve-border" />
                <text x="499" y="48" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" textAnchor="middle" className="fill-involve-text">REGIONAL NETWORK</text>
                <text x="499" y="64" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">10–50 platforms</text>
                <text x="499" y="78" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Continental coverage</text>
                <text x="499" y="92" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Persistent regional ISR</text>
                <text x="499" y="106" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Adaptive re-tasking</text>
                <text x="499" y="120" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Quantum-opt. routing</text>
                <text x="499" y="162" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7.5" textAnchor="middle" className="fill-involve-dim">Roadmap 2027–28</text>

                {/* Stage 4 — Global */}
                <rect x="620" y="12" width="172" height="168" rx="3" strokeWidth="1" className="fill-involve-bg stroke-involve-border" />
                <text x="706" y="36" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" textAnchor="middle" className="fill-involve-text">GLOBAL INFRA.</text>
                <text x="706" y="52" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">150+ platforms</text>
                <text x="706" y="66" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Multi-domain sensing</text>
                <text x="706" y="80" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Full-spectrum intelligence</text>
                <text x="706" y="94" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Defense + commercial</text>
                <text x="706" y="108" fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Hybrid HAPS + satellite</text>
                <text x="706" y="174" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7.5" textAnchor="middle" className="fill-involve-dim">Roadmap 2029+</text>

                {/* Arrows */}
                <line x1="174" y1="99" x2="202" y2="99" stroke="rgba(61,155,255,0.45)" strokeWidth="1.4" markerEnd="url(#a-sc)" />
                <line x1="380" y1="96" x2="410" y2="96" stroke="rgba(61,155,255,0.3)" strokeWidth="1.4" markerEnd="url(#a-sc)" />
                <line x1="588" y1="96" x2="618" y2="96" stroke="rgba(61,155,255,0.2)" strokeWidth="1.4" markerEnd="url(#a-sc)" />
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed">
                FIG. 4 — LOONHIVE® FLEET SCALABILITY PROGRESSION
            </div>
        </div>
    );
}

// ---- System Interconnection Map (Tech Master Document) ----

export function SystemInterconnectSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-6 md:p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 820 480" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[820px] block mx-auto">
                <defs>
                    <marker id="arr-blue" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto"><polygon points="0 0,8 3.5,0 7" fill="#3d9bff" /></marker>
                    <marker id="arr-green" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto"><polygon points="0 0,8 3.5,0 7" fill="#34d07a" /></marker>
                    <marker id="arr-dim" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto"><polygon points="0 0,8 3.5,0 7" className="fill-slate-600 dark:fill-[rgba(238,241,246,0.2)]" /></marker>
                    <filter id="glow-blue"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                </defs>

                {/* Layer bands */}
                <rect x="0" y="280" width="820" height="190" className="fill-involve-bg dark:fill-[#0d0f14]" />
                <text x="12" y="300" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8" letterSpacing="2" className="fill-involve-dim">SENSING LAYER — STRATOSPHERIC PLATFORMS</text>
                <rect x="0" y="160" width="820" height="112" className="fill-involve-bg2 dark:fill-[#0f1218]" />
                <text x="12" y="180" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8" letterSpacing="2" className="fill-involve-dim">COORDINATION LAYER — NEUROSTAR®</text>
                <rect x="0" y="0" width="820" height="152" className="fill-involve-bg dark:fill-[#12151c]" />
                <text x="12" y="20" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8" className="fill-involve-blue/40" letterSpacing="2">INTELLIGENCE LAYER — CLEAR GEOAI</text>

                {/* Sensing layer nodes */}
                <rect x="30" y="310" width="160" height="72" rx="3" strokeWidth="1" className="fill-involve-bg2 stroke-involve-border" />
                <text x="110" y="336" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" textAnchor="middle" letterSpacing="0.5" className="fill-involve-text">STRATORELAY®</text>
                <text x="110" y="352" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Passive · Predictive nav</text>
                <text x="110" y="366" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">TRL 8 · Commercial</text>
                <rect x="70" y="374" width="80" height="4" rx="1" fill="rgba(52,208,122,0.3)" />

                <rect x="220" y="300" width="180" height="88" rx="3" className="stroke-involve-blue/40 fill-involve-bg2 dark:fill-[#0d1117]" strokeWidth="1.2" />
                <text x="310" y="326" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" className="fill-involve-blue" textAnchor="middle" letterSpacing="0.5">STRATOSTATS®</text>
                <text x="310" y="342" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Active altitude control</text>
                <text x="310" y="356" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">ACS · OBC · EPS · Payload</text>
                <text x="310" y="370" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">TRL 9 (v1) · TRL 7 (v2)</text>
                <rect x="258" y="378" width="104" height="4" rx="1" className="fill-involve-blue/40" />

                <rect x="430" y="310" width="180" height="72" rx="3" stroke="rgba(240,160,32,0.3)" strokeWidth="1" className="fill-involve-bg2 dark:fill-[#0d0f14]" />
                <text x="520" y="336" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" fill="rgba(240,160,32,0.8)" textAnchor="middle" letterSpacing="0.5">LOONHIVE®</text>
                <text x="520" y="352" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Constellation architecture</text>
                <text x="520" y="366" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">TRL 5 → flights 2026</text>
                <rect x="474" y="374" width="92" height="4" rx="1" fill="rgba(240,160,32,0.3)" />

                <rect x="650" y="310" width="150" height="72" rx="3" strokeWidth="1" strokeDasharray="4 3" className="fill-involve-bg2 stroke-involve-border" />
                <text x="725" y="336" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8" textAnchor="middle" className="fill-involve-dim">EXTERNAL DATA</text>
                <text x="725" y="352" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted/60">Copernicus · Satellites</text>
                <text x="725" y="366" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted/60">IoT · Commercial EO</text>

                {/* Neurostar */}
                <rect x="200" y="180" width="420" height="72" rx="3" className="fill-involve-blue/5 stroke-involve-blue/40" strokeWidth="1.5" filter="url(#glow-blue)" />
                <text x="410" y="204" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="10" className="fill-involve-blue" textAnchor="middle" letterSpacing="1">NEUROSTAR®</text>
                <text x="245" y="222" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">StationSeeker/AI</text>
                <text x="340" y="222" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">StratoLoop</text>
                <text x="420" y="222" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">StratoEye</text>
                <text x="520" y="222" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Fleet Optimizer</text>
                <text x="620" y="222" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" textAnchor="middle" className="fill-involve-muted">Wind Estimator</text>
                <text x="410" y="238" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7.5" className="fill-involve-blue/50" textAnchor="middle">Deep RL (MLP) · ECMWF · 3yr global wind DB · Proximal Policy Optimization</text>

                {/* Intelligence layer */}
                <rect x="30" y="28" width="180" height="110" rx="3" strokeWidth="1" className="fill-involve-bg2 stroke-involve-border" />
                <text x="120" y="50" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8.5" textAnchor="middle" className="fill-involve-text">DATA INFRASTRUCTURE</text>
                <text x="120" y="66" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="7.5" textAnchor="middle" className="fill-involve-muted">Raw Archive DB</text>
                <text x="120" y="80" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="7.5" textAnchor="middle" className="fill-involve-muted">Structured Spatial DB</text>
                <text x="120" y="94" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="7.5" textAnchor="middle" className="fill-involve-muted">Compute Core</text>
                <text x="120" y="108" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="7.5" textAnchor="middle" className="fill-involve-muted">Standardizer</text>
                <text x="120" y="126" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" textAnchor="middle" className="fill-involve-dim">feeds → CLEAR</text>

                <rect x="250" y="22" width="330" height="118" rx="3" className="fill-involve-blue/5 stroke-involve-blue/50" strokeWidth="1.5" />
                <text x="415" y="44" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="10" className="fill-involve-blue" textAnchor="middle" letterSpacing="1">CLEAR</text>
                <text x="415" y="58" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" className="fill-involve-blue/60" textAnchor="middle">Cloud-based LLM-enhanced Earth Analytics &amp; Reconnaissance</text>
                <rect x="262" y="68" width="90" height="28" rx="2" className="fill-involve-blue/10 stroke-involve-blue/25" strokeWidth="1" />
                <text x="307" y="86" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="7.5" textAnchor="middle" className="fill-involve-text">Prompt Router</text>
                <rect x="364" y="68" width="90" height="28" rx="2" className="fill-involve-blue/10 stroke-involve-blue/25" strokeWidth="1" />
                <text x="409" y="86" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="7.5" textAnchor="middle" className="fill-involve-text">Vision Agents</text>
                <rect x="466" y="68" width="100" height="28" rx="2" className="fill-involve-blue/10 stroke-involve-blue/25" strokeWidth="1" />
                <text x="516" y="86" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="7.5" textAnchor="middle" className="fill-involve-text">Standardizer</text>
                <text x="415" y="122" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" className="fill-involve-blue/40" textAnchor="middle">Agentic decoupling · NL interface · Continuous learning</text>

                <rect x="620" y="22" width="170" height="118" rx="3" strokeWidth="1" className="fill-involve-bg2 stroke-involve-border" />
                <text x="705" y="46" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8.5" textAnchor="middle" className="fill-involve-text">INTELLIGENCE OUT</text>
                <text x="705" y="62" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="7.5" textAnchor="middle" className="fill-involve-muted">Annotated maps</text>
                <text x="705" y="76" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="7.5" textAnchor="middle" className="fill-involve-muted">Sector reports</text>
                <text x="705" y="90" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="7.5" textAnchor="middle" className="fill-involve-muted">Quantitative alerts</text>
                <text x="705" y="104" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="7.5" textAnchor="middle" className="fill-involve-muted">API data stream</text>
                <text x="705" y="118" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" textAnchor="middle" className="fill-involve-dim">→ Clients / Mission Tasking</text>

                {/* Flow arrows */}
                <line x1="310" y1="300" x2="310" y2="255" className="stroke-involve-blue" strokeWidth="1.3" markerEnd="url(#arr-blue)" />
                <text x="316" y="280" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" className="fill-involve-blue/50">sensor data</text>
                <line x1="360" y1="255" x2="360" y2="302" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr-dim)" className="stroke-involve-border" />
                <text x="364" y="280" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" className="fill-involve-dim">commands</text>
                <line x1="490" y1="255" x2="500" y2="310" className="stroke-involve-blue" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arr-blue)" />
                <line x1="280" y1="300" x2="180" y2="142" stroke="#34d07a" strokeWidth="1.3" markerEnd="url(#arr-green)" />
                <text x="195" y="220" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" fill="rgba(52,208,122,0.5)" transform="rotate(-42,195,220)">imagery / telemetry</text>
                <line x1="100" y1="310" x2="110" y2="142" stroke="#34d07a" strokeWidth="1" markerEnd="url(#arr-green)" opacity="0.5" />
                <line x1="212" y1="82" x2="248" y2="82" className="stroke-involve-blue" strokeWidth="1.3" markerEnd="url(#arr-blue)" />
                <text x="218" y="77" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" className="fill-involve-blue/45">structured data</text>
                <line x1="582" y1="82" x2="618" y2="82" className="stroke-involve-blue" strokeWidth="1.3" markerEnd="url(#arr-blue)" />
                <line x1="680" y1="310" x2="650" y2="142" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr-dim)" className="stroke-involve-border" />
                <text x="672" y="225" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" transform="rotate(-80,672,225)" className="fill-involve-dim">fusion</text>
                <path d="M705,142 Q705,460 520,460 Q200,460 70,346" fill="none" strokeWidth="1" strokeDasharray="4 4" markerEnd="url(#arr-dim)" className="stroke-involve-border/50" />
                <text x="390" y="456" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7.5" textAnchor="middle" className="fill-involve-dim">mission re-tasking / replanning feedback</text>
                <line x1="410" y1="180" x2="410" y2="142" className="stroke-involve-blue/35" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arr-blue)" />
                <text x="416" y="165" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" className="fill-involve-blue/30">nav state</text>

                {/* Legend */}
                <g transform="translate(10, 450)">
                    <line x1="0" y1="6" x2="20" y2="6" className="stroke-involve-blue" strokeWidth="1.3" markerEnd="url(#arr-blue)" />
                    <text x="24" y="10" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" className="fill-involve-dim">data / intelligence flow</text>
                    <line x1="150" y1="6" x2="170" y2="6" stroke="#34d07a" strokeWidth="1.3" markerEnd="url(#arr-green)" />
                    <text x="174" y="10" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" className="fill-involve-dim">imagery uplink</text>
                    <line x1="290" y1="6" x2="310" y2="6" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr-dim)" className="stroke-involve-border" />
                    <text x="314" y="10" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" className="fill-involve-dim">control commands</text>
                    <line x1="440" y1="6" x2="460" y2="6" strokeWidth="1" strokeDasharray="4 4" markerEnd="url(#arr-dim)" className="stroke-involve-border/50" />
                    <text x="464" y="10" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="7" className="fill-involve-dim">feedback / replanning</text>
                </g>
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed">
                FIG. 1 — Full technology interconnection map.<br />
                Three layers: Intelligence (top) · Coordination (centre) · Sensing (bottom). Arrows show actual data and control flows between subsystems.
            </div>
        </div>
    );
}

// ---- Data Flywheel SVG (Tech Master Document) ----

export function DataFlywheelSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-6 md:p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[700px] block mx-auto">
                <defs>
                    <marker id="fw-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" className="fill-involve-blue" /></marker>
                </defs>

                {/* Central circle */}
                <circle cx="350" cy="150" r="56" className="fill-involve-blue/5 stroke-involve-blue/30" strokeWidth="1.5" />
                <text x="350" y="145" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" className="fill-involve-blue" textAnchor="middle">DATA</text>
                <text x="350" y="160" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="9" className="fill-involve-blue" textAnchor="middle">FLYWHEEL</text>

                {/* 5 nodes */}
                <rect x="273" y="14" width="154" height="48" rx="3" className="stroke-involve-blue/30 fill-involve-bg2" strokeWidth="1" />
                <text x="350" y="36" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8.5" className="fill-involve-text" textAnchor="middle">PLATFORM FLIES</text>
                <text x="350" y="51" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" className="fill-involve-muted" textAnchor="middle">Stratostats® mission · EO data acquired</text>

                <rect x="546" y="90" width="148" height="48" rx="3" className="stroke-involve-blue/20 fill-involve-bg2" strokeWidth="1" />
                <text x="620" y="112" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8.5" className="fill-involve-text" textAnchor="middle">NEUROSTAR® TRAINS</text>
                <text x="620" y="127" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" className="fill-involve-muted" textAnchor="middle">Flight data improves nav AI</text>

                <rect x="500" y="218" width="160" height="48" rx="3" className="stroke-involve-blue/20 fill-involve-bg2" strokeWidth="1" />
                <text x="580" y="240" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8.5" className="fill-involve-text" textAnchor="middle">BETTER MISSIONS</text>
                <text x="580" y="255" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" className="fill-involve-muted" textAnchor="middle">Longer · more precise · lower cost</text>

                <rect x="40" y="218" width="160" height="48" rx="3" className="stroke-involve-blue/20 fill-involve-bg2" strokeWidth="1" />
                <text x="120" y="240" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8.5" className="fill-involve-text" textAnchor="middle">CLEAR IMPROVES</text>
                <text x="120" y="255" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" className="fill-involve-muted" textAnchor="middle">Better data → sharper intelligence</text>

                <rect x="6" y="90" width="148" height="48" rx="3" className="stroke-involve-blue/20 fill-involve-bg2" strokeWidth="1" />
                <text x="80" y="112" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8.5" className="fill-involve-text" textAnchor="middle">MORE CLIENTS</text>
                <text x="80" y="127" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" className="fill-involve-muted" textAnchor="middle">Client queries fuel CLEAR feedback</text>

                {/* Circular arrows */}
                <path d="M427,38 Q500,40 546,100" fill="none" className="stroke-involve-blue opacity-70" strokeWidth="1.2" markerEnd="url(#fw-arr)" />
                <path d="M652,138 Q668,178 660,218" fill="none" className="stroke-involve-blue opacity-60" strokeWidth="1.2" markerEnd="url(#fw-arr)" />
                <path d="M500,242 Q350,272 200,242" fill="none" className="stroke-involve-blue opacity-50" strokeWidth="1.2" markerEnd="url(#fw-arr)" />
                <path d="M48,218 Q32,178 40,138" fill="none" className="stroke-involve-blue opacity-50" strokeWidth="1.2" markerEnd="url(#fw-arr)" />
                <path d="M154,100 Q200,40 273,38" fill="none" className="stroke-involve-blue opacity-60" strokeWidth="1.2" markerEnd="url(#fw-arr)" />

                <text x="350" y="288" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="8" className="fill-involve-dim" textAnchor="middle">Each cycle widens the moat — compounding advantage with every flight and every query</text>
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed">
                FIG. 2 — The data flywheel. Five reinforcing loops driven by vertical integration of sensing, autonomy, and intelligence.
            </div>
        </div>
    );
}
