export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">
              At First Sight Beauty On Location
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Creating unforgettable bridal experiences throughout the Pacific Northwest.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-primary-light transition-colors duration-300"
                >
                  Bridal Hair & Makeup
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-primary-light transition-colors duration-300"
                >
                  Bridal Party Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-primary-light transition-colors duration-300"
                >
                  Teeth Whitening
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-primary-light transition-colors duration-300"
                >
                  Spray Tanning
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Phone: +1 (XXX) XXX-XXXX</p>
              <p>Email: info@atfirstsightbeauty.com</p>
              <p>Serving: Pacific Northwest</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 At First Sight Beauty On Location. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}