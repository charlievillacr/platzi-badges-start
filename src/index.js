
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <Badge 
        firstName="Marco" 
        lastName="Sanchez"
        avatarUrl="https://api.adorable.io/avatars/90/abott@adorable.png"
        jobTitle="Jr Frontend Dev"
        twitter="marcos"/>,
    container);
