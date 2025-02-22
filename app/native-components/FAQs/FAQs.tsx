"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useState } from "react";
import { homePageFAQData } from "./data";

const FAQs = ({
  content = homePageFAQData,
  handleFAQClick,
}: {
  content?: { heading: string; description: string }[];
  handleFAQClick?: (heading: string) => void;
}) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const handleToggle = (index: string, heading: string) => {
    setOpenIndex(openIndex === index ? null : index);
    if (handleFAQClick) handleFAQClick(heading);
  };

  return (
    <section className="flex flex-col max-w-[60rem] mx-auto w-full gap-y-4 bg-white py-10">
      <h2 className="text-neutral900 text-[1.4rem] text-center">
        Frequently asked <span className="text-primaryA2">questions</span>
      </h2>
      <div className="p-1">
        <Accordion type="single" collapsible>
          {content.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger
                onClick={() => handleToggle(`faq-${index}`, faq.heading)}
              >
                {faq.heading}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-neutral300">{faq.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
