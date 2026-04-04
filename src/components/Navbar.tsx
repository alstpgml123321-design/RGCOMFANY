import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, FileText, ChevronRight } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "홈", href: "#" },
    { name: "제네시스 프로모션", href: "#genesis", hot: true },
    { name: "국산차", href: "#domestic" },
    { name: "수입차", href: "#imported" },
    { name: "견적 문의", href: "#quote" },
  ];

  return (
    <nav className="fixed w-full z-[100] top-0 left-0 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
      <div className="max-w-[1792px] mx-auto px-6 h-[80px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Logo className="w-14 h-14 drop-shadow-md group-hover:scale-105 transition-transform" />
          <span className="font-heading font-bold text-2xl tracking-tight text-neutral-900">
            RGCOMFANY<span className="text-red-600">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`relative group flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${link.hot ? 'text-neutral-900' : 'text-neutral-600 hover:text-red-600'}`}
            >
              <span>{link.name}</span>
              {link.hot && (
                <>
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
                </>
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#quote" className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-lg text-xs tracking-widest uppercase hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/20">
            <FileText size={14} />
            빠른 견적받기
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-neutral-900 hover:text-red-600 transition-colors z-[110]"
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 top-[80px] bg-white z-[90] lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-neutral-900 group-hover:text-red-600 transition-colors">
                      {link.name}
                    </span>
                    {link.hot && (
                      <span className="px-1.5 py-0.5 bg-red-600 text-[10px] text-white font-black rounded-sm leading-none">
                        HOT
                      </span>
                    )}
                  </div>
                  <ChevronRight size={20} className="text-neutral-300 group-hover:text-red-600 transition-colors" />
                </a>
              ))}
              
              <div className="mt-8 pt-8 border-t border-neutral-100">
                <a 
                  href="#quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-red-600 text-white font-bold rounded-xl shadow-xl shadow-red-600/20"
                >
                  <FileText size={20} />
                  빠른 견적받기
                </a>
                
                <div className="mt-8 flex flex-col items-center gap-2 text-neutral-400 text-sm">
                  <p>상담 시간: 평일 09:00 - 18:00</p>
                  <p>© 2026 RGCOMPANY. All rights reserved.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
