document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answer');
    const closeAnswerBtn = document.querySelectorAll('.close-answer');

    // When a question is clicked
    questions.forEach(function (question, i) {
        question.addEventListener('click', function () {
            // This will close the current open answer when a new one is clicked.
            answers.forEach(function (ans) {
                ans.classList.add('hidden');
            });
            closeAnswerBtn.forEach(function (btn) {
                btn.classList.add('hidden');
            });

            // Show the answer and close button for the question that has been clicked.
            answers[i].classList.remove('hidden');
            closeAnswerBtn[i].classList.remove('hidden');
        });
    });
    // When a close button is clicked
    closeAnswerBtn.forEach(function (btn, i) {
        btn.addEventListener('click', function (event) {
            // This will stop the click opening the answer again
            event.stopPropagation();

            // This will then hide the answers and close buttons
            answers[i].classList.add('hidden');
            btn.classList.add('hidden');
        });
    });
});
