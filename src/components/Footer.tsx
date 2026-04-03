import React from "react";
import { Globe, Mail, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12 border-t border-neutral-800" id="contact">
      <div className="max-w-[1792px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8">
              <Logo className="w-14 h-14" />
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                RGCOMFANY<span className="text-red-500">.</span>
              </span>
            </a>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm mb-10 font-light">
              프리미엄 자동차 솔루션을 위한 당신의 신뢰할 수 있는 파트너. 맞춤형 수입차 소싱부터 유연하고 폭넓은 금융 프로그램까지, 당신의 드림카를 현실로 만들어 드립니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-red-500 transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-neutral-400 hover:text-red-500 transition-colors"><Mail size={20} /></a>
              <a href="#" className="text-neutral-400 hover:text-red-500 transition-colors"><Phone size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest mb-6 text-white">차량 라인업</h4>
            <ul className="space-y-4 text-xs text-neutral-400">
              <li><a href="#genesis" className="hover:text-red-500 transition-colors">제네시스 프로모션</a></li>
              <li><a href="#domestic" className="hover:text-red-500 transition-colors">국산차 라인업</a></li>
              <li><a href="#imported" className="hover:text-red-500 transition-colors">수입차 라인업</a></li>
              <li><a href="#inventory" className="hover:text-red-500 transition-colors">인기 차량</a></li>
              <li><a href="#quote" className="hover:text-red-500 transition-colors">견적 문의</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest mb-6 text-white">고객 센터</h4>
            <ul className="space-y-4 text-xs text-neutral-400">
              <li className="flex items-start gap-3">
                <span className="leading-relaxed">대표: 고요한</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="leading-relaxed">광주광역시 북구 비엔날레로154-3 2층</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="flex items-center gap-2">
                  <Phone size={14} /> 010-6573-5535
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span>sw5535@naver.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-[10px] uppercase tracking-widest">© 2026 RGCOMFANY. 대표: 고요한. All rights reserved.</p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-neutral-500">
            <a href="#" className="hover:text-white">개인정보처리방침</a>
            <a href="#" className="hover:text-white">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
