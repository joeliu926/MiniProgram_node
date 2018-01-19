
var express = require('express');
var router = express.Router();
var wxaqrServer =require('../service/wxaqrServer');
router.post('/genwxaqrcode', function(req, res, next) {
    clueServer.genwxaqrcode(req, res, next);
});
module.exports = router;