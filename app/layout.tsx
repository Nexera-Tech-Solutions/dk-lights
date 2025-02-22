import type { Metadata } from "next";
import "./globals.css";
import Header from "./native-components/Header/Header";
import Footer from "./native-components/Footer/Footer";
import FAQs from "./native-components/FAQs/FAQs";

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
      <body>
        <Header />
        {children}
        <div>
          <FAQs />
        </div>
        <div className="flex flex-col gap-6 bg-black py-4">
          <Footer />
        </div>
      </body>
    </html>
  );
}
