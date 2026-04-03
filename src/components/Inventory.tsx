import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const cars = [
  {
    id: 9,
    title: "제네시스 G80",
    tagline: "럭셔리 세단의 기준",
    description: "압도적인 디자인 • 정숙한 승차감 • 성공의 상징",
    rental: "50만원대~",
    lease: "40만원대~",
    image: "https://i.namu.wiki/i/YuSkgCX_q2CPbq1EJBnWliRrSUyDSjgvS5dQ9D52MZ1iDfKUCKPW_cwEzzzi6k8lW055uSa4clW3jwnjbUaNBes3TvcvAemryDTJ44pGHIa5k8DO0_Ulrqj3H1ryALHPljZSzSHNwQGg4a9AwErnvw.webp",
    badge: "즉시출고 가능"
  },
  {
    id: 7,
    title: "기아 쏘렌토",
    tagline: "국내 SUV 판매 1위",
    description: "패밀리카의 정석 • 압도적인 공간감 • 하이브리드 인기 모델",
    rental: "40만원대~",
    lease: "30만원대~",
    image: "https://postfiles.pstatic.net/MjAyNjA0MDJfMjMw/MDAxNzc1MDU2MTk4Nzgy.-5WqNTFk4MV3gl7qHZlYpJyZme3nKi_IX55dp6vOInQg.NxB5uwOcVMY67cG-zl8K0FY2s7KIyJpTZOtAzzTORvkg.PNG/%EC%8F%98%EB%A0%8C%ED%86%A0.png?type=w3840",
    badge: "즉시출고 가능"
  },
  {
    id: 8,
    title: "기아 스포티지",
    tagline: "준중형 SUV 베스트셀러",
    description: "세련된 디자인 • 뛰어난 연비 • 젊은 층 선호도 1위",
    rental: "30만원대~",
    lease: "20만원대~",
    image: "https://postfiles.pstatic.net/MjAyNjA0MDJfMTk5/MDAxNzc1MDU2MTg2NjI4.8efKI-X66PAhiCwzBwpCR3IaeNRF3yXby3WTv7o7-uQg.zgWwzS2rE0yRoVMljbfMvqncpqS_gWo5KRUGOZvPKXEg.PNG/%EC%8A%A4%ED%8F%AC%ED%8B%B0%EC%A7%80.png?type=w3840",
    badge: "즉시출고 가능"
  },
  {
    id: 4,
    title: "BMW 5시리즈",
    tagline: "수입차 입문 끝판왕",
    description: "브랜드 + 주행감 • 리스 전환율 높음",
    rental: "80만원대~",
    lease: "70만원대~",
    image: "https://i.namu.wiki/i/_A6AuDwGIML4gnzv350aUt21EnB9api7S1lszuxJ9H0fkn-3aPI5OP8lQuSLjvc04fA6R3rFJ_TEp2C-tfvUgDcMr9-jpGXusNFs36lu8v8BSQ-Nykoh3_XP0uSttmnBSpC3m-y-Hyk5Wb91YyOfeA.webp",
    badge: "즉시출고 가능"
  },
  {
    id: 5,
    title: "테슬라 모델 3",
    tagline: "전기차 대표 모델",
    description: "유지비 절감 • 요즘 트렌드 차량",
    rental: "60만원대~",
    lease: "50만원대~",
    image: "https://i.namu.wiki/i/K3mygQhhhbFttFlCo_nB-npSzq0krQMM_k0TzRHgAX4T2Nve0eeuF3SthACdmT_fyQwP7jaBHkWzmpdYuNDub4drzCq0MqOZBJ-ZcbQWfR-CbdhYKiIaVqbN3JPSXFyDoVuugDkWboUwX1m_q3pcyw.webp",
    badge: "즉시출고 가능"
  },
  {
    id: 6,
    title: "현대 아반떼",
    tagline: "가성비 끝판왕",
    description: "사회초년생 / 첫차 • 가격 부담 ↓ 문의 ↑",
    rental: "20만원대~",
    lease: "10만원대~",
    image: "https://i.namu.wiki/i/n1IF2LpN7F-uTy3xvOnm7t4HDDX00NTaNAMXaW3ICMf5An0uLcwhg6x46pF9awLm9h3zxZtOPr5Ae0--yHaQ96tsL3kYqx7xOT35NjkifT2orGvUKuFb03Uxlhmfa8rmj_9NPGt9dzu6LO8r_n9Eug.webp",
    badge: "즉시출고 가능"
  }
];

export default function Inventory() {
  return (
    <section id="inventory" className="py-24 px-6 md:px-12 lg:px-20 bg-white border-b border-neutral-200">
      <div className="max-w-[1792px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-neutral-900 tracking-tight mb-4">인기차량리스트</h2>
            <p className="text-neutral-500 max-w-md text-sm md:text-base">RGCOMFANY가 추천하는 가장 핫한 모델들입니다. <br />초기비용 0원, 즉시 출고 가능한 매물을 확인해 보세요.</p>
          </div>
          <a href="#" className="group flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors uppercase tracking-wider text-xs">
            전체 차량 보기 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div 
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-100 hover:shadow-2xl hover:border-red-200 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {car.badge && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 z-10 rounded-full shadow-lg">
                    {car.badge}
                  </span>
                )}
                <img 
                  src={car.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt={car.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading font-bold text-xl text-neutral-900 tracking-tight">{car.title}</h3>
                  <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded uppercase tracking-wider">{car.tagline}</span>
                </div>
                <p className="text-xs text-neutral-500 mb-6 font-medium leading-relaxed">{car.description}</p>
                
                <div className="space-y-3 mb-8 border-t border-neutral-100 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400 text-xs font-medium">장기렌트</span>
                    <span className="text-neutral-900 font-bold text-sm">{car.rental}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400 text-xs font-medium">리스</span>
                    <span className="text-neutral-900 font-bold text-sm">{car.lease}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <a href="#quote" className="w-full py-4 bg-red-600 text-white text-[11px] font-bold uppercase tracking-widest rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-600/10 text-center">
                    빠른 견적 받기
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
