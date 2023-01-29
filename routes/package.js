const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.package.index);
router.update("/buypack", ctrl.package.buy);
module.exports = router;
