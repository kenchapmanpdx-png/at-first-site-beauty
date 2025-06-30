
import React, { useEffect } from 'react';

interface PageHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  pageType?: 'home' | 'about' | 'services' | 'service-detail';
}

export default function PageHead({ 
  title, 
  description, 
  path, 
  ogImage = "/attached_assets/IMG_0970_1749066905982.png",
  pageType = 'home'
}: PageHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://atfirstsitebeauty.com${path}`);
    
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', `https://atfirstsitebeauty.com${ogImage}`);
    
    // Update Twitter card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);
    
    const twitterImg = document.querySelector('meta[name="twitter:image"]');
    if (twitterImg) twitterImg.setAttribute('content', `https://atfirstsitebeauty.com${ogImage}`);

    // Remove existing schemas
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"].page-schema');
    existingSchemas.forEach(schema => schema.remove());

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
            "item": "https://atfirstsitebeauty.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": pageType === 'about' ? 'About Us' : pageType === 'services' ? 'Services' : 'Service',
            "item": `https://atfirstsitebeauty.com${path}`
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
          "image": "https://atfirstsitebeauty.com/attached_assets/HollieD_1749336182646_1750713275911.png",
          "worksFor": {
            "@type": "Organization",
            "name": "At First Site Beauty"
          },
          "description": "Professional bridal hairstylist with over 18 years of salon ownership and countless bridal transformations, bringing unmatched expertise in creating stunning hairstyles.",
          "knowsAbout": ["Bridal Hair Styling", "Hair Design", "Wedding Beauty", "Salon Management"],
          "url": "https://atfirstsitebeauty.com/about"
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Cedar Lapp-Ngauamo",
          "jobTitle": "Founder of Cedars Academy of Makeup Artistry",
          "image": "https://atfirstsitebeauty.com/attached_assets/IMG_8201.jpeg",
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
          "url": "https://atfirstsitebeauty.com/about"
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
    
  }, [title, description, path, ogImage, pageType]);

  return null;
}
