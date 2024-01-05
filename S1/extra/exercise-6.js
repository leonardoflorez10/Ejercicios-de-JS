const goodProducts = [];
const badProducts = [];
const movies = [{ name: 'Gorra de rodilla', sellCount: 10 },
{ name: 'Pantalón de pana', sellCount: 302 },
{ name: 'Reloj de papel albal', sellCount: 23 },
{ name: 'Inpar de zapatos', sellCount: 6 }];

for (let i = 0; i < movies.length; i++) {
    const element = movies[i];
    if (element.sellCount > 20) {
        goodProducts.push(element)
    } else {
        badProducts.push(element)
    }
}

console.log(goodProducts);
console.log(badProducts);