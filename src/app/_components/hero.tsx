import Image from "next/image";

interface HeroSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function HeroSection({ imageSrc = "/hero.svg", imageAlt = "Занятия с логопедом" }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_35%),linear-gradient(to_bottom,_#edf7f6,_#f8faf9)]">
      <div className="pointer-events-none absolute -left-10 top-12 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-28 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <div className="relative rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-xl shadow-slate-200/50 backdrop-blur-sm">
            <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-sky-500/20 blur-3xl" />
            <p className="relative text-sm uppercase tracking-[0.4em] text-teal-700">
              Занятия с логопедом онлайн
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Индивидуальные занятия для вашего ребёнка
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Коррекционные программы, опытные логопеды и педагоги, комфортное расписание из дома.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-teal-700 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-600"
              >
                Записаться на пробное занятие
              </a>
              <p className="text-sm text-slate-600">
                Бесплатная консультация и подбор программы в течение дня.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950/5 p-6 shadow-xl">
            <div className="absolute inset-0 bg-teal-50/80" />
            <div className="absolute left-4 top-4 h-24 w-24 rounded-full bg-sky-200/70 blur-3xl" />
            <div className="relative flex min-h-[360px] items-center justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={420}
                height={420}
                className="rounded-[1.75rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
