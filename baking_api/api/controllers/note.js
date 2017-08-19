module.exports = function (app, mongoose, auth) {
  const Note = mongoose.model("Note");

  app.get('/note', (req, res) => {
    Note.find({}, (err, notes) => {
      if (err) {
				res.status(400).json({ error: err.message });
			} else {
				res.json({ notes: notes });
			}
    });
  });

  app.get('/note/:id', (req, res) => {
    Note.findById(req.params.NoteId, (err, note) => {
      if (err) {
				res.status(400).json({ error: err.message });
			} else {
				res.json({ note: note });
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
				res.json({ note: note });
			}
    });
  });

  app.put('/note/:id', (req, res) => {
    let update = req.body;
    Note.findOne({ _id: req.params.id }, (err, note) => {
      if (err) {
				res.status(400).json({ error: err.message });
			} else if (!user) {
				res.status(400).json({ error: "Note not found." });
			} else {
        for (let key in req.body) {
					user[key] = req.body[key];
        }
        note.save((err, note) => {
          if (err) {
						res.status(400).json({ error: err.message });
					} else {
						res.json({ user: user });
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
        user.remove((err, user) => {
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
