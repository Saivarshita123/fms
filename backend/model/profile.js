import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true, 
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  totalIncome: {
    type: Number,
    required: true,
    min: [0, "Income cannot be negative"],
  },
  totalSavings: {
    type: Number,
    required: true,
    min: [0, "Savings cannot be negative"],
  },
  totalSpent: {
    type: Number,
    required: true,
    min: [0, "Spent amount cannot be negative"],
  },
  totalBalance: {
    type: Number,
    required: true,
    min: [0, "Balance cannot be negative"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
