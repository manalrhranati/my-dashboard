import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export function KpiCard({ title, value, change, isPositive, icon: Icon }: KpiCardProps) {
  return (
    <div className="p-5 rounded-xl border border-border bg-card shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
        <div className="p-2 rounded-lg bg-accent text-accent-foreground">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs mt-1 font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
          {change} <span className="text-muted-foreground">vs. Vormonat</span>
        </p>
      </div>
    </div>
  );
}