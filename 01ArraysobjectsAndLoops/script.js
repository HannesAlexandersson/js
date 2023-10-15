/*
//lesson 01
01
console.log('Hello World');

02
const myHero = 'Superman';
console.log(myHero);


03
const firstName = 'Hannes';
const lastName = 'Hansson';
console.log(firstName+' '+lastName);

04
console.log(window.location);

05
console.log(window.innerHeight);
console.log(window.innerWidth);

06
function myFunction (firstName, lastName) {
    console.log('Welcome '+firstName+' '+lastName+'!');
}
myFunction('Hannes','Hansson');
..,
07
function calcArea (x, y){
    const area = x * y;
    console.log('The area is: '+area);
}
calcArea(20,40);

08
function calcArea (x, y){
    const area = x * y;
    console.log('The area is: '+area);
}
const x = prompt("enter a x value");
parseInt(x);
const y = prompt("enter a y value");
parseInt(y);

calcArea(x,y);

09
function validateAge(){
    if (window.confirm("Are you over 45?")){        
        return true;
    }
    else {
        window.alert('you are not old enough');
        return false;
    }
}
console.log(validateAge());

10
function getStringLength(string){
    console.log(string.length);
}
getStringLength('Kris Jenner');


11
function reverseName (firstName, lastName) {
    const fullName = firstName+' '+lastName;
    const str = fullName;
    const reversedString = str.split("").reduce((acc, char) => char + acc, "");
    console.log(reversedString);
}
console.log(reverseName('Hannes','Hansson'));


12
const celsiusToFahrenheit = (int) => {
    const far = (int * 9 / 5) + 32;
    console.log(int+'°C = '+far+'°F')
}
celsiusToFahrenheit(30);


// LESSON = 02
01
const fullName = 'Britney Jean Spears';
const names = fullName.split(' ');
console.log('Firstname: '+names[0] +'\nlastName: ' +names[2] +'\nmiddlename: '+names[1]);

02
const fullName = 'Britney Jean Spears';
const names = fullName.split(' ');
const newName = names[0]+' '+names[2];
console.log(newName);


03
const songs = [
    'Toxic',
    '...Baby one more time',
    'Everytime',
    'Circus',
    'Oops! I did it again',
    'Lucky',
    "I'm not a girl, not yet a woman",
  ];
  songs.push('Hannes is the greatest');
  console.log(songs);
  

  //04
const songs = [
    'Toxic',
    '...Baby one more time',
    'Everytime',
    'Circus',
    'Oops! I did it again',
    'Lucky',
    "I'm not a girl, not yet a woman",
];
console.log(songs.indexOf('Circus'));
songs.splice(3,1,);
console.log(songs);



//05
const songs = [
    'Toxic',
    '...Baby one more time',
    'Everytime',
    'Circus',
    'Oops! I did it again',
    'Lucky',
    "I'm not a girl, not yet a woman",
];
const i = 0;

songs.forEach(function (song, index) {
    console.log(index+' '+song);
    
    
});


//06
const songs = [
    'Toxic',
    '...Baby one more time',
    'Everytime',
    'Circus',
    'Oops! I did it again',
    'Lucky',
    "I'm not a girl, not yet a woman",
];
for (let i = 0; i < songs.length; i++){
    const str = songs[i];
    const reversedString = str.split("").reduce((acc, char) => char + acc, "");
    console.log(reversedString);
}




//07
const songs = [
    'Toxic',
    '...Baby one more time',
    'Everytime',
    'Circus',
    'Oops! I did it again',
    'Lucky',
    "I'm not a girl, not yet a woman",
];
let i = 0;
while (i < songs.length){
    if(songs[i] === 'Lucky') {
        console.log("Stop! Here's Lucky!");
        break;
    }
    else {
        console.log(songs[i]);
        i++;
    }
}



//08
const songs = [
    'Toxic',
    '...Baby one more time',
    'Everytime',
    'Circus',
    'Oops! I did it again',
    'Lucky',
    "I'm not a girl, not yet a woman",
];
const map1 = songs.map((song) => song.toUpperCase());
console.log(map1);




//09
const person = {
    name: 'Britney Jean Spears',
    birthdate: '2 December, 1981',
    from: 'McComb, Mississippi, USA',
    length: 163,
    children: ['Sean Federline', 'Jayden James Federline'],
    description:
      'Britney Spears has been one of the most successful — and sometimes controversial — solo acts in popular music. Six of her first seven albums reached No. 1 on the Billboard 200.',
  };
  console.log('Her name is '+person.name+' and she was born '+person.birthdate +' .');
  


  //10
  const person = {
    name: 'Britney Jean Spears',
    birthdate: '2 December, 1981',
    from: 'McComb, Mississippi, USA',
    length: 163,
    children: ['Sean Federline', 'Jayden James Federline'],
    description:
      'Britney Spears has been one of the most successful — and sometimes controversial — solo acts in popular music. Six of her first seven albums reached No. 1 on the Billboard 200.',
  };
  
  person.children.forEach((children) => {
    console.log(children);
  })
  


  //11
  const albums = [
    { title: '...Baby One More Time', year: 1999, label: 'Jive' },
    { title: 'Oops!... I Did It Again', year: 2000, label: 'Jive' },
    { title: 'Britney', year: 2001, label: 'Jive' },
    { title: 'In the zone', year: 2003, label: 'Jive, Zomba' },
    { title: 'Blackout', year: 2007, label: 'Jive, Zomba' },
    { title: 'Circus', year: 2008, label: 'Jive, Zomba' },
    { title: 'Femme Fatale', year: 2011, label: 'Jive' },
    { title: 'Britney Jean', year: 2013, label: 'RCA' },
    { title: 'Glory', year: 2016, label: 'RCA' },
  ];
  albums.forEach((element) => {
    console.log(element.title+','+element.year);
  })
  



  //12
  const albums = [
    { title: '...Baby One More Time', year: 1999, label: 'Jive' },
    { title: 'Oops!... I Did It Again', year: 2000, label: 'Jive' },
    { title: 'Britney', year: 2001, label: 'Jive' },
    { title: 'In the zone', year: 2003, label: 'Jive, Zomba' },
    { title: 'Blackout', year: 2007, label: 'Jive, Zomba' },
    { title: 'Circus', year: 2008, label: 'Jive, Zomba' },
    { title: 'Femme Fatale', year: 2011, label: 'Jive' },
    { title: 'Britney Jean', year: 2013, label: 'RCA' },
    { title: 'Glory', year: 2016, label: 'RCA' },
  ];

  function getAlbumsFrom(array, year){
    const result = array.filter((array) => array.year >= year);
    return result;
  }
  console.log(getAlbumsFrom(albums, 2013));
*/


//13
const albums = [
    { title: '...Baby One More Time', year: 1999, label: 'Jive' },
    { title: 'Oops!... I Did It Again', year: 2000, label: 'Jive' },
    { title: 'Britney', year: 2001, label: 'Jive' },
    { title: 'In the zone', year: 2003, label: 'Jive, Zomba' },
    { title: 'Blackout', year: 2007, label: 'Jive, Zomba' },
    { title: 'Circus', year: 2008, label: 'Jive, Zomba' },
    { title: 'Femme Fatale', year: 2011, label: 'Jive' },
    { title: 'Britney Jean', year: 2013, label: 'RCA' },
    { title: 'Glory', year: 2016, label: 'RCA' },
  ];
  


const labelCount = albums.reduce((accumulator, album) => {
    const labels = album.label.split(', '); // använd split för att skapa en array med bara label value
    labels.forEach((label) => {
      accumulator[label] = (accumulator[label] || 0) + 1; // öka med ett för varje label
    });
    return accumulator;//returna antal gånger vi ökat värdet
  }, {});
  
  console.log(labelCount);