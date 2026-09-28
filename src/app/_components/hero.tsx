import { Activity, House, Sparkles } from "lucide-react";

import { stats as heroStats } from "~/data/stats";

const badges = [
  { icon: Sparkles, label: "Игровой формат" },
  { icon: Activity, label: "Индивидуально" },
  { icon: House, label: "Онлайн из дома" },
];

function PhotoFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] lg:max-w-[500px]">
      <div className="absolute -bottom-6 left-4 h-[82%] w-[90%] rounded-[2rem] bg-[linear-gradient(135deg,rgba(28,167,160,0.18),rgba(19,65,71,0.08))] shadow-[0_28px_60px_rgba(16,91,96,0.15)]" />
      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/60 bg-[linear-gradient(145deg,#ebfbf9_0%,#d7f6f1_28%,#effefb_100%)] p-3 shadow-[0_28px_60px_rgba(16,91,96,0.12)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-[rgba(12,62,60,0.08)] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),rgba(165,235,228,0.55)_25%,rgba(148,202,196,0.25)_55%,rgba(255,255,255,0.8)_100%)]">
          <img
            src="/images/hero.png"
            alt="Логопед помогает ребёнку говорить уверенно"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {badges.map(({ icon: Icon, label }, index) => (
        <div
          key={label}
          className={`glass-card absolute flex items-center gap-2 rounded-full border border-white/60 px-3 py-2 text-sm font-medium text-[var(--color-text)] shadow-[0_14px_28px_rgba(18,97,90,0.08)] backdrop-blur-xl ${
            index === 0
              ? "-left-2 top-8 sm:-left-2 sm:top-12"
              : index === 1
                ? "right-0 top-1/3"
                : "bottom-8 left-1/2 -translate-x-1/2"
          }`}
          style={{ animation: `floatBadge 5s ease-in-out ${index * 0.8}s infinite alternate` }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-strong)]">
            <Icon className="h-4 w-4" />
          </span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="float-orb pointer-events-none absolute -left-16 top-8 h-64 w-64 rounded-full bg-[rgba(28,167,160,0.14)] blur-3xl" />
      <div className="float-orb delay-1 pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[rgba(118,220,209,0.18)] blur-3xl" />
      <div className="float-orb delay-2 pointer-events-none absolute bottom-8 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[rgba(52,196,181,0.10)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card relative overflow-hidden rounded-[2rem] p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.52),rgba(204,250,244,0.35))]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="max-w-xl">
              <div className="inline-flex items-center rounded-full border border-[rgba(12,62,60,0.08)] bg-white/60 px-4 py-2 text-[0.76rem] font-medium uppercase tracking-[0.22em] text-[var(--color-primary-strong)] opacity-0 [animation:fadeUp_0.7s_ease_forwards]">
                Онлайн-логопед — занятия с заботой о речи ребёнка
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-[0.98] text-[var(--color-text)] opacity-0 [animation:fadeUp_0.8s_ease_forwards_0.12s] sm:text-5xl lg:text-7xl">
                Помогаю детям говорить уверенно, правильнее и свободнее
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-soft)] opacity-0 [animation:fadeUp_0.8s_ease_forwards_0.24s] sm:text-xl">
                Онлайн-занятия с логопедом в удобное время из дома. Индивидуальный подход к каждому ребёнку,
                интересные задания и занятия в игровой форме.
              </p>

              <div className="mt-8 flex flex-col gap-4 opacity-0 [animation:fadeUp_0.8s_ease_forwards_0.36s] sm:flex-row sm:items-center">
                <a href="#contact" className="btn-primary px-7 py-3.5 text-base shadow-[var(--shadow-glow)]">
                  Записаться на консультацию
                </a>
                <a href="#services" className="btn-secondary px-7 py-3.5 text-base">
                  Узнать больше
                </a>
              </div>

              <div className="mt-8 grid max-w-lg grid-cols-3 gap-3 opacity-0 [animation:fadeUp_0.8s_ease_forwards_0.52s]">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.35rem] border border-white/60 bg-white/55 px-3 py-3 text-center shadow-[0_10px_24px_rgba(18,97,90,0.06)]">
                    <div className="text-2xl font-extrabold text-[var(--color-primary-strong)]">{stat.value}</div>
                    <div className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex w-full items-center justify-center lg:justify-end">
              <PhotoFrame />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
