import cors from "cors";
import express from "express";
import env from "dotenv";

import {
    loginRouter,
    messagesRoute,
    signUpRouter,
    userRouter,
} from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST"],
    })
);

app.use("/signup", signUpRouter);
app.use("/login", loginRouter);
app.use("/messages", messagesRoute);
app.use("/user", userRouter);
app.use("/", (_req, res) => {
    res.send("Server is running");
});

app.listen(port);
console.log(`Server running on port http://localhost:${port}`);
