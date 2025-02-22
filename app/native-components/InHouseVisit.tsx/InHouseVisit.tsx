import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const InHouseVisit = () => {
    return (
        <Card className="dark p-4 rounded-sm my-10 mx-3 lg:mx-auto max-w-[800px]">
            <CardContent className="w-fit p-0 flex flex-col-reverse lg:flex-row gap-2 items-center lg:items-start">
                <Image
                    src="/global/random-building-1.jpg"
                    alt="office photo"
                    width={360}
                    height={500}
                    className="rounded-sm"
                />

                <div className="text-center md:text-left">
                    <CardHeader className="font-extrabold text-xl">
                        View our collections in house
                    </CardHeader>
                    <CardDescription className="mx-6">
                        Visit our showroom and witness cutting-edge lighting
                        innovations, from smart ambient solutions to handcrafted
                        masterpieces. Let's illuminate your space with
                        brilliance!
                    </CardDescription>
                    <CardContent className="my-2">
                        <Button
                            size="lg"
                            className="mt-5 rounded-sm font-semibold group"
                        >
                            Visit us in Delhi
                            <ArrowRight className="group-hover:translate-x-1 transition-all" />
                        </Button>
                    </CardContent>
                </div>
            </CardContent>
        </Card>
    );
};

export default InHouseVisit;
