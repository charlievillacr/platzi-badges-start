import React from 'react';

import './styles/BadgeNew.css';
import HeaderLogo from '../images/badge-header.svg';
import NavBar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    state = { form: {} };

    handleChange = e => {
        const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };
      
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
                            firstName="Richard"
                            lastName="Kaufman"
                            twitter="sparragus"
                            jobTitle="Frontend Engineer"
                            avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;