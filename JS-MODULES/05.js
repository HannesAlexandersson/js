import snarkdown from 'https://cdn.skypack.dev/snarkdown';

const art = document.getElementById('art');
const txt = document.getElementById('txt');
const btn = document.getElementById('btn');
let text = txt.value; // Retrieve the value of the textarea

btn.addEventListener('click', () => {
  let html = snarkdown(text); //tranform the text to html
  
  art.innerHTML = html; // set the content of the article to the tranformed text
})
/* 
let md = '_this_ is **easy** to `use`.';
let html = snarkdown(md);
art.innerHTML = html; */
