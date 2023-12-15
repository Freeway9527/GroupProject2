// This route will handle the login form submission and check the employee credentials

const router = require("express").Router();
const {TeamMemberInfo} = require("../../models");


// Create an employee, if we decide to allow this,

// router.post("/", async (req, res) => {
  // try {
    // const employeeData = await Employee.create({
      // username: req.body.username,
      // password: req.body.password,
    // });

    // req.session.save(() => {
      // req.session.employee_id = employeeData.id;
      // req.session.username = employeeData.username;
      // req.session.loggedIn = true;
      // res.json(employeeData);
    // });
  // } catch (err) {
    // console.log(err);
    // res.status(500).json(err);
  // }
// });


// Employee Login
router.post("/login", async (req, res) => {
  try {
    const TeamMemberInfoData = await TeamMemberInfo.findOne({
      where: { username: req.body.username },
    });

    if (!TeamMemberInfoData) {
      res.status(400).json({ message: "No employee with that username!" });
      return;
    }

    const validPassword = TeamMemberInfoData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.employee_id = TeamMemberInfoData.id;
      req.session.username = TeamMemberInfoData.username;
      req.session.loggedIn = true;
      res.json({ employee: TeamMemberInfoData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Employee Logout
router.post("/logout", (req, res) => {
  try {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occurred during logout" });
  }
});

module.exports = router;
