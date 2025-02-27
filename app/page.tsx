"use client";

import BestSellingProducts from "./native-components-2/BestSellingProducts/BestSellingProducts";
import HomeHeroSection from "./native-components-2/HomeHeroSection/HomeHeroSection";
import ProductCategoryCardSection from "./native-components-2/ProductCategory/ProductCategoryCardSection";
import Testimonials from "./native-components-2/Testimonials/Testimonials";
import { useState, useEffect } from "react";
import SplashScreen from "./native-components-2/SplashScreen/SplashScreen";

import "../cursor.css"; // Import the cursor styles
import CursorAnimation from "./native-components-2/CursorAnimation/CursorAnimation";
import VideoTextPreview from "./native-components-2/VideoTextEffect/VideoTextPreview";
import ProjectsShowcase from "./native-components-2/ProjectsShowcase/ProjectsShowcase";
import ScrollToTop from "./native-components-2/ScrollToTop/ScrollToTop";
import ContactCatalogue from "./native-components-2/ContactCatalogue/ContactCatalogue";
import { motion } from "framer-motion";

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

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="w-fit pl-4 mx-auto text-3xl md:text-5xl font-bold text-black max-w-[700px] text-center leading-relaxed"
            >
                We shape light so our products could make the future brighter.
                Not darker.
            </motion.h2>

            {/* Product Category */}
            <section id="product-category" className="w-full">
                <ProductCategoryCardSection />
            </section>

            <section id="video-preview-section">
                <VideoTextPreview />
            </section>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="w-fit pl-4 mx-auto text-3xl md:text-5xl font-bold text-black max-w-[700px] text-center leading-relaxed"
            >
                We design our products carefully. From the hands of our
                designers right into yours.
            </motion.h2>

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

            <section id="contact-and-catalogue">
                {/* Catalogue and Contact Form */}
                <ContactCatalogue />
            </section>
        </div>
    );
}
