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
              <p className="text-sm text-gray-500 mb-3">
                Looking for our services?
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setLocation('/bridal-design-session')}
                  className="text-blush-600 hover:bg-blush-50 text-sm"
                >
                  Bridal Design Session
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setLocation('/bridal-party')}
                  className="text-blush-600 hover:bg-blush-50 text-sm"
                >
                  Bridal Party Services
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setLocation('/book')}
                  className="text-blush-600 hover:bg-blush-50 text-sm"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}