const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const PostModel = require('./models/Post');

app.use(express.json());

const dotenv = require('dotenv').config()

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

mongoose.connect(   
    process.env.NODE_ENV_MONGO_KEY, {
        useNewUrlParser: true,
    }
)

app.post("/insert", cors(), async(req, res) => {
    // header
    const postTitle = req.body.postTitle;
    const linkTitle = req.body.linkTitle;
    const postDate = req.body.postDate;
    const thumbnail = req.body.thumbnail;
    const postIntro = req.body.postIntro;
    const postBrief = req.body.postBrief;
    //
    // paragraphs
    const postParagraphTitle1 = req.body.postParagraphTitle1;
    const postParagraph1 = req.body.postParagraph1;
    const postImage1 = req.body.postImage1;
    const postLink1 = req.body.postLink1;
    //
    //
    const postParagraphTitle2 = req.body.postParagraphTitle2;
    const postParagraph2 = req.body.postParagraph2;
    const postImage2 = req.body.postImage2;
    const postLink2 = req.body.postLink2;
    //
    //
    const postParagraphTitle3 = req.body.postParagraphTitle3;
    const postParagraph3 = req.body.postParagraph3;
    const postImage3 = req.body.postImage3;
    const postLink3 = req.body.postLink3;
    //
    //
    const postParagraphTitle4 = req.body.postParagraphTitle4;
    const postParagraph4 = req.body.postParagraph4;
    const postImage4 = req.body.postImage4;
    const postLink4 = req.body.postLink4;
    //
    // conclusion
    //
    const postConclusionHeader = req.body.postConclusionHeader;
    const postConclusion = req.body.postConclusion;
    //
    const post = new PostModel({ 
        postTitle,
        linkTitle, 
        postDate, 
        thumbnail, 
        postIntro,
        postBrief,
        // 
        postParagraphTitle1, 
        postParagraph1, 
        postImage1,
        postLink1,
        //
        postParagraphTitle2, 
        postParagraph2, 
        postImage2,
        postLink2,
        //
        postParagraphTitle3, 
        postParagraph3, 
        postImage3,
        postLink3,
        //
        postParagraphTitle4, 
        postParagraph4, 
        postImage4, 
        postLink4,
        //
        postConclusion, 
        postConclusionHeader,
    });
    try {
        await post.save();
        res.send('instered data');
    } catch (err) {
        console.log(err)
    }
})

app.get("/read", cors(), async(req, res, next) => {
    PostModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result);
    })
})

app.get("/post/:postId", cors(), async(req, res) => {
    const findPostQuery = PostModel.findById(req.params.postId);
    res.send(await findPostQuery.exec());
});

app.listen( port, host, () => {
    console.log('Server running');
})