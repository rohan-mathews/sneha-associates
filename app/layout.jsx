import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. Load Professional Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// 2. SEO Metadata (This is what Google sees)
export const metadata = {
  title: "Sneha Associates | Premium Construction & Waterproofing in Bengaluru",
  description: "Established in 2005. Experts in civil construction, waterproofing, tiling, and swimming pool maintenance in Bengaluru. Get a free quote today.",
  icons: {
    icon: '/favicon.ico', // You can add a logo icon later
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-neutral-50 text-neutral-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}