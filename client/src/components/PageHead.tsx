import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceMeta {
  name: string;
  description: string;
  serviceType: string;
  image?: string;
  // Optional price spec
  // Optional Offer object content
  offers?: Array<{
    name?: string;
    price: string;
    priceCurrency?: string;
    validFrom?: string;
    validThrough?: string;
    description?: string;
  }>;
}

interface PageHeadProps {
  /** When true, emits <meta name="robots" content="noindex,follow"> so this page is not indexed. */
  noIndex?: boolean;
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  pageType?: 'home' | 'about' | 'services' | 'service-detail' | 'contact';
  faqs?: FAQItem[];
  serviceMeta?: ServiceMeta;
}

const ORG_ID = 'https://www.atfirstsitebeauty.com/#organization';
const LOCAL_BUSINESS_ID = 'https://www.atfirstsitebeauty.com/#localbusiness';
const SITE_URL = 'https://www.atfirstsitebeauty.com';
const DEFAULT_OG_IMAGE = '/attached_assets/og-image.jpg';

export default function PageHead({
  noIndex = false,
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  pageType = 'home',
  faqs,
  serviceMeta,
}: PageHeadProps) {
  useEffect(() => {
    // Set page-specific titles and descriptions based on pageType
    let pageTitle = title;
    let pageDescription = description;

    if (pageType === 'about') {
      pageTitle = 'Meet Your Dream Team | At First Site Beauty';
      pageDescription =
        'Meet our elite bridal beauty team: Hollie DeMarais (18+ years salon owner) and Cedar Lapp-Ngauamo (founder Cedars Academy). Expert hair styling and makeup artistry for Pacific Northwest weddings.';
    } else if (pageType === 'services') {
      pageTitle = 'Luxury Bridal Hair & Makeup Services | At First Site Beauty';
      pageDescription =
        'Premium bridal beauty services: hair styling, makeup trials, spray tanning, teeth whitening. On-location wedding packages in Oregon and Washington. Professional artists, elegant results.';
    } else if (pageType === 'contact') {
      pageTitle = 'Schedule Your Bridal Consultation | At First Site Beauty';
      pageDescription =
        'Book your free bridal beauty consultation with our expert hair and makeup team. Serving Pacific Northwest weddings with luxury on-location services.';
    }

    // Update document title
    document.title = pageTitle;

    // Canonical link (absolute URL per §10)
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `${SITE_URL}${path}`;

    // Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', pageDescription);

    // Robots directive (noindex,follow when noIndex prop is set; remove tag otherwise)
    const existingRobots = document.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (existingRobots) {
        existingRobots.setAttribute('content', 'noindex,follow');
      } else {
        const r = document.createElement('meta');
        r.setAttribute('name', 'robots');
        r.setAttribute('content', 'noindex,follow');
        document.head.appendChild(r);
      }
    } else if (existingRobots && existingRobots.getAttribute('content')?.includes('noindex')) {
      // Recover from a previous noindex page; reset to index default.
      existingRobots.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    }

    // Helper to upsert <meta> by property/name
    const upsertMeta = (selector: string, attr: 'property' | 'name', key: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const absoluteOg = `${SITE_URL}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`;

    // Open Graph
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', pageDescription);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', `${SITE_URL}${path}`);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', absoluteOg);
    upsertMeta('meta[property="og:image:width"]', 'property', 'og:image:width', '1200');
    upsertMeta('meta[property="og:image:height"]', 'property', 'og:image:height', '630');
    upsertMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', `${pageTitle} - At First Site Beauty`);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', pageType === 'service-detail' ? 'article' : 'website');
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'At First Site Beauty');

    // Twitter
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', pageDescription);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', absoluteOg);
    upsertMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', `${pageTitle} - At First Site Beauty`);

    // Page schemas: if the build-time prerenderer already injected them for this
    // route (script.page-schema[data-prerender]), keep them - they're identical to
    // what we'd append at runtime, and removing/re-appending creates a brief no-schema
    // gap that some crawler snapshots could catch. Only clear stale schemas from
    // prior client-side navigations (those carry .page-schema without data-prerender).
    const prerendered = document.querySelectorAll('script[type="application/ld+json"].page-schema[data-prerender]');
    const runtimeOnly = document.querySelectorAll('script[type="application/ld+json"].page-schema:not([data-prerender])');
    if (prerendered.length > 0) {
      runtimeOnly.forEach((el) => el.remove());
      // The prerendered schemas already match this route - skip re-injection.
      return;
    }
    runtimeOnly.forEach((el) => el.remove());

    const appendSchema = (data: unknown) => {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.className = 'page-schema';
      el.textContent = JSON.stringify(data);
      document.head.appendChild(el);
    };

    // LocalBusiness (HealthAndBeautyBusiness subtype) on home + contact + every page
    // - reference Organization via @id rather than duplicating.
    if (pageType === 'home' || pageType === 'contact' || pageType === 'service-detail') {
      appendSchema({
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
        '@id': LOCAL_BUSINESS_ID,
        name: 'At First Site Beauty On Location',
        parentOrganization: { '@id': ORG_ID },
        url: SITE_URL,
        image: `${SITE_URL}/attached_assets/og-image.jpg`,
        logo: `${SITE_URL}/attached_assets/webp/1At%20First%20Site%20Logo%20(1000%20x%20350%20px).webp`,
        telephone: '+1-360-215-5444',
        description:
          'Luxury on-location bridal hair styling, makeup artistry, spray tanning, and teeth whitening for Pacific Northwest weddings.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Vancouver',
          addressRegion: 'WA',
          postalCode: '98683',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.6277,
          longitude: -122.6735,
        },
        // Service area - Oregon + Washington (PNW)
        areaServed: [
          { '@type': 'State', name: 'Oregon' },
          { '@type': 'State', name: 'Washington' },
        ],
        // By-appointment business - daytime baseline window, all days
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '08:00',
            closes: '20:00',
          },
        ],
        // By-appointment booking flag (Schema.org doesn't have a strict
        // boolean, but reservationsAccepted + the booking action below
        // signal the model.)
        potentialAction: {
          '@type': 'ReserveAction',
          target: `${SITE_URL}/book`,
          name: 'Book a consultation',
        },
        founder: [
          {
            '@type': 'Person',
            name: 'Hollie DeMarais',
            jobTitle: 'Professional Bridal Hairstylist & Salon Owner',
            url: `${SITE_URL}/about`,
          },
          {
            '@type': 'Person',
            name: 'Cedar Lapp-Ngauamo',
            jobTitle: 'Founder of Cedars Academy of Makeup Artistry',
            url: `${SITE_URL}/about`,
          },
        ],
        sameAs: [
          'https://www.instagram.com/atfirstsitebeauty',
          'https://www.facebook.com/atfirstsitebeauty',
        ],
      });
    }

    // Service schema on service-detail pages
    if (pageType === 'service-detail' && serviceMeta) {
      const serviceSchema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceMeta.name,
        serviceType: serviceMeta.serviceType,
        description: serviceMeta.description,
        url: `${SITE_URL}${path}`,
        provider: { '@id': ORG_ID },
        areaServed: [
          { '@type': 'State', name: 'Oregon' },
          { '@type': 'State', name: 'Washington' },
        ],
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: `${SITE_URL}/book`,
          servicePhone: '+1-360-215-5444',
        },
      };

      if (serviceMeta.image) {
        serviceSchema.image = serviceMeta.image.startsWith('http')
          ? serviceMeta.image
          : `${SITE_URL}${serviceMeta.image}`;
      }

      if (serviceMeta.offers && serviceMeta.offers.length > 0) {
        serviceSchema.offers = serviceMeta.offers.map((o) => ({
          '@type': 'Offer',
          name: o.name,
          price: o.price,
          priceCurrency: o.priceCurrency || 'USD',
          availability: 'https://schema.org/InStock',
          ...(o.validFrom ? { validFrom: o.validFrom } : {}),
          ...(o.validThrough ? { validThrough: o.validThrough } : {}),
          ...(o.description ? { description: o.description } : {}),
        }));
      }

      appendSchema(serviceSchema);
    }

    // FAQPage schema
    if (faqs && faqs.length > 0) {
      appendSchema({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      });
    }

    // BreadcrumbList for non-home pages
    if (pageType !== 'home') {
      const breadcrumbName =
        pageType === 'about'
          ? 'About Us'
          : pageType === 'services'
            ? 'Services'
            : pageType === 'contact'
              ? 'Book a Consultation'
              : serviceMeta?.name || 'Service';

      appendSchema({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          {
            '@type': 'ListItem',
            position: 2,
            name: breadcrumbName,
            item: `${SITE_URL}${path}`,
          },
        ],
      });
    }

    // Person schemas on the about page
    if (pageType === 'about') {
      const team = [
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': `${SITE_URL}/about#hollie`,
          name: 'Hollie DeMarais',
          jobTitle: 'Professional Bridal Hairstylist & Salon Owner',
          image: `${SITE_URL}/attached_assets/HollieD_1749336182646_1750713275911.png`,
          worksFor: { '@id': ORG_ID },
          description:
            'Professional bridal hairstylist with over 18 years of salon ownership and countless bridal transformations, bringing unmatched expertise in creating stunning hairstyles.',
          knowsAbout: [
            'Bridal Hair Styling',
            'Hair Design',
            'Wedding Beauty',
            'Salon Management',
          ],
          url: `${SITE_URL}/about`,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': `${SITE_URL}/about#cedar`,
          name: 'Cedar Lapp-Ngauamo',
          jobTitle: 'Founder of Cedars Academy of Makeup Artistry',
          image: `${SITE_URL}/attached_assets/IMG_8201.jpeg`,
          worksFor: { '@id': ORG_ID },
          founder: {
            '@type': 'Organization',
            name: 'Cedars Academy of Makeup Artistry',
          },
          description:
            'Owner of the only private career college focused exclusively on makeup artistry, personally training and certifying every makeup artist in the network.',
          knowsAbout: [
            'Makeup Artistry',
            'Bridal Makeup',
            'Beauty Education',
            'Cosmetic Application',
          ],
          url: `${SITE_URL}/about`,
        },
      ];
      team.forEach(appendSchema);
    }
  }, [title, description, path, ogImage, pageType, faqs, serviceMeta]);

  return null;
}
