import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  picture: String,
});

const User = mongoose.model("User", userSchema);

export default User;
