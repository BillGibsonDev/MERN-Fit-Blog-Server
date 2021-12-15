import express from 'express';
import mongoose from 'mongoose';
import { PostModel } from "../models/Post.js";

const router = express.Router();

export const createPost = async (req, res) => {

const { postTitle, linkTitle, postDate, thumbnail, postIntro, postBrief , sections, conclusionTitle, conclusion } = req.body
    
    try {
        await new PostModel.create({
            postTitle,
            linkTitle,
            postDate,
            thumbnail,
            postIntro,
            postBrief,
            sections: [
                {
                    sectionTitle: sectionTitle,
                    sectionParagragh: sectionParagragh,
                    sectionLink: sectionLink,
                    sectionImage: sectionImage,
                },
            ],
            conclusionTitle,
            conclusion,
        })
    } catch (err) {
        console.log(err)
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

export const findLike = async (req, res) => {
    const { postId } = req.params;
    const { username } = req.body;
  
    if (PostModel.findOneAndUpdate({"_id": postId },{username: username}) === username){
        res.json("Liked!");
    };
}

export const addLike = async (req, res) => {
    const { postId } = req.params;
    const { username } = req.body;

    try {
        await PostModel.findOneAndUpdate(
        { "_id": postId },
        {
            $push:{
                likes: {
                    username,  
                }
            }
        },
    );
    res.json("Like added!");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const removeLike = async (req, res) => {
    const { postId } = req.params;
    const { username } = req.body;

    try {
        await PostModel.findOneAndUpdate(
        { "_id": postId },
        {
            $pull:{
                likes: {
                    username,  
                }
            }
        },
    );
    res.json("Like removed!");
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