import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from '../../actions/customerActions';
import CustomerForm from './CustomerForm';
import toastr from 'toastr';
class ManageCustomerPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            customer: Object.assign({}, props.customer),
            errors: {},
            saving: false
        };
        this.updateCustomerState = this.updateCustomerState.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
    }
    componentDidMount() {
        //this.fetchAuthors();
    }
    componentWillReceiveProps(nextProps) {
        
        if (this.props.customer.id != nextProps.customer.id) {
            this.setState({ customer: Object.assign({}, nextProps.customer) });
        }
    }
    updateCustomerState(event) {
        const field = event.target.name;
        let customer = this.state.customer;
        customer[field] = event.target.value;
        return this.setState({ customer: customer });
    }

    saveCustomer(event) {
        event.preventDefault();
        this.setState({ saving: true });
        this.props.actions.saveCustomer(this.state.customer).then(() => this.redirect())
        .catch(error=>{
            toastr.error(error);
            this.setState({ saving: false });
        });
    }
    redirect() {
        toastr.success('Customer saved');
        this.setState({ saving: false });
        this.context.router.push('/customers');
    }
   
    render() {
        return (
            <CustomerForm
                onChange={this.updateCustomerState}
                onSave={this.saveCustomer}
                customer={this.state.customer}
                errors={this.state.errors}
                loading={this.state.saving} />
        );
    }
}

ManageCustomerPage.propTypes = {
    customer: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};
ManageCustomerPage.contextTypes = {
    router: PropTypes.object,
    store: React.PropTypes.object
};
function getCustomerById(customers, id) {
    const customer = customers.filter(customer => customer.id == id);
    if (customer) return customer[0];
    return null;
}
function mapStateToProps(state, ownProps) {
    
    const customerId = ownProps.params.id;
    let customer = { id: '0', firstName: '', lastName: '', phone: ''};
    if (customerId && state.customers.length > 0) {
        customer = getCustomerById(state.customers, customerId);
    }
    return {
        customer: customer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(customerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCustomerPage);
