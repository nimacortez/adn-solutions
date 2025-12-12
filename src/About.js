import React from 'react';
import Footer from './Footer';

export default function About({ onNavigateHome, navigateToPage }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={onNavigateHome}>
              <img src="/main_logo.jpeg" alt="ADN Logo" className="h-12 w-12 rounded" />
              <div>
                <h1 className="text-3xl font-bold">ADN</h1>
                <span className="text-xs text-gray-400">Global Solutions</span>
              </div>
            </div>
            <button onClick={onNavigateHome} className="text-yellow-600 hover:text-yellow-500">
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <h2 className="text-3xl text-yellow-600 mb-12">Empowering Businesses With World‑Class Remote Talent</h2>

          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <p>
              At ADN Global Solutions, we help companies scale smarter by connecting them with exceptional, highly skilled remote professionals. Our mission is to make world‑class talent accessible, reliable, and cost‑efficient for businesses of all sizes — without the complexity of traditional hiring.
            </p>

            <p>
              We specialize in sourcing, vetting, and supporting elite remote professionals across a wide range of fields, including administration, customer experience, sales, marketing, finance, IT, and specialized operational roles.
            </p>

            <div className="bg-gradient-to-br from-yellow-900/20 to-transparent p-8 rounded border border-yellow-600/30 my-8">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">⭐ Our Vision</h3>
              <p>To redefine modern workforce solutions by enabling companies to build global teams powered by professional excellence, seamless collaboration, and strategic cost efficiency.</p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">⭐ What We Do</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-yellow-500 mb-2">✔ Remote Staffing & Talent Placement</h4>
                <p>We match businesses with vetted, high‑performing remote professionals tailored to their operational needs.</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-500 mb-2">✔ Full Operational Support</h4>
                <p>From onboarding to performance monitoring, we provide structured support that ensures long‑term success.</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-500 mb-2">✔ Subscription‑Based Business Enhancements</h4>
                <p>Our optional subscription services help companies streamline operations and enhance efficiency.</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-500 mb-2">✔ Flexible, Scalable Hiring</h4>
                <p>Companies can easily scale their workforce up or down based on demand.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">⭐ Why Businesses Choose ADN</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Professional, Vetted Talent</li>
              <li>Reliable Cost Efficiency</li>
              <li>Fast, Predictable Hiring</li>
              <li>Long‑Term Partnership Approach</li>
            </ul>

            <div className="bg-gradient-to-br from-yellow-900/20 to-transparent p-8 rounded border border-yellow-600/30 my-8">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">⭐ Our Mission</h3>
              <p>To empower businesses with access to exceptional global talent while creating meaningful, sustainable career opportunities worldwide.</p>
            </div>

            <div className="text-center py-8">
              <p className="text-2xl font-bold text-yellow-500">Talent is universal — and we believe opportunity should be too.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={navigateToPage} />
    </div>
  );
}
