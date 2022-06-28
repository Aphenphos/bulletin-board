export function renderBoardPost(post) {
    const div = document.createElement('div');
    div.classList.add('post-container');

    const h1 = document.createElement('h1');
    h1.classList.add('post-title');
    h1.textContent = post.title;

    const p1 = document.createElement('p');
    p1.textContent = post.description;

    const p2 = document.createElement('p');
    p2.textContent = post.contact;

    div.append(h1, p1, p2);

    return div;
}