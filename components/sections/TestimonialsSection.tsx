"use client";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { Reveal } from "@/components/animations/Reveal";
export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <div className="section-tag">APNE SHEHAR KI BAATEIN</div>
          </Reveal>
          <TextReveal
            text="Alipur Chattha Ka Etemad & Review"
            highlightWords={["Etemad", "&", "Review"]}
            className="section-heading"
          />
          <Reveal>
            <p className="section-subheading">
              Customers, riders aur local shopkeepers ka ClickDeliver ke sath
              rozana ka experience.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS_DATA.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.08}>
              <figure className="rounded-[22px] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span
                    className="flex gap-1 text-amber-600 dark:text-amber-400"
                    role="img"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from({ length: item.rating }, (_, n) => (
                      <Star
                        key={n}
                        size={13}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </span>
                  <Quote size={21} className="text-blue-500/50" />
                </div>
                <blockquote className="text-[13px] leading-[1.85] text-slate-600 dark:text-slate-300 mb-6">
                  “{item.comment}”
                </blockquote>
                <figcaption className="mt-auto pt-4 border-t border-slate-200 dark:border-white/10 flex gap-3 items-center">
                  <span className="w-10 h-10 shrink-0 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs flex items-center justify-center font-semibold">
                    {item.avatarText}
                  </span>
                  <div>
                    <p className="text-sm font-heading font-semibold">
                      {item.name}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                      {item.role} · {item.area}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
