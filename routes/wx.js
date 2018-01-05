var express = require('express');
var router = express.Router();
var userServer =require('../service/userServer');
/**
 * 发送微信消息
 */
router.post('/sendmessage', function(req, res, next) {
    userServer.sendmessage(req, res, next);
});
module.exports = router;