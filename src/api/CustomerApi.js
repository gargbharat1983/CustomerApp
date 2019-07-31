import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const customers = [];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (customer) => {
  return replaceAll(customer.firstname, ' ', '-');
};

class CustomerApi {
  static getAllCustomers() {
    return fetch("http://localhost:52901/api/customers/").then(
      function (response) {
        if (response.status !== 200) {
          return Promise.reject(new Error(response.statusText));
        }
        else
          return response.json();
      }
    ).catch(function (error) {
      return Promise.reject(error);
    });
/*    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], customers));
      }, delay);
    });*/
  }

  static saveCustomer(customer) {
    customer.id='0';
    fetch("http://localhost:52901/api/customers/", {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body:JSON.stringify(customer) 
    })
    .then(
      function (response) {
         if (response.status !== 201) {
          return Promise.reject(new Error(response.statusText));
        }
         response.json().then(function(data) {  
          return Promise.resolve(data);
        }); 
       
          
      }
    )
    .catch(function (error) {
      return Promise.reject(error.message);
    });

   /* customer = Object.assign({}, customer); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCostomerPhoneLength = 10;
        if (customer.phone.length != minCostomerPhoneLength) {
          reject(`Phone number must be of ${minCostomerPhoneLength} digit.`);
        }
        else {

          if (customer.id) {
            const existingCustomerIndex = customers.findIndex(a => a.id == customer.id);
            customers.splice(existingCustomerIndex, 1, customer);
          } else {

            //      customer.id = 
            //course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
            customers.push(customer);
          }

          resolve(customer);
        }
      }, delay);

    });*/
  }

  static deleteCustomer(customerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCustomerToDelete = customers.findIndex(a => a.id == customerId);
        customers.splice(indexOfCustomerToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CustomerApi;