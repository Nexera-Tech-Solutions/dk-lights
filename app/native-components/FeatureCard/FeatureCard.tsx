import React from "react";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FEATURES } from "./data";

const FeatureCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-content-center max-w-[1000px] mx-auto my-10 px-10">
            {FEATURES.map((feat, index) => {
                const Icon = feat.icon;

                return (
                    <Card key={index} className="rounded-sm">
                        <CardHeader>
                            <CardTitle className="flex flex-col gap-4">
                                <Icon size={28} />
                                {feat.title}
                            </CardTitle>
                        </CardHeader>
                        <CardDescription className="p-6 pt-0">
                            {feat.body}
                        </CardDescription>
                    </Card>
                );
            })}
        </div>
    );
};

export default FeatureCard;
