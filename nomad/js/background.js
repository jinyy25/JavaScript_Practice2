
//6.1 background //6.2 recap
const images = [
    "Amsterdam.jpeg",
    "beach.jpg",
    "Empire_State.jpg",
    "Night in Paris.jpeg",
    "Santorini Island View.jpeg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `images/${chosenImage}`;
// console.log(bgImage);

document.body.appendChild(bgImage);

