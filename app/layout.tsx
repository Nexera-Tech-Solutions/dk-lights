import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Header from "./native-components/Header/Header";
import Footer from "./native-components/Footer/Footer";

const manrope = Manrope({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${manrope.variable} antialiased`}>
                <Header />
                {children}
                <div className="flex flex-col gap-6 bg-black py-4">
                    <Footer />
                </div>
            </body>
        </html>
    );
}
