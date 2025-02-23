import BestSellingProducts from "./native-components-2/BestSellingProducts/BestSellingProducts";
import CatalogDownload from "./native-components-2/CatalogDownload/CatalogDownload";
import HomeHeroSection from "./native-components-2/HomeHeroSection/HomeHeroSection";
import ProductCategoryCardSection from "./native-components-2/ProductCategory/ProductCategoryCardSection";
import Testimonials from "./native-components-2/Testimonials/Testimonials";
import { ContactForm } from "./native-components-2/ContactForm/ContactForm";
import FeatureCard from "./native-components/FeatureCard/FeatureCard";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section id="hero-section" className="w-full">
        <HomeHeroSection />
      </section>

      {/* Product Category */}
      <section id="product-category" className="w-full">
        <ProductCategoryCardSection />
      </section>

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

      {/* Contact Form */}
      <section id="contact-form">
        <ContactForm />
      </section>
    </div>
  );
}
