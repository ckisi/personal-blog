const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

// Accesses existing posts or creates a new array for a new post
let posts = JSON.parse(localStorage.getItem('posts')) || [];

// Submits the blog data and logs it to local storage
submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    if (username === '' || title === '' || content === '') {
        window.alert('Please complete the form');
    } else {
    const post = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
    };
    
    //Adds the post to the posts array
    posts.push(post);

    //Logs the posts in local storage
    localStorage.setItem('posts', JSON.stringify(posts));
    
    // Clears the input fields
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';

    // Redirects to blog posts page
    window.location.href = 'https://ckisi.github.io/blog.html';
    }
});
