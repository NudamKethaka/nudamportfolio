import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// 1. The Project Data (Categorized)
const projects = [
  {
    id: 1,
    title: "Lifestyle Magazine Spread",
    category: "Layout",
    type: "Editorial Design",
    desc: "A 10-page editorial layout focusing on typography and grid systems.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop" 
  },
  {
    id: 2,
    title: "Rapidkeys Tech",
    category: "Brand",
    type: "Visual Identity",
    desc: "Logo ecosystem and brand guidelines for a modern tech retailer.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Agency Promo Reel",
    category: "Motion",
    type: "Video Editing",
    desc: "Fast-paced promotional cut in Premiere Pro with kinetic typography.",
    image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b13?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Annual Report 2023",
    category: "Layout",
    type: "Corporate Print",
    desc: "Clean, data-driven layout design for a corporate financial report.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Neon Streamer Pack",
    category: "Motion",
    type: "VFX & Overlay",
    desc: "Animated overlays and stinger transitions for a Twitch streamer.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Coffee House Rebrand",
    category: "Brand",
    type: "Packaging & Logo",
    desc: "Warm, organic branding for a local Sri Lankan coffee roaster.",
    image: "https://images.unsplash.com/photo-1517064646067-6eebc45d12ae?q=80&w=1000&auto=format&fit=crop"
  }
];

// Categories for the filter buttons
const categories = ["All", "Layout", "Motion", "Brand"];

const Work = () => {
  const [filter, setFilter] = useState("All");

  // Logic to filter projects based on selection
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(item => item.category === filter);

  return (
    <div className="page" style={{ paddingTop: '120px' }}>
      
      <div className="container">
        {/* Header */}
        <div className="work-header">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="page-title"
          >
            Selected Works.
          </motion.h1>
          <p className="page-subtitle">
            A collection of Editorial Design, Motion Graphics, and Brand Identities tailored for impact.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-container">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="work-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="work-card"
              >
                <div className="work-image-wrap">
                  <img src={project.image} alt={project.title} />
                  <div className="work-overlay">
                    <span className="view-project">View Case Study <ArrowUpRight size={20} /></span>
                  </div>
                </div>
                
                <div className="work-info">
                  <div className="work-meta">
                    <span className="work-category">{project.category}</span>
                    <span className="work-dot">•</span>
                    <span className="work-type">{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default Work;