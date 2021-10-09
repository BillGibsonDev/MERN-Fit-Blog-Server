const mongoose = require("mongoose");

// const Paragraph = new mongoose.Schema({

// });

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
    postParagraphTitle1: {
        type: String,
    },
    postParagraph1: {
        type: String,
    },
    postImage1: {
        type: String,
    },
    postLink1: {
        type: String,
    },
    //
    //
    postParagraphTitle2: {
        type: String,
    },
    postParagraph2: {
        type: String,
    },
    postImage2: {
        type: String,
    },
    postLink2: {
        type: String,
    },
    //
    //
    postParagraphTitle3: {
        type: String,
    },
    postParagraph3: {
        type: String,
    },
    postImage3: {
        type: String,
    },
    postLink4: {
        type: String,
    },
    //
    //
    postParagraphTitle4: {
        type: String,
    },
    postParagraph4: {
        type: String,
    },
    postImage4: {
        type: String,
    },
    postLink4: {
        type: String,
    },
    //
    //
    postConclusion: {
        type: String,
    },
    postConclusionHeader: {
        type: String,
    },
})

const Post = mongoose.model("Post", PostSchema)
module.exports = Post;