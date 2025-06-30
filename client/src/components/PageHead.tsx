
import { useEffect } from 'react';

interface PageHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export default function PageHead({ title, description, path, ogImage = "/attached_assets/1At First Site Logo (1000 x 350 px).png" }: PageHeadProps) {
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
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);
    
    const twitterImg = document.querySelector('meta[property="twitter:image"]');
    if (twitterImg) twitterImg.setAttribute('content', `https://atfirstsitebeauty.com${ogImage}`);
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://atfirstsitebeauty.com${path}`);
    
  }, [title, description, path, ogImage]);

  return null;
}
