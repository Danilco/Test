const advantages = [
  { icon: "✨", title: "Индивидуальный подход" },
  { icon: "🎲", title: "Занятия в игровой форме" },
  { icon: "💻", title: "Удобный онлайн-формат" },
  { icon: "📚", title: "Наглядные и интересные материалы" },
  { icon: "🌷", title: "Доброжелательная атмосфера" },
  { icon: "📈", title: "Отслеживание прогресса" },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute -right-10 top-12 h-48 w-48 rounded-full bg-[rgba(111,206,198,0.10)] blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-primary-strong)]">💗 Почему выбирают меня</p>
          <h2 className="mt-5 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Детишки чувствуют себя спокойно, а родители видят реальные результаты
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((point) => (
            <article
              key={point.title}
              className="glass-card rounded-[var(--radius-2xl)] p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(18,97,90,0.12)]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                {point.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">{point.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
