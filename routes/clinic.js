/**
 * Created by admin on 2018-1-8.
 */
var express = require('express');
var router = express.Router();
var clueServer =require('../service/clinicServer');
router.post('/detail', function(req, res, next) {
    clueServer.detail(req, res, next);
});
module.exports = router;
