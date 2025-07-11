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
            <a
              href="#"
              className="text-gray-600 hover:text-blush-400 transition-colors duration-200"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blush-400 transition-colors duration-200"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blush-400 transition-colors duration-200"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>

          <SocialLinks />

          <p className="text-gray-500 text-sm">
            © 2024 At First Site Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}