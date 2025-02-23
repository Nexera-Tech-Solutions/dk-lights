import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";
import { TESTIMONIALS } from "./data";
import { range } from "@/lib/utils";
import { Star } from "lucide-react";

const Testimonials = () => {
    return (
        <div>
            <h3 className="w-fit pl-4 mx-auto text-2xl md:text-4xl font-bold text-black">
                Don&apos;t believe us? Hear from our Customers
            </h3>

            <div className="grid grid-cols-3 max-w-[1000px] mx-auto gap-12 my-10">
                {TESTIMONIALS.map((test, index) => (
                    <Card key={index} className="border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="mb-5 text-lg">{test.name}</CardTitle>
                            <CardDescription className="tracking-wide">{test.body}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            {range(test.stars).map((val) => (
                                <Star size={24} fill="black" key={val}/>
                            ))}
                            {range(5 - test.stars).map((val) => (
                                <Star size={24} key={val}/>
                            ))}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
