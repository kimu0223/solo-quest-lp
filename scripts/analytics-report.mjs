/**
 * Solo Quest — GA4 + Search Console 統合レポートスクリプト
 * 使い方: node scripts/analytics-report.mjs
 *
 * 事前準備:
 * 1. Google Cloud Console でサービスアカウントを作成
 * 2. 以下のAPIを有効化:
 *    - Google Analytics Data API
 *    - Google Search Console API
 * 3. credentials.json（サービスアカウントキー）をプロジェクトルートに配置
 * 4. GA4: 管理 > プロパティのアクセス管理 > サービスアカウントを「閲覧者」で追加
 * 5. GSC: Search Console > 設定 > ユーザーと権限 > ユーザーを追加（サービスアカウントのメール）
 */

import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── 設定 ─────────────────────────────────────────────────────────────
const GA4_PROPERTY_ID = '506963125';
const GSC_SITE_URL = 'sc-domain:solo-quest.jp'; // Search Console のドメインプロパティ
const REPORT_DAYS = 28; // 分析期間（日）
const DATE_RANGE = {
  startDate: `${REPORT_DAYS}daysAgo`,
  endDate: 'yesterday',
};

// ─── 認証 ─────────────────────────────────────────────────────────────
const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
  || path.join(__dirname, '..', 'credentials.json');

if (!fs.existsSync(credentialsPath)) {
  console.error(`
❌ credentials.json が見つかりません。

【手順】
1. Google Cloud Console でサービスアカウントを作成
   https://console.cloud.google.com/iam-admin/serviceaccounts
2. 「キー」→「新しい鍵を作成」→ JSON をダウンロード
3. ダウンロードしたファイルを credentials.json という名前でプロジェクトルートに配置
4. GA4 管理 > プロパティのアクセス管理 > サービスアカウントのメールを「閲覧者」で追加
5. GSC 設定 > ユーザーと権限 > 同じメールアドレスを「制限付き」で追加

詳細: scripts/GA4_SETUP.md
`);
  process.exit(1);
}

// GA4クライアント
let ga4Client;
// GSCクライアント
let auth;
let gscClient;

try {
  ga4Client = new BetaAnalyticsDataClient({ keyFilename: credentialsPath });
  auth = new google.auth.GoogleAuth({
    keyFile: credentialsPath,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  gscClient = google.searchconsole({ version: 'v1', auth });
} catch (e) {
  console.error('❌ 認証クライアント初期化エラー:', e.message);
  process.exit(1);
}

// ─── ユーティリティ ───────────────────────────────────────────────────
const fmt = {
  num: (n) => Number(n).toLocaleString('ja-JP'),
  pct: (n) => `${(Number(n) * 100).toFixed(1)}%`,
  sec: (n) => {
    const s = Math.round(Number(n));
    return s >= 60 ? `${Math.floor(s / 60)}分${s % 60}秒` : `${s}秒`;
  },
  dec: (n, d = 1) => Number(n).toFixed(d),
};

function header(title) {
  const line = '═'.repeat(64);
  console.log(`\n${line}`);
  console.log(`  ${title}`);
  console.log(line);
}

function divider() {
  console.log('  ' + '─'.repeat(62));
}

// ─── GA4: サイト全体サマリー ─────────────────────────────────────────
async function fetchGA4Summary() {
  const [res] = await ga4Client.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    dateRanges: [DATE_RANGE],
    metrics: [
      { name: 'sessions' },
      { name: 'totalUsers' },
      { name: 'newUsers' },
      { name: 'screenPageViews' },
      { name: 'bounceRate' },
      { name: 'averageSessionDuration' },
      { name: 'engagementRate' },
      { name: 'conversions' },
    ],
  });
  const r = res.rows[0].metricValues;
  return {
    sessions: r[0].value,
    totalUsers: r[1].value,
    newUsers: r[2].value,
    pageViews: r[3].value,
    bounceRate: r[4].value,
    avgDuration: r[5].value,
    engagementRate: r[6].value,
    conversions: r[7].value,
  };
}

// ─── GA4: ページ別パフォーマンス ──────────────────────────────────────
async function fetchGA4Pages() {
  const [res] = await ga4Client.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    dateRanges: [DATE_RANGE],
    dimensions: [{ name: 'pagePath' }],
    metrics: [
      { name: 'screenPageViews' },
      { name: 'sessions' },
      { name: 'bounceRate' },
      { name: 'averageSessionDuration' },
      { name: 'conversions' },
      { name: 'engagementRate' },
    ],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 30,
  });
  return res.rows?.map(r => ({
    path: r.dimensionValues[0].value,
    pageViews: r.metricValues[0].value,
    sessions: r.metricValues[1].value,
    bounceRate: r.metricValues[2].value,
    avgDuration: r.metricValues[3].value,
    conversions: r.metricValues[4].value,
    engagementRate: r.metricValues[5].value,
  })) || [];
}

// ─── GA4: 流入チャネル ────────────────────────────────────────────────
async function fetchGA4Traffic() {
  const [res] = await ga4Client.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    dateRanges: [DATE_RANGE],
    dimensions: [{ name: 'sessionDefaultChannelGroup' }],
    metrics: [
      { name: 'sessions' },
      { name: 'totalUsers' },
      { name: 'conversions' },
      { name: 'bounceRate' },
      { name: 'averageSessionDuration' },
    ],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
  });
  return res.rows?.map(r => ({
    channel: r.dimensionValues[0].value,
    sessions: r.metricValues[0].value,
    users: r.metricValues[1].value,
    conversions: r.metricValues[2].value,
    bounceRate: r.metricValues[3].value,
    avgDuration: r.metricValues[4].value,
  })) || [];
}

// ─── GA4: デバイス別 ─────────────────────────────────────────────────
async function fetchGA4Devices() {
  const [res] = await ga4Client.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    dateRanges: [DATE_RANGE],
    dimensions: [{ name: 'deviceCategory' }],
    metrics: [
      { name: 'sessions' },
      { name: 'bounceRate' },
      { name: 'averageSessionDuration' },
      { name: 'conversions' },
      { name: 'engagementRate' },
    ],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
  });
  return res.rows?.map(r => ({
    device: r.dimensionValues[0].value,
    sessions: r.metricValues[0].value,
    bounceRate: r.metricValues[1].value,
    avgDuration: r.metricValues[2].value,
    conversions: r.metricValues[3].value,
    engagementRate: r.metricValues[4].value,
  })) || [];
}

// ─── GA4: イベント ────────────────────────────────────────────────────
async function fetchGA4Events() {
  const [res] = await ga4Client.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    dateRanges: [DATE_RANGE],
    dimensions: [{ name: 'eventName' }],
    metrics: [{ name: 'eventCount' }, { name: 'totalUsers' }],
    orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
    limit: 25,
  });
  return res.rows?.map(r => ({
    event: r.dimensionValues[0].value,
    count: r.metricValues[0].value,
    users: r.metricValues[1].value,
  })) || [];
}

// ─── GA4: CTAクリック詳細 ─────────────────────────────────────────────
async function fetchGA4CtaClicks() {
  try {
    const [res] = await ga4Client.runReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      dateRanges: [DATE_RANGE],
      dimensions: [
        { name: 'eventName' },
        { name: 'customEvent:page_location' },
        { name: 'customEvent:cta_label' },
      ],
      metrics: [{ name: 'eventCount' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          stringFilter: { matchType: 'EXACT', value: 'cta_click' },
        },
      },
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
      limit: 20,
    });
    return res.rows?.map(r => ({
      page: r.dimensionValues[1].value,
      label: r.dimensionValues[2].value,
      count: r.metricValues[0].value,
    })) || [];
  } catch {
    return [];
  }
}

// ─── GA4: A/Bテスト結果 ───────────────────────────────────────────────
async function fetchGA4AbTest() {
  try {
    const [res] = await ga4Client.runReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      dateRanges: [DATE_RANGE],
      dimensions: [
        { name: 'eventName' },
        { name: 'customEvent:ab_test_id' },
        { name: 'customEvent:ab_variant' },
      ],
      metrics: [{ name: 'eventCount' }, { name: 'conversions' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          stringFilter: { matchType: 'BEGINS_WITH', value: 'ab_' },
        },
      },
      limit: 50,
    });
    return res.rows?.map(r => ({
      event: r.dimensionValues[0].value,
      testId: r.dimensionValues[1].value,
      variant: r.dimensionValues[2].value,
      count: r.metricValues[0].value,
      conversions: r.metricValues[1].value,
    })) || [];
  } catch {
    return [];
  }
}

// ─── GA4: 曜日別 ─────────────────────────────────────────────────────
async function fetchGA4DayOfWeek() {
  const [res] = await ga4Client.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    dateRanges: [DATE_RANGE],
    dimensions: [{ name: 'dayOfWeek' }],
    metrics: [{ name: 'sessions' }, { name: 'conversions' }],
    orderBys: [{ dimension: { dimensionName: 'dayOfWeek' } }],
  });
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  return res.rows?.map(r => ({
    day: days[Number(r.dimensionValues[0].value)],
    sessions: r.metricValues[0].value,
    conversions: r.metricValues[1].value,
  })) || [];
}

// ─── GSC: 検索パフォーマンス（クエリ別） ─────────────────────────────
async function fetchGSCQueries() {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - REPORT_DAYS);
  const start = startDate.toISOString().split('T')[0];
  const end = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  const res = await gscClient.searchanalytics.query({
    siteUrl: GSC_SITE_URL,
    requestBody: {
      startDate: start,
      endDate: end,
      dimensions: ['query'],
      rowLimit: 50,
      dataState: 'final',
    },
  });
  return res.data.rows?.map(r => ({
    query: r.keys[0],
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: r.ctr,
    position: r.position,
  })) || [];
}

// ─── GSC: ページ別検索パフォーマンス ──────────────────────────────────
async function fetchGSCPages() {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - REPORT_DAYS);
  const start = startDate.toISOString().split('T')[0];
  const end = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  const res = await gscClient.searchanalytics.query({
    siteUrl: GSC_SITE_URL,
    requestBody: {
      startDate: start,
      endDate: end,
      dimensions: ['page'],
      rowLimit: 30,
      dataState: 'final',
    },
  });
  return res.data.rows?.map(r => ({
    page: r.keys[0].replace('https://solo-quest.jp', ''),
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: r.ctr,
    position: r.position,
  })) || [];
}

// ─── GSC: デバイス別 ──────────────────────────────────────────────────
async function fetchGSCDevices() {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - REPORT_DAYS);
  const start = startDate.toISOString().split('T')[0];
  const end = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  const res = await gscClient.searchanalytics.query({
    siteUrl: GSC_SITE_URL,
    requestBody: {
      startDate: start,
      endDate: end,
      dimensions: ['device'],
      rowLimit: 10,
      dataState: 'final',
    },
  });
  return res.data.rows?.map(r => ({
    device: r.keys[0],
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: r.ctr,
    position: r.position,
  })) || [];
}

// ─── GSC: インデックス状況 ────────────────────────────────────────────
async function fetchGSCIndexStatus() {
  try {
    const res = await gscClient.urlInspection.index.inspect({
      requestBody: {
        inspectionUrl: GSC_SITE_URL,
        siteUrl: GSC_SITE_URL,
      },
    });
    return res.data.inspectionResult;
  } catch {
    return null;
  }
}

// ─── 改善提案エンジン ─────────────────────────────────────────────────
function generateInsights({ ga4Summary, ga4Pages, ga4Traffic, ga4Devices, ga4Events, ga4Cta, gscQueries, gscPages }) {
  const insights = [];

  // ── GA4: 直帰率 ──
  const br = Number(ga4Summary.bounceRate);
  if (br > 0.70) {
    insights.push({
      priority: '🔴 CRITICAL',
      area: '直帰率',
      finding: `サイト全体の直帰率 ${fmt.pct(br)} — 深刻な離脱`,
      actions: [
        'ファーストビューのキャッチコピーを保護者の悩みに直結させる',
        'CTAボタンをスクロールなしで見える位置に配置',
        'Core Web Vitals（LCP・CLS）を改善してページ表示速度を向上',
      ],
    });
  } else if (br > 0.55) {
    insights.push({
      priority: '🟡 WARNING',
      area: '直帰率',
      finding: `直帰率 ${fmt.pct(br)} — 改善余地あり`,
      actions: [
        '関連記事・内部リンクを増やして回遊を促進',
        'LP → ブログ → LP の回遊導線を強化',
      ],
    });
  }

  // ── GA4: セッション時間 ──
  const dur = Number(ga4Summary.avgDuration);
  if (dur < 60) {
    insights.push({
      priority: '🔴 CRITICAL',
      area: '平均セッション時間',
      finding: `${fmt.sec(dur)} — コンテンツが読まれていない`,
      actions: [
        'リード文を3行以内に短縮し、最初の5秒で価値を伝える',
        'スクロールデプスイベントを追加して離脱ポイントを特定',
        '画像・図解を増やして視覚的な可読性を向上',
      ],
    });
  } else if (dur < 120) {
    insights.push({
      priority: '🟡 WARNING',
      area: '平均セッション時間',
      finding: `${fmt.sec(dur)} — 浅い閲覧`,
      actions: [
        '見出しをより魅力的に変更（数字・具体性を入れる）',
        'FAQセクションを拡充して疑問を解消',
      ],
    });
  }

  // ── GA4: モバイル vs デスクトップ ──
  const mobile = ga4Devices.find(d => d.device === 'mobile');
  const desktop = ga4Devices.find(d => d.device === 'desktop');
  if (mobile && desktop) {
    const totalSess = Number(mobile.sessions) + Number(desktop.sessions);
    const mobileShare = Number(mobile.sessions) / totalSess;
    const brDiff = Number(mobile.bounceRate) - Number(desktop.bounceRate);
    if (mobileShare > 0.6 && brDiff > 0.12) {
      insights.push({
        priority: '🔴 CRITICAL',
        area: 'モバイルUX',
        finding: `モバイル比率 ${fmt.pct(mobileShare)}、モバイル直帰率がデスクトップより ${fmt.pct(brDiff)} 高い`,
        actions: [
          'CTAボタンの高さを最低56pxに拡大（タップ精度向上）',
          'モバイルでのフォントサイズを16px以上に統一',
          'ヒーロー画像をモバイル専用に最適化（縦長構成）',
        ],
      });
    }
  }

  // ── GSC: クリック率が低いクエリ ──
  const lowCtrQueries = gscQueries.filter(q => q.impressions > 100 && q.ctr < 0.02);
  if (lowCtrQueries.length > 0) {
    insights.push({
      priority: '🟡 WARNING',
      area: 'GSC: タイトル/ディスクリプション改善',
      finding: `表示回数100回超でCTR2%未満のクエリが ${lowCtrQueries.length} 件`,
      actions: lowCtrQueries.slice(0, 5).map(q =>
        `「${q.query}」— ${fmt.num(q.impressions)}回表示・${fmt.pct(q.ctr)}CTR・掲載順位${fmt.dec(q.position)}位 → titleタグにキーワードを前置き`
      ),
    });
  }

  // ── GSC: 掲載順位11〜20位（フェッチアップ候補） ──
  const nearFirstPage = gscQueries.filter(q => q.position > 10 && q.position <= 20 && q.impressions > 50);
  if (nearFirstPage.length > 0) {
    insights.push({
      priority: '💡 OPPORTUNITY',
      area: 'GSC: 1ページ目フェッチアップ候補',
      finding: `11〜20位に ${nearFirstPage.length} クエリ — 少し強化で1ページ目に入る可能性`,
      actions: nearFirstPage.slice(0, 5).map(q =>
        `「${q.query}」${fmt.dec(q.position)}位 / ${fmt.num(q.impressions)}imp — 見出しH2に追加・内部リンク強化`
      ),
    });
  }

  // ── GSC: インプレッションが高いのにクリックゼロ ──
  const highImpNoClick = gscQueries.filter(q => q.impressions > 200 && q.clicks < 5);
  if (highImpNoClick.length > 0) {
    insights.push({
      priority: '🟡 WARNING',
      area: 'GSC: スニペット最適化',
      finding: `表示200回超なのにクリックほぼゼロのクエリが ${highImpNoClick.length} 件`,
      actions: [
        ...highImpNoClick.slice(0, 3).map(q => `「${q.query}」${fmt.num(q.impressions)}imp / ${q.clicks}クリック`),
        'メタディスクリプションにCTA文言を追加（「〇〇の方法を詳しく解説」等）',
        'タイトルタグに数字・年号を入れてCTRを向上',
      ],
    });
  }

  // ── GA4: オーガニック流入 ──
  const organic = ga4Traffic.find(t => t.channel === 'Organic Search');
  const totalSessions = ga4Traffic.reduce((acc, t) => acc + Number(t.sessions), 0);
  if (!organic || Number(organic.sessions) / totalSessions < 0.3) {
    insights.push({
      priority: '🟡 WARNING',
      area: 'SEO: オーガニック流入比率',
      finding: `オーガニック比率 ${organic ? fmt.pct(Number(organic.sessions) / totalSessions) : '0%'} — SNS・直接流入依存`,
      actions: [
        '週1〜2本のブログ記事を継続投稿（現在42記事）',
        'Search Console でインデックス未登録ページを確認して登録リクエスト',
        '既存記事のタイトルをSEOフレンドリーに更新（数字・年号を追加）',
      ],
    });
  }

  // ── GA4: CTAクリック ──
  if (ga4Cta.length === 0) {
    insights.push({
      priority: '🟡 WARNING',
      area: 'CTAクリック計測',
      finding: 'cta_click イベントのデータなし',
      actions: [
        'CTAButtonコンポーネントのGA4イベントが正しく発火しているか確認',
        'GA4リアルタイムで /lp/* にアクセスしてイベントを確認',
      ],
    });
  }

  // ── GSC: ページ別CTR改善 ──
  const lpPages = gscPages.filter(p => p.page.startsWith('/lp/'));
  const lowLpCtr = lpPages.filter(p => p.impressions > 50 && p.ctr < 0.03);
  if (lowLpCtr.length > 0) {
    insights.push({
      priority: '💡 OPPORTUNITY',
      area: 'LPページのSEO改善',
      finding: `LPページでCTR3%未満が ${lowLpCtr.length} ページ`,
      actions: lowLpCtr.map(p =>
        `${p.page} — ${fmt.num(p.impressions)}imp / ${fmt.pct(p.ctr)}CTR / ${fmt.dec(p.position)}位`
      ),
    });
  }

  return insights;
}

// ─── レポート出力 ─────────────────────────────────────────────────────
function printReport(data) {
  const {
    ga4Summary, ga4Pages, ga4Traffic, ga4Devices,
    ga4Events, ga4Cta, ga4AbTest, ga4DayOfWeek,
    gscQueries, gscPages, gscDevices,
  } = data;

  const now = new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });

  console.log('\n');
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║     Solo Quest — GA4 + Search Console 統合レポート            ║');
  console.log(`║     生成日: ${now.padEnd(52)}║`);
  console.log(`║     分析期間: 過去${REPORT_DAYS}日間${' '.repeat(46)}║`);
  console.log('╚════════════════════════════════════════════════════════════════╝');

  // ── 1. GA4 サマリー ──
  header('1. GA4 サイト全体サマリー（過去28日）');
  const rows = [
    ['総セッション数', fmt.num(ga4Summary.sessions)],
    ['ユニークユーザー', fmt.num(ga4Summary.totalUsers)],
    ['新規ユーザー', `${fmt.num(ga4Summary.newUsers)} (${fmt.pct(Number(ga4Summary.newUsers) / Number(ga4Summary.totalUsers))})`],
    ['総ページビュー', fmt.num(ga4Summary.pageViews)],
    ['直帰率', `${fmt.pct(ga4Summary.bounceRate)} ${Number(ga4Summary.bounceRate) > 0.65 ? '⚠️' : '✅'}`],
    ['平均セッション時間', `${fmt.sec(ga4Summary.avgDuration)} ${Number(ga4Summary.avgDuration) < 90 ? '⚠️' : '✅'}`],
    ['エンゲージメント率', fmt.pct(ga4Summary.engagementRate)],
    ['コンバージョン数', fmt.num(ga4Summary.conversions)],
  ];
  for (const [label, val] of rows) {
    const pad = ' '.repeat(Math.max(0, 26 - label.length));
    console.log(`  ${label}${pad}${val}`);
  }

  // ── 2. 流入チャネル ──
  header('2. 流入チャネル別');
  console.log(`  ${'チャネル'.padEnd(28)} ${'セッション'.padStart(10)} ${'直帰率'.padStart(8)} ${'滞在時間'.padStart(10)} ${'CV'.padStart(6)}`);
  divider();
  for (const t of ga4Traffic) {
    const label = t.channel.length > 26 ? t.channel.slice(0, 25) + '…' : t.channel;
    console.log(`  ${label.padEnd(28)} ${fmt.num(t.sessions).padStart(10)} ${fmt.pct(t.bounceRate).padStart(8)} ${fmt.sec(t.avgDuration).padStart(10)} ${fmt.num(t.conversions).padStart(6)}`);
  }

  // ── 3. デバイス別 ──
  header('3. デバイス別');
  console.log(`  ${'デバイス'.padEnd(12)} ${'セッション'.padStart(10)} ${'直帰率'.padStart(8)} ${'滞在時間'.padStart(10)} ${'CV'.padStart(6)} ${'Eng率'.padStart(7)}`);
  divider();
  for (const d of ga4Devices) {
    console.log(`  ${d.device.padEnd(12)} ${fmt.num(d.sessions).padStart(10)} ${fmt.pct(d.bounceRate).padStart(8)} ${fmt.sec(d.avgDuration).padStart(10)} ${fmt.num(d.conversions).padStart(6)} ${fmt.pct(d.engagementRate).padStart(7)}`);
  }

  // ── 4. ページ別 ──
  header('4. ページ別パフォーマンス（上位30）');
  console.log(`  ${'ページパス'.padEnd(36)} ${'PV'.padStart(7)} ${'直帰率'.padStart(8)} ${'滞在時間'.padStart(10)} ${'CV'.padStart(5)}`);
  divider();
  for (const p of ga4Pages) {
    const brStr = Number(p.bounceRate) > 0.65 ? '⚠️' + fmt.pct(p.bounceRate) : fmt.pct(p.bounceRate);
    const pg = p.path.length > 34 ? p.path.slice(0, 33) + '…' : p.path;
    console.log(`  ${pg.padEnd(36)} ${fmt.num(p.pageViews).padStart(7)} ${brStr.padStart(8)} ${fmt.sec(p.avgDuration).padStart(10)} ${fmt.num(p.conversions).padStart(5)}`);
  }

  // ── 5. GA4 イベント ──
  header('5. GA4 上位イベント');
  console.log(`  ${'イベント名'.padEnd(38)} ${'回数'.padStart(10)} ${'ユーザー'.padStart(10)}`);
  divider();
  for (const e of ga4Events.slice(0, 20)) {
    console.log(`  ${e.event.padEnd(38)} ${fmt.num(e.count).padStart(10)} ${fmt.num(e.users).padStart(10)}`);
  }

  // ── 6. CTAクリック詳細 ──
  if (ga4Cta.length > 0) {
    header('6. CTAクリック詳細');
    console.log(`  ${'ページ'.padEnd(28)} ${'ラベル'.padEnd(20)} ${'クリック数'.padStart(10)}`);
    divider();
    for (const c of ga4Cta) {
      const pg = c.page.replace('https://solo-quest.jp', '').slice(0, 26);
      console.log(`  ${pg.padEnd(28)} ${c.label.slice(0, 18).padEnd(20)} ${fmt.num(c.count).padStart(10)}`);
    }
  } else {
    header('6. CTAクリック詳細');
    console.log('  ⚠️  cta_click イベントのデータなし（計測設定を確認してください）');
  }

  // ── 7. A/Bテスト結果 ──
  if (ga4AbTest.length > 0) {
    header('7. A/Bテスト結果');
    console.log(`  ${'テストID'.padEnd(20)} ${'バリアント'.padStart(12)} ${'イベント'.padStart(10)} ${'CV'.padStart(8)}`);
    divider();
    for (const r of ga4AbTest) {
      console.log(`  ${r.testId.padEnd(20)} ${r.variant.padStart(12)} ${fmt.num(r.count).padStart(10)} ${fmt.num(r.conversions).padStart(8)}`);
    }
  }

  // ── 8. 曜日別 ──
  header('8. 曜日別アクセス');
  const maxSess = Math.max(...ga4DayOfWeek.map(d => Number(d.sessions)));
  for (const d of ga4DayOfWeek) {
    const barLen = Math.round((Number(d.sessions) / maxSess) * 30);
    const bar = '█'.repeat(barLen);
    console.log(`  ${d.day}曜  ${bar.padEnd(31)} ${fmt.num(d.sessions).padStart(6)} セッション  CV: ${fmt.num(d.conversions)}`);
  }

  // ── 9. GSC: 検索クエリ上位 ──
  header('9. Search Console — 検索クエリ上位50（クリック順）');
  console.log(`  ${'クエリ'.padEnd(35)} ${'クリック'.padStart(8)} ${'表示回数'.padStart(9)} ${'CTR'.padStart(7)} ${'順位'.padStart(7)}`);
  divider();
  for (const q of gscQueries.slice(0, 30)) {
    const query = q.query.length > 33 ? q.query.slice(0, 32) + '…' : q.query;
    const ctrStr = q.ctr < 0.02 ? '⚠️' + fmt.pct(q.ctr) : fmt.pct(q.ctr);
    const posStr = q.position <= 3 ? '🥇' + fmt.dec(q.position) : q.position <= 10 ? '✅' + fmt.dec(q.position) : fmt.dec(q.position);
    console.log(`  ${query.padEnd(35)} ${fmt.num(q.clicks).padStart(8)} ${fmt.num(q.impressions).padStart(9)} ${ctrStr.padStart(7)} ${posStr.padStart(7)}`);
  }

  // ── 10. GSC: ページ別 ──
  header('10. Search Console — ページ別パフォーマンス');
  console.log(`  ${'ページ'.padEnd(40)} ${'クリック'.padStart(8)} ${'表示回数'.padStart(9)} ${'CTR'.padStart(7)} ${'順位'.padStart(7)}`);
  divider();
  for (const p of gscPages) {
    const pg = p.page.length > 38 ? p.page.slice(0, 37) + '…' : p.page;
    console.log(`  ${pg.padEnd(40)} ${fmt.num(p.clicks).padStart(8)} ${fmt.num(p.impressions).padStart(9)} ${fmt.pct(p.ctr).padStart(7)} ${fmt.dec(p.position).padStart(7)}`);
  }

  // ── 11. GSC: デバイス別 ──
  header('11. Search Console — デバイス別');
  console.log(`  ${'デバイス'.padEnd(12)} ${'クリック'.padStart(8)} ${'表示回数'.padStart(9)} ${'CTR'.padStart(7)} ${'順位'.padStart(7)}`);
  divider();
  for (const d of gscDevices) {
    console.log(`  ${d.device.padEnd(12)} ${fmt.num(d.clicks).padStart(8)} ${fmt.num(d.impressions).padStart(9)} ${fmt.pct(d.ctr).padStart(7)} ${fmt.dec(d.position).padStart(7)}`);
  }

  // ── 12. 改善提案 ──
  header('12. 改善提案 & アクションプラン');
  const insights = generateInsights({ ga4Summary, ga4Pages, ga4Traffic, ga4Devices, ga4Events, ga4Cta, gscQueries, gscPages });

  const critical = insights.filter(i => i.priority.includes('CRITICAL'));
  const warning = insights.filter(i => i.priority.includes('WARNING'));
  const opportunity = insights.filter(i => !i.priority.includes('CRITICAL') && !i.priority.includes('WARNING'));

  console.log(`\n  スコア → 🔴 緊急: ${critical.length}件  🟡 要改善: ${warning.length}件  💡 機会: ${opportunity.length}件\n`);

  for (const ins of insights) {
    console.log(`\n  ${ins.priority} ── ${ins.area}`);
    console.log(`  📌 ${ins.finding}`);
    console.log('  📋 アクション:');
    for (const a of ins.actions) {
      console.log(`     → ${a}`);
    }
    divider();
  }

  // ── JSON保存 ──
  const reportPath = path.join(__dirname, '..', 'analytics-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    periodDays: REPORT_DAYS,
    ga4: { summary: ga4Summary, pages: ga4Pages, traffic: ga4Traffic, devices: ga4Devices, events: ga4Events, ctaClicks: ga4Cta, abTest: ga4AbTest, dayOfWeek: ga4DayOfWeek },
    searchConsole: { queries: gscQueries, pages: gscPages, devices: gscDevices },
    insights,
  }, null, 2));
  console.log(`\n  💾 全データを analytics-report.json に保存しました`);
  console.log('\n');
}

// ─── メイン ──────────────────────────────────────────────────────────
async function main() {
  console.log(`\n⏳ Solo Quest 統合分析レポートを生成中...`);
  console.log(`   GA4 プロパティ: ${GA4_PROPERTY_ID}`);
  console.log(`   GSC サイト: ${GSC_SITE_URL}`);
  console.log(`   分析期間: 過去${REPORT_DAYS}日間\n`);

  try {
    const [
      ga4Summary, ga4Pages, ga4Traffic, ga4Devices,
      ga4Events, ga4Cta, ga4AbTest, ga4DayOfWeek,
      gscQueries, gscPages, gscDevices,
    ] = await Promise.all([
      fetchGA4Summary(),
      fetchGA4Pages(),
      fetchGA4Traffic(),
      fetchGA4Devices(),
      fetchGA4Events(),
      fetchGA4CtaClicks(),
      fetchGA4AbTest(),
      fetchGA4DayOfWeek(),
      fetchGSCQueries(),
      fetchGSCPages(),
      fetchGSCDevices(),
    ]);

    printReport({
      ga4Summary, ga4Pages, ga4Traffic, ga4Devices,
      ga4Events, ga4Cta, ga4AbTest, ga4DayOfWeek,
      gscQueries, gscPages, gscDevices,
    });

  } catch (err) {
    if (err.code === 7 || err.message?.includes('PERMISSION_DENIED')) {
      console.error('\n❌ 権限エラー:');
      console.error('   GA4: 管理 > プロパティのアクセス管理 > サービスアカウントを「閲覧者」で追加');
      console.error('   GSC: 設定 > ユーザーと権限 > サービスアカウントのメールを追加\n');
    } else if (err.code === 16 || err.message?.includes('UNAUTHENTICATED')) {
      console.error('\n❌ 認証エラー: credentials.json が無効か、対象APIが有効化されていません');
      console.error('   Google Cloud Console で以下のAPIを有効化してください:');
      console.error('   - Google Analytics Data API');
      console.error('   - Google Search Console API\n');
    } else {
      console.error('\n❌ エラー:', err.message);
      console.error(err.stack);
    }
    process.exit(1);
  }
}

main();
