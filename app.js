const express = require("express");
const cors = require("cors");
const api = require("./api");

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", api);

app.get("/", function(req, res) {
    res.json({
        greeting: "Hi"
    });
});

app.get("/bye", function(req, res) {
    res.json({
        greeting: "Bye"
    });
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});