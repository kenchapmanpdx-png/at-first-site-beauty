import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.resolve(root, 'dist/public');
const SITE = 'https://www.atfirstsitebeauty.com';
const TODAY = new Date().toISOString().slice(0, 10);

// === Route config ===
// Each entry produces dist/public/<slug>/index.html and dist/public/<slug>.md.
// keep .body short — it's a crawler-visible textual summary, not the full
// page (the React app still hydrates after).
const ORG_ID = `${SITE}/#organization`;
const LOCAL_ID = `${SITE}/#localbusiness`;

const FAQ_HOME = [
  { q: 'Do you travel to my location?',
    a: 'Yes. At First Site Beauty is a 100% on-location service. We travel throughout the Pacific Northwest — including Oregon and Washington — to deliver luxury bridal hair and makeup at your venue or getting-ready location.' },
  { q: 'What is a Bridal Design Session?',
    a: 'A Bridal Design Session is a comprehensive in-suite trial where we design, test, and perfect your wedding-day look. It includes a six-hour wear test with photo feedback under varied lighting to ensure absolute wedding-day longevity.' },
  { q: 'Can you accommodate large bridal parties?',
    a: 'Yes. Our certified-artist network, trained through Cedars Academy of Makeup Artistry, allows us to scale to bridal parties of any size while maintaining a cohesive, high-end look for every member.' },
  { q: 'Do you offer other beauty services?',
    a: 'Yes. In addition to bridal hair and makeup, we offer professional spray tanning and teeth whitening so you have a complete pre-wedding glow.' },
];

const FAQ_DESIGN = [
  { q: 'What exactly is a Bridal Design Session?',
    a: 'A Design Session is an elevated version of a standard trial — a comprehensive aesthetic consultation in our private bridal suite where we design, test, and perfect every detail of your wedding-day hair and makeup look.' },
  { q: 'How long does the design session take?',
    a: 'Block 2.5 to 3 hours for your session. That gives us time to discuss your vision, try variations, and lock in every detail of the final wedding-day look.' },
  { q: 'What is the 6-hour wear test?',
    a: 'After your session you wear the look for at least six hours and send photos under different lighting. The feedback loop lets us fine-tune products and techniques for maximum wedding-day longevity.' },
  { q: 'Should I bring my veil or accessories?',
    a: 'Yes. Bringing your veil, hair accessories, and a photo of your dress lets us design a cohesive look that complements your entire bridal ensemble.' },
];

const FAQ_PARTY = [
  { q: 'Can you handle large bridal parties?',
    a: 'Yes. Through the Cedars Academy of Makeup Artistry network we can field certified artists to cover bridal parties of any size while keeping the styling cohesive with the bride’s look.' },
  { q: 'How are prices structured?',
    a: 'Bridal-party hair and makeup is $325 per person January through April and $375 per person May through December. Mother-of-bride and mother-of-groom services price the same.' },
];

const FAQ_TAN = [
  { q: 'Will my spray tan look orange?',
    a: 'No. Our Luxe Dolce Glow formula is balanced for a natural bronzed tone without orange undertones. Trained artists match the shade to your specific skin tone.' },
  { q: 'How long does the spray tan last?',
    a: 'With proper preparation and aftercare, a spray tan lasts seven to ten days. Hyaluronic acid and squalane in the formula extend the life of the color.' },
];

const FAQ_WHITE = [
  { q: 'Is professional teeth whitening safe?',
    a: 'Yes when applied by a trained technician. We use higher-percentage hydrogen peroxide with specialized light activation for safe, effective same-day results.' },
];

const routes = [
  {
    slug: '',
    path: '/',
    title: 'At First Site Beauty | Luxury Bridal Hair & Makeup PNW',
    description: 'Luxury on-location bridal hair styling and makeup artistry throughout the Pacific Northwest. Serving Oregon and Washington weddings — Hollie DeMarais and Cedar Lapp-Ngauamo.',
    ogImage: '/attached_assets/og-image.jpg',
    h1: 'Luxury Bridal Hair & Makeup — Pacific Northwest',
    bluf: 'At First Site Beauty is a luxury on-location bridal hair and makeup studio serving Oregon, Washington, and the Pacific Northwest. Founded by Hollie DeMarais (VATA Salon, 18+ years) and Cedar Lapp-Ngauamo (Cedars Academy of Makeup Artistry). Call (360) 215-5444.',
    body: [
      'At First Site Beauty delivers on-location bridal hair styling, makeup artistry, spray tanning, and professional teeth whitening for Pacific Northwest weddings.',
      'Hollie DeMarais brings 18+ years of salon ownership and bridal hair expertise. Cedar Lapp-Ngauamo founded Cedars Academy of Makeup Artistry, the only private career college in the Pacific Northwest focused exclusively on makeup artistry, and personally trains and certifies every artist in the network.',
      'Services include the in-suite Bridal Design Session with six-hour wear test, full Bridal Party hair and makeup, spray tanning, and teeth whitening — all delivered at your venue or getting-ready location.',
    ],
    faqs: FAQ_HOME,
    schemas: ['localBusiness', 'faq'],
    breadcrumb: null,
  },
  {
    slug: 'bridal-design-session',
    path: '/bridal-design-session',
    title: 'Bridal Design Session & Trial | At First Site Beauty',
    description: 'Perfect your wedding day look with our comprehensive bridal design session. Luxury trial hair and makeup services in our private PNW suite.',
    ogImage: '/attached_assets/og-bridal-design-session.jpg',
    h1: 'Bridal Design Session — Where Your Dream Look Begins',
    bluf: 'A Bridal Design Session is a comprehensive in-suite trial that designs and locks in your wedding-day hair and makeup, then validates the look with a six-hour wear test under varied lighting.',
    body: [
      'The Design Session goes beyond a standard trial. In our private bridal suite we test colors, techniques, and product holds against your dress, veil, and venue lighting.',
      'After the session, you wear the final look for at least six hours and send photos at two-hour intervals so we can fine-tune products and technique for wedding-day longevity.',
      'Plan for 2.5 to 3 hours in-suite. Bring your veil, hair accessories, and a photo of your dress.',
    ],
    faqs: FAQ_DESIGN,
    serviceMeta: {
      name: 'Bridal Design Session',
      serviceType: 'Bridal Hair and Makeup Trial',
      description: 'Comprehensive in-suite bridal trial: design and lock in your wedding-day hair and makeup look, then validate with a six-hour wear test under varied lighting.',
    },
    schemas: ['localBusiness', 'service', 'faq', 'breadcrumb'],
    breadcrumb: { name: 'Bridal Design Session' },
  },
  {
    slug: 'bridal-party',
    path: '/bridal-party',
    title: 'Bridal Party Hair & Makeup Services | At First Site',
    description: 'Complete bridal party styling services in the Pacific Northwest. Professional hair and makeup for bridesmaids, mothers, and entire wedding parties on location.',
    ogImage: '/attached_assets/og-bridal-party.jpg',
    h1: 'Bridal Party Hair & Makeup — On-Location PNW',
    bluf: 'On-location hair and makeup for the full bridal party — bridesmaids, mothers, and wedding-party members — coordinated to the bride’s aesthetic. $325 per person January–April, $375 per person May–December.',
    body: [
      'Coordinated styling across the whole party means everyone photographs beautifully without competing with the bride.',
      'Pricing: Bridal Party Hair & Makeup is $325 per person off-peak (Jan-Apr) and $375 per person peak (May-Dec). Mother of the Bride and Mother of the Groom price the same.',
      'Service includes coordinated hair styling, makeup application, color matching to the bride’s aesthetic, individual consultation during the trial, touch-up kits, and timeline coordination with the photographer.',
      'Scales via the Cedars-Academy-trained artist network for parties of any size.',
    ],
    faqs: FAQ_PARTY,
    serviceMeta: {
      name: 'Bridal Party Hair & Makeup',
      serviceType: 'Bridal Party Beauty Services',
      description: 'On-location hair styling and makeup for the full bridal party — bridesmaids, mothers, and wedding party members — coordinated to the bride\'s aesthetic.',
      offers: [
        { name: 'Bridal Party Hair & Makeup (Jan-Apr)', price: '325', description: 'Per-person, off-peak season' },
        { name: 'Bridal Party Hair & Makeup (May-Dec)', price: '375', description: 'Per-person, peak season' },
      ],
    },
    schemas: ['localBusiness', 'service', 'faq', 'breadcrumb'],
    breadcrumb: { name: 'Bridal Party Hair & Makeup' },
  },
  {
    slug: 'spray-tanning',
    path: '/spray-tanning',
    title: 'Professional Spray Tanning for Brides | At First Site Beauty',
    description: 'Premium bridal spray tanning with hyaluronic acid formula. No orange undertones, natural radiant glow. Professional application by trained artists for Pacific Northwest weddings.',
    ogImage: '/attached_assets/og-image.jpg',
    h1: 'Bridal Spray Tanning — Natural-Toned, No Orange',
    bluf: 'Professional sunless tanning for brides and bridal parties using a hyaluronic-acid-enriched formula. Hydrating, natural-toned, lasts 7–10 days. On-location across Oregon and Washington.',
    body: [
      'Luxe Dolce Glow formula with hyaluronic acid and squalane delivers a balanced bronze without orange undertones.',
      'Trained artists match the shade to your skin tone and the wedding photography style.',
      'Standard formula: wait 8–12 hours before showering. Rapid-rinse options available for tighter schedules.',
    ],
    faqs: FAQ_TAN,
    serviceMeta: {
      name: 'Bridal Spray Tanning',
      serviceType: 'Sunless Tanning',
      description: 'Professional sunless tanning for brides and bridal parties using a hyaluronic-acid-enriched formula.',
    },
    schemas: ['localBusiness', 'service', 'faq', 'breadcrumb'],
    breadcrumb: { name: 'Spray Tanning' },
  },
  {
    slug: 'teeth-whitening',
    path: '/teeth-whitening',
    title: 'Professional Teeth Whitening for Weddings | At First Site Beauty',
    description: 'Professional-grade teeth whitening for brides. Higher percentage Hydrogen Peroxide with specialized light activation. Safe, effective, immediate results for your wedding day smile.',
    ogImage: '/attached_assets/og-image.jpg',
    h1: 'Professional Teeth Whitening — Wedding-Day Smile',
    bluf: 'Professional-grade teeth whitening for brides using higher-percentage hydrogen peroxide with specialized light activation. Safe, effective, same-day visible results.',
    body: [
      'Higher-percentage hydrogen peroxide combined with light activation produces noticeably brighter teeth in a single appointment.',
      'Bridal-focused service, on-location across Oregon and Washington.',
      'Schedule before your final wedding photos for the cleanest before/after.',
    ],
    faqs: FAQ_WHITE,
    serviceMeta: {
      name: 'Professional Teeth Whitening',
      serviceType: 'Cosmetic Teeth Whitening',
      description: 'Professional-grade teeth whitening using higher-percentage hydrogen peroxide with light activation.',
    },
    schemas: ['localBusiness', 'service', 'faq', 'breadcrumb'],
    breadcrumb: { name: 'Teeth Whitening' },
  },
  {
    slug: 'book',
    path: '/book',
    title: 'Schedule Your Bridal Consultation | At First Site Beauty',
    description: 'Book your free bridal beauty consultation with our expert hair and makeup team. Serving Pacific Northwest weddings with luxury on-location services.',
    ogImage: '/attached_assets/og-image.jpg',
    h1: 'Book Your Bridal Consultation',
    bluf: 'Schedule a free bridal beauty consultation with At First Site Beauty. We serve Oregon and Washington weddings with on-location hair, makeup, spray tanning, and teeth whitening. Call (360) 215-5444.',
    body: [
      'Tell us your wedding date, venue, and party size. We respond within one business day with availability and recommended packages.',
      'For larger parties, we’ll route you to one of our Cedars-Academy-trained lead artists to coordinate the look across the whole group.',
    ],
    faqs: [],
    schemas: ['localBusiness', 'breadcrumb'],
    breadcrumb: { name: 'Book a Consultation' },
  },
];

// === Schema generators ===
function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
    '@id': LOCAL_ID,
    name: 'At First Site Beauty On Location',
    parentOrganization: { '@id': ORG_ID },
    url: SITE,
    image: `${SITE}/attached_assets/og-image.jpg`,
    logo: `${SITE}/attached_assets/webp/1At%20First%20Site%20Logo%20(1000%20x%20350%20px).webp`,
    telephone: '+1-360-215-5444',
    priceRange: '$$$',
    description: 'Luxury on-location bridal hair styling, makeup artistry, spray tanning, and teeth whitening for Pacific Northwest weddings.',
    address: { '@type': 'PostalAddress', addressLocality: 'Vancouver', addressRegion: 'WA', postalCode: '98683', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 45.6277, longitude: -122.6735 },
    areaServed: [{ '@type': 'State', name: 'Oregon' }, { '@type': 'State', name: 'Washington' }],
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '08:00', closes: '20:00' }],
    potentialAction: { '@type': 'ReserveAction', target: `${SITE}/book`, name: 'Book a consultation' },
    founder: [
      { '@type': 'Person', name: 'Hollie DeMarais', jobTitle: 'Professional Bridal Hairstylist & Salon Owner', url: `${SITE}/about` },
      { '@type': 'Person', name: 'Cedar Lapp-Ngauamo', jobTitle: 'Founder of Cedars Academy of Makeup Artistry', url: `${SITE}/about` },
    ],
    sameAs: ['https://www.instagram.com/atfirstsitebeauty', 'https://www.facebook.com/atfirstsitebeauty'],
  };
}

function serviceSchema(route) {
  if (!route.serviceMeta) return null;
  const s = route.serviceMeta;
  const out = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.serviceType,
    description: s.description,
    url: `${SITE}${route.path}`,
    provider: { '@id': ORG_ID },
    areaServed: [{ '@type': 'State', name: 'Oregon' }, { '@type': 'State', name: 'Washington' }],
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE}/book`, servicePhone: '+1-360-215-5444' },
  };
  if (route.ogImage) out.image = `${SITE}${route.ogImage}`;
  if (s.offers && s.offers.length) {
    out.offers = s.offers.map(o => ({
      '@type': 'Offer', name: o.name, price: o.price, priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      ...(o.description ? { description: o.description } : {}),
    }));
  }
  return out;
}

function faqSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

function breadcrumbSchema(route) {
  if (!route.breadcrumb) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: route.breadcrumb.name, item: `${SITE}${route.path}` },
    ],
  };
}

function htmlEscape(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function buildHtml(route, template) {
  // Build per-route schema JSON-LD blocks
  const blocks = [];
  if (route.schemas.includes('localBusiness')) blocks.push(localBusinessSchema());
  const sv = serviceSchema(route);
  if (sv) blocks.push(sv);
  const fq = faqSchema(route.faqs);
  if (fq) blocks.push(fq);
  const bc = breadcrumbSchema(route);
  if (bc) blocks.push(bc);

  const schemaScripts = blocks
    .map(b => `<script type="application/ld+json" class="page-schema" data-prerender>${JSON.stringify(b)}</script>`)
    .join('\n    ');

  const canonical = `${SITE}${route.path}`;
  const absOg = `${SITE}${route.ogImage}`;

  // Patch <title>
  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${htmlEscape(route.title)}</title>`);
  // Patch description
  html = html.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${htmlEscape(route.description)}">`);
  // Patch canonical
  html = html.replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`);
  // Patch OG title/desc/url/image
  html = html.replace(/<meta property="og:title"[^>]*>/i, `<meta property="og:title" content="${htmlEscape(route.title)}">`);
  html = html.replace(/<meta property="og:description"[^>]*>/i, `<meta property="og:description" content="${htmlEscape(route.description)}">`);
  html = html.replace(/<meta property="og:url"[^>]*>/i, `<meta property="og:url" content="${canonical}">`);
  html = html.replace(/<meta property="og:image"[^>]*>/i, `<meta property="og:image" content="${absOg}">`);
  // og:type
  html = html.replace(/<meta property="og:type"[^>]*>/i, `<meta property="og:type" content="${route.path === '/' ? 'website' : 'article'}">`);
  // Twitter
  html = html.replace(/<meta name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${htmlEscape(route.title)}">`);
  html = html.replace(/<meta name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${htmlEscape(route.description)}">`);
  html = html.replace(/<meta name="twitter:image"[^>]*>/i, `<meta name="twitter:image" content="${absOg}">`);

  // Inject per-page schema after the persistent Organization schema's closing tag
  html = html.replace(
    /(<script type="application\/ld\+json">[\s\S]*?"@type"\s*:\s*"Organization"[\s\S]*?<\/script>)/,
    `$1\n    ${schemaScripts}`
  );

  // Replace seo-fallback content with route-specific content
  // <noscript> so JS-running clients (Googlebot WRS, browsers) skip this block,
  // avoiding the duplicate-h1 collision with React-rendered headings. Non-JS HTML
  // parsers (GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot) still see it.
  const fallback = `<noscript data-seo-fallback>
      <h1>${htmlEscape(route.h1)}</h1>
      <p><strong>${htmlEscape(route.bluf)}</strong></p>
      ${route.body.map(p => `<p>${htmlEscape(p)}</p>`).join('\n      ')}
      ${route.faqs.length ? `<h2>Frequently asked questions</h2>
      <dl>
      ${route.faqs.map(f => `  <dt>${htmlEscape(f.q)}</dt>\n        <dd>${htmlEscape(f.a)}</dd>`).join('\n      ')}
      </dl>` : ''}
      <h2>Get in touch</h2>
      <p>Phone: <a href="tel:+13602155444">(360) 215-5444</a>. <a href="/book">Book a consultation</a>.</p>
      <nav aria-label="Site links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/bridal-design-session">Bridal Design Session</a></li>
          <li><a href="/bridal-party">Bridal Party Hair &amp; Makeup</a></li>
          <li><a href="/spray-tanning">Spray Tanning</a></li>
          <li><a href="/teeth-whitening">Teeth Whitening</a></li>
          <li><a href="/book">Book / Contact</a></li>
        </ul>
      </nav>
      <p><small>Last updated <time datetime="${TODAY}">${TODAY}</time>.</small></p>
    </noscript>`;

  // Replace the seo-fallback div by matching its own closing </div>.
  // The <ul>/<li> inside don't contain divs, so the first </div> after the
  // opening tag is the correct close.
  html = html.replace(/<noscript data-seo-fallback>[\s\S]*?<\/noscript>/, fallback);

  return html;
}

function buildMarkdown(route) {
  // Per spec §22 — append .md version of every page in llms.txt
  const lines = [];
  lines.push(`# ${route.h1}`);
  lines.push('');
  lines.push(`> ${route.bluf}`);
  lines.push('');
  route.body.forEach(p => { lines.push(p); lines.push(''); });
  if (route.faqs.length) {
    lines.push('## Frequently asked questions');
    lines.push('');
    route.faqs.forEach(f => {
      lines.push(`### ${f.q}`);
      lines.push('');
      lines.push(f.a);
      lines.push('');
    });
  }
  lines.push('## Contact');
  lines.push('');
  lines.push(`Phone: (360) 215-5444. Email/booking: ${SITE}/book`);
  lines.push('');
  lines.push(`Source: ${SITE}${route.path}`);
  lines.push(`Last updated: ${TODAY}`);
  return lines.join('\n');
}

// === Main ===
const templatePath = path.join(dist, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('Prerender: dist/public/index.html missing. Run vite build first.');
  process.exit(1);
}
const template = fs.readFileSync(templatePath, 'utf8');

// Generate llms-full.txt at the same time
const llmsFullParts = [];

for (const route of routes) {
  const html = buildHtml(route, template);
  const targetDir = route.slug === '' ? dist : path.join(dist, route.slug);
  const targetFile = route.slug === '' ? path.join(dist, 'index.html') : path.join(targetDir, 'index.html');
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(targetFile, html, 'utf8');
  console.log(`  ✓ ${path.relative(dist, targetFile)}`);

  // .md version
  const md = buildMarkdown(route);
  const mdName = route.slug === '' ? 'index.md' : `${route.slug}.md`;
  fs.writeFileSync(path.join(dist, mdName), md, 'utf8');
  console.log(`  ✓ ${mdName}`);

  llmsFullParts.push(md);
  llmsFullParts.push('\n---\n');
}

// Write llms-full.txt
fs.writeFileSync(path.join(dist, 'llms-full.txt'), llmsFullParts.join('\n'), 'utf8');
console.log(`  ✓ llms-full.txt`);

console.log('Prerender complete.');
