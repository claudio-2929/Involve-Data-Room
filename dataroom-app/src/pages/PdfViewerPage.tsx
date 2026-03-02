import { DocHeader, SectionHeader } from '../components/ui/core';
import { Download, FileText } from 'lucide-react';

interface PdfViewerPageProps {
    title: string;
    titleStrong?: string;
    subtitle?: string;
    pdfUrl: string;
    fileName: string;
}

export default function PdfViewerPage({ title, titleStrong, subtitle, pdfUrl, fileName }: PdfViewerPageProps) {
    return (
        <div>
            <DocHeader
                title={title}
                titleStrong={titleStrong}
                subtitle={subtitle}
            />

            <div className="max-w-[860px] mx-auto md:px-14 px-4 overflow-x-hidden pb-20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <SectionHeader
                        eyebrow="Document Viewer"
                        title="Document Preview"
                        className="mb-0"
                    />

                    <a
                        href={pdfUrl}
                        download={fileName}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-involve-blue text-white rounded-md hover:bg-involve-blue/90 transition-colors font-medium text-sm w-fit"
                    >
                        <Download size={16} />
                        <span>Download PDF</span>
                    </a>
                </div>

                <div className="w-full rounded-xl border border-involve-border overflow-hidden bg-involve-panel flex flex-col items-center justify-center relative min-h-[600px]">
                    <iframe
                        src={`${pdfUrl}#toolbar=0`}
                        className="w-full h-[800px] border-none absolute inset-0 z-10"
                        title={title}
                    />
                    {/* Fallback content while loading or if PDF fails */}
                    <div className="flex flex-col items-center gap-3 text-involve-dim absolute z-0">
                        <FileText size={48} className="opacity-20" />
                        <p className="text-sm">Loading document...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
