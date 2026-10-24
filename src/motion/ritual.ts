import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../engine/env';

gsap.registerPlugin(ScrollTrigger);

export function initRitual() {
  const section = document.querySelector<HTMLElement>('[data-ritual]');
  if (!section) return;

  const chapters = [...section.querySelectorAll<HTMLElement>('[data-ritual-chapter]')];
  const images = [...section.querySelectorAll<HTMLImageElement>('[data-ritual-image]')];
  const fill = section.querySelector<HTMLElement>('[data-ritual-fill]');
  if (!chapters.length) return;

  let current = -1;

  const setActive = (index: number) => {
    if (index === current) return;
    current = index;
    chapters.forEach((chapter, i) => chapter.classList.toggle('is-active', i === index));
    images.forEach((image, i) => image.classList.toggle('is-active', i === index));
  };

  setActive(0);

  if (prefersReducedMotion()) return;

  const trigger = ScrollTrigger.create({
    trigger: section,
    start: 'top 65%',
    end: 'bottom 65%',
    onUpdate: (self) => {
      if (fill) gsap.set(fill, { scaleY: self.progress });
      const index = Math.min(chapters.length - 1, Math.floor(self.progress * chapters.length));
      setActive(index);
    },
  });

  return () => {
    trigger.kill();
    section.querySelectorAll('.is-active').forEach((el) => el.classList.remove('is-active'));
  };
}
