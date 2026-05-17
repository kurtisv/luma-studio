import { EcosystemNotificationPanel } from "@/components/ecosystem/notification-panel";

const stats = [
  ["Rendez-vous aujourd'hui", "0"],
  ["Revenus du mois", "$0"],
  ["Requetes API du mois", "0"],
  ["Abonnements actifs", "0"],
];

const timeline = ["Luma Studio", "QuotePilot", "ReserveFlow", "ClientHub", "CommerceKit", "EventPass", "SupportDesk Lite", "API Meter"];

export default function DashboardPage() {
  return (
    <main className="px-6 py-10 text-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Dashboard
          </p>
          <p className="mt-2 inline-flex border bg-secondary px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            KV Portfolio Ecosystem - Demo Mode
          </p>
          <h1 className="mt-3 text-3xl font-semibold">Centre de controle</h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([label, value]) => (
            <section key={label} className="border bg-card p-5">
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="mt-3 text-2xl font-semibold">{value}</p>
            </section>
          ))}
        </div>
        <div className="mt-8">
          <EcosystemNotificationPanel appKey="luma-studio" />
        </div>
        <section className="mt-8 border bg-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Timeline du parcours</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
            {timeline.map((item, index) => (
              <span key={item} className={index === 0 ? "border bg-primary px-3 py-2 text-primary-foreground" : "border bg-background px-3 py-2"}>
                {String(index + 1).padStart(2, "0")} {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
