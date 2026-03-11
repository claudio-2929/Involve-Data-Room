import { DocHeader, SectionHeader, BodyText, ContentBlock } from '../components/ui/core';
import { NextSectionCard } from '../components/shared/NavigationHelpers';
import { MermaidDiagram } from '../components/ui/MermaidDiagram';
import { Callout, ExplainGrid, ExplainCell, ArchitectureLegend, DiffTable } from '../components/ui/ClearSpecific';

export default function CLEARGeoAIPage() {
    return (
        <div className="animate-in fade-in duration-500 w-full max-w-5xl mx-auto pb-20">
            <DocHeader
                breadcrumb={<>02. Product &amp; Technology <span className="opacity-30 mx-1">›</span> <span className="text-involve-blue">CLEAR GeoAI Infrastructure Layer</span></>}
                title="CLEAR — GeoAI"
                titleStrong="Intelligence Platform"
                subtitle="A layered visualization of how CLEAR processes natural language into spatially-grounded, evidence-backed geospatial intelligence through an agentic MCP orchestration stack built on deterministic tool execution."
                meta={[
                    { label: 'Document', value: 'IS-DR-06' },
                    { label: 'Architecture', value: 'Agentic MCP · 5 Layers' },
                    { label: 'TRL', value: 'TRL 5 → TRL 7 target 2026' },
                    { label: 'Revision', value: 'A — Feb 2026' },
                ]}
            />

            <ArchitectureLegend />

            {/* LAYER 1 */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Layer 01"
                    title="User Interaction Layer"
                />

                <BodyText>
                    The user—whether a domain expert or a non-technical operator—expresses intent in natural language. CLEAR's intent decomposition pipeline extracts structured execution parameters without surfacing any architectural complexity. The user interacts with a simple prompt interface and receives structured intelligence outputs.
                </BodyText>

                <MermaidDiagram chart={`flowchart TD
    U(["👤 USER<br/><small>Expert or Non-Technical</small>"]):::user
    NL["📝 Natural Language Prompt<br/><i style='font-size:11px'>e.g. 'Show flood risk delta for<br/>Po valley since last October'</i>"]:::stoch

    subgraph DECOMP["⚙️  INTENT DECOMPOSITION ENGINE  (Stochastic — LLM)"]
        direction LR
        T["🕐 Temporal<br/>Extraction"]:::stoch
        S["📍 Spatial<br/>Extraction"]:::stoch
        P["🌊 Phenomenon<br/>Extraction"]:::stoch
        Q["📊 Quantitative<br/>Targets"]:::stoch
        X["🔗 Cross-Domain<br/>Join Requirements"]:::stoch
    end

    EP["📋 Structured Execution Plan<br/><code style='font-size:10px'>{ bbox, time_range, layers[], metrics[], joins[] }</code>"]:::orch
    MCO["⚡ MCP Orchestration →"]:::orch

    U --> NL --> DECOMP
    DECOMP --> EP --> MCO`} />

                <Callout type="warn" title="Stochastic boundary:">
                    The intent decomposition step is the only stochastic phase visible to execution logic. After this point, all operations are deterministic. The LLM produces a validated JSON execution plan — not answers.
                </Callout>

                <ExplainGrid>
                    <ExplainCell title="Temporal Extraction">
                        Normalizes relative and absolute time references into ISO 8601 intervals. "Since last October" → <code>2024-10-01/2025-02-27</code>
                    </ExplainCell>
                    <ExplainCell title="Spatial Extraction">
                        Resolves named geographies into DGGS spatial tokens or bounding boxes. "Po Valley" → canonical H3/DGGS cell set.
                    </ExplainCell>
                    <ExplainCell title="Phenomenon Extraction">
                        Maps natural language phenomena to EO or data catalog layer identifiers. "Flood risk" → <code>SAR_coherence, DEM_change, NDWI</code>
                    </ExplainCell>
                    <ExplainCell title="Quantitative Targets">
                        Identifies measurable outputs required. These become tool parameters, never LLM computations. "Delta" → <code>diff_operator(t0, t1)</code>
                    </ExplainCell>
                    <ExplainCell title="Cross-Domain Joins">
                        Detects when the query requires fusing multiple data domains (e.g., EO + cadastre + insurance). Generates join specifications using the DGGS spatial token as the common key.
                    </ExplainCell>
                </ExplainGrid>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* LAYER 2 */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Layer 02"
                    title="Agentic Reasoning Layer"
                />

                <BodyText>
                    The agentic core enforces a strict tool-use paradigm through MCP (Model Context Protocol). The LLM reasons about which tools to invoke and in what sequence — but it never computes physical quantities. A parameter validation middleware blocks execution if schemas are invalid. The system is LLM-agnostic: the orchestration contract is with the MCP interface, not any specific model.
                </BodyText>

                <MermaidDiagram chart={`flowchart TD
    EP["📋 Structured Execution Plan"]:::orch

    subgraph LLM_ZONE["🟡  STOCHASTIC ZONE — LLM Reasoning Engine"]
        direction TB
        IP["Intent Parser<br/><small>Disambiguates execution plan</small>"]:::stoch
        TP["Tool Selection<br/><small>Selects tool IDs from MCP registry</small>"]:::stoch
        SP["Sequence Planner<br/><small>Orders tool calls, handles dependencies</small>"]:::stoch
    end

    MCP["⚡ MCP Orchestration Layer<br/><small>LLM-agnostic · Protocol boundary</small>"]:::orch

    PV{"🛡️ Parameter Validation<br/>Middleware<br/><small>Schema enforcement</small>"}:::orch

    BLOCK["🚫 BLOCKED<br/>Execution halted<br/>LLM re-prompted"]:::warn
    PASS["✅ Validated Parameters"]:::det

    subgraph DET_ZONE["🟢  DETERMINISTIC ZONE — Tool Execution Layer"]
        direction LR
        T1["EO Processing<br/>Tool"]:::det
        T2["Spatial Analysis<br/>Tool"]:::det
        T3["Change Detection<br/>Tool"]:::det
        T4["Data Fusion<br/>Tool"]:::det
        T5["Retrieval<br/>Tool"]:::det
    end

    RES["📦 Tool Results<br/><small>Typed, schema-validated outputs</small>"]:::det

    EP --> IP --> TP --> SP --> MCP --> PV
    PV -->|"Invalid schema"| BLOCK
    BLOCK -.->|"re-prompt"| IP
    PV -->|"Valid schema"| PASS
    PASS --> T1 & T2 & T3 & T4 & T5
    T1 & T2 & T3 & T4 & T5 --> RES`} />

                <Callout type="det" title="Deterministic enforcement:">
                    The validation middleware is schema-first. Every tool call must pass against a typed input contract before execution. If the LLM hallucinates a parameter or produces an out-of-range value, execution is blocked and the LLM is re-prompted — it cannot bypass this gate.
                </Callout>

                <ExplainGrid>
                    <ExplainCell title="MCP Protocol Boundary">
                        Model Context Protocol decouples the LLM from tool implementations. Any conformant model (GPT-4, Gemini, Claude, Llama) can drive the orchestration layer. The platform is not locked to a single LLM provider.
                    </ExplainCell>
                    <ExplainCell title="Parameter Validation Middleware">
                        Every tool exposes a typed input schema. Middleware validates bounding boxes, date ranges, band identifiers, and numeric thresholds before execution. Malformed calls never reach compute infrastructure.
                    </ExplainCell>
                    <ExplainCell title="Strict Tool-Use Enforcement">
                        The LLM is system-prompted to never produce quantitative answers directly. All numeric outputs must originate from a registered tool call. This is enforced at both the prompt and validation layers.
                    </ExplainCell>
                    <ExplainCell title="Re-prompt Loop">
                        On validation failure, the middleware returns a structured error to the LLM, specifying which parameter failed and why. The LLM corrects and resubmits. Maximum retry depth is configurable.
                    </ExplainCell>
                </ExplainGrid>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* LAYER 3 */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Layer 03"
                    title="Data Fusion Layer — Tri-Dimensional Ecosystem"
                />

                <BodyText>
                    CLEAR harmonizes three structurally distinct data streams — Earth Observation imagery, structured numerical datasets, and socio-digital signals — through a unified DGGS spatial token layer. The spatial token acts as the universal join key, enabling zero-ETL interoperability across data types that would otherwise require bespoke pipelines.
                </BodyText>

                <MermaidDiagram chart={`flowchart TB
    subgraph A["📡  STREAM A — EO Imagery"]
        A1["Copernicus Sentinel<br/><small>SAR · Optical · Thermal</small>"]:::det
        A2["Stratostats<br/><small>Persistent monitoring<br/>Sub-meter · Hyperspectral</small>"]:::det
        A3["Stratorelay<br/><small>Rapid deployment<br/>On-demand coverage</small>"]:::det
    end

    subgraph B["📊  STREAM B — Structured Numerical Data"]
        B1["Cadastre<br/><small>Land registry · Parcel data</small>"]:::det
        B2["Energy Grid<br/><small>Infrastructure · Consumption</small>"]:::det
        B3["Meteorology<br/><small>NWP · Station data</small>"]:::det
        B4["Soil / Geology<br/><small>Composition · Classification</small>"]:::det
    end

    subgraph C["📰  STREAM C — Socio-Digital Signals"]
        C1["News Feeds<br/><small>Event extraction · NLP</small>"]:::stoch
        C2["Social Media<br/><small>Crowd-sourced signals</small>"]:::stoch
        C3["Alerts & Warnings<br/><small>Gov / Civil protection APIs</small>"]:::stoch
    end

    DGGS["🗂️  DGGS SPATIAL TOKEN LAYER<br/><small>Universal spatial key · Cross-domain harmonization<br/>Discrete Global Grid System indexing</small>"]:::orch

    KG["🕸️  Knowledge Graph<br/><small>Spatial entity relationships<br/>Temporal versioning</small>"]:::store
    VDB["🔍  Vector Database<br/><small>High-dimensional embeddings<br/>Semantic retrieval</small>"]:::store

    A1 & A2 & A3 --> DGGS
    B1 & B2 & B3 & B4 --> DGGS
    C1 & C2 & C3 --> DGGS

    DGGS --> KG
    DGGS --> VDB`} />

                <Callout type="key" title="DGGS as universal join key:">
                    Every data record — whether a Sentinel-2 pixel, a cadastral parcel, or a news alert — is spatially tokenized using a Discrete Global Grid System cell identifier. This token is the primary key for cross-domain joins. No ETL mapping is required between sources; spatial co-location is implicit in the token structure.
                </Callout>

                <ExplainGrid>
                    <ExplainCell title="Stratostats (Stream A)">
                        Stratospheric balloon platform in persistent monitoring mode. Provides sub-meter resolution, extended dwell time over areas of interest, and hyperspectral capability not available from satellite at comparable revisit rates.
                    </ExplainCell>
                    <ExplainCell title="Stratorelay (Stream A)">
                        Rapid deployment balloon for on-demand area acquisition. Triggered by the dynamic tasking loop (Layer 5) when data freshness thresholds are not met by existing archive coverage.
                    </ExplainCell>
                    <ExplainCell title="DGGS Spatial Token">
                        Hierarchical hexagonal grid cells (e.g., H3/DGGRID) provide resolution-agnostic spatial addressing. Tokens are resolution-scalable: analysis can aggregate from street level to continental without re-indexing source data.
                    </ExplainCell>
                    <ExplainCell title="Knowledge Graph">
                        Stores spatial entities (buildings, parcels, infrastructure nodes) as graph nodes with typed relationships. Supports temporal versioning so that the state of any entity at any past time can be reconstructed for audit or change analysis.
                    </ExplainCell>
                    <ExplainCell title="Vector Database">
                        Stores high-dimensional embeddings of imagery patches, document chunks, and event signals. Enables semantic similarity retrieval that complements exact spatial queries — e.g., "find scenes visually similar to this flood signature."
                    </ExplainCell>
                    <ExplainCell title="Zero-ETL Interoperability">
                        The spatial token eliminates the need for source-specific ETL pipelines between data types. New data sources are onboarded by registering a spatial tokenizer adapter — the fusion logic remains unchanged.
                    </ExplainCell>
                </ExplainGrid>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* LAYER 4 */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Layer 04"
                    title="Compute &amp; Evidence Layer"
                />

                <BodyText>
                    All numerical results are computed by deterministic tools. The LLM's role at output time is limited to synthesizing a natural language summary from structured JSON results — it receives numbers, it does not generate them. Every output is packaged with a complete evidence trail enabling third-party reproducibility.
                </BodyText>

                <MermaidDiagram chart={`flowchart TD
    TR["📦 Tool Results<br/><small>Typed outputs from deterministic tools</small>"]:::det

    subgraph AGG["🟢  DETERMINISTIC AGGREGATION"]
        direction LR
        A1["Spatial Aggregation<br/><small>DGGS-native</small>"]:::det
        A2["Temporal Diff<br/><small>t0 vs t1 operators</small>"]:::det
        A3["Multi-layer Fusion<br/><small>Cross-domain join</small>"]:::det
        A4["Statistical Summary<br/><small>mean · σ · percentile</small>"]:::det
    end

    SJSON["{ } Structured JSON Result<br/><small>Typed · Schema-validated · Versioned</small>"]:::det

    subgraph SYNTH["🟡  STOCHASTIC — LLM Synthesis (read-only)"]
        NLS["Natural Language Summary<br/><small>LLM reads JSON · Writes explanation</small>"]:::stoch
    end

    subgraph EP["📜  EVIDENCE PACKAGE"]
        direction TB
        E1["🖼️ Raw Imagery References<br/><small>Scene IDs · Tile paths · Timestamps</small>"]:::store
        E2["⚙️ Processing Parameters<br/><small>Algorithm versions · Thresholds used</small>"]:::store
        E3["🔧 Tool IDs &amp; Call Signatures<br/><small>Full MCP call log</small>"]:::store
        E4["🔁 Reproducibility Metadata<br/><small>Hash · Environment · Data version</small>"]:::store
        E5["📈 Confidence Score<br/><small>Data coverage · Algorithm uncertainty</small>"]:::store
    end

    OUT(["📊 Intelligence Output<br/><small>To user · To downstream systems</small>"]):::user

    TR --> AGG --> SJSON
    SJSON --> NLS
    SJSON --> E1 & E2 & E3 & E4 & E5
    NLS --> OUT
    EP --> OUT`} />

                <Callout type="det" title="Full audit trail by design:">
                    Because all computations flow through registered, versioned tools with logged call signatures, any output can be reproduced independently given the same input data. The LLM summary references the JSON result by field name — it cannot introduce numbers not present in the deterministic output.
                </Callout>

                <ExplainGrid>
                    <ExplainCell title="Structured JSON Result">
                        The canonical output format before synthesis. Fields include computed metrics, spatial extents, time ranges, source references, and uncertainty estimates. This JSON is the source of truth — not the natural language summary.
                    </ExplainCell>
                    <ExplainCell title="LLM Synthesis (read-only)">
                        The LLM receives the JSON and is instructed to translate it into accessible language. It is prohibited from introducing new numeric claims, interpreting values beyond what is present, or hedging on deterministic results.
                    </ExplainCell>
                    <ExplainCell title="Confidence Score">
                        Computed deterministically from data coverage percentage, cloud/occlusion fraction, sensor calibration status, and algorithm uncertainty models. Not an LLM-generated "I'm fairly confident" statement.
                    </ExplainCell>
                    <ExplainCell title="Reproducibility Hash">
                        SHA-256 of tool call parameters + data version identifiers. A downstream consumer can rerun the exact processing chain at a future date and verify output identity — critical for defense, insurance, and regulatory use cases.
                    </ExplainCell>
                </ExplainGrid>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* LAYER 5 */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Layer 05"
                    title="Dynamic Tasking Loop"
                />

                <BodyText>
                    CLEAR is not limited to querying static archives. When the agent determines that existing data does not meet freshness, resolution, or coverage requirements, it initiates a dynamic tasking request to the Involve Space stratospheric platform — closing the loop between intelligence demand and data acquisition.
                </BodyText>

                <MermaidDiagram chart={`flowchart TD
    EXEC["🔍 Data Freshness Check<br/><small>Deterministic tool evaluates archive coverage</small>"]:::det

    DEC{{"Freshness &amp; Coverage<br/>Sufficient?"}}:::orch

    PROCEED["✅ Proceed with<br/>existing data"]:::det

    subgraph TASK["⚡  DYNAMIC TASKING — Involve Space Platform"]
        direction LR
        SS["🎈 Stratostats<br/><small>Persistent monitoring<br/>Long dwell · Multi-pass<br/>Scheduled orbit</small>"]:::det
        SR["🚀 Stratorelay<br/><small>Rapid deployment<br/>48–72h tasking window<br/>Responsive acquisition</small>"]:::det
    end

    ACQ["📡 New Data Acquisition<br/><small>Raw sensor output</small>"]:::det

    IDX["⬡ DGGS Spatial Indexing<br/><small>Token assignment · Resolution selection</small>"]:::orch

    KGU["🕸️ Knowledge Graph Update<br/><small>New entities · Updated states<br/>Temporal version increment</small>"]:::store

    VDU["🔍 Vector DB Update<br/><small>New embeddings ingested</small>"]:::store

    RETRY["↩️ Re-run original query<br/>with fresh data"]:::orch

    EXEC --> DEC
    DEC -->|"Yes"| PROCEED
    DEC -->|"No — stale / missing"| TASK
    SS & SR --> ACQ
    ACQ --> IDX --> KGU & VDU --> RETRY`} />

                <Callout type="loop" title="Closed-loop intelligence:">
                    This is the architectural differentiator that separates CLEAR from a pure EO analytics platform. The system can detect its own data gaps and task the stratospheric sensor network to fill them — no human intervention required in the acquisition–indexing–query loop.
                </Callout>

                <ExplainGrid>
                    <ExplainCell title="Freshness Check">
                        A deterministic tool queries the DGGS index for the most recent valid observation at the required spatial resolution. It computes coverage fraction and compares against a configurable staleness threshold defined by the original query intent.
                    </ExplainCell>
                    <ExplainCell title="Stratostats Tasking">
                        For ongoing monitoring requirements, Stratostats are assigned a persistent monitoring orbit over the area of interest. Suitable for change detection over multi-day windows requiring high temporal density.
                    </ExplainCell>
                    <ExplainCell title="Stratorelay Tasking">
                        For acute, time-sensitive data needs, Stratorelay enables rapid balloon deployment with a 48–72 hour response window. Designed for event response: floods, fires, conflict area assessment.
                    </ExplainCell>
                    <ExplainCell title="Knowledge Graph Update">
                        After DGGS indexing, new observations update the knowledge graph with temporal version increments. Downstream queries that touch the same spatial tokens automatically gain access to the new data without cache invalidation logic.
                    </ExplainCell>
                </ExplainGrid>
            </ContentBlock>

            <div className="h-px w-full bg-involve-border my-16"></div>

            {/* APPENDICES */}
            <ContentBlock>
                <SectionHeader
                    eyebrow="Appendix A"
                    title="Simplified Investor View"
                />

                <BodyText>
                    A single-page representation of CLEAR's value architecture without implementation detail — suitable for investor decks and executive briefings.
                </BodyText>

                <MermaidDiagram chart={`flowchart LR
    U(["👤 Customer\nAsk a question\nin natural language"]):::user

    subgraph CLEAR["✦  CLEAR — AI INTELLIGENCE PLATFORM"]
        direction TB
        LLM["AI Reasoning Engine\nUnderstands intent"]:::stoch
        DATA["Unified Data Layer\nSatellite · Stratospheric · Ground"]:::det
        TASK["Live Tasking\nStratostats & Stratorelay"]:::det
    end

    OUT(["📊 Structured Intelligence\nEvidence-backed · Reproducible\nNo EO expertise required"]):::user

    U --> LLM --> DATA --> OUT
    DATA <--> TASK`} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-8">
                        <h4 className="font-mono text-[11px] text-involve-blue tracking-widest uppercase mb-6 pb-3 border-b border-involve-border">
                            What the investor needs to understand
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {['Customers get geospatial intelligence from plain language — no GIS expertise required',
                                'All outputs are deterministic and auditable — legally defensible for insurance, defense, agriculture',
                                'CLEAR can task its own sensors when data gaps are detected — unique in the market',
                                'The platform is LLM-agnostic — not a bet on one model provider',
                                'Evidence packages enable recurring, contracted intelligence workflows — not one-off queries',
                                'Stratospheric data is proprietary to Involve Space — creates a defensible data moat'].map((item, i) => (
                                    <li key={i} className="text-sm text-involve-text font-light pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-involve-blue before:font-mono">
                                        {item}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="bg-involve-panel border border-involve-border rounded-xl p-8">
                        <h4 className="font-mono text-[11px] text-involve-blue tracking-widest uppercase mb-6 pb-3 border-b border-involve-border">
                            Why this architecture is investable
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {['Platform flywheel: more data → better intelligence → more contracts → more tasking',
                                'Hardware + software integration creates a vertically integrated margin stack',
                                'Public + private + proprietary data fusion is technically non-trivial to replicate',
                                'Defense and insurance verticals require auditability that standard LLM chatbots cannot provide',
                                'Existing 200+ flight record validates the sensor network as a production asset',
                                'EIC Accelerator validation provides technical credibility and non-dilutive capital leverage'].map((item, i) => (
                                    <li key={i} className="text-sm text-involve-text font-light pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-involve-blue before:font-mono">
                                        {item}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </ContentBlock>

            <ContentBlock>
                <div className="flex items-center gap-4 mb-8">
                    <span className="font-mono text-[10px] text-involve-cyan bg-involve-cyan/10 border border-involve-cyan/30 px-2 py-0.5 rounded-sm tracking-[0.08em]">APPENDIX B</span>
                    <h2 className="text-xl md:text-2xl font-medium tracking-wide text-involve-text">Highly Technical System Blueprint</h2>
                </div>

                <MermaidDiagram chart={`C4Context
    title CLEAR System Blueprint — Component Architecture

    Person(user, "User", "Expert or non-technical operator. Submits NL queries via API or UI.")

    Boundary(clear, "CLEAR Platform") {
        System(intent, "Intent Decomposition Service", "LLM-backed NLP parser. Outputs typed ExecutionPlan JSON.")
        System(orch, "MCP Orchestration Layer", "LLM-agnostic tool router. Enforces strict tool-use via schema validation.")
        System(toolreg, "Tool Registry", "Versioned tool catalog. Exposes typed input/output schemas per tool.")
        System(valm, "Validation Middleware", "Pre-execution schema check. Blocks invalid parameterizations.")
        System(toolexec, "Deterministic Tool Runtime", "Executes registered tools. No LLM access during execution.")
        System(agg, "Aggregation Engine", "DGGS-native spatial & temporal aggregation. Pure computation.")
        System(synth, "Synthesis Service", "LLM read-only pass. Translates JSON result to NL. No numeric generation.")
        System(ep, "Evidence Package Builder", "Assembles reproducibility metadata. SHA-256 call hash.")
        SystemDb(dggs, "DGGS Index", "H3/DGGRID spatial token store. Primary join key.")
        SystemDb(kg, "Knowledge Graph", "Temporal spatial entity graph. RDF/LPG. Versioned.")
        SystemDb(vdb, "Vector DB", "High-dim embeddings. ANN retrieval.")
    }

    Boundary(data, "Data Sources") {
        System_Ext(sentinel, "Copernicus Sentinel", "ESA public EO archive")
        System_Ext(strato, "Stratostats / Stratorelay", "Involve Space proprietary stratospheric sensors")
        System_Ext(struct, "Structured Sources", "Cadastre, Grid, Met, Soil APIs")
        System_Ext(social, "Socio-Digital Signals", "News, Social, Alert APIs")
    }

    Rel(user, intent, "NL query", "HTTPS/JSON")
    Rel(intent, orch, "ExecutionPlan", "MCP Protocol")
    Rel(orch, toolreg, "Tool lookup", "Internal")
    Rel(orch, valm, "Parameter set", "Schema check")
    Rel(valm, toolexec, "Validated params", "Internal")
    Rel(toolexec, agg, "Raw results", "Typed JSON")
    Rel(agg, synth, "Structured JSON", "Internal")
    Rel(agg, ep, "Computation log", "Internal")
    Rel(synth, user, "NL summary + Evidence", "HTTPS/JSON")
    Rel(toolexec, dggs, "Spatial queries", "DGGS API")
    Rel(toolexec, kg, "Entity queries", "Graph query")
    Rel(toolexec, vdb, "Semantic retrieval", "ANN query")
    Rel(sentinel, dggs, "Imagery → tokens", "Ingest pipeline")
    Rel(strato, dggs, "Proprietary imagery → tokens", "Ingest pipeline")
    Rel(struct, dggs, "Records → tokens", "Ingest pipeline")
    Rel(social, dggs, "Signals → tokens", "NLP + Ingest")`} />
                <ExplainGrid>
                    <ExplainCell title="Protocol: MCP">
                        Model Context Protocol standardizes the interface between reasoning model and tool set. Tool definitions are self-describing JSON schemas. The orchestration layer is model-provider agnostic by contract.
                    </ExplainCell>
                    <ExplainCell title="Storage: DGGS + KG + VDB">
                        Three complementary storage systems: DGGS for spatial indexing and join operations, Knowledge Graph for typed entity relationships and temporal versioning, Vector DB for semantic similarity and unstructured signal retrieval.
                    </ExplainCell>
                    <ExplainCell title="Compute: Deterministic Runtime">
                        Tool implementations are pure functions: same inputs always produce same outputs. No stochastic elements in the computation layer. All tools are versioned and registered. Output schemas are validated before passing to synthesis.
                    </ExplainCell>
                    <ExplainCell title="Output: Evidence Package">
                        SHA-256 hash of parameter + data versions enables third-party verification. Tool call log provides complete audit trail. Confidence scores are algorithm-derived, not LLM-generated. Suitable for regulated industry use.
                    </ExplainCell>
                </ExplainGrid>
            </ContentBlock>

            <ContentBlock>
                <div className="flex items-center gap-4 mb-8">
                    <span className="font-mono text-[10px] text-involve-cyan bg-involve-cyan/10 border border-involve-cyan/30 px-2 py-0.5 rounded-sm tracking-[0.08em]">APPENDIX C</span>
                    <h2 className="text-xl md:text-2xl font-medium tracking-wide text-involve-text">How CLEAR Differs From Existing Systems</h2>
                </div>

                <DiffTable>
                    <thead className="text-[10px] font-mono tracking-[0.08em] uppercase text-involve-muted bg-involve-bg2 border-b border-involve-border">
                        <tr>
                            <th className="px-4 py-3 border-r border-involve-border font-medium w-[20%]">Capability</th>
                            <th className="px-4 py-3 border-r border-involve-border font-medium w-[20%]">Traditional GIS</th>
                            <th className="px-4 py-3 border-r border-involve-border font-medium w-[20%]">Standard LLM Chatbot</th>
                            <th className="px-4 py-3 border-r border-involve-border font-medium w-[20%]">EO Downstream Platform</th>
                            <th className="px-4 py-3 font-medium text-involve-blue w-[20%]">CLEAR</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs text-involve-text font-light divide-y divide-involve-border">
                        {[
                            ["Natural Language Interface", "❌ Requires expert operators. Query expressed in spatial algebra.", "✅ Native NL but produces ungrounded answers without real data.", "⚠️ Limited to catalog search only.", "✅ Full NL → structured execution plan → deterministic computation."],
                            ["Quantitative Output Reliability", "✅ Deterministic — but operator must configure analysis manually.", "❌ LLM fabricates numeric values. No ground truth. Cannot be audited.", "✅ Deterministic for configured workflows — brittle outside pipelines.", "✅ All numbers from deterministic tools. LLM never generates values."],
                            ["Cross-Domain Data Fusion", "⚠️ Possible but requires bespoke ETL per data source pair.", "❌ No spatial data access. Cannot perform true spatial joins.", "⚠️ Limited to EO layers. Integration with non-imagery data requires custom pipelines.", "✅ DGGS spatial token as universal join key. Zero-ETL fusion."],
                            ["Audit Trail / Reproducibility", "⚠️ Depends on implementation — often manual export.", "❌ Non-reproducible by design. Same prompt → different output.", "⚠️ Workflow-level reproducibility. Rarely end-to-end.", "✅ SHA-256 call hash. Full MCP call log. Third-party verifiable."],
                            ["Dynamic Data Acquisition", "❌ Operates on static archives.", "❌ Cannot task sensors. Knowledge cutoff problem.", "⚠️ Some platforms integrate archive + tasking, but not agent-driven.", "✅ Agent detects data gaps and triggers Stratostats/Stratorelay tasking."],
                        ].map((row, i) => (
                            <tr key={i} className="hover:bg-involve-panel/30 transition-colors">
                                <td className="px-4 py-4 font-mono text-[11px] text-involve-blue border-r border-involve-border">{row[0]}</td>
                                <td className="px-4 py-4 border-r border-involve-border leading-relaxed">{row[1]}</td>
                                <td className="px-4 py-4 border-r border-involve-border leading-relaxed">{row[2]}</td>
                                <td className="px-4 py-4 border-r border-involve-border leading-relaxed">{row[3]}</td>
                                <td className="px-4 py-4 leading-relaxed font-medium bg-involve-blue/[0.03]">{row[4]}</td>
                            </tr>
                        ))}
                    </tbody>
                </DiffTable>

                <Callout title="Architectural summary:">
                    Traditional GIS gives reliable computation but requires expert operators. LLM chatbots give accessible interfaces but hallucinate. EO platforms give strong imagery processing but are siloed and manual. CLEAR combines the accessibility of a chatbot, the reliability of a GIS, the data richness of an EO platform, and adds the dynamic sensor control of a vertically integrated aerospace company — all within an auditable, LLM-agnostic architecture.
                </Callout>
            </ContentBlock>

            <NextSectionCard
                title="Data Architecture and AI Pipeline"
                description="Explore the technical flows from stratosphere to customer edge."
                path="/dataroom/02_Product_and_Technology/05_Data_Architecture_and_AI_Pipeline"
            />
        </div>
    );
}
