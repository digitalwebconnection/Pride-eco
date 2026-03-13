import BusinessVerticals from "./BusinessVerticals"
import ChannelPartners from "./ChannelPatner"
import CompanyHighlights from "./CompanyHighlights"
import CompanyOverview from "./CompanyOverview"
import FAQSection from "./FAQSection"
import SolarHero from "./Herohm"
import Leadership from "./Leadership"
import Scroll from "./Scrooling"
import Testimonials from "./Testimonials"
import WhyChooseSection from "./WhyChooseSection"


const HomeMain = () => {
    return (
        <>
            <SolarHero />
            <CompanyOverview />
            <CompanyHighlights />
            <ChannelPartners />
            <BusinessVerticals />
            <Scroll />
            <WhyChooseSection />
            <Leadership/>
            <Testimonials />
            <FAQSection />
        </>
    )
}

export default HomeMain
