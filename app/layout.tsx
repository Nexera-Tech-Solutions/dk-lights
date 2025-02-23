/* commit to start dev deployment */
import type { Metadata } from "next";
import { Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";
import Header from "./native-components-2/Header/Header";
import { Toaster } from "@/components/ui/sonner";
import Footer from "./native-components-2/Footer/Footer";

const shipporiMincho = Shippori_Mincho_B1({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
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
            <body className={`${shipporiMincho.className} antialiased`}>
                <Header />
                {children}
                <Footer />
                <Toaster className="dark" />
            </body>
        </html>
    );
}
