//uppift 1

 /* const data = `
      {
        "name": "Steve Carell",
        "character": "Michael Scott",
        "profile_url": "https://www.imdb.com/name/nm0136797/?ref_=tt_cl_t_1",
        "image_url": "https://m.media-amazon.com/images/M/MV5BMjMyOTM2OTk1Ml5BMl5BanBnXkFtZTgwMTI3MzkyNjM@._V1_QL75_UX280_CR0,2,280,414_.jpg"
      }
      `;
      const actor = JSON.parse(data);
      const name = actor.name;
      const character = actor.character;
      const img = actor.image_url;
      console.log(actor, character, img);


 */


      
// för att ha en global variabel som kan nås överallt i koden
/*
const url = 'https://yrgo.github.io/api/movies/mean-girls.json';

let movie; // Deklarera variabeln utan att tilldela något värde ännu

async function getMovie() {// en funktion som hämtar (fetchar) datan från url:en. endpointen
  const response = await fetch(url);
  movie = await response.json(); // Spara resultatet i den globala "movie"-variabeln
}

(async () => {
  await getMovie(); // Anropa funktionen för att hämta filmen
  console.log(movie.title); // Komma åt "movie" utanför funktionen
  console.log(movie.actors[0].character); // Komma åt specifika egenskaper
})();


// eller===>>>>
let movie = {}; // Deklarera en global variabel för att lagra JSON-data

async function getMovie() {
  const response = await fetch('https://yrgo.github.io/api/movies/mean-girls.json');
  movie = await response.json();
}

// Anropa getMovie() när sidan laddas
window.onload = async function() {
  await getMovie();
  console.log(movie.title); // Du kan nu komma åt datan som ett JavaScript-objekt

  // Logga movie.title igen
  console.log(movie.title);
};
*/






// uppgift 2
/* 
const url = 'https://yrgo.github.io/api/movies/mean-girls.json';
async function getMovie () {
    const response = await fetch(url);
    const movie = await response.json();
    console.log(movie);
    console.log('the movie '+movie.title+ ' was released '+movie.year+ ' viev the trailer on '+movie.trailer_url);
}
getMovie();
 */
// uppgift 3
/* 
const url = 'https://yrgo.github.io/api/movies/mean-girls.json';
const fetchData = async () => {
    try {
    const response = await fetch(url);
    //console.log(response);
    const data = await response.json();
    console.log(data);
    let img = document.createElement('img');
    img.src = data.poster_url;
    document.getElementById('body').appendChild(img);    
    }catch(error){
        console.log(error);
    }
    };
fetchData();//kalla på funktionen
 
 */
// uppgift 4
/* 
const url = 'https://yrgo.github.io/api/movies/mean-girls.json';
async function getMovie () {
    const response = await fetch(url);
    const movie = await response.json();
    console.log(movie);
    for (let i = 0; i < movie.actors.length; i++) {
    console.log(movie.actors[i].character + ' is played by ' + movie.actors[i].name);
    }
}
getMovie();
 */
// uppgift 5
/* 
const url = 'https://yrgo.github.io/api/movies/mean-girls.json';
async function getMovie () {
    const response = await fetch(url);
    const movie = await response.json();
    for (let i = 0; i < movie.actors.length; i++) {
        let img = document.createElement('img');
        let name = document.createElement('h5');
        let char = document.createElement('h6');        
        name.innerHTML = movie.actors[i].name;
        char.innerHTML = movie.actors[i].character;
        img.src = movie.actors[i].image_url;
        document.getElementById('body').appendChild(img);
        document.getElementById('body').appendChild(char);
        document.getElementById('body').appendChild(name);        
    }
}

getMovie(); 
*/


/* const apiUrl = 'https://yrgo.github.io/api/movies/mean-girls.json';


const movieData = fetch(apiUrl).then((response) => {//första callbackennärpromise=resolved
	console.log(response);
}).then((data) => { //andra callbacken för att hantera datan ifrån requesten ex omvandla JSON till JS
	console.log(data);    
}).catch((error) => { //chainas för att hantera unresolved promises
	console.log(error);
});
console.log(movieData.title);

   */ 