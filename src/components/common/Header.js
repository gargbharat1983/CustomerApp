import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
const Header = ({ loading }) => {
    return (
        <nav>
            <IndexLink to="home" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="customers" activeClassName="active"> Customers</Link>
            {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
    );
};
Header.propTypes = {
    loading: PropTypes.bool.isRequired
};
export default Header;