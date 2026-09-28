"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Flower2 } from "lucide-react";

import { LetterBurst, useLetterBurst } from "~/components/letter-burst";
import { cardRevealVariant, iconPopVariant, reducedMotionVariants, staggerContainer } from "~/lib/motion";

const supports = [
  { text: "Постановка и автоматизация звуков", xPercent: 58, yPercent: 52 },
  { text: "Исправление звукопроизношения", xPercent: 60, yPercent: 44 },
  { text: "Развитие речи и словарного запаса", xPercent: 50, yPercent: 50 },
  { text: "Развитие фонематического слуха", xPercent: 50, yPercent: 50 },
  { text: "Подготовка к школе", xPercent: 55, yPercent: 50 },
  { text: "Развитие связной речи", xPercent: 60, yPercent: 52 },
];

function ServiceCard({
  item,
  motionCard,
  motionIcon,
  reduceMotion,
}: {
  item: (typeof supports)[number];
  motionCard: typeof cardRevealVariant;
  motionIcon: typeof iconPopVariant;
  reduceMotion: boolean;
}) {
  const burst = useLetterBurst({ cooldownMs: 1500, maxLetters: 8 });

  return (
    <motion.div
      variants={motionCard}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
              boxShadow: "0 18px 42px rgba(18, 97, 90, 0.14)",
            }
      }
      className="glass-card group relative overflow-hidden rounded-[var(--radius-2xl)] border border-[rgba(10,71,67,0.08)] p-5 transition-[box-shadow,transform,border-color] duration-300"
      {...burst.pointerHandlers}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(28,167,160,0.7),transparent)]" />
      <LetterBurst letters={burst.letters} xPercent={item.xPercent} yPercent={item.yPercent} />
      <div className="flex items-center gap-3">
        <motion.span
          variants={motionIcon}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(12,62,60,0.08)] bg-[linear-gradient(135deg,rgba(118,220,209,0.9),rgba(197,244,236,0.85))] text-[var(--color-primary-strong)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-transform duration-300 group-hover:scale-[1.08] group-hover:rotate-6"
        >
          <Check className="h-5 w-5" />
        </motion.span>
        <p className="text-base font-medium text-[var(--color-text)]">{item.text}</p>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const reduceMotion = useReducedMotion() ?? false;
  const motionCard = reduceMotion ? reducedMotionVariants : cardRevealVariant;
  const motionIcon = reduceMotion ? reducedMotionVariants : iconPopVariant;

  return (
    <section id="services" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute -left-16 top-8 h-44 w-44 rounded-full bg-[rgba(18,140,128,0.10)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-60 w-60 rounded-full bg-[rgba(117,213,202,0.14)] blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={motionCard} className="flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-primary-strong)]">
            <Flower2 className="h-4 w-4" />
            <span>Чем я могу помочь</span>
          </motion.div>
          <motion.h2 variants={motionCard} className="mt-5 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Работаю с детьми, которым важно говорить красиво, уверенно и понятно
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {supports.map((item) => (
            <ServiceCard
              key={item.text}
              item={item}
              motionCard={motionCard}
              motionIcon={motionIcon}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
