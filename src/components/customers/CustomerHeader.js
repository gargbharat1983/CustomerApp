import React, { PropTypes } from 'react';
const CustomerHeader = ({ value,onChange, onClick }) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <input
                    type="test"
                    className="form-control"
                    value={value}
                    onChange={onChange}
                    placeholder="Phone search..." />
            </div>
            <div className="col-md-6 text-right">
                <input
                    type="submit"
                    value="Add Customer"
                    onClick={onClick}
                    className="btn btn-primary" />
            </div>
            &nbsp;
        </div>
    );
}
CustomerHeader.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};
export default CustomerHeader;