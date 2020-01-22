// Crear elemento
const element = document.createElement('h1');

// Asignarle un texto
element.innerText = 'Helo, Platzi Badges';

// Donde queremos ponerlo
const container = document.getElementById('app');

container.appendChild(element);