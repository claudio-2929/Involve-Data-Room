import PdfViewerPage from './PdfViewerPage';

export default function InvestorDeckPage() {
    return (
        <PdfViewerPage
            title="Involve Space"
            titleStrong="Investor Deck (Latest)"
            subtitle="The primary pitch deck for the current Series A funding round, detailing the market opportunity, product vision, technological moat, and financial projections."
            pdfUrl="/dataroom-contents/00_Executive_Overview/02_Investor_Deck.pdf"
            fileName="Involve_Space_Investor_Deck_Latest.pdf"
        />
    );
}
