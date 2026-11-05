import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-2">Analytics</h2>
          <p className="text-muted-foreground mb-6">Detaillierte Einblicke in deine Nutzerdaten und Statistiken.</p>
          
          <div className="p-6 rounded-xl border border-border bg-card shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Erweiterte Auswertungen</h3>
            <p className="text-sm text-muted-foreground">Hier können tiefergehende Diagramme und Berichte platziert werden.</p>
          </div>
        </main>
      </div>
    </div>
  );
}