const router = require("express").Router();
let Signup = require("../models/signup.model");

router.route("/").get((req, res) => {
  Signup.find()
    .then((signups) => res.json(signups))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const newSignup = new Signup({
    email,
    password,
  });

  newSignup
    .save()
    .then(() => res.json("Signup Completed!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Signup.findById(req.params.id)
    .then((signup) => res.json(signup))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Signup.findByIdAndDelete(req.params.id)
    .then(() => res.json("Person deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Signup.findById(req.params.id)
    .then((signup) => {
      signup.email = req.body.email;
      signup.password = req.body.password;

      signup
        .save()
        .then(() => res.json("Sign Up completed!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
