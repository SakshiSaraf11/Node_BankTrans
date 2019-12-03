import { Router } from 'express';
import { createNewAccount, getAccountById, getAccount } from "./controller";

const router = Router();

router.post('/', (req, res) => {
    createNewAccount(req.body)

        .then(resp => {
            console.log(resp)
            return res.send("Account created")
        })
        .catch(err => {
            console.log(err);
        })


})

router.get("/", (req, res) => {
    getAccount()
        .then((acc) => {
            console.log(acc)
            res.send(acc)
        })
        .catch(err => {
            console.log(err)
        })
})


router.get("/:id", (req, res) => {
    getAccountById(req.params.id)
        .then((acc) => {
            console.log(acc)
            res.send(acc)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
})

export default router