import { cn } from './core';

export function NeurostarArchitectureSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-6 md:p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 780 340" xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[780px] block mx-auto">
                <defs>
                    <marker id="a1" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                        <polygon points="0 0,8 3.5,0 7" fill="#3d9bff" />
                    </marker>
                </defs>
                {/* Layer 1 */}
                <rect x="10" y="10" width="760" height="64" rx="3" fill="#0f1218" stroke="rgba(61,155,255,0.45)"
                    strokeWidth="1.5" />
                <text x="26" y="30" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(61,155,255,0.5)"
                    letterSpacing="2">LAYER 1 — DESIGN</text>
                <text x="390" y="50" fontFamily="DM Mono,monospace" fontSize="10" fill="#3d9bff"
                    textAnchor="middle">Balloon Designer</text>
                <text x="390" y="65" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.35)"
                    textAnchor="middle">Mission requirements → physical specification (volumes · masses · geometry
                    · energy budget)</text>
                {/* Arrow 1→2 */}
                <line x1="390" y1="75" x2="390" y2="100" stroke="#3d9bff" strokeWidth="1.3"
                    markerEnd="url(#a1)" />
                <text x="396" y="92" fontFamily="DM Mono,monospace" fontSize="7"
                    fill="rgba(61,155,255,0.5)">design file</text>
                {/* Layer 2 */}
                <rect x="10" y="102" width="760" height="64" rx="3" fill="#0f1218" stroke="rgba(52,208,122,0.45)"
                    strokeWidth="1.5" />
                <text x="26" y="122" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(52,208,122,0.5)"
                    letterSpacing="2">LAYER 2 — PHYSICS SIMULATION</text>
                <text x="390" y="142" fontFamily="DM Mono,monospace" fontSize="10" fill="#34d07a"
                    textAnchor="middle">Balloon Dynamics · Thermal · Solar · Onboard Devices</text>
                <text x="390" y="158" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.35)"
                    textAnchor="middle">forces · gas mechanics · temperatures · energy balance → simulated state +
                    telemetry</text>
                {/* Arrow 2→3 */}
                <line x1="390" y1="167" x2="390" y2="192" stroke="#34d07a" strokeWidth="1.3"
                    markerEnd="url(#a1)" />
                <text x="396" y="184" fontFamily="DM Mono,monospace" fontSize="7"
                    fill="rgba(52,208,122,0.5)">state + telemetry</text>
                {/* Layer 3 */}
                <rect x="10" y="194" width="760" height="64" rx="3" fill="#0f1218" stroke="rgba(0,200,224,0.4)"
                    strokeWidth="1.5" />
                <text x="26" y="214" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(0,200,224,0.5)"
                    letterSpacing="2">LAYER 3 — ENVIRONMENT ENGINE</text>
                <text x="390" y="234" fontFamily="DM Mono,monospace" fontSize="10" fill="#00c8e0"
                    textAnchor="middle">Atmospheric Model · Multi-balloon Coordinator</text>
                <text x="390" y="250" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.35)"
                    textAnchor="middle">real GFS wind data — or — procedural synthetic wind fields</text>
                {/* Arrow 3→4 */}
                <line x1="390" y1="259" x2="390" y2="284" stroke="#00c8e0" strokeWidth="1.3"
                    markerEnd="url(#a1)" />
                <text x="396" y="276" fontFamily="DM Mono,monospace" fontSize="7"
                    fill="rgba(0,200,224,0.5)">observations + reward</text>
                {/* Layer 4 */}
                <rect x="10" y="286" width="760" height="44" rx="3" fill="rgba(240,160,32,0.06)"
                    stroke="rgba(240,160,32,0.5)" strokeWidth="1.5" />
                <text x="26" y="306" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(240,160,32,0.5)"
                    letterSpacing="2">LAYER 4 — AI NAVIGATION</text>
                <text x="390" y="320" fontFamily="DM Mono,monospace" fontSize="10" fill="#f0a020"
                    textAnchor="middle">QDQN Agent · trained on thousands of simulated episodes · compressor / idle
                    / valve</text>
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Figure 1 — The four vertically integrated layers of Neurostar. A single shared design file flows from Layer 1 through each subsequent stage, ensuring physical consistency across the full stack.` }}>
            </div>
        </div>
    );
}

export function BalloonDesignerSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-6 md:p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 780 400" xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[780px] block mx-auto">
                <defs>
                    <marker id="arr_d" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                        <polygon points="0 0,8 3.5,0 7" fill="#eef1f6" />
                    </marker>
                </defs>

                {/* Title */}
                <rect x="180" y="10" width="420" height="40" fill="#3d9bff" rx="3" fillOpacity="0.1"
                    stroke="#3d9bff" strokeWidth="1.5" />
                <text x="390" y="36" fontFamily="DM Mono,monospace" fontWeight="600" fontSize="14" fill="#3d9bff"
                    textAnchor="middle" letterSpacing="1">DESIGN TOOLS</text>

                {/* Input Row */}
                <g transform="translate(140, 75)">
                    <polygon points="0,25 20,0 80,0 60,25" fill="#0d0f14" stroke="rgba(238,241,246,0.2)" />
                    <text x="40" y="15" fontFamily="Inter,sans-serif" fontSize="6" fill="#eef1f6"
                        textAnchor="middle">PAYLOAD MASS</text>
                </g>
                <g transform="translate(230, 75)">
                    <polygon points="0,25 20,0 90,0 70,25" fill="#0d0f14" stroke="rgba(238,241,246,0.2)" />
                    <text x="45" y="15" fontFamily="Inter,sans-serif" fontSize="6" fill="#eef1f6"
                        textAnchor="middle">ALTITUDE RANGE</text>
                </g>
                <g transform="translate(330, 75)">
                    <polygon points="0,25 20,0 90,0 70,25" fill="#0d0f14" stroke="rgba(238,241,246,0.2)" />
                    <text x="45" y="11" fontFamily="Inter,sans-serif" fontSize="5" fill="#eef1f6"
                        textAnchor="middle">SYSTEM</text>
                    <text x="45" y="19" fontFamily="Inter,sans-serif" fontSize="5" fill="#eef1f6"
                        textAnchor="middle">CONFIGURATION</text>
                </g>
                <g transform="translate(430, 75)">
                    <polygon points="0,25 20,0 100,0 80,25" fill="#0d0f14" stroke="rgba(238,241,246,0.2)" />
                    <text x="50" y="11" fontFamily="Inter,sans-serif" fontSize="6" fill="#eef1f6"
                        textAnchor="middle">MATERIAL</text>
                    <text x="50" y="19" fontFamily="Inter,sans-serif" fontSize="6" fill="#eef1f6"
                        textAnchor="middle">PROPERTIES</text>
                </g>
                <g transform="translate(540, 75)">
                    <polygon points="0,25 20,0 80,0 60,25" fill="#0d0f14" stroke="rgba(238,241,246,0.2)" />
                    <text x="40" y="11" fontFamily="Inter,sans-serif" fontSize="5" fill="#eef1f6"
                        textAnchor="middle">DESIGN</text>
                    <text x="40" y="19" fontFamily="Inter,sans-serif" fontSize="5" fill="#eef1f6"
                        textAnchor="middle">CONSTRAINTS</text>
                </g>

                <line x1="390" y1="110" x2="390" y2="135" stroke="#eef1f6" strokeWidth="1.5"
                    markerEnd="url(#arr_d)" />

                <rect x="290" y="140" width="200" height="25" fill="#eef1f6" fillOpacity="0.05" stroke="#eef1f6"
                    strokeOpacity="0.5" rx="2" />
                <text x="390" y="156" fontFamily="DM Mono,monospace" fontSize="10" fill="#eef1f6"
                    textAnchor="middle">Balloon_Design</text>

                <line x1="390" y1="170" x2="390" y2="195" stroke="#eef1f6" strokeWidth="1.5"
                    markerEnd="url(#arr_d)" />

                {/* Parallelograms Out */}
                <g transform="translate(170, 200)">
                    <polygon points="0,25 20,0 100,0 80,25" fill="#0d0f14" stroke="rgba(33,235,165,0.4)" />
                    <text x="50" y="15" fontFamily="Inter,sans-serif" fontSize="6" fill="#34d07a"
                        textAnchor="middle">GAS &amp; AIR MASSES</text>
                </g>
                <g transform="translate(280, 200)">
                    <polygon points="0,25 20,0 100,0 80,25" fill="#0d0f14" stroke="rgba(33,235,165,0.4)" />
                    <text x="50" y="15" fontFamily="Inter,sans-serif" fontSize="6" fill="#34d07a"
                        textAnchor="middle">EFFECTIVE RADII</text>
                </g>
                <g transform="translate(390, 200)">
                    <polygon points="0,25 20,0 100,0 80,25" fill="#0d0f14" stroke="rgba(33,235,165,0.4)" />
                    <text x="50" y="11" fontFamily="Inter,sans-serif" fontSize="6" fill="#34d07a"
                        textAnchor="middle">SUPERPRESSURE</text>
                    <text x="50" y="19" fontFamily="Inter,sans-serif" fontSize="6" fill="#34d07a"
                        textAnchor="middle">RADII</text>
                </g>
                <g transform="translate(500, 200)">
                    <polygon points="0,25 20,0 90,0 70,25" fill="#0d0f14" stroke="rgba(33,235,165,0.4)" />
                    <text x="45" y="11" fontFamily="Inter,sans-serif" fontSize="6" fill="#34d07a"
                        textAnchor="middle">SUPERPRESSURE</text>
                    <text x="45" y="19" fontFamily="Inter,sans-serif" fontSize="6" fill="#34d07a"
                        textAnchor="middle">VALUES</text>
                </g>

                <line x1="390" y1="235" x2="390" y2="260" stroke="#eef1f6" strokeWidth="1.5"
                    markerEnd="url(#arr_d)" />

                <rect x="180" y="270" width="420" height="90" fill="transparent" stroke="rgba(238,241,246,0.15)"
                    strokeWidth="1.5" rx="5" />

                <rect x="190" y="280" width="400" height="35" rx="3" fill="rgba(61,155,255,0.05)" stroke="#3d9bff"
                    strokeWidth="1" />
                <g transform="translate(200, 285)">
                    <polygon points="0,25 20,0 90,0 70,25" fill="none" stroke="#3d9bff" strokeWidth="0.8" />
                    <text x="45" y="15" fontFamily="Inter,sans-serif" fontSize="6" fill="#3d9bff"
                        textAnchor="middle">GORE LENGTH</text>
                </g>
                <g transform="translate(300, 285)">
                    <polygon points="0,25 20,0 90,0 70,25" fill="none" stroke="#3d9bff" strokeWidth="0.8" />
                    <text x="45" y="15" fontFamily="Inter,sans-serif" fontSize="6" fill="#3d9bff"
                        textAnchor="middle">GORE WIDTH</text>
                </g>
                <g transform="translate(400, 285)">
                    <polygon points="0,25 20,0 90,0 70,25" fill="none" stroke="#3d9bff" strokeWidth="0.8" />
                    <text x="45" y="15" fontFamily="Inter,sans-serif" fontSize="6" fill="#3d9bff"
                        textAnchor="middle">GORE NUMBER</text>
                </g>
                <g transform="translate(500, 285)">
                    <polygon points="0,25 20,0 90,0 70,25" fill="none" stroke="#3d9bff" strokeWidth="0.8" />
                    <text x="45" y="15" fontFamily="Inter,sans-serif" fontSize="6" fill="#3d9bff"
                        textAnchor="middle">TENDON LENGTH</text>
                </g>

                <rect x="190" y="320" width="300" height="30" rx="3" fill="rgba(240,160,32,0.05)" stroke="#f0a020"
                    strokeWidth="1" />
                <g transform="translate(200, 323)">
                    <polygon points="0,25 20,0 90,0 70,25" fill="none" stroke="#f0a020" strokeWidth="0.8" />
                    <text x="45" y="15" fontFamily="Inter,sans-serif" fontSize="6" fill="#f0a020"
                        textAnchor="middle">GORE LENGTH</text>
                </g>
                <g transform="translate(300, 323)">
                    <polygon points="0,25 20,0 90,0 70,25" fill="none" stroke="#f0a020" strokeWidth="0.8" />
                    <text x="45" y="15" fontFamily="Inter,sans-serif" fontSize="6" fill="#f0a020"
                        textAnchor="middle">GORE WIDTH</text>
                </g>
                <g transform="translate(400, 323)">
                    <polygon points="0,25 20,0 90,0 70,25" fill="none" stroke="#f0a020" strokeWidth="0.8" />
                    <text x="45" y="15" fontFamily="Inter,sans-serif" fontSize="6" fill="#f0a020"
                        textAnchor="middle">GORE NUMBER</text>
                </g>

            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Figure 2 — The Balloon Designer processes inputs into a detailed design file.` }}>
            </div>
        </div>
    );
}

export function PhysicsEngineSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-6 md:p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 780 380" xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[780px] block mx-auto">
                <defs>
                    <marker id="a3b" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                        <polygon points="0 0,8 3.5,0 7" fill="#3d9bff" />
                    </marker>
                    <marker id="a3g" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                        <polygon points="0 0,8 3.5,0 7" fill="#34d07a" />
                    </marker>
                    <marker id="a3a" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                        <polygon points="0 0,8 3.5,0 7" fill="#f0a020" />
                    </marker>
                </defs>
                {/* Input sources row */}
                <rect x="10" y="10" width="360" height="50" rx="3" fill="#0d0f14" stroke="rgba(0,200,224,0.35)"
                    strokeWidth="1" />
                <text x="190" y="28" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(0,200,224,0.7)"
                    textAnchor="middle" letterSpacing="1">ATMOSPHERE</text>
                <text x="190" y="43" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(238,241,246,0.35)"
                    textAnchor="middle">wind · air temperature · pressure · density</text>
                <text x="190" y="55" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(238,241,246,0.25)"
                    textAnchor="middle">at current altitude</text>

                <rect x="410" y="10" width="360" height="50" rx="3" fill="#0d0f14" stroke="rgba(240,160,32,0.35)"
                    strokeWidth="1" />
                <text x="590" y="28" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(240,160,32,0.7)"
                    textAnchor="middle" letterSpacing="1">SOLAR MODEL</text>
                <text x="590" y="43" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(238,241,246,0.35)"
                    textAnchor="middle">sun elevation · solar flux on film and panels</text>
                <text x="590" y="55" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(238,241,246,0.25)"
                    textAnchor="middle">stratospheric attenuation applied</text>

                {/* Arrows into dynamics */}
                <line x1="190" y1="61" x2="300" y2="106" stroke="rgba(0,200,224,0.5)" strokeWidth="1.2"
                    markerEnd="url(#a3b)" />
                <line x1="590" y1="61" x2="480" y2="106" stroke="rgba(240,160,32,0.5)" strokeWidth="1.2"
                    markerEnd="url(#a3b)" />

                {/* Balloon Dynamics box */}
                <rect x="100" y="108" width="580" height="108" rx="3" fill="rgba(61,155,255,0.05)"
                    stroke="rgba(61,155,255,0.45)" strokeWidth="1.5" />
                <text x="390" y="128" fontFamily="DM Mono,monospace" fontSize="10" fill="#3d9bff"
                    textAnchor="middle" letterSpacing="1">BALLOON DYNAMICS</text>
                {/* Forces mini list */}
                <text x="180" y="150" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.5)"
                    textAnchor="middle">Buoyancy (up)</text>
                <text x="180" y="163" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(61,155,255,0.4)"
                    textAnchor="middle">gas vol × air density</text>
                <text x="340" y="150" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.5)"
                    textAnchor="middle">Weight (down)</text>
                <text x="340" y="163" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(61,155,255,0.4)"
                    textAnchor="middle">total system mass</text>
                <text x="500" y="150" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.5)"
                    textAnchor="middle">Drag (vertical)</text>
                <text x="500" y="163" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(61,155,255,0.4)"
                    textAnchor="middle">speed · air viscosity</text>
                <text x="660" y="150" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.5)"
                    textAnchor="middle">Wind (lateral)</text>
                <text x="660" y="163" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(61,155,255,0.4)"
                    textAnchor="middle">passive drift</text>
                {/* State labels */}
                <text x="390" y="186" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(238,241,246,0.2)"
                    textAnchor="middle">gas state: volume · pressure · temperature | film temperature | ballonnet
                    air mass</text>

                {/* Arrow dynamics → devices */}
                <line x1="390" y1="217" x2="390" y2="242" stroke="#3d9bff" strokeWidth="1.3"
                    markerEnd="url(#a3b)" />

                {/* Energy/Actuation box */}
                <rect x="100" y="244" width="580" height="88" rx="3" fill="rgba(52,208,122,0.04)"
                    stroke="rgba(52,208,122,0.4)" strokeWidth="1.5" />
                <text x="390" y="264" fontFamily="DM Mono,monospace" fontSize="10" fill="#34d07a"
                    textAnchor="middle" letterSpacing="1">ENERGY &amp; ACTUATION</text>
                <text x="200" y="284" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(238,241,246,0.4)"
                    textAnchor="middle">Solar panels → charge battery</text>
                <text x="200" y="297" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(52,208,122,0.4)"
                    textAnchor="middle">continuous generation</text>
                <text x="390" y="284" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(238,241,246,0.4)"
                    textAnchor="middle">Compressor ON → balloon sinks</text>
                <text x="390" y="297" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(61,155,255,0.4)"
                    textAnchor="middle">AI command</text>
                <text x="580" y="284" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(238,241,246,0.4)"
                    textAnchor="middle">Valve OPEN → balloon rises</text>
                <text x="580" y="297" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(61,155,255,0.4)"
                    textAnchor="middle">AI command</text>
                <text x="390" y="320" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(238,241,246,0.2)"
                    textAnchor="middle">Battery: tracks energy · prevents compressor if depleted</text>

                {/* Arrow → output */}
                <line x1="390" y1="333" x2="390" y2="358" stroke="#34d07a" strokeWidth="1.3"
                    markerEnd="url(#a3g)" />

                {/* Output */}
                <rect x="160" y="360" width="460" height="14" rx="2" fill="#0d0f14" stroke="rgba(238,241,246,0.1)"
                    strokeWidth="1" />
                <text x="390" y="371" fontFamily="DM Mono,monospace" fontSize="7.5" fill="rgba(238,241,246,0.3)"
                    textAnchor="middle">New state: altitude · position · temperatures · battery charge → logged as
                    telemetry</text>
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Figure 3 — Physics engine computation loop. All subsystems interact at each step to produce a physically consistent state update, which becomes the input for the next timestep.` }}>
            </div>
        </div>
    );
}

export function AtmosphericEngineSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-6 md:p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 780 280" xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[780px] block mx-auto">
                <defs>
                    <marker id="a4" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                        <polygon points="0 0,8 3.5,0 7" fill="#3d9bff" />
                    </marker>
                </defs>
                {/* Outer container */}
                <rect x="10" y="10" width="760" height="176" rx="3" fill="rgba(61,155,255,0.03)"
                    stroke="rgba(61,155,255,0.3)" strokeWidth="1.5" />
                <text x="390" y="30" fontFamily="DM Mono,monospace" fontSize="10" fill="#3d9bff"
                    textAnchor="middle" letterSpacing="1">ATMOSPHERIC ENGINE</text>

                {/* Real-world mode card */}
                <rect x="28" y="42" width="342" height="130" rx="3" fill="#0d0f14" stroke="rgba(52,208,122,0.35)"
                    strokeWidth="1" />
                <text x="199" y="62" fontFamily="DM Mono,monospace" fontSize="9" fill="#34d07a"
                    textAnchor="middle" letterSpacing="1">REAL-WORLD MODE</text>
                <text x="199" y="80" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.5)"
                    textAnchor="middle">Downloads actual GFS forecast wind data</text>
                <text x="199" y="94" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.4)"
                    textAnchor="middle">for any location and date on Earth</text>
                <text x="199" y="116" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(52,208,122,0.5)"
                    textAnchor="middle">Used for:</text>
                <text x="199" y="130" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(238,241,246,0.3)"
                    textAnchor="middle">mission planning · post-flight analysis</text>
                <text x="199" y="143" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(238,241,246,0.3)"
                    textAnchor="middle">validation against real weather</text>
                <rect x="114" y="162" width="170" height="4" rx="1" fill="rgba(52,208,122,0.3)" />

                {/* Training mode card */}
                <rect x="410" y="42" width="342" height="130" rx="3" fill="#0d0f14" stroke="rgba(0,200,224,0.35)"
                    strokeWidth="1" />
                <text x="581" y="62" fontFamily="DM Mono,monospace" fontSize="9" fill="#00c8e0"
                    textAnchor="middle" letterSpacing="1">TRAINING MODE</text>
                <text x="581" y="80" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.5)"
                    textAnchor="middle">Generates synthetic wind fields using</text>
                <text x="581" y="94" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(238,241,246,0.4)"
                    textAnchor="middle">layered procedural noise</text>
                <text x="581" y="116" fontFamily="DM Mono,monospace" fontSize="7" fill="rgba(0,200,224,0.5)"
                    textAnchor="middle">No internet needed · runs instantly</text>
                <text x="581" y="130" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(238,241,246,0.3)"
                    textAnchor="middle">Unique scenario for every episode</text>
                <text x="581" y="143" fontFamily="Inter,sans-serif" fontSize="7.5" fill="rgba(238,241,246,0.3)"
                    textAnchor="middle">background · shear layers · turbulence</text>
                <rect x="496" y="162" width="170" height="4" rx="1" fill="rgba(0,200,224,0.3)" />

                {/* Shared interface label */}
                <text x="390" y="200" fontFamily="DM Mono,monospace" fontSize="7.5" fill="rgba(238,241,246,0.2)"
                    textAnchor="middle">same interface → wind speed and direction at any altitude, position, and
                    time step</text>

                {/* Arrows converge and go down */}
                <line x1="199" y1="172" x2="360" y2="210" stroke="#34d07a" strokeWidth="1"
                    strokeDasharray="4 3" />
                <line x1="581" y1="172" x2="420" y2="210" stroke="#00c8e0" strokeWidth="1"
                    strokeDasharray="4 3" />
                <line x1="390" y1="210" x2="390" y2="248" stroke="#3d9bff" strokeWidth="1.3"
                    markerEnd="url(#a4)" />

                {/* Output */}
                <rect x="160" y="250" width="460" height="22" rx="2" fill="#0d0f14" stroke="rgba(61,155,255,0.3)"
                    strokeWidth="1" />
                <text x="390" y="265" fontFamily="DM Mono,monospace" fontSize="8" fill="#3d9bff"
                    textAnchor="middle">Physics Engine — consumes wind to compute balloon drift and altitude
                    timing</text>
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Figure 4 — Two atmospheric backends sharing a common interface. The real-world mode uses actual forecast data; the training mode generates synthetic but physically plausible wind fields at high speed.` }}>
            </div>
        </div>
    );
}

export function StratosphericNavigationSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-6 md:p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 780 240" xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[780px] block mx-auto">
                <rect x="0" y="0" width="780" height="240" fill="transparent" />
                {/* Layers */}
                <line x1="50" y1="40" x2="730" y2="40" stroke="rgba(238,241,246,0.1)" strokeWidth="1"
                    strokeDasharray="10 10" />
                <line x1="50" y1="90" x2="730" y2="90" stroke="rgba(238,241,246,0.1)" strokeWidth="1"
                    strokeDasharray="10 10" />
                <line x1="50" y1="140" x2="730" y2="140" stroke="rgba(238,241,246,0.1)" strokeWidth="1"
                    strokeDasharray="10 10" />
                <line x1="50" y1="190" x2="730" y2="190" stroke="rgba(238,241,246,0.1)" strokeWidth="1"
                    strokeDasharray="10 10" />

                <text x="60" y="32" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(238,241,246,0.3)">25
                    KM</text>
                <text x="60" y="82" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(238,241,246,0.3)">22
                    KM</text>
                <text x="60" y="132" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(238,241,246,0.3)">19
                    KM</text>
                <text x="60" y="182" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(238,241,246,0.3)">16
                    KM</text>

                {/* Wind Vectors */}
                <g opacity="0.4">
                    <path d="M 600,65 L 680,65" stroke="#3d9bff" strokeWidth="2" markerEnd="url(#arr)" />
                    <text x="640" y="55" fontFamily="Inter,sans-serif" fontSize="7" fill="#3d9bff"
                        textAnchor="middle">EAST WIND</text>

                    <path d="M 680,115 L 600,115" stroke="#34d07a" strokeWidth="2" markerEnd="url(#arr)" />
                    <text x="640" y="105" fontFamily="Inter,sans-serif" fontSize="7" fill="#34d07a"
                        textAnchor="middle">WEST WIND</text>

                    <path d="M 600,165 L 640,165" stroke="#f0a020" strokeWidth="2" markerEnd="url(#arr)" />
                    <text x="620" y="155" fontFamily="Inter,sans-serif" fontSize="7" fill="#f0a020"
                        textAnchor="middle">SLOW DRIFT</text>
                </g>

                {/* Balloon Trajectory */}
                <path d="M 100,165 L 250,165 C 300,165 300,115 350,115 L 550,115" fill="none" stroke="#eef1f6"
                    strokeWidth="2.5" strokeDasharray="5 5" />
                <circle cx="100" cy="165" r="4" fill="#eef1f6" />

                {/* Balloon at transition */}
                <path d="M 342,105 L 358,105 L 350,90 Z" fill="#eef1f6" />
                <rect x="345" y="105" width="10" height="6" fill="#eef1f6" rx="1" />

                <text x="100" y="150" fontFamily="DM Mono,monospace" fontSize="9" fill="#eef1f6">LAUNCH</text>
                <text x="350" y="75" fontFamily="DM Mono,monospace" fontSize="9" fill="#eef1f6"
                    textAnchor="middle">ALTITUDE CHANGE TO CATCH WIND</text>
                <text x="550" y="135" fontFamily="DM Mono,monospace" fontSize="9" fill="#eef1f6"
                    textAnchor="middle">NAVIGATING TO TARGET</text>
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Vision — Vertical control is the "steering wheel" of a stratospheric platform. By moving up or down, the engine chooses the most efficient horizontal trajectory.` }}>
            </div>
        </div>
    );
}

export function AITrainingLoopSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-6 md:p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 780 440" xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[780px] block mx-auto">
                <defs>
                    <marker id="arr" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
                        <polygon points="0 0,6 2.5,0 5" fill="#eef1f6" />
                    </marker>
                    <marker id="arr_g" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
                        <polygon points="0 0,6 2.5,0 5" fill="rgba(238,241,246,0.3)" />
                    </marker>
                </defs>

                {/* Top rect */}
                <rect x="150" y="10" width="480" height="40" fill="rgba(140,158,255,0.15)" stroke="#8c9eff"
                    strokeWidth="1.5" rx="3" />
                <text x="390" y="36" fontFamily="DM Mono,monospace" fontSize="14" fontWeight="500" fill="#8c9eff"
                    textAnchor="middle">AI TRAINING (REINFORCEMENT LEARNING)</text>

                {/* Historical Data */}
                <path d="M 120,80 Q 140,80 140,105 L 140,115 Q 140,140 120,140 L 80,140 Q 90,110 80,80 Z"
                    fill="#0d0f14" stroke="rgba(238,241,246,0.5)" />
                <text x="110" y="105" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">HISTORICAL</text>
                <text x="110" y="117" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">WIND DATA</text>
                <line x1="145" y1="110" x2="185" y2="110" stroke="rgba(238,241,246,0.5)" strokeWidth="1.5"
                    markerEnd="url(#arr_g)" />

                <text x="245" y="130" fontFamily="DM Mono,monospace" fontSize="7" fill="#eaddf7"
                    textAnchor="middle">SEVERAL EPISODES</text>

                {/* Column */}
                <rect x="320" y="70" width="200" height="25" fill="#a3a3fc" fillOpacity="0.2" stroke="#a3a3fc"
                    rx="2" />
                <text x="420" y="86" fontFamily="Inter,sans-serif" fontSize="9" fill="#a3a3fc"
                    textAnchor="middle">For each episode execute a simulation</text>

                <rect x="320" y="100" width="200" height="20" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="2" />
                <text x="420" y="113" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">For each point/step of the sim: 2 iterations</text>

                <rect x="320" y="130" width="200" height="18" fill="#a3a3fc" fillOpacity="0.2" stroke="#a3a3fc"
                    rx="2" />
                <text x="420" y="143" fontFamily="Inter,sans-serif" fontSize="10" fill="#a3a3fc"
                    textAnchor="middle">Value Iteration</text>

                <rect x="330" y="155" width="190" height="20" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="2" />
                <text x="425" y="168" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">For each altitude of the column...</text>

                <rect x="330" y="180" width="190" height="24" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="2" />
                <text x="425" y="191" fontFamily="Inter,sans-serif" fontSize="7" fill="#eef1f6"
                    textAnchor="middle">Reward based on local wind that points</text>
                <text x="425" y="200" fontFamily="Inter,sans-serif" fontSize="7" fill="#eef1f6"
                    textAnchor="middle">towards NAV objectives</text>

                <rect x="330" y="210" width="190" height="30" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="2" />
                <text x="425" y="221" fontFamily="Inter,sans-serif" fontSize="7" fill="#eef1f6"
                    textAnchor="middle">Value function, based on Bellmann equation</text>
                <text x="425" y="230" fontFamily="Inter,sans-serif" fontSize="7" fill="#eef1f6"
                    textAnchor="middle">using current reward and previous value</text>

                <rect x="330" y="248" width="190" height="40" fill="#34d07a" fillOpacity="0.1" stroke="#34d07a"
                    rx="2" />
                <text x="425" y="260" fontFamily="Inter,sans-serif" fontSize="7" fill="#34d07a" fontWeight="bold"
                    textAnchor="middle">Update the AI weights so that the</text>
                <text x="425" y="269" fontFamily="Inter,sans-serif" fontSize="7" fill="#34d07a" fontWeight="bold"
                    textAnchor="middle">delta weights minimize the difference</text>
                <text x="425" y="278" fontFamily="Inter,sans-serif" fontSize="7" fill="#34d07a" fontWeight="bold"
                    textAnchor="middle">between AI output and known value function</text>

                <rect x="330" y="295" width="190" height="30" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="2" />
                <text x="425" y="307" fontFamily="Inter,sans-serif" fontSize="7" fill="#eef1f6"
                    textAnchor="middle">Estimate the value function for all</text>
                <text x="425" y="316" fontFamily="Inter,sans-serif" fontSize="7" fill="#eef1f6"
                    textAnchor="middle">the other columns / altitudes using NN</text>

                <rect x="320" y="335" width="200" height="18" fill="#a3a3fc" fillOpacity="0.2" stroke="#a3a3fc"
                    rx="2" />
                <text x="420" y="347" fontFamily="Inter,sans-serif" fontSize="10" fill="#a3a3fc"
                    textAnchor="middle">Policy Iteration</text>

                <rect x="320" y="360" width="200" height="22" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="2" />
                <text x="420" y="371" fontFamily="Inter,sans-serif" fontSize="7" fill="#eef1f6"
                    textAnchor="middle">Select the action to go towards the</text>
                <text x="420" y="379" fontFamily="Inter,sans-serif" fontSize="7" fill="#eef1f6"
                    textAnchor="middle">altitude that maximizes the value</text>

                <rect x="320" y="390" width="200" height="25" fill="#a3a3fc" fillOpacity="0.2" stroke="#a3a3fc"
                    rx="2" />
                <text x="420" y="401" fontFamily="Inter,sans-serif" fontSize="8" fill="#a3a3fc"
                    textAnchor="middle">For each iteration execute the</text>
                <text x="420" y="411" fontFamily="Inter,sans-serif" fontSize="8" fill="#a3a3fc"
                    textAnchor="middle">action and continue the episode</text>

                {/* Iteration loop back */}
                <path d="M 320,402 L 300,402 L 300,140 L 320,140" fill="none" stroke="#eef1f6" strokeWidth="1"
                    markerEnd="url(#arr)" />

                <line x1="520" y1="402" x2="595" y2="402" stroke="#eef1f6" strokeWidth="1.5"
                    markerEnd="url(#arr)" />

                <rect x="600" y="390" width="160" height="25" fill="#a3a3fc" fillOpacity="0.2" stroke="#a3a3fc"
                    rx="2" />
                <text x="680" y="401" fontFamily="Inter,sans-serif" fontSize="8" fill="#a3a3fc"
                    textAnchor="middle">Terminate episode based on</text>
                <text x="680" y="411" fontFamily="Inter,sans-serif" fontSize="8" fill="#a3a3fc"
                    textAnchor="middle">time/altitude</text>

                <rect x="210" y="165" width="80" height="30" fill="#eaddf7" fillOpacity="0.1" stroke="#eaddf7"
                    strokeOpacity="0.3" rx="3" />
                <text x="250" y="177" fontFamily="Inter,sans-serif" fontSize="7" fill="#eaddf7"
                    textAnchor="middle">Terminate Train</text>
                <text x="250" y="187" fontFamily="Inter,sans-serif" fontSize="7" fill="#eaddf7"
                    textAnchor="middle">based on steps</text>

            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Figure 5 — Detailed Reinforcement Learning training loop structure.` }}>
            </div>
        </div>
    );
}

export function AIAgentModuleSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-6 md:p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 780 400" xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[780px] block mx-auto">
                <defs>
                    <marker id="arr_w" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
                        <polygon points="0 0,6 2.5,0 5" fill="#eef1f6" />
                    </marker>
                    <marker id="arr_p" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
                        <polygon points="0 0,6 2.5,0 5" fill="#a4a4cf" />
                    </marker>
                </defs>

                <rect x="50" y="10" width="680" height="40" fill="rgba(164,164,207,0.15)" stroke="#a4a4cf"
                    strokeWidth="1.5" rx="3" />
                <text x="390" y="36" fontFamily="DM Mono,monospace" fontWeight="600" fontSize="14" fill="#a4a4cf"
                    textAnchor="middle" letterSpacing="1">AI AGENT MODULE</text>

                {/* Compressor output */}
                <rect x="10" y="200" width="100" height="30" fill="rgba(255,180,252,0.15)" stroke="#ffb4fc"
                    strokeWidth="1" rx="2" />
                <text x="60" y="218" fontFamily="Inter,sans-serif" fontSize="10" fill="#ffb4fc"
                    textAnchor="middle">COMPRESSOR</text>

                {/* Action Conversion Column */}
                <rect x="140" y="150" width="140" height="35" fill="rgba(164,164,207,0.2)" rx="2"
                    stroke="#a4a4cf" />
                <text x="210" y="165" fontFamily="Inter,sans-serif" fontSize="9" fill="#a4a4cf"
                    textAnchor="middle">Action Conversion for</text>
                <text x="210" y="177" fontFamily="Inter,sans-serif" fontSize="9" fill="#a4a4cf"
                    textAnchor="middle">Compressor/Valve</text>

                <polygon points="150,110 230,110 230,130 150,130" fill="#0d0f14" stroke="rgba(238,241,246,0.3)" />
                <text x="190" y="125" fontFamily="DM Mono,monospace" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">LIFT GAS VALVE</text>
                <polygon points="240,110 300,110 300,130 240,130" fill="#0d0f14" stroke="rgba(238,241,246,0.3)" />
                <text x="270" y="125" fontFamily="DM Mono,monospace" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">COMPRESSOR</text>
                <line x1="190" y1="130" x2="190" y2="150" stroke="#a4a4cf" strokeWidth="1.5"
                    markerEnd="url(#arr_p)" />
                <line x1="270" y1="130" x2="270" y2="150" stroke="#a4a4cf" strokeWidth="1.5"
                    markerEnd="url(#arr_p)" />

                <rect x="140" y="195" width="140" height="25" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="2" />
                <text x="210" y="210" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">Calculate Compression Ratio</text>

                <rect x="140" y="230" width="140" height="25" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="2" />
                <text x="210" y="245" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">Calculate Mass Flow threshold</text>

                <rect x="140" y="265" width="140" height="25" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="2" />
                <text x="210" y="280" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">Calculate RPM Target</text>

                <rect x="140" y="300" width="140" height="30" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="2" />
                <text x="210" y="312" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">Action -1: Compressor ON</text>
                <text x="210" y="322" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">Valve CLOSED</text>

                <line x1="140" y1="215" x2="110" y2="215" stroke="#eef1f6" strokeWidth="1.5"
                    markerEnd="url(#arr_w)" />

                {/* AI Decision Maker */}
                <rect x="330" y="150" width="120" height="35" fill="rgba(164,164,207,0.2)" stroke="#a4a4cf"
                    rx="2" />
                <text x="390" y="171" fontFamily="Inter,sans-serif" fontSize="9" fill="#a4a4cf"
                    textAnchor="middle">AI DECISION MAKER</text>

                <line x1="330" y1="168" x2="280" y2="168" stroke="#eef1f6" strokeWidth="1.5"
                    markerEnd="url(#arr_w)" />
                <rect x="290" y="160" width="30" height="16" fill="#0d0f14" stroke="rgba(238,241,246,0.3)" />
                <text x="305" y="171" fontFamily="DM Mono,monospace" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">{"{-1,0,+1}"}</text>

                <polygon points="340,110 440,110 450,130 350,130" fill="#0d0f14" stroke="rgba(238,241,246,0.3)" />
                <text x="395" y="125" fontFamily="DM Mono,monospace" fontSize="7" fill="#eef1f6"
                    textAnchor="middle">CURRENT PARAMETERS</text>
                <line x1="395" y1="130" x2="395" y2="150" stroke="#eef1f6" strokeWidth="1.5"
                    markerEnd="url(#arr_w)" />

                <rect x="330" y="195" width="120" height="85" fill="rgba(218,221,247,0.1)" stroke="#daddf7"
                    strokeWidth="1" rx="2" />
                <text x="390" y="210" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="bold" fill="#daddf7"
                    textAnchor="middle">Hyperparameters</text>
                <text x="360" y="225" fontFamily="Inter,sans-serif" fontSize="7" fill="#daddf7"
                    textAnchor="middle">Discount Factor</text>
                <text x="360" y="245" fontFamily="Inter,sans-serif" fontSize="7" fill="#daddf7"
                    textAnchor="middle">N. of NN layers</text>
                <text x="425" y="245" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="bold"
                    fill="#eef1f6">→ 8</text>
                <text x="360" y="265" fontFamily="Inter,sans-serif" fontSize="7" fill="#daddf7"
                    textAnchor="middle">N. perceptrons</text>
                <text x="425" y="265" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="bold"
                    fill="#eef1f6">→ 512</text>

                {/* Wind Estimator */}
                <rect x="470" y="150" width="140" height="35" fill="rgba(164,164,207,0.2)" stroke="#a4a4cf"
                    rx="2" />
                <text x="540" y="171" fontFamily="Inter,sans-serif" fontSize="9" fill="#a4a4cf"
                    textAnchor="middle">UPDATED WIND LAYERS</text>
                <line x1="470" y1="168" x2="450" y2="168" stroke="#eef1f6" strokeWidth="1.5"
                    markerEnd="url(#arr_w)" />

                <rect x="630" y="150" width="120" height="35" fill="rgba(164,164,207,0.2)" stroke="#a4a4cf"
                    rx="2" />
                <text x="690" y="171" fontFamily="Inter,sans-serif" fontSize="9" fill="#a4a4cf"
                    textAnchor="middle">WIND ESTIMATOR</text>

                <rect x="630" y="195" width="120" height="25" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="2" />
                <text x="690" y="210" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">Collect Wind (GPS/INS)</text>
                <rect x="630" y="230" width="120" height="25" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="2" />
                <text x="690" y="245" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">Estimate with Gaussian</text>

                <line x1="630" y1="168" x2="610" y2="168" stroke="#eef1f6" strokeWidth="1.5"
                    markerEnd="url(#arr_w)" />

                {/* Sensors */}
                <rect x="520" y="90" width="80" height="25" fill="rgba(255,180,252,0.15)" stroke="#ffb4fc" rx="2" />
                <text x="560" y="105" fontFamily="Inter,sans-serif" fontSize="9" fill="#ffb4fc"
                    textAnchor="middle">SENSORS</text>
                <line x1="560" y1="115" x2="560" y2="150" stroke="#a4a4cf" strokeWidth="1.5"
                    markerEnd="url(#arr_p)" />

                <rect x="630" y="90" width="100" height="25" fill="rgba(255,180,252,0.15)" stroke="#ffb4fc"
                    rx="2" />
                <text x="680" y="105" fontFamily="Inter,sans-serif" fontSize="9" fill="#ffb4fc"
                    textAnchor="middle">GPS/INS</text>
                <line x1="680" y1="115" x2="680" y2="150" stroke="#a4a4cf" strokeWidth="1.5"
                    markerEnd="url(#arr_p)" />
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Figure 6 — Details of the AI prediction components and wind resolution inside the navigation stack.` }}>
            </div>
        </div>
    );
}

export function PlanningToolsSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-6 md:p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 780 280" xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[780px] block mx-auto">
                <defs>
                    <marker id="arr_plan" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                        <polygon points="0 0,8 3.5,0 7" fill="#eef1f6" />
                    </marker>
                </defs>

                <rect x="90" y="20" width="600" height="50" fill="rgba(0,200,224,0.15)" stroke="#00c8e0"
                    strokeWidth="1.5" rx="3" />
                <text x="390" y="52" fontFamily="DM Mono,monospace" fontSize="20" fontWeight="600" fill="#00c8e0"
                    textAnchor="middle" letterSpacing="1">PLANNING TOOLS</text>

                <rect x="110" y="100" width="130" height="70" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="6" />
                <text x="120" y="120" fontFamily="Inter,sans-serif" fontSize="9" fill="#eef1f6">Initial
                    Position</text>
                <text x="120" y="132" fontFamily="Inter,sans-serif" fontSize="9" fill="#eef1f6">Date and
                    Time</text>
                <text x="120" y="144" fontFamily="Inter,sans-serif" fontSize="9" fill="#eef1f6">Stratorelay
                    Class</text>
                <text x="120" y="156" fontFamily="Inter,sans-serif" fontSize="9" fill="#eef1f6">Wind DB</text>

                {/* Right Arrow from Left Box */}
                <polygon points="260,125 310,125 310,115 330,135 310,155 310,145 260,145" fill="#eef1f6" />

                {/* Center Cyan Stack */}
                <g transform="translate(350, 100)">
                    <rect x="0" y="0" width="200" height="30" fill="rgba(0,200,224,0.2)" stroke="#00c8e0" rx="3" />
                    <text x="100" y="19" fontFamily="Inter,sans-serif" fontSize="11" fill="#00c8e0"
                        textAnchor="middle">Stratorelay Planning Tool</text>

                    <rect x="0" y="45" width="200" height="30" fill="rgba(0,200,224,0.2)" stroke="#00c8e0" rx="3" />
                    <text x="100" y="64" fontFamily="Inter,sans-serif" fontSize="11" fill="#00c8e0"
                        textAnchor="middle">Stratostats Planning Tool</text>

                    <rect x="0" y="90" width="200" height="30" fill="rgba(0,200,224,0.2)" stroke="#00c8e0" rx="3" />
                    <text x="100" y="109" fontFamily="Inter,sans-serif" fontSize="11" fill="#00c8e0"
                        textAnchor="middle">StratoEye</text>

                    <rect x="0" y="135" width="200" height="30" fill="rgba(0,200,224,0.2)" stroke="#00c8e0"
                        rx="3" />
                    <text x="100" y="154" fontFamily="Inter,sans-serif" fontSize="11" fill="#00c8e0"
                        textAnchor="middle">StratoLoop</text>
                </g>

                {/* Right Arrow from Center Stack */}
                <polygon points="570,125 620,125 620,115 640,135 620,155 620,145 570,145" fill="#eef1f6" />

                <rect x="660" y="100" width="120" height="70" fill="#0d0f14" stroke="rgba(238,241,246,0.3)"
                    rx="6" />
                <text x="670" y="120" fontFamily="Inter,sans-serif" fontSize="9" fill="#eef1f6">Overall
                    Trajectory</text>
                <text x="670" y="134" fontFamily="Inter,sans-serif" fontSize="9" fill="#eef1f6">Landing
                    Position</text>
                <text x="670" y="148" fontFamily="Inter,sans-serif" fontSize="9" fill="#eef1f6">Landing Date and
                    Time</text>
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Figure 7 — Planning Tools overview, translating initial parameters and environmental data into final expected trajectories.` }}>
            </div>
        </div>
    );
}

export function StratoEyeEngineSVG({ className }: { className?: string }) {
    return (
        <div className={cn("my-8 bg-involve-panel border border-involve-border/50 p-6 md:p-8 overflow-x-auto", className)}>
            <svg viewBox="0 0 780 320" xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[780px] block mx-auto">
                <defs>
                    <marker id="arr_amber" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                        <polygon points="0 0,8 3.5,0 7" fill="#f0a020" />
                    </marker>
                    <marker id="arr_cyan" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                        <polygon points="0 0,8 3.5,0 7" fill="#00c8e0" />
                    </marker>
                </defs>

                {/* Title */}
                <rect x="230" y="10" width="320" height="35" fill="rgba(240,160,32,0.1)" stroke="#f0a020"
                    strokeWidth="1.5" rx="3" />
                <text x="390" y="32" fontFamily="DM Mono,monospace" fontSize="14" fontWeight="600" fill="#f0a020"
                    textAnchor="middle" letterSpacing="1">STRATOEYE ENGINE</text>

                {/* Persistence Layer */}
                <rect x="30" y="65" width="280" height="120" rx="3" fill="#0d0f14" stroke="rgba(238,241,246,0.2)"
                    strokeWidth="1" />
                <text x="170" y="85" fontFamily="DM Mono,monospace" fontSize="8" fill="rgba(238,241,246,0.5)"
                    textAnchor="middle">PERSISTENCE LAYER</text>

                <rect x="50" y="95" width="240" height="25" rx="2" fill="rgba(52,208,122,0.05)" stroke="#34d07a"
                    strokeWidth="0.8" />
                <text x="170" y="111" fontFamily="Inter,sans-serif" fontSize="8" fill="#34d07a"
                    textAnchor="middle">0.25° Grid Cell Indexing</text>

                <rect x="50" y="125" width="240" height="45" rx="2" fill="rgba(240,160,32,0.05)" stroke="#f0a020"
                    strokeWidth="1" strokeDasharray="4 2" />
                <text x="170" y="142" fontFamily="DM Mono,monospace" fontSize="8" fill="#f0a020"
                    textAnchor="middle">Local State Cache (V-Cube)</text>
                <text x="170" y="156" fontFamily="Inter,sans-serif" fontSize="7" fill="rgba(240,160,32,0.6)"
                    textAnchor="middle">Check for cached horizon (Resumption)</text>

                {/* Core Computation */}
                <rect x="370" y="65" width="380" height="150" rx="3" fill="rgba(0,200,224,0.03)"
                    stroke="rgba(0,200,224,0.3)" strokeWidth="1.5" />
                <text x="560" y="85" fontFamily="DM Mono,monospace" fontSize="9" fill="#00c8e0"
                    textAnchor="middle" letterSpacing="1">VALUE ITERATION MDP SOLVER</text>

                {/* MDP Loop */}
                <rect x="400" y="100" width="320" height="30" rx="2" fill="#0d0f14"
                    stroke="rgba(238,241,246,0.2)" />
                <text x="560" y="119" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">Stochastic Wind Kernel (GFS Forecast + Noise)</text>

                <rect x="400" y="140" width="320" height="30" rx="2" fill="#0d0f14"
                    stroke="rgba(238,241,246,0.2)" />
                <text x="560" y="159" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">Probability Propagation (Transition Dynamics)</text>

                <rect x="400" y="180" width="320" height="25" rx="2" fill="rgba(0,200,224,0.1)" stroke="#00c8e0" />
                <text x="560" y="196" fontFamily="DM Mono,monospace" fontSize="8" fill="#00c8e0"
                    textAnchor="middle">Bellman Equation update for Day N+1</text>

                {/* Arrows */}
                <line x1="310" y1="125" x2="362" y2="125" stroke="#f0a020" strokeWidth="1.2"
                    markerEnd="url(#arr_amber)" />
                <text x="340" y="118" fontFamily="DM Mono,monospace" fontSize="6" fill="#f0a020"
                    textAnchor="middle">resume state</text>

                {/* Final Outputs */}
                <path d="M 560,215 L 560,245" stroke="#00c8e0" strokeWidth="1.2" markerEnd="url(#arr_cyan)" />

                <rect x="410" y="255" width="140" height="40" rx="3" fill="#0d0f14" stroke="#eef1f6"
                    strokeWidth="1" />
                <text x="480" y="273" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">Intermediate</text>
                <text x="480" y="285" fontFamily="Inter,sans-serif" fontSize="8" fill="#eef1f6"
                    textAnchor="middle">Daily Heatmaps</text>

                <rect x="570" y="255" width="140" height="40" rx="3" fill="rgba(240,160,32,0.15)" stroke="#f0a020"
                    strokeWidth="1.5" />
                <text x="640" y="273" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="600" fill="#f0a020"
                    textAnchor="middle">FINAL CAT MAP</text>
                <text x="640" y="285" fontFamily="DM Mono,monospace" fontSize="7" fill="#f0a020"
                    textAnchor="middle">Base64 Encoded</text>

                {/* Loop Arrow */}
                <path d="M 720,192 Q 760,192 760,152 Q 760,112 720,112" fill="none" stroke="#00c8e0"
                    strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arr_cyan)" />
            </svg>
            <div className="font-mono text-[10px] text-involve-muted tracking-[0.05em] text-center mt-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: `Figure 8 — StratoEye Reachability Architecture. The engine leverages a persistent grid-based cache to resume computations, using stochastic Value Iteration to map the cumulative reachability probability over time.` }}>
            </div>
        </div>
    );
}

