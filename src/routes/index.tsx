import { createFileRoute } from "@tanstack/react-router";
import profile from "@/assets/profile.jpg";
import { Github, Linkedin, Mail, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "陳彥廷 · 前端工程師作品集" },
      { name: "description", content: "陳彥廷的個人履歷網站：關於我、專業技能、精選專案與聯絡方式。" },
      { property: "og:title", content: "陳彥廷 · 前端工程師作品集" },
      { property: "og:description", content: "現代感、簡約風格的個人履歷網站。" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  { name: "React / Next.js", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "UI / UX Design", level: 78 },
  { name: "PostgreSQL", level: 70 },
];

const tags = ["Vite", "Framer Motion", "GraphQL", "Figma", "Docker", "Git", "Vitest", "Storybook"];

const projects = [
  {
    title: "Nimbus Analytics",
    desc: "為 SaaS 團隊打造的即時數據儀表板，支援多資料源與自訂圖表。",
    tech: ["Next.js", "TypeScript", "D3"],
    year: "2025",
  },
  {
    title: "Orbit Commerce",
    desc: "無頭電商前端，優化 Core Web Vitals，轉換率提升 32%。",
    tech: ["React", "Shopify API", "Tailwind"],
    year: "2024",
  },
  {
    title: "Kōbo Journal",
    desc: "極簡日誌 App，主打離線優先與端到端加密的私密書寫體驗。",
    tech: ["PWA", "IndexedDB", "Vite"],
    year: "2024",
  },
  {
    title: "Pulse Design System",
    desc: "跨產品共用的元件庫與設計 token，收斂多品牌視覺一致性。",
    tech: ["Storybook", "Radix", "CSS"],
    year: "2023",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">陳彥廷 <span className="text-muted-foreground font-normal">/ Yen-Ting Chen</span></a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-foreground">關於</a>
            <a href="#skills" className="transition hover:text-foreground">技能</a>
            <a href="#projects" className="transition hover:text-foreground">專案</a>
            <a href="#contact" className="transition hover:text-foreground">聯絡</a>
          </nav>
          <a href="#contact" className="hidden rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90 sm:inline-flex">聯絡我</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pt-28">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              目前開放接案 · Available for work
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              打造精緻、
              <br className="hidden sm:block" />
              好用的網頁產品。
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              我是彥廷，一位專注於前端工程與介面設計的開發者，喜歡把複雜的問題化為簡潔清晰的體驗。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                看看我的作品 <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-secondary">
                聯絡我
              </a>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> 台灣・台北
            </div>
          </div>

          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl" aria-hidden />
            <img
              src={profile}
              alt="陳彥廷的個人照片"
              width={1024}
              height={1024}
              className="relative h-48 w-48 rounded-full object-cover shadow-xl ring-1 ring-border sm:h-60 sm:w-60 md:h-72 md:w-72"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <SectionTitle eyebrow="01 — About" title="關於我" />
          <div className="grid gap-10 md:grid-cols-3">
            <p className="text-base leading-relaxed text-muted-foreground md:col-span-2">
              擁有 5 年以上前端開發經驗，曾服務於新創與跨國團隊，主導過從 0 到 1 的產品開發與大規模重構。
              相信好的產品源於對細節的堅持，也熱衷於將設計系統、無障礙與效能優化落實到每一次 commit。
              工作之餘喜歡攝影、跑步，以及研讀新的網頁技術與人機互動論文。
            </p>
            <ul className="space-y-4 text-sm">
              <Fact k="經驗" v="5+ 年" />
              <Fact k="專長" v="Frontend · Design Systems" />
              <Fact k="語言" v="繁中 · English" />
              <Fact k="現職" v="Freelance / Consultant" />
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <SectionTitle eyebrow="02 — Skills" title="專業技能" />
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className="text-xs tabular-nums text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-foreground transition-all"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="mb-4 text-sm text-muted-foreground">熟悉的工具與框架</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80 transition hover:border-foreground/40 hover:text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <SectionTitle eyebrow="03 — Work" title="專案經歷" />
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{p.year}</span>
                    <ExternalLink className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <SectionTitle eyebrow="04 — Contact" title="聯絡方式" />
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">有想聊聊的專案嗎？</h3>
              <p className="mt-3 max-w-md text-muted-foreground">
                我目前開放接案與全職機會，歡迎透過 Email 或社群平台與我聯繫。通常在 24 小時內回覆。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ContactLink href="mailto:hello@example.com" icon={<Mail className="h-4 w-4" />}>Email</ContactLink>
              <ContactLink href="https://github.com" icon={<Github className="h-4 w-4" />}>GitHub</ContactLink>
              <ContactLink href="https://linkedin.com" icon={<Linkedin className="h-4 w-4" />}>LinkedIn</ContactLink>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} 陳彥廷. All rights reserved.</span>
          <span>Designed & built with care.</span>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 flex items-end justify-between gap-4">
      <div>
        <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </div>
    </div>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex items-center justify-between border-b border-border/70 pb-3">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-medium">{v}</span>
    </li>
  );
}

function ContactLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition hover:border-foreground/40 hover:bg-secondary"
    >
      {icon}
      {children}
    </a>
  );
}
