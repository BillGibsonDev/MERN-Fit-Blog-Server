import express from 'express';
import mongoose from 'mongoose';
import { CreatorModel } from "../models/Creator.js"

const router = express.Router();

export const createCreator = async (req, res) => {
    const { creator, twitter, instagram, linkedin, youtube, other, bio } = req.body;


try {
   CreatorModel.create({
        creator: creator,
        avatar: avatar,
        twitter: twitter,
        linkedin: linkedin,
        instagram: instagram,
        youtube: youtube,
        other: other,
        bio: bio,
    })   
    } catch(err) {
        res.status(400).json({ error: err });
    }
};

export const getCreator = async (req, res) => {
    const { creator } = req.params;

try {
        const author = await CreatorModel.findOne(creator);
        
        res.status(200).json(author);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


export const editCreator = async (req, res) => {
    const { creatorId } = req.params;
    const { creator, twitter, instagram, linkedin, youtube, other, bio } = req.body;

try {
   CreatorModel.findOneAndUpdate({creatorId}, {
        creator: creator,
        avatar: avatar,
        twitter: twitter,
        linkedin: linkedin,
        instagram: instagram,
        youtube: youtube,
        other: other,
        bio: bio,
    },
        { new: true })   
    } catch(err) {
        res.status(400).json({ error: err });
    }
};