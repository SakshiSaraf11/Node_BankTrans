import Customer from "../models/customer";

export const createNewCustomer = cust => {
    const newCustomer = new Customer(cust);
    return newCustomer.save();
};

export const getCustomerById = id => {
    return Customer.findById(id);
};

export const getCustomers = () => {
    return Customer.find();
}

