import { Link } from "wouter";
import { SocialLinks } from "./SocialLinks";

// Build-time stamp so the visible "Last updated" date doesn't lie about freshness.
const LAST_UPDATED = new Date().toISOString().slice(0, 10);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="font-playfair text-3xl font-semibold text-gray-900 mb-4">
            At First Site Beauty
          </div>
          <p className="text-gray-600 mb-2">
            Created by VATA Salon x Cedars Academy
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Luxury on-location bridal hair and makeup serving Oregon, Washington, and the Pacific Northwest. Call (360) 215-5444.
          </p>

          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
            <Link href="/" className="text-gray-600 hover:text-blush-400 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blush-400 transition-colors duration-200">
              About the team
            </Link>
            <Link href="/bridal-design-session" className="text-gray-600 hover:text-blush-400 transition-colors duration-200">
              Design Session
            </Link>
            <Link href="/bridal-party" className="text-gray-600 hover:text-blush-400 transition-colors duration-200">
              Bridal Party
            </Link>
            <Link href="/spray-tanning" className="text-gray-600 hover:text-blush-400 transition-colors duration-200">
              Spray Tanning
            </Link>
            <Link href="/teeth-whitening" className="text-gray-600 hover:text-blush-400 transition-colors duration-200">
              Teeth Whitening
            </Link>
            <Link href="/book" className="text-gray-600 hover:text-blush-400 transition-colors duration-200">
              Book / Contact
            </Link>
          </nav>

          <SocialLinks />

          <p className="text-gray-500 text-xs mt-6">
            Last updated <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time>
          </p>
          <p className="text-gray-500 text-sm">
            © {currentYear} At First Site Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
