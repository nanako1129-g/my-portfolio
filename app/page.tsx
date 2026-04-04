"use client";

import { motion } from "framer-motion";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const profileHighlights = [
  "コネヒト株式会社で広告制作と生成AI推進を横断",
  "現場の“めんどくさい”を解消するツールを日々自作",
  "ドゥルーズ哲学・SF映画・オカルトから発想を得る",
];

const projects = [
  {
    title: "こえラボ",
    description:
      "住民アンケートの声をAIで分析し、論点抽出から政策提案までを支援する自治体向けツール。",
    category: "Policy AI / 自治体DX",
    accent: "from-[#e6dcff] to-[#dff8ee]",
    tech: ["Python", "Streamlit", "Gemini API", "pdfplumber"],
    href: "https://koelab-jcpyclka4upmbz6bzderbq.streamlit.app",
    linkLabel: "デモを見る",
    github: "https://github.com/nanako1129-g/koelab",
    impact: "1,888件を数分で分析",
    impactNote: "信頼度 0.9〜0.95",
  },
  {
    title: "業務委託更新自動チェックツール",
    description:
      "業務委託契約の更新日を自動監視し、1ヶ月前・2週間前に人事担当者と部署担当者へSlackで自動DM。登録から更新までSlackワークフローで完結。",
    category: "業務自動化 / HR Tech",
    accent: "from-[#dcf7ef] to-[#e8f6ff]",
    tech: ["GAS", "Slack API", "Slack Workflow Builder", "Google Sheets"],
    impact: "契約更新の抜け漏れゼロ",
    impactNote: "毎朝9時に自動チェック",
  },
  {
    title: "行政文書バスター",
    description:
      "官公庁の入札PDF仕様書を自動解析し、提出書類・期限・エビデンスをスプレッドシートに出力。全項目に原文引用を付与してハルシネーションを抑制。",
    category: "Document AI / 業務効率化",
    accent: "from-[#fff0df] to-[#efe7ff]",
    tech: ["GAS", "Gemini API", "Google Drive API"],
    impact: "1案件1時間超を約1分に短縮",
    impactNote: "全項目に原文引用を自動付与",
  },
  {
    title: "営業支援ツール（競合PR自動収集）",
    description:
      "競合PR・タイアップ情報を2週間ごとに自動収集し、ママリ向け提案たたき台をGeminiで自動生成。結果をSlackで営業チームへ通知。",
    category: "Sales Automation / マーケティング",
    accent: "from-[#e9e2ff] to-[#ffe7da]",
    tech: ["GAS", "Gemini API", "Slack API", "Google Sheets"],
    impact: "提案準備を自動化",
    impactNote: "営業チームのリサーチ工数を大幅削減",
  },
  {
    title: "動画テロップ校閲ツール",
    description:
      "YouTube動画・mp4をGoogle AI StudioのGeminiに読み込ませ、テロップの誤字脱字・表記ゆれ・固有名詞ミスをタイムスタンプ付きで自動検出。",
    category: "Video AI / 品質管理",
    accent: "from-[#dff8ee] to-[#fff0df]",
    tech: ["Google AI Studio", "Gemini", "プロンプトエンジニアリング"],
    impact: "10分動画を5分以内にスクリーニング",
    impactNote: "校閲時間を大幅短縮",
  },
  {
    title: "動画解析ツール（テロップ変化点抽出）",
    description:
      "動画をアップロードするとテロップの変化点を自動検出し、タイムスタンプ付き画像一覧・Excel・PowerPoint・ZIPで出力。",
    category: "Video AI / 制作支援",
    accent: "from-[#ffe4d9] to-[#fff1cc]",
    tech: ["Python", "OpenCV", "Gradio", "pandas", "openpyxl", "python-pptx"],
    impact: "1時間のスクショ作業を5分に短縮",
    impactNote: "出力形式を一括生成",
  },
  {
    title: "Gemini Gem 誤字脱字チェックツール",
    description:
      "Gemini Gemを活用し、3つの文書を同時に誤字脱字チェックできるツール。上司の依頼で開発し、実導入済み。",
    category: "ドキュメントAI / 業務効率化",
    accent: "from-[#f3ecff] to-[#e8fff7]",
    tech: ["Gemini Gem", "プロンプト設計"],
    impact: "3文書を同時校閲",
    impactNote: "複数文書の確認を並列自動化",
  },
  {
    title: "LINE Bot × こえラボ",
    description:
      "市民がLINEから気軽に声を届けられるチャットボット。n8nでRAG実装し、リッチメニューで3つの導線を提供。",
    category: "Civic UX / 自治体DX",
    accent: "from-[#dcf7ef] to-[#e9e2ff]",
    tech: ["n8n", "LINE API", "Gemini API", "Google Sheets"],
    impact: "構想・開発中",
    impactNote: "RAGとLINE導線を統合",
    status: "構想・開発中",
  },
  {
    title: "Slack内部相談窓口フロー",
    description:
      "匿名相談対応のSlackワークフロー設計。ボタンから相談フォームを起動し、事務局3名に自動DM、Googleスプレッドシートにログ保存。",
    category: "社内DX / HR Tech",
    accent: "from-[#eaf8ff] to-[#eef3ff]",
    tech: ["Slack Workflow Builder", "Google Sheets"],
    impact: "10〜15分で構築可能",
    impactNote: "匿名相談システムを即導入",
  },
  {
    title: "GAS社内AI講座",
    description:
      "「AIに日本語で話しかけるだけでGASコードが作れる」をテーマに、Googleフォーム自動返信システムの作り方を解説した非エンジニア向け社内研修資料。",
    category: "AI教育 / 社内研修",
    accent: "from-[#fff2e9] to-[#f0edff]",
    tech: ["GAS", "Gemini", "ChatGPT"],
    impact: "非エンジニアでも1日で習得",
    impactNote: "GAS自動化の初学者研修として活用",
  },
  {
    title: "Genspark漫画化ツール活用提案",
    description:
      "短編小説の漫画化をGensparkで効率化する提案。非エンジニアが2時間で外注レベル品質を達成し、CTOへのROI付き正式提案書として作成。",
    category: "コンテンツ制作 / 業務効率化",
    accent: "from-[#fff0df] to-[#dff8ee]",
    tech: ["Genspark", "プロンプト設計"],
    impact: "外注比89〜95%コスト削減",
    impactNote: "作業時間を1/4に短縮",
  },
  {
    title: "Noteブログ（AI活用シリーズ）",
    description:
      "生成AI推進担当として、現場でのAI活用ノウハウや試行錯誤をNoteで発信。「やってみたいしかなかった私が、エンジニアやCTOと生成AI推進を続けてきた話」はスキ13件を獲得。",
    category: "発信 / ナレッジシェア",
    accent: "from-[#ece8ff] to-[#fff2ea]",
    tech: ["Note", "AI活用発信"],
    href: "https://note.com/mei_0209",
    linkLabel: "Noteを見る",
    impact: "スキ13件を獲得",
    impactNote: "現場のAI活用ノウハウを継続発信",
  },
  {
    title: "介護学習サポート猫Bot",
    description:
      "友人の介護員養成講座の学習をサポートするために開発。厚生労働省の介護員養成講座テキスト（PDF）をRAG化し、LINEで話しかけると介護の知識を猫キャラクターがわかりやすく教えてくれるチャットボット。",
    category: "Education AI / RAG活用",
    accent: "from-[#e7f7ef] to-[#efe5ff]",
    tech: ["n8n", "LINE API", "Gemini API", "RAG", "PDF解析"],
    impact: "自主学習を24時間サポート",
    impactNote: "公式テキストベースのRAGで回答の信頼性を担保",
    status: "個人開発・運用中",
    specialBadge: "猫キャラでやさしく解説",
  },
];

const skillGroups = [
  {
    title: "AI / Data",
    items: [
      "Gemini API",
      "ChatGPT API",
      "LLMアプリ設計",
      "RAG",
      "プロンプト設計・評価・改善",
      "Google AI Studio",
      "Genspark活用",
      "データ分析・可視化",
    ],
  },
  {
    title: "自動化 / 開発",
    items: [
      "Python",
      "Streamlit",
      "Google Apps Script (GAS)",
      "n8n",
      "Slack API",
      "LINE API",
      "Google Sheets自動化",
    ],
  },
  {
    title: "プロダクト / 企画",
    items: [
      "新規事業企画・提案",
      "ROI分析",
      "AI講座設計・実施",
      "ユーザーインタビュー",
      "要件整理",
      "社内AI推進・変革支援",
    ],
  },
];

const blogPosts = [
  {
    title: "AI活用シリーズ",
    description:
      "生成AI推進担当として、現場で得た実践知や試行錯誤をNoteで継続発信。導入の壁、実装の工夫、非エンジニア視点でのAI活用を言語化しています。",
    url: "https://note.com/mei_0209",
    metric: "代表記事はスキ13件",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function FadeInSection({ children, className = "", id }: FadeInSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      <header className="sticky top-0 z-20 border-b border-white/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <a
            href="#top"
            className="text-xs font-semibold tracking-[0.2em] text-slate-600 sm:text-sm"
          >
            MEINA MIYASAKA
          </a>
          <nav aria-label="Primary navigation" className="w-full sm:w-auto">
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
          </nav>
        </div>
      </header>

      <main id="top" className="overflow-hidden">
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
                Pastel AI Portfolio
              </span>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-800 sm:mt-6 sm:text-6xl">
                宮坂めい奈
              </h1>
              <p className="mt-4 max-w-2xl break-words text-lg leading-8 text-slate-600 sm:mt-5 sm:text-2xl sm:leading-9">
                生成AI推進担当 / AIプロダクトクリエイター
              </p>
              <p className="mt-4 max-w-2xl break-words text-sm leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
                非エンジニアでも、AIを相棒にすれば&quot;構造&quot;から変えられる
              </p>
              <p className="mt-4 max-w-3xl break-words text-sm leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
                コネヒト株式会社で広告制作×生成AI推進の二足のわらじ。現場の&quot;めんどくさい&quot;を解消するツールを自作する毎日です。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#projects"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#b59df7] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(181,157,247,0.28)] transition hover:-translate-y-0.5 hover:bg-[#a78cf3] sm:w-auto"
                >
                  Projectsを見る
                </a>
                <a
                  href="#about"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#d9f2e7] bg-white px-6 py-3 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:border-[#bde8d8] hover:bg-[#f4fffb] sm:w-auto"
                >
                  Aboutを見る
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
              className="grid gap-4 md:grid-cols-3"
            >
              {[
                { label: "Focus", value: "AI × Civic Design", color: "bg-[#f3ecff]" },
                { label: "Style", value: "Soft, Clear, Human", color: "bg-[#ebfff5]" },
                { label: "Output", value: "Insight to Action", color: "bg-[#fff1ea]" },
              ].map((item) => (
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
                About
              </p>
              <h2 className="mt-4 break-words text-2xl font-semibold text-slate-800 sm:text-3xl">
                データと人間のあいだに、使えるAI体験をつくる
              </h2>
              <p className="mt-5 break-words text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                コネヒト株式会社で、広告制作と生成AI推進を横断しながら働いています。広告記事制作、動画編集、ママリイベント開催、Instagram施策など、現場に近い仕事を担いながら、業務の中にAIを自然に組み込むことを実践しています。
              </p>
              <p className="mt-4 break-words text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                生成AI推進担当として、社内AI講座の企画・実施も担当。新入社員や中途社員にも伝わる形で、AIを「すごい技術」ではなく「明日から使える相棒」として届ける設計を続けています。
              </p>
              <p className="mt-4 break-words text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                放送大学でドゥルーズ哲学を学び、SF映画とオカルトをこよなく愛する視点から、複雑なものを構造として捉え直すのが得意です。現在は「データと人間をつなぐAI」の設計をテーマに、複数のプロダクトを開発中です。
              </p>
            </div>

            <div className="min-w-0 rounded-[2rem] border border-[#dff4ea] bg-[#f7fffb] p-5 shadow-[0_20px_60px_rgba(209,250,229,0.22)] sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#65b59a]">
                Profile
              </p>
              <div className="mt-5 space-y-4 text-slate-600">
                {profileHighlights.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/80 p-4 text-sm leading-7 sm:text-base">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] bg-white/80 p-5">
                <p className="text-sm font-medium text-slate-500">Theme</p>
                <p className="mt-2 break-words text-base font-semibold text-slate-700 sm:text-lg">
                  「データと人間をつなぐAI」の設計
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection id="projects" className="space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ef9b73]">
                Projects
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-800 sm:text-3xl">
                社会課題にやさしく触れるAIプロジェクト
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 24px 70px rgba(148, 163, 184, 0.18)",
                  }}
                  className={`group min-w-0 rounded-[2rem] border bg-white p-5 shadow-[0_14px_45px_rgba(148,163,184,0.12)] sm:p-6 ${
                    project.specialBadge
                      ? "border-[#f2d9ea] shadow-[0_18px_55px_rgba(236,181,210,0.18)]"
                      : "border-white"
                  }`}
                >
                  <div
                    className={`relative h-28 rounded-[1.5rem] bg-gradient-to-br ${project.accent}`}
                  >
                    {project.specialBadge ? (
                      <div className="absolute right-3 top-3 max-w-[calc(100%-1.5rem)] rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium text-[#b86f94] backdrop-blur sm:right-4 sm:top-4 sm:text-xs">
                        Cat Friendly
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-5 min-w-0 sm:mt-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex max-w-full whitespace-normal break-words rounded-full bg-slate-100 px-3 py-1 text-xs font-medium leading-5 text-slate-500">
                        {project.category}
                      </span>
                      {project.specialBadge ? (
                        <span className="inline-flex max-w-full whitespace-normal break-words rounded-full bg-[#fff1f7] px-3 py-1 text-xs font-medium leading-5 text-[#b86f94]">
                          {project.specialBadge}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-4 break-words text-xl font-semibold text-slate-800 sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 break-words text-sm leading-7 text-slate-600">
                      {project.description}
                    </p>
                    <div className="mt-5 min-w-0 rounded-[1.5rem] bg-[#faf7ff] p-4">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8e78db]">
                        Impact
                      </p>
                      <p className="mt-2 break-words text-lg font-semibold leading-7 text-slate-800 sm:text-xl">
                        {project.impact}
                      </p>
                      <p className="mt-1 break-words text-sm leading-6 text-slate-500">
                        {project.impactNote}
                      </p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
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

                  <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
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
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 sm:w-auto"
                      >
                        GitHub
                      </a>
                    ) : null}
                    {project.status ? (
                      <span className="inline-flex w-full items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-500 sm:w-auto">
                        {project.status}
                      </span>
                    ) : null}
                  </div>
                </motion.article>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection id="skills" className="space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#83baa5]">
                Skills
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-800 sm:text-3xl">
                データ理解から体験設計まで
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {skillGroups.map((group) => (
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
                Blog
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-800 sm:text-3xl">
                NoteでAI活用の実践知を発信
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              {blogPosts.map((post) => (
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
                      Highlight
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
                    Noteを読む
                  </a>
                </motion.article>
              ))}

              <div className="min-w-0 rounded-[2rem] border border-[#dff4ea] bg-[#f7fffb] p-5 shadow-[0_14px_40px_rgba(148,163,184,0.08)] sm:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#65b59a]">
                  Writing Focus
                </p>
                <div className="mt-5 space-y-4 text-slate-600">
                  <div className="rounded-2xl bg-white/80 p-4 text-sm leading-7 sm:text-base">
                    非エンジニア視点でのAI導入と試行錯誤
                  </div>
                  <div className="rounded-2xl bg-white/80 p-4 text-sm leading-7 sm:text-base">
                    現場の業務改善に効く小さな自動化の実践例
                  </div>
                  <div className="rounded-2xl bg-white/80 p-4 text-sm leading-7 sm:text-base">
                    CTOやエンジニアと進める生成AI推進のリアル
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection id="contact" className="pb-8">
            <div className="min-w-0 rounded-[2rem] border border-[#ffe5da] bg-[linear-gradient(135deg,_#fff5ef,_#f6f4ff_55%,_#effdf7)] p-5 shadow-[0_18px_55px_rgba(251,191,153,0.18)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#de8d66]">
                Contact
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-800 sm:text-3xl">
                発信と開発の両方から、AIの使い道を広げています
              </h2>
              <p className="mt-5 max-w-2xl break-words text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                自治体DX、業務自動化、AI教育、現場起点のプロダクトづくりに関心があります。活動の入口として、NoteとGitHubを公開しています。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="https://note.com/mei_0209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-800 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-700 sm:w-auto"
                >
                  Noteを見る
                </a>
                <a
                  href="https://github.com/nanako1129-g/koelab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white bg-white/80 px-6 py-3 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                >
                  GitHubを見る
                </a>
                <a
                  href="#top"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white bg-white/80 px-6 py-3 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                >
                  トップへ戻る
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </main>
    </div>
  );
}
