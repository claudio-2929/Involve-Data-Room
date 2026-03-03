import { useState } from 'react';
import { DocHeader, SectionHeader } from '../components/ui/core';
import { Download, FileText, Loader2 } from 'lucide-react';

interface PdfViewerPageProps {
    title: string;
    titleStrong?: string;
    subtitle?: string;
    pdfUrl: string;
    fileName: string;
    children?: React.ReactNode;
}

export default function PdfViewerPage({ title, titleStrong, subtitle, pdfUrl, fileName, children }: PdfViewerPageProps) {
    const [isDownloading, setIsDownloading] = useState(false);

    // Ensure the PDF URL works with the base path, especially for GitHub Pages
    const baseUrl = import.meta.env.BASE_URL;
    const finalPdfUrl = pdfUrl.startsWith('/') ? `${baseUrl}${pdfUrl.slice(1)}` : pdfUrl;

    const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (isDownloading) return;
        setIsDownloading(true);

        try {
            const response = await fetch(finalPdfUrl);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error("Download failed", error);
            // Fallback
            window.open(finalPdfUrl, '_blank');
        } finally {
            setIsDownloading(false);
        }
    };

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

                    <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-involve-blue text-white rounded-md hover:bg-involve-blue/90 transition-colors font-medium text-sm w-fit disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isDownloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                        <span>{isDownloading ? 'Downloading...' : 'Download PDF'}</span>
                    </button>
                </div>

                <div className="w-full rounded-xl border border-involve-border overflow-hidden bg-involve-panel flex flex-col items-center justify-center relative min-h-[600px]">
                    <iframe
                        src={`${finalPdfUrl}#toolbar=0`}
                        className="w-full h-[800px] border-none absolute inset-0 z-10"
                        title={title}
                    />
                    {/* Fallback content while loading or if PDF fails */}
                    <div className="flex flex-col items-center gap-3 text-involve-dim absolute z-0">
                        <FileText size={48} className="opacity-20" />
                        <p className="text-sm">Loading document...</p>
                    </div>
                </div>

                {children}
            </div>
        </div>
    );
}
