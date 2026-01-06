const successMessage = document.querySelector('.after_submit');
const form = document.querySelector('#unfoldForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.style.display = 'none';
    successMessage.style.display = 'block';
    successMessage.classList.add('fade-in');
})

btn.addEventListener('click', () => {
    submit_text.setAttribute('style', 'display: block');
})