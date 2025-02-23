import HomeHeroSection from "./native-components-2/HomeHeroSection/HomeHeroSection";
import CatalogDownload from "./native-components-2/CatalogDownload/CatalogDownload";
import { ContactForm } from "./native-components-2/ContactForm/ContactForm";
import Footer from "./native-components-2/Footer/Footer";
import BestSellingProducts from "./native-components-2/BestSellingProducts/BestSellingProducts";
import Testimonials from "./native-components-2/Testimonials/Testimonials";

export default function Home() {
    return (
        <section id="home-page" className="space-y-20">
            {/* Header in layout */}

            {/* Hero Section */}
            <section id="hero-section" className="w-full">
                <HomeHeroSection />
            </section>

            {/* Product Category */}

            {/* Best Selling Products */}
            <section id="best-sellers">
                <BestSellingProducts />
            </section>

            {/* Testimonials */}
            <section id="footer-section">
                <Testimonials />
            </section>

            {/* Download Catalogue */}
            <section id="download-catalogue">
                <CatalogDownload />
            </section>

            {/* About US */}

            {/* Contact Form */}
            <ContactForm />

            {/* Footer in layout */}
        </section>
    );
}
