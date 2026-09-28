"use client";

import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { reviews } from "~/data/reviews";

const AUTO_SCROLL_MS = 5000;

export function TestimonialsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      containScroll: "trimSnaps",
      slidesToScroll: 1,
      align: "center",
    },
    [Autoplay({ delay: AUTO_SCROLL_MS, stopOnInteraction: false })],
  );

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const onNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const update = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      const progressValue = ((emblaApi.scrollProgress() ?? 0) * 100) % 100;
      setProgress(progressValue);
    };

    update();
    emblaApi.on("select", update);
    emblaApi.on("pointerDown", () => setIsTouched(true));
    emblaApi.on("pointerUp", () => setIsTouched(false));

    return () => {
      emblaApi.off("select", update);
      emblaApi.off("pointerDown", () => setIsTouched(true));
      emblaApi.off("pointerUp", () => setIsTouched(false));
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) {
      return;
    }

    if (isHovered || isTouched) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  }, [emblaApi, isHovered, isTouched]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev]);

  return (
    <motion.section
      id="reviews"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="section-shell relative overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Отзывы родителей"
    >
      <div className="pointer-events-none absolute -left-12 top-10 h-64 w-64 rounded-full bg-[rgba(109,214,201,0.10)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[rgba(124,212,204,0.10)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-primary-strong)]">Отзывы</p>
          <h2 className="mt-5 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Что говорят родители после занятий
          </h2>
        </div>

        <div className="mt-10">
          <div
            className="embla -mx-3 overflow-hidden py-6 sm:py-8"
            ref={emblaRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsTouched(true)}
            onTouchEnd={() => setIsTouched(false)}
          >
            <div className="embla__container flex touch-pan-y select-none">
              {reviews.map((review, index) => {
                const isActive = selectedIndex === index;

                return (
                  <div
                    key={review.id}
                    className="embla__slide min-w-0 shrink-0 px-2 md:basis-1/2 lg:basis-1/3"
                    aria-label={`Отзыв ${index + 1} из ${reviews.length}`}
                  >
                    <div
                      className={`flex h-full flex-col rounded-[2rem] border p-6 shadow-[0_16px_36px_rgba(18,97,90,0.06)] transition-all duration-500 ${
                        isActive
                          ? "border-[rgba(28,167,160,0.22)] bg-white/70 shadow-[0_28px_48px_rgba(18,97,90,0.14)]"
                          : "border-[rgba(12,62,60,0.06)] bg-white/35 opacity-80"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8fe9df,#64c8b7)] text-sm font-bold text-[#0d4b48] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                            {review.initials}
                          </div>
                          <div>
                            <p className="text-base font-semibold text-[var(--color-text)]">{review.name}</p>
                            <p className="text-xs uppercase tracking-[0.12em] text-[rgba(16,36,46,0.8)]">{review.label}</p>
                          </div>
                        </div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(28,167,160,0.08)] text-[var(--color-primary-strong)]">
                          <Quote className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="mt-6 flex gap-1 text-[var(--color-primary-strong)]">
                        {Array.from({ length: review.rating }).map((_, starIndex) => (
                          <Star key={`${review.id}-${starIndex}`} className="h-4 w-4 fill-current" />
                        ))}
                      </div>

                      <p className="mt-5 flex-1 text-base leading-8 text-[var(--color-text-soft)]">“{review.text}”</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(12,62,60,0.08)] bg-white/70 text-[var(--color-text)] shadow-[0_12px_28px_rgba(18,97,90,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_32px_rgba(18,97,90,0.12)]"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                {reviews.map((review, index) => (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => scrollTo(index)}
                    aria-label={`Показать отзыв ${index + 1}`}
                    aria-pressed={selectedIndex === index}
                    className={`h-2.5 rounded-full border border-[rgba(12,62,60,0.08)] transition-all duration-300 ${
                      selectedIndex === index
                        ? "w-10 bg-[linear-gradient(90deg,#60d4ca,#1da7a0)] shadow-[0_8px_18px_rgba(28,167,160,0.25)]"
                        : "w-2.5 bg-[rgba(28,167,160,0.24)]"
                    }`}
                  />
                ))}
              </div>

              <div className="h-1.5 w-full max-w-[250px] overflow-hidden rounded-full bg-[rgba(28,167,160,0.08)]">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#73ded3,#1aa39f)] transition-[width] duration-500 ease-out"
                  style={{ width: `${progress + 1}%` }}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={onNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(12,62,60,0.08)] bg-white/70 text-[var(--color-text)] shadow-[0_12px_28px_rgba(18,97,90,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_32px_rgba(18,97,90,0.12)]"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
