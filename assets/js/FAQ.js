document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answer');

    questions.forEach(function (question, i) {
        question.addEventListener('click', function () {
            // If the answer is open, close it
            if (!answers[i].classList.contains('hidden')) {
                answers[i].classList.remove('opacity-100');
                answers[i].classList.add('opacity-0');
                setTimeout(() => {
                    answers[i].classList.add('hidden');
                }, 500);
            } else {
                // If not close all the answers then open the one that is clicked
                answers.forEach((ans, idx) => {
                    if (idx !== i) {
                        ans.classList.remove('opacity-100');
                        ans.classList.add('opacity-0');
                        ans.classList.add('hidden');
                    }
                });

                answers[i].classList.remove('hidden');
                // show and fade in the clicked answer.
                setTimeout(() => {
                    answers[i].classList.remove('opacity-0');
                    answers[i].classList.add('opacity-100');
                }, 10);
            }
        })
    })
});
