"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("アプリの使い方");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setErrorMessage(data.error ?? "送信に失敗しました。しばらくしてから再度お試しください。");
        setStatus("error");
        return;
      }

      setStatus("success");

      // GA4 event tracking
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "contact_form_submit", {
          event_category: "engagement",
        });
      }
    } catch {
      setErrorMessage("ネットワークエラーが発生しました。インターネット接続を確認してください。");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-teal-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl">🌱</span>
            <span className="font-black tracking-tight text-slate-800 group-hover:text-teal-600 transition-colors">
              Solo Quest
            </span>
          </Link>
          <Link href="/" className="text-sm font-bold text-slate-500 hover:text-teal-600 transition-colors">
            ホームに戻る
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="pt-32 pb-20 px-6 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-black text-slate-900 mb-4">お問い合わせ</h1>
          <p className="text-slate-500">ご質問・ご要望はこちらからお気軽にどうぞ</p>
        </div>

        {status === "success" ? (
          <div className="bg-white clay-card p-10 rounded-3xl text-center border border-teal-100">
            <div className="text-4xl mb-4">✅</div>
            <p className="text-teal-700 font-bold text-lg mb-3">メッセージを送信しました！</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              ご登録のメールアドレス宛にご連絡いたします。<br />
              通常2〜3営業日以内にご返信いたします。
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                setName("");
                setEmail("");
                setSubject("アプリの使い方");
                setMessage("");
              }}
              className="mt-8 text-sm text-teal-600 hover:text-teal-700 underline underline-offset-4 transition-colors"
            >
              別の内容を送る
            </button>
          </div>
        ) : (
          <div className="bg-white clay-card p-8 rounded-3xl border border-teal-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold text-slate-700">
                  お名前 <span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="山田 太郎"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold text-slate-700">
                  メールアドレス <span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700">
                  お問い合わせの種類
                </label>
                <select
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition appearance-none cursor-pointer"
                >
                  <option value="アプリの使い方">アプリの使い方</option>
                  <option value="バグ・不具合">バグ・不具合</option>
                  <option value="機能のご要望">機能のご要望</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold text-slate-700">
                  お問い合わせ内容 <span className="text-red-400 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="ご質問、不具合の報告、機能の要望などをご入力ください。（50文字以上推奨）"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition min-h-[180px] resize-y"
                />
                {message.length > 0 && message.length < 50 && (
                  <p className="text-xs text-amber-500">
                    詳しい内容をご記入いただくと、よりスムーズにご対応できます（現在 {message.length} 文字）
                  </p>
                )}
              </div>

              {/* Error message */}
              {status === "error" && errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <p className="text-red-600 text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-teal-500 hover:bg-teal-600 active:scale-[0.98] text-white font-bold py-4 rounded-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm shadow-teal-200"
              >
                {status === "sending" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    送信中...
                  </span>
                ) : (
                  "送信する"
                )}
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>&copy; 2026 Solo Quest.</p>
      </footer>
    </div>
  );
}
