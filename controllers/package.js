
const Package = require("../models").InsurancePackage
const User = require("../models").User

const index = (req, res) => {
    Package.findAll().then(packages => {res.json(packages)})
}

const buy =(req,res)=>{
    User.update(
        {
            package: req.body.package
        },
        {
            where: {username: req.user.username}
        }
    ).then((r) => {
        console.log("fin");
    });
}
module.exports={
    index,
    buy
}