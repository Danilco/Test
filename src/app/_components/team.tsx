const steps = [
  {
    title: "Знакомство",
    description: "Определяем особенности речи ребёнка и цели занятий.",
  },
  {
    title: "Индивидуальная программа",
    description: "Подбираю упражнения и задания именно под ребёнка.",
  },
  {
    title: "Онлайн-занятие",
    description: "Занимаемся в удобном формате с использованием игр и наглядных материалов.",
  },
  {
    title: "Результат",
    description: "Отслеживаем прогресс и постепенно закрепляем полученные навыки.",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 bottom-0 h-60 w-60 rounded-full bg-[rgba(120,220,208,0.12)] blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-primary-strong)]">💻 Как проходят занятия</p>
          <h2 className="mt-5 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Простая и понятная схема работы, которая помогает ребёнку чувствовать себя спокойно
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="glass-card relative overflow-hidden rounded-[var(--radius-2xl)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(18,97,90,0.12)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-lg font-bold text-[var(--color-primary-strong)]">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-soft)]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
