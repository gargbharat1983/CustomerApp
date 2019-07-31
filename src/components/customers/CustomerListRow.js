import React, { PropTypes } from 'react';
import { Link } from 'react-router';
const CustomerListRow = ({ customer, onDelete }) => {
    return (
        <tr>

            <td><Link to={`/customer/${customer.id}`}>{customer.phone}</Link></td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td><a className="btn btn-danger" onClick={onDelete.bind(this, customer.id)} target="_blank">Delete</a></td>
        </tr>
    );
};

CustomerListRow.propTypes = {
    customer: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default CustomerListRow;