import React, { useState } from 'react';
import { Cog, Lightbulb, TrendingUp, Menu, X, DollarSign, Users, Zap, Globe, Shield, CheckCircle } from 'lucide-react';

export default function ADNWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xgvglnqy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(''), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
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
              Powered by Talent. Focused on Your Growth.
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
            At ADN Global Solutions, we provide U.S. and international companies with reliable, high‑communication remote professionals — across admin, support, tech, marketing, back‑office, and specialized roles — fully managed under one simple contract.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-yellow-600">WHAT WE OFFER</h3>
          <p className="text-xl text-gray-400 text-center mb-16">Complete Workforce Solutions</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Flexible Staffing */}
            <div className="border border-gray-700 p-6 hover:border-yellow-600 transition-all duration-300">
              <Users className="text-yellow-600 mb-4" size={48} />
              <h4 className="text-xl font-bold mb-3">Flexible Staffing & Outsourcing</h4>
              <p className="text-gray-400 text-sm">
                Whether you need a single assistant or an entire remote team, we staff any role — from entry‑level virtual assistants to senior developers, AI engineers, and specialized talent.
              </p>
            </div>

            {/* Talent Management */}
            <div className="border border-gray-700 p-6 hover:border-yellow-600 transition-all duration-300">
              <Cog className="text-yellow-600 mb-4" size={48} />
              <h4 className="text-xl font-bold mb-3">End‑to‑End Talent Management</h4>
              <p className="text-gray-400 text-sm">
                We handle recruiting, vetting, hiring, payroll, HR administration, time‑zone alignment, performance monitoring, and replacement guarantee. You simply get results.
              </p>
            </div>

            {/* Cost-Optimized */}
            <div className="border border-gray-700 p-6 hover:border-yellow-600 transition-all duration-300">
              <DollarSign className="text-yellow-600 mb-4" size={48} />
              <h4 className="text-xl font-bold mb-3">Cost‑Optimized Remote Talent</h4>
              <p className="text-gray-400 text-sm">
                Cut hiring costs by 40–70% compared to U.S. hires. Get access to global talent without compromising on quality — ideal for scaling without inflating payroll.
              </p>
            </div>

            {/* Speed & Scalability */}
            <div className="border border-gray-700 p-6 hover:border-yellow-600 transition-all duration-300">
              <Zap className="text-yellow-600 mb-4" size={48} />
              <h4 className="text-xl font-bold mb-3">Speed & Scalability</h4>
              <p className="text-gray-400 text-sm">
                Need staff quickly? We deliver pre‑vetted candidates in as little as 48 hours. As your needs grow, we scale with you.
              </p>
            </div>

            {/* Global Reach */}
            <div className="border border-gray-700 p-6 hover:border-yellow-600 transition-all duration-300">
              <Globe className="text-yellow-600 mb-4" size={48} />
              <h4 className="text-xl font-bold mb-3">Global Reach, Unified Management</h4>
              <p className="text-gray-400 text-sm">
                Our global talent network (Asia, LATAM, Africa, Eastern Europe) gives you access to a vast pool of qualified professionals. We manage them under one U.S.-registered LLC.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="border border-gray-700 p-6 hover:border-yellow-600 transition-all duration-300">
              <Shield className="text-yellow-600 mb-4" size={48} />
              <h4 className="text-xl font-bold mb-3">Transparent & Predictable Pricing</h4>
              <p className="text-gray-400 text-sm">
                Flat monthly rates, clear cost savings, no hidden fees, and full control over labor costs — so you can budget with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ADN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center text-yellow-600">Why Choose ADN</h3>
          <p className="text-xl text-center text-gray-400 mb-12">Instead of Traditional Staffing Agencies</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded">
                <h4 className="text-lg font-bold mb-4 text-red-400">Traditional / On‑Prem Staffing</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• High payroll + benefits costs</li>
                  <li>• Long hiring cycles, local limitations</li>
                  <li>• Separate HR, payroll, management systems</li>
                  <li>• Limited talent pool / local hires only</li>
                  <li>• High overhead & fixed costs</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 p-6 rounded border border-yellow-600">
                <h4 className="text-lg font-bold mb-4 text-yellow-400">ADN Global Solutions</h4>
                <ul className="space-y-2 text-gray-200 text-sm">
                  <li className="flex items-start"><CheckCircle size={16} className="text-green-400 mr-2 mt-1 flex-shrink-0" /> Save 40–70% on labor costs</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-green-400 mr-2 mt-1 flex-shrink-0" /> Hire remote talent globally; scale fast</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-green-400 mr-2 mt-1 flex-shrink-0" /> All-in-one staffing + HR + payroll + compliance</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-green-400 mr-2 mt-1 flex-shrink-0" /> Global talent pool: admin → tech → AI</li>
                  <li className="flex items-start"><CheckCircle size={16} className="text-green-400 mr-2 mt-1 flex-shrink-0" /> Pay only for what you need, when you need it</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services - Roles */}
      <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-yellow-600">OUR SERVICES</h3>
          <p className="text-xl text-gray-400 text-center mb-16">Full Spectrum of Remote Roles</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-900 border border-gray-700 p-6 hover:border-yellow-600 transition">
              <h4 className="font-bold mb-2 text-yellow-500">Admin & Support</h4>
              <p className="text-sm text-gray-400">Virtual Assistants, Executive Assistants</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6 hover:border-yellow-600 transition">
              <h4 className="font-bold mb-2 text-yellow-500">Customer Success</h4>
              <p className="text-sm text-gray-400">Customer Support, Client Success, Help‑Desk</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6 hover:border-yellow-600 transition">
              <h4 className="font-bold mb-2 text-yellow-500">Sales</h4>
              <p className="text-sm text-gray-400">Sales Support, SDR, Appointment Setting, Sales Ops</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6 hover:border-yellow-600 transition">
              <h4 className="font-bold mb-2 text-yellow-500">Marketing & Creative</h4>
              <p className="text-sm text-gray-400">Social Media, Content, Design, SEO, Digital Marketing</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6 hover:border-yellow-600 transition">
              <h4 className="font-bold mb-2 text-yellow-500">Finance & Accounting</h4>
              <p className="text-sm text-gray-400">Bookkeepers, Payroll Assistants, Financial Ops</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6 hover:border-yellow-600 transition">
              <h4 className="font-bold mb-2 text-yellow-500">Tech & Development</h4>
              <p className="text-sm text-gray-400">Web Developers, Software Engineers, QA, DevOps</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6 hover:border-yellow-600 transition">
              <h4 className="font-bold mb-2 text-yellow-500">Advanced / Specialized</h4>
              <p className="text-sm text-gray-400">AI & ML Engineers, Data Scientists, Cloud Support</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6 hover:border-yellow-600 transition">
              <h4 className="font-bold mb-2 text-yellow-500">Back-Office</h4>
              <p className="text-sm text-gray-400">Business Support, Ops, Logistics, HR Assistants</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6 hover:border-yellow-600 transition border-2">
              <h4 className="font-bold mb-2 text-yellow-500">Custom Roles</h4>
              <p className="text-sm text-gray-400">Don't see your role? Just ask — we recruit for any remote position</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center text-yellow-600">How ADN Works</h3>
          <p className="text-xl text-center text-gray-400 mb-16">Simple 3‑Step Process</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-yellow-600 text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h4 className="text-xl font-bold mb-3">You Tell Us Who You Need</h4>
              <p className="text-gray-400">Describe the role, skills, experience level, and workload.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h4 className="text-xl font-bold mb-3">We Source, Vet & Onboard</h4>
              <p className="text-gray-400">We draw from our global talent pool, test English and skills, and present 2–3 highly qualified candidates.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h4 className="text-xl font-bold mb-3">You Select — We Handle the Rest</h4>
              <p className="text-gray-400">We manage payroll, HR compliance, performance tracking, and guarantee replacements if needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Savings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 text-yellow-600">Transparent Savings & Value</h3>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">With ADN, companies typically see:</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-900/20 to-transparent p-6 rounded border border-yellow-600/30">
              <div className="text-4xl mb-3">💡</div>
              <h4 className="font-bold text-xl mb-2">40–70% Cost Reduction</h4>
              <p className="text-gray-400 text-sm">Compared to hiring locally</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-transparent p-6 rounded border border-yellow-600/30">
              <div className="text-4xl mb-3">🕒</div>
              <h4 className="font-bold text-xl mb-2">Faster Hiring Cycles</h4>
              <p className="text-gray-400 text-sm">Get resources in days, not months</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-transparent p-6 rounded border border-yellow-600/30">
              <div className="text-4xl mb-3">📈</div>
              <h4 className="font-bold text-xl mb-2">Scalable Workforce</h4>
              <p className="text-gray-400 text-sm">Add or remove roles as needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center text-yellow-600">Trust, Compliance & Peace of Mind</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <Shield className="text-yellow-600 mx-auto mb-4" size={48} />
              <h4 className="font-bold mb-2">U.S.-Registered LLC</h4>
              <p className="text-sm text-gray-400">Wyoming-based for legitimacy</p>
            </div>

            <div className="text-center p-6">
              <Globe className="text-yellow-600 mx-auto mb-4" size={48} />
              <h4 className="font-bold mb-2">Global Talent</h4>
              <p className="text-sm text-gray-400">Vetted, managed, supported</p>
            </div>

            <div className="text-center p-6">
              <CheckCircle className="text-yellow-600 mx-auto mb-4" size={48} />
              <h4 className="font-bold mb-2">Clear Contracts</h4>
              <p className="text-sm text-gray-400">Monthly billing, full transparency</p>
            </div>

            <div className="text-center p-6">
              <Lightbulb className="text-yellow-600 mx-auto mb-4" size={48} />
              <h4 className="font-bold mb-2">Data Protection</h4>
              <p className="text-sm text-gray-400">Confidentiality assured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-yellow-600">READY TO GROW SMARTER?</h3>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Whether you're a small startup, a growing agency, or an established enterprise — ADN Global Solutions offers a smarter, leaner way to build your team.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-700 px-4 py-3 focus:border-yellow-600 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-700 px-4 py-3 focus:border-yellow-600 focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 px-4 py-3 focus:border-yellow-600 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-transparent border border-gray-700 px-4 py-3 focus:border-yellow-600 focus:outline-none"
              />
              <button
                type="submit"
                disabled={submitStatus === 'sending'}
                className="bg-yellow-700 hover:bg-yellow-600 text-white px-8 py-3 rounded transition-colors font-semibold disabled:opacity-50"
              >
                {submitStatus === 'sending' ? 'SENDING...' : 'GET IN TOUCH'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm">✓ Message sent successfully! We'll be in touch!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm">✗ Failed to send. Please try again.</p>
              )}
            </form>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl mb-4">Get Started Today</h4>
              <p className="text-gray-400 mb-6">
                Fill out the form and we'll get back to you within 24 hours to discuss your staffing needs.
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-yellow-500 mb-1">Email</h5>
                  <a href="mailto:Info@adnglobalsolutions.com" className="text-gray-300 hover:text-yellow-500">
                    Info@adnglobalsolutions.com
                  </a>
                </div>
              </div>
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