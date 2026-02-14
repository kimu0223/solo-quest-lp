import { MetadataRoute } from 'next';
import { BLOG_POSTS } from './blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://solo-quest.jp'; // 本番ドメイン

  // 固定ページ
  const routes = [
    '',
    '/blog',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
    '/legal',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // ブログ記事ページ（動的生成）
  const posts = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date.replace(/\./g, '-')), // 2026.02.08 -> 2026-02-08
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...posts];
}