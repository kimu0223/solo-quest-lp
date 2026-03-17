/**
 * A/Bテスト トラフィック分割 Middleware
 *
 * - 対象ページにアクセスしたユーザーに 50/50 でバリアントを割り当て
 * - Cookie で固定（同一ユーザーは常に同じバリアントを見る）
 * - ?v=a または ?v=b で強制指定可能（QA用）
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// A/Bテスト対象パスとCookie名のマッピング
const AB_TEST_PATHS: Record<string, string> = {
  '/lp/priority': 'ab_priority_cta',
  '/lp/time-management': 'ab_time_cta',
  '/lp': 'ab_lp_hub_layout',
};

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // A/Bテスト対象外はスルー
  const cookieName = AB_TEST_PATHS[pathname];
  if (!cookieName) return NextResponse.next();

  const response = NextResponse.next();

  // 既存のバリアント Cookie を確認
  let variant = request.cookies.get(cookieName)?.value as 'a' | 'b' | undefined;

  // ?v=a or ?v=b でQA強制指定
  const forced = searchParams.get('v');
  if (forced === 'a' || forced === 'b') {
    variant = forced;
  }

  // 未割り当ての場合は 50/50 でランダム割り当て
  if (!variant) {
    variant = Math.random() < 0.5 ? 'a' : 'b';
  }

  // Cookie に保存（30日間）
  response.cookies.set(cookieName, variant, {
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
    sameSite: 'lax',
    httpOnly: false, // クライアントからも読めるようにする
  });

  // バリアント情報をヘッダーで渡す（Server Components で参照可能）
  response.headers.set('x-ab-variant', variant);
  response.headers.set('x-ab-test-id', cookieName);

  return response;
}

export const config = {
  matcher: ['/lp', '/lp/priority', '/lp/time-management', '/lp/task-management'],
};
