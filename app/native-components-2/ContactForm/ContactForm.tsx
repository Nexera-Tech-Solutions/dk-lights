"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { submitContactForm } from "@/app/actions/contactForm.actions";
import { IconBrandWhatsapp } from "@tabler/icons-react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export function ContactForm() {
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
        <div className="my-10 space-y-10">
            <h3 className="w-fit pl-4 mx-auto text-2xl md:text-4xl font-bold text-black">
                Have some questions? Don&apos;t hesitate to reach out to us
            </h3>

            <Button
                type="submit"
                disabled={formState === "submitting"}
                className="w-md mx-auto rounded-sm bg-green-600 flex flex-row gap-3 text-md font-bold hover:bg-green-500"
                size="lg"
            >
                Message us on Whatsapp <IconBrandWhatsapp />
            </Button>

            <h3 className="w-fit pl-4 mx-auto text-lg md:text-2xl font-bold text-black">
                or
            </h3>

            <form
                onSubmit={handleSubmit}
                className="space-y-8 max-w-md mx-auto mt-10"
            >
                <div className="space-y-2">
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
                <div className="space-y-2">
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
                        Thank you for your message. We&apos;ll be in touch soon!
                    </p>
                )}
            </form>
        </div>
    );
}
