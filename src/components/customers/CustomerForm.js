import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
const CustomerForm = ({ customer, onSave, onChange, loading, errors }) => {

    return (

        <form>
            <h1>Manage Customer</h1>
            <TextInput
                name="firstName"
                label="First Name"
                value={customer.firstName}
                onChange={onChange}
                error={errors.firstName} />
            <TextInput
                name="lastName"
                label="Last Name"
                value={customer.lastName}
                onChange={onChange}
                error={errors.lastName} />
            <TextInput
                name="phone"
                label="Phonenumber"
                value={customer.phone}
                onChange={onChange}
                error={errors.phone} />
            <input
                type="submit"
                disabled={loading}
                value={loading ? 'Saving..' : 'Save'}
                onClick={onSave}
                className="btn btn-primary" />
           
        </form>
    );

};
CustomerForm.propTypes = {
    customer: PropTypes.object.isRequried,
    onChange: PropTypes.func.isRequried,
    onSave: PropTypes.func.isRequried,
    loading: PropTypes.bool,
    errors: PropTypes.object
};
export default CustomerForm;