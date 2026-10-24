import { gsap } from 'gsap';
import { startScroll, stopScroll } from '../engine';

let lastFocus: HTMLElement | null = null;
let open = false;

function menu() {
  return document.getElementById('site-menu');
}

function focusables(root: HTMLElement) {
  return [...root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')].filter(
    (el) => el.getClientRects().length > 0,
  );
}

function setOpen(value: boolean) {
  const root = menu();
  if (!root) return;
  open = value;
  document.querySelectorAll<HTMLElement>('[data-menu-open]').forEach((el) => {
    el.setAttribute('aria-expanded', String(value));
  });
  document.documentElement.classList.toggle('menu-open', value);
}

export function openMenu() {
  const root = menu();
  if (!root || open) return;
  lastFocus = document.activeElement as HTMLElement;
  root.hidden = false;
  gsap.set(root, { autoAlpha: 1 });
  setOpen(true);
  stopScroll();

  gsap.fromTo(
    root,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.3, ease: 'power2.out', overwrite: 'auto' },
  );
  gsap.fromTo(
    root.querySelectorAll('.site-menu__nav a'),
    { y: 28, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.65,
      stagger: 0.05,
      ease: 'expo.out',
      delay: 0.08,
      overwrite: 'auto',
    },
  );
  gsap.fromTo(
    root.querySelectorAll('.site-menu__top, .site-menu__foot'),
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.5, delay: 0.15, overwrite: 'auto' },
  );

  window.setTimeout(() => {
    if (open) root.focus();
  }, 40);
}

export function closeMenu(restore = true) {
  const root = menu();
  if (!root || !open) return;
  setOpen(false);

  const finish = () => {
    root.hidden = true;
    gsap.set(root, { clearProps: 'all' });
    if (restore) lastFocus?.focus();
    lastFocus = null;
  };

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finish();
    startScroll();
    return;
  }

  gsap.to(root, {
    autoAlpha: 0,
    duration: 0.28,
    ease: 'power2.inOut',
    onComplete: () => {
      finish();
      startScroll();
    },
  });
}

function onKeydown(event: KeyboardEvent) {
  const root = menu();
  if (!open || !root) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    closeMenu();
    return;
  }

  if (event.key !== 'Tab') return;

  const items = focusables(root);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

export function initMenu() {
  const onClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest('[data-menu-open]')) {
      openMenu();
      return;
    }
    if (target.closest('[data-menu-close]')) {
      closeMenu();
      return;
    }
    if (target.closest('.site-menu__nav a')) {
      closeMenu(false);
    }
  };

  const onResize = () => {
    if (window.innerWidth > 960 && open) closeMenu(false);
  };

  document.addEventListener('click', onClick);
  document.addEventListener('keydown', onKeydown);
  window.addEventListener('resize', onResize, { passive: true });

  return () => {
    document.removeEventListener('click', onClick);
    document.removeEventListener('keydown', onKeydown);
    window.removeEventListener('resize', onResize);
  };
}
