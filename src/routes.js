import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CustomersPage from './components/customers/CustomersPage';
import ManageCustomerPage from './components/customers/ManageCustomerPage';
import LoginPage from './components/login/LoginPage';
function isLoggedIn() {

    return true;
}
function requireAuth(nextState, replace) {
    if (!isLoggedIn()) {
        replace({
            pathname: '/login'
        });
    }
}
export default (
    <Route path="/" component={App}>
        <IndexRoute component={CustomersPage} />
        <Route path="home" component={HomePage} />
        <Route path="login" component={LoginPage} />
        <Route path="customers" component={CustomersPage} />
        <Route path="customer" component={ManageCustomerPage} />
        <Route path="/customer/:id" component={ManageCustomerPage} />
        
    </Route>
);