import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const genesisCars = [
  {
    id: "g70",
    title: "제네시스 G70",
    tagline: "럭셔리 스포츠 세단",
    description: "역동적인 주행 성능과 세련된 디자인의 조화",
    monthly: "40만원대~",
    image: "https://i.namu.wiki/i/q0WOUtVhBa7twUOCvLXqpu_z58o_7J3dO3m6mbEzNE1wUlnYTEZW5IATw2yDjW5wt1euJEESyhGoG0VvI4hKVyrCR_NlAH0tMknGGQix1eP3mBvMnizlYACK7hegmC77z-w1wep-UWouMdFi7tM5cA.webp",
    badge: "특별 프로모션"
  },
  {
    id: "g80",
    title: "제네시스 G80",
    tagline: "럭셔리 대형 세단",
    description: "우아한 디자인과 첨단 기술이 집약된 베스트셀러",
    monthly: "50만원대~",
    image: "https://i.namu.wiki/i/YuSkgCX_q2CPbq1EJBnWliRrSUyDSjgvS5dQ9D52MZ1iDfKUCKPW_cwEzzzi6k8lW055uSa4clW3jwnjbUaNBes3TvcvAemryDTJ44pGHIa5k8DO0_Ulrqj3H1ryALHPljZSzSHNwQGg4a9AwErnvw.webp",
    badge: "인기 모델"
  },
  {
    id: "g90",
    title: "제네시스 G90",
    tagline: "플래그십 세단",
    description: "최고의 품격과 안락함을 제공하는 제네시스의 정점",
    monthly: "90만원대~",
    image: "https://i.namu.wiki/i/IXxzg0DmklDnMLmdUNu4wLvqGhigBfUs7oI1Ex4eUL27ueXCU-vgv4ocV2wRyJWN0sYs0u8hLLURc2YUi2jbEr3b4Jf__kt2OY88EWezjmbAGuFu9gE-bmsl4QZmo36TrL_uTe79tEPRFyid7NRfjg.webp",
    badge: "VIP 의전 차량"
  },
  {
    id: "gv70",
    title: "제네시스 GV70",
    tagline: "도심형 럭셔리 SUV",
    description: "스포티한 감성과 SUV의 실용성을 모두 갖춘 모델",
    monthly: "50만원대~",
    image: "https://i.namu.wiki/i/Dhta9nI0tkFJAoJxI1Xg-_h9E7C5r8b-I5Smqd_RuBHd6vlfzz7rzwSKo3tdaky7CGeQpKWfT7uFgeMsSmdI06c2XJZEhEZHlG8hgmuuNFqB5beXf1dHy4gt51SAKbHpOWPGLgvx-rSKqMtXmCfYQQ.webp",
    badge: "여성 선호 1위"
  },
  {
    id: "gv80",
    title: "제네시스 GV80",
    tagline: "럭셔리 대형 SUV",
    description: "웅장한 존재감과 압도적인 공간감을 선사하는 SUV",
    monthly: "70만원대~",
    image: "https://i.namu.wiki/i/O5uLrfQI9icSZNnfLB_gQSTIAZUaGJyEMb3YDmBSge8UOPyTdnRq_ZEGPldRYrg9YyzTGmF9atG4pMm8A1ND3ut82kAUMUEYjDP7rRLyLSFvuCua4wERUeFnnEvTeFnCiqLq_gYvnu-bDyptUZ7_UA.webp",
    badge: "패밀리 SUV 끝판왕"
  },
  {
    id: "gv90",
    title: "제네시스 GV90",
    tagline: "플래그십 전기 SUV",
    description: "미래 지향적 디자인과 혁신적인 공간의 만남 (출시 예정)",
    monthly: "상담 문의",
    image: "https://i.namu.wiki/i/ZVTaevBkFDE8TiwoIwcrFELBLrWREez1KQZAGCYkAwFjsuCOXgsk-tuJac01SZrT-tNppwsVTqVphnFoz13MfAuzeiOEfRmXK1xT9NsxK6El0Bp7BBclL-i3VA_c8gbfcYZJfrko6bNlOxrMU4KFdw.webp",
    badge: "사전 예약 중"
  }
];

export default function GenesisPromotion() {
  return (
    <section id="genesis" className="py-24 px-6 md:px-12 lg:px-20 bg-neutral-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-red-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1792px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="relative">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-red-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 bg-red-600/10 px-3 py-1 rounded-full border border-red-600/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              Genesis Special Promotion
            </motion.span>
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-white tracking-tight mb-4">
              제네시스 <span className="text-red-600 underline decoration-red-600/30 underline-offset-8">특별 프로모션</span>
            </h2>
            <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
              RGCOMFANY가 제안하는 제네시스 전 라인업 특별 견적입니다. <br />
              럭셔리의 정점을 합리적인 조건으로 만나보세요.
            </p>
          </div>
          <a href="#quote" className="group flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all uppercase tracking-wider text-xs shadow-xl shadow-red-600/20">
            제네시스 전용 상담 신청 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {genesisCars.map((car, index) => (
            <motion.div 
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)] hover:border-red-900/50 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {car.badge && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 z-10 rounded-full shadow-lg">
                    {car.badge}
                  </span>
                )}
                <img 
                  src={car.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                  alt={car.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading font-bold text-xl text-white tracking-tight">{car.title}</h3>
                  <span className="text-[10px] font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded uppercase tracking-wider border border-red-500/20">{car.tagline}</span>
                </div>
                <p className="text-xs text-neutral-400 mb-6 font-medium leading-relaxed">{car.description}</p>
                
                <div className="flex justify-between items-center border-t border-neutral-800 pt-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest leading-none mb-1">Monthly</span>
                    <span className="text-lg font-bold text-white">{car.monthly}</span>
                  </div>
                  <a href="#quote" className="px-6 py-3 bg-white text-neutral-900 text-[11px] font-bold uppercase tracking-widest rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-lg">
                    견적 받기
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
