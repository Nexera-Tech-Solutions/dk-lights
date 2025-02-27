"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { submitContactForm } from "@/app/actions/contactForm.actions";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const ContactCatalogue = () => {
    const [formState, setFormState] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState("submitting");

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        const result = await submitContactForm(formDataToSend);

        if (result.error) {
            setFormState("error");
        } else {
            setFormState("success");
            toast.success("Success", {
                description: result.success,
            });
            // Clear form on success
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        }
    };

    return (
        <motion.div
            className="flex flex-row items-center w-fit mx-auto mt-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className="w-[500px] z-40 bg-white p-3 py-10 text-black rounded-md">
                <h3 className="w-fit pl-4 mx-auto text-xl md:text-2xl font-bold mb-5 underline">
                    Reach out to us
                </h3>

                <Button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full max-w-md  mx-auto rounded-sm bg-green-600 flex flex-row gap-3 text-md mb-5 font-bold hover:bg-green-700 transition-all"
                    size="lg"
                >
                    Message us on Whatsapp <IconBrandWhatsapp />
                </Button>

                <h3 className="w-fit pl-4 mx-auto text-lg md:text-2xl font-bold text-black">
                    or
                </h3>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-2 gap-5 max-w-md mx-auto mt-5"
                >
                    <div className="space-y-2 col-span-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="space-y-2 col-span-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="rounded-sm"
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="w-full rounded-sm"
                        size="lg"
                    >
                        {formState === "submitting"
                            ? "Submitting..."
                            : "Send Message"}
                    </Button>
                    {formState === "error" && (
                        <p className="text-red-500">
                            There was an error submitting the form. Please try
                            again.
                        </p>
                    )}
                    {formState === "success" && (
                        <p className="text-green-500">
                            Thank you for your message. We&apos;ll be in touch
                            soon!
                        </p>
                    )}
                </form>
            </div>
            <div className="h-fit w-fit -ml-32 relative">
                <Image
                    width={1000}
                    height={1000}
                    src="/global/random-catalogue-image.jpg"
                    alt="image of a catalogue"
                />
                <div className="absolute bottom-0 right-0 flex flex-col gap-4 py-8 px-10 bg-white w-full items-end bg-opacity-70 text-black">
                    <InteractiveHoverButton className="rounded-sm bg-white">
                        Download Our Catalogue
                    </InteractiveHoverButton>
                    <p className="max-w-[500px] text-xl text-right">
                        Explore our complete range of sustainable lighting
                        solutions. Our catalogue features detailed
                        specifications, dimensions, and design inspirations.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactCatalogue;
