"use server";

import { z } from "zod";

const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits" }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters long" }),
});

export async function submitContactForm(formData: FormData) {
    const validatedFields = schema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            error: "There was an error submitting the form. Please try again.",
        };
    }

    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just log the data
    console.log(validatedFields.data);

    return { success: "Thank you for your message. We'll be in touch soon!" };
}
