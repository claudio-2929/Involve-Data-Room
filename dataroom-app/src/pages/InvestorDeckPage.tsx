import PdfViewerPage from './PdfViewerPage';
import PageNavigation from '../components/ui/PageNavigation';

export default function InvestorDeckPage() {
    return (
        <PdfViewerPage
            title="Involve Space"
            titleStrong="Investor Deck (Latest)"
            subtitle="The primary pitch deck for the current Series A funding round, detailing the market opportunity, product vision, technological moat, and financial projections."
            pdfUrl="/dataroom-contents/00_Executive_Overview/02_Investor_Deck.pdf"
            fileName="Involve_Space_Investor_Deck_Latest.pdf"
        >
            <PageNavigation
                prev={{
                    title: "Investment Thesis",
                    desc: "An in-depth writeup of why Involve Space represents a compelling investment opportunity.",
                    path: "/dataroom/00_Executive_Overview/01_Investment_Thesis"
                }}
                next={{
                    title: "Executive One Pager",
                    desc: "A concise, high-level summary of the Involve Space value proposition.",
                    path: "/dataroom/00_Executive_Overview/03_One_Pager"
                }}
            />
        </PdfViewerPage>
    );
}
