const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: "Day is Required"
  },

  type: {
    type: String,
    trim: true,
    required: "Type is Required",
  },

  name: {
    type: String,
    required: "Name is Required",
  },

  duration: {
    type: Number,
    required: "Duration is Required",
    min: [1, "Must be more than 0"]
  },

  weight: {
    type: Number,
    required: "Weight is Required",
    min: [1, "Must be more than 0"]
  },

  reps: {
    type: Number,
    required: "Reps is Required",
    min: [1, "Must be more than 0"]
  },

  sets: {
    type: Number,
    required: "Sets is Required",
    min: [1, "Must be more than 0"]
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
