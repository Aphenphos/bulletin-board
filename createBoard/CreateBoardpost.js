import { createPost } from '../services/SignInService.js';
import { getUser } from '../services/SignInService.js';

const postForm = document.getElementById('create-post');
async function handlePageLoad() {
    const user = await getUser();

    if (!user) {
        location.replace('../index.html');
    }

}

postForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const data = new FormData(postForm);
    await createPost({
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    });
    location.replace('../');
});


handlePageLoad();