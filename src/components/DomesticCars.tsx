import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const domesticBrands = [
  {
    name: "현대자동차",
    cars: [
      { id: "h1", title: "그랜저", image: "https://i.namu.wiki/i/9WNfzdExtRAh5u2HOVM_iFIFvakXgMpOXsg4kuPyanZ4nRghElp6zpznkItLSlj5hYD_LzdsAHaw1C1o94h4iYA4Yj0BU6Ew5DZKqhm_aRGDsyZ64Z9O4PPiJXY8FgZ4o3t0wNuSD-KrzJiCd-jC3A.webp", rental: "40만원대~", lease: "30만원대~" },
      { id: "h2", title: "싼타페", image: "https://i.namu.wiki/i/fnxHmqgvM1vCNr81Xh1_xnhVE4Z6A_K2cErwt39PUBxXTqPB0frOWXs_stjryukfShwSOioi1Gm93qkLla2z0Da_bfu4k8H-Ago0LOY5v-OucBhbaYN6rROwZYg9RXppw0ILcduASbGT4w3IkWnEZA.webp", rental: "40만원대~", lease: "30만원대~" },
      { id: "h3", title: "아반떼", image: "https://i.namu.wiki/i/n1IF2LpN7F-uTy3xvOnm7t4HDDX00NTaNAMXaW3ICMf5An0uLcwhg6x46pF9awLm9h3zxZtOPr5Ae0--yHaQ96tsL3kYqx7xOT35NjkifT2orGvUKuFb03Uxlhmfa8rmj_9NPGt9dzu6LO8r_n9Eug.webp", rental: "20만원대~", lease: "10만원대~" },
    ]
  },
  {
    name: "기아",
    cars: [
      { id: "k1", title: "쏘렌토", image: "https://postfiles.pstatic.net/MjAyNjA0MDJfMjMw/MDAxNzc1MDU2MTk4Nzgy.-5WqNTFk4MV3gl7qHZlYpJyZme3nKi_IX55dp6vOInQg.NxB5uwOcVMY67cG-zl8K0FY2s7KIyJpTZOtAzzTORvkg.PNG/%EC%8F%98%EB%A0%8C%ED%86%A0.png?type=w3840", rental: "40만원대~", lease: "30만원대~" },
      { id: "k2", title: "카니발", image: "https://i.namu.wiki/i/aRGZSCo5NetZT3GMNyShZwTqiRQy9ENgz_T8g3uFeMVH5dX3hiSzOJ_IiF6ZPZvHYgAm383b2iDTt_JXMQJzWxZqEPITOVe-qbLZ5W5o3Onj3O4R8NFKvIwHdnBYFMdetkq262azoF6B9ZaxfigCBg.webp", rental: "50만원대~", lease: "40만원대~" },
      { id: "k3", title: "스포티지", image: "https://postfiles.pstatic.net/MjAyNjA0MDJfMTk5/MDAxNzc1MDU2MTg2NjI4.8efKI-X66PAhiCwzBwpCR3IaeNRF3yXby3WTv7o7-uQg.zgWwzS2rE0yRoVMljbfMvqncpqS_gWo5KRUGOZvPKXEg.PNG/%EC%8A%A4%ED%8F%AC%ED%8B%B0%EC%A7%80.png?type=w3840", rental: "30만원대~", lease: "20만원대~" },
    ]
  },
  {
    name: "제네시스",
    cars: [
      { id: "g1", title: "G80", image: "https://i.namu.wiki/i/YuSkgCX_q2CPbq1EJBnWliRrSUyDSjgvS5dQ9D52MZ1iDfKUCKPW_cwEzzzi6k8lW055uSa4clW3jwnjbUaNBes3TvcvAemryDTJ44pGHIa5k8DO0_Ulrqj3H1ryALHPljZSzSHNwQGg4a9AwErnvw.webp", rental: "50만원대~", lease: "40만원대~" },
      { id: "g2", title: "GV80", image: "https://i.namu.wiki/i/O5uLrfQI9icSZNnfLB_gQSTIAZUaGJyEMb3YDmBSge8UOPyTdnRq_ZEGPldRYrg9YyzTGmF9atG4pMm8A1ND3ut82kAUMUEYjDP7rRLyLSFvuCua4wERUeFnnEvTeFnCiqLq_gYvnu-bDyptUZ7_UA.webp", rental: "70만원대~", lease: "60만원대~" },
    ]
  }
];

export default function DomesticCars() {
  return (
    <section id="domestic" className="py-24 px-6 md:px-12 lg:px-20 bg-white border-b border-neutral-200">
      <div className="max-w-[1792px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-neutral-900 tracking-tight mb-4">국산차 라인업</h2>
          <p className="text-neutral-500 max-w-md text-sm md:text-base">현대, 기아, 제네시스 등 국내 인기 브랜드의 모든 차량을 만나보세요.</p>
        </motion.div>

        <div className="space-y-20">
          {domesticBrands.map((brand, bIndex) => (
            <div key={brand.name}>
              <h3 className="text-2xl font-bold text-neutral-900 mb-8 border-l-4 border-red-600 pl-4">{brand.name}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {brand.cars.map((car, cIndex) => (
                  <motion.div 
                    key={car.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: cIndex * 0.1 }}
                    className="group bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={car.image} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        alt={car.title}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-lg text-neutral-900 mb-4">{car.title}</h4>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-neutral-500">장기렌트</span>
                          <span className="text-red-600 font-bold">{car.rental}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-neutral-500">리스</span>
                          <span className="text-red-600 font-bold">{car.lease}</span>
                        </div>
                      </div>
                      <a href="#quote" className="w-full py-3 bg-white border border-neutral-200 text-neutral-900 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-neutral-900 hover:text-white transition-all text-center block">
                        견적 받기
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
