import {Customer} from "./customer";

export class App {

    constructor() {
        this.heading = 'Customer Manger';
        this.customers = this.getCustomersFromStorage();
        this.customerName = '';
        this.customerEmail = '';
        this.customerPhone = '';
    }

    getCustomersFromStorage() {
        return JSON.parse(localStorage.getItem('customers'))
    }

    /**
     * Called by add button
     * @param customer customer to be added
     */
    addCustomer() {
        if (this.customerName && this.customerEmail &&
            this.customerPhone){
            this.customers.push(new Customer(this.customerName, this.customerEmail,
                this.customerPhone))

            this.storeCustomers();


            this.customerName = '';
            this.customerEmail = '';
            this.customerPhone = '';
        }
    }

    storeCustomers() {
        localStorage.setItem('customers', JSON.stringify(this.customers))
    }

    /**
     * Called by remove button
     * @param customer customer to be removed
     */
    removeCustomer(customer) {
        let index = this.customers.indexOf(customer);
        if (index != -1) {
            this.customers.splice(index, 1);
        }
        this.storeCustomers();
    }
}