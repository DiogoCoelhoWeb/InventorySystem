var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Locations Route'
  })
});

module.exports = router;
