/*
  01. Study the example and try to add some text into the different notifications and broadcasts.
*/
const Newsletter = function() {

  const subscribers = [] //array to store subscribers

  return {
      subscribe: function(subscriber) {//method used to add a subscriber to the array
          subscribers.push(subscriber)
      },
      unsubscribe: function(subscriber){ //method used to remove a subscriber
          let index = subscribers.indexOf(subscriber)
          if (index >= 0) {
              subscribers.splice(index, 1)
          }
      },
      /* notify: function(subscriber) {
          var index = subscribers.indexOf(subscriber);
          if(index > -1) {
            subscribers[index].notify(subscriber);
          }
      }, */
      notify: function(subscriber, message = "You have been notified!") { //method used to send message to a subscriber
        const index = subscribers.indexOf(subscriber);
        if (index > -1) {
          subscribers[index].notify(message); // Pass the message to notify
        }
      },
      /* broadcast: function() {
          subscribers.forEach((subscriber) => {
              subscriber.notify(subscriber)
          });
      } */
      broadcast: function(message = "This is a general broadcast.") { //sends message to all subscribers
        subscribers.forEach((subscriber) => {
          subscriber.notify(message); // Pass the broadcast message to all subscribers
        });
      }
  }
}

/* const subscriber = function(subscribername) {
  return {
      notify: function (subscriber) {
          console.log(`subscriber ${subscriber.name} is notified`);
      },
      name: subscribername
  }
} */
const subscriber = function(subscribername) { // doesnt actually send any message on subscription!!!!
  return {
    notify: function (message) {
      console.log(`Subscriber ${this.name} is notified with message: "${message}"`);
    },
    name: subscribername // Property for the subscriber's name
  };
};

// Create a newsletter and three subscribers --- doesnt print anything
myNewsletter.subscribe(ola)
let myNewsletter = new Newsletter
let ola = new subscriber("Ola")
let susanne = new subscriber("Susanne")
let kim = new subscriber("Kim")

// Add the three subscribers to myNewsletter --- doesnt print anything
myNewsletter.subscribe(ola)
myNewsletter.subscribe(susanne)
myNewsletter.subscribe(kim)

// Send a message only to susanne---- only sussane gets this message
myNewsletter.notify(susanne, 'This is a personal message for you, Susanne!')

// Susanne doesn't want to subscribe anymore - Nooooooo! ---- this doesnt print anything
myNewsletter.unsubscribe(susanne)

// Tell every subscriber something important --- this broadcast a the text to all subscribers
myNewsletter.broadcast("susanne has left the building")