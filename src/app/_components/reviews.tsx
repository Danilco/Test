"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Dices,
  Flower2,
  Heart,
  Laptop,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { cardRevealVariant, iconPopVariant, reducedMotionVariants, staggerContainer } from "~/lib/motion";

const advantages = [
  { icon: Sparkles, title: "Индивидуальный подход" },
  { icon: Dices, title: "Занятия в игровой форме" },
  { icon: Laptop, title: "Удобный онлайн-формат" },
  { icon: BookOpen, title: "Наглядные и интересные материалы" },
  { icon: Flower2, title: "Доброжелательная атмосфера" },
  { icon: TrendingUp, title: "Отслеживание прогресса" },
];

export function ReviewsSection() {
  const reduceMotion = useReducedMotion() ?? false;
  const motionCard = reduceMotion ? reducedMotionVariants : cardRevealVariant;
  const motionIcon = reduceMotion ? reducedMotionVariants : iconPopVariant;

  return (
    <section id="reviews" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute -right-10 top-12 h-48 w-48 rounded-full bg-[rgba(111,206,198,0.10)] blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={motionCard} className="flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-primary-strong)]">
            <Heart className="h-4 w-4" />
            <span>Почему выбирают меня</span>
          </motion.div>
          <motion.h2 variants={motionCard} className="mt-5 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Детишки чувствуют себя спокойно, а родители видят реальные результаты
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {advantages.map(({ icon: Icon, title }) => (
            <motion.article
              key={title}
              variants={motionCard}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -8,
                      boxShadow: "0 22px 48px rgba(18, 97, 90, 0.14)",
                    }
              }
              className="group relative overflow-hidden rounded-[var(--radius-2xl)] border border-[rgba(10,71,67,0.08)] bg-white/75 p-6 text-center shadow-[0_14px_30px_rgba(18,97,90,0.06)] transition-[transform,box-shadow,border-color] duration-300"
            >
              <div className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(28,167,160,0.7),transparent)]" />
              <motion.div
                variants={motionIcon}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(12,62,60,0.08)] bg-[linear-gradient(135deg,rgba(118,220,209,0.9),rgba(197,244,236,0.85))] text-[var(--color-primary-strong)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-transform duration-300 group-hover:scale-[1.08] group-hover:rotate-6"
              >
                <Icon className="h-7 w-7" />
              </motion.div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">{title}</h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
