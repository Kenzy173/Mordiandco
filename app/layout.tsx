import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SiteCTA from "@/components/SiteCTA";
import Footer from "@/components/Footer";
import RouteTransition from "@/components/RouteTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mordiandco.com"),
  title: {
    default: "Mordi & Co Solicitors | Excellence in Legal Services",
    template: "%s | Mordi & Co Solicitors",
  },
  description:
    "A reputable UK law firm providing bespoke legal services: Criminal, Immigration, Commercial, Property, Family, Wills & Probate, Civil Litigation, Oil & Gas.",
  openGraph: {
    title: "Mordi & Co Solicitors",
    description:
      "Trusted legal partners across Criminal, Immigration, Commercial, Property, Family, Wills & Probate, Civil Litigation, Oil & Gas.",
    url: "/",
    siteName: "Mordi & Co Solicitors",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${montserrat.variable} antialiased`}>
        <Header />
        <main className="min-h-[60vh]">
          <RouteTransition>
            {children}
          </RouteTransition>
        </main>
        <SiteCTA />
        <Footer />
      </body>
    </html>
  );
}
