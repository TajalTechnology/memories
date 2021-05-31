const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            trim: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        },
        creator: {
            type: String,
            required: true,
            trim: true,
        },
        tags:[String],
        selectedFile: {
            type: String,
        },
        likeCount: {
            type: Number,
            default:0,
        },
    },
    {timestamps:true}

);

module.exports = mongoose.model('PostMessage', postSchema);