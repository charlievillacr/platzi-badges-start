// const elemento = React.createElement(
//     'a',
//     { href: 'https://platzi.com' },
//     'Ir a Platzi.com'
//     );

// const nombre = 'Charlie';
// const suma = () => 3 + 3;
// const elemento = React.createElement(
//     'h1',
//     {},
//     `Hola, soy ${nombre}`
// );
// const jsx = <h1>Hola soy, {nombre}</h1>
// const jsx = <h1>Hola soy, {2 + 2}</h1>
// const jsx = <h1>Hola soy, {suma()}</h1>
// const jsx = <h1>Hola soy, {null}</h1>

import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <div>
//                 <h1>Hola, soy Charlie</h1>
//                 <p>Quiero ser ingeniero front end</p>
//             </div>

 const elemento = React.createElement(
     'div',
     {},
     React.createElement('h1', {}, 'Hola, soy Carlos'),
     React.createElement('p', {}, 'Quiero ser ingeniero frontend'),
 )           
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(elemento, container);
