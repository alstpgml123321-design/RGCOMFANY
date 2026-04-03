import { CheckCircle2, Zap, ShieldCheck, Globe, Wallet, Shield, TrendingDown } from "lucide-react";

export default function Marquee() {
  const items = [
    { icon: <Wallet size={14} />, text: "초기비용 0원 진행 가능" },
    { icon: <Shield size={14} />, text: "보험/세금 포함 (렌트)" },
    { icon: <TrendingDown size={14} />, text: "개인/법인 절세 효과 (리스)" },
    { icon: <Zap size={14} />, text: "30분 내 빠른 승인" },
  ];

  return (
    <div className="bg-red-600 text-white py-4 overflow-hidden border-y border-red-700">
      <div className="flex whitespace-nowrap gap-12 text-xs font-bold uppercase tracking-[0.15em] animate-marquee w-max">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex gap-12">
            {items.map((item, index) => (
              <span key={index} className="flex items-center gap-3">
                {item.icon} {item.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
