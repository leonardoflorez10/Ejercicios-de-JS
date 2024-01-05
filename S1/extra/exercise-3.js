const movies = [
    { name: "Your Name", durationInMinutes: 130 },
    { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
    { name: "Origen", durationInMinutes: 165 },
    { name: "El señor de los anillos", durationInMinutes: 967 },
    { name: "Solo en casa", durationInMinutes: 214 },
    { name: "El jardin de las palabras", durationInMinutes: 40 }];

const peliculasPequeña = [];
const peliculasMediana = [];
const peliculasGrande = [];

for (let index = 0; index < movies.length; index++) {
    const pelicula = movies[index];
}

if (pelicula.durationInMinutes < 100) {
    peliculasPequeña.push(pelicula)
}

if (pelicula.durationInMinutes >= 100 && pelicula.durationInMinutes < 200) {
    peliculasMediana.push(pelicula)
}

if (pelicula.durationInMinutes > 200) {
    peliculasGrande.push(pelicula)
}

console.log(peliculasPequeña);
console.log(peliculasMediana);
console.log(peliculasGrande);

