import express from "express";
import { messageServerError } from "../responseMessages/responseMessages.js";
import { loginController } from "../controllers/index.js";

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
    let response;
    try {
        response = await loginController(req.body);
    } catch (e) {
        response = messageServerError;
        console.error(e);
    } finally {
        res.send(response);
    }
});

export { loginRouter };
