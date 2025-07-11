import React from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import PageHead from "../components/PageHead";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <>
      <PageHead 
        title="Page Not Found | At First Site Beauty"
        description="The page you're looking for cannot be found. Return to At First Site Beauty's home page to explore our luxury bridal hair and makeup services."
        path="/404"
      />

      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blush-50 to-gray-100 px-4">
        <div className="w-full max-w-lg mx-4 bg-white rounded-lg shadow-2xl border-0">
          <div className="pt-8 pb-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blush-100 p-4 rounded-full">
                <AlertCircle className="h-12 w-12 text-blush-500" />
              </div>
            </div>

            <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We couldn't find the page you're looking for. It may have been moved or doesn't exist.
            </p>

            <div className="space-y-3">
              <Button 
                onClick={() => setLocation('/')}
                className="w-full bg-gradient-to-r from-blush-400 to-blush-500 hover:from-blush-500 hover:to-blush-600 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Home className="mr-2 h-5 w-5" />
                Return to Home
              </Button>

              <Button 
                variant="outline"
                onClick={() => window.history.back()}
                className="w-full border-blush-300 text-blush-600 hover:bg-blush-50 font-medium py-3 px-6 rounded-xl transition-all duration-300"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                Looking for our services?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setLocation('/bridal-design-session')}
                  className="text-blush-600 hover:bg-blush-50 text-sm justify-start"
                >
                  💍 Bridal Design Session
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setLocation('/bridal-party')}
                  className="text-blush-600 hover:bg-blush-50 text-sm justify-start"
                >
                  👰 Bridal Party Services
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setLocation('/spray-tanning')}
                  className="text-blush-600 hover:bg-blush-50 text-sm justify-start"
                >
                  ☀️ Spray Tanning
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setLocation('/teeth-whitening')}
                  className="text-blush-600 hover:bg-blush-50 text-sm justify-start"
                >
                  ✨ Teeth Whitening
                </Button>
              </div>
              
              <div className="bg-blush-50 rounded-lg p-4 mb-4">
                <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  We're here to help you find exactly what you're looking for.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setLocation('/book')}
                    className="border-blush-300 text-blush-600 hover:bg-blush-50"
                  >
                    📞 Book Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.location.href = 'mailto:hello@atfirstsitebeauty.com'}
                    className="border-blush-300 text-blush-600 hover:bg-blush-50"
                  >
                    ✉️ Contact Us
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-2">
                  Popular searches:
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">Wedding Hair</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">Bridal Makeup</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">Beauty Services</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">Mobile Beauty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}