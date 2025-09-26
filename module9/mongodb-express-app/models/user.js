import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username: { type: String, trim: true, required: true },
    email: {
        type: String, trim: true, required: true,
        unique: true
    },
    password: { type: String, required: true },
});

export default mongoose.model('User', userSchema)