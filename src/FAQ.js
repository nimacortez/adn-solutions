import React from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

export default function FAQ() {
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
          <h1 className="text-5xl font-bold mb-4">FAQ</h1>
          <p className="text-2xl text-yellow-600 mb-12">Your questions answered. Your challenges solved.</p>

          <div className="space-y-8 text-gray-300">
            {[
              { q: "What does ADN Global Solutions do?", a: "ADN Global Solutions helps businesses build high‑performing remote teams by providing fully vetted, professional talent paired with ongoing operational support. We handle recruitment, screening, onboarding, and performance management so you can scale quickly and efficiently." },
              { q: "What types of roles can ADN fill?", a: "We support a wide range of professional roles, including: Administrative & Executive Assistants, Customer Support & Client Success, Sales & Lead Generation, Accounting & Finance, Marketing & Social Media, Project Management, Operations & Back‑Office Support, IT, Tech, and specialized roles. If your business needs it, we can source it." },
              { q: "How fast can ADN find candidates?", a: "Our recruitment team typically delivers shortlisted candidates within 5–10 business days, depending on the role and required skill level. For subscription members with fast‑track support, timelines may be even quicker." },
              { q: "How do you ensure talent quality?", a: "Every applicant goes through a multi‑step screening process including skills assessments, English proficiency evaluation, background checks, interviews, and culture alignment review. Only top‑performing candidates are recommended to clients." },
              { q: "How does ADN's pricing work?", a: "We offer transparent monthly pricing based on: Number of remote team members, role complexity and skill level, required experience, contract length, and optional subscription packages. Each client receives a customized quote tailored to their business needs." },
              { q: "Are there long‑term contracts?", a: "ADN offers flexible month‑to‑month options, as well as discounted long‑term agreements for businesses wanting stability and cost savings. You can scale up or down at any time." },
              { q: "What happens if a hire doesn't work out?", a: "ADN offers replacement guarantees depending on your tier: Basic (60‑day coverage), Gold (180‑day coverage), Black (12‑month unlimited coverage). We stand behind our placements and ensure your operations never stall." },
              { q: "Why choose ADN Global Solutions?", a: "Higher talent quality, faster hiring, more reliable support, transparent pricing, strong guarantees, and a relationship‑first approach. We're not just a staffing partner — we are an extension of your team." }
            ].map((item, i) => (
              <div key={i} className="border-b border-gray-800 pb-6">
                <h3 className="text-xl font-bold text-yellow-500 mb-3">{i + 1}. {item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
