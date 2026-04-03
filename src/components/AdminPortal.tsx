import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { auth, db } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User } from "firebase/auth";
import { collection, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";
import { LogOut, Shield, Clock, User as UserIcon, Phone, Car, MessageSquare, ExternalLink } from "lucide-react";

interface Quote {
  id: string;
  name: string;
  phone: string;
  vehicle: string;
  type: string;
  period: string;
  downPayment: string;
  message: string;
  createdAt: Timestamp;
}

export default function AdminPortal() {
  const [user, setUser] = useState<User | null>(null);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && user.email === "alstpgml123321@gmail.com") {
      const q = query(collection(db, "quotes"), orderBy("createdAt", "desc"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const quoteData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Quote[];
        setQuotes(quoteData);
        setLoading(false);
      }, (err) => {
        console.error("Firestore error:", err);
        setError("데이터를 불러오는 중 오류가 발생했습니다. 권한을 확인해주세요.");
        setLoading(false);
      });
      return () => unsubscribe();
    } else if (user) {
      setError("접근 권한이 없습니다.");
      setLoading(false);
    }
  }, [user]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleLogout = () => auth.signOut();

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-[32px] p-10 text-center"
        >
          <div className="w-16 h-16 bg-red-600/10 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield size={32} />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-neutral-500 mb-8 text-sm">관리자 전용 공간입니다. <br />로그인하여 견적 신청 내역을 확인하세요.</p>
          <button 
            onClick={handleLogin}
            className="w-full py-4 bg-white text-neutral-900 font-bold rounded-xl hover:bg-neutral-100 transition-all flex items-center justify-center gap-2"
          >
            Google 계정으로 로그인
          </button>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-6">
        <p className="text-red-500 mb-4">{error}</p>
        <button onClick={handleLogout} className="text-neutral-400 underline text-sm">로그아웃</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">견적 신청 내역</h1>
            <p className="text-neutral-500 text-sm">총 {quotes.length}건의 신청이 접수되었습니다.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-xs font-bold text-white">{user.displayName}</p>
              <p className="text-[10px] text-neutral-500">{user.email}</p>
            </div>
            <button 
              onClick={handleLogout}
              className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl hover:bg-neutral-800 transition-all text-neutral-400"
              title="로그아웃"
            >
              <LogOut size={20} />
            </button>
          </div>
        </header>

        <div className="grid gap-4">
          {quotes.length === 0 ? (
            <div className="py-20 text-center bg-neutral-900/50 rounded-3xl border border-dashed border-neutral-800">
              <p className="text-neutral-500">접수된 견적 신청이 없습니다.</p>
            </div>
          ) : (
            quotes.map((quote) => (
              <motion.div 
                key={quote.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-red-900/50 transition-all"
              >
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-600/10 text-red-600 rounded-lg flex items-center justify-center shrink-0">
                      <UserIcon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">신청자</p>
                      <p className="font-bold">{quote.name}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600/10 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">연락처</p>
                      <a href={`tel:${quote.phone}`} className="font-bold hover:text-blue-400 transition-colors">{quote.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-600/10 text-green-600 rounded-lg flex items-center justify-center shrink-0">
                      <Car size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">희망차량</p>
                      <p className="font-bold">{quote.vehicle} <span className="text-[10px] text-neutral-500 ml-1">({quote.type})</span></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-600/10 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">신청일시</p>
                      <p className="font-bold text-sm">
                        {quote.createdAt?.toDate().toLocaleString('ko-KR', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                {quote.message && (
                  <div className="mt-6 pt-6 border-t border-neutral-800 flex gap-4">
                    <div className="w-10 h-10 bg-neutral-800 text-neutral-400 rounded-lg flex items-center justify-center shrink-0">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">메모</p>
                      <p className="text-sm text-neutral-300 leading-relaxed">{quote.message}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
