import { Link } from "@tanstack/react-router";

const nav = [
  { label: "New", to: "/workspace" as const, primary: true },
  { label: "Projects", to: "/dashboard" as const },
  { label: "Library", to: "/dashboard" as const },
  { label: "Integrations", to: "/dashboard" as const },
  { label: "Security", to: "/dashboard" as const },
];

const recent = ["Cape & Quill Storefront", "invoice-sync", "atlas-admin"];

export function AppSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar px-3 py-4 md:flex">
      <Link to="/" className="mb-4 flex items-center gap-2 px-1">
        <span className="grid size-7 place-items-center rounded-md bg-primary text-[13px] font-bold text-primary-foreground">
          O
        </span>
        <span className="text-[14px] font-semibold tracking-tight">Offler AI</span>
      </Link>

      <button className="mb-3 flex w-full items-center justify-between rounded-lg border border-sidebar-border bg-card px-3 py-2 text-[13px] font-medium">
        <span className="flex items-center gap-2">
          <span className="grid size-5 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground">
            J
          </span>
          Personal workspace
        </span>
        <span className="text-muted-foreground">⌄</span>
      </button>

      <nav className="space-y-0.5">
        {nav.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={
              item.primary
                ? "flex items-center gap-2 rounded-lg bg-sidebar-accent px-3 py-2 text-[14px] font-medium"
                : "flex items-center gap-2 rounded-lg px-3 py-2 text-[14px] text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
            }
          >
            {item.primary && <span className="text-primary">+</span>}
            {item.label}
          </Link>
        ))}
      </nav>

      <p className="mt-6 px-3 text-[12px] text-muted-foreground">Recent</p>
      <div className="mt-1.5 space-y-0.5">
        {recent.map((r) => (
          <Link
            key={r}
            to="/workspace"
            className="block truncate rounded-lg px-3 py-2 text-[13px] text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
          >
            {r}
          </Link>
        ))}
      </div>

      <div className="mt-auto space-y-3">
        <div className="rounded-xl border border-sidebar-border bg-card p-3">
          <p className="text-[13px] font-semibold">Upgrade your plan</p>
          <p className="mt-0.5 text-[12px] text-muted-foreground">Unlock finetuned agent models</p>
        </div>
        <div className="flex items-center gap-2 px-1 text-[13px]">
          <span className="grid size-6 place-items-center rounded-full bg-ink text-[10px] text-ink-foreground">J</span>
          Jagnesh
        </div>
      </div>
    </aside>
  );
}
