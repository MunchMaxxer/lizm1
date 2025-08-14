import { supabase } from './supabase.js';

document.getElementById('createLizardForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('lizardName').value;
  const price = parseFloat(document.getElementById('lizardPrice').value);
  const image = document.getElementById('lizardImage').value;
  const { data, error } = await supabase.from('lizards').insert([{ name, price, image_url: image }]);
  if(error) alert(error.message);
  else alert('Lizard added!');
});