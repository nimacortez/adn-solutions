import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-gray-900 py-8 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p>&copy; 2025 ADN Global Solutions. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <button 
            onClick={() => onNavigate('about-page')} 
            className="text-yellow-600 hover:text-yellow-500"
          >
            About Us
          </button>
          <button 
            onClick={() => onNavigate('faq')} 
            className="text-yellow-600 hover:text-yellow-500"
          >
            FAQ
          </button>
          <button 
            onClick={() => onNavigate('terms')} 
            className="text-yellow-600 hover:text-yellow-500"
          >
            Terms & Conditions
          </button>
          <button 
            onClick={() => onNavigate('privacy')} 
            className="text-yellow-600 hover:text-yellow-500"
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );
}