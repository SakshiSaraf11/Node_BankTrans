import composeWithMongoose from 'graphql-compose-mongoose';

const { model, Schema } = require('mongoose')

const transactionSchema = Schema({
    type: {
        type: String,
        enum: ["debit", "credit"],
        required: true

    },
    amt: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    },
    account: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "account"
    }
})
const transactionModel = model("transaction", transactionSchema);
export default transactionModel;
export const TransactionTC = composeWithMongoose(transactionModel);
