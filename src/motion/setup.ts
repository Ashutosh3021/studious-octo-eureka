import { onPage } from '../engine';
import { initMenu } from './menu';
import { initAmbient, initStrands } from './strand';
import { initRitual } from './ritual';
import { initServicePreview } from './services';
import { initBooking } from './booking';

let started = false;

export function setupMotion() {
  if (started) return;
  started = true;

  initMenu();

  onPage(({ intro }) => {
    initStrands(document, intro);
    initAmbient();

    const ritual = initRitual();
    const preview = initServicePreview();
    const booking = initBooking();

    return () => {
      ritual?.();
      preview?.();
      booking?.();
    };
  });
}
