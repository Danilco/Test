const specialists = [
  {
    name: "Анна К.",
    role: "Логопед, 8 лет опыта",
  },
  {
    name: "Мария П.",
    role: "Логопед-дефектолог",
  },
  {
    name: "Ольга В.",
    role: "Дошкольный педагог",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-slate-50 py-20">
      <div className="pointer-events-none absolute left-0 bottom-0 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-teal-700">Команда</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Наши специалисты
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {specialists.map((person) => (
            <article
              key={person.name}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-sky-100/90 blur-3xl" />
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                <span className="text-3xl font-bold">{person.name.charAt(0)}</span>
              </div>
              <h3 className="relative text-xl font-semibold text-slate-950">{person.name}</h3>
              <p className="relative mt-3 text-sm leading-6 text-slate-600">{person.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
