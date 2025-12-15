import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Terms() {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <img src="/main_logo.jpeg" alt="ADN Logo" className="h-12 w-12 rounded" />
              <div>
                <h1 className="text-3xl font-bold">ADN</h1>
                <span className="text-xs text-gray-400">Global Solutions</span>
              </div>
            </div>
            <button onClick={() => navigate('/')} className="text-yellow-600 hover:text-yellow-500">
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-400 mb-12">Last Updated: December 2025</p>

          <div className="space-y-8 text-gray-300">
            <p>Welcome to ADN Global Solutions. These Terms & Conditions govern your access to and use of our Services. By accessing or using our Services, you agree to these Terms.</p>

            {[
              { title: "1. Use of Services", content: "You may use our Services only for lawful, business‑appropriate purposes. You agree not to misuse, modify, or interfere with the Services or attempt unauthorized access. We reserve the right to suspend or terminate access for misuse or violations." },
              { title: "2. Client Responsibilities", content: "Businesses using ADN Services agree to provide accurate information, comply with all applicable regulations, and understand that ADN does not act as an employer or payroll provider for client companies." },
              { title: "3. Staffing & Talent Services", content: "ADN connects businesses with vetted remote professionals. All placements are based on information provided. ADN does not guarantee performance outcomes, availability of specific roles, or client‑talent compatibility beyond our screening process." },
              { title: "4. Subscription Services", content: "Clients may enroll in optional ADN subscription packages. Subscriptions renew automatically unless canceled. Fees are non‑refundable unless required by law. ADN may update pricing with reasonable notice." },
              { title: "5. Payments & Billing", content: "All payments are processed through secure platforms. Clients agree to pay invoices on time and maintain accurate billing information. ADN may charge late fees or suspend services for non‑payment." },
              { title: "6. Intellectual Property", content: "All content, materials, and systems provided by ADN are our exclusive property. Clients may not copy, reproduce, or redistribute ADN materials without written permission." },
              { title: "7. Limitation of Liability", content: "ADN provides Services 'as‑is' and 'as available.' ADN shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid by the client during the previous 3 months." },
              { title: "8. Contact Us", content: "For questions about these Terms, contact: ADN Global Solutions LLC, Email: support@adnglobalsolutions.com, Phone: (888) 826‑8781" }
            ].map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-white mb-3">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
