import { MetadataRoute } from 'next';
import { BLOG_POSTS } from './blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://solo-quest.jp'; // 本番ドメイン

  // 固定ページ & LP
  const routes = [
    '',
    '/lp',                  // 悩み別一覧（追加）
    '/lp/time-management',  // 時間管理LP（追加）
    '/lp/priority',         // 優先順位LP（追加）
    '/blog',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
    '/legal',
  ].map((route) => {
    // トップページは1、LP関連は0.9、その他の固定ページは0.8で優先度を設定
    let routePriority = 0.8;
    if (route === '') routePriority = 1.0;
    else if (route.startsWith('/lp')) routePriority = 0.9;

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const, // LPを追加・修正する可能性を考慮しweeklyに変更
      priority: routePriority,
    };
  });

  // ブログ記事ページ（動的生成）
  const posts = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date.replace(/\./g, '-')), // 2026.02.08 -> 2026-02-08
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...posts];
}