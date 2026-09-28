"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, MessageCircle, Quote, X } from "lucide-react";

import { reviews, type Review } from "~/data/reviews";

const AUTO_SCROLL_MS = 5000;

function parseSourceLabel(source: Review["source"]) {
  return source === "instagram" ? "Instagram" : "WhatsApp";
}

function ReviewCard({ review, onOpen }: { review: Review; onOpen: (review: Review) => void }) {
  const paragraphs = useMemo(() => review.text.split(/\n\s*\n/).filter(Boolean), [review.text]);
  const sourceLabel = parseSourceLabel(review.source);
  const Icon = review.source === "instagram" ? Camera : MessageCircle;

  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-[rgba(12,62,60,0.08)] bg-white/75 p-5 shadow-[0_16px_36px_rgba(18,97,90,0.06)] ring-1 ring-white/50 transition-all duration-500 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9af2e5,#6edcc3)] text-[#0d4b48] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
            <Icon className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[rgba(16,36,46,0.7)]">Отзыв родителя</p>
            <p className="mt-1 text-[0.76rem] text-[rgba(58,73,84,0.8)]">{sourceLabel}</p>
          </div>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(28,167,160,0.08)] text-[var(--color-primary-strong)]">
          <Quote className="h-4 w-4" />
        </div>
      </div>

      {review.tag ? (
        <div className="mt-4 inline-flex w-fit items-center rounded-full border border-[rgba(28,167,160,0.18)] bg-[rgba(28,167,160,0.08)] px-2.5 py-1 text-[0.68rem] font-medium text-[var(--color-primary-strong)]">
          {review.tag}
        </div>
      ) : null}

      <div className="relative mt-4 flex-1">
        <p
          className="text-[15px] leading-[1.6] text-[#10242e]"
          style={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 6,
            textWrap: "pretty",
          }}
        >
          {paragraphs.join("\n\n")}
        </p>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
      </div>

      <button
        type="button"
        onClick={() => onOpen(review)}
        className="mt-4 w-fit text-sm font-semibold text-[var(--color-primary-strong)] underline-offset-4 hover:underline"
      >
        Читать полностью
      </button>
    </article>
  );
}

function ReviewDialog({ review, onClose }: { review: Review | null; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!review) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (!focusable.length) {
        event.preventDefault();
        modalRef.current.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    setTimeout(() => {
      modalRef.current?.querySelector<HTMLElement>("button, [href]")?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [review, onClose]);

  if (!review) {
    return null;
  }

  const sourceLabel = parseSourceLabel(review.source);
  const Icon = review.source === "instagram" ? Camera : MessageCircle;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(10,18,22,0.45)] px-4 py-6 backdrop-blur-[2px]"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-modal-title"
        tabIndex={-1}
        className="relative w-full max-w-2xl rounded-[2rem] border border-[rgba(12,62,60,0.08)] bg-white p-5 shadow-[0_30px_90px_rgba(10,25,28,0.22)] sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть отзыв"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(12,62,60,0.08)] bg-[rgba(28,167,160,0.06)] text-[var(--color-text)] transition hover:bg-[rgba(28,167,160,0.12)]"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3 pr-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9af2e5,#6edcc3)] text-[#0d4b48] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
            <Icon className="h-5 w-5" />
          </div>

          <div>
            <p id="review-modal-title" className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[rgba(16,36,46,0.7)]">
              Отзыв родителя
            </p>
            <p className="mt-1 text-sm text-[rgba(58,73,84,0.8)]">{sourceLabel}</p>
          </div>
        </div>

        {review.tag ? (
          <div className="mt-4 inline-flex w-fit items-center rounded-full border border-[rgba(28,167,160,0.18)] bg-[rgba(28,167,160,0.08)] px-2.5 py-1 text-[0.68rem] font-medium text-[var(--color-primary-strong)]">
            {review.tag}
          </div>
        ) : null}

        <div className="mt-5 max-h-[70vh] overflow-y-auto pr-1 text-[15px] leading-[1.7] text-[#10242e]">
          {review.text.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => (
            <p key={`${review.id}-paragraph-${index}`} className="mb-4 last:mb-0 whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [activeReview, setActiveReview] = useState<Review | null>(null);

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

    if (isHovered || isTouched || activeReview) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  }, [activeReview, emblaApi, isHovered, isTouched]);

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
            className="embla -mx-6 overflow-x-clip overflow-y-visible bg-transparent py-6 sm:-mx-8 sm:py-8"
            ref={emblaRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsTouched(true)}
            onTouchEnd={() => setIsTouched(false)}
          >
            <div className="embla__container flex touch-pan-y select-none items-stretch">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="embla__slide min-w-0 shrink-0 px-2 md:basis-1/2 lg:basis-1/3"
                  aria-label={`Отзыв ${index + 1} из ${reviews.length}`}
                >
                  <div className="h-full">
                    <ReviewCard review={review} onOpen={setActiveReview} />
                  </div>
                </div>
              ))}
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
                  style={{ width: `${Math.min(Math.max(progress + 1, 0), 100)}%` }}
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

      <ReviewDialog review={activeReview} onClose={() => setActiveReview(null)} />
    </motion.section>
  );
}
