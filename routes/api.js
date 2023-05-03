const express = require("express");
const getDBNotes = require("../helpers");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const router = express.Router();

router.get("/notes", async (req, res) => {
  const notes = await getDBNotes();
  res.send(notes);
});

router.post("/notes", async (req, res) => {
  const notes = await getDBNotes();
  const newNote = req.body;
  const noteID = uuidv4();
  newNote.id = noteID;
  notes.push(newNote);
  console.log(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.send(newNote);
});

router.delete("/notes/:id", async (req, res) => {
  const notes = await getDBNotes();
  const id = req.params.id;
  const result = notes.filter((note) => note.id !== id);
  fs.writeFileSync("./db/db.json", JSON.stringify(result));
  res.send(result);
});

module.exports = router;
