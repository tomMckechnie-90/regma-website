document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answer');

    questions.forEach(function (question, i) {
        question.addEventListener('click', function () {
            // If the answer is open, close it
            if (!answers[i].classList.contains('hidden')) {
                answers[i].classList.add('hidden');
            } else {
                // If not close all the answers then open the one that is clicked
                answers.forEach(ans => ans.classList.add('hidden'));
                answers[i].classList.remove('hidden');
            }
        })
    })
});
