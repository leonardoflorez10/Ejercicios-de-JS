function rollDice(numCaras) {
    const result = Math.ceil(Math.random()) *numCaras;
    return result;
}
const dadoresult = rollDice(6);
console.log(`el dado es: ${dadoresult}`);