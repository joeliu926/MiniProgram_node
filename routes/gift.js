

var express = require('express');
var router = express.Router();
var giftServer =require('../service/giftServer');
router.post('/pagelist', function(req, res, next) {
    giftServer.pagelist(req, res, next);
});

module.exports = router;