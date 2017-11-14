var express = require('express');
var router = express.Router();
var caseServer =require('../service/eventServer');
router.post('/add', function(req, res, next) {
    caseServer.addevent(req, res, next);
});
module.exports = router;
