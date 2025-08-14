import { supabase } from './supabase.js';

const lizardContainer = document.getElementById('lizards');

export async function loadLizards(){
    const { data: lizards, error } = await supabase.from('lizards').select('*');
    if(error) {
        lizardContainer.innerHTML = `<div class="error">Error loading lizards: ${error.message}</div>`;
        console.error(error);
    } 
    else if (!lizards || lizards.length === 0) {
        lizardContainer.innerHTML = `<div class="info">No lizards found in the shop.</div>`;
    }
    else {
        lizardContainer.innerHTML = lizards.map(l => `
            <div class="lizard-card">
                <img src="${l.image_url}" alt="${l.name}" width="150">
                <h3>${l.name}</h3>
                <p>Price: $${l.price}</p>
                <button onclick="purchaseLizard('${l.id}','${l.name}')">Purchase</button>
            </div>
        `).join('');
    }
}

// Attach purchaseLizard to window so it works with inline onclick
window.purchaseLizard = function(id, name){
    window.location.href = 'https://gl.me/u/zQHlRkWldrqc';
};

loadLizards();