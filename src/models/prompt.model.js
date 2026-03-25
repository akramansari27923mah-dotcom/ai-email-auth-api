import mongoose from "mongoose";

const promptSchema = new mongoose.Schema({
    prompt: {
        type: String,
        required: true
    },

    reply: {
        type: String,
        required: true
    }
}, { timestamps: true })

const promptModel = mongoose.model('prompt', promptSchema);

export default promptModel