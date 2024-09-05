const Newsletter = function() {

  const subscribers = []

  return {
      subscribe: function(subscriber) {
          subscribers.push(subscriber)
      },
      unsubscribe: function(subscriber){
          let index = subscribers.indexOf(subscriber)
          if (index >= 0) {
              subscribers.splice(index, 1)
          }
      },
      notify: function(subscriber) {
          var index = subscribers.indexOf(subscriber);
          if(index > -1) {
            subscribers[index].notify(subscriber);
          }
      },
      broadcast: function() {
          subscribers.forEach((subscriber) => {
              subscriber.notify(subscriber)
          });
      }
  }
}

const subscriber = function(subscribername) {
  return {
      notify: function (subscriber) {
          console.log(`subscriber ${subscriber.name} is notified`);
      },
      name: subscribername
  }
}

// Create a newsletter and three subscribers
let myNewsletter = new Newsletter
let ola = new subscriber("Ola")
let susanne = new subscriber("Susanne")
let kim = new subscriber("Kim")

// Add the three subscribers to myNewsletter
myNewsletter.subscribe(ola)
myNewsletter.subscribe(susanne)
myNewsletter.subscribe(kim)

// Send a message only to susanne
myNewsletter.notify(susanne)

// Susanne doesn't want to subscribe anymore - Nooooooo!
myNewsletter.unsubscribe(susanne)

// Tell every subscriber something important
myNewsletter.broadcast()