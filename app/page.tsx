import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { KpiCard } from "./components/KpiCard";
import { OverviewChart } from "./components/OverviewChart";
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 space-y-6">
          {/* KPI Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <KpiCard title="Gesamtumsatz" value="€45.231" change="+12.5%" isPositive={true} icon={DollarSign} />
            <KpiCard title="Neue Kunden" value="+2.350" change="+18.2%" isPositive={true} icon={Users} />
            <KpiCard title="Bestellungen" value="1.210" change="-3.1%" isPositive={false} icon={ShoppingCart} />
            <KpiCard title="Konversion" value="3.42%" change="+4.1%" isPositive={true} icon={TrendingUp} />
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <OverviewChart />
            </div>
            <div className="p-6 rounded-xl border border-border bg-card shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Aktivitäten</h3>
              <p className="text-sm text-muted-foreground">Hier folgen die neuesten Transaktionen...</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}