import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    type: "직장인",
    name: "김*현 님",
    vehicle: "제네시스 G80",
    content: "초기비용 0원으로 G80 오너가 되었습니다. 상담부터 출고까지 딱 일주일 걸렸네요. 광주에서 진행했는데 너무 친절하셨어요!"
  },
  {
    id: 2,
    type: "개인사업자",
    name: "이*우 님",
    vehicle: "기아 쏘렌토 하이브리드",
    content: "리스로 진행했는데 절세 효과가 확실하네요. 최저가 비교해주셔서 타사보다 월 5만원 더 저렴하게 계약했습니다. 감사합니다!"
  },
  {
    id: 3,
    type: "사회초년생",
    name: "박*아 님",
    vehicle: "기아 스포티지",
    content: "보험료 걱정 때문에 렌트 선택했는데 탁월한 선택이었어요. 사고 시 면책금만 내면 되니 마음이 편합니다. 강추해요!"
  }
];

export default function Reviews() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-neutral-50">
      <div className="max-w-[1792px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-neutral-900 mb-4">실시간 계약 후기</h2>
          <p className="text-neutral-500">RGCOMFANY와 함께한 고객님들의 실제 이야기입니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 relative"
            >
              <Quote className="absolute top-8 right-8 text-red-100" size={48} />
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">{review.type}</span>
                    <span className="text-sm font-bold text-neutral-900">{review.name}</span>
                  </div>
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-neutral-900 mb-3">{review.vehicle} 출고</h4>
              <p className="text-neutral-500 text-sm leading-relaxed italic">"{review.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
