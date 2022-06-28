const SUPABASE_URL = 'https://nwxkvnsiwauieanvbiri.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getUser() {
    return client.auth.session() &&
    client.auth.session().user;
}

export async function signUp(email, password) {
    return await client.auth.signUp({ email, password });
}

export async function signIn(email, password) {
    return await client.auth.signIn({ email, password });
}

export async function signOut() {
    await client.auth.signOut();
}

export async function getPosts() {
    const resp = await client.from('posts').select('*');
    return checkError(resp);
}

export async function createPost(post) {
    const resp = await client.from('posts').insert(post);
    return checkError(resp);
}