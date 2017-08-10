const noteController = require('../controllers/noteController');

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send("<h2>Привет Express!</h2>");
  });

  app.get('/notes', noteController.getNotes);

  app.get('/notes/:id', noteController.getNoteById);
};
