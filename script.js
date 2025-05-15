// Scroll-triggered fade-in-up animation for project cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add fade-in-up animation with staggered delay
          entry.target.style.animation = `fadeInUp 0.8s ease-out forwards`;
          entry.target.style.animationDelay = `${index * 100}ms`;
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    cards.forEach((card) => {
      observer.observe(card);
    });
  });
  