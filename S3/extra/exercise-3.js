const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHere = document.querySelector('[data-function="printHere"]');
const ul = document.createElement('ul');
printHere.appendChild(ul);

for (let i = 0; i < cars.length; i++) {
    const li = document.createElement('li');
    li.textContent = cars[i];
    ul.appendChild(li);
}

// utiliza un bucle for para recorrer el array cars y crear un elemento li para cada elemento del array. 
// El texto de cada elemento li se establece en el valor del elemento correspondiente del array cars. Finalmente, cada elemento li se agrega como hijo del elemento ul.
