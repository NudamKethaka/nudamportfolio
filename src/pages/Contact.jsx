import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Check, Loader2 } from 'lucide-react';

const Contact = () => {
  // 1. Enhanced Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '',
    services: []
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  // 2. Toggle Logic
  const toggleService = (service) => {
    setFormData(prev => {
      const includes = prev.services.includes(service);
      return {
        ...prev,
        services: includes 
          ? prev.services.filter(s => s !== service)
          : [...prev.services, service]
      };
    });
  };

  const setBudget = (value) => {
    setFormData({ ...formData, budget: value });
  };

  // 3. Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate network request
    setTimeout(() => {
      console.log("Form Data:", formData);
      setStatus('success');
    }, 2000);
  };

  // Lists
  const servicesList = ["Editorial Layout", "Motion Graphics", "Branding", "Video Editing", "Web Design"];
  const budgetList = ["< $200", "$200 - $500", "$500 - $1000", "> $1000"];

  return (
    <div className="page" style={{ paddingTop: '100px' }}>
      <div className="container">
        
        <div className="contact-grid">
          
          {/* LEFT SIDE */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="highlight-text">Let's Talk</span>
            <h1>Have an idea?<br />Let's build it.</h1>
            <p className="contact-sub">
              I help brands stand out through design and motion. Tell me about your goals, and let's create something award-winning.
            </p>

            <div className="info-cards">
              <a href="mailto:Nudamkethaka@gmail.com" className="info-card">
                <Mail className="icon" />
                <div>
                  <span>Email Me</span>
                  <h4>Nudamkethaka@gmail.com</h4>
                </div>
              </a>
              <div className="info-card">
                <MapPin className="icon" />
                <div>
                  <span>Base</span>
                  <h4>Colombo, Sri Lanka</h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div 
            className="form-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status === 'success' ? (
              <motion.div 
                className="success-state"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="success-icon"><Check size={40} /></div>
                <h3>Message Received!</h3>
                <p>Thanks {formData.name}. I'll be in touch within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="btn-reset">Send Another</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                
                {/* Name & Email */}
                <div className="form-row">
                  <div className="input-group">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="input-group">
                    <label>Your Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Services */}
                <div className="input-group">
                  <label>I'm interested in...</label>
                  <div className="tags-wrapper">
                    {servicesList.map(s => (
                      <button 
                        key={s} type="button"
                        className={`tag-btn ${formData.services.includes(s) ? 'active' : ''}`}
                        onClick={() => toggleService(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div className="input-group">
                  <label>Project Budget (USD)</label>
                  <div className="tags-wrapper">
                    {budgetList.map(b => (
                      <button 
                        key={b} type="button"
                        className={`tag-btn ${formData.budget === b ? 'active' : ''}`}
                        onClick={() => setBudget(b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="input-group">
                  <label>Project Details</label>
                  <textarea 
                    placeholder="Tell me about the timeline, goals, and inspiration..." 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <><Loader2 className="spin" size={20} /> Sending...</>
                  ) : (
                    <>Send Request <Send size={18} /></>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;