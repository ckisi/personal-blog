const container = document.querySelector('.container');
const backButton = document.querySelector('.button1');

backButton.addEventListener('click', function() {
    window.location.href = 'https://ckisi.github.io/personal-blog/';
});

// Posts the information from local storage onto the website as individual cards
function renderPosts() {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    // Loops through all of the stored posts
    for (let i = 0; i < storedPosts.length; i++) {
        const post = storedPosts[i];
        
        // Creates the new elements and gives them the content from local storage
        const section = document.createElement('section');
        section.classList.add('card');

        const heading = document.createElement('h2');
        heading.textContent = post.title;

        const para1 = document.createElement('p');
        para1.textContent = post.content;

        const para2 = document.createElement('p');
        para2.textContent = post.username;

        //Appends all of the created elements to their respective parent
        section.appendChild(heading);
        section.appendChild(para1);
        section.appendChild(para2);

        container.appendChild(section);
    }
}

function init() {
    renderPosts();
}

init();
