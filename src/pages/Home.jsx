import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Layout, Video, PenTool, ArrowRight, Layers, Zap, CheckCircle, ExternalLink } from 'lucide-react';

// --- ANIMATION SETTINGS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

// --- DATA ---
const featuredProjects = [
  {
    id: 1,
    title: "Rapidkeys Branding",
    category: "Visual Identity",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Lifestyle Magazine",
    category: "Editorial Layout",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Agency Promo Reel",
    category: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b13?q=80&w=1000&auto=format&fit=crop"
  }
];

const Home = () => {
  const [loading3D, setLoading3D] = useState(true);

  return (
    <div className="home-page" style={{ overflow: 'hidden' }}>
      
      {/* 1. HERO SECTION WITH VIDEO BACKGROUND */}
      <div className="hero-full-width">
        
        {/* --- VIDEO BACKGROUND START --- */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            {/* High quality abstract dark background video */}
            <source src="\hero-video.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay to make text readable */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        </div>
        {/* --- VIDEO BACKGROUND END --- */}

        <div className="hero-content">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 variants={fadeInUp}>VISUALS THAT<br />MOVE PEOPLE.</motion.h1>
            <motion.p variants={fadeInUp} className="hero-sub">
              Nudam Kethaka. Multimedia Designer specializing in high-end Editorial Layouts, Brand Identity, and Motion Graphics.
            </motion.p>
            <motion.div variants={fadeInUp} className="cta-group">
              <Link to="/work" className="btn-main">View My Work</Link>
              <Link to="/contact" className="btn-outline">Let's Talk</Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 2. TICKER */}
      <div className="ticker-wrap">
        <div className="ticker">
          <span className="ticker-item">Motion Graphics • Brand Identity • Editorial Design • Video Editing • Color Grading •</span>
          <span className="ticker-item">Motion Graphics • Brand Identity • Editorial Design • Video Editing • Color Grading •</span>
        </div>
      </div>

      {/* 3. INTERACTIVE 3D SECTION */}
      <div className="section-padding" style={{ background: '#050505', position: 'relative' }}>
        <div className="container">
          <div className="split-layout">
            
            <motion.div 
              className="text-side"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <h2 className="section-title-large">Next Gen<br /><span style={{color:'#3b82f6'}}>Dimensions.</span></h2>
              <p className="section-desc">
                Static design is the past. I incorporate 3D depth and motion into my work to create experiences that users can interact with.
              </p>
              <div className="stats-row">
                <div><h3>3D</h3><span>Modeling</span></div>
                <div><h3>60fps</h3><span>Smooth Motion</span></div>
              </div>
            </motion.div>

            <div className="spline-container">
              {loading3D && <div className="loader-3d">Loading 3D Model...</div>}
              <Spline 
                scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
                onLoad={() => setLoading3D(false)}
              />
            </div>

          </div>
        </div>
      </div>

      {/* 4. FEATURED WORK GRID */}
      <div className="container section-padding">
        <div className="section-header">
          <h2>Selected Works.</h2>
          <Link to="/work" className="link-arrow">View All Projects <ArrowRight size={16} /></Link>
        </div>
        
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="featured-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="f-image-wrap">
                <img src={project.image} alt={project.title} />
                <div className="f-overlay"><ExternalLink color="black" /></div>
              </div>
              <div className="f-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5. SERVICES */}
      <div className="section-padding" style={{borderTop: '1px solid #222'}}>
        <div className="container">
          <div className="section-header"><h2>My Expertise.</h2></div>
          <div className="services-grid">
            <div className="service-card">
              <Layout size={40} color="#3b82f6" />
              <h3>Print & Editorial</h3>
              <p style={{color:'#999'}}>Magazines, Annual Reports, and complex layouts designed with typographic precision.</p>
            </div>
            <div className="service-card">
              <Video size={40} color="#3b82f6" />
              <h3>Motion & Video</h3>
              <p style={{color:'#999'}}>Editing and animating in Premiere & After Effects to turn static assets into stories.</p>
            </div>
            <div className="service-card">
              <PenTool size={40} color="#3b82f6" />
              <h3>Visual Identity</h3>
              <p style={{color:'#999'}}>Logos, branding, and visual systems that stand out in the global market.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="container section-padding" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>Ready to create?</h2>
        <Link to="/contact" className="btn-main" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          Start a Project <ArrowRight size={20} />
        </Link>
      </div>

    </div>
  );
};

export default Home;