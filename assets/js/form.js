const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

// Submits the blog data and logs it to local storage
submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    if (username === '' || title === '' || content === '') {
        window.alert('Please complete the form');
    } else {
    localStorage.setItem('username', username);
    localStorage.setItem('title', title);
    localStorage.setItem('content', content);
    
    // Clears the input fields
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';

    // Redirects to blog posts page
    window.location.href = '../blog.html';
    }
});