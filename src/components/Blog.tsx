import { motion } from "motion/react";

const posts = [
  {
    id: 1,
    category: "차량 관리",
    title: "서스펜션 점검이 필요한 5가지 징후",
    desc: "거친 노면이 많은 도로 환경에서는 하체 관리가 필수적입니다. 쇼크업소버의 수명이 다하기 전에 미리 확인하는 방법을 알아보세요.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    category: "금융/리스",
    title: "2024년 자동차 할부/리스 완벽 가이드",
    desc: "기준 금리, 필수 초기 비용부터 은행 승인을 높이는 방법까지. 스마트한 자동차 금융 플랜을 세우기 위한 모든 것을 정리했습니다.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    category: "마켓 트렌드",
    title: "지금이 하이브리드로 갈아탈 때일까요?",
    desc: "유가 변동폭이 커지는 요즘, 국내 자동차 시장에서 프리미엄 하이브리드 SUV가 가지는 비용 대비 효율성과 잔존 가치를 분석합니다.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function Blog() {
  return (
    <section id="blogs" className="py-24 px-6 md:px-12 lg:px-20 bg-neutral-50">
      <div className="max-w-[1792px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, perspective: 1000, rotateX: 20, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-center mb-16"
        >
          <h2 className="font-heading font-medium text-3xl md:text-5xl text-neutral-900 tracking-tight">자동차 인사이트</h2>
          <a href="#blog-page" className="hidden md:inline-block text-neutral-500 hover:text-red-600 transition-colors font-semibold text-xs uppercase tracking-widest">전체 기사 보기</a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, perspective: 1000, rotateX: 20, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group"
            >
              <div className="overflow-hidden h-56">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt={post.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <span className="text-[10px] font-semibold text-red-500 uppercase tracking-widest mb-3 block">{post.category}</span>
                <h3 className="font-heading font-medium text-lg text-neutral-900 mb-4 tracking-tight leading-snug group-hover:text-red-600 transition-colors">{post.title}</h3>
                <p className="text-xs text-neutral-500 mb-6 line-clamp-2 leading-relaxed">{post.desc}</p>
                <a href="#" className="text-xs font-semibold text-neutral-900 border-b border-neutral-200 pb-1 hover:text-red-600 hover:border-red-600 transition-all uppercase tracking-wider">더 읽기</a>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
             <a href="#blog-page" className="text-neutral-500 hover:text-red-600 transition-colors font-semibold text-xs uppercase tracking-widest">전체 기사 보기</a>
        </div>
      </div>
    </section>
  );
}
