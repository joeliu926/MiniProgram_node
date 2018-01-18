/**
 * Created by JoeLiu on 2018-01-17.
 */
var express = require('express');
var router = express.Router();
var indexServer =require('../service/apiServer');
router.post('/createposter', function(req, res, next) {
    indexServer.createposter(req, res, next);
});

router.post('/deleteposter', function(req, res, next) {
    indexServer.deleteposter(req, res, next);
});


module.exports = router;