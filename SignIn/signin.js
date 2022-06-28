import createAuthError from '../components/AuthError.js';
import { getUser, signIn, signUp } from '../services/SignInService.js';

let errorMessage = '';

async function handlePageLoad() {
    const user = await getUser();

    if (user) {
        location.replace('./');
    }

    display();
}

function checkAuth(response) {
    if (response?.error) {
        console.log(response.error);
        errorMessage = response.error.message;
    } else {
        location.replace('./');
    }
}

async function handleSignIn(email, password) {
    const response = await signIn(email, password);
    checkAuth(response);
}

async function handleSignUp(email, password) {
    const response = await signUp(email, password);
    checkAuth(response);
}

const SignIn = createAuthError(document.querySelector('#sign-in'), { handleAuth: handleSignIn });
const SignUp = createAuthError(document.querySelector('#sign-up'), { handleAuth: handleSignUp });
const AuthError = createAuthError(document.querySelector('#user-feedback'));

function display() {
    SignIn();
    SignUp();
    AuthError({ errorMessage });
}

handlePageLoad();