"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mär", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "Mai", revenue: 6000 },
  { month: "Jun", revenue: 8000 },
  { month: "Jul", revenue: 9500 },
];

export function OverviewChart() {
  return (
    <div className="p-6 rounded-xl border border-border bg-card shadow-sm space-y-4">
      <h3 className="font-semibold text-lg">Umsatzentwicklung</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="month" stroke="#888888" fontSize={12} />
            <YAxis stroke="#888888" fontSize={12} tickFormatter={(val) => `€${val}`} />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}