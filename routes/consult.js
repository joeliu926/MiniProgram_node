var express = require('express');
var router = express.Router();
var consultServer =require('../service/consultServer');
/**
 * 添加会话信息
 */
router.post('/addconsultation', function(req, res, next) {
    consultServer.addconsultation(req, res, next);
});
/**
 * 获取咨询列表
 */
router.post('/list', function(req, res, next) {
    consultServer.consultationlist(req, res, next);
});
/**
 * 获取咨询轨迹
 */
router.post('/trail', function(req, res, next) {
    consultServer.trail(req, res, next);
});

/**
 * 获取咨询项目
 */
router.post('/consultitems', function(req, res, next) {
    consultServer.consultitems(req, res, next);
});
/**
 * 获取一个咨询下面的所有客户
 */
router.post('/consultcustomers', function(req, res, next) {
    consultServer.consultcustomers(req, res, next);
});

module.exports = router;
