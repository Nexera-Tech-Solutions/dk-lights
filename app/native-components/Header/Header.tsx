"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { PRODUCT_CATEGORIES } from "./data";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const Header = () => {
    const [imageOnHeader, setImageOnHeader] = useState<string>("");

    return (
        <div className="w-full">
            <header className="hidden md:flex max-w-[980px] mx-auto pt-3 flex-row justify-between items-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/"
                                className="font-semibold"
                            >
                                Home
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <Link href="/">
                    <h3 className="text-lg font-bold">DK LIGHTS</h3>
                </Link>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/contact"
                                className="font-semibold"
                            >
                                Contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </header>

            <div className="max-w-[1100px] flex flex-row gap-3 px-3 mx-auto items-center">
                <hr className="h-[1px] bg-black flex-1" />
                X
                <hr className="h-[1px] bg-black flex-1" />
            </div>

            <header className="hidden lg:block w-full mx-auto py-2">
                <NavigationMenu className="mx-auto max-w-[1000px]">
                    <NavigationMenuList>
                        {PRODUCT_CATEGORIES.map((category, index) => (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuTrigger
                                    className="font-semibold"
                                    onMouseEnter={() =>
                                        setImageOnHeader(
                                            category.subcategories[0].imageHref
                                        )
                                    }
                                >
                                    {category.label}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="flex felx-row gap-4 p-2 w-[1000px]">
                                        <div className="flex flex-col gap-2 w-[300px]">
                                            {category.subcategories.map(
                                                (subcat, index) => (
                                                    <ListItem
                                                        href={subcat.href}
                                                        title={subcat.label}
                                                        key={index}
                                                        onMouseEnter={() =>
                                                            setImageOnHeader(
                                                                subcat.imageHref
                                                            )
                                                        }
                                                    />
                                                )
                                            )}
                                        </div>
                                        <Image
                                            src={imageOnHeader}
                                            alt="image hovered over"
                                            width={700}
                                            height={700}
                                            className="rounded-md shadow-inner"
                                        />
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </header>
        </div>
    );
};

const ListItem = React.forwardRef<
    React.ComponentRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <NavigationMenuLink asChild className="group">
            <a
                ref={ref}
                className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                )}
                {...props}
            >
                <div className="text-sm font-medium leading-none flex flex-row justify-between items-center">
                    {title || children}{" "}
                    <ChevronRight
                        size={12}
                        className="group-hover:translate-x-1 transition-all"
                    />
                </div>
            </a>
        </NavigationMenuLink>
    );
});

ListItem.displayName = "ListItem";

export default Header;
