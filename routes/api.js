const express = require("express");
const router = express.Router();
const db = require("../Develop/db/db.json");
const { generateUniqueId } = require("../helpers");
const fs = require("fs");
const path = require("path");

router.get("/notes", (req, res) => {
  res.json(db);
});

router.post("/notes", async (req, res) => {
  const newNote = req.body;
  newNote.id = generateUniqueId();
  db.push(newNote);
  fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
    if (err) throw err;
    console.log("Note added!");
  });
  res.json(newNote);
});

router.delete("/notes/:id", async (req, res) => {
  const notes = await getDBNotes()
  const id = req.params.id;
  const result = notes.filter((note) => note.id !== id)
  fs.writeFileSync('./db/db.json', JSON.stringify(result))
  res.send(result)
});

module.exports = router;