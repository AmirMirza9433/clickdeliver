'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  MessageSquare,
  CheckCircle2,
  Send,
  RotateCcw,
  CheckCheck,
  Bike,
  ShieldCheck,
  Image as ImageIcon,
} from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: 'customer' | 'shop';
  text: string;
  time: string;
}

const chatScript: ChatMessage[] = [
  {
    id: 1,
    sender: 'customer',
    text: 'Assalam o Alaikum! Kya aapke paas specific imported brand ki skin cream aur insulin syringes available hain?',
    time: '8:42 PM',
  },
  {
    id: 2,
    sender: 'shop',
    text: 'Walaikum Assalam! Ji bilkul dono cheezein stock mein mojood hain. Original sealed pack hai.',
    time: '8:43 PM',
  },
  {
    id: 3,
    sender: 'customer',
    text: 'Zabardast! Total bill kitna banega aur kab tak deliver hoga?',
    time: '8:43 PM',
  },
  {
    id: 4,
    sender: 'shop',
    text: 'Total Rs. 750 banega. Parcel pack kar diya hai, rider ko handover ho raha hai.',
    time: '8:44 PM',
  },
];

export function CustomOrderSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showRiderPill, setShowRiderPill] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    // Reset simulation
    setMessages([]);
    setShowRiderPill(false);
    setIsTyping(false);

    let timeouts: NodeJS.Timeout[] = [];

    // Step 1: Customer msg 1
    timeouts.push(
      setTimeout(() => {
        setMessages([chatScript[0]]);
        setIsTyping(true);
      }, 600)
    );

    // Step 2: Shop reply 1
    timeouts.push(
      setTimeout(() => {
        setIsTyping(false);
        setMessages([chatScript[0], chatScript[1]]);
      }, 2000)
    );

    // Step 3: Customer msg 2
    timeouts.push(
      setTimeout(() => {
        setMessages([chatScript[0], chatScript[1], chatScript[2]]);
        setIsTyping(true);
      }, 3400)
    );

    // Step 4: Shop reply 2
    timeouts.push(
      setTimeout(() => {
        setIsTyping(false);
        setMessages([chatScript[0], chatScript[1], chatScript[2], chatScript[3]]);
      }, 4800)
    );

    // Step 5: Rider pill
    timeouts.push(
      setTimeout(() => {
        setShowRiderPill(true);
      }, 5800)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [cycle]);

  const handleRestart = () => {
    setCycle((c) => c + 1);
  };

  const featurePoints = [
    {
      title: 'Dukan Par Call Ya Jane Ki Zaroorat Nahi',
      desc: 'Alipur Chattha ke kisi bhi registered shopkeeper ko direct app mein text karein.',
    },
    {
      title: 'Item Photo Upload & Sourcing',
      desc: 'Kapray ka design, medicine prescription ya specific cheez ki photo bhej kar mangwayen.',
    },
    {
      title: 'Fair Local Pricing & Transparency',
      desc: 'Dukandar original price batata hai — koi extra commission ya hidden charges nahi.',
    },
    {
      title: 'Instant Rider Assignment',
      desc: 'Order confirm hotay hi kareebi rider parcel utha kar aapke darwaze tak pohnchata hai.',
    },
  ];

  return (
    <section id="custom-orders" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Feature explanation */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Unique To ClickDeliver</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading text-left mb-6"
            >
              Jo App Mein Nahi —{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Wo Bhi Mangao!
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-body leading-relaxed mb-8"
            >
              Aam delivery apps sirf limited catalog dikhati hain. ClickDeliver ka unique{' '}
              <strong className="text-white">&ldquo;Custom Order&rdquo;</strong> feature aapko dukaandar se
              seedha chat karne aur kisi bhi unlisted item ko direct arrange karwane ki suhoolat deta
              hai.
            </motion.p>

            <div className="space-y-4">
              {featurePoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/5"
                >
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-white mb-0.5">
                      {point.title}
                    </h4>
                    <p className="text-xs text-slate-300 font-body leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Animated Live Chat Simulation */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl p-4 sm:p-6 bg-slate-900/80 border border-white/10 backdrop-blur-2xl shadow-2xl shadow-blue-500/10"
            >
              {/* Chat Simulation Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center font-heading font-bold text-white text-sm">
                      AM
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm">
                      Ali Medical &amp; General Store
                    </h4>
                    <p className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                      <span>Online</span> &middot; Main Bazar Alipur Chattha
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleRestart}
                  title="Restart Simulation"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Replay</span>
                </button>
              </div>

              {/* Chat Messages Stream */}
              <div className="min-h-[290px] flex flex-col justify-end gap-3 p-2">
                <AnimatePresence>
                  {messages.map((msg) => {
                    const isCust = msg.sender === 'customer';
                    return (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.35 }}
                        className={`flex ${isCust ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-2.5 shadow-md ${
                            isCust
                              ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-xs'
                              : 'bg-white/10 border border-white/10 text-slate-100 rounded-bl-xs'
                          }`}
                        >
                          <p className="text-xs sm:text-sm font-body leading-relaxed">{msg.text}</p>
                          <div
                            className={`flex items-center gap-1 justify-end mt-1 text-[10px] ${
                              isCust ? 'text-blue-100' : 'text-slate-400'
                            }`}
                          >
                            <span>{msg.time}</span>
                            {isCust && <CheckCheck className="w-3 h-3 text-cyan-200" />}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {/* Animated Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 w-fit"
                  >
                    <span className="text-[11px] text-slate-400">Shopkeeper is typing</span>
                    <div className="flex gap-1">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          className="w-1.5 h-1.5 rounded-full bg-blue-400"
                          animate={{ scale: [0.6, 1.2, 0.6], opacity: [0.4, 1, 0.4] }}
                          transition={{
                            duration: 0.9,
                            repeat: Infinity,
                            delay: dot * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Final Status Pill Requirement: "Rider assigned – ETA 8 mins" */}
                {showRiderPill && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="mt-3 p-3 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 border border-emerald-500/40 text-center flex items-center justify-between gap-3 shadow-lg shadow-emerald-500/10"
                  >
                    <div className="flex items-center gap-2 text-left">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                        <Bike className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-heading font-bold text-white">
                          Rider assigned &ndash; ETA 8 mins
                        </p>
                        <p className="text-[10px] text-emerald-300">
                          Captain Hamza (Honda CD 70 &middot; GA-482)
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500 text-white shadow">
                      Track Live
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Chat Input Bar Mockup */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
                <div className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2 text-xs text-slate-400 flex items-center justify-between">
                  <span>Type custom item name or message...</span>
                  <ImageIcon className="w-4 h-4 text-slate-500" />
                </div>
                <button
                  onClick={handleRestart}
                  className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
