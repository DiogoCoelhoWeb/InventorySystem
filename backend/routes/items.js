var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Items Route'
  })
});

module.exports = router;
