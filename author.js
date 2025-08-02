// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate intro section
gsap.from("#author-intro h2", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#author-intro h2",
    start: "top 85%",
  }
});

gsap.from("#author-intro p", {
  y: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#author-intro",
    start: "top 80%",
  }
});

// Animate stats cards
gsap.from("#author-stats .stat", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: "#author-stats",
    start: "top 85%",
  }
});

// Fade in footer
gsap.from("#author-footer", {
  opacity: 0,
  y: 40,
  duration: 1.2,
  scrollTrigger: {
    trigger: "#author-footer",
    start: "top 90%",
  }
});
