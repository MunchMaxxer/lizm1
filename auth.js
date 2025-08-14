import { supabase } from './supabase.js';

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { user, error } = await supabase.auth.signIn({ email, password });
  if (error) alert(error.message);
  else if(user.email === 'fileppcat@gmail.com') window.location.href = 'admin.html';
  else window.location.href = 'shop.html';
});

document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) alert(error.message);
  else window.location.href = 'shop.html';
});