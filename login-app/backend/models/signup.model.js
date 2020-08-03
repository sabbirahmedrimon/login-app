const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const nameSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Signup = mongoose.model("Signup", nameSchema);

module.exports = Signup;
