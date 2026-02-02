import ChannelPartners from "./ChannelPatner"
import CompanyOverview from "./CompanyOverview"
import FAQSection from "./FAQSection"
import SolarHero from "./Herohm"
import Scroll from "./Scrooling"
import Testimonials from "./Testimonials"


const HomeMain = () => {
    return (
        <>
            <SolarHero />
            <CompanyOverview />
            <ChannelPartners />
            <Scroll/>
            <Testimonials />
            <FAQSection />
        </>
    )
}

export default HomeMain
