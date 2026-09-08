import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";

export const Route = createFileRoute("/workspace")({
  head: () => ({
    meta: [
      { title: "Workspace — Offler AI" },
      {
        name: "description",
        content: "Chat with the agent, edit code and preview your running app inside the Offler AI workspace.",
      },
      { property: "og:title", content: "Workspace — Offler AI" },
      { property: "og:description", content: "Agent chat, code editor and live preview in one workspace." },
    ],
  }),
  component: Workspace;
});

type Msg = { role: "user" | "agent"; text: string };

const seed: Msg[] = [
  { role: "user", text: "Wire the storefront to the connected Shopify store and keep checkout hosted." },
  {
    role: "agent",
    text: "Done. The storefront reads the live catalog and routes customers through Shopify's hosted checkout. I ran the schema, API and tests in parallel.",
  },
];

function Workspace() {
  const [messages, setMessages] = useState<Msg[]>(seed);
  const [draft, setDraft] = useState("");

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim()) return;
    setMessages((m) => [
      ...m,
      { role: "user", text: draft.trim() },
      { role: "agent", text: "On it — splitting that across 3 agents and reporting back with a diff." },
    ]);
    setDraft("");
  }

  return (
    <div className="flex h-screen bg-background font-sans text-foreground">
      <AppSidebar />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b border-border px-4 py-3">
          <p className="truncate text-[14px] font-semibold">Cape &amp; Quill Storefront</p>
          <div className="flex rounded-lg border border-border p-0.5 text-[13px]">
            <span className="rounded-md px-3 py-1 text-muted-foreground">Design</span>
            <span className="rounded-md bg-secondary px-3 py-1 font-medium">Build</span>
          </div>
          <div className="ml-auto flex items-center gap-2 text-[13px]">
            <button className="rounded-lg border border-border px-3 py-1.5 font-medium hover:bg-secondary">Run</button>
            <button className="rounded-lg bg-primary px-3 py-1.5 font-medium text-primary-foreground hover:opacity-90">
              Publish
            </button>
          </div>
        </header>

        <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          {/* chat */}
          <section className="flex min-h-0 flex-col border-r border-border">
            <div className="flex items-center justify-between px-4 py-2.5">
              <span className="text-[12px] font-medium tracking-wide uppercase text-muted-foreground">Agent chat</span>
              <button
                onClick={() => setMessages([])}
                className="text-[13px] font-medium text-primary hover:opacity-80"
              >
                + New chat
              </button>
            </div>

            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 pb-4">
              {messages.length === 0 && (
                <p className="pt-10 text-center text-[14px] text-muted-foreground">
                  New chat — describe the next task.
                </p>
              )}
              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div key={i} className="flex justify-end">
                    <p className="max-w-[85%] rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-[14px] text-primary-foreground">
                      {m.text}
                    </p>
                  </div>
                ) : (
                  <div key={i} className="max-w-[92%]">
                    <p className="mb-1 text-[12px] text-muted-foreground">Offler agent · parallel ×3</p>
                    <p className="text-[14px] leading-relaxed">{m.text}</p>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-1.5 text-[12px] text-muted-foreground">
                      ✓ Checkpoint made · worked for 12s
                    </div>
                  </div>
                ),
              )}
            </div>

            <form onSubmit={send} className="border-t border-border p-3">
              <div className="rounded-xl border border-border bg-card p-3">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Message agent…"
                  aria-label="Message agent"
                  className="w-full bg-transparent text-[14px] outline-none placeholder:text-muted-foreground"
                />
                <div className="mt-6 flex items-center justify-between text-[12px] text-muted-foreground">
                  <span>Anthropic · Sonnet</span>
                  <button
                    type="submit"
                    className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground"
                    aria-label="Send message"
                  >
                    ↑
                  </button>
                </div>
              </div>
            </form>
          </section>

          {/* editor + preview */}
          <section className="grid min-h-0 grid-rows-2">
            <div className="flex min-h-0 flex-col border-b border-border">
              <div className="flex items-center gap-1 border-b border-border px-3 py-2 text-[12px]">
                <span className="rounded-md bg-secondary px-2.5 py-1 font-medium">storefront.ts</span>
                <span className="px-2.5 py-1 text-muted-foreground">checkout.ts</span>
                <span className="px-2.5 py-1 text-muted-foreground">shopify.ts</span>
              </div>
              <pre className="min-h-0 flex-1 overflow-auto px-4 py-3 font-mono text-[12.5px] leading-relaxed text-muted-foreground">
{`export async function loadCatalog(store: Store) {
  const products = await shopify.products.list(store);
  return products.map(toStorefrontItem);
}

export function checkoutUrl(cart: Cart) {
  return shopify.hostedCheckout(cart); // live catalog
}`}
              </pre>
            </div>

            <div className="flex min-h-0 flex-col">
              <div className="flex items-center gap-2 border-b border-border px-3 py-2 text-[12px] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                running · .offler.dev
              </div>
              <div className="min-h-0 flex-1 overflow-auto bg-secondary/50 p-4">
                <div className="mx-auto max-w-sm rounded-xl border border-border bg-card p-4">
                  <p className="text-[14px] font-semibold">Cape &amp; Quill</p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="h-16 rounded-lg bg-secondary" />
                    <div className="h-16 rounded-lg bg-secondary" />
                  </div>
                  <button className="mt-3 w-full rounded-lg bg-primary py-2 text-[13px] font-medium text-primary-foreground">
                    Checkout · $48.00
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
