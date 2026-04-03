import { MessageCircle, Phone } from "lucide-react";
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
              href="tel:010-6573-5535"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-white pr-6 pl-2 py-2 rounded-full shadow-2xl text-neutral-900 border border-neutral-100 transition-all"
            >
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-sm">
                <Phone size={24} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-60 leading-none mb-1">Phone</span>
                <span className="text-sm font-bold leading-none">010-6573-5535</span>
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
              className="group flex items-center gap-3 bg-[#FEE500] pr-6 pl-2 py-2 rounded-full shadow-2xl text-[#3C1E1E] transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <MessageCircle size={24} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-60 leading-none mb-1">KakaoTalk</span>
                <span className="text-sm font-bold leading-none">카카오톡 상담</span>
              </div>
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
