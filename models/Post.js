import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    postTitle: {
        type: String,
    },
    linkTitle: {
        type: String,
    },
    postDate: {
        type: String,
    },
    postIntro: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    postBrief: {
        type: String,
    },
    //
    //
    sections:[{
        title: String,
        paragrapgh: String,
        image: String,
        link: String,
    }],
    //
    comments: [{ 
        comment: String,
        date: String,
        author: String, 
    }],
    //
    likes: [{
        username: String
    }],
    //
    conclusion: {
        type: String,
    },
    conclusionHeader: {
        type: String,
    },
})

export const PostModel = mongoose.model("Post", PostSchema);