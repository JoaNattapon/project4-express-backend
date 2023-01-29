
const Package = require("../models").InsurancePackage
const User = require("../models").User
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const index = (req, res) => {
    Package.findAll().then(packages => {res.json(packages)})
}

const buy =(req,res)=>{
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
    }

    jwt.verify(req.token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err || !decodedUser)
            return res.status(401).json({error: "Unauthorized Request"});

        req.user = decodedUser;

    User.update(
        {
            package: req.body.package_id
        },
        {
            where: {username: decodedUser.username}
        }
    ).then((r) => {
        console.log("fin");
    });
    
    })  
}
module.exports={
    index,
    buy
}