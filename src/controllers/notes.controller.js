const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.send("note add");
};

notesCtrl.createNewNote = (req,res) =>{
    console.log(req.body);
    res.send("new note");
};

notesCtrl.renderNotes = (req,res) =>{
    res.send("render notes");
};

notesCtrl.renderEditForm = (req, res) =>{
    res.render("notes/new-note");
};

notesCtrl.updateNote = (req,res) =>{
    res.send("update note");
};

notesCtrl.deleteNote = (req,res) =>{
    res.send("deleting note");
};

module.exports = notesCtrl;