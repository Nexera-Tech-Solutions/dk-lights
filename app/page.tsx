"use client";

import BestSellingProducts from "./native-components-2/BestSellingProducts/BestSellingProducts";
import CatalogDownload from "./native-components-2/CatalogDownload/CatalogDownload";
import HomeHeroSection from "./native-components-2/HomeHeroSection/HomeHeroSection";
import ProductCategoryCardSection from "./native-components-2/ProductCategory/ProductCategoryCardSection";
import Testimonials from "./native-components-2/Testimonials/Testimonials";
import { ContactForm } from "./native-components-2/ContactForm/ContactForm";
import { useState } from "react";
import SplashScreen from "./native-components-2/SplashScreen/SplashScreen";

export default function Home() {
    const [show, setShow] = useState(true);

    if (show) return <SplashScreen loading={show} setLoading={setShow} />;

    return (
        <div className="flex flex-col gap-52">
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
