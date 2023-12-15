// This route will render the login.handlebars template, which will display the login form.

const router = require("express").Router();

// GET login route direct user to login page
router.get("/login", (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
