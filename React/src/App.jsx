
import React from "react";
import { LineChart, Utensils, Newspaper, LayoutGrid, ArrowRight } from "lucide-react";

const Section = ({ className = "", children }) => (
  <section className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}>{children}</span>
);

const PrimaryButton = ({ children }) => (
  <button className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-slate-900 shadow transition hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40">
    {children}
  </button>
);

const SecondaryButton = ({ children, className = "" }) => (
  <button className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold text-white transition focus:outline-none focus-visible:ring-4 ${className}`}>
    {children}
  </button>
);

// Decorative SVG banner used as image
const GradientBanner = ({ from = "#0ea5e9", to = "#22d3ee", label = "", sub = "", className = "h-56" }) => (
  <svg role="img" aria-label={label || "Banner"} viewBox="0 0 1200 400" className={`w-full rounded-2xl ${className}`}>
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor={from} />
        <stop offset="100%" stopColor={to} />
      </linearGradient>
      <radialGradient id="r" cx="80%" cy="20%" r="60%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="1200" height="400" fill="url(#g)" />
    <rect width="1200" height="400" fill="url(#r)" />
    <g fill="#fff" fillOpacity="0.2">
      {[...Array(20)].map((_, i) => (
        <circle key={i} cx={60 + i * 60} cy={(i * 41) % 320 + 40} r={(i % 5) * 6 + 8} />
      ))}
    </g>
    <text x="40" y="280" fontSize="48" fontWeight="800" fill="#fff">{label}</text>
    {sub && <text x="40" y="320" fontSize="24" fill="#ECFEFF">{sub}</text>}
  </svg>
);

// ---- Site 1: Nova Metrics (Cyber/Neon) ---- //
const CyberCard = ({ children }) => (
  <div className="rounded-2xl border border-[#2B3355] bg-white/5 p-4 shadow-[0_10px_35px_rgba(0,0,0,.35)] backdrop-blur">
    {children}
  </div>
);

const NovaMetrics = () => (
  <div className="min-h-[80vh] bg-[radial-gradient(1000px_600px_at_20%_0%,#0b1230_0,#050814_60%)] text-[#E5EDFF]">
    <header className="sticky top-0 z-20 border-b border-[#2B3355] bg-[#050814]/80 backdrop-blur">
      <Section className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2 font-black tracking-wide">
          <span className="inline-block h-3 w-3 rounded-full bg-[conic-gradient(from_0deg,#7CFFB2,#24D3EE,#7CFFB2)]" />
          NOVA METRICS
        </div>
        <Badge className="bg-[#7CFFB2]/20 text-[#7CFFB2] ring-1 ring-[#2B3355]">CYBER</Badge>
      </Section>
    </header>

    <main className="py-10">
      <Section className="grid gap-6 lg:grid-cols-[2fr_1.2fr]">
        <div>
          <h1 className="mb-2 text-4xl font-extrabold leading-tight md:text-6xl">Real‑time insight with a neon edge</h1>
          <p className="mb-5 max-w-2xl text-[#9DB2FF]">
            Glass cards, glow accents, and dense data — a striking cyber aesthetic for product analytics.
          </p>
          <div className="flex gap-3">
            <PrimaryButton><LineChart className="h-4 w-4" /> Live Demo</PrimaryButton>
            <SecondaryButton className="bg-teal-500/80 hover:bg-teal-500">Start Free</SecondaryButton>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["+12% Activation","7.3% Conversion","42ms p95 latency"].map((kpi) => (
              <CyberCard key={kpi}>
                <div className="h-24 rounded-xl bg-gradient-to-b from-emerald-300/25 to-cyan-300/10 shadow-inner" />
                <p className="mt-2 text-sm text-[#9DB2FF]">{kpi}</p>
              </CyberCard>
            ))}
          </div>
        </div>
        <CyberCard>
          <GradientBanner label="Neon dashboard preview" sub="Funnels • Cohorts • Alerts" from="#24D3EE" to="#7CFFB2" className="h-72" />
          <ul className="ml-5 mt-3 list-disc text-[#9DB2FF]">
            <li>Keyboard shortcuts</li>
            <li>Embeddable charts</li>
            <li>Role‑based access</li>
          </ul>
        </CyberCard>
      </Section>
    </main>
  </div>
);

// ---- Site 2: Ember & Thyme (Rustic/Print) ---- //
const RusticPanel = ({ children }) => (
  <div className="rounded-md border-2 border-[#d8cbb3] bg-white shadow-[0_3px_0_0_#cdbfa3]">
    <div className="p-4 sm:p-5">{children}</div>
  </div>
);

const EmberThyme = () => (
  <div className="min-h-[80vh] bg-[#f7f2e8] text-[#2b2a28]">
    <header className="sticky top-0 z-20 border-b-2 border-[#d8cbb3] bg-[#f7f2e8]">
      <Section>
        <div className="flex items-end justify-between py-4">
          <strong className="text-2xl tracking-wider">EMBER & THYME</strong>
          <span className="text-sm">Wed–Sun · 5–10pm · 123 Market St.</span>
        </div>
      </Section>
    </header>

    <main className="py-8">
      <Section className="grid gap-6 md:grid-cols-[220px_1fr]">
        <nav className="space-y-2" aria-label="Menu">
          {[["#starters","Starters"],["#mains","Mains"],["#desserts","Desserts"],["#reserve","Reserve"]].map(([href,label]) => (
            <a key={href} href={href} className="block border-b border-dotted border-[#d8cbb3] pb-2 hover:text-[#8a2c22]">{label}</a>
          ))}
        </nav>

        <section>
          <div className="grid items-end gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-md border-2 border-[#d8cbb3]">
              <GradientBanner label="Warm bistro" sub="Seasonal wood‑fired kitchen" from="#111827" to="#ef4444" />
            </div>
            <RusticPanel>
              <h2 id="reserve" className="mb-2 font-serif text-lg font-bold">
                Reservations <Badge className="ml-2 bg-[#8a2c22] text-white">New</Badge>
              </h2>
              <p className="mb-3">Book a table for up to 6. We hold for 15 minutes.</p>
              <form className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <input placeholder="Name" aria-label="Name" className="rounded-md border border-[#cdbfa3] px-3 py-2" />
                <input type="date" aria-label="Date" className="rounded-md border border-[#cdbfa3] px-3 py-2" />
                <input type="time" aria-label="Time" className="rounded-md border border-[#cdbfa3] px-3 py-2" />
                <button className="col-span-full rounded-md border-2 border-[#2b2a28] bg-[#8a2c22] px-4 py-2 font-bold text-white">Book</button>
              </form>
            </RusticPanel>
          </div>

          {[
            { id: "starters", title: "Starters", items: [["Charred Caesar","$14"],["Smoked Mushrooms","$12"],["Fire‑roasted Beets","$11"]] },
            { id: "mains", title: "Mains", items: [["Coal‑grilled Salmon","$24"],["Ember Burger","$18"]] },
            { id: "desserts", title: "Desserts", items: [["Olive Oil Cake","$9"],["Chocolate Pot","$8"]] },
          ].map((sec) => (
            <RusticPanel key={sec.id}>
              <h3 id={sec.id} className="mb-2 font-serif text-lg font-bold">{sec.title}</h3>
              <ul className="divide-y divide-dotted divide-[#cdbfa3]">
                {sec.items.map(([name, price]) => (
                  <li key={name} className="flex items-center justify-between py-2">
                    <span>{name}</span>
                    <span className="font-semibold">{price}</span>
                  </li>
                ))}
              </ul>
            </RusticPanel>
          ))}
        </section>
      </Section>
    </main>
  </div>
);

// ---- Site 3: Bit by Bit (Newspaper blog) ---- //
const ArticleCard = ({ title, tag }) => (
  <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="mb-3 overflow-hidden rounded-lg">
      <GradientBanner label={title} sub={tag} from="#0ea5e9" to="#1e40af" className="h-48" />
    </div>
    <h3 className="mb-1 text-lg font-semibold">{title}</h3>
    <p className="text-sm text-slate-600">A concise explainer with code snippets and a diagram.</p>
  </article>
);

const NewspaperBlog = () => (
  <div className="min-h-[80vh] bg-[#faf8f6] text-zinc-900">
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-[#faf8f6]">
      <Section className="py-3"><strong>BIT BY BIT</strong></Section>
    </header>

    <main className="py-8">
      <Section>
        <p className="uppercase tracking-[.25em] text-slate-400">Engineering • Notes</p>
        <h1 className="mb-2 text-4xl font-extrabold leading-tight md:text-6xl">Readable like print. Built for code.</h1>
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <article>
            <p className="text-sm text-slate-500">5 min • Performance</p>
            <div className="prose prose-slate mt-2 max-w-none">
              <p className="first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:font-extrabold first-letter:leading-[3rem] first-letter:text-cyan-600">
                We obsess over speed because users do. In this post we outline a pragmatic budget for <code className="rounded bg-slate-100 px-1 py-0.5">LCP</code>, <code className="rounded bg-slate-100 px-1 py-0.5">TTFB</code>, and <code className="rounded bg-slate-100 px-1 py-0.5">CLS</code> you can adopt today…
              </p>
            </div>
            <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <GradientBanner label="Newspaper banner" sub="Print-inspired layout" from="#e2e8f0" to="#bae6fd" />
            </div>
            <p className="mt-3 text-slate-700">Measure with <code className="rounded bg-slate-100 px-1 py-0.5">web-vitals</code>, budget with <code className="rounded bg-slate-100 px-1 py-0.5">lighthouse</code>, and automate with CI.</p>
          </article>
          <aside className="space-y-3 border-l-2 border-slate-200 pl-4">
            <h3 className="font-semibold">Recent</h3>
            {[
              ["Design Systems at Scale","Architecture"],
              ["Metamorphic Testing","QA"],
              ["Async Pitfalls","Performance"],
              ["State Machines","Modeling"],
            ].map(([t, tag]) => (
              <ArticleCard key={t} title={t} tag={tag} />
            ))}
          </aside>
        </div>
      </Section>
    </main>
  </div>
);

// ---- App with tabs ---- //
const tabs = [
  { id: "nova", label: "SaaS — Cyber/Neon", icon: LineChart, comp: NovaMetrics },
  { id: "ember", label: "Restaurant — Rustic", icon: Utensils, comp: EmberThyme },
  { id: "blog", label: "Blog — Newspaper", icon: Newspaper, comp: NewspaperBlog },
];

export default function App() {
  const [active, setActive] = React.useState("nova");
  const ActiveComp = tabs.find((t) => t.id === active)?.comp ?? NovaMetrics;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <Section className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2 font-bold"><LayoutGrid className="h-5 w-5"/> React + Tailwind Portfolio Suite</div>
          <nav className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-semibold transition ${active === t.id ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:bg-slate-50"}`}
              >
                <t.icon className="h-4 w-4" /> {t.label}
              </button>
            ))}
          </nav>
        </Section>
      </header>

      <main className="pb-12">
        <ActiveComp />
      </main>

      <footer className="border-t border-slate-200 bg-white/60">
        <Section className="flex flex-col items-start justify-between gap-3 py-4 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-600">Reusable components • Tailwind • Accessible SVG banners</p>
          <div className="flex gap-2">
            <PrimaryButton><ArrowRight className="h-4 w-4"/> Get Source</PrimaryButton>
            <SecondaryButton className="bg-slate-900 hover:bg-slate-800">Preview</SecondaryButton>
          </div>
        </Section>
      </footer>
    </div>
  );
}
