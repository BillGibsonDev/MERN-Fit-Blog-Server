import express from 'express';
import mongoose from 'mongoose';
import { CreatorModel } from "../models/Creator.js"

const router = express.Router();

export const createCreator = async (req, res) => {
    const { avatar, username, creator, twitter, instagram, linkedin, youtube, other, bio } = req.body;


    try {
        CreatorModel.create({
            creator: creator,
            username: username,
            avatar: avatar,
            twitter: twitter,
            linkedin: linkedin,
            instagram: instagram,
            youtube: youtube,
            other: other,
            bio: bio,
        })   
        res.json('Creator Registered!')
    } catch(err) {
        res.status(400).json({ error: err });
    }
};

export const getCreator = async (req, res) => {
    const { authorUsername } = req.params;

    try {
        const author = await CreatorModel.findOne({username: authorUsername});
        
        res.status(200).json(author);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


export const editCreator = async (req, res) => {
    const { creatorId } = req.params;
    const { creator, twitter, avatar, instagram, linkedin, youtube, other, bio, username } = req.body;

    try {
        CreatorModel.findOneAndUpdate({creatorId}, {
            creator: creator,
            username: username,
            avatar: avatar,
            twitter: twitter,
            linkedin: linkedin,
            instagram: instagram,
            youtube: youtube,
            other: other,
            bio: bio,
        },
        { new: true }),
        res.json('Creator Edited!')
    } catch(err) {
        res.status(400).json({ error: err });
    }
};