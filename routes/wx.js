var express = require('express');
var router = express.Router();
var userServer =require('../service/userServer');
var wxServer =require('../service/wxServer');
/**
 * 发送微信消息
 */
router.post('/sendmessage', function(req, res, next) {
    wxServer.sendmessage(req, res, next);
});//
/**
 * 生成二维码
 */
router.get('/getQrCode', function(req, res, next) {
    wxServer.getQrCode(req, res, next);
});
/**
 * 获取accessToke
 */
router.post('/accesstoken', function(req, res, next) {
    wxServer.accesstoken(req, res, next);
});
module.exports = router;