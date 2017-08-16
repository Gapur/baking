const Note = require('../models/note');

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send("<h2>Привет Express!</h2>");
  });

  app.get('/note', (req, res) => {
    Note.find({}, (err, notes) => {
      if (err) res.send(err);
      res.json(notes);
    });
  });

  app.get('/note/:id', (req, res) => {
    Note.findById(req.params.NoteId, (err, note) => {
      if (err) res.send(err);
      res.json(note);
    });
  });

  app.post('/note', (req, res) => {
    let note = new Note();
    note.title = req.body.title;
    note.text = req.body.text;
    note.color = req.body.color;
    note.save((err, note) => {
      if (err) res.send(err);
      res.json(note);
    });
  });

  app.put('/note/:id', (req, res) => {
    let noteId = req.params.id;
    let update = req.body;
    Note.findByIdAndUpdate(noteId, update, { new: true }, (err, newNote) => {
      if (err) res.send(err);
      res.json(note);
    });
  });

  app.delete('/note/:id', (req, res) => {
    let noteId = req.params.id;
    Note.findByIdAndRemove(noteId, (err, note) => {
      if (err) res.send(err);
      res.json(note);
    });
  });
};
