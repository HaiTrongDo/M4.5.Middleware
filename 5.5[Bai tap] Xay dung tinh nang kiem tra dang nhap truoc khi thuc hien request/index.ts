import express from "express";
import bodyParser from "body-parser";
import axios from 'axios';
import {responseTime} from "./middleware/responseTime";
import routes from './router/router';
import morgan from 'morgan';
import helmet from "helmet";

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(morgan("common"));
app.use(helmet());
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