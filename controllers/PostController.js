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