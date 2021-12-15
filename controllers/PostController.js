import express from 'express';
import mongoose from 'mongoose';
import { PostModel } from "../models/Post.js";

const router = express.Router();

export const createPost = async (req, res) => {

const { author, postTitle, linkTitle, postDate, thumbnail, postIntro, postBrief , sections, conclusionTitle, conclusion } = req.body
    
    const newPost = new PostModel({ author, postTitle, linkTitle, postDate, thumbnail, postIntro, postBrief , sections, conclusionTitle, conclusion })
    try {
        await newPost.save();

        res.status(201).json("Post Created");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }   
}

export const getPosts = async (req, res) => { 
    try {
        const posts = await PostModel.find();
                
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { postId } = req.params;
    try {
        const post = await PostModel.findById(postId);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const editPost = async (req, res) => {
    const { postId } = req.params;
    const { postTitle } = req.body;

    await PostModel.findOneAndUpdate(
        { "_id": postId },
        {
            $set:{
                postTitle: postTitle,
            }
        },
        { new: true }
    );
    res.json("Post Updated");
}

export const deletePost = async (req, res) => {
    const { postId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId)) return res.status(404).send(`No post with id: ${postId}`);

    await PostModel.findByIdAndRemove(postId);
    res.json("Post Deleted");
}