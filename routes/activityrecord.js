
var express = require('express');
var router = express.Router();
var activityrecordServer =require('../service/activityrecordServer');
router.post('/create', function(req, res, next) {
    activityrecordServer.create(req, res, next);
});
router.post('/getnum', function(req, res, next) {
    activityrecordServer.getnum(req, res, next);
});
router.post('/pagelist', function(req, res, next) {
    activityrecordServer.pagelist(req, res, next);
});

router.post('/getdetail', function(req, res, next) {
    activityrecordServer.getdetail(req, res, next);
});
router.post('/getalreadyappointmentnum', function(req, res, next) {
    activityrecordServer.getalreadyappointmentnum(req, res, next); //
});
router.post('/getbubbleprompt', function(req, res, next) {
    activityrecordServer.getbubbleprompt(req, res, next); //
});

module.exports = router;
