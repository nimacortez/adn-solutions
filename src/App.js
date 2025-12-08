import React, { useState } from 'react';
import { Cog, Lightbulb, TrendingUp, Mail, Menu, X } from 'lucide-react';

export default function ADNWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - connect to a backend to make it functional)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold">ADN</h1>
              <span className="text-xs text-gray-400 ml-2">Global Solutions</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-yellow-600 transition">HOME</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-yellow-600 transition">ABOUT</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-yellow-600 transition">SERVICES</button>
              <button onClick={() => scrollToSection('roles')} className="hover:text-yellow-600 transition">ROLES</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-600 transition">CONTACT</button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-yellow-600">HOME</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-yellow-600">ABOUT</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left hover:text-yellow-600">SERVICES</button>
              <button onClick={() => scrollToSection('roles')} className="block w-full text-left hover:text-yellow-600">ROLES</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-yellow-600">CONTACT</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              ADN GLOBAL<br />SOLUTIONS
            </h2>
            <p className="text-2xl sm:text-3xl text-gray-300 mb-8">
              Innovative Staffing and Consulting
            </p>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-yellow-700 hover:bg-yellow-600 text-white px-8 py-3 rounded transition-colors font-semibold"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">ABOUT US</h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto text-center leading-relaxed">
            ADN Global Solutions is a premier staffing and consulting firm dedicated to connecting 
            exceptional talent with leading organizations. We specialize in innovative workforce 
            solutions across multiple industries, delivering excellence through our comprehensive 
            services and deep industry expertise.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-yellow-600">SERVICES</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Staffing Solutions */}
            <div className="border border-gray-700 p-8 hover:border-yellow-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <Cog size={64} className="text-yellow-600" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-center">Staffing Solutions</h4>
              <p className="text-gray-400 text-center">
                Prolific coordinating expediting and scout automodulations.
              </p>
            </div>

            {/* Consulting Services */}
            <div className="border border-gray-700 p-8 hover:border-yellow-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <Lightbulb size={64} className="text-yellow-600" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-center">Consulting Services</h4>
              <p className="text-gray-400 text-center">
                Provide constant shore celebrating and evasive grant assistance.
              </p>
            </div>

            {/* Managed Services */}
            <div className="border border-gray-700 p-8 hover:border-yellow-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <TrendingUp size={64} className="text-yellow-600" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-center">Managed Services</h4>
              <p className="text-gray-400 text-center">
                Expendatures and communication dependencies provide analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-yellow-600">ROLES</h3>
          
          <div className="border border-gray-700 p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Engineering */}
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">Engineering</h4>
                <p className="text-gray-400 text-sm">
                  Provide receptance and ongoing tolerancing.
                </p>
              </div>

              {/* Technology */}
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">Technology</h4>
                <p className="text-gray-400 text-sm">
                  Expertise computational prioritizing services.
                </p>
              </div>

              {/* Finance */}
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">Finance</h4>
                <p className="text-gray-400 text-sm">
                  Provide reasoned and trusting allocations.
                </p>
              </div>

              {/* Healthcare */}
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">Healthcare</h4>
                <p className="text-gray-400 text-sm">
                  Expert compliant and playactable envisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-yellow-600">CONTACT US</h3>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left Form */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 px-4 py-3 mb-4 focus:border-yellow-600 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 px-4 py-3 mb-4 focus:border-yellow-600 focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 px-4 py-3 focus:border-yellow-600 focus:outline-none"
              />
            </div>

            {/* Right Form */}
            <div>
              <h4 className="text-xl mb-4">Send Message</h4>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border border-gray-700 px-4 py-3 mb-4 focus:border-yellow-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-gray-700 px-4 py-3 mb-6 focus:border-yellow-600 focus:outline-none"
              />
              <button
                onClick={handleSubmit}
                className="bg-yellow-700 hover:bg-yellow-600 text-white px-8 py-3 rounded transition-colors font-semibold"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 ADN Global Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}