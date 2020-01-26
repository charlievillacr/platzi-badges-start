import React from 'react';

import confLogo from  '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return <div>
            <div>
                <img src={confLogo} alt="Logo"/>
            </div>
            <div>
                <img src="https://api.adorable.io/avatars/167/abott@adorable.png" alt="Avatar"/>
                <h1>Carlos<br/>Villalobos</h1>
            </div>
            <div>
                <p>Jr. Front-end</p>
                <p>@carlosg</p>
            </div>
            <div>
                #platziconf
            </div>
        </div>
    }
}

export default Badge;