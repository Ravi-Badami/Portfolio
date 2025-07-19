import { useState } from 'react';
import SocialMedia from './SocialMedia';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', budget: '', message: '', projectType: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Drop me a line anytime',
      value: 'ravikumar.badami@email.com',
      link: 'mailto:ravikumar.badami@email.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      title: 'Phone',
      description: 'Call for urgent projects',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXX',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      description: 'Let\'s connect professionally',
      value: 'Ravikumar Badami',
      link: 'https://linkedin.com/in/ravikumar-badami',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: '📍',
      title: 'Location',
      description: 'Available for remote work',
      value: 'Karnataka, India',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const projectTypes = [
    'Web Application',
    'E-commerce Platform',
    'SaaS Product',
    'Mobile App (React Native)',
    'API Development',
    'Consulting & Strategy',
    'Other'
  ];

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Let\'s discuss'
  ];

  return (
    <section id='messages' className='py-16 sm:py-20 lg:py-24 w-full bg-gradient-to-b from-white to-gray-50'>
      <div className='w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16'>
        {/* Section Header */}
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6'>
            Let's <span className='gradient-text'>Collaborate</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8'></div>
          <p className='text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium px-4'>
            Ready to bring your vision to life? I'm here to help you build something extraordinary. 
            Let's discuss your project and make it happen.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start'>
          {/* Contact Information */}
          <div className='space-y-6 sm:space-y-8'>
            <div>
              <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6'>Get in Touch</h3>
              <p className='text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8'>
                I'm always excited to take on new challenges and collaborate with innovative teams. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className='grid gap-4 sm:gap-6'>
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.link}
                  className='group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100'
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${method.color} rounded-lg lg:rounded-xl flex items-center justify-center text-lg sm:text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-900 text-base sm:text-lg'>{method.title}</h4>
                    <p className='text-gray-600 text-xs sm:text-sm mb-1'>{method.description}</p>
                    <p className='text-gray-800 font-semibold text-sm sm:text-base'>{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl lg:rounded-3xl p-6 sm:p-8'>
              <h4 className='text-xl sm:text-2xl font-bold text-white mb-4'>Follow My Journey</h4>
              <p className='text-white text-base sm:text-lg opacity-90 mb-4 sm:mb-6'>
                Stay updated with my latest projects and tech insights.
              </p>
              <SocialMedia />
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100'>
            <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2'>Start Your Project</h3>
            <p className='text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base'>Fill out the form below and I'll get back to you within 24 hours.</p>

            {submitted && (
              <div className='mb-6 p-4 sm:p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 rounded-xl lg:rounded-2xl'>
                <div className='flex items-center gap-3'>
                  <span className='text-xl sm:text-2xl'>✅</span>
                  <div>
                    <h4 className='font-bold text-sm sm:text-base'>Message Sent Successfully!</h4>
                    <p className='text-xs sm:text-sm'>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
              {/* Name and Email */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div>
                  <label className='block text-sm font-semibold text-gray-800 mb-2' htmlFor='name'>
                    Full Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full bg-gray-50 rounded-lg lg:rounded-xl border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 sm:py-3 px-3 sm:px-4 transition-all duration-200'
                    placeholder='John Doe'
                  />
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-800 mb-2' htmlFor='email'>
                    Email Address *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full bg-gray-50 rounded-lg lg:rounded-xl border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 sm:py-3 px-3 sm:px-4 transition-all duration-200'
                    placeholder='john@company.com'
                  />
                </div>
              </div>

              {/* Company and Budget */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div>
                  <label className='block text-sm font-semibold text-gray-800 mb-2' htmlFor='company'>
                    Company/Organization
                  </label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    className='w-full bg-gray-50 rounded-lg lg:rounded-xl border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 sm:py-3 px-3 sm:px-4 transition-all duration-200'
                    placeholder='Your Company'
                  />
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-800 mb-2' htmlFor='budget'>
                    Project Budget
                  </label>
                  <select
                    id='budget'
                    name='budget'
                    value={formData.budget}
                    onChange={handleChange}
                    className='w-full bg-gray-50 rounded-lg lg:rounded-xl border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 sm:py-3 px-3 sm:px-4 transition-all duration-200'
                  >
                    <option value=''>Select budget range</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className='block text-sm font-semibold text-gray-800 mb-2' htmlFor='projectType'>
                  Project Type
                </label>
                <select
                  id='projectType'
                  name='projectType'
                  value={formData.projectType}
                  onChange={handleChange}
                  className='w-full bg-gray-50 rounded-lg lg:rounded-xl border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 sm:py-3 px-3 sm:px-4 transition-all duration-200'
                >
                  <option value=''>What type of project?</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className='block text-sm font-semibold text-gray-800 mb-2' htmlFor='message'>
                  Project Details *
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full bg-gray-50 rounded-lg lg:rounded-xl border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 sm:py-3 px-3 sm:px-4 transition-all duration-200 resize-vertical'
                  placeholder='Tell me about your project goals, timeline, and any specific requirements...'
                />
              </div>

              {/* Submit Button */}
              <button 
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl lg:rounded-2xl text-base sm:text-lg font-bold hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl relative overflow-hidden group'
              >
                <span className='relative z-10'>
                  {isSubmitting ? 'Sending Message...' : 'Send Message & Start Project'}
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
              </button>
            </form>

            <div className='mt-6 sm:mt-8 text-center'>
              <p className='text-gray-600 text-xs sm:text-sm'>
                🔒 Your information is secure and will never be shared with third parties.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className='mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
          <div className='bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg text-center'>
            <div className='text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2'>24h</div>
            <div className='text-gray-600 font-semibold text-xs sm:text-base'>Response Time</div>
          </div>
          <div className='bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg text-center'>
            <div className='text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-2'>100%</div>
            <div className='text-gray-600 font-semibold text-xs sm:text-base'>Project Success</div>
          </div>
          <div className='bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg text-center'>
            <div className='text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2'>25+</div>
            <div className='text-gray-600 font-semibold text-xs sm:text-base'>Happy Clients</div>
          </div>
          <div className='bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg text-center'>
            <div className='text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2'>3+</div>
            <div className='text-gray-600 font-semibold text-xs sm:text-base'>Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
