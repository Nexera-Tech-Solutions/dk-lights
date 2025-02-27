"use client";

import BestSellingProducts from "./native-components-2/BestSellingProducts/BestSellingProducts";
import CatalogDownload from "./native-components-2/CatalogDownload/CatalogDownload";
import HomeHeroSection from "./native-components-2/HomeHeroSection/HomeHeroSection";
import ProductCategoryCardSection from "./native-components-2/ProductCategory/ProductCategoryCardSection";
import Testimonials from "./native-components-2/Testimonials/Testimonials";
import { ContactForm } from "./native-components-2/ContactForm/ContactForm";
import { useState, useEffect } from "react";
import SplashScreen from "./native-components-2/SplashScreen/SplashScreen";

import "../cursor.css"; // Import the cursor styles
import CursorAnimation from "./native-components-2/CursorAnimation/CursorAnimation";
import VideoTextPreview from "./native-components-2/VideoTextEffect/VideoTextPreview";
import ProjectsShowcase from "./native-components-2/ProjectsShowcase/ProjectsShowcase";
import ScrollToTop from "./native-components-2/ScrollToTop/ScrollToTop";

export default function Home() {
  const [show, setShow] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Use this to ensure component only renders on client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (show) return <SplashScreen loading={show} setLoading={setShow} />;

  return (
    <div className="flex flex-col gap-36 text-black">
      {/* Add the CursorAnimation component */}
      {isClient && <CursorAnimation />}

      {/* Add the ScrollToTop component */}
      {isClient && <ScrollToTop />}

      {/* Hero section */}
      <section id="hero-section" className="w-full">
        <HomeHeroSection />
      </section>

      {/* Product Category */}
      <section id="product-category" className="w-full">
        <ProductCategoryCardSection />
      </section>

      <section id="video-preview-section">
        <VideoTextPreview />
      </section>

      <section id="best-sellers">
        <BestSellingProducts />
      </section>

      <section>
        <ProjectsShowcase />
      </section>

      {/* Testimonials */}
      <section id="footer-section">
        <Testimonials />
      </section>

      {/* Download Catalogue */}
      <div className="flex flex-row-reverse w-full justify-center items-center mt-20">
        <section id="download-catalogue">
          <CatalogDownload />
        </section>

        {/* Contact Form */}
        <section id="contact-form">
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
