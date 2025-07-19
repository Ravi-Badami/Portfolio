import { useState } from 'react';
import SocialMedia from './SocialMedia';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id='messages' className='py-20 w-full'>
      <div className='bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl overflow-hidden'>
        <SocialMedia />
        <div className='px-5 py-10 md:py-10 mx-auto'>
          <div className='flex flex-col text-center w-full mb-6 md:mb-12'>
            <h2 className='text-4xl md:text-6xl font-extrabold mb-4 text-gray-900'>
              Let&apos;s Connect
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6'></div>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Have a project in mind? I&apos;d love to hear from you. Send me a message and let&apos;s discuss your ideas!
            </p>
          </div>
          
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            {submitted && (
              <div className='mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
                Thank you for your message! I&apos;ll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label className='leading-7 text-sm font-medium text-gray-800' htmlFor='name'>
                    Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full bg-white bg-opacity-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    placeholder='Your name'
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label className='leading-7 text-sm font-medium text-gray-800' htmlFor='email'>
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full bg-white bg-opacity-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    placeholder='your@email.com'
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label className='leading-7 text-sm font-medium text-gray-800' htmlFor='message'>
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className='w-full bg-white bg-opacity-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-3 leading-6 transition-colors duration-200 ease-in-out resize-vertical'
                    placeholder='Tell me about your project...'
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <button 
                  type='submit'
                  disabled={isSubmitting}
                  className='flex mx-auto text-white bg-gradient-to-r from-blue-600 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-blue-700 hover:to-purple-700 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
