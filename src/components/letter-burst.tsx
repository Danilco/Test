"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type LetterItem = {
  id: string;
  char: string;
  x: number;
  y: number;
  rotate: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
};

type UseLetterBurstOptions = {
  cooldownMs?: number;
  maxLetters?: number;
  disabled?: boolean;
};

const LETTERS = ["Р", "Л", "Ш", "Ж", "Ч", "С", "З"];
const PALETTE = ["#00d9c0", "#0b4f4a", "#6ae5d6", "#1ecdc0"];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function useLetterBurst({
  cooldownMs = 1500,
  maxLetters = 8,
  disabled = false,
}: UseLetterBurstOptions = {}) {
  const [letters, setLetters] = useState<LetterItem[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const lastTriggerRef = useRef(0);
  const isInsideRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(media.matches);

    updateMotionPreference();
    media.addEventListener?.("change", updateMotionPreference);

    return () => media.removeEventListener?.("change", updateMotionPreference);
  }, []);

  const trigger = useCallback(() => {
    if (disabled || reducedMotion || isInsideRef.current) {
      return;
    }

    const now = Date.now();
    if (now - lastTriggerRef.current < cooldownMs) {
      return;
    }

    isInsideRef.current = true;
    lastTriggerRef.current = now;

    setLetters((current) => {
      const remainingSlots = maxLetters - current.length;
      if (remainingSlots <= 0) {
        return current;
      }

      const count = clamp(Math.floor(randomBetween(4, 6)), 4, remainingSlots);

      const nextLetters = Array.from({ length: count }, (_, index) => {
        const char = LETTERS[Math.floor(Math.random() * LETTERS.length)] ?? "Р";
        const baseX = randomBetween(-18, 18);
        const baseY = randomBetween(-30, -12);
        const rotate = randomBetween(-20, 20);
        const delay = randomBetween(0, 0.12);
        const duration = randomBetween(1.2, 1.6);
        const color = PALETTE[Math.floor(Math.random() * PALETTE.length)] ?? "#00d9c0";
        const size = randomBetween(20, 32);

        return {
          id: `${Date.now()}-${Math.random()}-${index}`,
          char,
          x: baseX,
          y: baseY,
          rotate,
          delay,
          duration,
          color,
          size,
        };
      });

      return [...current, ...nextLetters].slice(-maxLetters);
    });
  }, [cooldownMs, disabled, maxLetters, reducedMotion]);

  useEffect(() => {
    if (!letters.length) {
      return undefined;
    }

    const timers = letters.map((letter) =>
      window.setTimeout(() => {
        setLetters((current) => current.filter((item) => item.id !== letter.id));
      }, (letter.duration + letter.delay) * 1000 + 80),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [letters]);

  const handlePointerEnter = useCallback(() => {
    if (!isInsideRef.current) {
      trigger();
    }
  }, [trigger]);

  const handlePointerLeave = useCallback(() => {
    isInsideRef.current = false;
  }, []);

  const handleBlur = useCallback(() => {
    isInsideRef.current = false;
  }, []);

  return {
    letters,
    trigger,
    pointerHandlers: {
      onPointerEnter: handlePointerEnter,
      onPointerLeave: handlePointerLeave,
      onFocus: handlePointerEnter,
      onBlur: handleBlur,
      onPointerDown: handlePointerEnter,
      onTouchStart: handlePointerEnter,
    },
  };
}

type LetterBurstProps = {
  letters: LetterItem[];
  xPercent: number;
  yPercent: number;
  className?: string;
};

export function LetterBurst({ letters, xPercent, yPercent, className = "" }: LetterBurstProps) {
  if (!letters.length) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-20 overflow-hidden ${className}`}
      style={{ left: 0, top: 0 }}
    >
      {letters.map((letter) => (
        <motion.span
          key={letter.id}
          aria-hidden="true"
          className="absolute select-none font-[family-name:var(--font-display),sans-serif] leading-none tracking-[-0.04em]"
          style={{
            left: `${clamp(xPercent, 0, 100)}%`,
            top: `${clamp(yPercent, 0, 100)}%`,
            color: letter.color,
            opacity: 0,
            transform: "translate(-50%, -50%)",
            fontSize: `${letter.size}px`,
            textShadow: "0 8px 20px rgba(11,79,74,0.12)",
          }}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.6, rotate: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, letter.x * 0.3, letter.x, letter.x * 1.1],
            y: [0, letter.y * 0.25, letter.y * 0.8, letter.y],
            scale: [0.6, 1.1, 0.9],
            rotate: [0, letter.rotate * 0.5, letter.rotate],
          }}
          transition={{
            duration: letter.duration,
            delay: letter.delay,
            ease: "easeOut",
            times: [0, 0.2, 0.75, 1],
          }}
        >
          {letter.char}
        </motion.span>
      ))}
    </div>
  );
}
