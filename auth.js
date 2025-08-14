import { supabase } from './supabase.js';

// Email login
document.getElementById('loginForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data: session, error } = await supabase.auth.signInWithPassword({ email, password });

    if(error) alert(error.message);
    else redirectAfterLogin(session.user.email);
});

// Email signup
document.getElementById('signupForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data: session, error } = await supabase.auth.signUp({ email, password });

    if(error) alert(error.message);
    else redirectAfterLogin(session.user.email);
});

// Google OAuth login/signup
const googleButtons = document.querySelectorAll('#googleLoginBtn');
googleButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin + '/shop.html' // Redirect after login
            }
        });
        if(error) alert(error.message);
    });
});

// Helper function to redirect based on user
function redirectAfterLogin(email){
    if(email === 'fileppcat@gmail.com') window.location.href = 'admin.html';
    else window.location.href = 'shop.html';
}

// Handle OAuth redirect automatically
supabase.auth.onAuthStateChange((event, session) => {
    if(session?.user) redirectAfterLogin(session.user.email);
});
