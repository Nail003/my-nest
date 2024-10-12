import jwt from "jsonwebtoken";

export function authenticateToken(req, res, next) {
    const { accessToken } = req.body;

    if (!accessToken) return res.send({ ok: false });

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) return res.send({ ok: false });
        req.body.userName = user.userName;
        next();
    });
}
