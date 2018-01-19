
var express = require('express');
var router = express.Router();
var posterInfoServer =require('../service/posterInfoServer');
/* GET users listing. */
router.post('/addposter', function(req, res, next) {
    posterInfoServer.addposter(req, res, next);
});
router.post('/pagelist', function(req, res, next) {
    posterInfoServer.pagelist(req, res, next);
});
router.post('/posterdel', function(req, res, next) {
    posterInfoServer.posterdel(req, res, next);
});




module.exports = router;

