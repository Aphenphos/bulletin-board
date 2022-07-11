// import services and utilities

import { renderBoardPost } from './components/renderBoardPost.js';
import { getPosts, getUser } from './services/SignInService.js';

// import component creators
const bulletinBoard = document.getElementById('bulletin-board');
const signInButton = document.getElementById('sign-in');
const addPostButton = document.getElementById('add-post');
// declare state variables
async function handlePageLoad() {
    const user = await getUser();
    addPostButton.addEventListener('click', () => {
        if (user) {
            signInButton.textContent = user.email;
            location.replace('/createBoard');
        } else {
            location.replace('./signin');
        }   
    });
    display();
}

signInButton.addEventListener('click', () => {
    location.replace('/signin');
});

async function generateAllPosts(root) {
    const posts = await getPosts();
    for (const post of posts) {
        const postContainer = renderBoardPost(post);
        root.append(postContainer);
    }
}


// write handler functions

function display() {
    generateAllPosts(bulletinBoard);
}
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

// Roll-up display function that renders (calls with state) each component
handlePageLoad();