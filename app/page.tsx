import FeatureCard from "./native-components/FeatureCard/FeatureCard";
import Testimonial from "./native-components/Testimonial/Testimonial";

export default function Home() {
    return (
        <div>
            {/* Hero section */}


            {/* Features section */}
            <section id="features" className="w-full">
                <FeatureCard />
            </section>

            {/* Testimonial Marquee */}
            <section id="testimaonial-marquee">
                <Testimonial />
            </section>
        </div>
    );
}
