const submit_text = document.querySelector('.after_submit');
const btn = document.querySelector('.cta_btn');

btn.addEventListener('click', () => {
    submit_text.setAttribute('style', 'display: block');
})