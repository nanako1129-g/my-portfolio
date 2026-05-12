export type ProjectFilter = "all" | "civic" | "business" | "entertainment" | "education";

export type PortfolioProject = {
  id: string;
  filterCategory: Exclude<ProjectFilter, "all">;
  title: string;
  reason?: string;
  description: string;
  category: string;
  accent: string;
  tech: string[];
  impact: string;
  impactNote: string;
  href?: string;
  linkLabel?: string;
  downloadHref?: string;
  downloadLabel?: string;
  helperText?: string;
  github?: string;
  status?: string;
  topBadge?: string;
  specialBadge?: string;
};

export const featuredProjectIds = ["sacred-boundary", "katsushika-social-report", "koelab"] as const;

/** グリッド表示の並び（全タブ共通）。Featured 行は `featuredProjectIds` の順。 */
export const portfolioProjectDisplayOrder = [
  "sacred-boundary",
  "katsushika-social-report",
  "koelab",
  "government-doc-buster",
  "takane-no-hanako",
  "ikeoji-bar",
  "asobiba-memo",
  "datesuccess-ai",
  "video-caption-change",
  "video-caption-proof",
  "gemini-gem-proof",
  "slack-consultation",
  "contract-renewal",
  "sales-pr-scan",
  "study-support-cat-bot",
  "gas-workshop",
] as const;

export type ProjectTab = {
  id: ProjectFilter;
  label: string;
};

export const projectTabsJa: ProjectTab[] = [
  { id: "all", label: "すべて" },
  { id: "civic", label: "🏛 Civic / 自治体" },
  { id: "business", label: "⚙️ 業務改善" },
  { id: "entertainment", label: "🎭 エンタメ・体験" },
  { id: "education", label: "🎓 教育・コミュニティ" },
];

export const projectTabsEn: ProjectTab[] = [
  { id: "all", label: "All" },
  { id: "civic", label: "Civic" },
  { id: "business", label: "Business" },
  { id: "entertainment", label: "Entertainment" },
  { id: "education", label: "Education" },
];

export const portfolioProjectsJa: PortfolioProject[] = [
  {
    id: "sacred-boundary",
    filterCategory: "civic",
    title: "Sacred Boundary",
    reason:
      "会話型アプリばかり作ってきたので、Pythonでビッグデータ分析にも挑戦したかった。「聖地は本当に物理的に特異な場所か？」を検証したくて始めた。",
    description:
      "聖地10地点 × 一般地点10地点で、標高・地磁気・偏角・伏角の4軸を比較。AI考察 + 御朱印記録 + 巡礼マップで探索体験を構築。7月に東北フィールドワークで6地点追加予定。",
    category: "Civic Data Science / オカルト×科学",
    accent: "from-[#e8e4ff] to-[#ffe8f0]",
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini API", "地理データ分析"],
    impact: "標高では明確な差を観測（聖地約800m vs 約40m）",
    impactNote: "AI考察キャッシュでGemini呼び出しゼロ化",
    href: "https://sacred-boundary.vercel.app",
    linkLabel: "アプリを見る",
    github: "https://github.com/nanako1129-g/sacred-boundary",
  },
  {
    id: "katsushika-social-report",
    filterCategory: "civic",
    title: "葛飾区ソシャレポくん",
    reason:
      "こえラボの「アンケート分析」を一歩進めて、声とオープンデータをつないだ「根拠付き提案」を作りたかった。",
    description:
      "葛飾区をモデルに、住民の自由記述 × 公共施設 × 人口データを地図上で可視化。不足エリアを色分けし、Geminiで施策案を多言語生成するプロトタイプ。",
    category: "Policy AI / 自治体DX",
    accent: "from-[#e6dcff] to-[#dff8ee]",
    tech: ["Python", "Streamlit", "folium", "Gemini API"],
    impact: "1画面で「現状→根拠→施策案→期待効果」を提示",
    impactNote: "多言語対応（日/英/中）",
  },
  {
    id: "koelab",
    filterCategory: "civic",
    title: "こえラボ",
    reason:
      "同僚の『自治体向け提案書が大変』という一言がきっかけ。セキュリティの制約で実現できなかった悔しさを、オープンデータで自分なりに形にした。",
    description:
      "住民アンケートの声をAIで分析し、論点抽出から政策提案までを支援する自治体向けツール。",
    category: "Policy AI / 自治体DX",
    accent: "from-[#e6dcff] to-[#dff8ee]",
    tech: ["Python", "Streamlit", "Gemini API", "pdfplumber"],
    href: "https://koelab-jcpyclka4upmbz6bzderbq.streamlit.app",
    linkLabel: "デモを見る",
    downloadHref: "/koelab-demo.csv",
    downloadLabel: "サンプルCSVをDL",
    helperText: "こえラボにそのまま入れて試せるデモ用CSVです。",
    github: "https://github.com/nanako1129-g/koelab",
    impact: "1,888件を数分で分析",
    impactNote: "信頼度 0.9〜0.95",
  },
  {
    id: "government-doc-buster",
    filterCategory: "civic",
    title: "行政文書バスター",
    reason:
      "入札PDFを読んでエクセルに反映させる作業を同期が1時間近くかけて作業をしていたのを聞いて、なんとかしたくて作った。ハルシネーション対策で原文引用を全項目に付与する仕組みにこだわった。",
    description:
      "官公庁の入札PDF仕様書を自動解析し、提出書類・期限・エビデンスをスプレッドシートに出力。全項目に原文引用を付与してハルシネーションを抑制。",
    category: "Document AI / 業務効率化",
    accent: "from-[#fff0df] to-[#efe7ff]",
    tech: ["GAS", "Gemini API", "Google Drive API"],
    impact: "1案件1時間超を約1分に短縮",
    impactNote: "全項目に原文引用を自動付与",
  },
  {
    id: "video-caption-change",
    filterCategory: "business",
    title: "動画解析ツール（テロップ変化点抽出）",
    reason:
      "同僚が動画編集の現場で、テロップのスクショを手動でコピペする作業があまりにも大変で、初めてPythonで作ったプロダクト。",
    description:
      "動画をアップロードするとテロップの変化点を自動検出し、タイムスタンプ付き画像一覧・Excel・PowerPoint・ZIPで出力。",
    category: "Video AI / 制作支援",
    accent: "from-[#ffe4d9] to-[#fff1cc]",
    tech: ["Python", "OpenCV", "Gradio", "pandas", "openpyxl", "python-pptx"],
    impact: "1時間のスクショ作業を5分に短縮",
    impactNote: "出力形式を一括生成",
  },
  {
    id: "video-caption-proof",
    filterCategory: "business",
    title: "動画テロップ校閲ツール",
    reason:
      "同僚から動画のテロップ誤字を人の目だけでチェックするのに限界を感じると相談され、試してみた。Google AI StudioのGeminiに動画を読み込ませるだけでタイムスタンプ付きで指摘してくれる。",
    description:
      "YouTube動画・mp4をGoogle AI StudioのGeminiに読み込ませ、テロップの誤字脱字・表記ゆれ・固有名詞ミスをタイムスタンプ付きで自動検出。",
    category: "Video AI / 品質管理",
    accent: "from-[#dff8ee] to-[#fff0df]",
    tech: ["Google AI Studio", "Gemini", "プロンプトエンジニアリング"],
    impact: "10分動画を5分以内にスクリーニング",
    impactNote: "校閲時間を大幅短縮",
  },
  {
    id: "contract-renewal",
    filterCategory: "business",
    title: "業務委託更新自動チェックツール",
    reason:
      "人事から契約更新の抜け漏れが心配という声から生まれた。登録から更新まで全部Slackで完結するように設計した。",
    description:
      "業務委託契約の更新日を自動監視し、1ヶ月前・2週間前に人事担当者と部署担当者へSlackで自動DM。登録から更新までSlackワークフローで完結。",
    category: "業務自動化 / HR Tech",
    accent: "from-[#dcf7ef] to-[#e8f6ff]",
    tech: ["GAS", "Slack API", "Slack Workflow Builder", "Google Sheets"],
    impact: "契約更新の抜け漏れゼロ",
    impactNote: "毎朝9時に自動チェック",
  },
  {
    id: "slack-consultation",
    filterCategory: "business",
    title: "Slack内部相談窓口フロー",
    reason:
      "社内に匿名で相談できる場所が必要だと人事から相談され、設計した。心理的安全性を大切にした仕組みにこだわった。",
    description:
      "匿名相談対応のSlackワークフロー設計。ボタンから相談フォームを起動し、事務局3名に自動DM、Googleスプレッドシートにログ保存。",
    category: "社内DX / HR Tech",
    accent: "from-[#eaf8ff] to-[#eef3ff]",
    tech: ["Slack Workflow Builder", "Google Sheets"],
    impact: "10〜15分で構築可能",
    impactNote: "匿名相談システムを即導入",
  },
  {
    id: "gemini-gem-proof",
    filterCategory: "business",
    title: "Gemini Gem 誤字脱字チェックツール",
    reason:
      "上司から『3つの文書を同時にチェックしたい』という依頼を受けて開発。実際に社内で導入済み。",
    description:
      "Gemini Gemを活用し、3つの文書を同時に誤字脱字チェックできるツール。上司の依頼で開発し、実導入済み。",
    category: "ドキュメントAI / 業務効率化",
    accent: "from-[#f3ecff] to-[#e8fff7]",
    tech: ["Gemini Gem", "プロンプト設計"],
    impact: "3文書を同時校閲",
    impactNote: "複数文書の確認を並列自動化",
  },
  {
    id: "sales-pr-scan",
    filterCategory: "business",
    title: "営業支援ツール（競合PR自動収集）",
    reason:
      "営業チームが毎回手動でリサーチしていた競合PR情報の収集を自動化したくて作った。",
    description:
      "競合PR・タイアップ情報を2週間ごとに自動収集し、子育て向けメディア向けの提案たたき台をGeminiで自動生成。結果をSlackで営業チームへ通知。",
    category: "Sales Automation / マーケティング",
    accent: "from-[#e9e2ff] to-[#ffe7da]",
    tech: ["GAS", "Gemini API", "Slack API", "Google Sheets"],
    impact: "提案準備を自動化",
    impactNote: "営業チームのリサーチ工数を大幅削減",
  },
  {
    id: "study-support-cat-bot",
    filterCategory: "education",
    title: "学習サポート猫Bot",
    reason:
      "友人が仕事と勉強の両立で頑張っているのを見て、応援したくなった。公的な学習資料をもとにRAG構成を組み、LINEで話しかけると猫キャラがやさしく解説し、クイズも出してくれるBotを個人開発した。",
    description:
      "資格学習に取り組む友人をサポートするために開発。学習用PDFをRAG化し、LINEで話しかけると関連知識を猫キャラクターがわかりやすく教えてくれるチャットボット。",
    category: "Education AI / RAG活用",
    accent: "from-[#e7f7ef] to-[#efe5ff]",
    tech: ["n8n", "LINE API", "Gemini API", "RAG", "PDF解析"],
    impact: "自主学習を24時間サポート",
    impactNote: "学習資料ベースのRAGで回答の信頼性を担保",
    status: "個人開発・運用中",
    topBadge: "Cat Friendly",
    specialBadge: "猫キャラでやさしく解説",
  },
  {
    id: "gas-workshop",
    filterCategory: "education",
    title: "GAS社内AI講座",
    reason:
      "非エンジニアの同僚にもAIを使ってほしくて、『日本語で話しかけるだけでGASが作れる』をテーマに研修資料を作った。",
    description:
      "「AIに日本語で話しかけるだけでGASコードが作れる」をテーマに、Googleフォーム自動返信システムの作り方を解説した非エンジニア向け社内研修資料。",
    category: "AI教育 / 社内研修",
    accent: "from-[#fff2e9] to-[#f0edff]",
    tech: ["GAS", "Gemini", "ChatGPT"],
    impact: "非エンジニアでも1日で習得",
    impactNote: "GAS自動化の初学者研修として活用",
  },
  {
    id: "takane-no-hanako",
    filterCategory: "entertainment",
    title: "高嶺の花子さん",
    reason:
      "「言葉の裏側」をAIで可視化したら、大人の繊細な揺れを表現できるのでは、と考えた。",
    description:
      "バツイチ40代男性とのLINE風チャット恋愛ゲーム。表面の応答と\"内心の独白\"を並列生成し、時差表示で「言葉と本音のズレ」を演出する実験的ノベルゲーム。",
    category: "Entertainment AI / プロンプト設計",
    accent: "from-[#ffe8ef] to-[#e8f0ff]",
    tech: ["Next.js 14", "TypeScript", "Gemini API", "CSS Animation"],
    impact: "並列プロンプトでレスポンス速度とUX演出を両立",
    impactNote: "9フェーズのプロポーズ演出まで完走",
    href: "https://takane-no-hanako.vercel.app",
    linkLabel: "アプリを見る",
    github: "https://github.com/nanako1129-g/takane-no-hanako",
  },
  {
    id: "ikeoji-bar",
    filterCategory: "entertainment",
    title: "イケオジの深夜Bar",
    reason:
      "「深夜のオーセンティックバーで愚痴を聞いてもらう」体験を、スマホ1つで再現したかった。",
    description:
      "バーテンダー人格のGeminiと音声/テキストで会話できるWebアプリ。\"飲んだ杯数\"でAIの口調が変化する仕掛け付き。",
    category: "Conversational AI / 体験設計",
    accent: "from-[#fff4e8] to-[#e8dcc8]",
    tech: ["Next.js 15", "TypeScript", "Gemini API", "VOICEVOX", "Web Audio"],
    impact: "3段階の人格遷移を実装（シラフ→ほろ酔い→泥酔）",
    impactNote: "VOICEVOX + Web Speechで音声体験を構築",
    github: "https://github.com/nanako1129-g/ikeoji-bar",
  },
  {
    id: "datesuccess-ai",
    filterCategory: "entertainment",
    title: "DateSuccess AI",
    reason:
      "ハッカソンで、チームメンバーのアイデアを聞いてGemini Canvasで即座にモック化。80分でアイデアから発表まで仕上げた。",
    description:
      "ハッカソンを起点に開発したAIコンシェルジュアプリ。店舗選びや会話準備の認知負荷をAIが肩代わりし、相手との時間に集中できる“余白”をつくるMVPとして設計。",
    category: "Lifestyle AI / Hackathon MVP",
    accent: "from-[#ffe8ef] to-[#efe7ff]",
    tech: ["React", "Tailwind CSS", "GAS", "Gemini API", "Hot Pepper API", "Netlify"],
    impact: "ハッカソン発のMVPを短期間で稼働",
    impactNote: "低コストなサーバーレス構成で素早く検証",
    topBadge: "Hackathon",
    specialBadge: "ハッカソン発MVP",
  },
  {
    id: "asobiba-memo",
    filterCategory: "entertainment",
    title: "あそび場メモ",
    reason:
      "暑い日に小さい子どもと行ける室内遊び場を、\"年齢別の体験メモ\"つきで探したかった。",
    description:
      "室内の遊び場を、写真と体験メモで共有できるSNS型アプリ。「何歳と行ったか」「設備はどうか」を親目線で投稿可能。AIが投稿内容から遊び方提案も生成。",
    category: "Family Tech / コミュニティ",
    accent: "from-[#e8fff5] to-[#fff5ef]",
    tech: ["Next.js", "Supabase", "Vercel", "Gemini API"],
    impact: "親の\"行ってみるまでわからない\"不安を可視化",
    impactNote: "管理者機能 + AI下書き生成まで一通り実装",
    href: "https://asobiba-memo.vercel.app",
    linkLabel: "アプリを見る",
    github: "https://github.com/nanako1129-g/asobiba-memo",
  },
];

export const portfolioProjectsEn: PortfolioProject[] = [
  {
    id: "sacred-boundary",
    filterCategory: "civic",
    title: "Sacred Boundary",
    reason:
      "After building mostly conversational apps, I wanted to try big-data analysis in Python. I started the project to test whether sacred sites are physically distinctive.",
    description:
      "Compares 10 sacred sites × 10 ordinary sites across elevation, geomagnetic field, declination, and inclination. Combines AI commentary, goshuin records, and a pilgrimage map for an exploratory experience. Fieldwork in Tōhoku in July will add six more sites.",
    category: "Civic Data Science / Occult × Science",
    accent: "from-[#e8e4ff] to-[#ffe8f0]",
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini API", "Geospatial analysis"],
    impact: "Clear elevation gap (sacred ~800 m vs ~40 m)",
    impactNote: "Cached AI commentary → zero Gemini calls on repeat views",
    href: "https://sacred-boundary.vercel.app",
    linkLabel: "Open app",
    github: "https://github.com/nanako1129-g/sacred-boundary",
  },
  {
    id: "katsushika-social-report",
    filterCategory: "civic",
    title: "Katsushika Social Report-kun",
    reason:
      "I wanted to push Koe Lab’s survey analysis further by connecting resident voices and open data into evidence-backed proposals.",
    description:
      "A Katsushika Ward–style prototype that maps free-text feedback, public facilities, and population on one map, color-codes shortage areas, and drafts multilingual policy ideas with Gemini.",
    category: "Policy AI / Municipal DX",
    accent: "from-[#e6dcff] to-[#dff8ee]",
    tech: ["Python", "Streamlit", "folium", "Gemini API"],
    impact: "One screen for situation → evidence → ideas → expected impact",
    impactNote: "Multilingual support (JA / EN / ZH)",
  },
  {
    id: "koelab",
    filterCategory: "civic",
    title: "Koe Lab",
    reason:
      "It started from a teammate saying that municipality proposal writing was painfully hard. I wanted to give shape to that frustration on my own using open data.",
    description:
      "A municipality-focused tool that analyzes citizen survey responses with AI, extracts key issues, and supports policy proposal creation.",
    category: "Policy AI / GovTech",
    accent: "from-[#e6dcff] to-[#dff8ee]",
    tech: ["Python", "Streamlit", "Gemini API", "pdfplumber"],
    href: "https://koelab-jcpyclka4upmbz6bzderbq.streamlit.app",
    linkLabel: "Live Demo",
    downloadHref: "/koelab-demo.csv",
    downloadLabel: "Download sample CSV",
    helperText: "A demo CSV you can download and upload into Koe Lab to try it out.",
    github: "https://github.com/nanako1129-g/koelab",
    impact: "Analyzed 1,888 responses in minutes",
    impactNote: "Confidence score: 0.9–0.95",
  },
  {
    id: "government-doc-buster",
    filterCategory: "civic",
    title: "Government Document Buster",
    reason:
      "I heard a coworker was spending nearly an hour reading bid PDFs and copying them into spreadsheets. I wanted to fix that, and I was especially careful to attach source quotations to every field.",
    description:
      "Parses government tender PDFs and outputs required documents, deadlines, and evidence into a spreadsheet, with source quotations attached to every item to reduce hallucinations.",
    category: "Document AI / Operational Efficiency",
    accent: "from-[#fff0df] to-[#efe7ff]",
    tech: ["GAS", "Gemini API", "Google Drive API"],
    impact: "Reduced over 1 hour of work to about 1 minute",
    impactNote: "Automatic source citation for every output item",
  },
  {
    id: "video-caption-change",
    filterCategory: "business",
    title: "Video Analysis Tool (Caption Change Detection)",
    reason:
      "A coworker was manually copying screenshot after screenshot from video editing timelines. It was overwhelming to watch, so I built this as my first Python product.",
    description:
      "Detects caption change points from uploaded videos and exports timestamped image lists, Excel files, PowerPoint files, and ZIP archives in one flow.",
    category: "Video AI / Production Support",
    accent: "from-[#ffe4d9] to-[#fff1cc]",
    tech: ["Python", "OpenCV", "Gradio", "pandas", "openpyxl", "python-pptx"],
    impact: "Cut 1 hour of screenshot work down to 5 minutes",
    impactNote: "Generated multiple output formats at once",
  },
  {
    id: "video-caption-proof",
    filterCategory: "business",
    title: "Video Caption Proofreading Tool",
    reason:
      "A coworker told me they were hitting the limit of proofreading captions by eye alone. I tried feeding the video into Gemini in Google AI Studio, and it started flagging issues with timestamps.",
    description:
      "Uploads YouTube videos and mp4 files to Gemini in Google AI Studio and detects caption typos, notation inconsistencies, and proper noun mistakes with timestamps.",
    category: "Video AI / Quality Assurance",
    accent: "from-[#dff8ee] to-[#fff0df]",
    tech: ["Google AI Studio", "Gemini", "Prompt Engineering"],
    impact: "Screened 10-minute videos in under 5 minutes",
    impactNote: "Significantly reduced proofreading time",
  },
  {
    id: "contract-renewal",
    filterCategory: "business",
    title: "Contract Renewal Auto Checker",
    reason:
      "It came from HR worrying about missed contract renewals. I designed it so everything from registration to renewal could be completed inside Slack.",
    description:
      "Automatically monitors contractor renewal dates and sends Slack DMs to HR and team owners one month and two weeks in advance, all managed through Slack workflows.",
    category: "Workflow Automation / HR Tech",
    accent: "from-[#dcf7ef] to-[#e8f6ff]",
    tech: ["GAS", "Slack API", "Slack Workflow Builder", "Google Sheets"],
    impact: "Zero missed contract renewals",
    impactNote: "Runs every morning at 9:00 AM",
  },
  {
    id: "slack-consultation",
    filterCategory: "business",
    title: "Slack Internal Consultation Flow",
    reason:
      "HR told me there needed to be a place where people could reach out anonymously. I designed the workflow around psychological safety.",
    description:
      "An anonymous consultation workflow on Slack that launches a form from a button, notifies three staff members by DM, and logs the case to Google Sheets.",
    category: "Internal DX / HR Tech",
    accent: "from-[#eaf8ff] to-[#eef3ff]",
    tech: ["Slack Workflow Builder", "Google Sheets"],
    impact: "Built in 10 to 15 minutes",
    impactNote: "Quickly deployable anonymous consultation flow",
  },
  {
    id: "gemini-gem-proof",
    filterCategory: "business",
    title: "Gemini Gem Proofreading Tool",
    reason:
      "My manager asked for a way to check three documents at once. I built it in response, and it has already been adopted internally.",
    description:
      "A proofreading tool built with Gemini Gem that checks three documents at once. It was developed at a manager's request and has already been introduced in practice.",
    category: "Document AI / Operational Efficiency",
    accent: "from-[#f3ecff] to-[#e8fff7]",
    tech: ["Gemini Gem", "Prompt Design"],
    impact: "Proofread 3 documents at the same time",
    impactNote: "Parallelized multi-document review work",
  },
  {
    id: "sales-pr-scan",
    filterCategory: "business",
    title: "Sales Assist Tool (Auto Competitor PR Scan)",
    reason:
      "The sales team was manually researching competitor PR updates every time, so I wanted to automate that collection work.",
    description:
      "Collects competitor PR and tie-up information every two weeks, generates proposal drafts for a parenting-focused media business with Gemini, and sends the results to the sales team via Slack.",
    category: "Sales Automation / Marketing",
    accent: "from-[#e9e2ff] to-[#ffe7da]",
    tech: ["GAS", "Gemini API", "Slack API", "Google Sheets"],
    impact: "Automated proposal preparation",
    impactNote: "Greatly reduced research time for the sales team",
  },
  {
    id: "study-support-cat-bot",
    filterCategory: "education",
    title: "Care Study Support Cat Bot",
    reason:
      "A friend was working hard to balance caregiving work and study, and I wanted to cheer them on. So I built a personal bot that turns official learning materials into RAG and responds through an encouraging cat on LINE.",
    description:
      "A chatbot built to support a friend's caregiver training studies. It turns the official caregiver training PDF text into a RAG system and explains caregiving knowledge through a cat character on LINE.",
    category: "Education AI / RAG",
    accent: "from-[#e7f7ef] to-[#efe5ff]",
    tech: ["n8n", "LINE API", "Gemini API", "RAG", "PDF Parsing"],
    impact: "Supports self-study 24/7",
    impactNote: "Reliability backed by RAG over official learning materials",
    status: "Personal project / live",
    topBadge: "Cat Friendly",
    specialBadge: "Gentle cat guide",
  },
  {
    id: "gas-workshop",
    filterCategory: "education",
    title: "In-house GAS + AI Workshop",
    reason:
      "I wanted non-engineer colleagues to be able to use AI too, so I created training materials around the idea that AI can generate GAS code just from Japanese instructions.",
    description:
      "An internal training deck for non-engineers showing how to build a Google Forms auto-reply system by simply describing GAS code in Japanese to AI.",
    category: "AI Education / Internal Training",
    accent: "from-[#fff2e9] to-[#f0edff]",
    tech: ["GAS", "Gemini", "ChatGPT"],
    impact: "Non-engineers could learn automation in one day",
    impactNote: "Used as a practical entry-level automation workshop",
  },
  {
    id: "takane-no-hanako",
    filterCategory: "entertainment",
    title: "Takane no Hanako",
    reason:
      "I wondered if making the “underside of words” visible with AI could express the subtle emotional swings of adulthood.",
    description:
      "A LINE-style romantic chat game with a divorced man in his 40s. It parallel-generates surface replies and inner monologues, using staggered timing to dramatize the gap between words and truth.",
    category: "Entertainment AI / Prompt Design",
    accent: "from-[#ffe8ef] to-[#e8f0ff]",
    tech: ["Next.js 14", "TypeScript", "Gemini API", "CSS Animation"],
    impact: "Parallel prompts balanced response speed and staged UX",
    impactNote: "Full nine-phase proposal sequence implemented",
    href: "https://takane-no-hanako.vercel.app",
    linkLabel: "Open app",
    github: "https://github.com/nanako1129-g/takane-no-hanako",
  },
  {
    id: "ikeoji-bar",
    filterCategory: "entertainment",
    title: "Ikeoji’s Midnight Bar",
    reason:
      "I wanted to recreate the feeling of an authentic late-night bar where someone listens to your gripes—using just a phone.",
    description:
      "A web app for voice and text chat with a bartender-persona Gemini. Drink count shifts the AI’s tone across the night.",
    category: "Conversational AI / Experience Design",
    accent: "from-[#fff4e8] to-[#e8dcc8]",
    tech: ["Next.js 15", "TypeScript", "Gemini API", "VOICEVOX", "Web Audio"],
    impact: "Three-stage persona shift (sober → tipsy → drunk)",
    impactNote: "Built audio UX with VOICEVOX + Web Speech",
    github: "https://github.com/nanako1129-g/ikeoji-bar",
  },
  {
    id: "datesuccess-ai",
    filterCategory: "entertainment",
    title: "DateSuccess AI",
    reason:
      "At a hackathon, I heard a teammate's idea and mocked it up immediately with Gemini Canvas. We got from concept to presentation in 80 minutes.",
    description:
      "An AI concierge app prototyped through a hackathon. It reduces the cognitive load of venue selection and conversation prep, creating more room for people to focus on the time they share together.",
    category: "Lifestyle AI / Hackathon MVP",
    accent: "from-[#ffe8ef] to-[#efe7ff]",
    tech: ["React", "Tailwind CSS", "GAS", "Gemini API", "Hot Pepper API", "Netlify"],
    impact: "A hackathon MVP brought into working form quickly",
    impactNote: "Validated with a low-cost serverless architecture",
    topBadge: "Hackathon",
    specialBadge: "Built during a hackathon",
  },
  {
    id: "asobiba-memo",
    filterCategory: "entertainment",
    title: "Asobiba Memo",
    reason:
      "On hot days I wanted indoor playgrounds I could visit with small children, with age-tagged experience notes.",
    description:
      "An SNS-style app for sharing indoor playgrounds with photos and visit notes. Parents can post age ranges and facility impressions; AI drafts play ideas from posts.",
    category: "Family Tech / Community",
    accent: "from-[#e8fff5] to-[#fff5ef]",
    tech: ["Next.js", "Supabase", "Vercel", "Gemini API"],
    impact: "Surfaced the “you never know until you go” anxiety for parents",
    impactNote: "Shipped admin tools plus AI draft generation end to end",
    href: "https://asobiba-memo.vercel.app",
    linkLabel: "Open app",
    github: "https://github.com/nanako1129-g/asobiba-memo",
  },
];
