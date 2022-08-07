var express = require("express");
var router = express.Router();

let arr = [1, 5, 3, 4, 1];

const countStudents = (height) => {
  const originalHeights = [...height];
  const sortHeights = height.sort((a, b) => a - b);
  let diff = 0;
  for (let i = 0; i < originalHeights.length; i++) {
    if (originalHeights[i] !== sortHeights[i]) {
      diff += 1;
    }
  }
  return diff;
};

const closestNumbers = (numbers) => {
  // Write your code here
  numbers.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i < numbers.length - 1; i++) {
    min = Math.min(min, numbers[i + 1] - numbers[i]);
  }
  const result = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i + 1] - numbers[i] === min) {
      result.push([numbers[i], numbers[i + 1]]);
    }
  }
  for (let i = 0; i < result.length; i++) {
    return console.log(...result);
  }
};

async function getMovieList(year) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/moviesdata?Year=<year>
  var options = {
    method: "GET",
    hostname: "jsonmock.hackerrank.com",
    path: `/api/movies?Year=${year}`,
    headers: {},
    maxRedirects: 20,
  };

  var req = await https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
      let arr = JSON.parse(chunk);
      let arr2 = [...arr.data];
      let arr3 = arr2.map((data) => {
        return data.Title;
      });
      console.log(arr3);
    });

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      //console.log(body.toString());
    });

    res.on("error", function (error) {
      console.error(error);
    });
  });

  req.end();
}
console.log(getMovieList(2012));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: height });
});

module.exports = router;
