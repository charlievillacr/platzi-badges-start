import React from 'react';

import './styles/BadgeNew.css';
import HeaderLogo from '../images/badge-header.svg';
import NavBar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={HeaderLogo} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName="Carlos"
                            lastName="Villalobos"
                            twitter="carlosg"
                            jobTitle="Jr. Front-End"
                            avatarUrl="https://api.adorable.io/avatars/90/abott@adorable.png"/>
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;