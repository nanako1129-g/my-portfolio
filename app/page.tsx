"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  featuredProjectIds,
  portfolioProjectDisplayOrder,
  portfolioProjectsEn,
  portfolioProjectsJa,
  projectTabsEn,
  projectTabsJa,
  type PortfolioProject,
  type ProjectFilter,
} from "@/lib/portfolio-projects";

type Locale = "ja" | "en";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const siteContent = {
  ja: {
    heroBadge: "Pastel AI Portfolio",
    name: "宮坂めい奈",
    role: "生成AI推進 / プロダクト開発",
    catchphrase:
      "非エンジニアでも、AIを相棒にすれば\"構造\"から変えられる",
    intro:
      "国内IT企業で広告制作×生成AI推進の二足のわらじ。現場の\"めんどくさい\"を解消するツールを自作する毎日です。",
    ctaProjects: "Projectsを見る",
    ctaAbout: "Aboutを見る",
    heroCards: [
      { label: "Focus", value: "AI × Civic Design", color: "bg-[#f3ecff]" },
      { label: "Style", value: "Soft, Clear, Human", color: "bg-[#ebfff5]" },
      { label: "Output", value: "Insight to Action", color: "bg-[#fff1ea]" },
    ],
    about: {
      eyebrow: "About",
      title: "データと人間のあいだに、使えるAI体験をつくる",
      paragraphs: [
        "国内IT企業で、広告制作と生成AI推進を掛け持ちしながら働いています。現場のど真ん中にいながら、「これAIでなんとかならないかな」をずっとやってきました。",
        "社内AI講座も担当していて、AIを「すごい技術」じゃなくて「明日から使える相棒」として届けるのが好きです。",
        "哲学とSF映画とオカルトが好きで、複雑なものを構造として捉え直すクセが、たぶんAI設計にも出ています。",
        "技術を学ぼうと思って使ったことは、一度もないんです。誰かの「これ大変」を聞いて、AIに相談して、気づいたら動くものができていた。その繰り返しです。",
        "誰かの「できなかった」を、自分の「やってみよう」に変えることが、私のスタイルです。",
      ],
    },
    profile: {
      eyebrow: "Profile",
      highlights: [
        "国内IT企業で広告制作と生成AI推進を横断",
        "現場の“めんどくさい”を解消するツールを日々自作",
        "ドゥルーズ哲学・SF映画・オカルトから発想を得る",
      ],
      themeLabel: "Theme",
      themeValue: "「データと人間をつなぐAI」の設計",
    },
    projects: {
      eyebrow: "Projects",
      title: "社会課題にやさしく触れるAIプロジェクト",
      impactLabel: "Impact",
      githubLabel: "GitHub",
      featuredBadge: "⭐ Featured",
      featuredSectionTitle: "🌟 Featured Projects",
      featuredSectionSubtitle: "メイナを構成する3つの軸",
      categoryRailLabel: "カテゴリ",
      tabsListAriaLabel: "プロジェクトをカテゴリで絞り込む",
      tabs: projectTabsJa,
      items: portfolioProjectsJa,
    },
    skills: {
      eyebrow: "Skills",
      title: "データ理解から体験設計まで",
      groups: [
        {
          title: "🤖 AI / Data",
          items: [
            "Gemini API",
            "ChatGPT API",
            "Google AI Studio",
            "Genspark活用",
            "LLMアプリ設計",
            "プロンプト設計・評価・改善",
            "RAG",
            "データ分析・可視化",
            "地理データ分析",
          ],
        },
        {
          title: "💻 Web開発",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Vercel",
            "Framer Motion / CSS Animation",
          ],
        },
        {
          title: "⚙️ 自動化 / 業務改善",
          items: [
            "Python",
            "Streamlit",
            "folium",
            "Google Apps Script (GAS)",
            "n8n",
            "Slack API",
            "LINE API",
            "Google Sheets自動化",
            "VOICEVOX / Web Speech API",
          ],
        },
        {
          title: "📊 プロダクト / 企画",
          items: [
            "新規事業企画・提案",
            "ROI分析",
            "AI講座設計・実施",
            "社内AI推進・変革支援",
            "ユーザーインタビュー",
            "要件整理",
            "PoC・MVP設計",
            "クリーンアーキテクチャ設計",
            "多言語UI設計（i18n）",
          ],
        },
      ],
    },
    blog: {
      eyebrow: "Blog",
      title: "NoteでAI活用の実践知を発信",
      posts: [
        {
          title: "AI活用シリーズ",
          description:
            "生成AI推進担当として、現場で得た実践知や試行錯誤をNoteで継続発信。導入の壁、実装の工夫、非エンジニア視点でのAI活用を言語化しています。",
          url: "https://note.com/mei_0209",
          metric:
            '"止まらずに考え続け、動き続けてきた時間が、少しずつ「役割」として周りに受け取られるようになってきた" ── 生成AI推進の1年間を綴った実践記録',
          cta: "Noteを読む",
        },
      ],
      focusEyebrow: "Writing Focus",
      focusItems: [
        "非エンジニア視点でのAI導入と試行錯誤",
        "現場の業務改善に効く小さな自動化の実践例",
        "CTOやエンジニアと進める生成AI推進のリアル",
      ],
      highlightLabel: "Highlight",
    },
    contact: {
      eyebrow: "Contact",
      title: "発信と開発の両方から、AIの使い道を広げています",
      description:
        "自治体DX、業務自動化、AI教育、現場起点のプロダクトづくりに関心があります。活動の入口として、NoteとGitHubを公開しています。",
      noteLabel: "Noteを見る",
      githubLabel: "GitHubを見る",
      backToTop: "トップへ戻る",
    },
  },
  en: {
    heroBadge: "Pastel AI Portfolio",
    name: "Meina Miyasaka",
    role: "Generative AI Enablement / AI Product Creator",
    catchphrase:
      'Even without being an engineer, AI can help you change the structure itself.',
    intro:
      'At a domestic IT company, I work across content production and generative AI enablement, building tools that remove day-to-day friction from the field.',
    ctaProjects: "View Projects",
    ctaAbout: "About Me",
    heroCards: [
      { label: "Focus", value: "AI × Civic Design", color: "bg-[#f3ecff]" },
      { label: "Style", value: "Soft, Clear, Human", color: "bg-[#ebfff5]" },
      { label: "Output", value: "Insight to Action", color: "bg-[#fff1ea]" },
    ],
    about: {
      eyebrow: "About",
      title: "Designing practical AI experiences between data and people",
      paragraphs: [
        "At a domestic IT company, I work across content production and generative AI enablement. My day-to-day work includes advertorial planning, video editing, parenting-related events, and Instagram initiatives, while also embedding AI naturally into real operational workflows.",
        "As the person responsible for generative AI enablement, I also design and run internal AI workshops. I focus on making AI feel less like an intimidating technology and more like a practical partner people can use from the next day.",
        "I study Deleuzian philosophy at The Open University of Japan, and I draw inspiration from science fiction films and the occult. My current theme is designing AI that connects data and people through usable products.",
      ],
    },
    profile: {
      eyebrow: "Profile",
      highlights: [
        "Working across content production and generative AI enablement at a domestic IT company",
        "Building small tools every day to remove operational friction",
        "Inspired by philosophy, science fiction, and the occult",
      ],
      themeLabel: "Theme",
      themeValue: "Designing AI that connects data and people",
    },
    projects: {
      eyebrow: "Projects",
      title: "AI projects shaped around real-world problems",
      impactLabel: "Impact",
      githubLabel: "GitHub",
      featuredBadge: "⭐ Featured",
      featuredSectionTitle: "🌟 Featured Projects",
      featuredSectionSubtitle: "Three pillars that define Meina's work",
      categoryRailLabel: "Categories",
      tabsListAriaLabel: "Filter projects by category",
      tabs: projectTabsEn,
      items: portfolioProjectsEn,
    },
    skills: {
      eyebrow: "Skills",
      title: "From data understanding to product design",
      groups: [
        {
          title: "AI / Data",
          items: [
            "Gemini API",
            "ChatGPT API",
            "Google AI Studio",
            "Genspark workflow use",
            "LLM app design",
            "Prompt design, evaluation, iteration",
            "RAG",
            "Data analysis & visualization",
            "Geospatial data analysis",
          ],
        },
        {
          title: "Web Development",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Vercel",
            "Framer Motion / CSS Animation",
          ],
        },
        {
          title: "Automation / Workflow",
          items: [
            "Python",
            "Streamlit",
            "folium",
            "Google Apps Script (GAS)",
            "n8n",
            "Slack API",
            "LINE API",
            "Google Sheets automation",
            "VOICEVOX / Web Speech API",
          ],
        },
        {
          title: "Product / Strategy",
          items: [
            "New business planning & proposals",
            "ROI analysis",
            "AI workshop design & facilitation",
            "Internal AI enablement & change support",
            "User interviews",
            "Requirement definition",
            "PoC & MVP design",
            "Clean architecture design",
            "Multilingual UI design (i18n)",
          ],
        },
      ],
    },
    blog: {
      eyebrow: "Blog",
      title: "Sharing practical AI learnings on Note",
      posts: [
        {
          title: "AI Practice Series",
          description:
            "I write about practical AI adoption, experiments, and lessons learned from real operations, especially from a non-engineer perspective.",
          url: "https://note.com/mei_0209",
          metric: "Featured post earned 13 likes",
          cta: "Read on Note",
        },
      ],
      focusEyebrow: "Writing Focus",
      focusItems: [
        "AI adoption through a non-engineer lens",
        "Small automations that improve everyday operations",
        "What generative AI enablement looks like with CTOs and engineers",
      ],
      highlightLabel: "Highlight",
    },
    contact: {
      eyebrow: "Contact",
      title: "Expanding what AI can do through both building and writing",
      description:
        "I am interested in GovTech, workflow automation, AI education, and products grounded in real operations. Note and GitHub are the best places to start.",
      noteLabel: "Visit Note",
      githubLabel: "View GitHub",
      backToTop: "Back to Top",
    },
  },
} as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

type ProjectPortfolioLabels = {
  impactLabel: string;
  githubLabel: string;
  featuredBadge: string;
};

function ProjectPortfolioCard({
  project,
  labels,
  variant,
}: {
  project: PortfolioProject;
  labels: ProjectPortfolioLabels;
  variant: "featured" | "grid";
}) {
  const isFeatured = variant === "featured";
  const headerHeight = isFeatured ? "h-32 sm:h-36" : "h-28";
  const cardShell = isFeatured
    ? "min-h-[28rem] border-[#d9cdfd] bg-[linear-gradient(180deg,_#fffdfd,_#fcf9ff)] p-6 shadow-[0_24px_70px_rgba(181,157,247,0.2)] sm:min-h-[30rem] sm:p-7"
    : `min-h-[26rem] p-5 sm:min-h-[28rem] sm:p-6 ${
        project.specialBadge
          ? "border-[#f2d9ea] shadow-[0_18px_55px_rgba(236,181,210,0.18)]"
          : "border-white"
      }`;

  return (
    <motion.article
      layout={false}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={{
        y: -10,
        boxShadow: "0 24px 70px rgba(148, 163, 184, 0.18)",
      }}
      className={`group block w-full max-w-full rounded-[2rem] border bg-white shadow-[0_14px_45px_rgba(148,163,184,0.12)] ${cardShell}`}
    >
      <div className={`relative ${headerHeight} rounded-[1.5rem] bg-gradient-to-br ${project.accent}`}>
        {isFeatured ? (
          <div className="absolute right-3 top-3 z-10 max-w-[min(100%,12rem)] rounded-full border border-[#eadfff] bg-[#fffdfd]/95 px-3 py-1 text-[10px] font-semibold tracking-wide text-[#6b4fd6] shadow-sm backdrop-blur sm:right-4 sm:top-4 sm:text-xs">
            {labels.featuredBadge}
          </div>
        ) : null}
        {project.topBadge ? (
          <div
            className={`absolute top-3 max-w-[calc(100%-1.5rem)] rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium text-[#b86f94] backdrop-blur sm:top-4 sm:text-xs ${
              isFeatured ? "left-3 sm:left-4" : "right-3 sm:right-4"
            }`}
          >
            {project.topBadge}
          </div>
        ) : null}
      </div>
      <div className="mt-5 w-full max-w-full overflow-visible sm:mt-6">
        <div className="flex w-full flex-wrap items-start gap-2">
          <span className="inline-flex max-w-full whitespace-normal break-words rounded-full bg-slate-100 px-3 py-1 text-xs font-medium leading-5 text-slate-500">
            {project.category}
          </span>
          {project.specialBadge ? (
            <span className="inline-flex max-w-full whitespace-normal break-words rounded-full bg-[#fff1f7] px-3 py-1 text-xs font-medium leading-5 text-[#b86f94]">
              {project.specialBadge}
            </span>
          ) : null}
        </div>
        <h3
          className={`mt-4 break-words font-semibold text-slate-800 ${
            isFeatured ? "text-xl sm:text-2xl md:text-[1.65rem]" : "text-xl sm:text-2xl"
          }`}
        >
          {project.title}
        </h3>
        {project.reason ? (
          <p className="mt-3 break-words text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
            {project.reason}
          </p>
        ) : null}
        <p className="mt-4 break-words text-sm leading-7 text-slate-600">{project.description}</p>
        <div className="mt-5 w-full max-w-full rounded-[1.5rem] bg-[#faf7ff] p-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8e78db]">{labels.impactLabel}</p>
          <p
            className={`mt-2 whitespace-normal break-words font-semibold leading-7 text-slate-800 ${
              isFeatured ? "text-lg sm:text-xl md:text-2xl" : "text-lg sm:text-xl"
            }`}
          >
            {project.impact}
          </p>
          <p className="mt-1 whitespace-normal break-words text-sm leading-6 text-slate-500">{project.impactNote}</p>
        </div>
        <div className="mt-5 flex w-full flex-wrap items-start gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="inline-flex max-w-full whitespace-normal break-words rounded-full bg-[#f7f7fb] px-3 py-1 text-xs leading-5 text-slate-500"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col gap-3 overflow-visible sm:mt-8 sm:flex-row sm:flex-wrap">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#f4efff] px-4 py-2 text-sm font-medium text-[#7c61d6] transition group-hover:bg-[#ede5ff] sm:w-auto"
          >
            {project.linkLabel}
          </a>
        ) : null}
        {project.downloadHref ? (
          <a
            href={project.downloadHref}
            download
            className="inline-flex w-full items-center justify-center rounded-full border border-[#d8cef8] bg-[#faf6ff] px-4 py-2 text-sm font-medium text-[#7c61d6] transition hover:bg-[#f2eaff] sm:w-auto"
          >
            {project.downloadLabel}
          </a>
        ) : null}
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 sm:w-auto"
          >
            {labels.githubLabel}
          </a>
        ) : null}
        {project.status ? (
          <span className="inline-flex w-full items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-500 sm:w-auto">
            {project.status}
          </span>
        ) : null}
      </div>
      {project.helperText ? (
        <p className="mt-3 break-words text-xs leading-6 text-slate-500">{project.helperText}</p>
      ) : null}
    </motion.article>
  );
}

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function FadeInSection({ children, className = "", id }: FadeInSectionProps) {
  return (
    <motion.section
      id={id}
      className={`w-full ${className}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ja");
  const [projectTab, setProjectTab] = useState<ProjectFilter>("all");
  const content = siteContent[locale];

  const portfolioLabels: ProjectPortfolioLabels = {
    impactLabel: content.projects.impactLabel,
    githubLabel: content.projects.githubLabel,
    featuredBadge: content.projects.featuredBadge,
  };

  const featuredProjects = useMemo(() => {
    return featuredProjectIds
      .map((id) => content.projects.items.find((p) => p.id === id))
      .filter((p): p is PortfolioProject => Boolean(p));
  }, [content.projects.items]);

  const filteredProjects = useMemo(() => {
    const items = content.projects.items;
    const filtered =
      projectTab === "all" ? [...items] : items.filter((p) => p.filterCategory === projectTab);
    const orderMap = new Map<string, number>(
      portfolioProjectDisplayOrder.map((id, index) => [id, index]),
    );
    filtered.sort((a, b) => (orderMap.get(a.id) ?? 999) - (orderMap.get(b.id) ?? 999));
    return filtered;
  }, [content.projects.items, projectTab]);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-6 right-0 z-40 sm:bottom-8"
        initial={{ x: "15vw", opacity: 0 }}
        animate={{ x: "-110vw", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 6.8, ease: "linear", times: [0, 0.08, 0.92, 1] }}
      >
        <motion.span
          className="block text-4xl sm:text-5xl"
          animate={{ y: [0, -4, 0, 4, 0] }}
          transition={{ duration: 0.5, ease: "easeInOut", repeat: 8 }}
        >
          🐈
        </motion.span>
      </motion.div>

      <header className="sticky top-0 z-20 border-b border-white/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <a
            href="#top"
            className="text-xs font-semibold tracking-[0.2em] text-slate-600 sm:text-sm"
          >
            MEINA MIYASAKA
          </a>
          <nav aria-label="Primary navigation" className="w-full sm:w-auto">
            <div className="flex flex-col gap-3 sm:items-end">
              <ul className="flex flex-wrap items-center gap-2 text-xs text-slate-500 sm:gap-4 sm:text-sm">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="inline-flex max-w-full rounded-full px-3 py-1.5 transition hover:bg-[#f4efff] hover:text-slate-700"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2">
                {(["ja", "en"] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLocale(lang)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition sm:text-sm ${
                      locale === lang
                        ? "bg-[#b59df7] text-white shadow-[0_8px_20px_rgba(181,157,247,0.24)]"
                        : "bg-[#f4efff] text-slate-600 hover:bg-[#ede5ff]"
                    }`}
                    aria-pressed={locale === lang}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate">
          <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(229,216,255,0.6),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(214,248,236,0.55),_transparent_32%),radial-gradient(circle_at_bottom,_rgba(255,227,214,0.65),_transparent_34%)]" />
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:gap-10 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl min-w-0"
            >
              <span className="inline-flex max-w-full rounded-full border border-[#eadfff] bg-[#f7f1ff] px-4 py-2 text-xs font-medium text-slate-600 sm:text-sm">
                {content.heroBadge}
              </span>
              <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-800 sm:mt-6 sm:text-5xl md:text-6xl">
                {content.name}
              </h1>
              <p className="mt-4 max-w-2xl break-words text-lg leading-8 text-slate-600 sm:mt-5 sm:text-2xl sm:leading-9">
                {content.role}
              </p>
              <p className="mt-4 max-w-2xl break-words text-sm leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
                {content.catchphrase}
              </p>
              <p className="mt-4 max-w-3xl break-words text-sm leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
                {content.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#projects"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#b59df7] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(181,157,247,0.28)] transition hover:-translate-y-0.5 hover:bg-[#a78cf3] sm:w-auto"
                >
                  {content.ctaProjects}
                </a>
                <a
                  href="#about"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#d9f2e7] bg-white px-6 py-3 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:border-[#bde8d8] hover:bg-[#f4fffb] sm:w-auto"
                >
                  {content.ctaAbout}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
              className="grid gap-4 md:grid-cols-3"
            >
              {content.heroCards.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-[2rem] border border-white/70 ${item.color} p-5 shadow-[0_18px_50px_rgba(148,163,184,0.12)] sm:p-6`}
                >
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-700">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 sm:gap-24 sm:px-6 sm:pb-24 lg:px-8">
          <FadeInSection id="about" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="min-w-0 rounded-[2rem] border border-[#efe7ff] bg-[#fcfaff] p-5 shadow-[0_20px_60px_rgba(221,214,254,0.2)] sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9c86e8]">
                {content.about.eyebrow}
              </p>
              <h2 className="mt-4 break-words text-2xl font-semibold text-slate-800 sm:text-3xl">
                {content.about.title}
              </h2>
              {content.about.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`break-words ${
                    index === content.about.paragraphs.length - 1
                      ? "rounded-2xl bg-[#f6f1ff] px-4 py-4 text-base font-medium leading-8 text-slate-700 shadow-[0_10px_30px_rgba(181,157,247,0.12)]"
                      : "text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
                  } ${
                    index === 0 ? "mt-5" : "mt-4"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="min-w-0 rounded-[2rem] border border-[#dff4ea] bg-[#f7fffb] p-5 shadow-[0_20px_60px_rgba(209,250,229,0.22)] sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#65b59a]">
                {content.profile.eyebrow}
              </p>
              <div className="mt-5 space-y-4 text-slate-600">
                {content.profile.highlights.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/80 p-4 text-sm leading-7 sm:text-base">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] bg-white/80 p-5">
                <p className="text-sm font-medium text-slate-500">{content.profile.themeLabel}</p>
                <p className="mt-2 break-words text-base font-semibold text-slate-700 sm:text-lg">
                  {content.profile.themeValue}
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection id="projects" className="w-full space-y-10 sm:space-y-12">
            <div className="w-full max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ef9b73]">
                {content.projects.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-800 sm:text-3xl">
                {content.projects.title}
              </h2>
            </div>

            <div className="space-y-5">
              <div className="max-w-2xl space-y-2">
                <p className="text-sm font-semibold tracking-tight text-slate-800 sm:text-base">
                  {content.projects.featuredSectionTitle}
                </p>
                <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {content.projects.featuredSectionSubtitle}
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
                {featuredProjects.map((project) => (
                  <ProjectPortfolioCard
                    key={project.id}
                    project={project}
                    labels={portfolioLabels}
                    variant="featured"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                {content.projects.categoryRailLabel}
              </p>
              <div
                className="-mx-1 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                role="tablist"
                aria-label={content.projects.tabsListAriaLabel}
              >
                <div className="flex w-max min-w-full gap-2 px-1 sm:flex-wrap sm:gap-2.5">
                  {content.projects.tabs.map((tab) => {
                    const active = projectTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setProjectTab(tab.id)}
                        className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition sm:text-sm ${
                          active
                            ? "border-[#cfbcff] bg-[#ede5ff] text-[#5b3fb8] shadow-[0_8px_22px_rgba(181,157,247,0.22)]"
                            : "border-transparent bg-[#f8f9fb] text-slate-600 hover:border-[#e5e7eb] hover:bg-[#f4efff]/80"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={projectTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
              >
                {filteredProjects.map((project) => (
                  <ProjectPortfolioCard
                    key={project.id}
                    project={project}
                    labels={portfolioLabels}
                    variant="grid"
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </FadeInSection>

          <FadeInSection id="skills" className="space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#83baa5]">
                {content.skills.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-800 sm:text-3xl">
                {content.skills.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {content.skills.groups.map((group) => (
                <motion.div
                  key={group.title}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 60px rgba(148, 163, 184, 0.14)",
                  }}
                  className="min-w-0 rounded-[2rem] border border-[#f2eefc] bg-[#fffdfd] p-5 shadow-[0_14px_40px_rgba(148,163,184,0.08)] sm:p-6"
                >
                  <h3 className="break-words text-xl font-semibold text-slate-800">
                    {group.title}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-3 text-sm leading-7 text-slate-600">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="max-w-full whitespace-normal break-words rounded-full border border-[#ece7fb] bg-[#faf8ff] px-4 py-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection id="blog" className="space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#a07ae8]">
                {content.blog.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-800 sm:text-3xl">
                {content.blog.title}
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              {content.blog.posts.map((post) => (
                <motion.article
                  key={post.title}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 60px rgba(148, 163, 184, 0.14)",
                  }}
                  className="min-w-0 rounded-[2rem] border border-[#efe7ff] bg-[#fcfaff] p-5 shadow-[0_14px_40px_rgba(148,163,184,0.08)] sm:p-8"
                >
                  <span className="inline-flex max-w-full rounded-full bg-[#f2ebff] px-3 py-1 text-xs font-medium text-[#8e78db]">
                    Note
                  </span>
                  <h3 className="mt-4 break-words text-xl font-semibold text-slate-800 sm:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-4 break-words text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {post.description}
                  </p>
                  <div className="mt-6 rounded-[1.5rem] bg-white p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8e78db]">
                      {content.blog.highlightLabel}
                    </p>
                    <p className="mt-2 break-words text-lg font-semibold text-slate-800 sm:text-xl">
                      {post.metric}
                    </p>
                  </div>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#b59df7] px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#a78cf3] sm:w-auto"
                  >
                    {post.cta}
                  </a>
                </motion.article>
              ))}

              <div className="min-w-0 rounded-[2rem] border border-[#dff4ea] bg-[#f7fffb] p-5 shadow-[0_14px_40px_rgba(148,163,184,0.08)] sm:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#65b59a]">
                  {content.blog.focusEyebrow}
                </p>
                <div className="mt-5 space-y-4 text-slate-600">
                  {content.blog.focusItems.map((item) => (
                    <div key={item} className="rounded-2xl bg-white/80 p-4 text-sm leading-7 sm:text-base">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection id="contact" className="pb-8">
            <div className="min-w-0 rounded-[2rem] border border-[#ffe5da] bg-[linear-gradient(135deg,_#fff5ef,_#f6f4ff_55%,_#effdf7)] p-5 shadow-[0_18px_55px_rgba(251,191,153,0.18)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#de8d66]">
                {content.contact.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-800 sm:text-3xl">
                {content.contact.title}
              </h2>
              <p className="mt-5 max-w-2xl break-words text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                {content.contact.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="https://note.com/mei_0209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-800 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-700 sm:w-auto"
                >
                  {content.contact.noteLabel}
                </a>
                <a
                  href="https://github.com/nanako1129-g/koelab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white bg-white/80 px-6 py-3 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                >
                  {content.contact.githubLabel}
                </a>
                <a
                  href="#top"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white bg-white/80 px-6 py-3 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                >
                  {content.contact.backToTop}
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </main>
    </div>
  );
}
