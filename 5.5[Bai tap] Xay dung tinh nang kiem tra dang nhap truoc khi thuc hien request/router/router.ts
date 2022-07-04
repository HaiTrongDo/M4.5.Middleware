import {Router} from 'express';
import onHeaders from 'on-headers';
import axios from 'axios';
import bodyParser from "body-parser";

const routes = Router();
routes.use((req, res, next) => {
    if (req.body.email !== undefined && req.body.password !== undefined ){
        res.json({
            message: "you are logged in",
            body: {email: req.body.email, password:req.body.password}
        })
    };
    next();
})

export default routes;