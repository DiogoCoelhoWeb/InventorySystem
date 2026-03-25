var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Audit Log Route'
  })
});

module.exports = router;
