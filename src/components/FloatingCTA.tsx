import { MessageCircle, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-end">
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white px-4 py-2 rounded-full shadow-xl border border-neutral-100 mb-2 hidden md:block"
            >
              <p className="text-[10px] font-bold text-neutral-900">실시간 상담 가능!</p>
            </motion.div>
            
            <motion.a
              href="#quote"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-red-600 pr-5 pl-2 py-1.5 rounded-full shadow-2xl text-white border border-red-500 transition-all"
            >
              <div className="w-10 h-10 bg-white text-red-600 rounded-full flex items-center justify-center shadow-sm">
                <FileText size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold opacity-80 leading-none mb-0.5 uppercase">Quote</span>
                <span className="text-xs font-bold leading-none">빠른 견적받기</span>
              </div>
            </motion.a>

            <motion.a
              href="https://open.kakao.com/me/yoohan7923"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-[#FEE500] pr-5 pl-2 py-1.5 rounded-full shadow-2xl text-[#3C1E1E] transition-all"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <MessageCircle size={18} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold opacity-60 leading-none mb-0.5 uppercase">KakaoTalk</span>
                <span className="text-xs font-bold leading-none">카카오톡 상담</span>
              </div>
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
