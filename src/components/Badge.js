import React from 'react';

import './styles/Badge.css';
import confLogo from  '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo"/>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://api.adorable.io/avatars/90/abott@adorable.png" alt="Avatar"/>
                <h1>Carlos<br/>Villalobos</h1>
            </div>
            <div className="Badge__section-info">
                <h3>Jr. Front-end</h3>
                <p>@carlosg</p>
            </div>
            <div className="Badge__footer">
                #platziconf
            </div>
        </div>
    }
}

export default Badge;