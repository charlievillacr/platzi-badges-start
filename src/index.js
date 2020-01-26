
import React from 'react';
import ReactDOM from 'react-dom';

 const elemento = (
    <div>
        <h1>Hola, soy Carlos</h1>
        <p>Aprendo ReactJS</p>
    </div>
 )           
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(elemento, container);
