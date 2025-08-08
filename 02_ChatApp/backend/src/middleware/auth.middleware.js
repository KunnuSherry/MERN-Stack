import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" }); // ✅ stop here
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Invalid Token" }); // ✅ stop here
        }

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json({ message: "No User Found" }); // ✅ stop here
        }

        req.user = user;
        next(); // ✅ only call next if all checks passed
    } catch (error) {
        console.error("Error in protectRoute:", error);
        return res.status(500).json({ message: "Internal Error" }); // ✅ return here too
    }
};

export default protectRoute;
