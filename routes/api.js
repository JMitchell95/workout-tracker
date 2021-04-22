const router = require("express").Router();
const workoutModel = require("../models/workouts");


router.post("/api/workouts", ({body}, res) =>{
    workoutModel.insertOne(body)
    .then(dbWorkout =>{
    res.status(200).json(dbWorkout);
    })
    .catch(err =>{
    res.status(400).json(err);
    });
});


router.put("/api/workouts", ({body}, res) =>{
    workoutModel.insertOne(body)
    .then(workouts =>{
    res.status(200).json(dbWorkout);
    })
    .catch(err =>{
    res.status(400).json(err);
    });
});

router.get("/api/workouts",(req, res) =>{
    workoutModel.find({})
    .then(dbWorkout =>{
        res.status(200).json(dbWorkout);
    })
    .catch(err =>{
        res.status(400).json(err);
    });
});router.get("/api/workouts/range",(req, res) =>{
    workoutModel.find({}).sort({ weight: -1 })
    .then(dbWorkout =>{
        res.status(200).json(dbWorkout);
    })
    .catch(err =>{
        res.status(400).json(err);
    });
});



module.exports = router;
