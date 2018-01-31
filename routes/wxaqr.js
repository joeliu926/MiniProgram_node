
var express = require('express');
var router = express.Router();
var wxaqrServer =require('../service/wxaqrServer');
router.post('/genwxaqrcode', function(req, res, next) {
    wxaqrServer.genwxaqrcode(req, res, next);
});
router.post('/sendtemplatemsg', function(req, res, next) {
    wxaqrServer.sendtemplatemsg(req, res, next);
});
module.exports = router;