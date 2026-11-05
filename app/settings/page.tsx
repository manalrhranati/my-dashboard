import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-2">Einstellungen</h2>
          <p className="text-muted-foreground mb-6">Verwalte deine Profil- und Systemeinstellungen.</p>
          
          <div className="p-6 rounded-xl border border-border bg-card shadow-sm space-y-4">
            <h3 className="font-semibold text-lg">Konto-Einstellungen</h3>
            <p className="text-sm text-muted-foreground">Passe hier deine Benachrichtigungen, Sicherheit und Integrationen an.</p>
          </div>
        </main>
      </div>
    </div>
  );
}