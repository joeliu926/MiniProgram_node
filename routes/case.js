var express = require('express');
var router = express.Router();
var caseServer =require('../service/caseServer');
/* GET users listing. */
router.post('/list', function(req, res, next) {
    caseServer.list(req, res, next);
});
router.post('/morelist', function(req, res, next) {
    caseServer.morelist(req, res, next);
});


router.post('/detail', function(req, res, next) {
    caseServer.detail(req, res, next);
});//listpagebyproducts
router.post('/listpagebyproducts', function(req, res, next) {
    caseServer.listpagebyproducts(req, res, next);
});//
module.exports = router;
