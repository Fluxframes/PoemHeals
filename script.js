// This script handles the animations that trigger on scroll and the mobile menu.

// Wait for the entire webpage to load before running the script.
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    // Check if the menu icon and mobile nav exist on the page
    if (menuIcon && mobileNav) {
        // Listen for a click on the hamburger icon
        menuIcon.addEventListener('click', () => {
            // Toggle the 'is-open' class on both the mobile navigation and the icon itself
            // This will trigger the CSS to show/hide the menu and animate the icon to an 'X'
            mobileNav.classList.toggle('is-open');
            menuIcon.classList.toggle('is-open');
        });
    }


    // --- Scroll Animation Logic ---
    // Select all elements that have the class 'animate-on-scroll'.
    // These are the sections we want to animate as they appear.
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Check if there are any elements to animate.
    if (animatedElements.length === 0) {
        return; // If not, stop the script.
    }

    // The Intersection Observer API is a modern browser feature that
    // lets us know when an element enters the screen (viewport).
    const observer = new IntersectionObserver((entries) => {
        // 'entries' is a list of elements being observed.
        entries.forEach(entry => {
            // 'isIntersecting' is true if the element is currently on screen.
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to the element.
                // The CSS will then apply the fade-in and slide-up animation.
                entry.target.classList.add('is-visible');

                // Once the animation has happened, we don't need to watch this element anymore.
                // This improves performance.
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Options for the observer:
        // 'threshold: 0.1' means the animation will trigger when at least 10%
        // of the element is visible on the screen.
        threshold: 0.1
    });

    // Loop through each of our selected elements and tell the observer to "watch" it.
    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
