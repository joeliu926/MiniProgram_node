
var express = require('express');
var router = express.Router();
var wxaServer =require('../service/wxaServer');
router.post('/formid', function(req, res, next) {
    wxaServer.formid(req, res, next);
});

module.exports = router;