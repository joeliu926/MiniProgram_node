

var express = require('express');
var router = express.Router();
var giftServer =require('../service/giftServer');
router.post('/pagelist', function(req, res, next) {
    giftServer.pagelist(req, res, next);
});
router.post('/giftdetail', function(req, res, next) {
    giftServer.giftdetail(req, res, next);
});
module.exports = router;