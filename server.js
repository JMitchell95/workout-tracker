const express = require ("express");
const mongoose = require("mongoose");
const db = require("./models");
const path = require("path")


const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use (express.json());
app.use(express.static("public)"));


mongoose.connect(process.env.MONGODB_URI  || "mongodb://localhost/workout" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

require ("./routes/api")(app);
require("./routes/html")(app);


app.listen(port, () => {
    console.log(`WE ARE LIVE AND ALIVE ${port}`);
});