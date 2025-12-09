import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Sparkles,
  Tags,
  Code2,
  Database,
  Cloud,
  Brain,
  Search,
  Languages,
} from "lucide-react";

/**
 * Single-file, editable portfolio page.
 * - React + TypeScript
 * - Tailwind CSSS
 * - Framer Motion
 */

// ------------------------------
// Editable content
// ------------------------------

const PROFILE = {
  name: "赤塚 真那斗 / Manato Akatsuka",
  tagline:
    "Tokyo University of Technology | TypeScript × Full-stack | AI & Real Estate Tech",
  location: "Tokyo, Japan",
  intro:
    "東京工科大学 先進情報専攻の学部3年。TypeScript/Reactを軸に、HonoやRustにも挑戦しながら、チーム開発と個人開発の両面で“動くものを素早く作って改善する”力を磨いています。AIや不動産×データ領域にも関心があり、実課題に結びつくプロダクトづくりを目指しています。",
  availability: "Open to internships and new grad roles (27卒).",
  languages: [
    { label: "Japanese", level: "Native" },
    { label: "English", level: "Intermediate (TOEIC 740 target)" },
  ],
};

const ABOUT_BULLETS = [
  "東京工科大学 先進情報専攻 学部3年（27卒）",
  "TypeScript/Reactを中心に、Hono・Rust・Dockerでフルスタックを拡張中",
  "AzureやIaC（Pulumiなど）に関心があり環境構築・運用の解像度を高めている",
  "AI、RAG、データ活用を“実装まで”落とし込むのが好き",
  "不動産×テックの課題発見とプロダクト化に強い興味",
];

const SKILLS = {
  frontend: ["TypeScript", "React", "Next.js (learning)", "HTML/CSS", "Tailwind"],
  backend: ["Hono", "Node.js (learning)", "Rust (learning)", "REST APIs"],
  cloud: ["Azure", "Pulumi (learning)", "Docker", "GitHub Actions (basics)"],
  ai: ["LLM basics", "RAG (learning)", "Prompt design", "ML fundamentals"],
};

type Project = {
  title: string;
  summary: string;
  tech: string[];
  links?: { label: string; href: string }[];
  highlight?: "Featured" | "In Progress" | "Prototype";
};

const PROJECTS: Project[] = [
  {
    title: "Intern (Real Estate Sales Support)",
    summary:
      "不動産領域の営業/分析を支える業務アプリ想定。Azure上での運用を意識し、Docker・CI/CD・IaCの観点で“再現性の高いデプロイ”を学びながら改善を進めています。",
    tech: ["TypeScript", "React", "Azure", "Docker", "Pulumi (learning)"],
    highlight: "Featured",
    links: [{ label: "Architecture note (placeholder)", href: "https://example.com" }],
  },
  {
    title: "Library Management App",
    summary:
      "TypeScriptフロント + Rustバックエンド構想。ISBNを軸にしたデータ設計や、拡張しやすいAPI構成を検討中。",
    tech: ["TypeScript", "React", "Rust", "Docker"],
    highlight: "In Progress",
    links: [{ label: "GitHub (placeholder)", href: "https://github.com/akatsukap/my-portfolio" }],
  },
  {
    title: "Hono Full-stack Sprint",
    summary:
      "軽量APIをHonoで構築し、フロントと繋いで認証・バリデーション・エラーハンドリングの型を作る短期プロトタイプ。",
    tech: ["TypeScript", "Hono", "React"],
    highlight: "Prototype",
    links: [{ label: "Demo (placeholder)", href: "https://example.com" }],
  },
  {
    title: "AI Document Generation Concept",
    summary:
      "LLMが下書きを生成し、最終レビューを人が担保する“Human-in-the-loop”の文書生成フローを設計。医療/業務文書のDXを想定したアイデア検証。",
    tech: ["LLM", "RAG (learning)", "Prompting", "NLP"],
    highlight: "In Progress",
    links: [{ label: "Design doc (placeholder)", href: "https://example.com" }],
  },
];

type Experience = {
  title: string;
  org: string;
  period: string;
  type: "Internship" | "Part-time" | "Project" | "Research";
  bullets: string[];
};

const EXPERIENCE: Experience[] = [
  {
    title: "Engineering Internship",
    org: "(Add company name)",
    period: "202X.MM – 202X.MM",
    type: "Internship",
    bullets: [
      "TypeScript/Reactで機能実装または改善を担当",
      "GitHub Flowでの開発、コードレビュー、タスク分割を経験",
      "ユーザー価値と品質の両立を意識したリリース/改善サイクルを学習",
    ],
  },
  {
    title: "Real Estate-related Sales Experience",
    org: "(Add org)",
    period: "202X.MM – 202X.MM",
    type: "Part-time",
    bullets: [
      "現場での課題発見とヒアリングを通じ、要件整理の筋力を獲得",
      "“分かりやすく伝える/まとめる”コミュニケーション力を強化",
    ],
  },
  {
    title: "Retail / Customer Experience",
    org: "(Optional: Entertainment brand)",
    period: "202X.MM – Present",
    type: "Part-time",
    bullets: [
      "多様な顧客対応を通じて観察力とホスピタリティを磨いた",
      "“体験価値”の設計思想をプロダクト視点に還元",
    ],
  },
];

const ACTIVITIES = [
  {
    title: "Engineering conferences",
    note: "Attended and summarized talks; applied ideas to projects.",
  },
  {
    title: "Creative hobbies",
    note: "Oil painting, guitar, camping, and design experiments.",
  },
  {
    title: "AI & deep learning study",
    note: "Hands-on exercises and reading to connect theory with practice.",
  },
];

const CONTACT = {
  github: "https://github.com/akatsukap",
  x: "https://x.com/akatsukap",
  email: "akatsukap@example.com",
};

// ------------------------------
// UI helpers
// ------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const chipBase =
  "inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur";

function SectionTitle({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: any;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="rounded-2xl bg-slate-900 p-2 text-white shadow-sm">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}

function SkillGroup({
  icon: Icon,
  label,
  items,
}: {
  icon: any;
  label: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <Icon className="h-4 w-4 text-slate-700" />
        <span className="text-sm font-semibold text-slate-800">{label}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className={chipBase}>
            <Tags className="h-3 w-3" />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const badge = p.highlight;
  return (
    <motion.article
      variants={fadeUp}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
        {badge ? (
          <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span key={t} className={chipBase}>
            <Code2 className="h-3 w-3" />
            {t}
          </span>
        ))}
      </div>
      {p.links?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {p.links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
            >
              <ExternalLink className="h-3 w-3" />
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}

function ExperienceCard({ e }: { e: Experience }) {
  return (
    <motion.article
      variants={fadeUp}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{e.title}</h3>
          <p className="text-sm text-slate-500">{e.org}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-700">
            {e.type}
          </span>
          <span className="text-xs text-slate-500">{e.period}</span>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {e.bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

// ------------------------------
// Main component
// ------------------------------

export default function PortfolioApp() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<
    "All" | "Featured" | "In Progress" | "Prototype"
  >("All");
  const [lang, setLang] = useState<"EN" | "JP">("EN");

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchesFilter = filter === "All" ? true : p.highlight === filter;
      const hay = `${p.title} ${p.summary} ${p.tech.join(" ")}`.toLowerCase();
      const matchesQuery = q ? hay.includes(q) : true;
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  const t = useMemo(() => {
    const dict = {
      EN: {
        nav: {
          about: "About",
          skills: "Skills",
          projects: "Projects",
          experience: "Experience",
          activities: "Activities",
          contact: "Contact",
        },
        heroCta: "View Projects",
        heroSecondary: "Contact",
        availability: "Status",
        aboutSubtitle: "A quick snapshot of who I am and how I work.",
        skillsSubtitle: "Tools I use today and areas I’m actively growing.",
        projectsSubtitle: "Selected work with room for iteration and polish.",
        experienceSubtitle: "Where I’ve learned teamwork, delivery, and ownership.",
        activitiesSubtitle: "Learning outside the classroom that shapes my craft.",
        contactSubtitle: "Let’s build something thoughtful and useful.",
        searchPlaceholder: "Search projects...",
        filterAll: "All",
        empty: "No projects match your search yet.",
        footer:
          "Built with React + TypeScript. Replace placeholders with your real data.",
      },
      JP: {
        nav: {
          about: "About",
          skills: "Skills",
          projects: "Projects",
          experience: "Experience",
          activities: "Activities",
          contact: "Contact",
        },
        heroCta: "プロジェクトを見る",
        heroSecondary: "連絡する",
        availability: "Status",
        aboutSubtitle: "私のスタイルと現在地を短くまとめました。",
        skillsSubtitle: "今使っている技術と、伸ばしている領域。",
        projectsSubtitle: "改善余地込みで“育てる”前提の制作物。",
        experienceSubtitle: "チームでの実装・改善経験を中心に。",
        activitiesSubtitle: "学外での学びや創作が強みの源泉です。",
        contactSubtitle: "気軽にご連絡ください。",
        searchPlaceholder: "プロジェクトを検索...",
        filterAll: "すべて",
        empty: "検索条件に合うプロジェクトがありません。",
        footer:
          "React + TypeScriptで作成。プレースホルダを実績に差し替えてください。",
      },
    } as const;

    return dict[lang];
  }, [lang]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50/40 to-white text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollToId("top")}
            className="group inline-flex items-center gap-2 rounded-xl px-2 py-1"
            title="Back to top"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold tracking-tight">
              {PROFILE.name}
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {(
              [
                ["about", "about"],
                ["skills", "skills"],
                ["projects", "projects"],
                ["experience", "experience"],
                ["activities", "activities"],
                ["contact", "contact"],
              ] as const
            ).map(([key, id]) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className="rounded-xl px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              >
                {(t.nav as any)[key]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang((l) => (l === "EN" ? "JP" : "EN"))}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
              title="Toggle language"
            >
              <Languages className="h-3.5 w-3.5" />
              {lang}
            </button>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:opacity-90"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="top" className="mx-auto max-w-5xl px-4 pb-16 pt-12">
        <motion.section
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12"
        >
          {/* subtle decorative blobs (penguin-inspired cool tone) */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-100/60 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-slate-100/80 blur-2xl" />
          <div className="pointer-events-none absolute right-10 top-10 h-24 w-24 rounded-full bg-white/70 blur-xl" />

          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className={chipBase}>
                <GraduationCap className="h-3 w-3" />
                3rd-year CS Student
              </span>
              <span className={chipBase}>
                <Briefcase className="h-3 w-3" />
                Intern & New Grad Focus
              </span>
              <span className={chipBase}>
                <Cloud className="h-3 w-3" />
                Full-stack in progress
              </span>
              <span className={chipBase}>
                <Sparkles className="h-3 w-3" />
                Penguin-inspired minimal theme
              </span>
            </div>

            <div>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
                {PROFILE.name}
              </h1>
              <p className="mt-2 text-sm font-medium text-slate-600 md:text-base">
                {PROFILE.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                {PROFILE.intro}
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 md:flex-row md:items-center md:justify-between">
              <div className="text-xs font-semibold text-slate-700">
                {t.availability}
              </div>
              <div className="text-xs text-slate-600">
                {PROFILE.availability}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => scrollToId("projects")}
                className="rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
              >
                {t.heroCta}
              </button>
              <button
                onClick={() => scrollToId("contact")}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
              >
                {t.heroSecondary}
              </button>
            </div>
          </motion.div>
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-14"
        >
          <SectionTitle icon={Sparkles} title="About" subtitle={t.aboutSubtitle} />
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <ul className="space-y-3 text-sm text-slate-700">
                {ABOUT_BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-xs font-semibold text-slate-600">Location</div>
              <div className="mt-1 text-sm font-medium text-slate-900">
                {PROFILE.location}
              </div>

              <div className="mt-5 text-xs font-semibold text-slate-600">
                Languages
              </div>
              <div className="mt-2 space-y-2">
                {PROFILE.languages.map((l) => (
                  <div
                    key={l.label}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    <span className="text-sm text-slate-800">{l.label}</span>
                    <span className="text-xs font-medium text-slate-600">
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 text-xs font-semibold text-slate-600">
                Working Style
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Prototype-first", "Iterative", "Team-friendly", "User-minded"].map(
                  (s) => (
                    <span key={s} className={chipBase}>
                      {s}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-14"
        >
          <SectionTitle icon={Code2} title="Skills" subtitle={t.skillsSubtitle} />
          <div className="grid gap-4 md:grid-cols-2">
            <motion.div variants={fadeUp}>
              <SkillGroup icon={Code2} label="Frontend" items={SKILLS.frontend} />
            </motion.div>
            <motion.div variants={fadeUp}>
              <SkillGroup icon={Database} label="Backend" items={SKILLS.backend} />
            </motion.div>
            <motion.div variants={fadeUp}>
              <SkillGroup icon={Cloud} label="Cloud / DevOps" items={SKILLS.cloud} />
            </motion.div>
            <motion.div variants={fadeUp}>
              <SkillGroup icon={Brain} label="AI" items={SKILLS.ai} />
            </motion.div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-14"
        >
          <SectionTitle
            icon={Briefcase}
            title="Projects"
            subtitle={t.projectsSubtitle}
          />

          <motion.div
            variants={fadeUp}
            className="mb-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex flex-1 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {(["All", "Featured", "In Progress", "Prototype"] as const).map(
                (f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`rounded-xl px-3 py-1.5 text-xs font-semibold shadow-sm transition ${
                      filter === f
                        ? "bg-slate-900 text-white"
                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {f === "All" ? t.filterAll : f}
                  </button>
                )
              )}
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {filteredProjects.length ? (
              filteredProjects.map((p) => <ProjectCard key={p.title} p={p} />)
            ) : (
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-sm text-slate-500 md:col-span-2"
              >
                {t.empty}
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-14"
        >
          <SectionTitle
            icon={Briefcase}
            title="Experience"
            subtitle={t.experienceSubtitle}
          />
          <div className="grid gap-4">
            {EXPERIENCE.map((e, i) => (
              <ExperienceCard key={i} e={e} />
            ))}
          </div>
        </motion.section>

        {/* Activities */}
        <motion.section
          id="activities"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-14"
        >
          <SectionTitle
            icon={Sparkles}
            title="Activities"
            subtitle={t.activitiesSubtitle}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {ACTIVITIES.map((a, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">
                  {a.title}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {a.note}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-14"
        >
          <SectionTitle icon={Mail} title="Contact" subtitle={t.contactSubtitle} />
          <div className="grid gap-4 md:grid-cols-3">
            <motion.a
              variants={fadeUp}
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-xl bg-slate-900 p-2 text-white">
                  <Github className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold">GitHub</span>
              </div>
              <div className="mt-3 text-xs text-slate-500">{CONTACT.github}</div>
            </motion.a>

            <motion.a
              variants={fadeUp}
              href={CONTACT.x}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-xl bg-slate-900 p-2 text-white">
                  <ExternalLink className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold">X</span>
              </div>
              <div className="mt-3 text-xs text-slate-500">{CONTACT.x}</div>
            </motion.a>

            <motion.a
              variants={fadeUp}
              href={`mailto:${CONTACT.email}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-xl bg-slate-900 p-2 text-white">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold">Email</span>
              </div>
              <div className="mt-3 text-xs text-slate-500">{CONTACT.email}</div>
            </motion.a>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-16 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-xs text-slate-500 shadow-sm">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <span>{t.footer}</span>
            <span className="text-slate-400">
              © {new Date().getFullYear()} {PROFILE.name}
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
