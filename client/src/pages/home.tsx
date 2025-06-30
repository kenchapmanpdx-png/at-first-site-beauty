import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";

interface HomeProps {
  scrollToAbout?: boolean;
  scrollToServices?: boolean;
}

export default function Home({ scrollToAbout, scrollToServices }: HomeProps) {
  useEffect(() => {
    // Handle scrolling to specific sections based on route
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
        title="Luxury Bridal Hair & Makeup | Pacific Northwest | At First Site Beauty"
        description="Professional on-location bridal hair and makeup services in the Pacific Northwest. Expert bridal styling, teeth whitening, and spray tanning by award-winning artists with 30+ years combined experience."
        path="/"
        ogImage="/attached_assets/IMG_0970_1749066905982.png"
        pageType={scrollToAbout ? "about" : scrollToServices ? "services" : "home"}
      />
      <Header />
      <Hero />
      <About />
      <Services />
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
      <Gallery />
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