module.exports = function (app, mongoose, auth) {
  const Note = mongoose.model("Note");

  app.get('/note', auth.authenticate(), (req, res) => {
    Note.find({}, (err, notes) => {
      if (err) {
				res.status(400).json({ error: err.message });
			} else {
				res.json({ notes });
			}
    });
  });

  app.get('/note/:id', (req, res) => {
    Note.findById(req.params.NoteId, (err, note) => {
      if (err) {
				res.status(400).json({ error: err.message });
			} else {
				res.json({ note });
			}
    });
  });

  app.post('/note', (req, res) => {
    let note = new Note();
    note.title = req.body.title;
    note.text = req.body.text;
    note.color = req.body.color;
    note.save((err, note) => {
      if (err) {
				res.status(400).json({ error: err.message });
			} else {
				res.json({ note });
			}
    });
  });

  app.put('/note/:id', (req, res) => {
    let update = req.body;
    Note.findOne({ _id: req.params.id }, (err, note) => {
      if (err) {
				res.status(400).json({ error: err.message });
			} else if (!note) {
				res.status(400).json({ error: "Note not found." });
			} else {
        for (let key in req.body) {
					note[key] = req.body[key];
        }
        note.save((err) => {
          if (err) {
						res.status(400).json({ error: err.message });
					} else {
						res.json({ message: "Note updated successfully." });
					}
        });
      }
    });
  });

  app.delete('/note/:id', (req, res) => {
    Note.findById(req.params.id, (err, note) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else if (!note) {
        res.status(400).json({ error: "Note not found." });
      } else {
        note.remove((err, note) => {
          if (err) {
						res.status(400).json({ error: err.message });
					} else {
						res.json({ message: "Note removed successfully." });
					}
        });
      }
    });
  });
};
