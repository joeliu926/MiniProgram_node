var express = require('express');
var router = express.Router();
var clueServer =require('../service/clueServer');
router.post('/detail', function(req, res, next) {
    clueServer.detail(req, res, next);
});
module.exports = router;