var express = require("express");
var router = express.Router();
const _ = require("lodash");

let x = [2, 3, 4, 21, 99];

let xMin = _.min(x);

router.get("/", function (req, res, next) {
  res.render("index", { title: `${xMin}` });
});

module.exports = router;
