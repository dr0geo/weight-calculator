const mass = document.getElementById('mass');
const button = document.getElementById('calculate');
const planetValue = document.getElementById('selecter');
const planetImage = document.getElementById('planet-image');
const description = document.getElementById('text');
const container = document.getElementById('flex-container');
const frameDescription = document.getElementById('description');
const circle = document.getElementById('circle');


// Change planet image according to planet choice:

const changePlanet = () => {
  switch (planetValue.value) {
    case 'mercury':
      planetImage.src = './resources/images/mercury.png';
      break;
    case 'venus':
      planetImage.src = './resources/images/venus.png';
      break;
    case 'earth':
      planetImage.src = './resources/images/earth.png';
      break;
    case 'mars':
      planetImage.src = './resources/images/mars.png';
      break;
    case 'jupiter':
      planetImage.src = './resources/images/jupiter.png';
      break;
    case 'saturn':
      planetImage.src = './resources/images/saturn.png';
      break;
    case 'uranus':
      planetImage.src = './resources/images/uranus.png';
      break;
    case 'neptune':
      planetImage.src = './resources/images/neptune.png';
      break;
    case 'pluto':
      planetImage.src = './resources/images/pluto.png';
      break;
    default:
      planetImage.src = './resources/images/earth.png';
      break;
  }
}

// Add text next to the planet picture:

const addDescription = () => {
  if (planetValue.value !== 'none') {
    description.innerHTML = `The weight of the object on <strong>${planetValue.value.toUpperCase()}</strong>`
    frameDescription.style.display = 'flex';
    circle.style.display = 'flex';
    container.style.justifyContent = 'space-around';
  } else {
    frameDescription.style.display = 'none';
  }
}

// Calculate new mass to display:

const planets = {
  earth: 1,
  mercury: 0.378,
  venus: 0.907,
  mars: 0.377,
  jupiter: 2.36,
  saturn: 0.916,
  uranus: 0.889,
  neptune: 1.12,
  pluto: 0.071
}

const calculateMass = () => {
  let newWeight = Math.round(mass.value * planets[planetValue.value] * 9.81 * 100) / 100;
  circle.innerHTML = newWeight + ' N';
}

// Display a message if no number or incorrect format is entered:

const displayErrorMessage = () => {
  if (mass.value.search(/[^\d]/g ) >= 0 || mass.value === '') {
    description.innerHTML = 'Please enter a number in the input field!';
    frameDescription.style.display = 'flex';
    circle.style.display = 'none';
    mass.style.color = 'red';
  } else {
    mass.style.color = 'black';
  }
}

button.addEventListener('click', changePlanet);
button.addEventListener('click', addDescription);
button.addEventListener('click', calculateMass);
button.addEventListener('click', displayErrorMessage);