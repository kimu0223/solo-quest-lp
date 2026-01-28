"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // ここで問い合わせデータを処理
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <div className="pt-40 pb-20 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">お問い合わせ</h2>
      {status === "success" ? (
        <div className="bg-[#112211] border border-green-500/30 p-10 rounded-3xl text-center">
          <p className="text-green-400 font-bold mb-4">メッセージを送信しました</p>
          <p className="text-gray-400 text-sm">ギルド運営より、ご登録のメールアドレス宛にご連絡いたします。</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-400 font-medium">お問い合わせ内容</label>
            <textarea 
              required
              className="w-full bg-[#161625] border border-white/10 rounded-2xl p-5 text-white focus:border-[#00D4FF] outline-none min-h-[250px] transition"
              placeholder="ご質問、不具合の報告、機能の要望などをご入力ください。"
            ></textarea>
          </div>
          <button 
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-[#00D4FF] text-black font-bold py-5 rounded-2xl hover:brightness-110 active:scale-[0.98] transition disabled:opacity-50"
          >
            {status === "sending" ? "送信中..." : "ギルドへ送信する"}
          </button>
        </form>
      )}
    </div>
  );
}