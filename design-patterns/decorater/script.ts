interface Jersey {
  size: string,
  club: string,
  [key: string]: any
}

function withName(jersey: Jersey, name: string): Jersey {
  return { ...jersey, name }; 
}

function withNumber(jersey: Jersey, number: string): Jersey {
  return{ ...jersey, number};
}

function withKit(jersey: Jersey, kit: string = 'home'): Jersey {
  return{ ...jersey, kit};
}

// create jearsy now only creates the 2 set properties of the interface (size,club)
function createJersey(size: string, club: string): Jersey {
  return { size, club }; 
}



//let myJersey = createJersey("XL", "St Louis Blues").withName("Hull").specificKit('away')
let myJersey = createJersey('sm', 'ifk Göteborg');
myJersey = withName(myJersey,'Hannes Alexandersson');
myJersey = withNumber(myJersey, '13');
myJersey = withKit(myJersey, 'away');


console.log(myJersey) 


interface IceCream{
  scoops: number,
  container: string,
  [key: string]: any,
}

function CreateIceCream(scoops: number, container: string): IceCream {
  return { scoops, container };
}

function withCheery(iceCream: IceCream, cherry: string): IceCream {
  return { ...iceCream, cherry };
}

function withChocolate(iceCream: IceCream, chocolate: string): IceCream {
  return { ...iceCream, chocolate };
}

function withCream(iceCream: IceCream, cream: string): IceCream {
  return { ...iceCream, cream };
}

let myIceCream = CreateIceCream(3, 'cup');
myIceCream = withCheery(myIceCream, 'Cherry');
myIceCream = withChocolate(myIceCream, 'Chocolate');
myIceCream = withCream(myIceCream, 'Cream');

console.log(myIceCream);