import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema({
    title: { type: String, trim: true, required: true },
    content: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true } // foreign key linking to user
});

export default mongoose.model('Post', postSchema)