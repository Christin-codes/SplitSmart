const faqItems = document.querySelectorAll('.FAQ-item');

faqItems.forEach(item => {
    const question = item.querySelector('.FAQ-question');
    const icon = item.querySelector('.icon');

    question.addEventListener('click', () => {
        item.classList.toggle('active');

        if 
        (item.classList.contains('active')) {
            icon.textContent = "-";

        } else {
            icon.textContent = '+';
        }
    });
});