const baseUrl = 'https://api.nationalize.io?name=';
const input = document.querySelector('input');
const button = document.querySelector('button');

const getFetch = () => {
    fetch(`${baseUrl}${input.value}`)
        .then((response) => response.json())
        .then((resJson) => console.log(resJson));
}

button.addEventListener('click', getFetch);