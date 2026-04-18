
import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface PageHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  pageType?: 'home' | 'about' | 'services' | 'service-detail' | 'contact';
  faqs?: FAQItem[];
}

export default function PageHead({
  title,
  description,
  path,
  ogImage = "/attached_assets/hero_placeholder.png",
  pageType = 'home',
  faqs
}: PageHeadProps) {
  useEffect(() => {
    // Set page-specific titles and descriptions based on pageType
    let pageTitle = title;
    let pageDescription = description;

    if (pageType === 'about') {
      pageTitle = "Meet Your Dream Team | At First Site Beauty";
      pageDescription = "Meet our elite bridal beauty team: Hollie DeMarais (18+ years salon owner) and Cedar Lapp-Ngauamo (founder Cedars Academy). Expert hair styling and makeup artistry for Pacific Northwest weddings.";
    } else if (pageType === 'services') {
      pageTitle = "Luxury Bridal Hair & Makeup Services | At First Site Beauty";
      pageDescription = "Premium bridal beauty services: hair styling, makeup trials, spray tanning, teeth whitening. On-location wedding packages in Oregon and Washington. Professional artists, elegant results.";
    } else if (pageType === 'contact') {
      pageTitle = "Schedule Your Bridal Consultation | At First Site Beauty";
      pageDescription = "Book your free bridal beauty consultation with our expert hair and makeup team. Serving Pacific Northwest weddings with luxury on-location services.";
    } else if (pageType === 'service-detail') {
      // Use the passed title and description for service detail pages
      pageTitle = title;
      pageDescription = description;
    }

    // Update document title
    document.title = pageTitle;

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `https://www.atfirstsitebeauty.com${path}`;

    // Always update meta tags so they match the current page — if we skip this
    // for the home page, returning to home via SPA navigation leaves stale OG
    // tags from whichever sub-page was visited last.
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://www.atfirstsitebeauty.com${path}`);

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', `https://www.atfirstsitebeauty.com${ogImage}`);

    // Update Twitter card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', pageTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', pageDescription);

    const twitterImg = document.querySelector('meta[name="twitter:image"]');
    if (twitterImg) twitterImg.setAttribute('content', `https://www.atfirstsitebeauty.com${ogImage}`);

    // Remove existing schemas
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"].page-schema');
    existingSchemas.forEach(schema => schema.remove());

    // LocalBusiness Schema (Home page and dynamic)
    if (pageType === 'home' || pageType === 'contact') {
      const businessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "At First Site Beauty On Location",
        "image": "https://www.atfirstsitebeauty.com/attached_assets/webp/1At First Site Logo (1000 x 350 px).webp",
        "@id": "https://www.atfirstsitebeauty.com",
        "url": "https://www.atfirstsitebeauty.com",
        "telephone": "(360) 215-5444",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Serving Pacific Northwest",
          "addressLocality": "Vancouver",
          "addressRegion": "WA",
          "postalCode": "98683",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 45.6277,
          "longitude": -122.6735
        },
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "sameAs": [
          "https://facebook.com/atfirstsitebeauty",
          "https://instagram.com/atfirstsitebeauty"
        ]
      };

      const businessScript = document.createElement('script');
      businessScript.type = 'application/ld+json';
      businessScript.className = 'page-schema';
      businessScript.textContent = JSON.stringify(businessSchema);
      document.head.appendChild(businessScript);
    }

    // FAQ Schema
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.className = 'page-schema';
      faqScript.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(faqScript);
    }

    // Add breadcrumb schema for non-home pages
    if (pageType !== 'home') {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.atfirstsitebeauty.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": pageType === 'about' ? 'About Us' : pageType === 'services' ? 'Services' : pageType === 'contact' ? 'Contact' : 'Service',
            "item": `https://www.atfirstsitebeauty.com${path}`
          }
        ]
      };

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.className = 'page-schema';
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);
    }

    // Add Person schemas for team members on about page
    if (pageType === 'about') {
      const teamSchema = [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Hollie DeMarais",
          "jobTitle": "Professional Bridal Hairstylist & Salon Owner",
          "image": "https://www.atfirstsitebeauty.com/attached_assets/HollieD_1749336182646_1750713275911.png",
          "worksFor": {
            "@type": "Organization",
            "name": "At First Site Beauty"
          },
          "description": "Professional bridal hairstylist with over 18 years of salon ownership and countless bridal transformations, bringing unmatched expertise in creating stunning hairstyles.",
          "knowsAbout": ["Bridal Hair Styling", "Hair Design", "Wedding Beauty", "Salon Management"],
          "url": "https://www.atfirstsitebeauty.com/about"
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Cedar Lapp-Ngauamo",
          "jobTitle": "Founder of Cedars Academy of Makeup Artistry",
          "image": "https://www.atfirstsitebeauty.com/attached_assets/IMG_8201.jpeg",
          "worksFor": {
            "@type": "Organization",
            "name": "At First Site Beauty"
          },
          "founder": {
            "@type": "Organization",
            "name": "Cedars Academy of Makeup Artistry"
          },
          "description": "Owner of the only private career college focused exclusively on makeup artistry, personally training and certifying every makeup artist in the network.",
          "knowsAbout": ["Makeup Artistry", "Bridal Makeup", "Beauty Education", "Cosmetic Application"],
          "url": "https://www.atfirstsitebeauty.com/about"
        }
      ];

      teamSchema.forEach(person => {
        const personScript = document.createElement('script');
        personScript.type = 'application/ld+json';
        personScript.className = 'page-schema';
        personScript.textContent = JSON.stringify(person);
        document.head.appendChild(personScript);
      });
    }

  }, [title, description, path, ogImage, pageType, faqs]);

  return null;
}
