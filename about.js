// TIMELINE for smooth page load animations
const tl = gsap.timeline({
  defaults: { ease: "power2.out", duration: 1 }
});

// Page fade-in
tl.from("#about-page-body", { opacity: 0 });

// Heading
tl.from("#about-heading", { opacity: 0, y: -30 });

// Description
tl.from("#about-description", { opacity: 0, y: 20 }, "-=0.6");

// Community section
tl.from("#about-community-image", { opacity: 0, x: -50 }, "-=0.5");
tl.from("#about-community-text", { opacity: 0, x: 50 }, "-=0.8");

// Stats
tl.from("#about-stats-text", { opacity: 0, scale: 0.9 }, "-=0.7");

// CTA
tl.from("#about-cta-heading", { opacity: 0, y: -20 }, "-=0.5");
tl.from("#about-cta-description", { opacity: 0, y: 20 }, "-=0.7");
tl.from("#about-cta-link", { opacity: 0, scale: 0.8 }, "-=0.6");

// -----------------------------
// EXTRA INDIVIDUAL ANIMATIONS (Not part of timeline)

// Floating animation for CTA button (looping)
gsap.to("#about-cta-link", {
  y: -5,
  repeat: -1,
  yoyo: true,
  duration: 1.5,
  delay : 2.5,
  ease: "sine.inOut"
});


gsap.registerPlugin(ScrollTrigger);

gsap.from("#about-stats-text", {
  scrollTrigger: {
    trigger: "#about-stats-text",
    start: "top 80%",
  },
  opacity: 0,
  scale: 0.9,
  duration: 1,
  delay : 10 ,
  ease: "back.out(1.7)"
});

