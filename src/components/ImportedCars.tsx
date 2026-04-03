import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const importedBrands = [
  {
    name: "메르세데스-벤츠",
    cars: [
      { id: "b1", title: "E-클래스", image: "https://i.namu.wiki/i/GwlB9PwZDLsUZvalIyVx05_q5Fn-KnKwB5mVrUAF_E0YbCi1cbuI1wW8Kv7JeneIvJk_GMDi04wiHKbosBemZ0lXuUFLHha825NCnI_8kV5qgJp1YI08kou3mJvbUvXtcOfloGwVGXwjI5b7aD5GQQ.webp", rental: "80만원대~", lease: "70만원대~" },
      { id: "b2", title: "S-클래스", image: "https://i.namu.wiki/i/fb6L81oIGZlVZhOYt2Y7TQR22wpBv4EmA-4EnUZtYPkMbuPekpYjdQa6OYLyKVz35uGHq1c_HVptcVjH7iKElc9P8nKgZixc_cWPF0OltruVLpVED3snvIR0Uij-tjczy_gDIraPBvJMHc1RgKkqzQ.webp", rental: "150만원대~", lease: "140만원대~" },
    ]
  },
  {
    name: "BMW",
    cars: [
      { id: "bm1", title: "5시리즈", image: "https://i.namu.wiki/i/_A6AuDwGIML4gnzv350aUt21EnB9api7S1lszuxJ9H0fkn-3aPI5OP8lQuSLjvc04fA6R3rFJ_TEp2C-tfvUgDcMr9-jpGXusNFs36lu8v8BSQ-Nykoh3_XP0uSttmnBSpC3m-y-Hyk5Wb91YyOfeA.webp", rental: "80만원대~", lease: "70만원대~" },
      { id: "bm2", title: "X5", image: "https://i.namu.wiki/i/WaQ-aWD3EEH76NFggRTJRIuvS3B81UcoezWl6s9n_Ip86VM5IdYSh4h-3sDeuZvkldIzs1MUzQeRoT9yMeVcPU3odHqLpF_CTrBEuuYsqwAlDZQUVRjOLh_82iqJIOJ77MF1W2XkyCOb1Uq0rf25mQ.webp", rental: "100만원대~", lease: "90만원대~" },
    ]
  },
  {
    name: "테슬라",
    cars: [
      { id: "t1", title: "모델 3", image: "https://i.namu.wiki/i/K3mygQhhhbFttFlCo_nB-npSzq0krQMM_k0TzRHgAX4T2Nve0eeuF3SthACdmT_fyQwP7jaBHkWzmpdYuNDub4drzCq0MqOZBJ-ZcbQWfR-CbdhYKiIaVqbN3JPSXFyDoVuugDkWboUwX1m_q3pcyw.webp", rental: "60만원대~", lease: "50만원대~" },
      { id: "t2", title: "모델 Y", image: "https://i.namu.wiki/i/jpyLRnKocsst725cFGUvAFKxJHyONWYFHrR0m0zn-fUvFMa3lne4WlwOe-DPS6OXGwUe0miD8AKNlmqpTE_A3pfubwIlcWP932CBILN2i7S9TjTJMxj30QfnsDDV8uYHqgZbahNdXNOv4BF5TZb61A.webp", rental: "70만원대~", lease: "60만원대~" },
    ]
  }
];

export default function ImportedCars() {
  return (
    <section id="imported" className="py-24 px-6 md:px-12 lg:px-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-[1792px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-neutral-900 tracking-tight mb-4">수입차 라인업</h2>
          <p className="text-neutral-500 max-w-md text-sm md:text-base">벤츠, BMW, 아우디, 테슬라 등 전 세계 명차를 최적의 조건으로 만나보세요.</p>
        </motion.div>

        <div className="space-y-20">
          {importedBrands.map((brand, bIndex) => (
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
                    className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl transition-all duration-300"
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
                      <a href="#quote" className="w-full py-3 bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-neutral-900 hover:text-white transition-all text-center block">
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
