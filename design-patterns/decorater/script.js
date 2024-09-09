var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//lift out the decoraters and have them as a independent functions with 2 arguments: jearsy and name
function withName(jersey, name) {
    return __assign(__assign({}, jersey), { name: name });
}
function withNumber(jersey, number) {
    return __assign(__assign({}, jersey), { number: number });
}
function specificKit(jersey, variant) {
    if (variant === void 0) { variant = 'home'; }
    return __assign(__assign({}, jersey), { variant: variant });
}
//we will refactor the createJersey function so it return a basic Jersey object, 
//without the chained decorator methods.
function createJersey(size, club) {
    return { size: size, club: club };
}
//then chain them manually by calling them one by one with the values we want in our jearsy
var myJersey = createJersey("XL", "St Louis Blues");
myJersey = withName(myJersey, "Hull");
myJersey = withNumber(myJersey, 16);
myJersey = specificKit(myJersey, 'away');
console.log(myJersey);
function CreateIceCream(cone, cup) {
    return { cone: cone, cup: cup, };
}
/* function withCondoment(iceCream: IceCream, condoment: string): IceCream {
  return { ...iceCream, condoment }
} */
function withChocolate(iceCream) {
    return __assign(__assign({}, iceCream), { chocolate: true });
}
function withSprinkles(iceCream) {
    return __assign(__assign({}, iceCream), { sprinkles: true });
}
function withCream(iceCream) {
    return __assign(__assign({}, iceCream), { cream: true });
}
var myIceCream = CreateIceCream(true, false);
myIceCream = withChocolate(myIceCream);
myIceCream = withSprinkles(myIceCream);
myIceCream = withCream(myIceCream);
console.log(myIceCream);
/* let myIceCream = CreateIceCream(true);
myIceCream = withCondoment(myIceCream, "chocolate syrup");
myIceCream = withCondoment(myIceCream, "whipped cream");
myIceCream = withCondoment(myIceCream, "cherry");
 */
