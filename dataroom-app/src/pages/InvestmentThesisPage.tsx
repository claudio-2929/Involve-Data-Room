import { PageHeader, AbstractBox, ContentBlock, BodyText, SectionHeading } from '../components/ui/core';
import { NextSectionCard } from '../components/shared/NavigationHelpers';

export default function InvestmentThesisPage() {
    return (
        <div className="animate-in fade-in duration-500">
            <PageHeader
                title="Investment Thesis"
                subtitle="Why Involve Space represents a uniquely defensible opportunity in the European deep-tech ecosystem."
                lastUpdated="October 2026"
            />

            <AbstractBox>
                Involve Space is establishing the first sovereign, pseudo-satellite data infrastructure in the stratosphere. By circumventing the capital intensity of orbital launches and the regulatory/endurance limits of traditional UAVs, Involve provides continuous, high-resolution Earth Observation (EO) and telecommunications capabilities at a fraction of the cost, with a TRL 7 platform already validated by top-tier institutional partners.
            </AbstractBox>

            <ContentBlock>
                <SectionHeading>The Strategic Gap</SectionHeading>
                <BodyText>
                    The current aerospace data market is polarized. On one end, Low Earth Orbit (LEO) satellites require massive CapEx, suffer from high latency in rapid deployment, and operate on rigid revisit cycles. On the other end, High Altitude Pseudo-Satellites (HAPS) and advanced UAVs struggle with endurance, regulatory airspace integration, and payload capacity.
                </BodyText>
                <BodyText>
                    The stratosphere (18-25km altitude) remains an underexploited domain. It offers the persistence of a satellite with the resolution and rapid deployment capabilities of an aircraft. Involve Space captures this "missing middle."
                </BodyText>
            </ContentBlock>

            <ContentBlock>
                <SectionHeading>Core Defensibility (The Moat)</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="border-l-2 border-involve-cyan/50 pl-6 py-2">
                        <h4 className="text-involve-text font-medium mb-2 tracking-wide text-lg">1. The CLEAR Platform</h4>
                        <p className="text-sm text-involve-muted leading-relaxed">
                            Proprietary AI-driven stratospheric navigation software that utilizes predictive wind modeling to achieve station-keeping without traditional propulsion, drastically reducing weight and increasing payload endurance.
                        </p>
                    </div>
                    <div className="border-l-2 border-involve-cyan/50 pl-6 py-2">
                        <h4 className="text-involve-text font-medium mb-2 tracking-wide text-lg">2. Regulatory First-Mover</h4>
                        <p className="text-sm text-involve-muted leading-relaxed">
                            Deep integration with European aviation authorities (ENAC, EASA). Operational frameworks already established, creating substantial barriers to entry for new competitors.
                        </p>
                    </div>
                    <div className="border-l-2 border-involve-cyan/50 pl-6 py-2">
                        <h4 className="text-involve-text font-medium mb-2 tracking-wide text-lg">3. Sovereign Data Capabilty</h4>
                        <p className="text-sm text-involve-muted leading-relaxed">
                            100% European hardware and software stack, making Involve highly attractive for dual-use (civil/defense) procurement in an era of deglobalization and data sovereignty concerns.
                        </p>
                    </div>
                    <div className="border-l-2 border-involve-cyan/50 pl-6 py-2">
                        <h4 className="text-involve-text font-medium mb-2 tracking-wide text-lg">4. Capital Efficiency</h4>
                        <p className="text-sm text-involve-muted leading-relaxed">
                            Achieving EO resolutions comparable to $50M satellites with platforms that cost less than $100k, shifting the space economy from CapEx-heavy infrastructure to high-margin Data-as-a-Service (DaaS).
                        </p>
                    </div>
                </div>
            </ContentBlock>

            <NextSectionCard
                title="Market Opportunity"
                description="Explore the $100B+ TAM across Earth Observation, Telecommunications, and Defense."
                path="/dataroom/01_Strategy_and_Market/market-opportunity"
            />
        </div>
    );
}
