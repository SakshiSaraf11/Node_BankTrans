import Customer, { findById, find } from "../models/customer";

export const createNewCustomer = cust => {
    const newCustomer = new Customer(cust);
    return newCustomer.save();
};

export const getCustomerById = id => {
    return findById(id);
};

export const getCustomers = () => {
    return find();
}

