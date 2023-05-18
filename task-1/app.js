const express = require("express");
const dotenv = require("dotenv");
const academies = require("./handlers/acadHandler");
const courses = require("./handlers/courseHandler");
const db = require("./pkg/db/index");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
dotenv.config({ path: "./config.env" });

db.init();

app.get("/academies", academies.getAll);
app.get("/academies/:id", academies.getOne);
app.post("/academies", academies.create);
app.patch("/academies/:id", academies.update);
app.put("/academies/:id", academies.replace);
app.delete("/academies/:id", academies.delete);

app.get("/courses", courses.getAll);
app.get("/courses/:id", courses.getOne);
app.post("/courses", courses.create);
app.patch("/courses/:id", courses.update);
app.put("/courses/:id", courses.replace);
app.delete("/courses/:id", courses.delete);


app.listen(10000, (err) => {
    if (err) {
        return console.log("Couldn't start the server")
    } else {
        console.log("Server started successfully, PORT: 10000")
    }
  }
);