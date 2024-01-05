const userAnwsers = [];

function confirmExample(description){
   return confirm(description)
}

function promptExample(description){
   return prompt(description)
}

function father(description, callback){
    userAnwsers.push(callback(description));
}

father("hola que tal.", confirmExample);
father("que dia es hoy.", promptExample);

console.log(userAnwsers);