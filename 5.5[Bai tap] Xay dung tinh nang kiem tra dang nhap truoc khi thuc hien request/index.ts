import express from "express";
import bodyParser from "body-parser";
import axios from 'axios';
import {responseTime} from "./middleware/responseTime";
import routes from './router/router';

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
    console.log("App running on port: " + PORT)
})