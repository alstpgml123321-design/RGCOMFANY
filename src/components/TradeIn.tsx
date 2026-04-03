import { motion } from "motion/react";
import { Camera, ClipboardCheck, RefreshCcw } from "lucide-react";

export default function TradeIn() {
  const steps = [
    {
      icon: <Camera size={24} />,
      title: "1. 사진 전송",
      desc: "포털이나 카카오톡을 통해 차량의 사진과 기본 정보를 업로드해 주세요."
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "2. 무료 점검",
      desc: "전문 평가사가 직접 매장 또는 원하시는 장소에서 차량 상태를 꼼꼼히 점검합니다."
    },
    {
      icon: <RefreshCcw size={24} />,
      title: "3. 즉시 견적",
      desc: "점검 완료 즉시 새 차 구매 비용에서 차감될 확정 매입 견적을 안내해 드립니다."
    }
  ];

  return (
    <section id="trade-in" className="py-24 px-6 md:px-12 lg:px-20 bg-neutral-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, perspective: 1000, rotateX: 20, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-heading font-medium text-4xl md:text-5xl tracking-tight mb-6">타시던 차량, 보상 판매하세요</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            번거로움 없이 스마트하게 차량을 업그레이드하세요. 새 차 구매 시 기존 차량을 시장 최고가로 매입하여 부담을 줄여드립니다.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, i) => (
              <div key={i} className="bg-neutral-800/30 p-8 border border-neutral-700 backdrop-blur-sm hover:bg-neutral-800/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h4 className="font-semibold text-sm uppercase tracking-wider mb-2">{step.title}</h4>
                <p className="text-xs text-neutral-500 leading-6">{step.desc}</p>
              </div>
            ))}
          </div>

          <a href="#valuation-page" className="inline-flex items-center gap-3 bg-white text-neutral-900 px-10 py-4 font-semibold text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">
            무료 견적 받기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
