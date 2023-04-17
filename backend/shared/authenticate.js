// require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require("../Models/User");

function authenticateToken(req, res, next) {
    console.log(req.headers);
    const authHeader = req.headers['authorization']
    console.log(authHeader);
    const token = authHeader //&& authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(403)
        req.userID = user._id
        next()
    })
}

// function parseJwt(token) {
//     var base64Url = token.split('.')[1];
//     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));
//
//     return JSON.parse(jsonPayload);
// };

module.exports = {authenticateToken}