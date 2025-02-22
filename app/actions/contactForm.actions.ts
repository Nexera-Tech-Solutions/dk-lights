"use server";

import { z } from "zod";

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    mobileNumber: z.string().regex(/^\d{10}$/, {
        message: "Invalid mobile number. Must be exactly 10 digits.",
    }),
    query: z
        .string()
        .min(10, { message: "Query must be at least 10 characters." }),
});

export async function submitContactForm(
    prevState: { errors: Record<string, string[]>; message?: string },
    formData: FormData
) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const mobileNumber = formData.get("mobileNumber") as string;
    const query = formData.get("query") as string;

    const validatedFields = contactFormSchema.safeParse({
        name,
        email,
        mobileNumber,
        query,
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            values: { name, email, mobileNumber, query },
        };
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would typically save the data to a database
    // For this example, we'll just return a success message
    return {
        message: "Thank you for your message. We will get back to you soon!",
        errors: {},
        values: {},
    };
}
