import Transaction, { findById, find } from "../models/transaction";

export const createNewTrans = trans => {
    const newTrans = new Transaction(trans)
    return newTrans.save();
};

export const getTransById = id => {
    return findById(id);
};

export const getTrans = () => {
    return find();
}

