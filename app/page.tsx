import CatalogDownload from "./native-components/CatalogDownload/CatalogDownload";
import FAQs from "./native-components/FAQs/FAQs";
import FeatureCard from "./native-components/FeatureCard/FeatureCard";
import HomeHeroSection from "./native-components/HomeHeroSection/HomeHeroSection";
import Testimonial from "./native-components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section id="hero-section">
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

      {/* Features section */}
      <section id="features" className="w-full">
        <CatalogDownload />
      </section>

      {/* FAQ Section */}
      <div id="faqs" className="w-full">
        <FAQs />
      </div>
    </div>
  );
}
