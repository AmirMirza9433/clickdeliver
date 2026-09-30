'use client';

import { TESTIMONIALS_DATA } from '@/data/testimonials';
import { Star, Sparkles, Quote, MapPin } from 'lucide-react';
import { TextReveal } from '@/components/animations/TextReveal';
import { Reveal } from '@/components/animations/Reveal';

export function TestimonialsSection() {
  const row1 = TESTIMONIALS_DATA.slice(0, 3);
  const row2 = TESTIMONIALS_DATA.slice(3, 6);

  // Duplicate for seamless infinite marquee loop
  const marqueeList1 = [...row1, ...row1, ...row1];
  const marqueeList2 = [...row2, ...row2, ...row2];

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14 text-center">
        <Reveal direction="up" delay={0.05}>
          <div className="section-tag mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Local Community Love</span>
          </div>
        </Reveal>

        <TextReveal
          text="Alipur Chattha Ka Etemad & Review"
          highlightWords={['Etemad', '&', 'Review']}
          as="h2"
          className="section-heading"
          delay={0.15}
        />

        <Reveal direction="up" delay={0.25}>
          <p className="section-subheading">
            Customers, riders aur local shopkeepers ka ClickDeliver ke sath rozana ka experience.
          </p>
        </Reveal>
      </div>

      {/* Infinite Scrolling Marquee Track 1 (Left to Right, pause on hover) */}
      <div className="relative w-full overflow-hidden mb-6 py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 w-max animate-marquee-left hover:[animation-play-state:paused]">
          {marqueeList1.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[340px] sm:w-[380px] rounded-3xl p-6 bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-blue-500/40" />
                </div>

                <p className="text-sm text-slate-200 font-body leading-relaxed mb-6 italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Author & Area Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white font-heading font-bold text-xs flex items-center justify-center shadow-md">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-white leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-blue-400 font-medium">{item.role}</p>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5" /> {item.area}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track 2 (Right to Left, pause on hover) */}
      <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 w-max animate-marquee-right hover:[animation-play-state:paused]">
          {marqueeList2.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[340px] sm:w-[380px] rounded-3xl p-6 bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-blue-500/40" />
                </div>

                <p className="text-sm text-slate-200 font-body leading-relaxed mb-6 italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white font-heading font-bold text-xs flex items-center justify-center shadow-md">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-white leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-blue-400 font-medium">{item.role}</p>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5" /> {item.area}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
