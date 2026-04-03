import { motion } from "motion/react";

export default function ImportProcess() {
  const steps = [
    {
      num: 1,
      title: "차량 소싱",
      desc: "독일, 영국, 일본 및 북미의 인증 중고차 및 딜러십 네트워크를 통해 최상의 컨디션을 갖춘 차량을 찾아냅니다."
    },
    {
      num: 2,
      title: "현지 검사 및 안전 배송",
      desc: "철저한 현지 인스펙션 진행 후, 전액 해상 보험이 적용된 안전한 물류망을 통해 국내 항구까지 배송합니다."
    },
    {
      num: 3,
      title: "세관 통관 및 환경 인증 등록",
      desc: "복잡한 세관 업무, 환경 및 소음 인증, 최종 번호판 발급까지 대행하여 편안하게 인도받으실 수 있습니다."
    }
  ];

  return (
    <section id="imports" className="py-24 px-6 md:px-12 lg:px-20 bg-white border-b border-neutral-200">
      <div className="max-w-[1792px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, perspective: 1000, rotateX: 20, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 lg:order-1"
        >
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" 
            className="relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
            alt="Shipping"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, perspective: 1000, rotateX: 20, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2"
        >
          <h2 className="font-heading font-medium text-4xl md:text-5xl text-neutral-900 tracking-tight mb-6">유럽 및 일본 <br />다이렉트 직수입</h2>
          <p className="text-neutral-600 text-lg mb-10 leading-relaxed font-light">
            전 세계의 우수한 매물에 직접 접근하세요. RGCOMFANY를 통한 직수입으로 최대 20%의 비용을 절감할 수 있습니다. 차량 소싱부터 검사, 배송, 통관 및 국내 등록까지 모든 과정을 완벽하게 대행해 드립니다.
          </p>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-semibold text-xs shrink-0">{step.num}</div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm uppercase tracking-wider">{step.title}</h4>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a href="#import-page" className="px-8 py-4 border border-neutral-900 font-semibold hover:bg-neutral-900 hover:text-white transition-colors uppercase tracking-widest text-xs">
              수입 대행 시작하기
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
