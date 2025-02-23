import HomeHeroSection from "./native-components-2/HomeHeroSection/HomeHeroSection";
import CatalogDownload from "./native-components-2/CatalogDownload/CatalogDownload";
import Footer from "./native-components-2/Footer/Footer";
import BestSellingProducts from "./native-components-2/BestSellingProducts/BestSellingProducts";
import ProductCategoryCardSection from "./native-components-2/ProductCategory/ProductCategoryCardSection";

export default function Home() {
  return (
    <div>
      {/* Header in layout */}

      {/* Hero Section */}
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
