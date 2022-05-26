const btn = document.querySelector('.mobile-nav-button');
const icon = document.querySelector('.mobile-nav-button__icon');

btn.addEventListener('click', () => {
    icon.classList.toggle('active');
})

