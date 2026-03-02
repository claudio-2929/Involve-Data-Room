import type { ReactNode } from 'react';
import SidebarNav from './SidebarNav';
import TopNavBar from './TopNavBar';

export default function GlobalLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-involve-bg text-involve-text flex overflow-hidden print:overflow-visible print:block print:min-h-0 print:h-auto print:bg-white print:text-black">
            {/* Persistent Left Sidebar Navigation */}
            <SidebarNav />

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
                <div className="flex-1 overflow-y-auto z-10 p-6 md:p-10 lg:p-12 pb-32 print:overflow-visible print:p-0 print:h-auto">
                    <div className="max-w-5xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
