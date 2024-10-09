import mongoose, { Schema } from "mongoose";

const jobSeekerSchema = new Schema({
  phone: {
    type: Number,
    required: [true, "Please enter your Phone Number!"],
  },
  resume: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  employmentStatus: {
    type: Boolean,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  besicDetails: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const JobSeeker = mongoose.model("JobSeeker", jobSeekerSchema);
