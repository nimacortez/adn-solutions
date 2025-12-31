import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Plus, X, CheckCircle, Globe, Briefcase, Award, GraduationCap } from 'lucide-react';

export default function TalentApplication() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  // List of all countries
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];
  
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    fullName: '',
    age: '',
    email: '',
    phone: '',
    whatsapp: '',
    countryOfBirth: '',
    houseApt: '',
    streetName: '',
    city: '',
    state: '',
    country: '',
    
    // Step 2: Languages
    languages: [{ language: '', proficiency: '' }],
    
    // Step 3: Education
    education: [{
      schoolName: '',
      levelOfEducation: '',
      degree: '',
      fieldOfStudy: '',
      graduationYear: '',
      stillEnrolled: false
    }],
    
    // Step 4: Certifications
    certifications: [{
      certificationName: '',
      issuingOrganization: '',
      issueDate: '',
      expirationDate: '',
      credentialID: ''
    }],
    
    // Step 5: Professional Experience
    currentlyEmployed: '',
    totalYearsExperience: '',
    primaryIndustry: '',
    primaryRole: '',
    keySkills: '',
    technicalSkills: '',
    softSkills: '',
    toolsAndSoftware: '',
    
    // Step 6: Work History
    workHistory: [{
      companyName: '',
      jobTitle: '',
      employmentType: '',
      location: '',
      startDate: '',
      endDate: '',
      currentlyWorking: false,
      responsibilities: '',
      achievements: '',
      referenceName: '',
      referenceTitle: '',
      referenceEmail: '',
      referencePhone: ''
    }],
    
    // Step 7: Preferences & Availability
    desiredRoles: '',
    desiredIndustries: '',
    workPreference: '',
    availabilityToStart: '',
    portfolioURL: '',
    linkedinURL: '',
    githubURL: '',
    otherURL: '',
    
    // Step 8: Additional Information
    whyJoinADN: '',
    careerGoals: '',
    additionalInfo: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (arrayName, index, field, value) => {
    const newArray = [...formData[arrayName]];
    newArray[index][field] = value;
    setFormData(prev => ({ ...prev, [arrayName]: newArray }));
  };

  const addArrayItem = (arrayName, defaultItem) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName], defaultItem]
    }));
  };

  const removeArrayItem = (arrayName, index) => {
    if (formData[arrayName].length > 1) {
      setFormData(prev => ({
        ...prev,
        [arrayName]: prev[arrayName].filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      setSubmitStatus('sending');
      
      try {
        const response = await fetch('https://formspree.io/f/xgowzdpb', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formType: 'Talent Application',
            ...formData
          }),
        });
        
        if (response.ok) {
          setSubmitStatus('success');
          setTimeout(() => {
            navigate('/');
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
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <img src="/main_logo.jpeg" alt="ADN Logo" className="h-12 w-12 rounded" />
              <div>
                <h1 className="text-3xl font-bold">ADN</h1>
                <span className="text-xs text-gray-400">Global Solutions</span>
              </div>
            </div>
            <button onClick={() => navigate('/')} className="text-yellow-600 hover:text-yellow-500 transition">
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Globe className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to the New Frontier of<br />
            <span className="text-yellow-600">Global Employment</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ADN Global Solutions is the first professional talent agency focused on connecting talented professionals with employers from around the world. In our shrinking, interconnected world, distance is no longer a barrier to opportunity.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-gray-800/50 p-4 rounded">
              <Briefcase className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-sm">Global Opportunities</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded">
              <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-sm">Career Growth</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded">
              <GraduationCap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-sm">Professional Development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Talent Application</h2>
          <p className="text-gray-400 mb-12">Complete your profile to join our global talent network</p>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    currentStep >= step ? 'bg-yellow-600 text-black' : 'bg-gray-700 text-gray-400'
                  }`}>
                    {step}
                  </div>
                  {step < 8 && (
                    <div className={`flex-1 h-1 mx-1 ${
                      currentStep > step ? 'bg-yellow-600' : 'bg-gray-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center text-sm text-gray-400 mt-2">
              Step {currentStep} of 8
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">1. Personal Information</h2>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    placeholder="Full Name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Age *</label>
                    <input
                      type="number"
                      required
                      min="18"
                      max="100"
                      value={formData.age}
                      onChange={(e) => handleChange('age', e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Country of Birth *</label>
                    <select
                      required
                      value={formData.countryOfBirth}
                      onChange={(e) => handleChange('countryOfBirth', e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
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
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleChange('whatsapp', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h3 className="text-xl font-bold mb-4">Current Residence</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">House #/Apt # *</label>
                      <input
                        type="text"
                        required
                        value={formData.houseApt}
                        onChange={(e) => handleChange('houseApt', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Street Name or Number *</label>
                      <input
                        type="text"
                        required
                        value={formData.streetName}
                        onChange={(e) => handleChange('streetName', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">City *</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">State/Province</label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => handleChange('state', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Country *</label>
                      <select
                        required
                        value={formData.country}
                        onChange={(e) => handleChange('country', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-4 mt-6">
                  <p className="text-sm text-blue-400">
                    <strong>Note:</strong> After submitting this application, we may request additional documents (ID, certifications, portfolio) via email if your profile is a good match.
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Languages */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">2. Languages</h2>
                <p className="text-gray-400 mb-6">List all languages you speak and your proficiency level</p>

                {formData.languages.map((lang, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">Language #{index + 1}</h3>
                      {formData.languages.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('languages', index)}
                          className="text-red-500 hover:text-red-400 text-sm flex items-center"
                        >
                          <X size={16} className="mr-1" /> Remove
                        </button>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Language *</label>
                        <input
                          type="text"
                          required
                          value={lang.language}
                          onChange={(e) => handleArrayChange('languages', index, 'language', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                          placeholder="e.g., English, Spanish, Mandarin"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Proficiency Level *</label>
                        <select
                          required
                          value={lang.proficiency}
                          onChange={(e) => handleArrayChange('languages', index, 'proficiency', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        >
                          <option value="">Select</option>
                          <option value="native">Native/Bilingual</option>
                          <option value="fluent">Fluent (C2)</option>
                          <option value="advanced">Advanced (C1)</option>
                          <option value="intermediate">Intermediate (B1-B2)</option>
                          <option value="basic">Basic (A1-A2)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addArrayItem('languages', { language: '', proficiency: '' })}
                  className="w-full border-2 border-dashed border-gray-700 rounded-lg py-4 text-gray-400 hover:border-yellow-600 hover:text-yellow-600 transition flex items-center justify-center"
                >
                  <Plus size={20} className="mr-2" /> Add Another Language
                </button>
              </div>
            )}

            {/* Step 3: Education */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">3. Education</h2>

                {formData.education.map((edu, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">Education #{index + 1}</h3>
                      {formData.education.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('education', index)}
                          className="text-red-500 hover:text-red-400 text-sm flex items-center"
                        >
                          <X size={16} className="mr-1" /> Remove
                        </button>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">School/University Name *</label>
                      <input
                        type="text"
                        required
                        value={edu.schoolName}
                        onChange={(e) => handleArrayChange('education', index, 'schoolName', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        placeholder="Institution name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Level of Education *</label>
                        <select
                          required
                          value={edu.levelOfEducation}
                          onChange={(e) => handleArrayChange('education', index, 'levelOfEducation', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        >
                          <option value="">Select</option>
                          <option value="none">None</option>
                          <option value="high-school">High School</option>
                          <option value="associate">Associate Degree</option>
                          <option value="bachelor">Bachelor's Degree</option>
                          <option value="master">Master's Degree</option>
                          <option value="doctorate">Doctorate/PhD</option>
                          <option value="vocational">Vocational/Technical Certificate</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Graduation Year</label>
                        <input
                          type="number"
                          min="1950"
                          max="2030"
                          value={edu.graduationYear}
                          onChange={(e) => handleArrayChange('education', index, 'graduationYear', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                          placeholder="e.g., 2020"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Degree/Diploma</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                          placeholder="e.g., Bachelor of Science"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Field of Study</label>
                        <input
                          type="text"
                          value={edu.fieldOfStudy}
                          onChange={(e) => handleArrayChange('education', index, 'fieldOfStudy', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                          placeholder="e.g., Computer Science, Business"
                        />
                      </div>
                    </div>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={edu.stillEnrolled}
                        onChange={(e) => handleArrayChange('education', index, 'stillEnrolled', e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-sm">Currently enrolled</span>
                    </label>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addArrayItem('education', {
                    schoolName: '',
                    levelOfEducation: '',
                    degree: '',
                    fieldOfStudy: '',
                    graduationYear: '',
                    stillEnrolled: false
                  })}
                  className="w-full border-2 border-dashed border-gray-700 rounded-lg py-4 text-gray-400 hover:border-yellow-600 hover:text-yellow-600 transition flex items-center justify-center"
                >
                  <Plus size={20} className="mr-2" /> Add Another Education
                </button>
              </div>
            )}

            {/* Step 4: Certifications */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">4. Certifications</h2>
                <p className="text-gray-400 mb-6">Professional certifications, licenses, or credentials (optional)</p>

                {formData.certifications.map((cert, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">Certification #{index + 1}</h3>
                      {formData.certifications.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('certifications', index)}
                          className="text-red-500 hover:text-red-400 text-sm flex items-center"
                        >
                          <X size={16} className="mr-1" /> Remove
                        </button>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Certification Name</label>
                      <input
                        type="text"
                        value={cert.certificationName}
                        onChange={(e) => handleArrayChange('certifications', index, 'certificationName', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        placeholder="e.g., AWS Certified Solutions Architect"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Issuing Organization</label>
                      <input
                        type="text"
                        value={cert.issuingOrganization}
                        onChange={(e) => handleArrayChange('certifications', index, 'issuingOrganization', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        placeholder="e.g., Amazon Web Services"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Issue Date</label>
                        <input
                          type="month"
                          value={cert.issueDate}
                          onChange={(e) => handleArrayChange('certifications', index, 'issueDate', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Expiration Date (if applicable)</label>
                        <input
                          type="month"
                          value={cert.expirationDate}
                          onChange={(e) => handleArrayChange('certifications', index, 'expirationDate', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Credential ID/URL</label>
                      <input
                        type="text"
                        value={cert.credentialID}
                        onChange={(e) => handleArrayChange('certifications', index, 'credentialID', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        placeholder="Credential ID or verification URL"
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addArrayItem('certifications', {
                    certificationName: '',
                    issuingOrganization: '',
                    issueDate: '',
                    expirationDate: '',
                    credentialID: ''
                  })}
                  className="w-full border-2 border-dashed border-gray-700 rounded-lg py-4 text-gray-400 hover:border-yellow-600 hover:text-yellow-600 transition flex items-center justify-center"
                >
                  <Plus size={20} className="mr-2" /> Add Another Certification
                </button>
              </div>
            )}

            {/* Step 5: Professional Experience Overview */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">5. Professional Experience Overview</h2>

                <div>
                  <label className="block text-sm font-medium mb-2">Are you currently employed? *</label>
                  <select
                    required
                    value={formData.currentlyEmployed}
                    onChange={(e) => handleChange('currentlyEmployed', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes - Full time</option>
                    <option value="yes-part">Yes - Part time</option>
                    <option value="no">No - Actively looking</option>
                    <option value="no-passive">No - Open to opportunities</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Total Years of Professional Experience *</label>
                  <select
                    required
                    value={formData.totalYearsExperience}
                    onChange={(e) => handleChange('totalYearsExperience', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-7">5-7 years</option>
                    <option value="7-10">7-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Primary Industry *</label>
                  <input
                    type="text"
                    required
                    value={formData.primaryIndustry}
                    onChange={(e) => handleChange('primaryIndustry', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    placeholder="e.g., Technology, Healthcare, Finance, Marketing"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Primary Role/Function *</label>
                  <input
                    type="text"
                    required
                    value={formData.primaryRole}
                    onChange={(e) => handleChange('primaryRole', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                    placeholder="e.g., Software Engineer, Project Manager, Sales"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Key Skills (comma separated) *</label>
                  <textarea
                    required
                    value={formData.keySkills}
                    onChange={(e) => handleChange('keySkills', e.target.value)}
                    rows="3"
                    placeholder="e.g., Project Management, Data Analysis, Customer Relations, Strategic Planning"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Technical Skills *</label>
                  <textarea
                    required
                    value={formData.technicalSkills}
                    onChange={(e) => handleChange('technicalSkills', e.target.value)}
                    rows="3"
                    placeholder="e.g., Python, React, AWS, SQL, Photoshop, Excel, CAD"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Soft Skills *</label>
                  <textarea
                    required
                    value={formData.softSkills}
                    onChange={(e) => handleChange('softSkills', e.target.value)}
                    rows="3"
                    placeholder="e.g., Leadership, Communication, Problem-solving, Adaptability, Team Collaboration"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tools & Software Proficiency</label>
                  <textarea
                    value={formData.toolsAndSoftware}
                    onChange={(e) => handleChange('toolsAndSoftware', e.target.value)}
                    rows="3"
                    placeholder="e.g., Salesforce, Jira, Adobe Creative Suite, Microsoft Office, Slack"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* Step 6: Work History */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">6. Work History</h2>
                <p className="text-gray-400 mb-6">List your previous work experience (most recent first)</p>

                {formData.workHistory.map((work, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">Position #{index + 1}</h3>
                      {formData.workHistory.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('workHistory', index)}
                          className="text-red-500 hover:text-red-400 text-sm flex items-center"
                        >
                          <X size={16} className="mr-1" /> Remove
                        </button>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name *</label>
                        <input
                          type="text"
                          required
                          value={work.companyName}
                          onChange={(e) => handleArrayChange('workHistory', index, 'companyName', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Job Title *</label>
                        <input
                          type="text"
                          required
                          value={work.jobTitle}
                          onChange={(e) => handleArrayChange('workHistory', index, 'jobTitle', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Employment Type *</label>
                        <select
                          required
                          value={work.employmentType}
                          onChange={(e) => handleArrayChange('workHistory', index, 'employmentType', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        >
                          <option value="">Select</option>
                          <option value="full-time">Full-time</option>
                          <option value="part-time">Part-time</option>
                          <option value="contract">Contract</option>
                          <option value="freelance">Freelance</option>
                          <option value="internship">Internship</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Location</label>
                        <input
                          type="text"
                          value={work.location}
                          onChange={(e) => handleArrayChange('workHistory', index, 'location', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                          placeholder="City, Country or 'Remote'"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Start Date *</label>
                        <input
                          type="month"
                          required
                          value={work.startDate}
                          onChange={(e) => handleArrayChange('workHistory', index, 'startDate', e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">End Date</label>
                        <input
                          type="month"
                          value={work.endDate}
                          onChange={(e) => handleArrayChange('workHistory', index, 'endDate', e.target.value)}
                          disabled={work.currentlyWorking}
                          className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={work.currentlyWorking}
                        onChange={(e) => handleArrayChange('workHistory', index, 'currentlyWorking', e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-sm">I currently work here</span>
                    </label>

                    <div>
                      <label className="block text-sm font-medium mb-2">Key Responsibilities *</label>
                      <textarea
                        required
                        value={work.responsibilities}
                        onChange={(e) => handleArrayChange('workHistory', index, 'responsibilities', e.target.value)}
                        rows="4"
                        placeholder="Describe your main duties and responsibilities..."
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Key Achievements</label>
                      <textarea
                        value={work.achievements}
                        onChange={(e) => handleArrayChange('workHistory', index, 'achievements', e.target.value)}
                        rows="3"
                        placeholder="Quantifiable accomplishments, projects completed, awards, etc..."
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                      />
                    </div>

                    <div className="border-t border-gray-700 pt-4 mt-4">
                      <h4 className="font-bold mb-3">Reference (Optional)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Reference Name</label>
                          <input
                            type="text"
                            value={work.referenceName}
                            onChange={(e) => handleArrayChange('workHistory', index, 'referenceName', e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Reference Title</label>
                          <input
                            type="text"
                            value={work.referenceTitle}
                            onChange={(e) => handleArrayChange('workHistory', index, 'referenceTitle', e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                            placeholder="e.g., Manager, Supervisor"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Reference Email</label>
                          <input
                            type="email"
                            value={work.referenceEmail}
                            onChange={(e) => handleArrayChange('workHistory', index, 'referenceEmail', e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Reference Phone</label>
                          <input
                            type="tel"
                            value={work.referencePhone}
                            onChange={(e) => handleArrayChange('workHistory', index, 'referencePhone', e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addArrayItem('workHistory', {
                    companyName: '',
                    jobTitle: '',
                    employmentType: '',
                    location: '',
                    startDate: '',
                    endDate: '',
                    currentlyWorking: false,
                    responsibilities: '',
                    achievements: '',
                    referenceName: '',
                    referenceTitle: '',
                    referenceEmail: '',
                    referencePhone: ''
                  })}
                  className="w-full border-2 border-dashed border-gray-700 rounded-lg py-4 text-gray-400 hover:border-yellow-600 hover:text-yellow-600 transition flex items-center justify-center"
                >
                  <Plus size={20} className="mr-2" /> Add Another Position
                </button>
              </div>
            )}

            {/* Step 7: Job Preferences & Availability */}
            {currentStep === 7 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">7. Job Preferences & Availability</h2>

                <div>
                  <label className="block text-sm font-medium mb-2">Desired Roles/Positions *</label>
                  <textarea
                    required
                    value={formData.desiredRoles}
                    onChange={(e) => handleChange('desiredRoles', e.target.value)}
                    rows="3"
                    placeholder="What types of positions are you interested in?"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Desired Industries</label>
                  <textarea
                    value={formData.desiredIndustries}
                    onChange={(e) => handleChange('desiredIndustries', e.target.value)}
                    rows="2"
                    placeholder="Which industries interest you most?"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Availability to Start *</label>
                  <select
                    required
                    value={formData.availabilityToStart}
                    onChange={(e) => handleChange('availabilityToStart', e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="immediate">Immediate (within 1 week)</option>
                    <option value="2-weeks">2 weeks notice</option>
                    <option value="1-month">1 month notice</option>
                    <option value="2-months">2+ months notice</option>
                  </select>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h3 className="text-xl font-bold mb-4">Online Presence</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Portfolio/Website URL</label>
                      <input
                        type="url"
                        value={formData.portfolioURL}
                        onChange={(e) => handleChange('portfolioURL', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        placeholder="https://"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
                      <input
                        type="url"
                        value={formData.linkedinURL}
                        onChange={(e) => handleChange('linkedinURL', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">GitHub Profile (if applicable)</label>
                      <input
                        type="url"
                        value={formData.githubURL}
                        onChange={(e) => handleChange('githubURL', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        placeholder="https://github.com/yourprofile"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Other Relevant Links</label>
                      <input
                        type="url"
                        value={formData.otherURL}
                        onChange={(e) => handleChange('otherURL', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                        placeholder="Behance, Dribbble, Medium, etc."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 8: Additional Information */}
            {currentStep === 8 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-yellow-600 mb-6">8. Final Questions</h2>

                <div>
                  <label className="block text-sm font-medium mb-2">Why do you want to join ADN Global Solutions' talent network? *</label>
                  <textarea
                    required
                    value={formData.whyJoinADN}
                    onChange={(e) => handleChange('whyJoinADN', e.target.value)}
                    rows="4"
                    placeholder="Tell us about your motivations and what you're looking for..."
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">What are your career goals for the next 3-5 years? *</label>
                  <textarea
                    required
                    value={formData.careerGoals}
                    onChange={(e) => handleChange('careerGoals', e.target.value)}
                    rows="4"
                    placeholder="Describe your professional aspirations..."
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => handleChange('additionalInfo', e.target.value)}
                    rows="4"
                    placeholder="Anything else you'd like us to know? Special circumstances, unique skills, etc..."
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 focus:border-yellow-600 focus:outline-none"
                  />
                </div>

                <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/50">
                  <h3 className="text-lg font-bold mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-yellow-600" />
                    Review Your Application
                  </h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p><span className="text-white">Name:</span> {formData.fullName || 'Not provided'}</p>
                    <p><span className="text-white">Email:</span> {formData.email || 'Not provided'}</p>
                    <p><span className="text-white">Phone:</span> {formData.phone || 'Not provided'}</p>
                    <p><span className="text-white">Location:</span> {formData.city && formData.country ? `${formData.city}, ${formData.country}` : 'Not provided'}</p>
                    <p><span className="text-white">Experience:</span> {formData.totalYearsExperience || 'Not specified'}</p>
                    <p><span className="text-white">Primary Role:</span> {formData.primaryRole || 'Not specified'}</p>
                    <p><span className="text-white">Languages:</span> {formData.languages.filter(l => l.language).length}</p>
                    <p><span className="text-white">Education entries:</span> {formData.education.length}</p>
                    <p><span className="text-white">Work history entries:</span> {formData.workHistory.length}</p>
                  </div>
                </div>

                <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-4">
                  <p className="text-sm text-yellow-600">
                    By submitting this application, you consent to ADN Global Solutions storing and processing your personal information for recruitment purposes. We will contact you soon if we see a fit!
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
                {currentStep === 8 ? (
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