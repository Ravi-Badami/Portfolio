import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactData } from '../../utils/content'; // Importing for email address display if needed

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || SERVICE_ID === 'your_service_id_here') {
      console.error('EmailJS credentials are missing. Please check your .env file.');
      setStatus('error');
      alert('Email service is not configured. Please check the console for details.');
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset();
          // Reset status after 5 seconds
          setTimeout(() => setStatus(''), 5000);
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4 font-display">
            Get in Touch
          </h2>
          <p className="text-zinc-600">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="bg-zinc-50 rounded-3xl p-8 md:p-10 border border-zinc-200">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="user_name" className="text-sm font-medium text-zinc-700">Name</label>
                <input 
                  type="text" 
                  name="user_name" // Name attribute required for EmailJS
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="user_email" className="text-sm font-medium text-zinc-700">Email</label>
                <input 
                  type="email" 
                  name="user_email" // Name attribute required for EmailJS
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-700">Message</label>
              <textarea 
                name="message" // Name attribute required for EmailJS
                rows="4"
                required
                className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full py-4 bg-zinc-900 text-white rounded-xl font-bold text-lg hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Feedback */}
            {status === 'success' && (
              <p className="text-center text-green-600 font-medium">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-600 font-medium">Failed to send message. Please try again.</p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
