

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector('.animate-section')
    if (!section) return;

    const img = section.querySelector('.animate-img');
    const header = section.querySelector('.animate-header');
    const para = section.querySelector('.animate-para');
    const listItems = section.querySelectorAll('.animate-list');

    function animateWhySection() {
        const rect = section.getBoundingClientRect();
        // If the top of the section is within 100px of the viewport bottom
        if (rect.top < window.innerHeight - 100 && !section.classList.contains('animated')) {
            section.classList.add('animated'); // Prevents re-triggering

            // Animation for the image
            img.classList.remove('opacity-0', 'translate-y-8');
            img.classList.add('opacity-100', 'translate-y-0');

            // Animation for the header with a 300ms delay
            setTimeout(() => {
                header.classList.remove('opacity-0', 'translate-y-8');
                header.classList.add('opacity-100', 'translate-y-0');
            }, 300);

            // Animation for the paragraph with a 600ms delay
            setTimeout(() => {
                para.classList.remove('opacity-0', 'translate-y-8');
                para.classList.add('opacity-100', 'translate-y-0');
            }, 600);

            // Animation for the list item, staggered.
            listItems.forEach((li, i) => {
                setTimeout(() => {
                li.classList.remove('opacity-0', 'translate-y-8');
                li.classList.add('opacity-100', 'translate-y-0');
            }, 900 + i * 200); // 900ms for the 1st list item then +200ms added on for each item after
            });
        }
    }

    window.addEventListener('scroll', animateWhySection)
    animateWhySection();
})
