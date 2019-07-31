import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function customerReducer(state = initialState.customers, action) {
    switch (action.type) {
        case types.LOAD_CUSTOMERS_SUCCESS:
            {
                return action.customers;
            }
        case types.CREATE_CUSTOMER_SUCCESS:
            {
                return [...state,
                Object.assign({}, action.customer)];
            }
        case types.UPDATE_CUSTOMER_SUCCESS:
            {
                return [...state.filter(customer => customer.id !== action.customer.id),
                Object.assign({}, action.customer)];
            }
        case types.DELETE_CUSTOMER_SUCCESS: {
            const indexOfCustomerToDelete = state.findIndex(a => a.id == action.customerId);
            const newStates = [...state];
            newStates.splice(indexOfCustomerToDelete, 1);
            return newStates;
        }
        default:
            {
                return state;
            }
    }
}