const { Router } = require("express");
const router = Router();

const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote
} = require("../controllers/notes.controller");

// New Notes
router.get("/notes/add", renderNoteForm);

router.post("/notes/new-note", createNewNote);

// Get All Note
router.get("/notes", renderNotes);

// Edit Notes
router.get("/notes/edit/:id", renderEditForm);

router.post("/notes/edit/:id", updateNote);

// Delete Notes
router.delete("/notes/delete/:id", deleteNote);

module.exports = router;
