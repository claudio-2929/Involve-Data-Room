import { useEffect, useRef } from 'react';
import { PageHeader } from '../components/ui/core';

interface HtmlContentPageProps {
    title: string;
    subtitle?: string;
    htmlContent: string;
}

export default function HtmlContentPage({ title, subtitle, htmlContent }: HtmlContentPageProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Some HTML content might contain mermaid diagrams, let's trigger a re-render/initialization if available
    useEffect(() => {
        if (window.mermaid) {
            window.mermaid.init(undefined, containerRef.current?.querySelectorAll('.mermaid'));
        }
    }, [htmlContent]);

    return (
        <div className="animate-in fade-in duration-500 w-full">
            <PageHeader
                title={title}
                subtitle={subtitle || "Section details"}
            />

            <div
                ref={containerRef}
                className="html-render-container w-full mt-8 rounded-xl border border-involve-border overflow-hidden bg-involve-bg"
            >
                {/* 
                    We use an iframe to isolate the CSS so it doesn't break our Tailwind CSS
                    and to respect its native dark theme styles completely.
                */}
                <iframe
                    title={title}
                    srcDoc={htmlContent}
                    className="w-full min-h-[800px] border-none"
                    style={{ height: 'calc(100vh - 200px)' }}
                ></iframe>
            </div>
        </div>
    );
}

// Ensure TypeScript knows about window.mermaid
declare global {
    interface Window {
        mermaid?: any;
    }
}
