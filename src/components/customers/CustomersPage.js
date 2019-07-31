import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../../actions/customerActions';
import CustomerList from './CustomerList';
import { browserHistory } from 'react-router';
import toastr from 'toastr';
import CustomerHeader from './CustomerHeader';
class CustomersPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            phoneSearch: ''
        };
        this.redirectToAddCustomerpage = this.redirectToAddCustomerpage.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.updatePhoneSearchState = this.updatePhoneSearchState.bind(this);
    }
    componentDidMount() {

        this.fetchCustomers(this.state);
    }

    customerRow(customer, index) {
        return <div key={index}>{customer.phone}</div>
    }
    redirectToAddCustomerpage() {
        browserHistory.push('/customer');
    }
    deleteCustomer(id) {
        this.props.actions.deleteCustomer(id).then(() => {
            toastr.success('Customer deleted');
           // this.redirectToAddCustomerpage;
        }).catch((error) => {
            toastr.error(error);
        });

    }
    fetchCustomers(params) {
        this.props.actions.loadCustomers(params);
    }
    updatePhoneSearchState(event) {
        
        const tvalue = event.target.value;
        this.fetchCustomers({ phoneSearch: tvalue });
        return this.setState({ phoneSearch: tvalue });

    }

    render() {
        const { customers } = this.props;
        return (
            <div >
                <h1>Customers</h1>
                <CustomerHeader onChange={this.updatePhoneSearchState} onClick={this.redirectToAddCustomerpage} value={this.state.phoneSearch} />
                <CustomerList customers={customers} onDelete={this.deleteCustomer} />
            </div>
        );
    }
}
CustomersPage.propTypes = {
    actions: PropTypes.object.isRequired,
    Customers: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        customers: state.customers
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(customerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);