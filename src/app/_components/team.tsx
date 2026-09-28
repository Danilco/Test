"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Laptop } from "lucide-react";

import { cardRevealVariant, reducedMotionVariants, staggerContainer } from "~/lib/motion";

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
  const reduceMotion = useReducedMotion();
  const motionCard = reduceMotion ? reducedMotionVariants : cardRevealVariant;

  return (
    <section id="team" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 bottom-0 h-60 w-60 rounded-full bg-[rgba(120,220,208,0.12)] blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={motionCard} className="flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-primary-strong)]">
            <Laptop className="h-4 w-4" />
            <span>Как проходят занятия</span>
          </motion.div>
          <motion.h2 variants={motionCard} className="mt-5 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Простая и понятная схема работы, которая помогает ребёнку чувствовать себя спокойно
          </motion.h2>
        </motion.div>

        <div className="relative mt-12">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pointer-events-none absolute left-8 right-8 top-3 hidden h-px origin-left bg-[linear-gradient(90deg,rgba(28,161,156,0.2),rgba(28,161,156,0.9),rgba(28,161,156,0.2))] xl:block"
          />

          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={motionCard}
                custom={index}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                        boxShadow: "0 22px 48px rgba(18, 97, 90, 0.14)",
                      }
                }
                className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-2xl)] border border-[rgba(10,71,67,0.08)] bg-white/75 p-6 shadow-[0_14px_30px_rgba(18,97,90,0.06)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(12,62,60,0.08)] bg-[linear-gradient(135deg,rgba(118,220,209,0.9),rgba(197,244,236,0.85))] text-lg font-bold text-[var(--color-primary-strong)] transition-transform duration-300 group-hover:scale-[1.08] group-hover:rotate-3">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-soft)]">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
