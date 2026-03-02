import PdfViewerPage from './PdfViewerPage';
import PageNavigation from '../components/ui/PageNavigation';

export default function OnePagerPage() {
    return (
        <PdfViewerPage
            title="Involve Space"
            titleStrong="Executive One Pager"
            subtitle="A concise, high-level summary of the Involve Space value proposition, business model, and key investment highlights."
            pdfUrl="/dataroom-contents/00_Executive_Overview/03_One_Pager.pdf"
            fileName="Involve_Space_One_Pager.pdf"
        >
            <PageNavigation
                prev={{
                    title: "Investor Deck (Latest)",
                    desc: "The primary pitch deck for the current Series A funding round, detailing the market opportunity, product vision, technological moat, and financial projections.",
                    path: "/dataroom/00_Executive_Overview/02_Investor_Deck_Latest"
                }}
                next={{
                    title: "Investment Thesis",
                    desc: "An in-depth writeup of why Involve Space represents a compelling investment opportunity.",
                    path: "/dataroom/00_Executive_Overview/01_Investment_Thesis"
                }}
            />
        </PdfViewerPage>
    );
}
