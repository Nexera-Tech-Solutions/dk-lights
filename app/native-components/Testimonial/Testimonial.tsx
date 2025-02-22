import React from 'react'
import { Marquee } from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';
import { FIRST_ROW_TESTIMONIALS, SECOND_ROW_TESTIMONIALS } from './data';
import Image from 'next/image';

const ReviewCard = ({
    img,
    name,
    body,
}: {
    img: string;
    name: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-sm border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full object-cover aspect-square"
                    width={40}
                    height={40}
                    alt={`${name} testimonial`}
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-semibold dark:text-white">
                        {name}
                    </figcaption>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};


const Testimonial = () => {
    return (
        <div className="relative flex max-w-[1000px] mx-auto flex-col items-center justify-center overflow-hidden py-10">
            <Marquee pauseOnHover className="[--duration:20s]">
                {FIRST_ROW_TESTIMONIALS.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {SECOND_ROW_TESTIMONIALS.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}

export default Testimonial