# Lavya: design notes

## Brief

Lavya is a unisex salon and spa at Plot 283, Patrapada, Bhubaneswar (landmark: ICICI Bank).
Women, men, bridals and kids; hair, skin, spa and grooming. Open daily, 10:00 to 21:00.
The site's job: make the room feel calm and precise, explain the four audiences, and turn a
visit into a booking (phone, WhatsApp, email). No backend: the booking form prepares a
WhatsApp message.

Audience: people in Bhubaneswar choosing a salon for a cut, a colour, a facial, a bridal
appointment, or an hour of quiet. They are on a phone, often in a hurry, and they need the
address, the phone number and proof of care within seconds.

Language: English. Assets: the Lavya logo, 10 photographs supplied from the existing site.
No prices were supplied, so none are shown.

## Concept

**Idea:** Lavya is drawn with one unbroken strand. A single tapered line begins in the
wordmark, travels through the hero, loops each service, threads the ritual chapters, and
sweeps the screen between pages.

**Anchor:** the supplied logo. Its A is literally a strand of hair, and the business is
built on what a line does: a cut, a colour, a brow, a massage path.

**Signature:** the strand. It draws in on load, follows the scroll through the ritual, loops
a service row under the pointer, and becomes the page transition. Implemented with SVG path
drawing, GSAP and one scroll driver.

**Emotion:** a deep breath, then precision. Warm, quiet, expensive without marble.

**Motion verb:** draw and settle. Lines extend with a soft ease and come to rest; nothing
bounces, nothing wipes without a curve.

**Screenshot:** the hero: a bone field, a large Sentient headline, a brass hairline leaving
the A and looping around a high-key spa still life.

## Art direction

### Palette

| Role | Hex | Use |
|---|---|---|
| ground | `#F2EDE4` | raw silk, the page |
| stone | `#E6DCCC` | alternate bands, image backing |
| ink | `#171310` | text, dark sections |
| muted | `#6E655B` | secondary text (AA on ground) |
| brass | `#8A5A26` | accent text, links, focus |
| metal | `#C6A15B` | the strand, decorative rules |
| paper | `#F7F2E9` | text on ink |

No pure black. The images bring the only saturated colour (orchid pink, warm skin, green
foliage); everything else is mineral.

### Type

- **Display:** Sentient 300/400 (Fontshare), for the hero, section titles, pull quotes,
  footer finale. Tight leading, negative tracking, optical indents. Its calligraphic serif
  echoes a brush stroke without becoming a wedding invitation.
- **Text / UI:** Switzer 400/500/600 (Fontshare). Small caps labels are Switzer 500, tracked
  +0.08em, 11 to 12 px. Body 17 to 18 px, 1.55 leading, 60ch max.
- Scale: mega `clamp(3.4rem, 1.4rem + 8.2vw, 8.4rem)`; xl `clamp(2.4rem, 1.4rem + 4.4vw, 5.6rem)`;
  l `clamp(1.8rem, 1.3rem + 2.1vw, 3.4rem)`; m `clamp(1.2rem, 1.05rem + 0.6vw, 1.6rem)`;
  body `clamp(1rem, .96rem + .18vw, 1.125rem)`; s 14; xs 12.

### Grid and rhythm

12 columns, fluid gutter `clamp(1.1rem, .55rem + 1.9vw, 2.6rem)`, outer margin equal to
gutter. Text hangs on column 2 or 3; full-bleed images break to the edge. Section moods:
tight (services rows), normal (journal), airy (statement), full viewport (hero, ritual,
footer). Each section uses a different layout family (poster, asymmetric pair, index,
sticky chapters, gallery wall, facts, finale).

### Shape

UI corners are square (`--radius: 0`). The one exception is the image portal: an organic
loop mask (`border-radius: 52% 48% 45% 55% / 55% 45% 55% 45%`) that reads as a hair loop.
No card shadows. Hairlines are 1 px at 14% ink, brass hairlines for concept lines.

### Motion

One easing family: `expo.out` for entrances, `expo.inOut` for curtains, `power3.out` for UI.
Durations: hover 0.3 to 0.5 s; text reveal 1.1 s with 0.08 stagger; image clip 1.3 s;
page transition 0.75 s out, 0.85 s in; loader 1.2 to 2.4 s.

The strand draws (stroke-dashoffset). A small brass bead travels its length at rest, slowly,
so the concept keeps breathing. Under reduced motion the strand is simply there, complete.

### Composition plan

```
HOME
[header: logo, nav, Book]
[hero: poster + still life]
  col 1-7   label / H1 / line / body / two CTAs
  col 8-12  loop-masked still life, strand crossing from H1
  baseline  hours / address / scroll cue

[statement: asymmetric pair]
  col 2-7   "Beauty begins with wellness." + paragraph
  col 9-12  small portrait plate, offset down

[facts: three columns, real information]

[services: index list]
  row: 03 | Hair | Cut, colour, texture, care | arrow
  hover: floating loop preview follows the pointer; row hairline loops

[ritual: sticky chapters on ink]
  left: three chapter texts, vertical strand draws
  right: sticky image changes per chapter

[gallery strip: gallery wall]
  three plates at different grid positions + "See the gallery"

[team: typographic index]
  four names, roles, no stock faces

[testimonials: statement + two quotes]

[journal: asymmetric pair of two real posts]

[footer finale: "Book your chair." + real contact]
```

Inner pages keep the same header and footer, a smaller poster hero with one strand
fragment, and content in the same column system. The 404 is a strand that stops.

## Genericness test

A generic model, given "salon in Bhubaneswar", would produce cream, a script font, three
service cards, gold gradients, and a carousel. This site uses a drawn line as the layout
and interaction system, an editorial serif at poster scale, a mineral palette, a service
index instead of cards, and a sticky ritual instead of testimonials at the top. The only
thing kept from the source is the material: real address, hours, phone, team, services and
quotes.

## Honest notes

- Photographs are the ones supplied from the existing site. They are stock-style service
  images; replace with Lavya's own photography when available. They are never presented as
  named clients or team members.
- No prices are shown because none were supplied.
- Franchise and academy copy is written for this remake as an enquiry invitation, not as a
  published programme. The owner should confirm or replace it.
- The site URL is set to `https://lavyasalon.com`, the existing production domain.
