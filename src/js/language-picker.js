function handleLanguageChange(event) {
    event.preventDefault();
    const selectedLanguage = event.target.elements['lang'].value;
    const redirectURL = (selectedLanguage === 'es') ? '/es' : '/';

    // Redirect to the selected language page
    window.location.href = redirectURL;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.language-picker__form');
    form.addEventListener('submit', handleLanguageChange);
});