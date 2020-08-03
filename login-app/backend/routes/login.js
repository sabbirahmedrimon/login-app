const router = require("express").Router();
let Login = require("../models/login.model");

router.route("/").get((req, res) => {
  Login.find()
    .then((logins) => res.json(logins))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const { email, password } = req.body;

  const newLogin = new Login({ email, password });

  newLogin
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Login.findById(req.params.id)
    .then((signup) => res.json(signup))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/authenticate', function(req, res) {
  const { email, password } = req.body;
  Login.findOne({ email }, function(err, newLogin) {
    if (err) {
      console.error(err);
      res.status(400)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!newLogin) {
      res.status(401)
        .json({
        error: 'Incorrect email or password'
      });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(400)
            .json({
            error: 'Internal error please try again'
          });
        } else if (!same) {
          res.status(401)
            .json({
            error: 'Incorrect email or password'
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});


module.exports = router;
