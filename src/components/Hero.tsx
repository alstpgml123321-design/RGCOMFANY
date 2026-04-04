import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, FileText } from "lucide-react";
import { useState, useEffect } from "react";

const heroImages = [
  "https://cafeptthumb-phinf.pstatic.net/MjAyNjA0MDNfMjIg/MDAxNzc1MTc5ODE4OTIw.vuBVghduEQCanAyvgzYS4E6oMPJqmrBtZZ1srJ9DOAAg.-tZ_2ZLEx5f9c6eTLhzef10t3RWBhJtoh82sS7tk58gg.PNG/G80.png?type=w1600",
  "https://cafeptthumb-phinf.pstatic.net/MjAyNjA0MDNfNjcg/MDAxNzc1MTc5ODE4ODk1.kRu4hUD9DNxj21LEqNfT3L2HtBXjHyyyXVU0WPgjfvog.qAgreabdObPfdFrh6JDXpx3Ky0AuxFXF6UwO9GgrUIsg.PNG/EV6.png?type=w1600",
  "https://cafeptthumb-phinf.pstatic.net/MjAyNjA0MDNfMTIw/MDAxNzc1MTc5ODE4OTI1.m7kd73u9aUOhtX54GL6-z_kEFgO7q_xi1yZGErztiG0g._oXuV99zEaHmyqYjzJNdXSrHrpKyb8_D9YAuxxpbAq8g.PNG/%EC%8F%98%EB%A0%8C%ED%86%A0.png?type=w1600",
  "https://cafeptthumb-phinf.pstatic.net/MjAyNjA0MDNfMTcy/MDAxNzc1MTc5ODE4OTI1.InHj6GDdaw_3cJEyq79yTEOI3fhOu0GOb13A8sNjrEcg.6BB5NGQaPmwEe8XcMkGRu9AS_YHlEjc40csD9WCFm3cg.PNG/bmw5%EC%8B%9C%EB%A6%AC%EC%A6%88.png?type=w1600"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative h-[60vh] md:h-screen min-h-[500px] md:min-h-[700px] w-full overflow-hidden bg-black">
      {/* Hero Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Blurred Background to fill gaps */}
            <img 
              src={heroImages[currentImage]} 
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-110"
              referrerPolicy="no-referrer"
              alt=""
            />
            {/* Main Contained Image */}
            <img 
              src={heroImages[currentImage]} 
              alt={`RGCOMPANY Hero Background ${currentImage + 1}`} 
              className="relative z-10 w-full h-full object-contain md:object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/20 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none pb-24 md:pb-32">
        <div className="w-full px-6 md:px-20 pointer-events-auto text-center">
          <div className="max-w-[1792px] mx-auto">
            <div className="max-w-3xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className="inline-flex items-center gap-2 text-red-500 text-sm font-bold uppercase tracking-[0.2em] mb-6 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  신차 장기렌트 / 리스 / 저신용도 가능
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[1.1] text-white mb-8 drop-shadow-lg"
              >
                초기비용 <span className="text-red-500">0원</span>,<br />
                지금 바로 출고
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="text-neutral-200 font-light text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto drop-shadow-md"
              >
                대한민국 1등 견적 비교 시스템. <br className="hidden md:block" />
                복잡한 서류 없이 30분 내 승인, 전국 어디든 즉시 출고 가능합니다.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                <a href="https://open.kakao.com/me/yoohan7923" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FEE500] text-[#3C1E1E] text-xs font-bold uppercase tracking-widest hover:bg-[#F9E000] transition-all w-full sm:w-auto rounded-lg shadow-xl">
                  <MessageCircle size={16} fill="currentColor" /> 카톡상담
                </a>
                <a href="#quote" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-all w-full sm:w-auto rounded-lg shadow-xl">
                  <FileText size={16} /> 견적받기
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
