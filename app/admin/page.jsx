"use client";
import { ArrowUpRight, Users, CreditCard, Activity, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  // Dummy data for the UI
  const stats = [
    { title: "Total Enquiries", value: "124", trend: "+12%", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { title: "Pending Invoices", value: "₹4.5L", trend: "3 Due", icon: CreditCard, color: "text-orange-500", bg: "bg-orange-500/10" },
    { title: "Website Visitors", value: "2,845", trend: "+24%", icon: Activity, color: "text-green-500", bg: "bg-green-500/10" },
    { title: "Conversion Rate", value: "4.2%", trend: "+1.1%", icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Welcome back, CJ.</h1>
        <p className="text-neutral-500 dark:text-neutral-400">Here is what is happening with Sneha Associates today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <Icon size={24} className={stat.color} />
                </div>
                <span className="flex items-center text-xs font-semibold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-md">
                  {stat.trend} <ArrowUpRight size={14} className="ml-1" />
                </span>
              </div>
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium mb-1">{stat.title}</p>
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">{stat.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions & Recent Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Quick Actions */}
        <div className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm lg:col-span-1">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-neutral-900 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-500/10 hover:text-orange-600 transition-colors text-sm font-medium border border-transparent hover:border-orange-200 dark:hover:border-orange-500/20">
              + Generate New Invoice
            </button>
            <button className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-neutral-900 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-500/10 hover:text-orange-600 transition-colors text-sm font-medium border border-transparent hover:border-orange-200 dark:hover:border-orange-500/20">
              + Add Portfolio Project
            </button>
            <button className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-neutral-900 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-500/10 hover:text-orange-600 transition-colors text-sm font-medium border border-transparent hover:border-orange-200 dark:hover:border-orange-500/20">
              Check Payment Gateway
            </button>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Recent Website Enquiries</h3>
            <button className="text-sm text-orange-500 font-medium hover:underline">View All</button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: "Rahul Verma", project: "Villa Construction", location: "Whitefield", time: "2 hours ago" },
              { name: "Priya Menon", project: "Waterproofing", location: "Indiranagar", time: "5 hours ago" },
              { name: "Karthik R.", project: "Swimming Pool", location: "Sarjapur", time: "1 day ago" },
            ].map((lead, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white text-sm">{lead.name}</h4>
                  <p className="text-xs text-neutral-500">{lead.project} • {lead.location}</p>
                </div>
                <span className="text-xs font-medium text-neutral-400 bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded-md">
                  {lead.time}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}