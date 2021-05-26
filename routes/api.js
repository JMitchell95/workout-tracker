const router = require("express").Router();
const WorkoutModel = require("../models/workouts");
const db = require("../models");
const path = require("path");


module.exports = function(app){

app.post("/api/workouts", ({body, params}, res) =>{
    WorkoutModel.insertOne(body)
    .then(dbWorkout =>{
    res.status(200).json(dbWorkout);
    })
    .catch(err =>{
    res.status(400).json(err);
    });
});


app.put("/api/workouts:id", ({body, req}, res) =>{
    WorkoutModel.insertOne(body)
    .then(workouts =>{
    res.status(200).json(dbWorkout);
    })
    .catch(err =>{
    res.status(400).json(err);
    });
});

app.get("/api/workouts/range",(req, res) =>{
    WorkoutModel.find({}).limit(5)
    .then(dbWorkout =>{
        res.status(200).json(dbWorkout);
    })
    .catch(err =>{
        res.status(400).json(err);
    });
});

app.get("/api/workouts",(req, res) =>{
    WorkoutModel.find({}).sort({ weight: -1 })
    .then(dbWorkout =>{
        res.status(200).json(dbWorkout);
    })
    .catch(err =>{
        res.status(400).json(err);
    });
});

}

