const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const headers = {
    "Content-Type": "text/plain; charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
};

app.get("/login/", function(req, res) {
    res.set(headers).send("danewdima");
});

app.get("/sample/", function(req, res) {
    function task(x) {
        return x*(this**2);
    }

    res.set(headers).send(task.toString());
});

app.listen(PORT, function() {
    console.log("Node app is running at localhost:" + PORT)
});
