import React, { PropTypes } from 'react';
import CustomerListRow from './CustomerListRow';
const CustomerList = ({ customers,onDelete }) => {
    return (
        <table className="table">
            <thead>
            </thead>
            <tr>
            <th>Phone</th>
                
                <th>First Name</th>
                <th>Last Name</th>
                <th>&nbsp;</th>
                
            </tr>
            <tbody>
                {customers.map(customer =>
                    <CustomerListRow key={customer.id} customer={customer} onDelete={onDelete} />
                )}
            </tbody>
        </table>
    );
}
CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};
export default CustomerList;