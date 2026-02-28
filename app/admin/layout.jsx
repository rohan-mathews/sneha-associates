"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, FileText, Users, LineChart, CreditCard, 
  Settings, LogOut, Menu, X, Lock, ArrowRight 
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
  
  // --- AUTHENTICATION STATE ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // Check if user already logged in previously
  useEffect(() => {
    const auth = localStorage.getItem("sneha_admin_auth");
    if (auth === "true") setIsAuthenticated(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // 🛑 YOUR MASTER PASSWORD (Change this later!)
    if (password === "Sneha@2026") {
      setIsAuthenticated(true);
      localStorage.setItem("sneha_admin_auth", "true");
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("sneha_admin_auth");
  };

  // --- LOGIN SCREEN (If not authenticated) ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#050505] p-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="w-full max-w-md bg-white dark:bg-[#111] rounded-3xl shadow-2xl border border-gray-100 dark:border-neutral-800 p-10 relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-orange-200 dark:border-orange-500/20">
              <Lock size={32} className="text-orange-500" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-neutral-900 dark:text-white mb-2">SnehaAdmin Portal</h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Enter your master password to access the command center.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input 
                type="password" 
                placeholder="Enter Master Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-neutral-900 border ${error ? 'border-red-500 outline-red-500' : 'border-gray-200 dark:border-neutral-800 focus:outline-orange-500'} text-neutral-900 dark:text-white transition-all`}
              />
              {error && <p className="text-red-500 text-xs mt-2 font-medium">Incorrect password. Please try again.</p>}
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-orange-500/30"
            >
              Secure Login <ArrowRight size={20} />
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-neutral-400 hover:text-orange-500 transition-colors">
              &larr; Back to public website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- ADMIN DASHBOARD (If authenticated) ---
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

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-neutral-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors font-medium text-sm"
          >
            <LogOut size={18} />
            Secure Logout
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