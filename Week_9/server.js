require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS configuration
app.set("view engine", "ejs");

// MongoDB Atlas connection
const dbURI = process.env.MONGODB_URI

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("MongoDB Atlas connected successfully!");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });

// Student Schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  rollNumber: {
    type: String,
    required: true
  },

  course: {
    type: String,
    required: true
  }
});

// Student Model
const Student = mongoose.model("Student", studentSchema);


// ==========================================
// HOME ROUTE - Display Single Page Application
// ==========================================

app.get("/", async (req, res) => {
  try {
    const students = await Student.find();

    res.render("apphome", {
      students: students
    });
  } catch (error) {
    res.status(500).send("Error loading students");
  }
});


// ==========================================
// REST API - CREATE
// POST /students
// ==========================================

app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);

    const savedStudent = await student.save();

    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({
      message: "Error creating student",
      error: error.message
    });
  }
});


// ==========================================
// REST API - READ
// GET /students
// ==========================================

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching students",
      error: error.message
    });
  }
});


// ==========================================
// REST API - UPDATE
// PUT /students/:id
// ==========================================

app.put("/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({
      message: "Error updating student",
      error: error.message
    });
  }
});


// ==========================================
// REST API - DELETE
// DELETE /students/:id
// ==========================================

app.delete("/students/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(
      req.params.id
    );

    if (!deletedStudent) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      message: "Student deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting student",
      error: error.message
    });
  }
});


// ==========================================
// Start Server
// ==========================================

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});