const { postTitle, linkTitle, postDate, thumbnail, postIntro, postBrief , sections, conclusionTitle, conclusion } = req.body
    
    try {
        await new PostModel.insert({
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