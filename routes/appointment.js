var express = require('express');
var router = express.Router();
var appointmentServer =require('../service/appointmentServer');

router.post('/list', function(req, res, next) {
    appointmentServer.list(req, res, next);
});
router.post('/detail', function(req, res, next) {
    appointmentServer.detail(req, res, next);
});
router.post('/send', function(req, res, next) {
    appointmentServer.send(req, res, next);
});

module.exports = router;