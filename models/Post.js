import mongoose from 'mongoose';

const SectionSchema = new mongoose.Schema({
    sectionTitle: String,
    sectionParagrapgh: String,
    sectionImage: String,
    sectionLink: String,
})

export const SectionModel = mongoose.model("Section", SectionSchema);

const CommentSchema = new mongoose.Schema({
    comment: String,
    date: String,
    author: String,
})

export const CommentModel = mongoose.model("Comment", CommentSchema);

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
    sections:[{type: SectionSchema, ref: "sections"}],
    //
    comments: [{ type: CommentSchema, ref: "comments" }],
    //
    likes: {
        type: Number, default: 0,
    },
    //
    conclusion: {
        type: String,
    },
    conclusionHeader: {
        type: String,
    },
})

export const Post = mongoose.model("Post", PostSchema);