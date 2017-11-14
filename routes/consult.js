var express = require('express');
var router = express.Router();
var consultServer =require('../service/consultServer');
router.post('/addconsultation', function(req, res, next) {
    consultServer.addconsultation(req, res, next);
});
module.exports = router;
