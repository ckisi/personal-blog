const body = document.body;
const modeButton = document.getElementById('modeButton');

function modeChange() {
    // Adds dark-mode as a class to body if it does not have it and vice versa
    body.classList.toggle('dark-mode');
    // Checks if the body element has the class of dark-mode and returns true or false
    const isDarkMode = body.classList.contains('dark-mode');
    // Sets that true or false value to local storage
    localStorage.setItem('darkMode', isDarkMode);
}

const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Checks if dark mode was previously enabled so it works on all pages and when you come back to the site
if (isDarkMode) {
    body.classList.add('dark-mode');
}

modeButton.addEventListener('click', modeChange);