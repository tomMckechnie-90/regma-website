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

// Featured Project Section (Index.html)

function animateProjectSection() {
    const projectSection = document.querySelector('.project-section');
    if (!projectSection) {
        console.log('Project section not found.')
        return;
    }
    if (projectSection.classList.contains('animated')) {
        // This section is already animated, please do not animate again
        return;
    }

    // Select the elements from the Featured project section
    const projectImg = projectSection.querySelector('.project-img');
    const projectText = projectSection.querySelector('.project-text');

    const rect = projectSection.getBoundingClientRect(); // This line gets the position and size of the sections viewport.

    if (rect.top < window.innerHeight - 100) {
        projectSection.classList.add('animate');
        console.log('Animating Project section.');

        // Animate project text from the left
        setTimeout(() => {
            projectText.classList.remove('opacity-0', '-translate-x-8');
            projectText.classList.add('opacity-100', 'translate-x-0');
            console.log('Project text animated.')
        }, 600);

        // Animate project img from the right
        setTimeout(() => {
            projectImg.classList.remove('opacity-0', 'translate-x-8');
            projectImg.classList.add('opacity-100', 'translate-x-0');
            console.log('Project img animated.')
        }, 1200);
    }
}

window.addEventListener('scroll', animateProjectSection);
window.addEventListener('DOMContentLoaded', animateProjectSection);

// Fade in animation for review Section (Index.html)
function fadeInReviewSection() {
    const fadeInSectionReview = document.querySelector('.fade-in-section-review');

    if (!fadeInSectionReview) {
        console.log('Fade in sections not found');
        return;
    }
    if (fadeInSectionReview.classList.contains('animated')) {
        // This section is already animated, please do not animate again.
        return;
    }

    // Select the elements inside review section
    const fadeInReview = fadeInSectionReview.querySelector('.fade-in-review');

    const rect = fadeInSectionReview.getBoundingClientRect();

    // Fade in for Review
    if (rect.top < window.innerHeight - 100) {
        fadeInReview.classList.add('animated');
        console.log('Animating Fade in sections');

        setTimeout(() => {
            fadeInReview.classList.remove('opacity-0');
            fadeInReview.classList.add('opacity-100');
        }, 800);
    }
}

window.addEventListener('scroll', fadeInReviewSection);
window.addEventListener('DOMContentLoaded', fadeInReviewSection);

// Fade in for CTA section (Index.html)
function fadeInCtaSection() {
    const fadeInSectionCta = document.querySelector('.fade-in-section-cta');

    if (!fadeInSectionCta) {
        console.log('Fade in sections not found');
        return;
    }
    if (fadeInSectionCta.classList.contains('animated')) {
        // This section is already animated, please do not animate again.
        return;
    }

    // Select the elements inside the CTA section
    const fadeInCta = fadeInSectionCta.querySelector('.fade-in-cta');

    const rect = fadeInSectionCta.getBoundingClientRect();

    // Fade in for CTA
    if (rect.top < window.innerHeight - 100) {
        fadeInCta.classList.add('animated');
        console.log('Animating Fade in on CTA section');

        setTimeout(() => {
            fadeInCta.classList.remove('opacity-0');
            fadeInCta.classList.add('opacity-100');
        }, 800);
    }
}

window.addEventListener('scroll', fadeInCtaSection);
window.addEventListener('DOMContentLoaded', fadeInCtaSection)

// Packages Animation (Services.html)
function animatePackages() {
    const packagesIntroSection = document.querySelector('.packages-intro-section');
    const packagesSection = document.querySelector('.packages-section');
    if (!packagesIntroSection || !packagesSection) {
        // console.log('Packages sections not found.');
        return;
    }
    if (packagesSection.classList.contains('animated')) {
        // This section is already animated, please do not animate again
        return;
    }

    // Selectors (This grabs all your HTML classes from services.html .packages-section)
    const heading = packagesIntroSection.querySelector('.package-heading');
    const para = packagesIntroSection.querySelector('.package-para');
    const signature = packagesSection.querySelector('.signature-card');
    const ecommerce = packagesSection.querySelector('.ecommerce-card');

    const rect = packagesIntroSection.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
        packagesIntroSection.classList.add('animated');
        packagesSection.classList.add('animated');
        console.log('Animating packages intro section and cards section.');

        // Adds opacity to the package-sections heading & paragraphs for fade in effect
        setTimeout(() => {
            heading.classList.remove('opacity-0');
            heading.classList.add('opacity-100');
            para.classList.remove('opacity-0');
            para.classList.add('opacity-100');
            console.log('Heading and Paragraph elements animated.');
        }, 600)


        // Signature card comes in from the left
        setTimeout(() => {
            signature.classList.remove('opacity-0', '-translate-x-8');
            signature.classList.add('opacity-100', 'translate-x-0');
            console.log('Signature card animated.')
        }, 1200);

        // Ecommerce card comes in from the right
        setTimeout(() => {
            ecommerce.classList.remove('opacity-0', 'translate-x-8');
            ecommerce.classList.add('opacity-100', 'translate-x-0');
            console.log('Ecommerce card animated.')
        }, 1700);
    }
}

window.addEventListener('scroll', animatePackages);
window.addEventListener('DOMContentLoaded', animatePackages);


// Care Package Animation (Services.html)
function animateCarePackage() {
    const maintenanceSection = document.querySelector('.maintenance-section');
    if (!maintenanceSection) {
        // console.log('maintenance section not found.')
        return;
    }
    if (maintenanceSection.classList.contains('animated')) {
        // This section is already animated, please do not animate again
        return;
    }

    // Select the elements in maintenance-section
    const carePackageCard = maintenanceSection.querySelector('.care-package-card');
    const carePackageText = maintenanceSection.querySelector('.care-package-text');

    const rect = maintenanceSection.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
        maintenanceSection.classList.add('animated');
        console.log('Animating Maintenance section');

        // Animate care package card from the left
        setTimeout(() => {
            carePackageCard.classList.remove('opacity-0', '-translate-x-8');
            carePackageCard.classList.add('opacity-100', 'translate-x-0');
            console.log('Care Package card animated')
        }, 600);

        // Animated care package text from the right
        setTimeout(() => {
            carePackageText.classList.remove('opacity-0', 'translate-x-8');
            carePackageText.classList.add('opacity-100', 'translate-x-0');
            console.log('Care Package text animated')
        }, 1200);
    }
}

window.addEventListener('scroll', animateCarePackage);
window.addEventListener('DOMContentLoaded', animateCarePackage);


// Animate contact section (contact.html)
function animateContactSection() {
    const contactSection = document.querySelector('.contact-section');
    if (!contactSection) {
        console.log('Contact section not found.');
        return;
    }

    if (contactSection.classList.contains('animated')) {
        // This section is already animated, please do not animate again
        return;
    }

    // Select elements from the contact-section
    const contactInfo = contactSection.querySelector('.contact-info');
    const contactForm = contactSection.querySelector('.contact-form');

    const rect = contactSection.getBoundingClientRect(); // This line gets the position and size of the sections viewport.

    if (rect.top < window.innerHeight - 100) {
        contactSection.classList.add('animated');
        console.log('Animating contact section');

        // Animate contact-info from the left
        setTimeout(() => {
            contactInfo.classList.remove('opacity-0', '-translate-x-8');
            contactInfo.classList.add('opacity-100', 'translate-x-0');

            console.log('Contact info animated.');
        }, 600);

        // Animate contact-form
        setTimeout(() => {
            contactForm.classList.remove('opacity-0', 'translate-x-8');
            contactForm.classList.add('opacity-100', 'translate-x-0');

            console.log('Contact form animated.');
        }, 1200);
    }
}

window.addEventListener('scroll', animateContactSection);
window.addEventListener('DOMContentLoaded', animateContactSection);