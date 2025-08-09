"use strict";

const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET
app.get("/", (req, res) => {
  res.json({ message: "This is GET method." });
});

// GET with parameter
app.get("/:id", (req, res) => {
  res.json({ message: `This is GET method with id=${req.params.id}.` });
});

// POST
app.post("/", (req, res) => {
  res.json({ message: "This is POST method.", body: req.body });
});

// PUT
app.put("/", (req, res) => {
  res.json({ message: "This is PUT method.", body: req.body });
});

// DELETE
app.delete("/", (req, res) => {
  res.json({ message: "This is DELETE method." });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
