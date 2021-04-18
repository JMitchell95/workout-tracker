const express = require ("express");
const mongoose = require("mongoose");

const port = process.env.port || 3000;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use (express.json());

app.use(express.static("public)"));

mongoose.connect(process.env.MONGODB_URI  || "mongodb://localhost/workout" ,{
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(require("./routes/api.js"));
app.listen(port, () => {
    console.log(`WE ARE LIVE AND ALIVE ${port}`);
});