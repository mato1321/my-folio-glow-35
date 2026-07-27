import { createFileRoute } from "@tanstack/react-router";
import profile from "@/assets/profile.jpg";
import { Github, Mail, Phone, FileText, ArrowUpRight, Trophy } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "高碩辰 KAO, SHUO-CHEN · 個人履歷" },
      { name: "description", content: "高碩辰的個人履歷網站：東吳大學資訊管理學系，專長 React、FastAPI、AI 應用與全端開發。" },
      { property: "og:title", content: "高碩辰 KAO, SHUO-CHEN · 個人履歷" },
      { property: "og:description", content: "東吳資管・全端開發者・AI 應用社社長。" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skillGroups = [
  { label: "程式語言", items: ["Java", "Python", "Kotlin"] },
  { label: "前端", items: ["React", "Vite"] },
  { label: "後端", items: ["FastAPI"] },
  { label: "資料庫", items: ["PostgreSQL"] },
  { label: "雲端與部署", items: ["AWS", "Linux"] },
  { label: "AI / 影像", items: ["YOLO", "OpenCV", "InsightFace", "Roboflow"] },
];

const projects = [
  {
    title: "Healixir 專屬保健食品推薦系統",
    desc: "設計多維度評分演算法與餘弦相似度推薦模型，整合藥局健康問卷資料，提供個人化保健食品推薦與穩定的會員/資料管理機制。",
    tech: ["React", "FastAPI", "PostgreSQL"],
    year: "2024 – 2025",
    role: "全端開發",
  },
  {
    title: "AI 影像辨識智慧導盲眼鏡",
    desc: "擔任專案組長，整合 YOLO 即時物件偵測與語意分割，並以 FastAPI + InsightFace 建構人臉辨識平台，設計 Kotlin 前端框架提升模組化程度。",
    tech: ["YOLO", "FastAPI", "InsightFace", "Kotlin"],
    year: "2025 – Now",
    role: "組長 / 全端",
  },
  {
    title: "Openbrowser 開源專案貢獻者",
    desc: "設計 LLM Agent 的 skill.md 技能描述規範，降低工具執行過程中的幻覺與錯誤決策；並以 CDP 開發自主瀏覽器代理框架，實現端到端網頁自動化流程。",
    tech: ["LLM Agent", "CDP", "Automation"],
    year: "2026 – Now",
    role: "Contributor",
  },
  {
    title: "《手術室風雲》醫療教育桌遊",
    desc: "PSBH Global Challenge 跨校協作，將腹腔鏡膽囊切除術與突發事件建構為 Triple Diamond Model，建立知識與團隊協作的評估機制。",
    tech: ["Game Design", "Medical Edu"],
    year: "2025",
    role: "跨校團隊",
  },
];

const awards = [
  "2026 東吳大學程式設計競賽 第一名",
  "2025 東吳大學程式設計競賽 第二名",
  "2025 NextWave AI 法律創新黑客松 第三名",
  "2025 PSBH Problemthon & Solvethon Global Challenge 佳作",
  "2025、2024 全國大專校院程式設計競賽 代表學校晉級決賽",
  "2024 北區七校聯合程式設計競賽 佳作",
];

const experiences = [
  {
    title: "人工智慧應用社 社長兼主講者",
    org: "東吳大學 · 114 / 115 學年",
    points: [
      "教授 Git / GitHub 版本控制工作流程，並指導社員使用 GitHub Pages 建置個人履歷網站。",
      "籌辦 NextWave AI 法律創新黑客松競賽，促進各大專院校跨領域 AI 與法律應用交流。",
      "負責社團營運管理，邀請業界講者舉辦技術講座，規劃企業參訪活動。",
    ],
  },
  {
    title: "計算機程式設計 & 物件導向程式設計 教學助理",
    org: "東吳大學 · 2023/9 – 2024/6, 2025/9 – 2026/6",
    points: [
      "課程創立以來首位大一教學助理（TA）。",
      "為每學期超過 60 名學生提供 Java 程式設計概念、程式除錯與考試題目解題。",
      "負責作業與考試出題、批改。",
    ],
  },
  {
    title: "電算中心 軟硬體維修組 工讀生",
    org: "東吳大學 · 2024/7 – Now",
    points: [
      "Windows 系統重灌、軟體安裝、錯誤排除、拆裝及維護硬體。",
      "協助對電腦不熟悉的老師設定電腦。",
      "教導新進的學弟妹快速上手工作內容。",
    ],
  },
];

const CV_URL = "/mato_CV.pdf";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            高碩辰 <span className="text-muted-foreground font-normal">/ KAO, SHUO-CHEN</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-foreground">關於</a>
            <a href="#skills" className="transition hover:text-foreground">技能</a>
            <a href="#projects" className="transition hover:text-foreground">專案</a>
            <a href="#experience" className="transition hover:text-foreground">經歷</a>
            <a href="#contact" className="transition hover:text-foreground">聯絡</a>
          </nav>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90 sm:inline-flex"
          >
            <FileText className="h-3.5 w-3.5" /> 查看履歷 PDF
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pt-28">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              東吳大學 資訊管理學系 · Full-stack & AI
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              以程式與 AI，
              <br className="hidden sm:block" />
              打造有溫度的產品。
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              我是高碩辰，東吳大學資管系學生、人工智慧應用社社長。專注於全端開發、AI 影像辨識與推薦系統，喜歡把研究成果化為真正能用的產品。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                <FileText className="h-4 w-4" /> 查看完整履歷 PDF
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-secondary">
                看看我的專案
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-secondary">
                聯絡我
              </a>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Phone className="h-3.5 w-3.5" /> 0976-392-711 · charleskao2005@gmail.com
            </div>
          </div>

          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl" aria-hidden />
            <img
              src={profile}
              alt="高碩辰的個人照片"
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
              就讀於東吳大學資訊管理學系，同時擔任人工智慧應用社社長，熱衷於把 AI、影像辨識與全端工程整合成真正能落地的產品。
              曾主導保健食品推薦系統、AI 智慧導盲眼鏡等畢業專題，並在多項校內外程式與黑客松競賽中獲獎。
              喜歡分享與教學，也在教學助理與社團經驗中培養跨領域協作與溝通能力。
            </p>
            <ul className="space-y-4 text-sm">
              <Fact k="學校" v="東吳大學 資管系" />
              <Fact k="專長" v="Full-stack · AI 應用" />
              <Fact k="社團" v="AI 應用社 社長" />
              <Fact k="GitHub" v="mato1321" />
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <SectionTitle eyebrow="02 — Skills" title="專業技能" />
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.label} className="rounded-2xl border border-border bg-card p-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">{g.label}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80 transition hover:border-foreground/40 hover:text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              <p className="text-xs uppercase tracking-widest text-muted-foreground">競賽榮譽</p>
            </div>
            <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {awards.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <SectionTitle eyebrow="03 — Work" title="專案 & 畢業專題" />
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{p.year}</span>
                    <span>{p.role}</span>
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

      {/* Experience */}
      <section id="experience" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <SectionTitle eyebrow="04 — Experience" title="社團與工作經歷" />
          <div className="space-y-6">
            {experiences.map((e) => (
              <div key={e.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold tracking-tight">{e.title}</h3>
                  <span className="text-xs text-muted-foreground">{e.org}</span>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <SectionTitle eyebrow="05 — Contact" title="聯絡方式" />
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">想聊聊合作或實習機會？</h3>
              <p className="mt-3 max-w-md text-muted-foreground">
                歡迎透過 Email、電話或 GitHub 與我聯繫，也可以直接下載完整履歷 PDF 了解更多。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ContactLink href="mailto:charleskao2005@gmail.com" icon={<Mail className="h-4 w-4" />}>Email</ContactLink>
              <ContactLink href="tel:+886976392711" icon={<Phone className="h-4 w-4" />}>0976-392-711</ContactLink>
              <ContactLink href="https://github.com/mato1321" icon={<Github className="h-4 w-4" />}>GitHub</ContactLink>
              <ContactLink href={CV_URL} icon={<FileText className="h-4 w-4" />}>履歷 PDF</ContactLink>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} 高碩辰 KAO, SHUO-CHEN. All rights reserved.</span>
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
  const isPdf = href.endsWith(".pdf");
  return (
    <a
      href={href}
      {...(isPdf ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition hover:border-foreground/40 hover:bg-secondary"
    >
      {icon}
      {children}
    </a>
  );
}
