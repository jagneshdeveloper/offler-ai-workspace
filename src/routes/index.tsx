import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Offler AI — Bring your own keys, ship with agents" },
      {
        name: "description",
        content:
          "100+ model providers, parallel agents, in-browser editing, running and deploying. You bring the keys, we only charge for compute.",
      },
      { property: "og:title", content: "Offler AI — Bring your own keys, ship with agents" },
      {
        property: "og:description",
        content: "Parallel agentic coding on your own provider keys. Pay only for compute.",
      },
    ],
  }),
  component: Marketing,
});

const providers = [
  "OpenAI",
  "Anthropic",
  "xAI",
  "Google",
  "Mistral",
  "Groq",
  "DeepSeek",
  "Meta",
  "Cohere",
  "Together",
];

const templates = [
  { name: "SaaS starter", meta: "Auth · billing · dashboard" },
  { name: "Agent workflow", meta: "Queues · tools · retries" },
  { name: "Storefront", meta: "Catalog · cart · checkout" },
  { name: "Internal admin", meta: "Tables · roles · audit" },
  { name: "Realtime chat", meta: "Rooms · presence" },
  { name: "Data pipeline", meta: "Ingest · transform · ship" },
];

function Marketing() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <div className="flex items-center gap-2">
          <Mark />
          <span className="text-[15px] font-semibold tracking-tight">Offler AI</span>
        </div>
        <nav className="hidden items-center gap-6 text-[14px] text-muted-foreground md:flex">
          <a href="#platform" className="hover:text-foreground">
            Platform
          </a>
          <a href="#providers" className="hover:text-foreground">
            Providers
          </a>
          <a href="#templates" className="hover:text-foreground">
            Templates
          </a>
          <a href="#pricing" className="hover:text-foreground">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-[14px] font-medium text-muted-foreground hover:text-foreground">
            Log in
          </Link>
          <Link
            to="/login"
            className="rounded-full bg-primary px-4 py-2 text-[14px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start building
          </Link>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden px-5 pt-16 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[40px] leading-[1.05] font-semibold tracking-tight md:text-[64px]">
            What will you build?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[16px] text-muted-foreground">
            Describe a task. Offler runs agents in parallel on the model keys you already own.
          </p>

          <div className="relative mx-auto mt-9 max-w-2xl">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-16 -bottom-20 -top-6 -z-10 blur-2xl"
              style={{ background: "var(--gradient-warm)" }}
            />
            <div className="rounded-2xl border border-border bg-card p-4 text-left shadow-[var(--shadow-soft)]">
              <p className="text-[15px] text-muted-foreground">
                Build an internal tool that syncs Stripe invoices to Postgres…
              </p>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                  <span className="rounded-md border border-border px-2 py-1">Anthropic</span>
                  <span className="rounded-md border border-border px-2 py-1">Parallel ×4</span>
                </div>
                <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                  ↑
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-[13px]">
              {["Migrate a Rails app", "Refactor my checkout", "Write integration tests"].map((s) => (
                <span key={s} className="rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* meet offler */}
      <section id="platform" className="px-5 pb-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-[32px] font-semibold tracking-tight md:text-[40px]">
            Meet <span className="text-primary">Offler</span>
          </h2>
          <p className="mt-2 text-center text-[15px] text-muted-foreground">
            Your keys, your models, our orchestration.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-peach p-6 text-ink">
              <p className="text-[12px] font-medium tracking-wide uppercase opacity-70">Bring your own keys</p>
              <h3 className="mt-3 text-[26px] leading-tight font-semibold">
                Create without
                <br />
                token costs
              </h3>
              <p className="mt-3 max-w-[38ch] text-[14px] opacity-80">
                Plug in OpenAI, Anthropic, xAI or 100+ other providers. Tokens bill to your account — never ours.
              </p>
            </div>

            <div className="rounded-2xl bg-ink p-6 text-ink-foreground">
              <p className="text-[12px] font-medium tracking-wide uppercase opacity-60">Agent</p>
              <h3 className="mt-3 text-[26px] leading-tight font-semibold">
                Chat that
                <br />
                ships
              </h3>
              <div className="mt-5 space-y-2">
                <div className="rounded-xl bg-white/10 px-3 py-2 text-[13px]">
                  Split the migration across three agents.
                </div>
                <div className="rounded-xl bg-white/[0.06] px-3 py-2 text-[13px] opacity-80">
                  Running 3 tasks in parallel · schema, API, tests.
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-[12px] font-medium tracking-wide uppercase text-muted-foreground">Editor</p>
              <h3 className="mt-3 text-[26px] leading-tight font-semibold">Edit, run, deploy</h3>
              <p className="mt-3 max-w-[42ch] text-[14px] text-muted-foreground">
                A full editor and live preview in the browser. Ship to a URL when the tests are green.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-[12px] font-medium tracking-wide uppercase text-muted-foreground">Premium</p>
              <h3 className="mt-3 text-[26px] leading-tight font-semibold">Finetuned agent models</h3>
              <p className="mt-3 max-w-[42ch] text-[14px] text-muted-foreground">
                Premium plans unlock our own models, trained for long-horizon agentic work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* providers */}
      <section id="providers" className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-[22px] font-semibold tracking-tight">100+ providers, one console</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {providers.map((p) => (
              <span
                key={p}
                className="rounded-full border border-border bg-card px-4 py-2 text-[14px] text-muted-foreground"
              >
                {p}
              </span>
            ))}
            <span className="rounded-full bg-accent px-4 py-2 text-[14px] font-medium text-accent-foreground">
              +90 more
            </span>
          </div>
        </div>
      </section>

      {/* templates */}
      <section id="templates" className="border-y border-border bg-secondary/50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-[22px] font-semibold tracking-tight">Get started with templates</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card p-5">
                <p className="text-[15px] font-semibold">{t.name}</p>
                <p className="mt-1 text-[13px] text-muted-foreground">{t.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-[32px] font-semibold tracking-tight md:text-[40px]">Start small. Scale fast.</h2>
          <p className="mt-2 max-w-xl text-[15px] text-muted-foreground">
            We only charge for the compute that runs your agent. Model tokens stay on your own keys.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { n: "Free", p: "$0", d: "Compute credits to try the agent, unlimited BYOK providers." },
              { n: "Power", p: "$20", d: "More compute, parallel agents, private projects and deploys." },
              { n: "Max", p: "$80", d: "Highest concurrency plus Offler finetuned agentic models." },
            ].map((tier, i) => (
              <div
                key={tier.n}
                className={
                  i === 1
                    ? "rounded-2xl bg-primary p-6 text-primary-foreground"
                    : "rounded-2xl border border-border bg-card p-6"
                }
              >
                <p className="text-[14px] font-medium">{tier.n}</p>
                <p className="mt-2 text-[34px] font-semibold tracking-tight">
                  {tier.p}
                  <span className="text-[14px] font-normal opacity-70">/mo</span>
                </p>
                <p className={i === 1 ? "mt-3 text-[14px] opacity-90" : "mt-3 text-[14px] text-muted-foreground"}>
                  {tier.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-64 -z-10 blur-2xl"
          style={{ background: "var(--gradient-warm)" }}
        />
        <h2 className="text-[32px] font-semibold tracking-tight md:text-[44px]">What are you waiting for?</h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] text-muted-foreground">
          Bring a key, describe the work, watch the agents split it up.
        </p>
        <Link
          to="/login"
          className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-[15px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get started for free
        </Link>
      </section>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-[13px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mark />
            <span className="font-semibold text-foreground">Offler AI</span>
          </div>
          <p>© {new Date().getFullYear()} Offler AI. Bring your own keys.</p>
        </div>
      </footer>
    </div>
  );
}

function Mark() {
  return (
    <span className="grid size-7 place-items-center rounded-md bg-primary text-[13px] font-bold text-primary-foreground">
      O
    </span>
  );
}
