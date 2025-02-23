import HomeHeroSection from "./native-components-2/HomeHeroSection/HomeHeroSection";
import CatalogDownload from "./native-components-2/CatalogDownload/CatalogDownload";
import Footer from "./native-components-2/Footer/Footer";
import BestSellingProducts from "./native-components-2/BestSellingProducts/BestSellingProducts";
import Testimonials from "./native-components-2/Testimonials/Testimonials";

export default function Home() {
    return (
        <div>
            {/* Header in layout */}

            {/* Product Category */}
            <section id="hero-section" className="w-full">
                <HomeHeroSection />
            </section>

            {/* Hero Section */}

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

            {/* Footer in layout */}
            <section id="footer-section">
                <Footer />
            </section>
        </div>
    );
}
