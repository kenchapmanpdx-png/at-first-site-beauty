import { Link } from "wouter";
import { SocialLinks } from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="font-playfair text-3xl font-semibold text-gray-900 mb-4">
            At First Site Beauty
          </div>
          <p className="text-gray-600 mb-6">
            Created by VATA Salon x Cedars Academy
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <Link href="/" className="text-gray-600 hover:text-blush-400 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blush-400 transition-colors duration-200">
              About
            </Link>
            <Link href="/book" className="text-gray-600 hover:text-blush-400 transition-colors duration-200">
              Contact
            </Link>
          </div>

          <SocialLinks />

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} At First Site Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}