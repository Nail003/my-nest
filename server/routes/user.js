import express from "express";
import { messageServerError } from "../responseMessages/responseMessages.js";
import {
    getUserAvatarController,
    getUserChatsController,
} from "../controllers/index.js";
import { authenticateToken } from "../libs/jwt/authenticateToken.js";

const userRouter = express.Router();

userRouter.use(authenticateToken);

userRouter.post("/avatar", async (req, res) => {
    let response;
    try {
        response = await getUserAvatarController(req.body);
    } catch (e) {
        response = messageServerError;
        console.error(e);
    } finally {
        res.send(response);
    }
});

userRouter.post("/chats", async (req, res) => {
    let response;
    try {
        response = await getUserChatsController(req.body);
    } catch (e) {
        response = messageServerError;
        console.error(e);
    } finally {
        res.send(response);
    }
});

export { userRouter };
