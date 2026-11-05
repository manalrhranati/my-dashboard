import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export default function KundenPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-2">Kundenverwaltung</h2>
          <p className="text-muted-foreground mb-6">Übersicht aller registrierten Kunden und deren Status.</p>
          
          <div className="p-6 rounded-xl border border-border bg-card shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Kundenliste</h3>
            <p className="text-sm text-muted-foreground">Hier kann eine Tabelle mit Kundendaten und Filtern integriert werden.</p>
          </div>
        </main>
      </div>
    </div>
  );
}