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
 * 咨询会话更新接口，可更新会话与案例的关系，会话与项目的关系entry
 */
router.post('/consultantupdate', function(req, res, next) {
    consultServer.consultantupdate(req, res, next);
});
/**
 * 客户进入咨询师分享的小程序，对客户信息，线索信息进行维护sharelike
 */
router.post('/entry', function(req, res, next) {
    consultServer.entry(req, res, next);
});
/**
 * 查询一次分享中，单个客户对某个案例的点赞状态
 */
router.post('/getsharelike', function(req, res, next) {
    consultServer.getsharelike(req, res, next);
});
/**
 *  客户进入咨询师分享的小程序，对某个案例进行点赞操作 或者进行 提交资料给医生操作
 */
router.post('/handelsharecase', function(req, res, next) {
    consultServer.handelsharecase(req, res, next);
});
/**
 * 
 * 
 */
router.post('/interactlist', function(req, res, next) {
    consultServer.interactlist(req, res, next);
});

/**
 *  客户进入咨询师分享的小程序，查询在之前提交的正 反面照片
 */
router.post('/getpostphoto', function(req, res, next) {
    consultServer.getpostphoto(req, res, next);
});

module.exports = router;
