import mongoose from "mongoose";
import { Schema } from "mongoose";

const likeSchema = new Schema({
    createdAt: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true }, // foreign key linking to user
    post: { type: Schema.Types.ObjectId, ref: 'post', required: true } // foreign key linking to post
});

export default mongoose.model('Like', likeSchema)