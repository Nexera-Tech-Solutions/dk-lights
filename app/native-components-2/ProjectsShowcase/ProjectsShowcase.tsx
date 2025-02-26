import Image from "next/image";
import Link from "next/link";
import { availableClients } from "./data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const ProjectsShowcase = () => {
  return (
    <section className="w-full py-16 relative">
      {/* Main showcase with image and text overlay */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="w-fit pl-4 mx-auto text-2xl md:text-5xl font-bold text-black max-w-[700px] text-center pt-20 mb-20">
          Some of our Projects
        </h2>
      </motion.div>
      <div className="relative w-full max-w-6xl mx-auto mb-16">
        <div className="relative w-[80%] h-[500px] overflow-hidden">
          {/* Background image */}
          <Image
            src="/global/random-image-1.jpg"
            alt="Modern interior space with sofa and furniture"
            fill
            className="rounded-sm"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Project description card */}
        <div className="absolute right-[-20px] z-10 top-1/2 transform -translate-y-1/2 bg-white  p-8 w-[40%]  rounded-sm">
          <h2 className="text-3xl font-bold text-gray-700 mb-4 ">Projects</h2>
          <p className="text-gray-600 mb-6">
            We work closely with architects, interior designers, stylists and
            consultants to translate their vision through light and our
            sustainable material palette. Our bespoke light installations
            celebrate form and function in equal measure, infusing a space with
            character.
          </p>
          <Link href="/projects">
            <InteractiveHoverButton className=" rounded-sm flex items-center gap-2 bg-white">
              View
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>

      {/* Client logos */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-[70px] items-center">
          {availableClients.map((client) => (
            <div
              key={client.name}
              className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300 rounded-[12px] overflow-hidden"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-[15px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
