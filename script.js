const signInBtnLink = document.querySelector('.signInBtn-link');  // Sign In link (from sign-up form)
const signUpBtnLink = document.querySelector('.signUpBtn-link');  // Sign Up link (from sign-in form)
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
