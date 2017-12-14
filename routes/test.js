var express = require('express');
var router = express.Router();
var testServer =require('../service/testServer');
router.get('/test', function(req, res, next) {
    testServer.test(req, res, next);
});
module.exports = router;