var express = require('express');
var router = express.Router();
var indexServer =require('../service/indexServer');
router.post('/cluelist', function(req, res, next) {
    indexServer.cluelist(req, res, next);
});

router.post('/cluedetail', function(req, res, next) {
    indexServer.cluedetail(req, res, next);
});

router.post('/sharelist', function(req, res, next) {
    indexServer.sharelist(req, res, next);
});

router.post('/clueremark', function(req, res, next) {
    indexServer.clueremark(req, res, next);
});

router.post('/clueclose', function(req, res, next) {
    indexServer.clueclose(req, res, next);
});

router.post('/linkmanupdate', function(req, res, next) {
    indexServer.clueclose(req, res, next);
});

router.post('/linkman', function(req, res, next) {
    indexServer.linkman(req, res, next);
});

module.exports = router;