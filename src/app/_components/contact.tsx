export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[linear-gradient(135deg,#0f3e43_0%,#123a42_35%,#0a2c34_100%)] py-20 text-white sm:py-24">
      <div className="float-orb pointer-events-none absolute -left-10 top-0 h-72 w-72 rounded-full bg-[rgba(102,219,204,0.14)] blur-3xl" />
      <div className="float-orb delay-1 pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[rgba(63,177,169,0.12)] blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(5,27,32,0.38)] backdrop-blur-xl sm:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[rgba(189,246,239,0.9)]">⭐ Запишитесь на первое занятие</p>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Если вы хотите помочь ребёнку развивать речь, начните с консультации.
          </h2>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#" className="btn-primary px-7 py-3.5 text-base shadow-[0_18px_36px_rgba(28,167,160,0.35)]">
              Записаться
            </a>
            <a href="#" className="btn-secondary border-white/15 bg-white/5 px-7 py-3.5 text-base text-white hover:text-white">
              Задать вопрос
            </a>
          </div>

          <p className="mt-8 text-lg font-medium text-[rgba(232,250,248,0.92)]">
            Ваш ребёнок заслуживает говорить уверенно 💕
          </p>
        </div>
      </div>
    </section>
  );
}
