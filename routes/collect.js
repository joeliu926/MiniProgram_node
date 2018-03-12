var express = require('express');
var router = express.Router();
var collectServer =require('../service/collectServer');
router.post('/customerlist', function(req, res, next) {
    collectServer.customerlist(req, res, next);
});

router.post('/createcustomer', function(req, res, next) {
    collectServer.createcustomer(req, res, next);
});

router.post('/taglist', function(req, res, next) {
    collectServer.taglist(req, res, next);
});

router.post('/createtag', function(req, res, next) {
    collectServer.createtag(req, res, next);
});

router.post('/list', function(req, res, next) {
    collectServer.list(req, res, next);
});

router.post('/create', function(req, res, next) {
    collectServer.create(req, res, next);
});

router.post('/recreate', function(req, res, next) {
    collectServer.recreate(req, res, next);
});

router.post('/detail', function(req, res, next) {
    collectServer.detail(req, res, next);
});


router.post('/getthubm', function(req, res, next) {
    collectServer.getthubm(req, res, next);
});

module.exports = router;