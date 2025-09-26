import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new Schema({
    content: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true }, // foreign key linking to user
    post: { type: Schema.Types.ObjectId, ref: 'post', required: true } // foreign key linking to post
});

export default mongoose.model('Comment', commentSchema)