import { FaInstagram, FaPinterest } from "react-icons/fa";

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

          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="#"
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blush-300 hover:text-white transition-colors duration-200"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blush-300 hover:text-white transition-colors duration-200"
              rel="noopener noreferrer"
            >
              <FaPinterest size={20} />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2024 At First Site Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}