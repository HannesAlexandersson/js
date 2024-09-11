// This is some code I found online. It's maybe not the prettiest (a little bit old, I've replaced var with const), but I think it shows the basics of a facade.
/*
The Mortgage object acts as the facade. Instead of the client needing 
to interact with Bank, Credit, and Background individually 
(and understanding their logic), the client only interacts with 
the facade. The Mortgage class abstracts away the details of each 
subsystem by exposing a single method, applyFor, which handles the 
mortgage application process.
*/
const Mortgage = function (name) {
  this.name = name;
}

Mortgage.prototype = {
  /*
    The applyFor method in the Mortgage class serves as the 
    unified interface. It hides the complex internal 
    interactions of checking with the bank, verifying credit, 
    and doing background checks. The client simply calls applyFor 
    and receives a decision (approved or denied).
  */

  applyFor: function (amount) {
      // access multiple subsystems...
      let result = "approved";
      if (!new Bank().verify(this.name, amount)) {
          result = "denied";
      } else if (!new Credit().get(this.name)) {
          result = "denied";
      } else if (!new Background().check(this.name)) {
          result = "denied";
      }
      return this.name + " has been " + result +
          " for a " + amount + " mortgage";
  }
}

/*
  Bank, Credit, and Background are the subsystems in this example. 
  They each have their own complex logic that the main logic doesn't 
  need to worry about directly. Each subsystem represents a different 
  aspect of the mortgage approval process.


  The complex logic of verifying the bank, credit checks, and background 
  checks would live within the subsystems (though in this example, 
  the logic is trivialized). This separation of concerns means that 
  the facade itself (Mortgage) is focused on coordinating the subsystems 
  and delivering the final result to the client, without containing 
  the actual logic.
*/
const Bank = function () {
  this.verify = function (name, amount) {
      // complex logic ...
      return true;
  }
}

const Credit = function () {
  this.get = function (name) {
      // complex logic ...
      return true;
  }
}

const Background = function () {
  this.check = function (name) {
      // complex logic ...
      return true;
  }
}

function run() {
  const mortgage = new Mortgage("Joan Templeton");
  const result = mortgage.applyFor("$100,000");

  console.log(result);
}

/* 
  While the code you provided demonstrates the facade pattern, 
  it can be further refined:

  Dependency Injection: Instead of hardcoding the creation of 
  Bank, Credit, and Background objects within the Mortgage class, 
  consider passing them into the constructor as dependencies. 
  This makes the code more flexible and testable. 
*/

/*
const Mortgage = function (name, bank, credit, background) {
    this.name = name;
    this.bank = bank;
    this.credit = credit;
    this.background = background;
}

Mortgage.prototype.applyFor = function (amount) {
    let result = "approved";
    if (!this.bank.verify(this.name, amount)) {
        result = "denied";
    } else if (!this.credit.get(this.name)) {
        result = "denied";
    } else if (!this.background.check(this.name)) {
        result = "denied";
    }
    return this.name + " has been " + result +
        " for a " + amount + " mortgage";
}

function run() {
    const bank = new Bank();
    const credit = new Credit();
    const background = new Background();
    const mortgage = new Mortgage("Joan Templeton", bank, credit, background);
    const result = mortgage.applyFor("$100,000");

    console.log(result);
}

*/