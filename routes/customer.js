var express = require('express');
var router = express.Router();
var customerServer =require('../service/customerServer');
router.post('/addcustomer', function(req, res, next) {
    customerServer.addcustomer(req, res, next);
});
module.exports = router;
