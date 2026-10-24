import { gsap } from 'gsap';
import { ease, prefersReducedMotion } from './env';

export type Transition = {
  leave: (curtain: HTMLElement) => Promise<unknown> | gsap.core.Animation;
  enter: (curtain: HTMLElement) => Promise<unknown> | gsap.core.Animation;
};

function pathOf(curtain: HTMLElement) {
  return curtain.querySelector<SVGPathElement>('#curtain-strand');
}

function lengthOf(curtain: HTMLElement) {
  const path = pathOf(curtain);
  return path ? path.getTotalLength() : 0;
}

const strandTransition: Transition = {
  leave: (curtain) => {
    const path = pathOf(curtain);
    const length = lengthOf(curtain);
    document.documentElement.classList.add('is-transitioning');

    const timeline = gsap.timeline();
    timeline
      .set(curtain, { autoAlpha: 1 })
      .set(curtain.querySelector('.curtain__panel'), { yPercent: 100 })
      .set(curtain.querySelector('.curtain__mark'), { autoAlpha: 0, y: 18 });

    if (path) timeline.set(path, { strokeDasharray: length, strokeDashoffset: length });

    timeline.to(curtain.querySelector('.curtain__panel'), {
      yPercent: 0,
      duration: 0.75,
      ease: ease.inOut,
    });

    if (path) {
      timeline.to(
        path,
        { strokeDashoffset: 0, duration: 0.9, ease: ease.inOut },
        '-=0.55',
      );
    }

    timeline.to(
      curtain.querySelector('.curtain__mark'),
      { autoAlpha: 1, y: 0, duration: 0.5, ease: ease.out },
      '-=0.55',
    );

    return timeline;
  },

  enter: (curtain) => {
    const path = pathOf(curtain);
    const length = lengthOf(curtain);
    const timeline = gsap.timeline({
      onComplete: () => document.documentElement.classList.remove('is-transitioning'),
    });

    timeline
      .set(curtain, { autoAlpha: 1 })
      .set(curtain.querySelector('.curtain__panel'), { yPercent: 0 })
      .set(curtain.querySelector('.curtain__mark'), { autoAlpha: 1, y: 0 });

    if (path) timeline.set(path, { strokeDasharray: length, strokeDashoffset: 0 });

    timeline.to(curtain.querySelector('.curtain__mark'), {
      autoAlpha: 0,
      duration: 0.3,
      ease: ease.soft,
    });

    if (path) {
      timeline.to(
        path,
        { strokeDashoffset: -length, duration: 0.9, ease: ease.inOut },
        0,
      );
    }

    timeline
      .to(curtain.querySelector('.curtain__panel'), {
        yPercent: -100,
        duration: 0.85,
        ease: ease.inOut,
      }, '-=0.62')
      .set(curtain, { autoAlpha: 0 });

    return timeline;
  },
};

const reduced: Transition = {
  leave: (c) => {
    document.documentElement.classList.add('is-transitioning');
    return gsap.timeline().set(c, { autoAlpha: 1 });
  },
  enter: (c) =>
    gsap
      .timeline({ onComplete: () => document.documentElement.classList.remove('is-transitioning') })
      .to(c, { autoAlpha: 0, duration: 0.2 }),
};

let current: Transition = strandTransition;

export const setTransition = (t: Transition) => {
  current = t;
};

const pick = () => (prefersReducedMotion() ? reduced : current);
const curtain = () => document.getElementById('curtain') as HTMLElement;

function completed(animation: gsap.core.Animation): Promise<void> {
  return new Promise((resolve) => {
    if (animation.progress() === 1) resolve();
    else animation.eventCallback('onComplete', resolve);
  });
}

export const playLeave = () => {
  const result = pick().leave(curtain());
  return result instanceof Promise ? result : completed(result as gsap.core.Animation);
};

export const playEnter = () => {
  const result = pick().enter(curtain());
  return result instanceof Promise ? result : completed(result as gsap.core.Animation);
};
