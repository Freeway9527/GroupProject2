const router = require("express").Router();
const { TeamMember, Department, Role, Manager } = require("../../models");

// Get all employees
router.get("/", async (req, res) => {
  try {
    const teamMembers = await TeamMember.findAll({
      attributes: { exclude: ["password"] },
    });
    res.json(teamMembers);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET employee by ID route
router.get("/:id", async (req, res) => {
  try {
    const teamMemberData = await TeamMember.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "first_name",
        "last_name",
        "email",
        "hire_date",
        "salary",
        // Include other attributes here
      ],
      include: [
        {
          // Include department attributes
          model: Department,
          attributes: ["department_name"], 
        },
        {
          // Include role attributes
          model: Role,
          attributes: ["role_name"], 
        },
        {
          // Include manager attributes
          model: Manager,
          attributes: ["first_name", "last_name"], 
        },
        // We can add other associations as needed...
      ],
    });

    if (!teamMemberData) {
      res.status(404).json({ message: "No employee found with this id" });
      return;
    }

    //this is where it will render the employee profile page "views template"
    const teamMember = teamMemberData.get({ plain: true });
    res.render("employee-profile", {
      teamMember,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE an employee by ID
router.put("/:id", async (req, res) => {
  try {
    const employeeData = req.body;
    const updatedEmployee = await TeamMember.update(employeeData, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedEmployee[0]) {
      res.status(404).json({ message: "No employee found with this id" });
      return;
    }

    res.status(200).json({ message: "Employee updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" }); // Change this to a more informative error message
  }
});



// CREATE a new employee
router.post("/", async (req, res) => {
  try {
    const employeeData = req.body;
    const newEmployee = await TeamMember.create(employeeData);
    res.status(201).json(newEmployee);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// DELETE an employee by ID
router.delete("/:id", async (req, res) => {
  try {
    const teamMemberData = await TeamMember.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!teamMemberData) {
      res.status(404).json({ message: "No employee found with this id" });
      return;
    }

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
