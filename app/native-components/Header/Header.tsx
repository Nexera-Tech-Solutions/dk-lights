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
import { NAVLINKS, PRODUCT_CATEGORIES } from "./data";
import ThemeToggle from "@/components/comp-182";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const Header = () => {
    const [imageOnHeader, setImageOnHeader] = useState<string>("");

    return (
        <div className="w-full  shadow-sm">
            <header className="hidden md:flex max-w-[1000px] mx-auto py-3 flex-row justify-between items-center">
                <Link href="/">
                    <Image
                        src="/global/logo.jpeg"
                        alt="logo"
                        width={50}
                        height={50}
                        className="rounded-full aspect-square object-cover"
                    />
                </Link>

                <NavigationMenu className="ml-auto mr-5">
                    <NavigationMenuList>
                        {NAVLINKS.map((navlink, index) => (
                            <NavigationMenuItem key={index}>
                                <Link
                                    href={navlink.href}
                                    legacyBehavior
                                    passHref
                                >
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <span className="font-bold">
                                            {navlink.label}
                                        </span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <ThemeToggle />
            </header>

            <header className="hidden lg:block w-full mx-auto py-2 dark bg-black">
                <NavigationMenu className="mx-auto max-w-[1000px] text-white">
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
