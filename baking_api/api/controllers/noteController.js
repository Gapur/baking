const Note = require('../models/note');

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send("<h2>Привет Express!</h2>");
  });

  app.get('/notes', (req, res) => {
    Note.find({}, (err, notes) => {
      if (err) res.send(err);
      res.json(notes);
    });
  });

  app.get('/notes/:id', (req, res) => {
    Note.findById(req.params.NoteId, (err, note) => {
      if (err) res.send(err);
      res.json(note);
    });
  });
};
