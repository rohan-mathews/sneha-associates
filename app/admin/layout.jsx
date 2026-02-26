"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  LineChart, 
  CreditCard, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Leads & Enquiries", href: "/admin/leads", icon: Users },
  { name: "Invoices", href: "/admin/invoices", icon: FileText },
  { name: "Analytics & SEO", href: "/admin/analytics", icon: LineChart },
  { name: "Payments", href: "/admin/payments", icon: CreditCard },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] flex">
      
      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-neutral-900 rounded-md shadow-md text-neutral-900 dark:text-white"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-[#111] border-r border-gray-200 dark:border-neutral-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-neutral-800">
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl text-neutral-900 dark:text-white">Sneha<span className="text-orange-500">Admin</span></span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mt-1">Command Center</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-neutral-500 hover:text-orange-500">
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                  isActive 
                  ? "bg-orange-500/10 text-orange-600 dark:text-orange-500 border border-orange-500/20" 
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                <Icon size={18} className={isActive ? "text-orange-500" : "text-neutral-400"} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-neutral-800">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors font-medium text-sm">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 p-6 md:p-10 transition-all">
        {children}
      </main>
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}