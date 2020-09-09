var express = require('express');
var router = express.Router();

var nocController = require('../controllers/noc.controller')

/* test */
router.get('/test', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', nocController.create);

router.get('/', nocController.getById);

router.put('/', nocController.update);

router.delete('/', nocController.delete);

module.exports = router;
