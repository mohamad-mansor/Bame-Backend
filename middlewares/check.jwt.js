import jwt from "jsonwebtoken";
import createHttpError from "http-errors";

export function checkJWT(req, res, next) {
    try {
        const jwttoken = req.cookies.jwt;
        if (!jwttoken) {
            return next(createHttpError.Unauthorized, ('jwt token not found'));
        }
        const decoded = jwt.verify(jwttoken, process.env.JWTKEY);
        req.user = decoded;
        next();

    } catch (error) {
        console.error(error);
        next(createHttpError.Unauthorized,('invalid jwt token'));
    }

}
