import express from "express";
import { signUpController } from "../controllers/index.js";
import { messageServerError } from "../responseMessages/responseMessages.js";

const signUpRouter = express.Router();

signUpRouter.post("/", async (req, res) => {
    let response;
    try {
        response = await signUpController(req.body);
    } catch (e) {
        response = messageServerError;
        console.error(e);
    } finally {
        res.send(response);
    }
});

export { signUpRouter };
