import React from 'react';
import { Link } from 'react-router';
class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotrain">
                <h1>Hi, User</h1>
                <p>CRUD App to manage Customer Information</p>
                <Link to="customers" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;