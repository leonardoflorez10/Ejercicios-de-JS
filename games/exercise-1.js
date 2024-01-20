// Array de las cartas
let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
  ];


// obtenemos todas las tarjetas
const divGrid = document.querySelector('.b-grid') 

const tablero = () => {
    divGrid.innerHTML = ''

    for (const card of cardArray) {
        const imgCard = document.createElement('img')
        imgCard.src = "public/exercise-1/universe.svg"
        imgCard.style.cursor = "pointer"
        divGrid.appendChild(imgCard)

        comprobarClick(card, imgCard)
    }
}

let planets = []
const comprobarClick = (card, imgCard) => {
    imgCard.addEventListener("click", () => {
        imgCard.src = card.img
        planets.push(card)
        console.log(planets);

        if(planets.length === 2) {
            if (planets[1].id === planets[0].id) {
                alert("Jugada no Válida")
                imgCard.src = "public/exercise-1/universe.svg"
            }
            else if (planets[1].id !== planets[0].id && planets[1].name !== planets[0].name){
                alert("Jugada no Válida")
                imgCard.src = "public/exercise-1/universe.svg"
            }

            else if (planets[1].id !== planets[0].id && planets[1].name === planets[0].name){
                alert("Felicidades, juego completado!!")
            }
            planets = []
        }

    }
    )};

    tablero ()