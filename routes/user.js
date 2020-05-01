const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("<h2>Hello from router</h2>");
// });

const {sayHi} = require("../controller/user.js");

router.get('', sayHi);

module.exports = router;
