import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "full name is required"],
      minlength: [3, "name at least 3 characters"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Invalid email"]
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [8, "password at least 8 characters"]
    },

  },
  {
    timestamps: true
  }
);
const User = mongoose.model("User", userSchema);
export default User;