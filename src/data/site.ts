// Content for the Lavya remake.
// Facts (address, phone, email, hours, team, services, testimonials, first journal post)
// come from the existing Lavya site. No prices were supplied, so none are shown.
// Assumptions to confirm with the owner:
// - Franchise and academy pages are enquiry invitations written for this remake, not a
//   published programme.
// - Photographs are the stock-style images supplied with the site. Replace with Lavya's own
//   photography when available.

export const site = {
  name: 'Lavya',
  fullName: 'Lavya Unisex Salon and Spa',
  role: 'Unisex salon and spa in Bhubaneswar',
  url: 'https://lavyasalon.com',
  description:
    'A unisex salon and spa in Patrapada, Bhubaneswar. Hair, skin, spa, bridal and grooming for women, men and kids, open daily.',
  phone: '+91 95831 60666',
  phoneHref: '+919583160666',
  whatsapp: '919583160666',
  email: 'lavyaasalon@gmail.com',
  address: {
    line1: 'Plot No. 283, Patrapada',
    line2: 'Landmark: ICICI Bank',
    city: 'Bhubaneswar',
    state: 'Odisha',
    country: 'IN',
  },
  hours: 'Open daily, 10:00 to 21:00',
  hoursDetail: 'Monday to Sunday, 10:00 am to 9:00 pm',
  map: 'https://www.google.com/maps/search/?api=1&query=Plot+No.+283%2C+Patrapada%2C+Bhubaneswar%2C+Odisha',
  glPalette: ['#F2EDE4', '#C6A15B', '#171310'] as [string, string, string],
};

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'About', href: '/about/' },
  { label: 'Journal', href: '/journal/' },
  { label: 'Contact', href: '/contact/' },
];

export const audiences = [
  {
    slug: 'women',
    label: 'Women',
    title: 'For her',
    line: 'Hair, skin and spa, with the time built in.',
    intro:
      'Every person who sits in our chair is different: different hair, different skin, different week. So the appointment starts with what you have, not with a fixed menu. Cuts, colour, texture, facials, waxing, hands and feet, or an hour in the spa. You choose how much of the day belongs to you.',
    categories: ['hair', 'skin', 'spa', 'grooming', 'bridal'],
    image: '/images/hair-portrait.webp',
    imageAlt: 'A finished blowout with loose, brushed-out waves.',
  },
  {
    slug: 'men',
    label: 'Men',
    title: 'For him',
    line: 'Grooming without the fuss.',
    intro:
      'A sharp cut, a beard shaped properly, skin that is looked after without a lecture. Our stylists work from a classic cut to something more current, and the grooming room stays calm either way. Come in on a lunch break or settle in for a facial and a head massage.',
    categories: ['hair', 'grooming', 'skin', 'spa'],
    image: '/images/grooming.webp',
    imageAlt: 'A man with a short, shaped haircut in a salon.',
  },
  {
    slug: 'bridals',
    label: 'Bridals',
    title: 'For the bride',
    line: 'The day, planned from the skin up.',
    intro:
      'Bridal work is not one appointment. It is a plan: skin and hair in the weeks before, a trial so nothing is a surprise, and a team that stays until the last pin on the day. We work in HD and airbrush finishes, with looks that hold through a long ceremony and photographs under every light.',
    categories: ['bridal', 'skin', 'hair', 'spa'],
    image: '/images/makeup.webp',
    imageAlt: 'Makeup being applied with a brush before an event.',
  },
  {
    slug: 'kids',
    label: 'Kids',
    title: 'For the kids',
    line: 'A first cut they will remember kindly.',
    intro:
      'We talk to children before we pick up the scissors. Their likes, their hair, the cartoon they are in the middle of. First haircuts, trims, gentle nail care, ear piercing and a little patience for the wriggly ones. Parents can sit close, or watch from the quiet end of the room.',
    categories: ['hair', 'grooming', 'skin'],
    image: '/images/look-blonde.webp',
    imageAlt: 'A smiling child with a simple, shoulder-length cut.',
  },
];

export const serviceCategories = [
  {
    id: 'hair',
    index: '01',
    title: 'Hair',
    kicker: 'Cut, colour, texture, care',
    blurb:
      'A cut that suits your hair, not the trend. Colour and texture work with the same eye.',
    treatments: [
      'Precision haircuts for women, men and kids',
      'Hair smoothening, keratin and strengthening',
      'Global colour, highlights and fashion shades',
      'Hair spa for nourishment and repair',
      'Scalp therapies for dandruff, hair fall and dryness',
    ],
    image: '/images/hair-portrait.webp',
    imageAlt: 'A finished blowout with loose waves.',
  },
  {
    id: 'skin',
    index: '02',
    title: 'Skin',
    kicker: 'Facials, clean-ups, detan',
    blurb:
      'Skin changes with the weather, the water and the week. We read yours before we begin.',
    treatments: [
      'Deep cleansing and hydration facials',
      'Brightening and detan therapies',
      'Anti ageing and acne control treatments',
      'Advanced facials with modern equipment',
    ],
    image: '/images/makeup.webp',
    imageAlt: 'A makeup brush at work during a skin and makeup appointment.',
  },
  {
    id: 'spa',
    index: '03',
    title: 'Spa',
    kicker: 'Massage, aroma, head and shoulder',
    blurb:
      'An hour with no phone, warm oil and a therapist who knows when to talk.',
    treatments: [
      'Head, shoulder and body massage',
      'Aroma and oil therapies',
      'Hair spa with a relaxation massage',
      'Stress relief and rejuvenation',
    ],
    image: '/images/hot-stone-massage.jpg',
    imageAlt: 'Warm stones placed along a back during a massage.',
  },
  {
    id: 'bridal',
    index: '04',
    title: 'Bridal',
    kicker: 'HD and airbrush makeup',
    blurb:
      'A plan for the day, a trial before it, and a team that stays until the last pin.',
    treatments: [
      'Bridal makeup in HD and airbrush finishes',
      'Pre bridal skin and hair care',
      'Hair styling and draping',
      'Makeup for family and the party after',
    ],
    image: '/images/makeup.webp',
    imageAlt: 'A makeup artist working on a client before an event.',
  },
  {
    id: 'grooming',
    index: '05',
    title: 'Grooming',
    kicker: 'Beard, waxing, hands and feet',
    blurb: 'The small appointments that keep the week in order.',
    treatments: [
      'Beard grooming and shaving',
      'Threading and waxing',
      'Manicure and pedicure',
      'Pre event and everyday grooming',
    ],
    image: '/images/grooming.webp',
    imageAlt: 'A short, shaped haircut and beard in the salon.',
  },
];

export const ritual = [
  {
    number: '01',
    title: 'Consult',
    text: 'We start with a conversation, not a menu. Your hair, your skin, your week, and what you want to keep.',
    image: '/images/spa-still-life.jpg',
    imageAlt: 'A white orchid, towels and massage balls on a pale surface.',
  },
  {
    number: '02',
    title: 'The work',
    text: 'Cut, colour, cleanse or massage. One therapist stays with you from the first section to the last.',
    image: '/images/head-massage.jpg',
    imageAlt: 'A therapist working along the hairline during a head massage.',
  },
  {
    number: '03',
    title: 'The quiet',
    text: 'A warm towel, a low light, a few minutes with nothing to do. Leave when you are ready.',
    image: '/images/foot-massage.jpg',
    imageAlt: 'A foot massage in progress on a treatment bed.',
  },
];

export const team = [
  { name: 'Sahil Nayak', role: 'Unisex hair dresser' },
  { name: 'Biswa Bharati Nayak', role: 'Beautician and makeup artist' },
  { name: 'Bhavna Gomit', role: 'Beautician' },
  { name: 'Sameer Nayak', role: 'Unisex hair dresser' },
];

export const testimonials = [
  {
    quote:
      'The best salon experience I have had in Bhubaneswar. The Lavya team is friendly, professional, and above all the room is so relaxing.',
    name: 'Subhra Das',
  },
  {
    quote:
      'The bridal makeup at Lavya was stunning. Everyone complimented me throughout the event. Thank you Lavya team for making my big day perfect.',
    name: 'Aliva Satpathy',
  },
  {
    quote:
      'Honestly speaking, the best spa in Bhubaneswar. I will visit Lavya again for regular skin care and spa sessions.',
    name: 'Sonali Padhi',
  },
];

export const gallery = [
  {
    src: '/images/spa-still-life.jpg',
    alt: 'A white orchid, rolled towels and massage balls arranged on a pale surface.',
    caption: 'The quiet corner: towels, warm stones, one orchid.',
    width: 1024,
    height: 923,
    size: 'tall',
  },
  {
    src: '/images/hot-stone-massage.jpg',
    alt: 'Warm stones placed along a client’s back during a massage.',
    caption: 'Warm stones on the back, a slow start.',
    width: 400,
    height: 325,
    size: 'wide',
  },
  {
    src: '/images/foot-massage.jpg',
    alt: 'A therapist holding a client’s foot during a massage.',
    caption: 'Foot massage, pressure held rather than rushed.',
    width: 400,
    height: 325,
    size: 'wide',
  },
  {
    src: '/images/head-massage.jpg',
    alt: 'A therapist working along a client’s hairline and temples.',
    caption: 'Head and shoulder massage, the last ten minutes of a hair spa.',
    width: 400,
    height: 325,
    size: 'wide',
  },
  {
    src: '/images/hair-portrait.webp',
    alt: 'A finished blowout with loose, brushed-out waves.',
    caption: 'A finished blowout, brushed out rather than set stiff.',
    width: 220,
    height: 220,
    size: 'square',
  },
  {
    src: '/images/look-warm.webp',
    alt: 'A warm, layered cut with soft volume.',
    caption: 'A warm colour, kept close to the natural root.',
    width: 220,
    height: 220,
    size: 'square',
  },
  {
    src: '/images/look-straight.webp',
    alt: 'Long, straight hair with a blunt finish.',
    caption: 'A blunt line, finished straight.',
    width: 220,
    height: 220,
    size: 'square',
  },
  {
    src: '/images/waxing.jpg',
    alt: 'Wax being applied to a leg with a wooden spatula.',
    caption: 'Waxing, in a private room.',
    width: 400,
    height: 325,
    size: 'wide',
  },
  {
    src: '/images/makeup.webp',
    alt: 'A makeup artist applying eye makeup with a brush.',
    caption: 'Makeup in progress, before the event.',
    width: 150,
    height: 150,
    size: 'square',
  },
  {
    src: '/images/grooming.webp',
    alt: 'A man with a short, shaped haircut in a salon.',
    caption: 'A cut and beard shape, kept sharp.',
    width: 140,
    height: 140,
    size: 'square',
  },
];

export type PostSection =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] };

export type Post = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  readingTime: string;
  body: PostSection[];
};

export const posts: Post[] = [
  {
    slug: 'choosing-a-salon',
    title: 'A guide to choosing a unisex salon and spa',
    date: '2026-01-31',
    displayDate: '31 January 2026',
    excerpt:
      'What a good salon visit should include, from the first conversation to the last towel, and how to tell before you book.',
    image: '/images/makeup.webp',
    imageAlt: 'A makeup artist working with a brush on a client.',
    readingTime: '7 min read',
    body: [
      {
        type: 'p',
        text: 'Self care is no longer a luxury. Healthy hair, skin that feels like yours, and an hour that belongs to no one else all change how a week goes. That is why so many people in Bhubaneswar are looking for one place that can look after hair, skin and the quieter business of feeling well.',
      },
      {
        type: 'p',
        text: 'If you are choosing a unisex salon and spa, it helps to know what a good visit actually looks like. Not the chandeliers. The things you can check before you book, and the things you notice once you are in the chair.',
      },
      { type: 'h2', text: 'The modern salon is a whole visit' },
      {
        type: 'p',
        text: 'A salon used to mean a haircut and a quick exit. A good one now works as a whole visit: hair, skin, grooming and rest, with men, women and children in the same room. That shift matters. It means one set of standards for everyone, one team you can return to, and a place a family can book together without splitting the day in two.',
      },
      {
        type: 'p',
        text: 'It also means the person cutting your hair should understand the person doing your facial. At Lavya, the consultation is shared. If your scalp is dry, the hair spa is chosen for that. If your skin is reactive, the facial is adjusted before anything touches it.',
      },
      { type: 'h2', text: 'What a complete service list includes' },
      {
        type: 'p',
        text: 'A salon does not need a hundred services. It needs the ones it does well, across the whole head and body. When you compare places, look for depth in these groups:',
      },
      {
        type: 'list',
        items: [
          'Hair: precision cuts, colour, highlights, smoothening, keratin, hair spa and scalp care.',
          'Skin: cleansing, hydration, brightening, detan, anti ageing and acne care.',
          'Spa: head, shoulder and body massage, aroma and oil therapies, hair spa rituals.',
          'Grooming: threading, waxing, beard work, shaving, manicure and pedicure.',
          'Occasion work: bridal makeup in HD or airbrush, pre bridal care, family makeup.',
        ],
      },
      {
        type: 'p',
        text: 'A short menu done properly is a better sign than a long one done quickly. Ask what a service includes, how long it takes, and what happens after.',
      },
      { type: 'h2', text: 'The room is part of the treatment' },
      {
        type: 'p',
        text: 'Light, sound and smell do more than decoration. A calm room lowers the shoulders before the massage starts. Good lighting lets a stylist see the true colour of your hair. A clean station, a fresh towel and a chair that supports your back are not extras. They are the baseline.',
      },
      {
        type: 'quote',
        text: 'You should be able to tell how a salon treats people by the first five minutes, before anyone picks up a tool.',
      },
      {
        type: 'p',
        text: 'Look for parking that is easy, a reception that explains rather than upsells, and a private room for waxing or massage. In a city where the week is loud, that quiet is worth paying for.',
      },
      { type: 'h2', text: 'Why unisex matters' },
      {
        type: 'p',
        text: 'A unisex salon is not a compromise. It is a shared standard. Couples can book at the same time. A parent can bring a child and still have their own appointment. Men are not offered a smaller menu, and women are not offered a longer wait. The team is trained for everyone in the family, which is a better use of skill than dividing it by gender.',
      },
      { type: 'h2', text: 'A checklist before you book' },
      {
        type: 'list',
        items: [
          'Read recent reviews and look for specifics, not just stars.',
          'Ask whether the stylist or therapist has done the service you want before.',
          'Check that prices are explained before the service starts.',
          'Notice whether the team asks about allergies, recent colour or medication.',
          'Look at the room: clean tools, fresh linen, a private space for waxing and massage.',
          'Ask what aftercare you should follow at home.',
        ],
      },
      {
        type: 'p',
        text: 'A good salon will welcome those questions. A great one will answer them before you ask.',
      },
      { type: 'h2', text: 'The final test' },
      {
        type: 'p',
        text: 'The right place is the one that remembers you. Your colour formula. The side you part on. The pressure you like. The conversation you would rather not have. That memory is what turns a service into care, and a first visit into a habit.',
      },
      {
        type: 'p',
        text: 'If you are in Patrapada, Bhubaneswar, come and see the room. We are open every day from 10:00 am to 9:00 pm, and the first conversation is always unhurried.',
      },
    ],
  },
  {
    slug: 'the-quiet-hour',
    title: 'The quiet hour: what happens in a spa appointment',
    date: '2026-01-27',
    displayDate: '27 January 2026',
    excerpt:
      'A simple walk through a Lavya spa appointment, from the first question to the last glass of water, for anyone who has never booked one.',
    image: '/images/head-massage.jpg',
    imageAlt: 'A therapist working along the hairline during a head massage.',
    readingTime: '4 min read',
    body: [
      {
        type: 'p',
        text: 'A first spa appointment can feel like a test you have not studied for. What do you wear? Do you talk? Is it rude to fall asleep? The honest answer is that none of it matters much. The hour is yours, and a good therapist will follow your lead.',
      },
      { type: 'h2', text: 'Before the room' },
      {
        type: 'p',
        text: 'We ask a few questions first: where you hold tension, whether you prefer firm or light pressure, any area to avoid, and whether you are pregnant or under treatment for an injury. This is not paperwork for its own sake. It changes how the hour is built.',
      },
      {
        type: 'p',
        text: 'You will be shown to a private room and left alone to settle. Keep on what you are comfortable keeping on. A therapist will explain how to lie on the bed and where the towels will sit before they begin.',
      },
      { type: 'h2', text: 'During the massage' },
      {
        type: 'p',
        text: 'Pressure is a conversation, not a default. If something is too strong, say so. If you want more work on the shoulders, say that too. Silence is welcome, but so is talking. Falling asleep is common and completely fine.',
      },
      {
        type: 'p',
        text: 'A head and shoulder massage usually works from the hairline down to the shoulder blades. A body massage moves at a slower pace, with warm oil and long strokes. Aroma oils are chosen for calm rather than a strong scent, so the room stays easy to breathe.',
      },
      {
        type: 'quote',
        text: 'The aim is not to fix you. It is to give your nervous system an hour where nothing is required.',
      },
      { type: 'h2', text: 'After the hour' },
      {
        type: 'p',
        text: 'Take your time getting up. The therapist will step out, and there is water and a quiet seat when you are ready. If you came for a hair spa, the wash and finish follow the massage, so you leave with hair that is ready for the week.',
      },
      {
        type: 'p',
        text: 'Drink water, keep the evening gentle if you can, and tell us what worked. The next appointment is easier when we already know your pressure, your oil and your preferred side of the room.',
      },
      {
        type: 'p',
        text: 'To book a spa hour, call +91 95831 60666 or send us a message from the contact page. We are open daily, 10:00 am to 9:00 pm.',
      },
    ],
  },
];

export const serviceOptions = [
  'Hair',
  'Skin',
  'Spa',
  'Bridal',
  'Grooming',
  'Not sure yet',
];
