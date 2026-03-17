/**
 * GA4 Data API レポートスクリプト
 * 使い方: node scripts/ga4-report.mjs
 *
 * 事前準備:
 * 1. Google Cloud Console でサービスアカウントを作成
 * 2. Google Analytics Data API を有効化
 * 3. GA4 管理画面 > プロパティのアクセス管理 でサービスアカウントを「閲覧者」として追加
 * 4. サービスアカウントの JSON キーをダウンロード → credentials.json として保存
 * 5. .env.local に GOOGLE_APPLICATION_CREDENTIALS=./credentials.json を追加
 */

import { BetaAnalyticsDataClient } from '@google-analytics/data';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROPERTY_ID = '506963125';

// 認証: 環境変数 or credentials.json
const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
  || path.join(__dirname, '..', 'credentials.json');

let analyticsDataClient;
try {
  if (fs.existsSync(credentialsPath)) {
    analyticsDataClient = new BetaAnalyticsDataClient({
      keyFilename: credentialsPath,
    });
  } else {
    analyticsDataClient = new BetaAnalyticsDataClient(); // ADC fallback
  }
} catch (e) {
  console.error('❌ 認証エラー:', e.message);
  console.error('credentials.json を配置してください。');
  process.exit(1);
}

const PAGES = {
  '/': 'トップページ',
  '/lp': 'LPハブ',
  '/lp/priority': '優先順位LP',
  '/lp/time-management': '時間管理LP',
  '/lp/task-management': 'タスク管理LP',
  '/blog': 'ブログ一覧',
  '/faq': 'FAQ',
  '/contact': 'お問い合わせ',
};

// ─── ユーティリティ ─────────────────────────────────────────────────
const fmt = {
  num: (n) => Number(n).toLocaleString('ja-JP'),
  pct: (n) => `${(Number(n) * 100).toFixed(1)}%`,
  sec: (n) => {
    const s = Math.round(Number(n));
    return s >= 60 ? `${Math.floor(s / 60)}分${s % 60}秒` : `${s}秒`;
  },
};

function header(title) {
  const line = '═'.repeat(60);
  console.log(`\n${line}`);
  console.log(`  ${title}`);
  console.log(line);
}

function row(label, value, note = '') {
  const pad = ' '.repeat(Math.max(0, 28 - label.length));
  console.log(`  ${label}${pad}${value}  ${note}`);
}

// ─── GA4 API 呼び出し ────────────────────────────────────────────────
async function runReport(request) {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    ...request,
  });
  return response;
}

// ─── 1. サイト全体サマリー ────────────────────────────────────────────
async function fetchSummary() {
  const res = await runReport({
    metrics: [
      { name: 'sessions' },
      { name: 'totalUsers' },
      { name: 'newUsers' },
      { name: 'screenPageViews' },
      { name: 'bounceRate' },
      { name: 'averageSessionDuration' },
      { name: 'engagementRate' },
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
  };
}

// ─── 2. ページ別パフォーマンス ──────────────────────────────────────
async function fetchPagePerformance() {
  const res = await runReport({
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
    limit: 20,
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

// ─── 3. 流入元 ─────────────────────────────────────────────────────
async function fetchTrafficSources() {
  const res = await runReport({
    dimensions: [{ name: 'sessionDefaultChannelGroup' }],
    metrics: [
      { name: 'sessions' },
      { name: 'totalUsers' },
      { name: 'conversions' },
      { name: 'bounceRate' },
    ],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
  });
  return res.rows?.map(r => ({
    channel: r.dimensionValues[0].value,
    sessions: r.metricValues[0].value,
    users: r.metricValues[1].value,
    conversions: r.metricValues[2].value,
    bounceRate: r.metricValues[3].value,
  })) || [];
}

// ─── 4. デバイス別 ─────────────────────────────────────────────────
async function fetchDevices() {
  const res = await runReport({
    dimensions: [{ name: 'deviceCategory' }],
    metrics: [
      { name: 'sessions' },
      { name: 'bounceRate' },
      { name: 'averageSessionDuration' },
      { name: 'conversions' },
    ],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
  });
  return res.rows?.map(r => ({
    device: r.dimensionValues[0].value,
    sessions: r.metricValues[0].value,
    bounceRate: r.metricValues[1].value,
    avgDuration: r.metricValues[2].value,
    conversions: r.metricValues[3].value,
  })) || [];
}

// ─── 5. イベント別 ─────────────────────────────────────────────────
async function fetchEvents() {
  const res = await runReport({
    dimensions: [{ name: 'eventName' }],
    metrics: [{ name: 'eventCount' }, { name: 'totalUsers' }],
    orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
    limit: 20,
  });
  return res.rows?.map(r => ({
    event: r.dimensionValues[0].value,
    count: r.metricValues[0].value,
    users: r.metricValues[1].value,
  })) || [];
}

// ─── 6. ランディングページ ─────────────────────────────────────────
async function fetchLandingPages() {
  const res = await runReport({
    dimensions: [{ name: 'landingPage' }],
    metrics: [
      { name: 'sessions' },
      { name: 'bounceRate' },
      { name: 'conversions' },
      { name: 'newUsers' },
    ],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: 15,
  });
  return res.rows?.map(r => ({
    path: r.dimensionValues[0].value,
    sessions: r.metricValues[0].value,
    bounceRate: r.metricValues[1].value,
    conversions: r.metricValues[2].value,
    newUsers: r.metricValues[3].value,
  })) || [];
}

// ─── 7. 曜日・時間帯 ─────────────────────────────────────────────
async function fetchTimeTrends() {
  const res = await runReport({
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

// ─── 8. A/Bテストバリアント別（カスタムイベント） ──────────────────
async function fetchAbTestResults() {
  try {
    const res = await runReport({
      dimensions: [
        { name: 'eventName' },
        { name: 'customEvent:ab_variant' },
        { name: 'customEvent:ab_test_id' },
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
      variant: r.dimensionValues[1].value,
      testId: r.dimensionValues[2].value,
      count: r.metricValues[0].value,
      conversions: r.metricValues[1].value,
    })) || [];
  } catch {
    return [];
  }
}

// ─── 自動分析・改善提案エンジン ─────────────────────────────────────
function generateInsights({ summary, pages, traffic, devices, events, landing, timeTrends, abResults }) {
  const issues = [];
  const score = { critical: 0, warning: 0, ok: 0 };

  // --- バウンス率 ---
  if (Number(summary.bounceRate) > 0.7) {
    issues.push({
      priority: '🔴 CRITICAL',
      area: '直帰率',
      finding: `サイト全体の直帰率が ${fmt.pct(summary.bounceRate)} — 平均70%超は離脱が深刻`,
      actions: [
        'ファーストビューのキャッチコピーを強化（ペインポイントをより直接的に）',
        'ページ読み込み速度を改善（Core Web Vitals 確認）',
        'CTAボタンをスクロールせず見える位置に配置',
      ],
      abTest: 'Hero セクションのコピーA/Bテスト（現在 vs 数字入りコピー）',
    });
    score.critical++;
  } else if (Number(summary.bounceRate) > 0.5) {
    issues.push({
      priority: '🟡 WARNING',
      area: '直帰率',
      finding: `直帰率 ${fmt.pct(summary.bounceRate)} — 改善余地あり`,
      actions: ['内部リンクを増やして回遊率を上げる', 'CTAの訴求を見直す'],
      abTest: 'CTAボタンのテキストA/Bテスト',
    });
    score.warning++;
  } else {
    score.ok++;
  }

  // --- セッション時間 ---
  if (Number(summary.avgDuration) < 60) {
    issues.push({
      priority: '🔴 CRITICAL',
      area: '平均セッション時間',
      finding: `${fmt.sec(summary.avgDuration)} — コンテンツが読まれていない可能性`,
      actions: [
        'スクロールデプスをGA4カスタムイベントで計測して離脱ポイントを特定',
        'リード文を短くして、最初の5秒で価値を伝える',
        '動画や画像を活用してエンゲージメントを向上',
      ],
      abTest: 'ヒーローセクションに動画 vs 静止画のA/Bテスト',
    });
    score.critical++;
  } else if (Number(summary.avgDuration) < 120) {
    issues.push({
      priority: '🟡 WARNING',
      area: '平均セッション時間',
      finding: `${fmt.sec(summary.avgDuration)} — 読み込みはされているが浅い`,
      actions: ['各セクションの見出しをより魅力的に', 'FAQ を増やして疑問を解決'],
      abTest: 'ページ構成の順序変更テスト（社会的証明を上に移動）',
    });
    score.warning++;
  } else {
    score.ok++;
  }

  // --- モバイル vs デスクトップ ---
  const mobile = devices.find(d => d.device === 'mobile');
  const desktop = devices.find(d => d.device === 'desktop');
  if (mobile && desktop) {
    const mobileShare = Number(mobile.sessions) / (Number(mobile.sessions) + Number(desktop.sessions));
    if (mobileShare > 0.6 && Number(mobile.bounceRate) - Number(desktop.bounceRate) > 0.15) {
      issues.push({
        priority: '🔴 CRITICAL',
        area: 'モバイルUX',
        finding: `モバイル比率 ${fmt.pct(mobileShare)} なのにモバイル直帰率がデスクトップより ${fmt.pct(Number(mobile.bounceRate) - Number(desktop.bounceRate))} 高い`,
        actions: [
          'モバイルのCTAボタンサイズを大きく（最低44px）',
          'タップ領域の確認',
          'モバイルファーストでレイアウトを見直し',
        ],
        abTest: 'モバイル専用ヒーローレイアウトのA/Bテスト',
      });
      score.critical++;
    }
  }

  // --- ページ別分析 ---
  for (const page of pages) {
    const name = PAGES[page.path] || page.path;
    if (page.path.startsWith('/lp/') && Number(page.bounceRate) > 0.65) {
      issues.push({
        priority: '🟡 WARNING',
        area: `LP改善: ${name}`,
        finding: `直帰率 ${fmt.pct(page.bounceRate)}、平均滞在 ${fmt.sec(page.avgDuration)}`,
        actions: [
          'ファーストビューの「悩みの共感」コピーをより具体的に',
          '社会的証明（口コミ）をヒーロー直下に移動',
          'CTAボタンのコピーを「App Store で無料DL」→「今すぐ無料で試す」に変更',
        ],
        abTest: `${name} CTAコピーA/Bテスト（v=b で配信）`,
      });
      score.warning++;
    }
  }

  // --- オーガニック流入 ---
  const organic = traffic.find(t => t.channel === 'Organic Search');
  if (!organic || Number(organic.sessions) < 50) {
    issues.push({
      priority: '🟡 WARNING',
      area: 'SEO・オーガニック流入',
      finding: `オーガニック流入が少ない（${organic ? fmt.num(organic.sessions) : 0} セッション）`,
      actions: [
        'ブログ記事のターゲットキーワードを再確認（「小学生 時間管理 アプリ」等）',
        'サイトマップの送信確認（Google Search Console）',
        '構造化データ（FAQ Schema）をLPページに追加',
      ],
      abTest: 'タイトルタグのA/Bテスト（Search Console のインプレッション改善）',
    });
    score.warning++;
  }

  // --- A/Bテスト結果 ---
  if (abResults.length > 0) {
    const variantMap = {};
    for (const r of abResults) {
      const key = `${r.testId}-${r.variant}`;
      if (!variantMap[key]) variantMap[key] = { ...r, total: 0 };
      variantMap[key].total += Number(r.count);
    }
    issues.push({
      priority: '📊 AB TEST',
      area: 'A/Bテスト中間結果',
      finding: `${abResults.length} 件のA/Bテストデータを検出`,
      actions: Object.entries(variantMap).map(([k, v]) =>
        `${k}: ${fmt.num(v.total)} イベント / コンバージョン ${fmt.num(v.conversions)}`
      ),
      abTest: '統計的有意性を確認してから勝者を反映',
    });
  }

  // --- 高頻度イベント分析 ---
  const ctaEvents = events.filter(e =>
    e.event.includes('click') || e.event.includes('cta') || e.event.includes('download')
  );
  if (ctaEvents.length === 0) {
    issues.push({
      priority: '🟡 WARNING',
      area: 'CTAクリック計測',
      finding: 'CTAボタンのクリックイベントが計測されていない',
      actions: [
        'CTAボタンに onClick で gtag イベントを追加',
        '特にApp Storeリンクのクリック数を把握することが最優先',
      ],
      abTest: 'イベント計測後にCTAのA/Bテストが可能になる',
    });
    score.warning++;
  }

  // --- 曜日トレンド ---
  if (timeTrends.length > 0) {
    const sorted = [...timeTrends].sort((a, b) => Number(b.sessions) - Number(a.sessions));
    const best = sorted[0];
    const worst = sorted[sorted.length - 1];
    issues.push({
      priority: '💡 INSIGHT',
      area: 'アクセス曜日傾向',
      finding: `最多: ${best.day}曜日 (${fmt.num(best.sessions)}s)、最少: ${worst.day}曜日 (${fmt.num(worst.sessions)}s)`,
      actions: [
        `${best.day}曜日に合わせてSNS投稿・広告を集中させる`,
        `${worst.day}曜日のリターゲティング広告強化を検討`,
      ],
      abTest: '曜日別のメールキャンペーンA/Bテスト',
    });
  }

  return { issues, score };
}

// ─── レポート出力 ────────────────────────────────────────────────────
function printReport(data) {
  const { summary, pages, traffic, devices, events, landing, timeTrends, abResults } = data;

  console.log('\n');
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║         Solo Quest GA4 分析レポート（過去30日間）          ║');
  console.log('║                Generated: ' + new Date().toLocaleDateString('ja-JP') + '                          ║');
  console.log('╚════════════════════════════════════════════════════════════╝');

  // 1. サマリー
  header('1. サイト全体サマリー');
  row('総セッション数', fmt.num(summary.sessions));
  row('ユニークユーザー数', fmt.num(summary.totalUsers));
  row('新規ユーザー数', fmt.num(summary.newUsers), `(${fmt.pct(summary.newUsers / summary.totalUsers)} 新規率)`);
  row('総ページビュー', fmt.num(summary.pageViews));
  row('直帰率', fmt.pct(summary.bounceRate), Number(summary.bounceRate) > 0.6 ? '⚠️ 高め' : '✅ 良好');
  row('平均セッション時間', fmt.sec(summary.avgDuration), Number(summary.avgDuration) < 60 ? '⚠️ 短い' : '✅ 良好');
  row('エンゲージメント率', fmt.pct(summary.engagementRate));

  // 2. ページ別
  header('2. ページ別パフォーマンス（上位20ページ）');
  console.log(`  ${'ページ'.padEnd(35)} ${'PV'.padStart(8)} ${'直帰率'.padStart(8)} ${'滞在時間'.padStart(10)} ${'CV'.padStart(6)}`);
  console.log('  ' + '─'.repeat(72));
  for (const p of pages) {
    const name = (PAGES[p.path] || p.path).slice(0, 33);
    const br = Number(p.bounceRate) > 0.65 ? '⚠️ ' + fmt.pct(p.bounceRate) : fmt.pct(p.bounceRate);
    console.log(`  ${name.padEnd(35)} ${fmt.num(p.pageViews).padStart(8)} ${br.padStart(8)} ${fmt.sec(p.avgDuration).padStart(10)} ${fmt.num(p.conversions).padStart(6)}`);
  }

  // 3. 流入元
  header('3. 流入チャネル別');
  console.log(`  ${'チャネル'.padEnd(25)} ${'セッション'.padStart(10)} ${'ユーザー'.padStart(10)} ${'直帰率'.padStart(8)} ${'CV'.padStart(6)}`);
  console.log('  ' + '─'.repeat(62));
  for (const t of traffic) {
    console.log(`  ${t.channel.padEnd(25)} ${fmt.num(t.sessions).padStart(10)} ${fmt.num(t.users).padStart(10)} ${fmt.pct(t.bounceRate).padStart(8)} ${fmt.num(t.conversions).padStart(6)}`);
  }

  // 4. デバイス
  header('4. デバイス別');
  for (const d of devices) {
    console.log(`  ${d.device.padEnd(15)} セッション: ${fmt.num(d.sessions).padStart(8)}  直帰率: ${fmt.pct(d.bounceRate)}  滞在: ${fmt.sec(d.avgDuration)}  CV: ${fmt.num(d.conversions)}`);
  }

  // 5. イベント
  header('5. 上位イベント');
  console.log(`  ${'イベント名'.padEnd(35)} ${'回数'.padStart(10)} ${'ユーザー数'.padStart(12)}`);
  console.log('  ' + '─'.repeat(60));
  for (const e of events.slice(0, 15)) {
    console.log(`  ${e.event.padEnd(35)} ${fmt.num(e.count).padStart(10)} ${fmt.num(e.users).padStart(12)}`);
  }

  // 6. ランディングページ
  header('6. ランディングページ（流入口）');
  for (const l of landing) {
    const name = PAGES[l.path] || l.path;
    console.log(`  ${name.padEnd(20)} セッション: ${fmt.num(l.sessions).padStart(7)}  新規: ${fmt.num(l.newUsers).padStart(6)}  直帰: ${fmt.pct(l.bounceRate)}  CV: ${fmt.num(l.conversions)}`);
  }

  // 7. 曜日別
  header('7. 曜日別アクセス傾向');
  for (const t of timeTrends) {
    const bar = '█'.repeat(Math.min(30, Math.round(Number(t.sessions) / 5)));
    console.log(`  ${t.day}曜 ${bar} ${fmt.num(t.sessions)}`);
  }

  // 8. A/Bテスト結果
  if (abResults.length > 0) {
    header('8. A/Bテスト結果');
    for (const r of abResults) {
      console.log(`  テスト: ${r.testId}  バリアント: ${r.variant}  イベント: ${fmt.num(r.count)}  CV: ${fmt.num(r.conversions)}`);
    }
  }

  // 9. 改善提案
  header('9. 自動改善提案 & A/Bテスト推奨アクション');
  const { issues, score } = generateInsights(data);

  console.log(`\n  スコア → 🔴 緊急: ${score.critical}件  🟡 警告: ${score.warning}件  ✅ 良好: ${score.ok}件\n`);

  for (const issue of issues) {
    console.log(`\n  ${issue.priority} — ${issue.area}`);
    console.log(`  📌 発見: ${issue.finding}`);
    console.log('  📋 改善アクション:');
    for (const a of issue.actions) {
      console.log(`     → ${a}`);
    }
    if (issue.abTest) {
      console.log(`  🧪 A/Bテスト案: ${issue.abTest}`);
    }
    console.log('  ' + '─'.repeat(60));
  }

  // 10. JSONで保存
  const reportPath = path.join(__dirname, '..', 'ga4-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({ ...data, insights: issues, generatedAt: new Date().toISOString() }, null, 2));
  console.log(`\n  💾 生データを ga4-report.json に保存しました\n`);
}

// ─── メイン ──────────────────────────────────────────────────────────
async function main() {
  console.log('⏳ GA4 データを取得中... (プロパティ ID: ' + PROPERTY_ID + ')');

  try {
    const [summary, pages, traffic, devices, events, landing, timeTrends, abResults] = await Promise.all([
      fetchSummary(),
      fetchPagePerformance(),
      fetchTrafficSources(),
      fetchDevices(),
      fetchEvents(),
      fetchLandingPages(),
      fetchTimeTrends(),
      fetchAbTestResults(),
    ]);

    printReport({ summary, pages, traffic, devices, events, landing, timeTrends, abResults });
  } catch (err) {
    if (err.code === 7 || err.message?.includes('PERMISSION_DENIED')) {
      console.error('\n❌ 権限エラー: サービスアカウントをGA4プロパティの閲覧者として追加してください');
      console.error('   GA4 > 管理 > プロパティのアクセス管理 > サービスアカウントのメールアドレスを追加\n');
    } else if (err.code === 16 || err.message?.includes('UNAUTHENTICATED')) {
      console.error('\n❌ 認証エラー: credentials.json が見つからないか無効です');
      console.error('   scripts/ga4-report.mjs のコメントを参照してセットアップしてください\n');
    } else {
      console.error('\n❌ エラー:', err.message);
    }
    process.exit(1);
  }
}

main();
