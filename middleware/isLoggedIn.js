const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) {
        return res.status(401).json({
            success: false,
            msg: "No token found. Please log in again.",
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        console.log("in loggedin middle");
        next();
    } catch (err) {
        res.status(401).json({
            success: false,
            msg: "Token is not valid. Please log in again.",
        });
    }
};
