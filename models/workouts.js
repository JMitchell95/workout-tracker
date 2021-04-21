const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: Date.now
    },

    exercises: [
        {
          type:{
              type: String,
              trim: true,
              required: true
          },
          name: {
              type:String,
              trim: true,
              required: true
        },
          duration: {
              type: Number,
              required: true
        },
          weight:{
              type:Number,
              require: true
          },
          reps: {
              type:Number,
              require: true
            },
          sets: {
              type: Number,
              require: true
          }
        }
      ]

});



const workoutModel = mongoose.model('Workout', workoutSchema);
module.exports = workoutModel;