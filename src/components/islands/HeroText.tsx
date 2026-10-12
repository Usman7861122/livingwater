import { MotionConfig, motion } from 'motion/react';
import { useLang } from '@/lib/lang';

const copy = {
  en: [['Compassionate', 'care'], ['for', 'body,', 'mind', '&', 'spirit.']],
  es: [['Cuidado', 'compasivo'], ['para', 'cuerpo,', 'mente', 'y', 'espíritu.']],
};

export default function HeroText() {
  const lang = useLang();
  let i = 0;
  return (
    <MotionConfig reducedMotion="user">
      <h1
        aria-label={copy[lang].map((l) => l.join(' ')).join(' ')}
        className="group/title max-w-3xl font-serif text-[clamp(2.25rem,4.4vw,4rem)] font-normal leading-[1.12] tracking-[-0.015em] text-white"
      >
        {copy[lang].map((line, li) => (
          <span key={`${lang}-${li}`} className="block" aria-hidden="true">
            {line.map((w) => {
              const idx = i++;
              return (
                <motion.span
                  key={`${lang}-${w}-${idx}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.07, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="mr-[0.24em] inline-block"
                >
                  <span className="relative inline-block cursor-default transition-[color,opacity] duration-500 group-hover/title:opacity-60 hover:!opacity-100 hover:text-gold-300">
                    {w}
                  </span>
                </motion.span>
              );
            })}
          </span>
        ))}
      </h1>
    </MotionConfig>
  );
}
