const express = require ("express");
const mongoose = require("mongoose");
const Workout = require("./models/workouts.js");

const port = process.env.port || 3000;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use (express.json());

app.use(express.static("public)"));

mongoose.connect(process.env.MONGODB_URI  || "mongodb://localhost/workout" ,{
    useNewUrlParser: true,
    useFindAndModify: false
});

 Workout.create({})
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({message}) => {
    console.log(message);
  });


app.use(require("./routes/api.js"));
app.listen(port, () => {
    console.log(`WE ARE LIVE AND ALIVE ${port}`);
});