module.exports = function (mongoose, router, auth) {
  const Note = mongoose.model("Note");

  router.get('/notes', auth.authenticate(), (req, res) => {
    Note.find({}, (err, notes) => {
      if (err) {
				res.status(400).json({ error: err.message });
			} else {
				res.json({ notes });
			}
    });
  });

  router.get('/notes/:id', auth.authenticate(), (req, res) => {
    Note.findById(req.params.NoteId, (err, note) => {
      if (err) {
				res.status(400).json({ error: err.message });
			} else {
				res.json({ note });
			}
    });
  });

  router.post('/notes', auth.authenticate(), (req, res) => {
    let note = new Note();
    note.title = req.body.title;
    note.text = req.body.text;
    note.color = req.body.color;
    note.save((err, note) => {
      if (err) {
				res.status(400).json({ error: err.message });
			} else {
				res.status(201).json({ note, message: "Successfully new note created." });
			}
    });
  });

  router.put('/notes/:id', auth.authenticate(), (req, res) => {
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
						res.json({ message: "Successfully note updated." });
					}
        });
      }
    });
  });

  router.delete('/notes/:id', auth.authenticate(), (req, res) => {
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
						res.json({ message: "Successfully note removed." });
					}
        });
      }
    });
  });

  return router;
};
