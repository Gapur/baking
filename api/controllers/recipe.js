module.exports = function (mongoose, router, auth) {
  const Recipe = mongoose.model('Recipe');

  router.get('/recipes', auth.authenticate(), function(req, res) {
    Recipe.find({}, (err, recipes) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ recipes });
      }
    });
  });

  router.post('/recipes', auth.authenticate(), function(req, res) {
    let recipe = new Recipe();
    recipe.name = req.body.name;
    recipe.ingredients = req.body.ingredients;
    recipe.prep = req.body.prep;
    recipe.cook = req.body.cook;
    recipe.level = req.body.level;
    recipe.categories = req.body.categories;
    recipe.image = req.body.image;
    recipe.description = req.body.description;
    recipe.createdBy = req.body.createdBy;
    recipe.save((err, recipe) => {
      if (err) {
				res.status(400).json({ error: err.message });
			} else {
				res.status(201).json({ recipe });
			}
    })
  });

  return router;
};
