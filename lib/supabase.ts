import { createClient } from "@supabase/supabase-js";

// サーバーサイド専用（service_role）。実行時に初期化する
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}
