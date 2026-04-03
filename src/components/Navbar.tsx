import React from "react";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
      <div className="max-w-[1792px] mx-auto px-6 h-[80px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Logo className="w-14 h-14 drop-shadow-md group-hover:scale-105 transition-transform" />
          <span className="font-heading font-bold text-2xl tracking-tight text-neutral-900">
            RGCOMFANY<span className="text-red-600">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-red-600 transition-colors whitespace-nowrap">홈</a>
          <a href="#genesis" className="relative group flex items-center gap-1">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-900 group-hover:text-red-600 transition-colors whitespace-nowrap">제네시스 프로모션</span>
            <motion.span 
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0px rgba(220, 38, 38, 0)",
                  "0 0 10px rgba(220, 38, 38, 0.5)",
                  "0 0 0px rgba(220, 38, 38, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-1.5 py-0.5 bg-red-600 text-[8px] text-white font-black rounded-sm leading-none shadow-lg shadow-red-600/20"
            >
              HOT
            </motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(220,38,38,0.5)]"></span>
          </a>
          <a href="#domestic" className="text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-red-600 transition-colors whitespace-nowrap">국산차</a>
          <a href="#imported" className="text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-red-600 transition-colors whitespace-nowrap">수입차</a>
          <a href="#quote" className="text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-red-600 transition-colors whitespace-nowrap">견적 문의</a>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:010-6573-5535" className="flex items-center gap-2 text-neutral-900 hover:text-red-600 transition-colors">
            <span className="text-xs font-bold tracking-widest uppercase">010-6573-5535</span>
          </a>
          <a href="#quote" className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg text-xs tracking-widest uppercase hover:bg-red-700 transition-colors duration-300 shadow-lg shadow-red-600/20">
            빠른 견적받기
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-neutral-900 hover:text-red-600 transition-colors">
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}
