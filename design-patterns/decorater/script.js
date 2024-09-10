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
function withName(jersey, name) {
    return __assign(__assign({}, jersey), { name: name });
}
function withNumber(jersey, number) {
    return __assign(__assign({}, jersey), { number: number });
}
function withKit(jersey, kit) {
    if (kit === void 0) { kit = 'home'; }
    return __assign(__assign({}, jersey), { kit: kit });
}
// create jearsy now only creates the 2 set properties of the interface (size,club)
function createJersey(size, club) {
    return { size: size, club: club };
}
//let myJersey = createJersey("XL", "St Louis Blues").withName("Hull").specificKit('away')
var myJersey = createJersey('sm', 'ifk Göteborg');
myJersey = withName(myJersey, 'Hannes Alexandersson');
myJersey = withNumber(myJersey, '13');
myJersey = withKit(myJersey, 'away');
console.log(myJersey);
function CreateIceCream(scoops, container) {
    return { scoops: scoops, container: container };
}
function withCheery(iceCream, cherry) {
    return __assign(__assign({}, iceCream), { cherry: cherry });
}
function withChocolate(iceCream, chocolate) {
    return __assign(__assign({}, iceCream), { chocolate: chocolate });
}
function withCream(iceCream, cream) {
    return __assign(__assign({}, iceCream), { cream: cream });
}
var myIceCream = CreateIceCream(3, 'cup');
myIceCream = withCheery(myIceCream, 'Cherry');
myIceCream = withChocolate(myIceCream, 'Chocolate');
myIceCream = withCream(myIceCream, 'Cream');
console.log(myIceCream);
