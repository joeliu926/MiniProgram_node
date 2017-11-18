var express = require('express');
var router = express.Router();
var consultServer =require('../service/consultServer');
router.post('/addconsultation', function(req, res, next) {
    consultServer.addconsultation(req, res, next);
});
router.post('/list', function(req, res, next) {
    consultServer.consultationlist(req, res, next);
});
router.post('/trail', function(req, res, next) {
    consultServer.trail(req, res, next);
});
module.exports = router;
