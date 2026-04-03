import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, Check, ArrowRight } from "lucide-react";

export default function Financing() {
  const [price, setPrice] = useState(50000000);
  const [downPayment, setDownPayment] = useState(20);
  const [period, setPeriod] = useState(24);

  const monthlyPayment = Math.round(((price * (1 - downPayment / 100)) / period) / 10000) * 10000;

  return (
    <section id="financing" className="py-24 px-6 md:px-12 lg:px-20 bg-neutral-100">
      <div className="max-w-[1792px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, perspective: 1000, rotateX: 20, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1"
        >
          <div className="bg-white p-8 md:p-12 shadow-2xl border border-neutral-200">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-heading font-medium text-xl text-neutral-900 tracking-tight">할부 계산기</h3>
              <Calculator className="text-red-600" size={24} />
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-xs font-semibold uppercase text-neutral-500">차량 가격</label>
                  <span className="font-mono font-semibold text-neutral-900 text-sm">{(price / 10000).toLocaleString()}만 원</span>
                </div>
                <input 
                  type="range" 
                  min="10000000" 
                  max="200000000" 
                  step="1000000"
                  value={price} 
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full" 
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-xs font-semibold uppercase text-neutral-500">선수금</label>
                  <span className="font-mono font-semibold text-neutral-900 text-sm">{downPayment}%</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="80" 
                  value={downPayment} 
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-neutral-500 mb-3">할부 기간</label>
                <div className="grid grid-cols-4 gap-2">
                  {[12, 24, 36, 48].map((p) => (
                    <button 
                      key={p}
                      onClick={() => setPeriod(p)}
                      className={`py-3 text-xs font-semibold border transition-all ${
                        period === p 
                          ? "border-red-500 bg-red-600 text-white shadow-md" 
                          : "border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
                      }`}
                    >
                      {p}개월
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-8 border-t border-neutral-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-neutral-500 font-medium">예상 월 납입금</span>
                  <span className="font-heading font-semibold text-2xl text-neutral-900 tracking-tight">
                    {(monthlyPayment / 10000).toLocaleString()}만 원
                  </span>
                </div>
                <button className="w-full py-4 bg-neutral-900 text-white font-semibold text-xs uppercase tracking-widest hover:bg-red-600 transition-colors">
                  금융 서비스 신청
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, perspective: 1000, rotateX: 20, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2"
        >
          <div className="inline-block px-3 py-1 bg-red-100 text-red-600 text-[10px] font-semibold mb-4 uppercase tracking-widest">맞춤형 금융 프로그램</div>
          <h2 className="font-heading font-medium text-4xl md:text-5xl text-neutral-900 tracking-tight mb-6">지금 타고, <br />여유롭게 내세요.</h2>
          <p className="text-neutral-600 text-lg mb-8 leading-relaxed font-light">
            RGCOMFANY는 국내 주요 제1금융권 및 캐피탈사와 제휴하여 경쟁력 있는 금리로 최대 80%의 할부 금융을 제공합니다. 간소화된 절차를 통해 48시간 이내에 승인 여부를 확인해 보세요.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "최저 4.5%부터 시작하는 경쟁력 있는 금리",
              "최대 60개월까지 선택 가능한 유연한 상환 조건",
              "다양한 운용리스 및 금융리스 상품 제공"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4">
                <Check className="text-red-500" size={20} />
                <span className="text-neutral-700 text-sm">{text}</span>
              </li>
            ))}
          </ul>
          <a href="#financing-page" className="text-red-600 font-semibold border-b border-red-600 pb-1 hover:text-red-700 transition-colors inline-flex items-center gap-2 text-xs uppercase tracking-widest">
            자세히 알아보기 <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
