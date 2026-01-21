import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. Load Professional Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// 2. SEO Metadata (This is what Google & Browsers see)
export const metadata = {
  title: "Sneha Associates | Premium Construction & Waterproofing",
  description: "Established in 2005. Experts in civil construction, waterproofing, tiling, and swimming pool maintenance in Bengaluru.",
  icons: {
    icon: '/icon.png', // <--- Points directly to your logo in the public folder
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