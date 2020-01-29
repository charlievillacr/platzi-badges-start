import React from 'react'

class BadgeForm extends React.Component {

    // Creamos método handleChange
    handleChange = e => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value,
        // });
        this.setState({
            firstName: e.target.value
        })
    };
   
    
    handleClick = e => {
        console.log("Se ha clickeado un botón");
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Form enviado'); 
        console.log(this.state);
    };

    render() {
        return (
           <div>
               <h1>New Attendant</h1>
               <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <label>First Name</label>
                    <input
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    name="firstName"
                    />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input
                    onChange={this.handleChange} 
                    className="form-control" 
                    type="text"
                    name="lastName"
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                    onChange={this.handleChange}
                    className="form-control"
                    type="email"
                    name="email" 
                    />
                </div>

                <div className="form-group">
                    <label>Job Title</label>
                    <input
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    name="jobTitle" 
                    />
                </div>

                <div className="form-group">
                    <label>Twitter</label>
                    <input
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    name="twitter"
                     />
                </div>

                <button onClick={this.handleClick} className="btn btn-primary">
                    Save
                </button>
               </form>
           </div>
        );
    };
};

export default BadgeForm;