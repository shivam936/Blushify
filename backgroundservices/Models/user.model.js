import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    name: {
    type: String,
    required: true,
    },
    email: {
    type: String,
    required: true,
    },
    password: {
    type: String,
    required: true,
    },

    address: {
    type: String,
    },

    phone: {
    type: Number,
    },

    role: {
    type: String,
    default: "user",
    },

    status: {
    type: Number,
    default: 0,
    },
},
{ timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
