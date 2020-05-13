"use strict";
const express = require("express");
const app = express();
const routes = require("./routes")
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.get("*", routes);

app.post("*", routes);

app.put("*", routes);

app.delete("*", routes);

app.listen(port, (req, res) => {
    console.log(`Server is running: ${port}`);
});