import { catNames, getRandomCatName} from "./catnames.js"; //import the function and the array

const button = document.getElementById('rnd'); //create a node in the DOM for the button
button.addEventListener('click',() => {
  const randomCatName = getRandomCatName(catNames);  //uses the function to get a random name from the array

  const para = document.createElement('p');//create a p element
  para.innerText = randomCatName; // set the textcontent to the random name
  document.body.appendChild(para); // append the element to a parent
})

