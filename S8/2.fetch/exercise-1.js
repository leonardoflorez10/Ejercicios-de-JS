fetch('https://api.agify.io?name=michael')
    .then((response) => response.json())
    .then((resJson) => console.log(resJson));