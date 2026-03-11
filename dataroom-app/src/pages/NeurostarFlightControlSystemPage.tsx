
import { DocHeader, SectionHeader, ContentBlock, BodyText } from '../components/ui/core';
import { NextSectionCard } from '../components/shared/NavigationHelpers';
import {
    NeurostarArchitectureSVG,
    BalloonDesignerSVG,
    PhysicsEngineSVG,
    AtmosphericEngineSVG,
    StratosphericNavigationSVG,
    AITrainingLoopSVG,
    AIAgentModuleSVG,
    PlanningToolsSVG,
    StratoEyeEngineSVG
} from '../components/ui/NeurostarSVGs';

export default function NeurostarFlightControlSystemPage() {
    return (
        <div className="pb-32">
            <DocHeader
                breadcrumb={<>02. Product &amp; Technology <span className="opacity-30 mx-1">›</span> <span className="text-involve-blue">Autonomous Navigation</span></>}
                title="03. Neurostar®"
                titleStrong="Flight Control System"
                subtitle="The first operational reinforcement learning agent for stratospheric control."
                meta={[
                    { label: 'TRL', value: 'TRL 9' },
                ]}
            />

            {/* Architecture Overview */}
            <section className="mb-24">
                <SectionHeader
                    eyebrow="System Architecture"
                    title="Four Vertically Integrated Layers"
                    desc="Neurostar is not a single software module, but an end-to-end architecture."
                />
                <ContentBlock>
                    <BodyText>
                        The core advantage of Involve Space's navigation system is its end-to-end integration.
                        Unlike traditional aerospace architectures where design, simulation, planning, and flight control are separated across disjoint tools,
                        Neurostar is fully unified. It operates as a pipeline of four distinct but continuously linked layers.
                    </BodyText>

                    <NeurostarArchitectureSVG />

                    <BodyText>
                        This vertical integration creates a closed mathematical loop. The exact same physical models that govern how the balloon is designed
                        also govern how it behaves in simulation, which means the AI agent trains in an environment mathematically identical to the aircraft it will fly.
                        When an engineer updates the weight of a solar panel in the design layer, that change propagates instantly through the physics engine,
                        altering the simulated dynamics and forcing the AI agent to learn a new optimal trajectory.
                    </BodyText>
                </ContentBlock>
            </section>

            {/* Layer 1: Balloon Designer */}
            <section className="mb-24">
                <SectionHeader
                    eyebrow="Layer 1"
                    title="Design Tool: The Balloon Designer"
                    desc="Algorithmic geometry tailored to structural limits."
                />
                <ContentBlock>
                    <BodyText>
                        The architecture begins with the Balloon Designer, a desktop application that translates mission requirements into a fully defined physical specification.
                        Zero-pressure stratospheric balloons are complex non-linear structures; their shape changes dramatically as the lifting gas expands during ascent,
                        and they must safely endure maximum expansion without film rupture.
                    </BodyText>

                    <BalloonDesignerSVG />

                    <BodyText>
                        The designer takes operational inputs—such as desired payload mass and target flight altitude—and automatically computes the necessary gas volumes,
                        super-pressure limits, and exact envelope geometry. It outputs the number, length, and cutting width of the polyethylene gores (the fabric panels),
                        as well as the load-bearing tendon specifications.
                    </BodyText>
                </ContentBlock>
            </section>

            {/* Layer 2: Physics Simulation */}
            <section className="mb-24">
                <SectionHeader
                    eyebrow="Layer 2"
                    title="Physics Simulation: The Core Engine"
                    desc="High-fidelity thermodynamic and kinematic modeling."
                />
                <ContentBlock>
                    <BodyText>
                        The physics engine takes the rigid specification from the Designer and breathes life into it. It simulates the balloon moving through the atmosphere,
                        incorporating high-fidelity physical laws rather than kinematic approximations.
                    </BodyText>

                    <PhysicsEngineSVG />

                    <BodyText>
                        The most defining physical characteristic of a stratospheric balloon is that it is a thermal vehicle.
                        As the sun rises, the lift gas heats up, expands, and alters both the envelope shape and overall buoyancy.
                        The engine models these complex thermodynamic interactions accurately—including heat transfer through the film,
                        solar radiation attenuation, and convective cooling based on airspeed—allowing the simulation to predict the exact dynamic response of the vehicle
                        across day-night cycles.
                    </BodyText>
                </ContentBlock>
            </section>

            {/* Layer 3: Environment Engine */}
            <section className="mb-24">
                <SectionHeader
                    eyebrow="Layer 3"
                    title="Environment: Atmospheric Dynamics"
                    desc="Twin backends for validation and training."
                />
                <ContentBlock>
                    <BodyText>
                        For a stratospheric flight simulator to be useful, it must place the balloon in a realistic atmosphere.
                        The Environment Engine acts as the world provider, returning wind speed, direction, temperature, and pressure at any requested geometric coordinate and timestamp.
                    </BodyText>

                    <AtmosphericEngineSVG />
                </ContentBlock>
            </section>

            {/* Layer 4: Control Philosophy */}
            <section className="mb-24">
                <SectionHeader
                    eyebrow="Layer 4"
                    title="Control Philosophy: Stratospheric Sailing"
                    desc="Leveraging wind shear to navigate."
                />
                <ContentBlock>
                    <BodyText>
                        Unlike drones or aircraft, stratospheric balloons do not have propellers or horizontal thrust. They are carried entirely by the wind.
                        Navigation is achieved using a technique called "wind-finding." Because wind speed and direction change significantly at different altitudes
                        (a property known as wind shear), a platform can steer horizontally by changing its altitude vertically.
                    </BodyText>

                    <StratosphericNavigationSVG />
                </ContentBlock>
            </section>

            {/* Training The Agent */}
            <section className="mb-24">
                <SectionHeader
                    eyebrow="Intelligence Generation"
                    title="Training the Agent: Deep Reinforcement Learning"
                    desc="Learning optimal navigation policies through autonomous trial and error."
                />
                <ContentBlock>
                    <BodyText>
                        Neurostar navigation is powered by a Deep Reinforcement Learning (RL) agent, specifically utilizing the Quantile-based Deep Q-Network (QDQN) algorithm.
                        Rather than being programmed with an explicit set of rules ("if wind is East, compress gas"), the AI is placed in the simulation environment,
                        given a goal, and allowed to learn the optimal policy through millions of automated trial-and-error sequences.
                    </BodyText>

                    <AITrainingLoopSVG />

                    <BodyText>
                        During training, the agent experiences thousands of complete flight episodes. It observes the state (altitude, battery, target direction,
                        current wind layers) and selects an action (compress, vent, or idle). The physics engine moves the balloon, the agent gets a "reward"
                        proportional to its progress toward the target, and the cycle repeats.
                    </BodyText>

                    <div className="mt-12">
                        <AIAgentModuleSVG />
                    </div>
                </ContentBlock>
            </section>

            {/* Key Capabilities */}
            <section className="mb-24">
                <SectionHeader
                    eyebrow="Key AI Capabilities"
                    title="The advantages of Deep RL"
                    desc="Why Reinforcement Learning outperforms traditional control heuristics."
                />
                <ContentBlock>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-involve-bgborder bg-involve-bg2 border border-involve-border/50 rounded-lg p-6">
                            <h4 className="font-mono text-sm font-semibold tracking-wider text-involve-text mb-2">Predictive Energy Management</h4>
                            <div className="text-sm text-involve-muted">
                                Because it trains over full diurnal cycles, the agent naturally learns that energy is finite.
                                It learns to anticipate sunset, preserving enough battery during the late afternoon to survive the night and still
                                perform necessary actuation, without any explicit code telling it how solar panels work.
                            </div>
                        </div>
                        <div className="bg-involve-bgborder bg-involve-bg2 border border-involve-border/50 rounded-lg p-6">
                            <h4 className="font-mono text-sm font-semibold tracking-wider text-involve-text mb-2">Distributional Awareness (QDQN)</h4>
                            <div className="text-sm text-involve-muted">
                                Neurostar uses a distributional approach to Q-learning. Instead of just learning the "average" outcome of an action,
                                it learns the full probability distribution. This means the AI can calibrate its own confidence and avoid actions that have a
                                high average reward but a catastrophic tail-risk.
                            </div>
                        </div>
                        <div className="bg-involve-bgborder bg-involve-bg2 border border-involve-border/50 rounded-lg p-6">
                            <h4 className="font-mono text-sm font-semibold tracking-wider text-involve-text mb-2">Safety Filter (Always Active)</h4>
                            <div className="text-sm text-involve-muted">
                                A hard-coded deterministic safety envelope wraps the AI output. If the AI proposes an unsafe command (like venting when the balloon is
                                below minimum pressure), the safety filter overrides it. This guarantees that AI miscalculations can never violate the physical limits of the vehicle.
                            </div>
                        </div>
                    </div>
                </ContentBlock>
            </section>

            {/* Planning Tools */}
            <section className="mb-24">
                <SectionHeader
                    eyebrow="Mission Planning"
                    title="Planning Ecosystem"
                    desc="Translating intelligence into operational success."
                />
                <ContentBlock>
                    <BodyText>
                        The planning ecosystem translates initial configurations and environmental data, feeding them through specialized tools to produce
                        highly reliable trajectory and landing predictions before the platform ever leaves the ground.
                    </BodyText>

                    <PlanningToolsSVG />

                    <div className="bg-involve-panel border border-involve-border/50 p-6 md:p-8 rounded-lg mt-8 mb-12">
                        <h4 className="font-mono text-sm font-bold text-involve-text tracking-wider mb-4 border-b border-involve-border/50 pb-2">StratoRelay Pathfinding</h4>
                        <BodyText className="mb-6">
                            Provides deterministic trajectory prediction using actual GFS forecasts, verifying the exact flight path of a platform configuration given launch conditions.
                        </BodyText>

                        <h4 className="font-mono text-sm font-bold text-involve-text tracking-wider mb-4 border-b border-involve-border/50 pb-2">StratoEye Reachability Engine</h4>
                        <BodyText className="mb-6">
                            A powerful diagnostic tool computing "Reachability Heatmaps". Using Value Iteration and Dynamic Programming to solve Markov Decision Processes,
                            it maps the probability of a balloon maintaining position over a target for extended durations. Uses persistent 0.25° grid caching to resume computations efficiently.
                        </BodyText>

                        <h4 className="font-mono text-sm font-bold text-involve-text tracking-wider mb-4 border-b border-involve-border/50 pb-2">StratoStats Probabilistic Risk</h4>
                        <BodyText>
                            Runs continuous Monte Carlo perturbations across wind vectors and physics parameters to generate comprehensive landing footprints and assess risk zones probabilistically.
                        </BodyText>
                    </div>

                    <StratoEyeEngineSVG />
                </ContentBlock>
            </section>

            <NextSectionCard
                title="CLEAR GeoAI Infrastructure"
                description="Learn how the intelligence layer processes and streams insights."
                path="/dataroom/02_Product_and_Technology/05_CLEAR_GeoAI_Infrastructure_Layer"
            />
        </div>
    );
}
