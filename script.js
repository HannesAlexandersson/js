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
*/


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