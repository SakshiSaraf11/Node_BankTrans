const { model, Schema } = require('mongoose')
import { composeWithMongoose } from "graphql-compose-mongoose";
const accountSchema = Schema({
    type: {
        type: String,
        required: true,
        enum: ["savings", "current"]
    },
    balance: {
        type: Number,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    customer: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "customer"
    }
})
const accountModel = model("account", accountSchema);
export default accountModel;
export const AccountTC = composeWithMongoose(accountModel);
