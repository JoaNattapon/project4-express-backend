
const Package = require("../models").InsurancePackage

const index = (req, res) => {
    Package.findAll().then(packages => {res.json(packages)})
}

module.exports={
    index
}