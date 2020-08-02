const router = require("express").Router();
let Name = require("../models/name.model");

router.route("/").get((req, res) => {
  Name.find()
    .then((names) => res.json(names))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newName = new Name({
    username,
    email,
    password,
  });

  newName
    .save()
    .then(() => res.json("Name added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Name.findById(req.params.id)
    .then((name) => res.json(name))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Name.findByIdAndDelete(req.params.id)
    .then(() => res.json("Name deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Name.findById(req.params.id)
    .then((Name) => {
      name.username = req.body.username;
      name.email = req.body.email;
      name.password = req.body.password;

      name
        .save()
        .then(() => res.json("Name updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
