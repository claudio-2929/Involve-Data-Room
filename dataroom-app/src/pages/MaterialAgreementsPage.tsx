import { useState } from 'react';
import { PageHeader, Card, SectionHeading } from '../components/ui/core';
import { NextSectionCard } from '../components/shared/NavigationHelpers';
import { FileText, ChevronDown, ChevronUp, Lock, Download, ShieldCheck } from 'lucide-react';

function LegalDocument({
    title,
    date,
    summary,
    isConfidential = false,
    downloadSize
}: {
    title: string,
    date: string,
    summary: string,
    isConfidential?: boolean,
    downloadSize: string
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card className="mb-4 p-0 overflow-hidden">
            <div
                className="p-6 flex items-start sm:items-center justify-between cursor-pointer hover:bg-involve-bg2 transition-colors gap-4 flex-col sm:flex-row"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-involve-panel border border-involve-border flex items-center justify-center text-involve-muted flex-shrink-0">
                        <FileText size={20} />
                    </div>
                    <div>
                        <h4 className="text-involve-text font-medium text-lg flex items-center gap-2">
                            {title}
                            {isConfidential && <Lock size={14} className="text-involve-cyan" />}
                        </h4>
                        <div className="flex items-center gap-3 mt-1 text-sm text-involve-muted">
                            <span>Updated: {date}</span>
                            <span className="w-1 h-1 bg-involve-border rounded-full"></span>
                            <span>{downloadSize}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 self-end sm:self-auto">
                    {isConfidential && (
                        <span className="hidden sm:inline-flex px-2.5 py-1 text-xs font-mono tracking-widest uppercase border border-involve-cyan/30 text-involve-cyan bg-involve-cyan/10 rounded">
                            Restricted
                        </span>
                    )}
                    <button className="text-involve-muted hover:text-involve-text transition-colors">
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-involve-border/50 bg-black/20">
                    <h5 className="text-xs font-mono text-involve-muted uppercase tracking-widest mb-3">Executive Summary</h5>
                    <p className="text-sm text-involve-muted leading-relaxed mb-6 max-w-4xl">
                        {summary}
                    </p>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-involve-cyan text-involve-bg font-medium rounded hover:bg-involve-cyan-hover transition-colors text-sm">
                            <Download size={16} />
                            Download PDF
                        </button>
                    </div>
                </div>
            )}
        </Card>
    );
}

export default function MaterialAgreementsPage() {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-start mb-10">
                <PageHeader
                    title="Material Agreements"
                    subtitle="Core commercial, defense, and foundational partnership contracts constituting the operational moat."
                    lastUpdated="November 2026"
                />

                <div className="hidden md:flex flex-col items-end gap-2 mt-2">
                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-lg text-sm">
                        <ShieldCheck size={16} />
                        <span>Watermarked Access</span>
                    </div>
                    <span className="text-xs font-mono tracking-widest text-involve-muted uppercase">ID: INV-2026-A1X</span>
                </div>
            </div>

            <SectionHeading>Institutional & Defense (Dual-Use)</SectionHeading>
            <div className="mb-12">
                <LegalDocument
                    title="ESA InCubed Co-Funding Agreement"
                    date="Oct 12, 2026"
                    downloadSize="2.4 MB"
                    summary="The definitive agreement with the European Space Agency for the co-development and validation of the CLEAR platform. Details the €2.5M non-dilutive grant structure, milestone deliverables, and confirms Involve Space retains 100% of generated IP."
                />
                <LegalDocument
                    title="Italian Ministry of Defense - Phase 1 Assessment"
                    date="Sep 05, 2026"
                    downloadSize="1.1 MB"
                    isConfidential={true}
                    summary="Preliminary technical assessment and memorandum of understanding acting as the precursor for the formal dual-use procurement protocol. Details the specific RF intelligence and high-resolution EO requirements mapped against the stratospheric platform's capabilities."
                />
            </div>

            <SectionHeading>Commercial Partnerships</SectionHeading>
            <div className="mb-12">
                <LegalDocument
                    title="Telespazio - Strategic Integration MoU"
                    date="Aug 22, 2026"
                    downloadSize="1.8 MB"
                    summary="Memorandum of Understanding detailing the integration of Involve Space's stratospheric data feeds into Telespazio's existing ground segment and analytics platforms, establishing a rapid route-to-market for derived data products."
                />
                <LegalDocument
                    title="Aria (Data Hub) Partnership Agreement"
                    date="Jul 14, 2026"
                    downloadSize="3.2 MB"
                    summary="Foundational agreement for the integration and resale of continuous area monitoring data through the Aria marketplace, detailing revenue share mechanics and exclusivity boundaries."
                />
            </div>

            <SectionHeading>Supply Chain & IP</SectionHeading>
            <div className="mb-12">
                <LegalDocument
                    title="Patent Filing: Directional Stratospheric Drift Control"
                    date="Jun 30, 2026"
                    downloadSize="4.5 MB"
                    summary="The core patent application for the machine-learning driven predictive altitude control system. Covers both the neural network methodology and the physical actuation sequences that allow for non-propulsive station keeping."
                />
                <LegalDocument
                    title="Key Supplier Agreement: Specialized Envelope Materials"
                    date="Jan 15, 2026"
                    downloadSize="1.4 MB"
                    isConfidential={true}
                    summary="Exclusive supply agreement for the next-generation UV-resistant polymer used in the platform envelope, extending flight duration from 14 days to the targeted 90-day baseline."
                />
            </div>

            <NextSectionCard
                title="Risk Matrix & Mitigation"
                description="Review the quantified operational, regulatory, and technical risks."
                path="/dataroom/10_Risk_and_Control/risk-matrix"
            />
        </div>
    );
}
