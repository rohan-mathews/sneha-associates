import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata = {
  title: "Sneha Associates | Premium Tiling & Contracts",
  description: "Specialized in luxury flooring, bathroom tiling, and commercial contract solutions in Bangalore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-neutral-50 text-neutral-900`}>
        {children}
      </body>
    </html>
  );
}