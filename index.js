const express = require('express');
const app = express();
const port = 6226;
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

const path = require('path');
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "js")));

var db_M = require('./database');
global.db_pool = db_M.pool;

app.get("/", (req, res) => {
    res.render("time");
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});

