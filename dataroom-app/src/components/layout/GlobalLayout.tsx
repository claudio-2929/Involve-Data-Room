import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarNav from './SidebarNav';
import TopNavBar from './TopNavBar';
import PageNavigation from '../ui/PageNavigation';
import TableOfContents from './TableOfContents';
import { sitemapData } from '../../data/sitemap';
import { useAuth } from '../../contexts/AuthContext';

export default function GlobalLayout({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    const location = useLocation();

    // Flatten sitemap
    const getFlatAuthorizedSitemap = () => {
        const flat: any[] = [];
        const traverse = (nodes: any[]) => {
            for (const node of nodes) {
                if (node.requiredAccess === 'full' && user?.accessLevel !== 'full') continue;
                const isFolder = node.children && node.children.length > 0;
                if (!isFolder) {
                    flat.push(node);
                } else {
                    traverse(node.children);
                }
            }
        };
        traverse(sitemapData);
        return flat;
    };

    const flatMap = getFlatAuthorizedSitemap();
    const currentIndex = flatMap.findIndex(node => location.pathname === node.path);

    let prevNode = undefined;
    let nextNode = undefined;

    if (currentIndex > 0) {
        prevNode = flatMap[currentIndex - 1];
    }
    if (currentIndex !== -1 && currentIndex < flatMap.length - 1) {
        nextNode = flatMap[currentIndex + 1];
    }

    return (
        <div className="min-h-screen bg-involve-bg text-involve-text flex overflow-hidden print:overflow-visible print:block print:min-h-0 print:h-auto print:bg-white print:text-black">
            {/* Persistent Left Sidebar Navigation */}
            <SidebarNav />

            {/* Document Table of Contents */}
            <TableOfContents />

            {/* Main App Container */}
            <main className="flex-1 flex flex-col min-h-screen max-h-screen relative print:h-auto print:max-h-none print:overflow-visible print:block">
                {/* Confidential Watermark Layer */}
                <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center opacity-[0.02] select-none print:hidden">
                    <div className="transform -rotate-45 text-6xl md:text-9xl font-bold tracking-[0.2em] uppercase">
                        Confidential
                    </div>
                </div>

                <TopNavBar />

                {/* Main Content Area */}
                <div id="main-scroll-area" className="flex-1 overflow-y-auto z-10 p-6 md:p-10 lg:p-12 pb-32 print:overflow-visible print:p-0 print:h-auto">
                    <div id="main-content" className="max-w-5xl mx-auto flex flex-col min-h-full">
                        <div className="flex-1">
                            {children}
                        </div>
                        {currentIndex !== -1 && (
                            <div className="mt-8">
                                <PageNavigation prev={prevNode} next={nextNode} />
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
