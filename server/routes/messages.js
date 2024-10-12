import express from "express";
import {
    getMessagesController,
    postMessageController,
} from "../controllers/index.js";
import { authenticateToken } from "../libs/jwt/authenticateToken.js";
import { messageServerError } from "../responseMessages/responseMessages.js";

const messagesRoute = express.Router();

messagesRoute.use(authenticateToken);

messagesRoute.post("/", async (req, res) => {
    let response;
    try {
        response = await postMessageController(req.body);
    } catch (e) {
        response = messageServerError;
        console.error(e);
    } finally {
        res.send(response);
    }
});

messagesRoute.post("/messages", async (req, res) => {
    let response;
    try {
        response = await getMessagesController(req.body);
    } catch (e) {
        response = messageServerError;
        console.error(e);
    } finally {
        res.send(response);
    }
});

export { messagesRoute };
