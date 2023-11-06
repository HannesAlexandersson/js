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