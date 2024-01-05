const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, callback){
   numbersList.push(callback(a,b));
}

father(3, 5, sum)
father(4, 15, sum)
father(6, 5, sum)
father(3, 5, substract)
father(4, 15, substract)
father(6, 5, substract)

console.log(numbersList);