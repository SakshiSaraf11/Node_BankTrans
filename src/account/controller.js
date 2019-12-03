import Account, { findById, find } from "../models/account";

export const createNewAccount = acc => {
    const newAccount = new Account(acc)
    return newAccount.save();
};

export const getAccountById = id => {
    return findById(id);
};

export const getAccount = () => {
    return find();
}

