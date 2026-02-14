import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center font-sans text-slate-800 px-6">
      <div className="text-6xl mb-6">🧭</div>
      <h1 className="text-4xl font-black text-slate-900 mb-4">迷子になってしまったようです</h1>
      <p className="text-slate-600 mb-8 text-center leading-relaxed">
        お探しのページは見つかりませんでした。<br />
        冒険の地図（URL）が間違っているか、ページが移動した可能性があります。
      </p>
      <Link 
        href="/" 
        className="px-8 py-3 bg-teal-500 text-white font-bold rounded-full shadow-md hover:bg-teal-600 transition-all hover:-translate-y-1"
      >
        トップページに戻る
      </Link>
    </div>
  );
}