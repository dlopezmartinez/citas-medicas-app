const express = require("express");
var cors = require("cors");

const app = express();

app.use(express.json());

const allowedOrigins = ["http://localhost:8080"];
app.use(
    cors({
        origin: function(origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                const msg =
                    "The CORS policy for this site does not allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
    })
);

app.post("/api/login", function(req, res) {
    console.log("Handler login...");
    if (req.body.username == "carla") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.send(JSON.stringify({ username: "carla", token: "testtoken" }));
    } else {
        res.statusCode = 400;
        res.send();
    }
});

app.get("/api/product", function(req, res) {
    console.log("Handler product...");
    if (req.headers.authorization == null) {
        console.log("No header auth ");
        res.statusCode = 403;
        res.send();
    } else {
        console.log("Header auth " + req.headers.authorization);
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.send(
            JSON.stringify([
                { id: "1", name: "Cuenta corriente", balance: 3421.45 },
                { id: "2", name: "Tarjeta crédito", balance: 50.45 },
            ])
        );
    }
});

app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});