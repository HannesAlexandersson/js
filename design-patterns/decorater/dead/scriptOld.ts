/*Assignment 01 *//* 
// Lets create some replica hockey jerseys
interface Jersey {
  size: string,
  club: string,
  [key: string]: any
}

//lift out the decoraters and have them as a independent functions with 2 arguments: jearsy and name

function withName(jersey: Jersey, name: string): Jersey {
  return { ...jersey, name }; 
}


function withNumber(jersey: Jersey, number: number): Jersey {
  return { ...jersey, number }; 
}


function specificKit(jersey: Jersey, variant: string = 'home'): Jersey {
  return { ...jersey, variant }; 
}


//we will refactor the createJersey function so it return a basic Jersey object, 
//without the chained decorator methods.
function createJersey(size: string, club: string): Jersey {
  return { size, club }; 
}

//then chain them manually by calling them one by one with the values we want in our jearsy
let myJersey = createJersey("XL", "St Louis Blues");
myJersey = withName(myJersey, "Hull");
myJersey = withNumber(myJersey, 16); 
myJersey = specificKit(myJersey, 'away');

console.log(myJersey);
 */


// original code
/* function createJersey(size: string, club: string): Jersey {
  const jersey: Jersey = { size, club}

  // Decorators that could be chained to the object
  return {
      ...jersey,
      withName(name: string) {
          return { ...this, name}
      },
      withNumber(number: number) {
          return { ...this, number}
      },
      specificKit(variant: string = 'home' ) {
          return { ...this, variant }
      },
  }
}

let myJersey = createJersey("XL", "St Louis Blues").withName("Hull").specificKit('away')

console.log(myJersey) */


/*Assignment 02 */
/*
  Do it yourself from scratch. Make an interface for a christmas tree 
  (which we then will decorate with lights, glitter and other decorations), 
  or if you find it offensive to deal with such items off-season, an icecream 
  interface (which you then can decorate with chocolate syrup, sparkle, 
  whipped cream and whatnot). After you've created the interface and a nice 
  "constructor" function, add some functions to decorate your item. 
*/
/* 
interface IceCream {
  cone?: boolean,
  cup?: boolean,  
  [key: string]: any //allows the interface to have properties with 
  //dynamic names or keys that aren't explicitly defined in advance.
  // this is what allows us to add the decorators to the object, the cherrys, and cream, and chocolate etc
}
function CreateIceCream(  
  cone?: boolean, 
  cup?: boolean 
): IceCream {
  return {cone, cup,}
}
 */
/* function withCondoment(iceCream: IceCream, condoment: string): IceCream {
  return { ...iceCream, condoment }
} */
/* 
function withChocolate(iceCream: IceCream): IceCream {
  return { ...iceCream, chocolate: true }
}

function withSprinkles(iceCream: IceCream): IceCream {
  return { ...iceCream, sprinkles: true }
}

function withCream(iceCream: IceCream): IceCream {
  return { ...iceCream, cream: true }
}

let myIceCream = CreateIceCream(true, false);
myIceCream = withChocolate(myIceCream);
myIceCream = withSprinkles(myIceCream);
myIceCream = withCream(myIceCream);

console.log(myIceCream);
 */
/* let myIceCream = CreateIceCream(true);
myIceCream = withCondoment(myIceCream, "chocolate syrup");
myIceCream = withCondoment(myIceCream, "whipped cream");
myIceCream = withCondoment(myIceCream, "cherry");
 */
