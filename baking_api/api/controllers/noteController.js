const mongose = require('mongose');
const Note = require('../models/note');

exports.getNotes = (req, res) => {
  Note.find({}, (err, note) => {
    if (err) res.send(err);
    res.json(note);
  });
};

exports.getNoteById = (req, res) => {
  Note.findById(req.params.NoteId, (err, note) => {
    if (err) res.send(err);
    res.json(note);
  });
};
