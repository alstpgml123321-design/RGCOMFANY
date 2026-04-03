import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, ChevronRight, Calculator, Loader2 } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export default function QuickQuote() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    type: "rent",
    period: "60",
    downPayment: "no",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFirestoreError = (error: unknown, operationType: OperationType, path: string | null) => {
    const errInfo = {
      error: error instanceof Error ? error.message : String(error),
      operationType,
      path
    };
    console.error('Firestore Error: ', JSON.stringify(errInfo));
    // In a real app, we might show a toast or error message to the user
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const path = 'quotes';
      await addDoc(collection(db, path), {
        name: formData.name,
        phone: formData.phone,
        vehicle: formData.vehicle,
        type: formData.type === 'rent' ? '장기렌트' : '리스',
        period: formData.period,
        downPayment: formData.downPayment,
        message: formData.message,
        createdAt: serverTimestamp()
      });
      setSubmitted(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'quotes');
      alert("견적 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <section id="quote" className="py-24 px-6 md:px-12 lg:px-20 bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-red-500 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Smart Quote System</span>
              <h2 className="font-heading font-bold text-4xl md:text-6xl text-white mb-8 leading-[1.1]">
                당신만을 위한 <br />
                <span className="text-red-500 underline decoration-red-500/30 underline-offset-8">최적의 견적</span>을 <br />
                찾아드립니다.
              </h2>
              <p className="text-neutral-400 text-lg mb-10 leading-relaxed max-w-md">
                21개 금융사 실시간 비교 분석. <br />
                단 1분의 투자로 월 납입금을 최대 20% 절감하세요.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "실시간 최저가 비교", desc: "국내 모든 렌트/리스사 견적 동시 산출" },
                  { title: "무서류 간편 승인", desc: "복잡한 서류 없이 30분 내 승인 완료" },
                  { title: "전국 즉시 출고", desc: "기다림 없는 전국 어디든 즉시 인도" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-neutral-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] shadow-2xl shadow-black/50 p-8 md:p-12 relative"
          >
            <div className="absolute top-0 right-12 transform -translate-y-1/2">
              <div className="bg-red-600 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-2">
                <Calculator size={20} />
                <span className="font-bold text-sm tracking-tight">실시간 견적 산출기</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-900 mb-4">견적 신청 완료!</h3>
                  <p className="text-neutral-500 mb-10">담당자가 확인 후 입력하신 번호로 <br />즉시 연락드리겠습니다.</p>
                  
                  <div className="flex flex-col gap-3 w-full max-w-xs">
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                      }}
                      className="w-full py-4 bg-neutral-900 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all"
                    >
                      처음으로 돌아가기
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-8">
                  {/* Progress Bar */}
                  <div className="flex items-center gap-2 mb-8">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= i ? "bg-red-600" : "bg-neutral-100"}`}
                      ></div>
                    ))}
                  </div>

                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h4 className="text-xl font-bold text-neutral-900">어떤 차량을 찾으시나요?</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 ml-1">희망 차량 모델</label>
                          <input 
                            type="text" 
                            placeholder="예: 벤츠 E-클래스, 제네시스 G80"
                            className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl px-6 py-4 text-neutral-900 focus:border-red-600 focus:bg-white transition-all outline-none font-medium"
                            value={formData.vehicle}
                            onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 ml-1">이용 상품</label>
                          <div className="grid grid-cols-2 gap-3">
                            {['rent', 'lease'].map((t) => (
                              <button
                                key={t}
                                onClick={() => setFormData({...formData, type: t})}
                                className={`py-4 rounded-2xl font-bold text-sm transition-all border-2 ${formData.type === t ? "border-red-600 bg-red-50 text-red-600" : "border-neutral-100 bg-neutral-50 text-neutral-400 hover:border-neutral-200"}`}
                              >
                                {t === 'rent' ? '장기렌트' : '리스'}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={nextStep}
                        disabled={!formData.vehicle}
                        className="w-full py-5 bg-neutral-900 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        다음 단계로 <ChevronRight size={18} />
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h4 className="text-xl font-bold text-neutral-900">상세 조건을 선택해주세요</h4>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3 ml-1">이용 기간</label>
                          <div className="grid grid-cols-3 gap-2">
                            {['36', '48', '60'].map((p) => (
                              <button
                                key={p}
                                onClick={() => setFormData({...formData, period: p})}
                                className={`py-3 rounded-xl font-bold text-xs transition-all border-2 ${formData.period === p ? "border-red-600 bg-red-50 text-red-600" : "border-neutral-100 bg-neutral-50 text-neutral-400"}`}
                              >
                                {p}개월
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3 ml-1">초기 선납금 여부</label>
                          <div className="grid grid-cols-2 gap-3">
                            {['yes', 'no'].map((d) => (
                              <button
                                key={d}
                                onClick={() => setFormData({...formData, downPayment: d})}
                                className={`py-4 rounded-2xl font-bold text-sm transition-all border-2 ${formData.downPayment === d ? "border-red-600 bg-red-50 text-red-600" : "border-neutral-100 bg-neutral-50 text-neutral-400"}`}
                              >
                                {d === 'yes' ? '있음' : '없음 (0원)'}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button onClick={prevStep} className="flex-1 py-5 bg-neutral-100 text-neutral-500 font-bold rounded-2xl hover:bg-neutral-200 transition-all">이전</button>
                        <button onClick={nextStep} className="flex-[2] py-5 bg-neutral-900 text-white font-bold rounded-2xl hover:bg-neutral-800 transition-all">다음 단계로</button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h4 className="text-xl font-bold text-neutral-900">거의 다 되었습니다!</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 ml-1">성함</label>
                          <input 
                            type="text" 
                            placeholder="성함을 입력해주세요"
                            className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl px-6 py-4 text-neutral-900 focus:border-red-600 focus:bg-white transition-all outline-none font-medium"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 ml-1">연락처</label>
                          <input 
                            type="tel" 
                            placeholder="010-0000-0000"
                            className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl px-6 py-4 text-neutral-900 focus:border-red-600 focus:bg-white transition-all outline-none font-medium"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 ml-1">추가 문의사항 (선택)</label>
                          <textarea 
                            rows={2}
                            placeholder="궁금하신 점을 자유롭게 남겨주세요"
                            className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl px-6 py-4 text-neutral-900 focus:border-red-600 focus:bg-white transition-all outline-none font-medium resize-none"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button onClick={prevStep} className="flex-1 py-5 bg-neutral-100 text-neutral-500 font-bold rounded-2xl hover:bg-neutral-200 transition-all">이전</button>
                        <button 
                          onClick={handleSubmit}
                          disabled={!formData.name || !formData.phone || loading}
                          className="flex-[2] py-5 bg-red-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 disabled:opacity-50"
                        >
                          {loading ? (
                            <Loader2 size={18} className="animate-spin" />
                          ) : (
                            <>최저가 견적 받기 <Send size={18} /></>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
