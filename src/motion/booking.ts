import { site } from '../data/site';

export function initBooking() {
  const form = document.querySelector<HTMLFormElement>('[data-booking-form]');
  if (!form) return;

  const status = form.querySelector<HTMLElement>('[data-form-status]');

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const service = String(data.get('service') || '').trim();
    const day = String(data.get('day') || '').trim();
    const note = String(data.get('message') || '').trim();

    const lines = [
      'Hello Lavya, I would like to book an appointment.',
      `Name: ${name}`,
      `Phone: ${phone}`,
      service ? `Service: ${service}` : '',
      day ? `Preferred day: ${day}` : '',
      note ? `Note: ${note}` : '',
    ].filter(Boolean);

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    if (status) {
      status.textContent = `Opening WhatsApp with your details. If nothing opens, call ${site.phone}.`;
    }

    form.reset();
  };

  form.addEventListener('submit', onSubmit);

  return () => {
    form.removeEventListener('submit', onSubmit);
    if (status) status.textContent = '';
  };
}
