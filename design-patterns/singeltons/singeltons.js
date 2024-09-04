
const Singleton = (() => {
  let instance;

  function createInstance() {
      return {
        // config object with user preferences
        configObject:{
          darkMode: false,
          colorTheme: 'light',
          direction: 'ltr',
        },
        //rest of properties
        name: 'Single instance #1',
        level: 1,

      }
  }

  return {
      getInstance: function() {
          if (!instance) {
              instance = createInstance()
          }
          
          return instance
      },      
      setName: function(newName) {
        if (instance) {
          instance.name = newName;
        }
      },
      setLevel: function(newLevel) {
        if (instance) {
          instance.level = newLevel;
        }
      },
      setConfig: function(config) {
        if (instance) {
          instance.configObject = config;
        }
      },
      getConfig: function() {
        if (instance) {
          return instance.configObject;
        }
      },
  }
})()



const singletonInstance = Singleton.getInstance()
console.log(singletonInstance.name,'singletonInstance before');
Singleton.setName('New instance name');
console.log(singletonInstance.name,'singletonInstance after');
console.log(Singleton.getConfig(), 'config before');
Singleton.setConfig({darkMode: true, colorTheme: 'dark', direction: 'rtl'});
console.log(Singleton.getConfig(), 'config after');

/*Object.freeze(singletonInstance)*/
//singletonInstance.name = 'Single instance #2'; //this wont work when freezing the object
/* console.log(singletonInstance.name,'singletonInstance after');
const doubletonInstance = Singleton.getInstance()
console.log(doubletonInstance.name,'doubletonInstance'); */

