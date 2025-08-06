import { ChevronDown, ChevronRight, ChevronLeft, Rocket, Building, Users, Lightbulb, Target, Zap, Shield, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import { useRef } from "react";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLetsTalk = () => {
    scrollToSection('contact');
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollPartnersLeft = () => {
    const container = document.querySelector('.partners-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollPartnersRight = () => {
    const container = document.querySelector('.partners-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Subtle animated background */}
        <div className="absolute inset-0 z-0">
          {/* Floating orbs animation */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-green/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-purple-500/5 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-brand-green/5 rounded-full animate-pulse delay-3000"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="%23000000" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')`
            }}></div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          {/* Hero Heading */}
          <div className="mb-8">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              <div className="mb-4">OUR MISSION <span className="text-[#3dab38]">AND</span></div>
              <div>YOUR IDEA.</div>
            </h1>
          </div>
          
          {/* Subheading */}
          <div className="max-w-xl mx-auto mb-12">
            <p className="text-xl text-neutral-600 leading-relaxed">
              We believe the best of humanity is yet to come. We invest, create and build at the rich intersection of 
              <span className="font-semibold text-[#3dab38]"> Longevity and Vitality</span>, 
              helping entrepreneurs push the limits of what's humanly possible.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={handleLetsTalk}
              size="lg"
              className="bg-[#3dab38] hover:bg-[#349b33] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 hover:scale-105"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <button 
              onClick={() => scrollToSection('studio')}
              className="text-gray-600 hover:text-[#3dab38] font-medium transition-colors duration-200 underline decoration-2 underline-offset-4 hover:decoration-[#3dab38] flex items-center space-x-2"
            >
              <span>Learn About Our Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce-gentle">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </main>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                Leverage our curated network of highly-skilled entrepreneurs, tenured industry experts, and execution partners to accelerate strategy, raise capital and optimize execution. Tap our advisory services and multi-disciplinary studio to help you build and grow smart and fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section id="studio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6">GO FASTER. OPERATE LEANER.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              404Harmony was built to create a competitive advantage that helps today's start-ups become tomorrow's unicorns with unprecedented speed and efficiency.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-[#3dab38] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">The 404Harmony Studio</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our unique co-founding approach helps founders with ideas seeking a faster and leaner path to bring their ideas to market (MVP) and achieve Product Market Fit.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-[#3dab38] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Fractional Operating Model</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our innovative model enables founders to maintain lean burn rates even as they scale revenue, optimizing efficiency at every stage of growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-[#3dab38] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Expert Network</h3>
                <p className="text-gray-600 leading-relaxed">
                  We incubate and launch ideas while inviting skilled practitioners to join us as we build new ventures and accelerate execution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Why Choose 404Harmony?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage our curated network of highly-skilled entrepreneurs, tenured industry experts, and execution partners to accelerate your success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Accelerate Strategy",
                description: "Fast-track your strategic planning with our proven frameworks and industry expertise."
              },
              {
                icon: Zap,
                title: "Raise Capital",
                description: "Connect with our network of investors and optimize your funding strategy."
              },
              {
                icon: Shield,
                title: "Optimize Execution",
                description: "Streamline operations with our fractional model and expert guidance."
              },
              {
                icon: Lightbulb,
                title: "Advisory Services",
                description: "Access our multi-disciplinary studio for strategic guidance and creative solutions."
              },
              {
                icon: Rocket,
                title: "Build Smart",
                description: "Leverage cutting-edge technology and best practices to build efficiently."
              },
              {
                icon: Users,
                title: "Grow Fast",
                description: "Scale your business with our proven methodologies and expert network."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="w-12 h-12 bg-[#3dab38] rounded-xl mb-4 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Our Clients Section */}
      <section id="clients" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by innovative companies and forward-thinking entrepreneurs who are shaping the future of longevity and vitality.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-center">
            {Array.from({ length: 10 }, (_, i) => (
              <div 
                key={i} 
                className={`aspect-square bg-gray-50 rounded-2xl flex items-center justify-center p-8 hover:scale-105 hover:shadow-lg transition-all duration-500 ease-in-out hover:bg-white border border-gray-100 ${
                  i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
                }`}
              >
                <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-gray-400 text-xs font-medium">CLIENT {i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Come From Section */}
      <section className="py-24 bg-[#3dab38] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-black mb-6">Where We Come From</h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              Our team brings decades of experience from leading organizations across healthcare, technology, and venture capital.
            </p>
          </div>
          
          <div className="relative">
            {/* Left Arrow */}
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
            
            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              {[
                'MetLife', 'Bain & Company', 'Anthem', 'McKinsey & Co', 'Goldman Sachs', 
                'Johnson & Johnson', 'Pfizer', 'Google Health', 'Microsoft', 'Amazon Healthcare'
              ].map((company, i) => (
                <div 
                  key={i}
                  className="flex-shrink-0 w-64 h-32 bg-white rounded-2xl flex items-center justify-center p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="w-full h-16 bg-gray-100 rounded-xl mb-2 flex items-center justify-center">
                      <div className="text-gray-500 text-sm font-semibold">{company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry-leading organizations to accelerate innovation and create lasting impact in the longevity ecosystem.
            </p>
          </div>
          
          <div className="relative">
            {/* Left Arrow */}
            <button 
              onClick={scrollPartnersLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={scrollPartnersRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
            
            {/* Scrollable Container */}
            <div 
              className="partners-container flex overflow-x-auto space-x-8 pb-4 scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              {[
                'Stanford Medicine', 'Harvard T.H. Chan', 'Mayo Clinic', 'Cleveland Clinic', 'Johns Hopkins', 
                'UCSF Health', 'Mount Sinai', 'Kaiser Permanente', 'Partners HealthCare', 'Cedars-Sinai'
              ].map((partner, i) => (
                <div 
                  key={i}
                  className="flex-shrink-0 w-64 h-32 bg-gray-50 rounded-2xl flex items-center justify-center p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100"
                >
                  <div className="text-center">
                    <div className="w-full h-16 bg-gray-100 rounded-xl mb-2 flex items-center justify-center">
                      <div className="text-gray-600 text-sm font-semibold">{partner}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">Ready to Transform Your Idea?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If you're a like-minded entrepreneur with an idea that brings joy, creates security, or enhances active living, let's talk about how we can help you succeed.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#3dab38] mb-2">First Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3dab38] focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3dab38] mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3dab38] focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3dab38] mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3dab38] focus:border-transparent transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3dab38] mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3dab38] focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3dab38] mb-2">Link to your pitch deck</label>
                  <input 
                    type="url" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3dab38] focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3dab38] mb-2">URL for your LinkedIn</label>
                  <input 
                    type="url" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3dab38] focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3dab38] mb-2">What problem are you trying to solve?</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3dab38] focus:border-transparent transition-colors"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-[#3dab38] hover:bg-[#349b33] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-[#3dab38] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">404</span>
                </div>
                <span className="font-heading text-xl font-bold">404Harmony</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Investing, creating, and building at the rich intersection of Longevity and Vitality. 
                Helping entrepreneurs push the limits of what's humanly possible.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-400">Follow us:</span>
                <a 
                  href="https://linkedin.com/company/404harmony" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-[#3dab38] rounded-lg transition-colors duration-300"
                  aria-label="Follow us on LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-300 hover:text-[#3dab38] transition-colors duration-200">Home</a>
                </li>
                <li>
                  <a href="/team" className="text-gray-300 hover:text-[#3dab38] transition-colors duration-200">Our Team</a>
                </li>
                <li>
                  <a href="/news" className="text-gray-300 hover:text-[#3dab38] transition-colors duration-200">News</a>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-[#3dab38] transition-colors duration-200"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#3dab38]" />
                  <span className="text-gray-300">hello@404harmony.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#3dab38]" />
                  <span className="text-gray-300">+1 (555) 404-HARMONY</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#3dab38]" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 404Harmony. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#3dab38] text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#3dab38] text-sm transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
