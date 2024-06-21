const container = document.querySelector('.container');

function renderPosts() {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    for (let i = 0; i < storedPosts.length; i++) {
        const post = storedPosts[i];
        
        const section = document.createElement('section');
        section.classList.add('card');

        const heading = document.createElement('h2');
        heading.textContent = post.title;

        const para1 = document.createElement('p');
        para1.textContent = post.content;

        const para2 = document.createElement('p');
        para2.textContent = post.username;

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