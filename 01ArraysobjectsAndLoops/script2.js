//console.log("HELLO WORLD!");
//const hero = 'batman';
//console.log(hero);
//const firstName = 'Hannes'
//const lastName = 'Hansson'
//console.log(`${lastName} ${firstName}`);
//console.log(window.location);
//const height = window.innerHeight;
//const width = window.innerWidth;
//console.log(`Height:${height} width:${width}`);
/*
function greeting (firstName, lastName){
    console.log(`Welcome ${firstName} ${lastName}!`);
}
greeting('Hannes','Hansson');
*/
/*
const calcArea = function (x, y){
    const area = x * y;
    return area;
}
console.log(calcArea(20, 40));
*//*
const calcArea = function (x,y){
    const area = x * y;
    return area;
}
const userX = prompt('Enter a x value:');
const userY = prompt('Enter a y value:');
parseInt(userX);
parseInt(userY);
console.log(calcArea(userX,userY));
*//*
function validateAge (){
    if (!window.confirm('Are you older then 45 years old?')){
        window.alert('Not old enough');
        return false;
    }
    else{
        return true;
    }
}
console.log(validateAge());
*//*
function getStringLength(string){
    var strLength = string.length;
    return strLength;
}
console.log(getStringLength('Kris Jenner'));
*/
/*
function reverseName(firstName, lastName){
    const fullName = firstName +' '+lastName;
    var splitString = fullName.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverseName('Hannes','Hansson'));
*/
/*
function celsiusToFahrenheit(celcius){
    var far = (celcius * 9 / 5) + 32;
    return far;
}
console.log(celsiusToFahrenheit(32));
*/
/* const fullName = 'Britney Jean Spears';
const britneyArray = fullName.split(' ');
 console.log('Firstname: '+britneyArray[0]);
console.log('midlename: '+britneyArray[1]);
console.log('lastname: '+britneyArray[2]);
const newName = britneyArray[0] +' '+ britneyArray[2];
console.log(newName) */
/* const songs = [
    'Toxic',
    '...Baby one more time',
    'Everytime',
    'Circus',
    'Oops! I did it again',
    'Lucky',
    "I'm not a girl, not yet a woman",
  ];
  songs.push('Hannes is the best');
  console.log(songs); */
  /* const songs = [
    'Toxic',
    '...Baby one more time',
    'Everytime',
    'Circus',
    'Oops! I did it again',
    'Lucky',
    "I'm not a girl, not yet a woman",
  ];
  const num = songs.indexOf('Circus');
  songs.splice(num,1);
  console.log(songs); */
 /*  const songs = [
    'Toxic',
    '...Baby one more time',
    'Everytime',
    'Circus',
    'Oops! I did it again',
    'Lucky',
    "I'm not a girl, not yet a woman",
  ];
const i = 1;

songs.forEach((song, index) => {
    console.log(`${index}. ${song}`);
  }); */