import ContactForm from "./native-components/ContactForm/ContactForm";
import FAQs from "./native-components/FAQs/FAQs";
import FeatureCard from "./native-components/FeatureCard/FeatureCard";
import HomeHeroSection from "./native-components/HomeHeroSection/HomeHeroSection";
import InHouseVisit from "./native-components/InHouseVisit.tsx/InHouseVisit";
import Testimonial from "./native-components/Testimonial/Testimonial";

export default function Home() {
    return (
        <div>
            {/* Hero section */}
            <section id="hero-section" className="w-full">
                <HomeHeroSection />
            </section>

            {/* Features section */}
            <section id="features" className="w-full">
                <FeatureCard />
            </section>

            {/* Testimonial Marquee */}
            <section id="testimaonial-marquee">
                <Testimonial />
            </section>

            {/* In House Section */}
            <section>
                <InHouseVisit />
            </section>

            {/* FAQ Section */}
            <section id="faqs">
                <FAQs />
            </section>

            {/* Contaact Form */}
            <section>
                <ContactForm />
            </section>
        </div>
    );
}
