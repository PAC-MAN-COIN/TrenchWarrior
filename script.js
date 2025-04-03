// ---=== Footer Year ===---
// Updates the year in the footer automatically
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ---=== Smooth Scroll for Anchor Links ===---
// Handles smooth scrolling when clicking links like <a href="#episodes">
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if the href is more than just "#"
        if (this.getAttribute('href').length > 1) {
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                e.preventDefault(); // Prevent default jump
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Align top of target element to the top of the viewport
                });
            }
        }
    });
});


// ---=== Reveal Elements on Scroll ===---
// Adds 'visible' class to elements with 'reveal' class when they enter the viewport
const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible to save resources
                // observer.unobserve(entry.target);
            }
            // Optional: Remove 'visible' class if element scrolls out of view
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    }, {
        root: null, // observes intersections relative to the viewport
        threshold: 0.1 // Trigger when 10% of the element is visible (adjust as needed)
    });

    // Observe each .reveal element
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}


// ---=== Placeholder: Episode Click Interaction ===---
// Example: Add click listener to episode thumbnails
// Replace alert with actual video player/modal logic or link redirection
document.querySelectorAll('.episode-thumbnail').forEach(thumb => {
    thumb.addEventListener('click', (e) => {
        // Find the closest ancestor article card
        const card = e.currentTarget.closest('.episode-card');
        if (card) {
            const title = card.querySelector('h3')?.textContent || 'Episode';
            // Find the first watch link (e.g., X)
            const watchLink = card.querySelector('.watch-links a')?.href;

            console.log(`Clicked on ${title}.`);

            if (watchLink && watchLink !== '#') {
                 // Option 1: Redirect to the first available watch link
                 // window.open(watchLink, '_blank');

                 // Option 2: Alert for now (as per original request)
                 alert(`You clicked on ${title}! Implement video player or link redirection here. Target link: ${watchLink}`);

                 // Option 3: Implement a modal popup here
                 // showVideoModal(watchLink); // You'd need to create this function
            } else {
                 alert(`You clicked on ${title}! (No video link configured yet)`);
            }
        }
    });
});


// ---=== Console Log on Load ===---
console.log("Trench Warriors Script Loaded - Current Time:", new Date().toLocaleTimeString(), "- Hold the Line!");
console.log("Remember to replace placeholder images and links!");