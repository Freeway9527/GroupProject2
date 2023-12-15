// This file will hold the routes for the department model

const router = require("express").Router();
const { Department } = require("../../models");


// GET all departments
router.get("/", async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.json(departments);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET a department by ID
router.get("/:id", async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) {
      res.status(404).json({ message: "Department not found" });
      return;
    }
    res.json(department);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// CREATE a new department
router.post("/", async (req, res) => {
  try {
    const departmentData = await Department.create(req.body);
    res.status(201).json(departmentData);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// UPDATE a department by ID
router.put("/:id", async (req, res) => {
  try {
    const departmentData = await Department.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!departmentData[0]) {
      res.status(404).json({ message: "Department not found" });
      return;
    }
    res.json({ message: "Department updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// DELETE a department by ID
router.delete("/:id", async (req, res) => {
  try {
    const departmentData = await Department.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!departmentData) {
      res.status(404).json({ message: "Department not found" });
      return;
    }
    res.json({ message: "Department deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
