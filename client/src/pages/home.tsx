import React, { useEffect } from "react";
import { Link } from "wouter";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import LazyServices from "../components/LazyServices";
import LazyGallery from "../components/LazyGallery";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";

interface HomeProps {
  scrollToAbout?: boolean;
  scrollToServices?: boolean;
  scrollToGallery?: boolean;
}

export default function Home({ scrollToAbout, scrollToServices, scrollToGallery }: HomeProps) {
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
    } else if (scrollToGallery) {
      setTimeout(() => {
        const gallerySection = document.querySelector('#gallery');
        gallerySection?.scrollIntoView({ behavior: 'smooth' });
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

  const faqs = [
    {
      question: "Do you travel to my location?",
      answer: "Yes! We are a 100% on-location beauty service. We travel throughout the Pacific Northwest, including Oregon and Washington, to bring luxury bridal hair and makeup directly to your venue or getting-ready location."
    },
    {
      question: "What is a Bridal Design Session?",
      answer: "Our Bridal Design Session is more than just a trial. It's a comprehensive experience in our private suite where we design, test, and perfect your look. We include a 6-hour wear test with photo feedback to ensure absolute wedding-day perfection."
    },
    {
      question: "Can you accommodate large bridal parties?",
      answer: "Absolutely. Our network of certified artists, trained through Cedars Academy of Makeup Artistry, allows us to handle bridal parties of any size while maintaining a cohesive, high-end look for everyone."
    },
    {
      question: "Do you offer other beauty services?",
      answer: "Yes, in addition to bridal hair and makeup, we offer professional teeth whitening and spray tanning services to ensure you have a complete wedding-day glow."
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHead
        title="At First Site Beauty | Luxury Bridal Hair & Makeup PNW"
        description="Luxury on-location bridal hair and makeup services in the Pacific Northwest. Expertise, elegance, and ease for your wedding day. Serving Oregon & Washington."
        path="/"
        pageType={scrollToGallery ? 'services' : 'home'}
        faqs={faqs}
      />
      <Header />
      <Hero />

      <About />
      <Testimonials />
      <LazyServices />
      {/* Booking CTA between Services and Gallery */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <Link href="/book">
            <a className="premium-button sparkle-button inline-block text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium luxury-hover shadow-lg touch-manipulation">
              <div className="sparkle">✦</div>
              <div className="sparkle">✦</div>
              <div className="sparkle">✦</div>
              <div className="sparkle">✦</div>
              <div className="sparkle">✦</div>
              Book Your Design Session
            </a>
          </Link>
        </div>
      </section>
      <LazyGallery />
      {/* Booking CTA before main Booking section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <Link href="/book">
            <a className="premium-button sparkle-button inline-block text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium luxury-hover shadow-lg touch-manipulation">
              <div className="sparkle">✦</div>
              <div className="sparkle">✦</div>
              <div className="sparkle">✦</div>
              <div className="sparkle">✦</div>
              <div className="sparkle">✦</div>
              Book Your Design Session
            </a>
          </Link>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <Booking />
      <Footer />
    </div>
  );
}