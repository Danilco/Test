const reviews = [
  {
    text: "За три месяца сын стал чётко произносить звук Р, очень довольны занятиями.",
    author: "Светлана, мама Тимура",
  },
  {
    text: "Удобный формат онлайн-занятий, дочка занимается с удовольствием.",
    author: "Айгуль, мама Дианы",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-slate-100 py-20">
      <div className="pointer-events-none absolute -right-10 top-12 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-teal-700">Отзывы</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Что говорят родители
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={review.author}
              className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              <div className="absolute left-4 top-4 h-20 w-20 rounded-full bg-cyan-100/80 blur-3xl" />
              <p className="relative text-base leading-8 text-slate-700">{review.text}</p>
              <p className="relative mt-6 text-sm font-semibold text-slate-900">{review.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
