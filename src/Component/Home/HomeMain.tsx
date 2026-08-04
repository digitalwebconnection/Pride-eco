/**
 * @file HomeMain.tsx
 * @description The primary layout and structural wrapper for the single-page application's homepage.
 * This component orchestrates all the individual sections (Hero, About, Services, etc.) and assigns
 * unique IDs to them to enable seamless hash-based scrolling navigation from the Header.
 */

// --- Section Component Imports ---

// 1. Hero Section: The main landing view with a background image slider and primary call-to-actions.
import SolarHero from "./Herohm"

// 2. Company Overview: A brief introduction to Pride Eco Trade and its mission.
import CompanyOverview from "./CompanyOverview"

// 3. Company Highlights: Key statistics, experience, and milestones of the company.
import CompanyHighlights from "./CompanyHighlights"

// 4. Channel Partners: Displays logos and information about trusted partners (e.g., Adani, Microtek).
import ChannelPartners from "./ChannelPatner"

// 5. Business Verticals: Details the core services offered (Solar Distribution, EPC Services, etc.).
import BusinessVerticals from "./BusinessVerticals"

// 6. Scrolling Ticker: A dynamic, continuously scrolling banner for announcements or partner logos.
import Scroll from "./Scrooling"

// 7. Why Choose Us: Highlights the unique value propositions and competitive advantages.
import WhyChooseSection from "./WhyChooseSection"

// 8. Leadership: Introduces the executive team and managing partners (e.g., Mr. Shiva Dixit).
import Leadership from "./Leadership"

// 9. Testimonials: Client reviews and feedback to build trust and social proof.
import Testimonials from "./Testimonials"

// 10. FAQ Section: Frequently asked questions to address common customer inquiries.
import FAQSection from "./FAQSection"

const HomeMain = () => {
    return (
        <main>
            {/* Landing area with the image carousel. Navigable via hash link /#home */}
            <section id="home" className="scroll-mt-32">
                <SolarHero />
            </section>
            
            {/* Mission statement and introductory content. Navigable via hash link /#about */}
            <section id="about" className="scroll-mt-32">
                <CompanyOverview />
            </section>
            
            {/* Key company statistics and achievements. Navigable via hash link /#highlights */}
            <section id="highlights" className="scroll-mt-32">
                <CompanyHighlights />
            </section>
            
            {/* Authorized channel partner showcase. Navigable via hash link /#partners */}
            <section id="partners" className="scroll-mt-32">
                <ChannelPartners />
            </section>
            
            {/* Detailed list of services and operational sectors. Navigable via hash link /#services */}
            <section id="services" className="scroll-mt-32">
                <BusinessVerticals />
            </section>
            
            {/* Animated infinite scrolling banner (structural divider) */}
            <Scroll />  
            
            {/* Competitive advantages and business values. Navigable via hash link /#why-choose */}
            <section id="why-choose" className="scroll-mt-32">
                <WhyChooseSection />
            </section>
            
            {/* Executive leadership and team profiles. Navigable via hash link /#leadership */}
            <section id="leadership" className="scroll-mt-32">
                <Leadership />
            </section>
            
            {/* Customer success stories and reviews. Navigable via hash link /#testimonials */}
            <section id="testimonials" className="scroll-mt-32 mx-2">
                <Testimonials />
            </section>
            
            {/* Frequently asked questions and answers. Navigable via hash link /#faq */}
            <section id="faq" className="scroll-mt-32">
                <FAQSection />
            </section>
        </main>
    )
}

export default HomeMain
