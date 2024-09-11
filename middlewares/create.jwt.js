import jwt from "jsonwebtoken";

export function createJWT(req, res, next) {
    try {
        const userid = req.user.id;
        const payload = {
            id: userid
        };
        const token = jwt.sign(payload, process.env.JWTKEY, {expiresIn: "1h"});
        req.jwt= token;

        next();

    } catch (error) {
        console.error("Error generating JWT", error);

        next(error);
    }
}