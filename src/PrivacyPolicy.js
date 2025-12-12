import React from 'react';
import Footer from './Footer';

export default function PrivacyPolicy({ onNavigateHome, navigateToPage }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer" onClick={onNavigateHome}>
              <h1 className="text-3xl font-bold">ADN</h1>
              <span className="text-xs text-gray-400 ml-2">Global Solutions</span>
            </div>
            <button onClick={onNavigateHome} className="text-yellow-600 hover:text-yellow-500">
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: December 8, 2024</p>

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
}