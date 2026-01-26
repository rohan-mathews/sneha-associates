import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. Load Professional Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// 2. SEO Metadata (This controls the Browser Tab)
export const metadata = {
  title: "Sneha Associates | Premium Tiling & Civil Contractors",
  description: "Expert civil construction, waterproofing, and swimming pool contractors in Bengaluru. Founded by C.J. Mathews.",
  icons: {
    icon: '/logo-sa.png',      // 👈 Standard Browser Tab Icon
    shortcut: '/logo-sa.png',  // 👈 For Windows Shortcuts
    apple: '/logo-sa.png',     // 👈 For iPhone/iPad Home Screen (This will look BIG and good!)
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