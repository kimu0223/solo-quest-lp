export type BlogPost = {
    id: number;
    title: string;
    excerpt: string; // 記事の短い説明
    date: string;
    category: string; // 大きな分類
    tags: string[];   // 細かいタグ（#キーワード）
    emoji: string;
  };
  
  export const BLOG_POSTS: BlogPost[] = [
    {
      id: 4,
      title: "「すごいね！」は逆効果？AIが教える「伸びる」褒め方",
      excerpt: "子供を褒めるとき、つい「すごい！」「えらい！」と言っていませんか？実は心理学的には、具体的なフィードバックこそがやる気の炎を燃やす薪になるんです。",
      date: "2026.02.04",
      category: "心理学",
      tags: ["自己効力感", "褒め方", "AI活用"],
      emoji: "🔥",
    },
    {
      id: 1,
      title: "「宿題しなさい！」と言わなくなる魔法の言葉",
      excerpt: "毎日のガミガミ、疲れていませんか？「命令」を「クエスト」に変えるだけで、子供の目は輝き出します。",
      date: "2026.02.01",
      category: "子育てハック",
      tags: ["コミュニケーション", "宿題", "心理学"],
      emoji: "🪄",
    },
    {
      id: 2,
      title: "ゲーム好きの子供が、自分からお手伝いをする理由",
      excerpt: "RPGのレベルアップが大好きな子ほど、実は「成長したい」という意欲が強いんです。",
      date: "2026.01.28",
      category: "ゲーミフィケーション",
      tags: ["ゲーム脳", "お手伝い", "自主性"],
      emoji: "🎮",
    },
    {
      id: 3,
      title: "AIと一緒に「できた！」を増やす新しい習慣術",
      excerpt: "Solo QuestのAI判定機能は、ただの採点係ではありません。子供のやる気を引き出す「褒め上手」なパートナーです。",
      date: "2026.01.25",
      category: "機能紹介",
      tags: ["AI活用", "褒め方", "新機能"],
      emoji: "🤖",
    },
  ];