import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — Offler AI" },
      { name: "description", content: "Log in to Offler AI to open your projects and agent workspaces." },
      { property: "og:title", content: "Log in — Offler AI" },
      { property: "og:description", content: "Log in to Offler AI to open your projects and agent workspaces." },
    ],
  }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="grid min-h-screen bg-background font-sans text-foreground lg:grid-cols-2">
      <div className="flex flex-col px-6 py-8 sm:px-12">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-md bg-primary text-[13px] font-bold text-primary-foreground">
            O
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Offler AI</span>
        </Link>

        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12">
          <h1 className="text-[30px] font-semibold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-[14px] text-muted-foreground">Pick up where your agents left off.</p>

          <div className="mt-8 space-y-2.5">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-[14px] font-medium hover:bg-secondary">
              Continue with GitHub
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-[14px] font-medium hover:bg-secondary">
              Continue with Google
            </button>
          </div>

          <div className="my-6 flex items-center gap-3 text-[12px] text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            or with email
            <span className="h-px flex-1 bg-border" />
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/dashboard" });
            }}
          >
            <div>
              <label htmlFor="email" className="text-[13px] font-medium text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="mt-1.5 w-full rounded-lg border border-border bg-card px-3 py-2.5 text-[14px] outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-[13px] font-medium text-muted-foreground">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1.5 w-full rounded-lg border border-border bg-card px-3 py-2.5 text-[14px] outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-3 text-[14px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Log in
            </button>
          </form>

          <p className="mt-6 text-[13px] text-muted-foreground">
            New to Offler? <span className="font-medium text-primary">Create an account</span>
          </p>
        </div>
      </div>

      <div className="relative hidden overflow-hidden border-l border-border bg-secondary/60 lg:block">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 blur-2xl"
          style={{ background: "var(--gradient-warm)" }}
        />
        <div className="relative flex h-full flex-col justify-center px-14">
          <p className="text-[13px] font-medium tracking-wide uppercase text-muted-foreground">Bring your own keys</p>
          <p className="mt-4 max-w-sm text-[26px] leading-snug font-semibold tracking-tight">
            100+ providers. Parallel agents. You only pay for the compute that runs them.
          </p>
          <div className="mt-8 max-w-sm rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
            <p className="text-[13px] text-muted-foreground">Connected keys</p>
            <div className="mt-3 space-y-2 text-[14px]">
              {["OpenAI", "Anthropic", "xAI"].map((p) => (
                <div key={p} className="flex items-center justify-between">
                  <span>{p}</span>
                  <span className="text-[12px] text-primary">active</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
