import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; 

// 👇 1. IMPORT VERCEL ANALYTICS HERE
import { Analytics } from '@vercel/analytics/react'; 

// 1. Load Professional Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// 2. SEO Metadata (Kept exactly the same)
export const metadata = {
  title: "Sneha Associates | Premium Tiling & Civil Contractors",
  description: "Expert civil construction, waterproofing, and swimming pool contractors in Bengaluru. Founded by C.J. Mathews.",
  icons: {
    icon: '/logo-sa.png',      
    shortcut: '/logo-sa.png',  
    apple: '/logo-sa.png',     
  },
};

export default function RootLayout({ children }) {
  return (
    // 1. Added suppressHydrationWarning (Required for next-themes)
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-neutral-50 text-neutral-900 antialiased`}>
        
        {/* 2. Wrapped the app in Providers so Dark Mode works everywhere */}
        <Providers>
            {children}
        </Providers>
        
        {/* 👇 3. INVISIBLE TRACKER ADDED HERE */}
        <Analytics />
        
      </body>
    </html>
  );
}