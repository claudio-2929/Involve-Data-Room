import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { cn } from './core';

interface MermaidDiagramProps {
    chart: string;
    className?: string;
}

// Ensure unique IDs for mermaid instances so multiple charts on one page don't collide
let chartCounter = 0;

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [chartId] = useState(`mermaid-chart-${++chartCounter}`);
    const [svgContent, setSvgContent] = useState<string>('');

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: 'dark',
            flowchart: {
                htmlLabels: true,
                curve: 'basis'
            }
        });

        const renderChart = async () => {
            try {
                if (containerRef.current) {
                    const result = await mermaid.render(chartId, chart);
                    // Depending on mermaid version, result is either { svg: string } or just a string
                    const svgString = typeof result === 'string' ? result : (result as any).svg;
                    setSvgContent(svgString);
                }
            } catch (error) {
                console.error("Mermaid rendering failed", error);
                const element = document.getElementById(chartId);
                if (element) {
                    element.remove();
                }
            }
        };

        renderChart();
    }, [chart, chartId]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "bg-[#0b0f1a] border border-involve-border rounded-xl p-8 overflow-x-auto flex justify-center items-center my-8",
                className
            )}
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
}
