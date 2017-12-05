var express = require('express');
var router = express.Router();
var customerServer =require('../service/customerServer');
router.post('/addcustomer', function(req, res, next) {
    customerServer.addcustomer(req, res, next);
});
router.post('/getcustomer', function(req, res, next) {
    customerServer.getcustomer(req, res, next);
});
router.post('/update', function(req, res, next) {
    customerServer.update(req, res, next);
});
module.exports = router;
