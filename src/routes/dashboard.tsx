import { createFileRoute, Link } from "@tanstack/react-router";
import { AppSidebar } from "@/components/AppSidebar";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Offler AI" },
      { name: "description", content: "Your Offler AI projects, connected provider keys and compute usage." },
      { property: "og:title", content: "Dashboard — Offler AI" },
      { property: "og:description", content: "Your Offler AI projects, connected keys and compute usage." },
    ],
  }),
  component: Dashboard,
});

const projects = [
  { name: "Cape & Quill Storefront", meta: "Private · 4 days ago", status: "deployed" },
  { name: "invoice-sync", meta: "Private · 2 hours ago", status: "running" },
  { name: "atlas-admin", meta: "Team · yesterday", status: "idle" },
];

const suggestions = ["Make my resume stand out", "Catch me up on my repo", "Add tests to invoice-sync"];

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground">
      <AppSidebar />

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex-1 px-6 py-8 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-[15px] font-medium text-muted-foreground">Recent projects</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <Link
                  key={p.name}
                  to="/workspace"
                  className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <p className="truncate text-[15px] font-semibold">{p.name}</p>
                  <p className="mt-1 text-[13px] text-muted-foreground">{p.meta}</p>
                  <span className="mt-3 inline-block rounded-full bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground">
                    {p.status}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-muted-foreground">Compute this month</span>
                  <span className="font-medium">14.2 / 40 h</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-[36%] rounded-full bg-primary" />
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-muted-foreground">Your keys</span>
                  <span className="font-medium text-primary">+ add key</span>
                </div>
                <p className="mt-3 text-[13px]">OpenAI · Anthropic · xAI active</p>
              </div>
            </div>
          </div>
        </div>

        {/* prompt area */}
        <div className="relative overflow-hidden px-6 pb-10 sm:px-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-72 blur-2xl"
            style={{ background: "var(--gradient-warm)" }}
          />
          <div className="relative mx-auto max-w-4xl">
            <h1 className="text-[30px] leading-tight font-semibold tracking-tight sm:text-[40px]">
              Jagnesh, what are we building today?
            </h1>

            <p className="mt-6 text-[13px] text-muted-foreground">Suggested for you</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-card px-3.5 py-2 text-[13px] shadow-[var(--shadow-soft)]"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
              <p className="text-[15px] text-muted-foreground">Start chatting or describe a task…</p>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-[13px] text-muted-foreground">+ attach</span>
                <div className="flex items-center gap-3 text-[13px] text-muted-foreground">
                  <span>Anthropic · Sonnet</span>
                  <Link
                    to="/workspace"
                    className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground"
                  >
                    ↑
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
