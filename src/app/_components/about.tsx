"use client";

import { useInView } from "react-intersection-observer";
import { BookOpenText, HeartHandshake, Sparkles } from "lucide-react";

import { stats } from "~/data/stats";

const facts = [
  { icon: Sparkles, ...stats[0] },
  { icon: HeartHandshake, ...stats[1] },
  { icon: BookOpenText, ...stats[2] },
];

function PhotoFrame() {
  return (
    <div className="group relative mx-auto w-full max-w-[430px] [transform:rotate(-3deg)]">
      <div className="absolute -bottom-8 left-6 right-8 h-[86%] rounded-[2rem] border border-[rgba(28,167,160,0.22)] bg-[linear-gradient(135deg,rgba(28,167,160,0.22),rgba(145,220,211,0.08))] shadow-[0_30px_70px_rgba(18,97,90,0.14)]" />
      <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[rgba(91,218,203,0.82)] bg-[linear-gradient(135deg,#f4fffd_0%,#dffaf7_100%)] p-3 shadow-[0_30px_70px_rgba(18,97,90,0.16)] transition-transform duration-500 ease-out group-hover:[transform:rotate(3deg)_translateY(-4px)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-[rgba(10,71,67,0.08)] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.96),rgba(178,238,232,0.42)_25%,rgba(123,216,202,0.18)_56%,rgba(255,255,255,0.75)_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_18%),radial-gradient(circle_at_72%_30%,rgba(160,238,228,0.4),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.25),rgba(34,182,171,0.06))]" />
          <div className="absolute left-[17%] top-[18%] h-32 w-32 rounded-full bg-[rgba(255,255,255,0.94)] shadow-[0_18px_40px_rgba(20,154,140,0.14)]" />
          <div className="absolute left-[42%] top-[24%] h-24 w-24 rounded-full bg-[rgba(64,179,168,0.14)]" />
          <div className="absolute bottom-[12%] left-[12%] h-[42%] w-[76%] rounded-[36%_36%_18%_18%] bg-[linear-gradient(180deg,rgba(95,215,203,0.78),rgba(30,143,136,0.72))] shadow-[0_20px_40px_rgba(20,154,140,0.18)]" />
          <div className="absolute bottom-[18%] left-[23%] h-4 w-4 rounded-full bg-[rgba(255,255,255,0.8)]" />
          <div className="absolute bottom-[18%] right-[23%] h-4 w-4 rounded-full bg-[rgba(255,255,255,0.8)]" />
          <div className="absolute bottom-[24%] left-[27%] right-[27%] h-3 rounded-full bg-[rgba(255,255,255,0.44)]" />
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-12 top-10 h-52 w-52 rounded-full bg-[rgba(103,213,203,0.10)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-6 h-64 w-64 rounded-full bg-[rgba(115,196,196,0.10)] blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div
            className={`transition-all duration-700 ease-out ${
              inView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <PhotoFrame />
          </div>

          <div
            className={`transition-all duration-700 ease-out ${
              inView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-primary-strong)]">Обо мне</p>
            <h2 className="mt-5 text-3xl font-bold text-[var(--color-text)] sm:text-4xl lg:text-5xl">
              Я — Анастасия, логопед, который помогает детям развивать речь в комфортной и доброжелательной атмосфере.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-text-soft)]">
              На занятиях мы не просто выполняем упражнения — мы учимся через игру, общение и
              интересные задания.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {facts.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="glass-card rounded-[1.5rem] border border-[rgba(12,62,60,0.08)] p-4 text-center"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-strong)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 text-2xl font-extrabold text-[var(--color-primary-strong)]">{value}</div>
                  <div className="mt-1 text-[0.7rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
