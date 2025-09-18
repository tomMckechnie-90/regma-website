const cards = document.querySelectorAll('.card-slide');

// Why Choose regma section (Index.html)
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector('.animate-section')
    if (!section) {
        // console.log('No. .animate-section found.')
        return;
    }

    const img = section.querySelector('.animate-img');
    const header = section.querySelector('.animate-header');
    const para = section.querySelector('.animate-para');
    const listItems = section.querySelectorAll('.animate-list');

    function animateWhySection() {
        const rect = section.getBoundingClientRect();
        // console.log('Why section position', rect.top);
        // If the top of the section is within 100px of the viewport bottom
        if (rect.top < window.innerHeight - 100 && !section.classList.contains('animated')) {
            section.classList.add('animated'); // Prevents re-triggering
            console.log('Animating Why Choose Regma Section.')

            // Animation for the image
            img.classList.remove('opacity-0', 'translate-y-8');
            img.classList.add('opacity-100', 'translate-y-0');
            console.log('Image animated');

            // Animation for the header with a 300ms delay
            setTimeout(() => {
                header.classList.remove('opacity-0', 'translate-y-8');
                header.classList.add('opacity-100', 'translate-y-0');
                console.log('Header animated.')
            }, 300);

            // Animation for the paragraph with a 600ms delay
            setTimeout(() => {
                para.classList.remove('opacity-0', 'translate-y-8');
                para.classList.add('opacity-100', 'translate-y-0');
                console.log('Paragraph animated')
            }, 600);

            // Animation for the list item, staggered.
            listItems.forEach((li, i) => {
                setTimeout(() => {
                    li.classList.remove('opacity-0', 'translate-y-8');
                    li.classList.add('opacity-100', 'translate-y-0');
                    console.log(`List item ${i + 1} animated`)
                }, 900 + i * 200); // 900ms for the 1st list item then +200ms added on for each item after
            });
        }
    }

    window.addEventListener('scroll', animateWhySection)
    animateWhySection();
})

// Card Animation (Index.html)
function animateCards() {
    const cardSection = document.querySelector('.card-section') // Select the grid container with cards
    if (!cardSection) {
        // console.log('No .card-section found.');
        return;
    }
    if (cardSection.classList.contains('animated')) {
        // This is already animated, do not animate again.
        return;
    }

    const rect = cardSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        cardSection.classList.add('animated'); // prevent re-triggering
        console.log('Animating cards.')

        cards.forEach((card, i) => {
            setTimeout(() => {
                card.classList.remove('opacity-0', '-translate-x-8');
                card.classList.add('opacity-100', 'translate-x-0');
                console.log(`Card ${i + 1} animated.`)
            }, i * 1000) // Time delay
        });
    }

}

window.addEventListener('scroll', animateCards);
window.addEventListener('DOMContentLoaded', animateCards);

// Animate case study section (Case-study.html)
function animateCaseStudySection() {
    const caseStudySection = document.querySelector('.case-study-section');

    if (!caseStudySection) {
        console.log('Case study section not found.');
        return;
    }
    if (caseStudySection.classList.contains('animated')) {
        // This section has already been animated, please do not animate again
        return;
    }

    // Select elements in the case study section
    const caseStudyCardOne = caseStudySection.querySelector('.case-study-card-one');
    const caseStudyCardTwo = caseStudySection.querySelector('.case-study-card-two');
    const caseStudyCardThree = caseStudySection.querySelector('.case-study-card-three');
    const caseStudyCardFour = caseStudySection.querySelector('.case-study-card-four');

    const rect = caseStudySection.getBoundingClientRect(); // This line gets the position and size in sections viewport

    if (rect.top < window.innerHeight - 100) {
        caseStudySection.classList.add('animated');
        console.log('Animating case study section');

        // Animations for cards one-four with time delay

        // Card one
        setTimeout(() => {
            caseStudyCardOne.classList.remove('opacity-0', '-translate-x-8');
            caseStudyCardOne.classList.add('opacity-100', 'translate-x-0');
            console.log('Card one animated');
        }, 600);

        // Card two
        setTimeout(() => {
            caseStudyCardTwo.classList.remove('opacity-0', 'translate-x-8');
            caseStudyCardTwo.classList.add('opacity-100', 'translate-x-0');
            console.log('Card two animated');
        }, 1200);

        // Card three
        setTimeout(() => {
            caseStudyCardThree.classList.remove('opacity-0', '-translate-x-8');
            caseStudyCardThree.classList.add('opacity-100', 'translate-x-0');
            console.log('Card three animated');
        }, 1700);

        // Card four
        setTimeout(() => {
            caseStudyCardFour.classList.remove('opacity-0', 'translate-x-8');
            caseStudyCardFour.classList.add('opacity-100', 'translate-x-0');
            console.log('Card four animated');
        }, 2300);
    }
}

window.addEventListener('scroll', animateCaseStudySection);
window.addEventListener('DOMContentLoaded', animateCaseStudySection);

// Animations for sliding in from the left or right
function animatedSections() {
    const slideInSection = document.querySelectorAll('.slide-in-sections');
    console.log('slideInSection NodeList:', slideInSection);
    if (!slideInSection.length) {
        // Cannot find the section do not run the function
        console.log('Slide in animation not found');
        return;
    }
    slideInSection.forEach(section => {
        if (section.classList.contains('animated')) {
            // This section as been animated, do not animate again.
            return;
        }

        // Select the elements in the animated-sections
        const slideRight = section.querySelector('.slide-right');
        const slideLeft = section.querySelector('.slide-left');

        // This line gets the postion and size of the section viewport
        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            section.classList.add('animated');
            console.log('Animation in progress');

            // Slide in from the left
            setTimeout(() => {
                if (slideLeft) {
                    slideLeft.classList.remove('opacity-0', '-translate-x-8');
                    slideLeft.classList.add('opacity-100', 'translate-x-0');
                    console.log('slide in left animated.');
                }
            }, 1200);

            // slide in from the right
            setTimeout(() => {
                if (slideRight) {
                slideRight.classList.remove('opacity-0', 'translate-x-8');
                slideRight.classList.add('opacity-100', 'translate-x-0');
                console.log('slide in right animated.');
                }
            }, 600);
        }
    });
}

window.addEventListener('scroll', animatedSections);
window.addEventListener('DOMContentLoaded', animatedSections);

// Fade in Animations
function fadeInSections() {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    console.log('fadeInSections NodeList:', fadeInSections);
    if(!fadeInSections.length) {
        console.log('Fade in animation not found');
        return;
    }
    fadeInSections.forEach(section => {
        if (section.classList.contains('animated')) {
            return;
        }

        const fadeIn = section.querySelector('.fade-in');

        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight -100){
            section.classList.add('animated');
            

            setTimeout (() => {
                if (fadeIn) {
                    fadeIn.classList.remove('opacity-0');
                    fadeIn.classList.add('opacity-100');
                    console.log('fade in animated.');
                }
            }, 300);
        }
    });
}

window.addEventListener('scroll', fadeInSections);
window.addEventListener('DOMContentLoaded', fadeInSections);