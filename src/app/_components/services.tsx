const services = [
  {
    title: "Постановка звуков",
    description: "Коррекция произношения и работа с артикуляцией.",
  },
  {
    title: "Развитие речи",
    description: "Словарный запас, связная речь и коммуникативные навыки.",
  },
  {
    title: "Подготовка к школе",
    description: "Игровые задания для успешного старта в школе.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 py-20">
      <div className="pointer-events-none absolute -left-16 top-8 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-60 w-60 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-teal-700">Услуги</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            С чем мы работаем
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"
            >
              <div className="absolute right-4 top-4 h-20 w-20 rounded-full bg-sky-100/80 blur-3xl" />
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="relative text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="relative mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
