import { User } from "../model/User";
import Jwt from "jsonwebtoken";


export const isAuthenticated = async (req, res, next) => {
    try {
        // console.log(req.headers)
        const  token = req.headers.authorization;

  
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Login to Access this resource",
            })
        }
        const decoded = Jwt.verify(token, "sanjay");
        const user = await User.findById(decoded._id);

        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}