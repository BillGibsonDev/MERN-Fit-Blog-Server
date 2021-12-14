import express from 'express';
import dotenv from 'dotenv';



import { createUser, loginUser, confirmAdmin, confirmRole, getRole, getDate } from "../controllers/UserController.js";
import { createPost, getPost, getPosts, deletePost, editPost, addLike, removeLike } from "../controllers/PostController.js";
import { createComment, deleteComment } from "../controllers/CommentController.js";

const router = express.Router();
dotenv.config();

// read
router.get(`/${process.env.NODE_ENV_GET_POSTS_URL}`, getPosts);
router.get(`/${process.env.NODE_ENV_GET_POST_URL}/:postId`, getPost);
router.post(`/${process.env.NODE_ENV_LOGIN_URL}`, loginUser);
router.post(`/${process.env.NODE_ENV_SET_ROLE_URL}`, getRole);
router.post(`/${process.env.NODE_ENV_ADMIN_CONFIRM_URL}`, confirmAdmin);
router.post(`/${process.env.NODE_ENV_ROLE_CONFIRM_URL}`, confirmRole);
router.post(`/${process.env.NODE_ENV_GET_DATE_URL}`, getDate);

// update
router.post(`/${process.env.NODE_ENV_UPDATE_POST_URL}/:postId`, editPost);


// create
router.post(`/${process.env.NODE_ENV_ADD_POST_URL}`, createPost);
router.post(`/${process.env.NODE_ENV_SEND_COMMENT_URL}/:postId/comments`, createComment);
router.post(`/${process.env.NODE_ENV_REGISTER_URL}`, createUser);
router.post(`/${process.env.NODE_ENV_LIKE_POST_URL}`, addLike);

// delete
router.delete(`/${process.env.NODE_ENV_DELETE_POST_URL}/:postId`, deletePost);
router.post(`/${process.env.NODE_ENV_DELETE_COMMENT_URL}/:postId/:commentId`, deleteComment);
router.post(`/${process.env.NODE_ENV_REMOVE_LIKE_URL}`, removeLike);

export default router;