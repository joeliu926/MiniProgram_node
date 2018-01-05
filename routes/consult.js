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
 * 获取单个用户咨询轨迹
 */
router.post('/singletrail', function(req, res, next) {
    consultServer.singletrail(req, res, next);
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


/**
 *  通过会话id获取单次分享的案例ID
 */
router.post('/sharecase', function(req, res, next) {
    consultServer.sharecase(req, res, next);
});
/**
 * 咨询会话更新接口，可更新会话与案例的关系，会话与项目的关系
 */
router.post('/consultantupdate', function(req, res, next) {
    consultServer.consultantupdate(req, res, next);
});

module.exports = router;
