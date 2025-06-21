function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// ========================================================= //

const minIcon = document.querySelector('.faq-icon');
const faqContent = document.querySelector('.faq-answer');

function toggleFaq() {
    const faqVisibleContent = faqContent.style.display === 'block';
    faqContent.style.display = faqVisibleContent ? 'none' : 'block';
    minIcon.textContent = faqVisibleContent ? '+' : '-';
}

// ========================================================= //

const minIcon2 = document.querySelector('.faq-icon2');
const faqContent2 = document.querySelector('.faq-answer2');

function toggleFaq2() {
    const faqVisibleContent = faqContent2.style.display === 'block';
    faqContent2.style.display = faqVisibleContent ? 'none' : 'block';
    minIcon2.textContent = faqVisibleContent ? '+' : '-';
}

// ========================================================= //

const minIcon3 = document.querySelector('.faq-icon3');
const faqContent3 = document.querySelector('.faq-answer3');

function toggleFaq3() {
    const faqVisibleContent = faqContent3.style.display === 'block';
    faqContent3.style.display = faqVisibleContent ? 'none' : 'block';
    minIcon3.textContent = faqVisibleContent ? '+' : '-';
}

// ========================================================= //

const minIcon4 = document.querySelector('.faq-icon4');
const faqContent4 = document.querySelector('.faq-answer4');

function toggleFaq4() {
    const faqVisibleContent = faqContent4.style.display === 'block';
    faqContent4.style.display = faqVisibleContent ? 'none' : 'block';
    minIcon4.textContent = faqVisibleContent ? '+' : '-';
}

// ========================================================= //

const minIcon5 = document.querySelector('.faq-icon5');
const faqContent5 = document.querySelector('.faq-answer5');

function toggleFaq5() {
    const faqVisibleContent = faqContent5.style.display === 'block';
    faqContent5.style.display = faqVisibleContent ? 'none' : 'block';
    minIcon5.textContent = faqVisibleContent ? '+' : '-';
}