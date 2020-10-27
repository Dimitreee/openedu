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

app.get("/promise/", function(req, res) {
    function task(x) {
        return new Promise((res, rej) => x < 18 ? res("yes") : rej("no"));
    }

    res.set(headers).send(task.toString());
});

app.get("/fetch/", function (req, res) {
    const fileDirectory = __dirname + "/public";

    res.sendFile("fetch.html", {root: fileDirectory}, (err) => {
        res.end();

        if (err) throw(err);
    });
});

app.listen(PORT, function() {
    console.log("Node app is running at localhost:" + PORT)
});
