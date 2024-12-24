import type { Metadata } from "next";

//Font Name
import { Josefin_Sans, Lato } from "next/font/google";
import "./globals.css";

//Importing Header and Footer
import Header from "@/shared/Header/Header";
import Footer from "@/shared/Footer/Footer";


//Font1
const mainFont = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

//Font2
const subFont = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hekto-Ecommerce Website",
  description: "Created By Melvin Thomas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} ${subFont.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
