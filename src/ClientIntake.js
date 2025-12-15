import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

export default function ClientIntake({ onNavigateHome, navigateToPage }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Business Information
    businessName: '',
    websiteUrl: '',
    contactName: '',
    jobTitle: '',
    workEmail: '',
    phone: '',
    country: '',
    city: '',
    companyType: '',
    companySize: '',
    isStartup: '',
    hiringIntent: '',
    monthlyBudget: '',
    budgetNotSure: false,
    
    // Step 2 - Staffing Overview
    hiringScope: '',
    hiringVolume: '',
    startDate: '',
    hiringUrgency: '',
    engagementType: [],
    
    // Step 3 - Role Requirements
    roles: [{
      position: '',
      numberOfPeople: 1,
      contractDuration: '',
      minExperience: '',
      idealExperience: '',
      seniorityLevel: '',
      mustHaveSkills: '',
      niceToHaveSkills: '',
      toolsRequired: '',
      primaryLanguage: '',
      englishLevel: '',
      additionalLanguages: '',
      timeZone: '',
      workingSchedule: '',
      weeklyHours: ''
    }],
    
    // Step 4 - Remote Setup
    equipmentRequirements: '',
    securityRequirements: [],
    hiringModel: '',
    billingCurrency: '',
    billingCycle: '',
    cultureFit: '',
    successMetrics: '',
    
    // Step 5 - Final Details
    additionalNotes: '',
    availabilityDay: '',
    availabilityTime: '',
    preferredContactMethod: '',
    attachments: []
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRoleChange = (index, field, value) => {
    const newRoles = [...formData.roles];
    newRoles[index][field] = value;
    setFormData(prev => ({ ...prev, roles: newRoles }));
  };

  const addRole = () => {
    setFormData(prev => ({
      ...prev,
      roles: [...prev.roles, {
        position: '',
        numberOfPeople: 1,
        contractDuration: '',
        minExperience: '',
        idealExperience: '',
        seniorityLevel: '',
        mustHaveSkills: '',
        niceToHaveSkills: '',
        toolsRequired: '',
        primaryLanguage: '',
        englishLevel: '',
        additionalLanguages: '',
        timeZone: '',
        workingSchedule: '',
        weeklyHours: ''
      }]
    }));
  };

  const removeRole = (index) => {
    if (formData.roles.length > 1) {
      setFormData(prev => ({
        ...prev,
        roles: prev.roles.filter((_, i) => i !== index)
      }));
    }
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => {
      const currentValues = prev[field] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      return { ...prev, [field]: newValues };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      setSubmitStatus('sending');
      
      try {
        const response = await fetch('https://formspree.io/f/xgvglnqy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formType: 'Client Intake Form',
            ...formData,
            rolesCount: formData.roles.length,
            rolesDetails: formData.roles.map((role, i) => ({
              roleNumber: i + 1,
              ...role
            }))
          }),
        });
        
        if (response.ok) {
          setSubmitStatus('success');
          setTimeout(() => {
            alert('Thank you! Your client intake form has been submitted. We will contact you within 24 hours.');
            onNavigateHome();
          }, 1500);
        } else {
          setSubmitStatus('error');
          alert('Failed to submit. Please try again or contact us directly at Info@adnglobalsolutions.com');
        }
      } catch (error) {
        setSubmitStatus('error');
        alert('Failed to submit. Please try again or contact us directly at Info@adnglobalsolutions.com');
      }
    }
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer" onClick={onNavigateHome}>
              <h1 className="text-3xl font-bold">ADN</h1>
              <span className="text-xs text-gray-400 ml-2">Global Solutions</span>
            </div>
            <button onClick={onNavigateHome} className="text-yellow-600 hover:text-yellow-500 transition">
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Client Intake Form</h1>
          <p className="text-gray-400 mb-12">Help us understand your staffing needs</p>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step ? 'bg-yellow-600 text-black' : 'bg-gray-700 text-gray-400'
                  }`}>
                    {step}
                  </div>
                  {step < 5 && (
                    <div className={`flex-1 h-1 mx-2 ${
                      currentStep > step ? 'bg-yellow-600' : 'bg-gray-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center text-sm text-gray-400 mt-2">
              Step {currentStep} of 5
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Business Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">1. Business Information</h2>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Business Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => handleChange('businessName', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Website URL</label>
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => handleChange('websiteUrl', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    placeholder="https://"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Primary Contact Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => handleChange('contactName', e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Job Title / Position</label>
                    <input
                      type="text"
                      value={formData.jobTitle}
                      onChange={(e) => handleChange('jobTitle', e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => handleChange('workEmail', e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => handleChange('country', e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company Type *</label>
                  <select
                    required
                    value={formData.companyType}
                    onChange={(e) => handleChange('companyType', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company Size *</label>
                  <select
                    required
                    value={formData.companySize}
                    onChange={(e) => handleChange('companySize', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Is this a startup? *</label>
                  <select
                    required
                    value={formData.isStartup}
                    onChange={(e) => handleChange('isStartup', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">What's your primary hiring intent? *</label>
                  <select
                    required
                    value={formData.hiringIntent}
                    onChange={(e) => handleChange('hiringIntent', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="scale-team">Scale existing team</option>
                    <option value="new-project">New project or initiative</option>
                    <option value="replace-staff">Replace existing staff</option>
                    <option value="specialized-skills">Access specialized skills</option>
                    <option value="cost-optimization">Cost optimization</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Hiring Budget (USD)</label>
                  <input
                    type="number"
                    value={formData.monthlyBudget}
                    onChange={(e) => handleChange('monthlyBudget', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    placeholder="e.g., 10000"
                    disabled={formData.budgetNotSure}
                  />
                  <label className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      checked={formData.budgetNotSure}
                      onChange={(e) => handleChange('budgetNotSure', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-400">Not sure yet / Flexible</span>
                  </label>
                </div>
              </div>
            )}

            {/* Step 2: Staffing Overview */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">2. Staffing Overview</h2>

                <div>
                  <label className="block text-sm font-medium mb-2">Hiring Scope *</label>
                  <select
                    required
                    value={formData.hiringScope}
                    onChange={(e) => handleChange('hiringScope', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="single-role">Single role</option>
                    <option value="multiple-same">Multiple positions (same role)</option>
                    <option value="multiple-different">Multiple positions (different roles)</option>
                    <option value="full-team">Entire team</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">How many people do you plan to hire in total? *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.hiringVolume}
                    onChange={(e) => handleChange('hiringVolume', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Desired Start Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => handleChange('startDate', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Hiring Urgency *</label>
                  <select
                    required
                    value={formData.hiringUrgency}
                    onChange={(e) => handleChange('hiringUrgency', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="immediate">Immediate (within 1 week)</option>
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="standard">Standard (2-4 weeks)</option>
                    <option value="flexible">Flexible (1+ months)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Engagement Type * (select all that apply)</label>
                  <div className="space-y-2">
                    {['Full-time contract', 'Part-time contract', 'Project-based', 'Staff augmentation', 'Managed team'].map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.engagementType.includes(type)}
                          onChange={() => handleCheckboxChange('engagementType', type)}
                          className="mr-2"
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Role Requirements */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">3. Role Requirements</h2>

                {formData.roles.map((role, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">Role #{index + 1}</h3>
                      {formData.roles.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeRole(index)}
                          className="text-red-500 hover:text-red-400 text-sm"
                        >
                          Remove Role
                        </button>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Position Title *</label>
                      <input
                        type="text"
                        required
                        value={role.position}
                        onChange={(e) => handleRoleChange(index, 'position', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        placeholder="e.g., Full Stack Developer, Data Analyst"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Number of People Needed *</label>
                      <input
                        type="number"
                        required
                        min="1"
                        value={role.numberOfPeople}
                        onChange={(e) => handleRoleChange(index, 'numberOfPeople', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Contract Duration</label>
                      <select
                        value={role.contractDuration}
                        onChange={(e) => handleRoleChange(index, 'contractDuration', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      >
                        <option value="">Select</option>
                        <option value="3-months">3 months</option>
                        <option value="6-months">6 months</option>
                        <option value="12-months">12 months</option>
                        <option value="ongoing">Ongoing/Indefinite</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Minimum Experience (years)</label>
                        <input
                          type="number"
                          min="0"
                          value={role.minExperience}
                          onChange={(e) => handleRoleChange(index, 'minExperience', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Ideal Experience (years)</label>
                        <input
                          type="number"
                          min="0"
                          value={role.idealExperience}
                          onChange={(e) => handleRoleChange(index, 'idealExperience', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Seniority Level *</label>
                      <select
                        required
                        value={role.seniorityLevel}
                        onChange={(e) => handleRoleChange(index, 'seniorityLevel', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      >
                        <option value="">Select</option>
                        <option value="junior">Junior (0-2 years)</option>
                        <option value="mid">Mid-level (2-5 years)</option>
                        <option value="senior">Senior (5-8 years)</option>
                        <option value="lead">Lead/Principal (8+ years)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Must-Have Skills *</label>
                      <textarea
                        required
                        value={role.mustHaveSkills}
                        onChange={(e) => handleRoleChange(index, 'mustHaveSkills', e.target.value)}
                        rows="3"
                        placeholder="e.g., React, Node.js, PostgreSQL, AWS"
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Nice-to-Have Skills</label>
                      <textarea
                        value={role.niceToHaveSkills}
                        onChange={(e) => handleRoleChange(index, 'niceToHaveSkills', e.target.value)}
                        rows="2"
                        placeholder="e.g., Docker, Kubernetes, GraphQL"
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Tools/Software Required</label>
                      <input
                        type="text"
                        value={role.toolsRequired}
                        onChange={(e) => handleRoleChange(index, 'toolsRequired', e.target.value)}
                        placeholder="e.g., Jira, Figma, Salesforce"
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Primary Language Requirement *</label>
                      <select
                        required
                        value={role.primaryLanguage}
                        onChange={(e) => handleRoleChange(index, 'primaryLanguage', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      >
                        <option value="">Select</option>
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="portuguese">Portuguese</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">English Level Required</label>
                      <select
                        value={role.englishLevel}
                        onChange={(e) => handleRoleChange(index, 'englishLevel', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      >
                        <option value="">Select</option>
                        <option value="basic">Basic</option>
                        <option value="conversational">Conversational</option>
                        <option value="fluent">Fluent</option>
                        <option value="native">Native/Bilingual</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Languages</label>
                      <input
                        type="text"
                        value={role.additionalLanguages}
                        onChange={(e) => handleRoleChange(index, 'additionalLanguages', e.target.value)}
                        placeholder="e.g., French, German, Mandarin"
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Time Zone *</label>
                      <select
                        required
                        value={role.timeZone}
                        onChange={(e) => handleRoleChange(index, 'timeZone', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      >
                        <option value="">Select</option>
                        <option value="EST">EST (US Eastern)</option>
                        <option value="CST">CST (US Central)</option>
                        <option value="MST">MST (US Mountain)</option>
                        <option value="PST">PST (US Pacific)</option>
                        <option value="GMT">GMT (London)</option>
                        <option value="CET">CET (Central Europe)</option>
                        <option value="flexible">Flexible/Any</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Working Schedule</label>
                      <select
                        value={role.workingSchedule}
                        onChange={(e) => handleRoleChange(index, 'workingSchedule', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      >
                        <option value="">Select</option>
                        <option value="standard">Standard business hours</option>
                        <option value="flexible">Flexible hours</option>
                        <option value="shifts">Shift work</option>
                        <option value="overlap">Must overlap with our hours</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Weekly Hours</label>
                      <input
                        type="number"
                        min="1"
                        max="40"
                        value={role.weeklyHours}
                        onChange={(e) => handleRoleChange(index, 'weeklyHours', e.target.value)}
                        placeholder="e.g., 40"
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addRole}
                  className="w-full border-2 border-dashed border-gray-700 rounded-lg py-4 text-gray-400 hover:border-yellow-600 hover:text-yellow-600 transition"
                >
                  + Add Another Role
                </button>
              </div>
            )}

            {/* Step 4: Remote Setup & Compliance */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">4. Remote Setup & Compliance</h2>

                <div>
                  <label className="block text-sm font-medium mb-2">Equipment Requirements</label>
                  <select
                    value={formData.equipmentRequirements}
                    onChange={(e) => handleChange('equipmentRequirements', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="client-provided">We provide all equipment</option>
                    <option value="contractor-own">Contractor uses own equipment</option>
                    <option value="hybrid">Hybrid (some provided, some own)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Security Requirements (select all that apply)</label>
                  <div className="space-y-2">
                    {['NDA required', 'Background check', 'Two-factor authentication', 'VPN access', 'Device encryption', 'None'].map((req) => (
                      <label key={req} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.securityRequirements.includes(req)}
                          onChange={() => handleCheckboxChange('securityRequirements', req)}
                          className="mr-2"
                        />
                        <span className="text-sm">{req}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Hiring Model Preference</label>
                  <select
                    value={formData.hiringModel}
                    onChange={(e) => handleChange('hiringModel', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="w2">W-2 Employee (US only)</option>
                    <option value="1099">1099 Contractor (US only)</option>
                    <option value="corp-to-corp">Corp-to-Corp</option>
                    <option value="international">International contractor</option>
                    <option value="flexible">Flexible/Not sure</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Billing Currency</label>
                    <select
                      value={formData.billingCurrency}
                      onChange={(e) => handleChange('billingCurrency', e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Billing Cycle</label>
                    <select
                      value={formData.billingCycle}
                      onChange={(e) => handleChange('billingCycle', e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="monthly">Monthly</option>
                      <option value="bi-weekly">Bi-Weekly</option>
                      <option value="weekly">Weekly</option>
                      <option value="milestone">Milestone-based</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company Culture Fit</label>
                  <textarea
                    value={formData.cultureFit}
                    onChange={(e) => handleChange('cultureFit', e.target.value)}
                    rows="4"
                    placeholder="Describe your company culture and ideal team member traits..."
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Success Metrics for This Role</label>
                  <textarea
                    value={formData.successMetrics}
                    onChange={(e) => handleChange('successMetrics', e.target.value)}
                    rows="4"
                    placeholder="How will you measure success in this role?"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* Step 5: Final Details & Scheduling */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">5. Final Details & Scheduling</h2>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Notes or Requirements</label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => handleChange('additionalNotes', e.target.value)}
                    rows="6"
                    placeholder="Any other information you'd like us to know about your hiring needs, special requirements, or questions you have..."
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h3 className="text-xl font-bold mb-4">Schedule a Consultation Call</h3>
                  <p className="text-gray-400 mb-4">We'd love to discuss your needs in detail. When would you be available for a 30-minute consultation?</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Day</label>
                      <select
                        value={formData.availabilityDay}
                        onChange={(e) => handleChange('availabilityDay', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      >
                        <option value="">Select a day</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="any-weekday">Any weekday</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Time (Your Time Zone)</label>
                      <select
                        value={formData.availabilityTime}
                        onChange={(e) => handleChange('availabilityTime', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 8PM)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
                  <select
                    value={formData.preferredContactMethod}
                    onChange={(e) => handleChange('preferredContactMethod', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone call</option>
                    <option value="video">Video call (Zoom/Teams)</option>
                    <option value="text">Text/SMS</option>
                  </select>
                </div>

                <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/50">
                  <h3 className="text-lg font-bold mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-yellow-600" />
                    Review Your Information
                  </h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p><span className="text-white">Business:</span> {formData.businessName || 'Not provided'}</p>
                    <p><span className="text-white">Contact:</span> {formData.contactName || 'Not provided'}</p>
                    <p><span className="text-white">Email:</span> {formData.workEmail || 'Not provided'}</p>
                    <p><span className="text-white">Phone:</span> {formData.phone || 'Not provided'}</p>
                    <p><span className="text-white">Roles to fill:</span> {formData.hiringVolume || 'Not specified'}</p>
                    <p><span className="text-white">Number of different positions:</span> {formData.roles.length}</p>
                  </div>
                </div>

                <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-4">
                  <p className="text-sm text-yellow-600">
                    By submitting this form, you agree to be contacted by ADN Global Solutions regarding your staffing needs. We respect your privacy and will not share your information with third parties.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={previousStep}
                  className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>
              )}

              <button
                type="submit"
                className={`flex items-center px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-black font-bold rounded-lg transition ${
                  currentStep === 1 ? 'ml-auto' : ''
                }`}
              >
                {currentStep === 5 ? (
                  submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Submitted!
                    </>
                  ) : (
                    'Submit Application'
                  )
                ) : (
                  <>
                    Next Step
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}