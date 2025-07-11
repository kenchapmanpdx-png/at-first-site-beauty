import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import LazyServices from "../components/LazyServices";
import LazyGallery from "../components/LazyGallery";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";
import Testimonials from "../components/Testimonials";

interface HomeProps {
  scrollToAbout?: boolean;
  scrollToServices?: boolean;
}

export default function Home({ scrollToAbout, scrollToServices }: HomeProps) {
  useEffect(() => {
    // Handle scrolling to specific sections based on route props
    if (scrollToAbout) {
      setTimeout(() => {
        const aboutSection = document.querySelector('#about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (scrollToServices) {
      setTimeout(() => {
        const servicesSection = document.querySelector('#services');
        servicesSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    // Temporarily disable all AOS animations while testing
    if (typeof window !== 'undefined') {
      // AOS.init({
      //   duration: 800,
      //   easing: 'ease-in-out',
      //   once: true,
      //   offset: 120,
      //   delay: 100
      // });
    }
  }, [scrollToAbout, scrollToServices]);

  return (
    <div className="min-h-screen">
      <PageHead 
        title="At First Site Beauty | On-Location Bridal Hair & Makeup – PNW"
        description="Luxury bridal hair and makeup services across Oregon and Washington. Professional on-site glam for your special day."
        path="/"
        pageType={scrollToAbout ? 'about' : scrollToServices ? 'services' : 'home'}
      />
      <Header />
      <Hero />

      <About />
      <LazyServices />
      {/* Booking CTA between Services and Gallery */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <button
            onClick={() => window.location.href = '/book'}
            className="premium-button sparkle-button text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium luxury-hover shadow-lg touch-manipulation"
          >
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            Book Your Design Session
          </button>
        </div>
      </section>
      <LazyGallery />
      <Testimonials />
      {/* Booking CTA before main Booking section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <button
            onClick={() => window.location.href = '/book'}
            className="premium-button sparkle-button text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium luxury-hover shadow-lg touch-manipulation"
          >
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            Book Your Design Session
          </button>
        </div>
      </section>
      <Booking />
      <Footer />
    </div>
  );
}