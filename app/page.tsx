"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Locale = "ja" | "en";

type Project = {
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
      items: [
        {
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
          title: "動画解析ツール（テロップ変化点抽出）",
          reason:
            "同僚が動画編集の現場で、テロップのスクショを手動でコピペする作業があまりにも大変で、初めてPythonで作ったプロダクト。",
          description:
            "動画をアップロードするとテロップの変化点を自動検出し、タイムスタンプ付き画像一覧・Excel・PowerPoint・ZIPで出力。",
          category: "Video AI / 制作支援",
          accent: "from-[#ffe4d9] to-[#fff1cc]",
          tech: [
            "Python",
            "OpenCV",
            "Gradio",
            "pandas",
            "openpyxl",
            "python-pptx",
          ],
          impact: "1時間のスクショ作業を5分に短縮",
          impactNote: "出力形式を一括生成",
        },
        {
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
          title: "介護学習サポート猫Bot",
          reason:
            "友人が仕事と勉強の両立で頑張っているのをみて、応援したくなった。厚生労働省の公式テキストをRAG化して、LINEで話しかけると猫キャラが応援してくれて、クイズも出してくれるBotを個人開発した。",
          description:
            "友人の介護員養成講座の学習をサポートするために開発。厚生労働省の介護員養成講座テキスト（PDF）をRAG化し、LINEで話しかけると介護の知識を猫キャラクターがわかりやすく教えてくれるチャットボット。",
          category: "Education AI / RAG活用",
          accent: "from-[#e7f7ef] to-[#efe5ff]",
          tech: ["n8n", "LINE API", "Gemini API", "RAG", "PDF解析"],
          impact: "自主学習を24時間サポート",
          impactNote: "公式テキストベースのRAGで回答の信頼性を担保",
          status: "個人開発・運用中",
          topBadge: "Cat Friendly",
          specialBadge: "猫キャラでやさしく解説",
        },
        {
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
          title: "DateSuccess AI",
          reason:
            "ハッカソンで、チームメンバーのアイデアを聞いてGemini Canvasで即座にモック化。80分でアイデアから発表まで仕上げた。",
          description:
            "ハッカソンを起点に開発したAIコンシェルジュアプリ。店舗選びや会話準備の認知負荷をAIが肩代わりし、相手との時間に集中できる“余白”をつくるMVPとして設計。",
          category: "Lifestyle AI / Hackathon MVP",
          accent: "from-[#ffe8ef] to-[#efe7ff]",
          tech: [
            "React",
            "Tailwind CSS",
            "GAS",
            "Gemini API",
            "Hot Pepper API",
            "Netlify",
          ],
          impact: "ハッカソン発のMVPを短期間で稼働",
          impactNote: "低コストなサーバーレス構成で素早く検証",
          topBadge: "Hackathon",
          specialBadge: "ハッカソン発MVP",
        },
        {
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
      ] satisfies Project[],
    },
    skills: {
      eyebrow: "Skills",
      title: "データ理解から体験設計まで",
      groups: [
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
      items: [
        {
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
          downloadLabel: "Download Sample CSV",
          helperText: "A demo CSV you can download and upload into Koe Lab to try it out.",
          github: "https://github.com/nanako1129-g/koelab",
          impact: "Analyzed 1,888 responses in minutes",
          impactNote: "Confidence score: 0.9-0.95",
        },
        {
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
          title: "Video Analysis Tool (Caption Change Detection)",
          reason:
            "A coworker was manually copying screenshot after screenshot from video editing timelines. It was overwhelming to watch, so I built this as my first Python product.",
          description:
            "Detects caption change points from uploaded videos and exports timestamped image lists, Excel files, PowerPoint files, and ZIP archives in one flow.",
          category: "Video AI / Production Support",
          accent: "from-[#ffe4d9] to-[#fff1cc]",
          tech: [
            "Python",
            "OpenCV",
            "Gradio",
            "pandas",
            "openpyxl",
            "python-pptx",
          ],
          impact: "Cut 1 hour of screenshot work down to 5 minutes",
          impactNote: "Generated multiple output formats at once",
        },
        {
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
          title: "DateSuccess AI",
          reason:
            "At a hackathon, I heard a teammate's idea and mocked it up immediately with Gemini Canvas. We got from concept to presentation in 80 minutes.",
          description:
            "An AI concierge app prototyped through a hackathon. It reduces the cognitive load of venue selection and conversation prep, creating more room for people to focus on the time they share together.",
          category: "Lifestyle AI / Hackathon MVP",
          accent: "from-[#ffe8ef] to-[#efe7ff]",
          tech: [
            "React",
            "Tailwind CSS",
            "GAS",
            "Gemini API",
            "Hot Pepper API",
            "Netlify",
          ],
          impact: "A hackathon MVP brought into working form quickly",
          impactNote: "Validated with a low-cost serverless architecture",
          topBadge: "Hackathon",
          specialBadge: "Built during a hackathon",
        },
        {
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
      ] satisfies Project[],
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
            "LLM app design",
            "RAG implementation",
            "Prompt design, evaluation, iteration",
            "Google AI Studio",
            "Genspark workflow use",
            "Data analysis & visualization",
          ],
        },
        {
          title: "Automation / Development",
          items: [
            "Python",
            "Streamlit",
            "Google Apps Script (GAS)",
            "n8n",
            "Slack API",
            "LINE API",
            "Google Sheets automation",
          ],
        },
        {
          title: "Product / Strategy",
          items: [
            "New business planning & proposals",
            "ROI analysis",
            "AI workshop design & facilitation",
            "User interviews",
            "Requirement definition",
            "Internal AI enablement & change support",
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
  const content = siteContent[locale];

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

          <FadeInSection id="projects" className="w-full space-y-8">
            <div className="w-full max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ef9b73]">
                {content.projects.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-800 sm:text-3xl">
                {content.projects.title}
              </h2>
            </div>

            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {content.projects.items.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.01 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 24px 70px rgba(148, 163, 184, 0.18)",
                  }}
                  className={`group block w-full max-w-full min-h-[26rem] rounded-[2rem] border bg-white p-5 shadow-[0_14px_45px_rgba(148,163,184,0.12)] sm:min-h-[28rem] sm:p-6 ${
                    index < 3
                      ? "border-[#d9cdfd] bg-[linear-gradient(180deg,_#fffdfd,_#fcf9ff)] shadow-[0_20px_60px_rgba(181,157,247,0.16)]"
                      : project.specialBadge
                        ? "border-[#f2d9ea] shadow-[0_18px_55px_rgba(236,181,210,0.18)]"
                        : "border-white"
                  }`}
                >
                  <div
                    className={`relative h-28 rounded-[1.5rem] bg-gradient-to-br ${project.accent}`}
                  >
                    {index < 3 ? (
                      <div className="absolute left-3 top-3 rounded-full bg-[#f3ecff] px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-[#7c61d6] sm:left-4 sm:top-4 sm:text-xs">
                        Featured
                      </div>
                    ) : null}
                    {project.topBadge ? (
                      <div className="absolute right-3 top-3 max-w-[calc(100%-1.5rem)] rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium text-[#b86f94] backdrop-blur sm:right-4 sm:top-4 sm:text-xs">
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
                    <h3 className="mt-4 break-words text-xl font-semibold text-slate-800 sm:text-2xl">
                      {project.title}
                    </h3>
                    {project.reason ? (
                      <p className="mt-3 break-words text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                        {project.reason}
                      </p>
                    ) : null}
                    <p className="mt-4 break-words text-sm leading-7 text-slate-600">
                      {project.description}
                    </p>
                    <div className="mt-5 w-full max-w-full rounded-[1.5rem] bg-[#faf7ff] p-4">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8e78db]">
                        {content.projects.impactLabel}
                      </p>
                      <p className="mt-2 whitespace-normal break-words text-lg font-semibold leading-7 text-slate-800 sm:text-xl">
                        {project.impact}
                      </p>
                      <p className="mt-1 whitespace-normal break-words text-sm leading-6 text-slate-500">
                        {project.impactNote}
                      </p>
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
                        {content.projects.githubLabel}
                      </a>
                    ) : null}
                    {project.status ? (
                      <span className="inline-flex w-full items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-500 sm:w-auto">
                        {project.status}
                      </span>
                    ) : null}
                  </div>
                  {project.helperText ? (
                    <p className="mt-3 break-words text-xs leading-6 text-slate-500">
                      {project.helperText}
                    </p>
                  ) : null}
                </motion.article>
              ))}
            </div>
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

            <div className="grid gap-6 md:grid-cols-3">
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
