import { useState } from "react";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function Inspiration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Green Top Section */}
      <div style={{ backgroundColor: "#3dab38" }} className="pt-20 pb-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto py-12 text-center">
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IDEA OF THE DAY
            </h1>
            
            {/* Star Icon */}
            <div className="mb-6">
              <svg className="w-8 h-8 mx-auto text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            
            {/* Description */}
            <p className="text-base md:text-lg text-black mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our newsletter for a steady stream of ideas curated by 404Harmony to help people live longer, fuller 
              lives. From creative business concepts to problem-solving strategies, it's all here. Start turning concepts 
              into reality!
            </p>
            
            {/* Bold Quote Section */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-relaxed mb-4">
                AI-powered grief companion that chats,<br />
                preserves memories, and helps you<br />
                process emotions
              </h2>
              <p className="text-black font-medium">
                The world needs it. Be the one to build it!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* White Bottom Section with Form */}
      <div className="bg-white py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: "#3dab38" }}>
              JOIN FOR FREE
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="Add your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full rounded-full px-4 py-3 border border-gray-300 focus:border-[#3dab38] focus:ring-[#3dab38]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full rounded-full px-4 py-3 border border-gray-300 focus:border-[#3dab38] focus:ring-[#3dab38]"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-full px-4 py-3 border border-gray-300 focus:border-[#3dab38] focus:ring-[#3dab38]"
                  required
                />
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="rounded-full px-8 py-3 font-semibold text-white"
                  style={{ backgroundColor: "#3dab38" }}
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Black Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo Section */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                  <span className="font-bold text-lg text-black">4H</span>
                </div>
                <span className="text-xl font-bold">404Harmony</span>
              </div>
            </div>
            
            {/* Menu Section */}
            <div className="text-center">
              <h3 className="text-lg font-bold mb-4">MENU</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/" 
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="/team" 
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a 
                    href="/news" 
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    News
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.href = '/#contact';
                      }
                    }}
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Socials Section */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-4">SOCIALS</h3>
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                <a 
                  href="#" 
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-400">© 2024 404Harmony</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}