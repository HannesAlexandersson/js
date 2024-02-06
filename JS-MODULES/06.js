import snarkdown from 'https://cdn.skypack.dev/snarkdown';
import { replaceEmoji } from './emojis.js';

const art = document.getElementById('art');
const txt = document.getElementById('txt');
const btn = document.getElementById('btn');


console.log('_this_ is **easy** to `use`.'); //for reference

txt.addEventListener('input', () => { // listen for user input in the textarea element
  let text = txt.value; // Retrieve the value of the textarea
  text = replaceEmoji(text); // Replace emoji names with emoji characters
  let html = snarkdown(text); //tranform the text to html  
  
  art.innerHTML = html; // set the content of the article to the tranformed text
})
