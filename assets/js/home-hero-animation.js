// Check if the hero animation has already played this session
if (sessionStorage.getItem('heroAnimated')) {
    // if yes, skip animation
    document.getElementById('main-nav').classList.remove('hidden', 'opacity-0');
    document.getElementById('main-nav').classList.add('opacity-100');
    document.getElementById('main-hero-content').classList.remove('hidden', 'opacity-0');
    document.getElementById('main-hero-content').classList.add('opacity-100');
    document.body.style.overflow = '';
} else {
    // If the above is false, run the animation.
    document.addEventListener('DOMContentLoaded', function () {
        // Scroll locks by hiding the body's overflow
        document.body.style.overflow = 'hidden';

        // Get the elements from hero and nav
        const nav = document.getElementById('main-nav');
        const heroContent = document.getElementById('main-hero-content');
        const heroVideo = document.getElementById('main-hero-video');

        // Make sure the nav and hero content are hidden (in case user reloads mid-animation)
        nav.classList.add('hidden', 'opacity-0');
        heroContent.classList.add('opacity-0');

        // This will listen for the video to stop playing before executing the logic
        heroVideo.addEventListener('ended', function () {
            // Nav bar fades in
            nav.classList.remove('hidden');
            setTimeout(() => {
                nav.classList.remove('opacity-0');
                nav.classList.add('opacity-100');
            }, 100);

            // the hero's text/buttons will then fade in with a staggered effect
            setTimeout(() => {
                heroContent.classList.remove('opacity-0');
                heroContent.classList.add('opacity-100');
            }, 1200);

            // unlock the scroll after animations are finished
            setTimeout(() => {
                document.body.style.overflow = '';
            }, 1400);

            // Set the flag so the animation does not run again during users session
            sessionStorage.setItem('heroAnimated', 'true');
        });
    });
}

