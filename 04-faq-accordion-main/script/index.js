document.addEventListener('DOMContentLoaded', () => {
    const questionBtns = document.querySelectorAll('.question__btn');

    questionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const container = btn.parentElement;
            const icon = btn.querySelector('.toggle-icon');

            container.classList.toggle('active');

            if (container.classList.contains('active')) {
                icon.src = './assets/images/icon-minus.svg';
            } else {
                icon.src = './assets/images/icon-plus.svg';
            }

            questionBtns.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    otherBtn.parentElement.classList.remove('active');
                    otherBtn.querySelector('.toggle-icon').src = './assets/images/icon-plus.svg';
                }
            });
        });
    });
});
