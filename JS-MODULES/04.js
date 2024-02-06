import catNames from 'https://cdn.skypack.dev/cat-names';
/* const catNames = require('cat-names'); */ //for node.js 

const button = document.getElementById('rnd'); //create a node in the DOM for the button

button.addEventListener('click',() => {
  //const randomCatName = getRandomCatName(catNames);  //uses the function to get a random name from the array
  const randomCat = catNames.random(); //use the function from the CDN instead
  const para = document.createElement('p');//create a p element
  para.innerText = randomCat; // set the textcontent to the random name
  document.body.appendChild(para); // append the element to a parent
})