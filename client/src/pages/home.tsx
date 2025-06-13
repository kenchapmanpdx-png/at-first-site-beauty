import React from 'react'
import { ArrowRight } from 'lucide-react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* NEW BRIDAL DESIGN SESSION CONTENT */}
      <section className="py-28 bg-gradient-to-br from-gradient-from to-gradient-to">
        <div className="container mx-auto px-4">
          {/* Headline Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900">
              Where Your Dream Look Begins.<br />
              <span className="text-primary-accent italic">Your Look, Locked In.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              You deserve to feel radiant, relaxed, and ready the moment you walk down the aisle—our design session ensures exactly that.
            </p>
            <div className="bg-primary-accent/10 inline-block px-8 py-4 rounded-full mb-8">
              <strong>Personalized Touch-Up Kit Included</strong> to keep your look radiant from "I do" to your last dance.
            </div>
            
            {/* Image Section moved here */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <img src="/assets/bridal-makeup-1.jpg" alt="Makeup in action" className="w-full h-64 object-cover rounded-xl shadow-lg" />
              <img src="/assets/bridal-back-hair.jpg" alt="Bridal hair design" className="w-full h-64 object-cover rounded-xl shadow-lg" />
              <img src="/assets/bridal-glam.jpg" alt="Final glam touch" className="w-full h-64 object-cover rounded-xl shadow-lg" />
            </div>
            <p className="text-gray-500 italic mb-8">Real brides. Real transformations.</p>
            
            <button
              onClick={() => window.open('https://calendly.com/atfirstsightbeauty/bridal-design', '_blank')}
              className="bg-gradient-to-r from-primary-light to-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Schedule Your Design Session
              <ArrowRight size={20} />
            </button>
          </div>

          {/* The Complete Design Experience */}
          <div className="bg-gray-50 py-16 rounded-3xl mb-16">
            <div className="max-w-4xl mx-auto text-center px-8">
              <h2 className="text-3xl font-bold mb-8">The Complete Design Experience</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Our professionally trained artists collaborate with you in a relaxed, private suite. From texture to tone, structure to finish—we refine every detail so your look is timeless and completely you.<br /><br />
                But it doesn't end there. You'll wear your look for 8+ hours with check-in photos to ensure it lasts, feels great, and photographs beautifully. This feedback lets us tune the final version for flawless wedding day execution.
              </p>
            </div>
          </div>

          {/* Design Session Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Your Design Session Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-primary-accent mb-4">1. Consultation & Vision</h3>
                <p className="text-gray-600">Together, we'll co-create your dream bridal look—refining every detail of your vision with care and intention.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-primary-accent mb-4">2. Design & Creation</h3>
                <p className="text-gray-600">We craft your look, apply your glam, and make real-time adjustments. No guesswork. Just beautiful, tested perfection.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-primary-accent mb-4">3. Wear Test & Documentation</h3>
                <p className="text-gray-600">You'll wear the look for 8+ hours and send photos back. We note how it lasts, reflects light, and performs under real conditions.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-primary-accent mb-4">4. Perfection & Lock-In</h3>
                <p className="text-gray-600">Final refinements are made so you feel nothing but confident when the big day arrives.</p>
              </div>
            </div>
            
            {/* Detailed Process Description */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-xl max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                Here, our professionally trained artists collaborate with you in a relaxed, attentive setting to co-create your bridal look. You'll sit with one of our expert stylists to walk through every detail of your vision—from the texture, tone, and shape of your hairstyle to the glow, finish, and feature-enhancing artistry of your makeup.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                Your comfort is everything. This is your moment to explore styles, give feedback, and make changes—nothing's off limits. Our goal? That you leave glowing with confidence, knowing your wedding day look is completely dialed in.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                <strong>But it doesn't end there.</strong>
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Once your look is finalized, we ask you to wear it for at least six hours. Every two hours, you'll take a quick photo—in natural light and with flash—to show us how it holds up throughout the day. This feedback lets us fine-tune each detail so that when we arrive on your wedding day, we're not guessing—we're executing a proven, perfected look with calm precision.
              </p>
            </div>
          </div>

          {/* Pro Tips Section */}
          <div className="bg-gray-50 py-16 rounded-3xl mb-16">
            <div className="max-w-6xl mx-auto px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Insider Tips for a Flawless Day</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-primary-accent mb-3">More is More (in Photos)</h4>
                  <p className="text-gray-600">Cameras tone down color, so we often go bolder than you'd wear day-to-day—it translates beautifully on film.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-primary-accent mb-3">Lashes are a Must</h4>
                  <p className="text-gray-600">They open the eyes and elevate every look—soft or full-glam.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-primary-accent mb-3">Wear White to Your Session</h4>
                  <p className="text-gray-600">Helps ensure your trial makeup doesn't clash with your gown tone.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-primary-accent mb-3">Trust the Wear Test</h4>
                  <p className="text-gray-600">It's our secret weapon—so your final look is more than pretty. It's proven.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Investment & Pricing</h2>
            <p className="text-gray-600 mb-12">Transparent pricing for peace of mind.</p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              <div className="bg-gradient-to-br from-primary-light to-primary-dark text-white p-8 rounded-xl min-w-64">
                <h3 className="text-4xl font-bold mb-2">$650</h3>
                <p>January – April<br /><small>Off-season pricing</small></p>
              </div>
              <div className="bg-gradient-to-br from-primary-light to-primary-dark text-white p-8 rounded-xl min-w-64">
                <h3 className="text-4xl font-bold mb-2">$750</h3>
                <p>May – December<br /><small>Peak season pricing</small></p>
              </div>
            </div>
            <div className="max-w-lg mx-auto text-left">
              <ul className="space-y-3">
                <li className="flex items-center text-lg">
                  <span className="text-green-600 mr-3">✔️</span>
                  Complete hair and makeup trial session
                </li>
                <li className="flex items-center text-lg">
                  <span className="text-green-600 mr-3">✔️</span>
                  Personalized consultation & wear test
                </li>
                <li className="flex items-center text-lg">
                  <span className="text-green-600 mr-3">✔️</span>
                  Personalized touch-up kit for wedding day
                </li>
                <li className="flex items-center text-lg">
                  <span className="text-green-600 mr-3">✔️</span>
                  Private bridal suite experience
                </li>
              </ul>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="bg-gray-800 text-white py-16 rounded-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Design Your Perfect Bridal Look?</h2>
            <p className="text-lg mb-8 opacity-90">
              Book your Bridal Hair & Makeup Design Session at our private bridal suite in downtown Vancouver, Washington.
            </p>
            <button
              onClick={() => window.open('https://calendly.com/atfirstsightbeauty/bridal-design', '_blank')}
              className="bg-gradient-to-r from-primary-light to-primary-dark text-white px-12 py-4 rounded-full font-semibold text-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Schedule Your Design Session
              <ArrowRight size={24} />
            </button>
            <p className="text-sm mt-4 opacity-70">
              📍 Private bridal suite • VATA Salon • Downtown Vancouver, WA
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}