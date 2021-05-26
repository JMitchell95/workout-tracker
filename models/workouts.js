const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },  exercises: [
      {
        
          type: {
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

        },
          weight:{
              type:Number,

          },
          reps: {
              type:Number,

            },
          sets: {
              type: Number,

          },
          distance:{
            type: Number
          }
        }
        ]   
      },{
        toJSON:{
          virtuals: true
        }
      });
      
  workoutSchema.virtual("totalDuraction").get(function(){
    return this.exercises.reduce((total,exerces) =>{
      return total + exercise.duration;
    }, 0);
  });




const workout = mongoose.model("workout", workoutSchema);
module.exports = workout;