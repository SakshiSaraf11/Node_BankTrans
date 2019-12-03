import Transaction from "../models/transaction";

export const createNewTrans = trans => {
    const newTrans = new Transaction(trans)
    return newTrans.save();
};

export const getTransById = id => {
    return Transaction.findById(id);
};

export const getTrans = () => {
    return Transaction.find();
}

