import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Calendar, Monitor, Zap, BookOpen, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="page" style={{ paddingTop: '100px' }}>
      <div className="container">
        
        {/* 1. HERO TEXT */}
        <div className="about-header">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            I don't just design.<br />
            <span style={{ color: '#555' }}>I engineer visual experiences.</span>
          </motion.h1>
        </div>

        {/* 2. THE BENTO GRID (Fixed Layout) */}
        <div className="bento-grid">
          
          {/* A. Profile Image (Top Left - 2 Cols) */}
          <motion.div 
            className="bento-box image-box"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
              alt="Nudam Kethaka" 
            />
            <div className="image-overlay">
              <span>Nudam Kethaka</span>
            </div>
          </motion.div>

          {/* B. The Story (Top Right - 2 Cols) */}
          <motion.div 
            className="bento-box text-box"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="bento-title">The Story</h2>
            <p>
              I am a 19-year-old Multimedia Designer based in Sri Lanka. While many wait for university to start their journey, I dove straight into the technical mastery of design.
            </p>
            <p style={{marginTop: '15px'}}>
              I hold <strong>NVQ Levels 4 & 5</strong> in Graphic Design. I bridge the gap between complex print layouts and high-end motion graphics.
            </p>
          </motion.div>

          {/* C. Experience (Bottom Left - 2 Cols - MOVED HERE) */}
          <motion.div 
            className="bento-box wide-box" // Added wide-box class
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Calendar size={32} className="bento-icon" />
            <h3>1+ Year Experience</h3>
            <p>Agency Internships & Freelance Projects.</p>
          </motion.div>

          {/* D. Location (Bottom Middle - 1 Col) */}
          <motion.div 
            className="bento-box stat-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MapPin size={32} className="bento-icon" />
            <h3>Sri Lanka</h3>
            <p>Based in Colombo.</p>
          </motion.div>

          {/* E. Education (Bottom Right - 1 Col) */}
          <motion.div 
            className="bento-box stat-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Award size={32} className="bento-icon" />
            <h3>NVQ Level 5</h3>
            <p>Certified Designer.</p>
          </motion.div>

        </div>

        {/* 3. THE ARSENAL (Software) */}
        <div className="software-section">
          <h2 className="section-header-small">The Arsenal</h2>
          <div className="software-grid">
            <div className="sw-card">
              <BookOpen size={24} />
              <div><h4>InDesign</h4><span>Editorial Layouts</span></div>
            </div>
            <div className="sw-card">
              <Zap size={24} />
              <div><h4>After Effects</h4><span>Motion Graphics</span></div>
            </div>
            <div className="sw-card">
              <Monitor size={24} />
              <div><h4>DaVinci Resolve</h4><span>Color Grading</span></div>
            </div>
            <div className="sw-card">
              <Monitor size={24} />
              <div><h4>Premiere Pro</h4><span>Video Editing</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
<div className="about-header">
  <motion.h1 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    I don't just design.<br />
    <span style={{ color: '#666' }}>I engineer visual experiences.</span>
  </motion.h1>
</div>
export default About;