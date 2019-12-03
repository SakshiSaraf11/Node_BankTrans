import express from 'express';
import { json, urlencoded } from 'body-parser'; //Middleware
import { connect } from "mongoose";

import customerRouter from "./customer/route";
import accountRouter from "./account/route";
import transRouter from "./transaction/route";

const app = express()

app.use(json());
app.use(
    urlencoded({
        extended: false
    })
);



app.use("/customer", customerRouter)
app.use("/account", accountRouter)


app.use("/transaction", transRouter)




connect("mongodb+srv://root:root@cluster0-3f3sk.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
)
    .then(res => {
        console.log("Database Connected")
        app.listen(3000, () => {
            console.log("Server started")
        })
    })
    .catch(err => {
        console.log(err)
    })
