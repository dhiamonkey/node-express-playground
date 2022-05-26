var express = require("express");
var router = express.Router();
var data = require("../db/dummy.json");
const fs = require("fs");

/* GET users listing. */

router.get("/data", (req, res) => {
  res.send(data.user);
});

router.get("/data/:user", (req, res) => {
  res.send(
    data.user.includes(req.params.user)
      ? `hi ${req.params.user}`
      : "no known user found"
  );
});

router.post("/data", (req, res) => {
  console.log(req.body.user);
  fs.writeFile(
    // Path
    "db/dummy.json",
    // Content, do not delete stringify
    JSON.stringify({ user: [...data.user, req.body.user] }),
    // Options
    {
      encoding: "utf8",
      flag: "w",
    },
    //Err Callback
    function writeJSON(err) {
      if (err) return console.log(err);
    }
  );
  res.send(req.body);
});

module.exports = router;
