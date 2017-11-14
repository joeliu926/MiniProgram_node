var express = require('express');
var router = express.Router();
var caseServer =require('../service/caseServer');
/* GET users listing. */
router.post('/list', function(req, res, next) {
    caseServer.list(req, res, next);
});
router.post('/detail', function(req, res, next) {
    caseServer.detail(req, res, next);
});

module.exports = router;
