
var express = require('express');
var router = express.Router();
var posterCategoryServer =require('../service/posterCategoryServer');
/* GET users listing. */
router.post('/addorupdate', function(req, res, next) {
    posterCategoryServer.addorupdate(req, res, next);
});
router.post('/list', function(req, res, next) {
    posterCategoryServer.list(req, res, next);
});
router.post('/addposter', function(req, res, next) {
    posterCategoryServer.addposter(req, res, next);
});





module.exports = router;
