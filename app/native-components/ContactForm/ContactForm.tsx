"use client";

import React from "react";
import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contactForm.actions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const initialState = {
    errors: {},
    message: "",
    values: {},
};

const ContactForm = () => {
    const [state, formAction, pending] = useActionState(
        //@ts-expect-error its just a weirs error idk
        submitContactForm,
        initialState
    );

    return (
        <div className="max-w-[400px] my-20 mx-auto px-2">
            <h4 className="text-xl font-extrabold">
                Don{`&apos`}t hesitate to reach out to us
            </h4>

            <form action={formAction} className="space-y-3">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        required
                        defaultValue={state?.values?.name || ""}
                    />
                    {state?.errors?.name && (
                        <p className="text-sm text-red-500">
                            {state.errors.name[0]}
                        </p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        defaultValue={state?.values?.email || ""}
                        required
                    />
                    {state?.errors?.email && (
                        <p className="text-sm text-red-500">
                            {state.errors.email[0]}
                        </p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="mobileNumber">Mobile Number</Label>
                    <Input
                        id="mobileNumber"
                        name="mobileNumber"
                        type="tel"
                        defaultValue={state?.values?.mobileNumber || ""}
                        required
                    />
                    {state?.errors?.mobileNumber && (
                        <p className="text-sm text-red-500">
                            {state.errors.mobileNumber[0]}
                        </p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="query">Query</Label>
                    <Textarea
                        id="query"
                        name="query"
                        defaultValue={state?.values?.query || ""}
                        required
                    />
                    {state?.errors?.query && (
                        <p className="text-sm text-red-500">
                            {state.errors.query[0]}
                        </p>
                    )}
                </div>

                <Button type="submit" disabled={pending}>
                    {pending ? "Submitting..." : "Submit"}
                </Button>

                {state?.message && (
                    <p className="mt-4 text-green-500">{state.message}</p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
