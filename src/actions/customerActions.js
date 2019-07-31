import * as types from './actionTypes';
import { beginAjaxCall, beginAjaxError } from './ajaxStatusActions';
export function loadCustomersSuccess(customers) {
    return { type: types.LOAD_CUSTOMERS_SUCCESS, customers };
}
export function saveCustomerSuccess(customer) {
    return { type: types.CREATE_CUSTOMER_SUCCESS, customer };
}
export function updateCustomerSuccess(customer) {
    return { type: types.UPDATE_CUSTOMER_SUCCESS, customer };
}
export function deleteCustomerSuccess(customerId) {
    return { type: types.DELETE_CUSTOMER_SUCCESS, customerId };
}


export function loadCustomers(params) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return fetch(types.URL).then((response) => {
            if (response.status !== 200) {
                dispatch(beginAjaxError());
                throw new Error(response.statusText);
            }
            response.json().then(customers => {
                let newCustomers = [];

                if (params && params.phoneSearch != '') {
                    newCustomers = [...customers.filter(customer => customer.phone.toLowerCase().startsWith(params.phoneSearch.toLowerCase()))];
                }
                else {
                    newCustomers = [...customers];
                }
                dispatch(loadCustomersSuccess(newCustomers));
            });
        }).catch(error => {
            dispatch(beginAjaxError());
            throw error;
        });
    };
}

export function saveCustomer(customer) {
    //customer.id = '0';
    return function (dispatch) {
        dispatch(beginAjaxCall());
        let Verb = 'post';
        let Url = types.URL;
        let custId = customer.id;
        if (custId > 0) {
            Verb = 'PUT';
            Url = Url + custId + '/';
        }
         return fetch(Url, {
            method: Verb,
            headers: {
                "Content-type": "application/json",
                "Origin":"*"
            },
            body: JSON.stringify(customer)
        }).then(
            function (response) {
                if (custId > 0) {
                    if (response.status !== 204) {
                        dispatch(beginAjaxError());
                        throw new Error(response.statusText);
                    }
                    else {
                        dispatch(updateCustomerSuccess(customer));
                    }
                }
                else {
                    if (response.status !== 201) {
                        dispatch(beginAjaxError());
                        throw new Error(response.statusText);
                    }
                    response.json().then(function (savedCustomer) {
                        dispatch(saveCustomerSuccess(savedCustomer));
                    });
                }
            }
        ).catch(error => {
            dispatch(beginAjaxError());
            throw error;
        });
    };
}

export function deleteCustomer(id) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        debugger
        return fetch(types.URL + id + "/", {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        }).then(
            function (response) {
                if (response.status !== 200) {
                    dispatch(beginAjaxError());
                    throw new Error(response.statusText);
                }
                response.json().then(function (deletedCustomer) {
                    dispatch(deleteCustomerSuccess(id));
                });
            }
        ).catch(error => {
            dispatch(beginAjaxError());
            throw error;
        });
    };
}