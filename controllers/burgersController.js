const express = require("express"),
  router = express.Router(),
  burger = require("../models/burger.js");

// Setting routes for the app:
router.get("/", (req, res) => {
  burger.all(data => {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(["name", "eaten"], [req.body.name, req.body.eaten], result => {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.update(
    {
      eaten: true
    },
    condition,
    result => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  burger.delete(condition, result => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Exporting routes for use in other files:
module.exports = router;
