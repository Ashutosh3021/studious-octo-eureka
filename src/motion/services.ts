import { gsap } from 'gsap';
import { isTouch, prefersReducedMotion } from '../engine/env';

export function initServicePreview() {
  const preview = document.querySelector<HTMLElement>('[data-service-preview]');
  const rows = [...document.querySelectorAll<HTMLElement>('[data-service-row]')];
  if (!preview || !rows.length) return;
  if (isTouch() || prefersReducedMotion()) return;

  const image = preview.querySelector<HTMLImageElement>('[data-preview-image]');
  const x = gsap.quickTo(preview, 'x', { duration: 0.55, ease: 'power3.out' });
  const y = gsap.quickTo(preview, 'y', { duration: 0.55, ease: 'power3.out' });

  const move = (event: PointerEvent) => {
    x(event.clientX);
    y(event.clientY);
  };

  let visible = false;

  const show = (event: PointerEvent) => {
    const row = (event.currentTarget as HTMLElement).dataset.image;
    if (image && row) image.src = row;
    move(event);
    if (visible) return;
    visible = true;
    gsap.to(preview, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.45,
      ease: 'expo.out',
      overwrite: 'auto',
    });
  };

  const leave = () => {
    if (!visible) return;
    visible = false;
    gsap.to(preview, { autoAlpha: 0, scale: 0.94, duration: 0.3, ease: 'power3.out' });
  };

  rows.forEach((row) => {
    row.addEventListener('pointermove', show as EventListener);
    row.addEventListener('pointerleave', leave);
  });
  window.addEventListener('scroll', leave, { passive: true });

  return () => {
    rows.forEach((row) => {
      row.removeEventListener('pointermove', show as EventListener);
      row.removeEventListener('pointerleave', leave);
    });
    window.removeEventListener('scroll', leave);
    gsap.set(preview, { autoAlpha: 0, scale: 1 });
  };
}
