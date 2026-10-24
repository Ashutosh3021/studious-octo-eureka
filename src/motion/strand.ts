import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ease, prefersReducedMotion } from '../engine/env';

gsap.registerPlugin(ScrollTrigger);

export function initStrands(root: ParentNode = document, intro?: gsap.core.Timeline) {
  root.querySelectorAll<SVGPathElement>('[data-strand]').forEach((path) => {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    if (path.hasAttribute('data-strand-intro')) {
      const vars = { strokeDashoffset: 0, duration: 2.4, ease: 'expo.inOut' };
      if (intro) {
        intro.fromTo(path, { strokeDashoffset: length }, vars, 0.15);
      } else {
        gsap.to(path, vars);
      }
      return;
    }

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.8,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: path.closest('section, header, div') || path,
        start: 'top 88%',
        once: true,
      },
    });
  });
}

export function initPageStrands(root: ParentNode = document) {
  if (prefersReducedMotion()) {
    root.querySelectorAll<SVGPathElement>('[data-strand]').forEach((path) => {
      gsap.set(path, { strokeDasharray: 'none', strokeDashoffset: 0 });
    });
    return;
  }
  initStrands(root);
}

export function initAmbient(root: ParentNode = document) {
  if (prefersReducedMotion()) return;
  root.querySelectorAll<SVGPathElement>('[data-strand-ambient]').forEach((path) => {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: `8 ${length}`, strokeDashoffset: 0 });
    gsap.to(path, {
      strokeDashoffset: -length,
      duration: 24,
      ease: 'none',
      repeat: -1,
    });
  });
}

export { ease };
