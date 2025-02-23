import BestSellingProducts from "./native-components-2/BestSellingProducts/BestSellingProducts";
import CatalogDownload from "./native-components/CatalogDownload/CatalogDownload";
import Footer from "./native-components/Footer/Footer";

export default function Home() {
  return (
    <div>
      {/* Header in layout */}
      {/* Hero Section */}

      {/* Product Category */}

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
