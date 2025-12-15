import React, { useState } from 'react';
import { Cog, Lightbulb, TrendingUp, Menu, X, DollarSign, Users, Zap, Globe, Shield, CheckCircle } from 'lucide-react';
import FAQ from './FAQ';
import Terms from './TermsAndConditions';
import About from './About';
import Footer from './Footer';
import ClientIntake from './ClientIntake';

export default function ADNWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
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
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setMobileMenuOpen(false);
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
    if (page === 'privacy') {
      window.location.hash = '#/privacy';
    } else if (page === 'faq') {
      window.location.hash = '#/faq';
    } else if (page === 'terms') {
      window.location.hash = '#/terms';
    } else if (page === 'about-page') {
      window.location.hash = '#/about';
    } else {
      window.location.hash = '';
    }
  };

// Check URL on mount
React.useEffect(() => {
  const hash = window.location.hash;
  if (hash === '#/privacy') {
    setCurrentPage('privacy');
  } else if (hash === '#/faq') {
    setCurrentPage('faq');
  } else if (hash === '#/terms') {
    setCurrentPage('terms');
  } else if (hash === '#/about') {
    setCurrentPage('about-page');
  }
  
  const handleHashChange = () => {
    const newHash = window.location.hash;
    if (newHash === '#/privacy') {
      setCurrentPage('privacy');
    } else if (newHash === '#/faq') {
      setCurrentPage('faq');
    } else if (newHash === '#/terms') {
      setCurrentPage('terms');
    } else if (newHash === '#/about') {
      setCurrentPage('about-page');
    } else {
      setCurrentPage('home');
    }
  };
  
  window.addEventListener('hashchange', handleHashChange);
  return () => window.removeEventListener('hashchange', handleHashChange);
}, []);

  // Privacy Policy Page Component
  const PrivacyPage = () => (
    <div className="bg-black text-white min-h-screen">
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer" onClick={() => navigateToPage('home')}>
              <h1 className="text-3xl font-bold">ADN</h1>
              <span className="text-xs text-gray-400 ml-2">Global Solutions</span>
            </div>
            <button onClick={() => navigateToPage('home')} className="text-yellow-600 hover:text-yellow-500">
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: December 12, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us when you use our services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company information</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Communicate with you about products, services, and events</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing and Data Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in our operations</li>
              </ul>
              <p className="mt-4 font-semibold text-yellow-500">
                Customer data is not shared with 3rd parties for promotional or marketing purposes.
              </p>
              <p className="mt-2 font-semibold text-yellow-500">
                Mobile opt-in and consent are never shared with anyone for any purpose. Any information sharing that may be mentioned elsewhere in this policy excludes mobile opt-in data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. SMS/Text Messaging Terms and Conditions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">Opt-In</h3>
                  <p>
                    If you would like to receive informational text message communications from ADN Global Solutions LLC, from +1(888) 826-8781, you can sign up by texting <strong>ADN</strong> to <strong>+1(888) 826-8781</strong>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">Consent and Message Details</h3>
                  <p>
                    By providing your phone number and agreeing to receive texts, you consent to receive text messages from ADN Global Solutions LLC, from 888 826 8781 regarding account notifications, customer care, and higher education. Consent is not a condition of purchase. Message frequency varies. Message & data rates may apply.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">Opt-Out and Help</h3>
                  <p>
                    You can reply <strong>STOP</strong> to unsubscribe at any time or <strong>HELP</strong> for assistance. You can also contact us at 888 826 8781 or <a href="mailto:Info@adnglobalsolutions.com" className="text-yellow-600 hover:text-yellow-500">Info@adnglobalsolutions.com</a>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">Data Protection</h3>
                  <p className="font-semibold">
                    Mobile opt-in information is never shared with third parties.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                <a href="mailto:Info@adnglobalsolutions.com" className="text-yellow-600 hover:text-yellow-500">
                  Info@adnglobalsolutions.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer onNavigate={navigateToPage} />
    </div>
  );

  // Check current page and render appropriate component
  if (currentPage === 'privacy') {
    return <PrivacyPage />;
  }

  if (currentPage === 'faq') {
    return <FAQ onNavigateHome={() => navigateToPage('home')} navigateToPage={navigateToPage} />;
  }

  if (currentPage === 'terms') {
    return <Terms onNavigateHome={() => navigateToPage('home')} navigateToPage={navigateToPage} />;
  }

  if (currentPage === 'about-page') {
    return <About onNavigateHome={() => navigateToPage('home')} navigateToPage={navigateToPage} />;
  }

  if (currentPage === 'clientintake') {
    return <ClientIntake onNavigateHome={() => navigateToPage('home')} navigateToPage={navigateToPage} />;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src="/main_logo.jpeg" alt="ADN Logo" className="h-12 w-12 rounded" />
              <div>
                <h1 className="text-3xl font-bold">ADN</h1>
                <span className="text-xs text-gray-400">Global Solutions</span>
              </div>
            </div>
            
          {/* Navigation */}
          <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                      <div className="flex items-center gap-3">
                        <img src="/main_logo.jpeg" alt="ADN Logo" className="h-12 w-12 rounded" />
                        <div>
                          <h1 className="text-3xl font-bold">ADN</h1>
                          <span className="text-xs text-gray-400">Global Solutions</span>
                        </div>
                      </div>
            
            {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
                      <button onClick={() => scrollToSection('home')} className="hover:text-yellow-600 transition">HOME</button>
                      <button onClick={() => scrollToSection('about')} className="hover:text-yellow-600 transition">ABOUT</button>
                      <button onClick={() => scrollToSection('services')} className="hover:text-yellow-600 transition">SERVICES</button>
                      <button onClick={() => scrollToSection('roles')} className="hover:text-yellow-600 transition">ROLES</button>
                      <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-600 transition">CONTACT</button>
                      <button 
                        onClick={() => navigateToPage('clientintake')} 
                        className="bg-yellow-600 hover:bg-yellow-500 text-black px-4 py-2 rounded font-semibold transition ml-2"
                      >
                        GET STARTED
                      </button>
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
                  {/* Add GET STARTED to mobile menu too */}
                  <button 
                    onClick={() => navigateToPage('clientintake')} 
                    className="block w-full text-left bg-yellow-600 hover:bg-yellow-500 text-black px-4 py-2 rounded font-semibold transition mt-2"
                  >
                    GET STARTED
                  </button>
                </div>
              </div>
            )}
          </nav>

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
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        ADN GLOBAL<br />SOLUTIONS
                      </h2>
                      <p className="text-2xl sm:text-3xl text-gray-300 mb-8">
                        Powered by Talent. Focused on Your Growth.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                          onClick={() => navigateToPage('clientintake')}
                          className="bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-3 rounded transition-colors font-semibold text-lg"
                        >
                          GET STARTED →
                        </button>
                        <button 
                          onClick={() => scrollToSection('services')}
                          className="bg-transparent border-2 border-gray-700 hover:border-yellow-600 text-white px-8 py-3 rounded transition-colors font-semibold"
                        >
                          LEARN MORE
                        </button>
                      </div>
                    </div>
                    <img src="/main_logo.jpeg" alt="ADN Global Solutions Logo" className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-lg flex-shrink-0" />
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

      {/* Second Get Started Button */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-900/20 to-yellow-800/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Build Your Team?</h3>
          <p className="text-gray-400 mb-8 text-lg">
            Complete our client intake form and we'll get back to you within 24 hours with tailored recommendations.
          </p>
          <button 
            onClick={() => navigateToPage('clientintake')}
            className="bg-yellow-600 hover:bg-yellow-500 text-black px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
          >
            Start Your Intake Form →
          </button>
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
          
          {/* Choice Section */}
          <div className="max-w-5xl mx-auto mb-12 grid md:grid-cols-2 gap-6">
            <div className="border-2 border-yellow-600 rounded-lg p-8 text-center hover:bg-yellow-600/5 transition">
              <h4 className="text-2xl font-bold mb-3">Ready to Hire?</h4>
              <p className="text-gray-400 mb-6">
                Complete our detailed intake form to help us understand your exact staffing needs.
              </p>
              <button 
                onClick={() => navigateToPage('clientintake')}
                className="bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-3 rounded font-bold w-full transition"
              >
                Start Intake Form →
              </button>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-8 text-center hover:border-yellow-600/50 transition">
              <h4 className="text-2xl font-bold mb-3">Have Questions?</h4>
              <p className="text-gray-400 mb-6">
                Send us a quick message and we'll get back to you within 24 hours.
              </p>
              <div className="text-gray-300 text-sm">
                Scroll down for quick contact form
              </div>
            </div>
          </div>
          
          {/* Existing Contact Form */}
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
                <p className="text-green-400 text-sm">✓ Message sent successfully!</p>
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
        <p>&copy; 2025 ADN Global Solutions. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <button 
            onClick={() => navigateToPage('about-page')} 
            className="text-yellow-600 hover:text-yellow-500"
          >
            About Us
          </button>
          <button 
            onClick={() => navigateToPage('faq')} 
            className="text-yellow-600 hover:text-yellow-500"
          >
            FAQ
          </button>
          <button 
            onClick={() => navigateToPage('terms')} 
            className="text-yellow-600 hover:text-yellow-500"
          >
            Terms & Conditions
          </button>
          <button 
            onClick={() => navigateToPage('privacy')} 
            className="text-yellow-600 hover:text-yellow-500"
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
    </div>
  );
}