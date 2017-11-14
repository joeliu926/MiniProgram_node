var express = require('express');
var router = express.Router();
var unionidServer =require('../service/unionidServer');

/* GET users listing. */
router.post('/code', function(req, res, next) {
    //unionidServer.userinfo(req, res, next);
    unionidServer.code(req, res, next);
});
router.post('/userinfo', function(req, res, next) {
    unionidServer.userinfo(req, res, next);
});

module.exports = router;