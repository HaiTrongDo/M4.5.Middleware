import express from "express";
import bodyParser from "body-parser";
import axios from 'axios';
import {responseTime} from "./middleware/responseTime";
import routes from './router/router';
import morgan from 'morgan';
import helmet from "helmet";
import rateLimit from "express-rate-limit";
const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(morgan("common"));
app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter)


app.use(routes);
app.use((err,req,res,next)=>{
    if (err){
        console.log(err.message)
        res.status(500).send(err.message)
        return;
    }
    next()
})

app.listen(PORT, () => {
    console.log("App running on port: " + PORT)
})