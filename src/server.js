import express from "express"
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config();

let app = express();

//config view engine
viewEngine(app);

//parser request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//init wep router
initWebRoute(app);

let port = process.env.port || 8080
app.listen(port, () =>{
    console.log("Server running :", port);
})