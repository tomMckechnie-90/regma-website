document.addEventListener('DOMContentLoaded', function () {
    // Grab audio the ID's from about.html
    const tomAudio = document.getElementById('tom-audio');
    const helenaAudio = document.getElementById('helena-audio');

    // grab the button classes from about.html
    const tomButton = document.querySelector('.tom-btn');
    const helenaButton = document.querySelector('.helena-btn');

    function resetButtonStyles() {
        tomButton.classList.remove('border-2', 'border-[var(--regma-accent)]', 'text-[var(--regma-accent)]');
        tomButton.classList.add('bg-[var(--regma-accent)]', 'text-[var(--regma-text-dark)]');

        helenaButton.classList.remove('border-2', 'border-[var(--regma-accent)]', 'text-[var(--regma-accent)]');
        helenaButton.classList.add('bg-[var(--regma-accent)]', 'text-[var(--regma-text-dark)]');
    }

    // When Tom's button is clicked...
    tomButton.addEventListener('click', function () {
        // Pause Helena's if it is playing
        helenaAudio.pause();
        helenaAudio.currentTime = 0;

        // Play Tom's audio
        tomAudio.currentTime = 0;
        tomAudio.play();
    });

    // When Helena's button is clicked....
    helenaButton.addEventListener('click', function () {
        // pause Tom's audio if it is playing

        tomAudio.pause();
        tomAudio.currentTime = 0;

        // Play Helena's audio
        helenaAudio.currentTime = 0;
        helenaAudio.play();
    });

    // Tom audio events
    tomAudio.addEventListener('play', function () {
        resetButtonStyles();
        tomButton.classList.remove('bg-[var(--regma-accent)]', 'text-[var(--regma-text-dark)]');
        tomButton.classList.add('border-2', 'border-[var(--regma-accent)]', 'text-[var(--regma-accent)]');
    });
    tomAudio.addEventListener('pause', resetButtonStyles);
    tomAudio.addEventListener('ended', resetButtonStyles);

    // Helena audio events
    helenaAudio.addEventListener('play', function () {
        resetButtonStyles();
        helenaButton.classList.remove('bg-[var(--regma-accent)]', 'text-[var(--regma-text-dark)]');
        helenaButton.classList.add('border-2', 'border-[var(--regma-accent)]', 'text-[var(--regma-accent)]');
    });
    helenaAudio.addEventListener('pause', resetButtonStyles);
    helenaAudio.addEventListener('ended', resetButtonStyles);
});

// Add border-2 border-[var(--regma-accent)] text-[var(--regma-accent)]
// Remove bg-[var(--regma-accent)] text-[var(--regma-text-dark)]