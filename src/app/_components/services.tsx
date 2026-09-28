const supports = [
  "Постановка и автоматизация звуков",
  "Исправление звукопроизношения",
  "Развитие речи и словарного запаса",
  "Развитие фонематического слуха",
  "Подготовка к школе",
  "Развитие связной речи",
  "Индивидуальные занятия для детей",
];

export function ServicesSection() {
  return (
    <section id="services" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute -left-16 top-8 h-44 w-44 rounded-full bg-[rgba(18,140,128,0.10)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-60 w-60 rounded-full bg-[rgba(117,213,202,0.14)] blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-primary-strong)]">🌸 Чем я могу помочь</p>
          <h2 className="mt-5 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Работаю с детьми, которым важно говорить красиво, уверенно и понятно
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {supports.map((item) => (
            <div
              key={item}
              className="glass-card rounded-[var(--radius-2xl)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(18,97,90,0.10)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-lg font-bold text-[var(--color-primary-strong)]">
                  ✓
                </span>
                <p className="text-base font-medium text-[var(--color-text)]">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
