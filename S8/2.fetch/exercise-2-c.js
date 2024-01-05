const baseUrl = 'https://api.nationalize.io?name=';
const input = document.querySelector('input');
const button = document.querySelector('button');

const getFetch = () => {
    fetch(`${baseUrl}${input.value}`)
        .then((response) => response.json())
        .then((resJson) => drawName(resJson));
}

drawName = ({ country, name }) => {
    console.log(country);
    for (const element of country) {
        let p = document.createElement('p');
        let button = document.createElement('p');
        p.textContent = `El hombre ${name} tiene un ${element.probability * 100} porciento de ser ${element.country_id}`
        button.textContent = "X"
        p.addEventListener('click', () => p.remove());

        p.appendChild(button)

        document.body.appendChild(p);
    }
}

button.addEventListener('click', getFetch);