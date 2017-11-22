var express = require('express');
var router = express.Router();
var userServer =require('../service/userServer');
/* GET users listing. */
router.post('/userinfo', function(req, res, next) {
  userServer.userinfo(req, res, next);
});
/*router.post('/usertimes', function(req, res, next) {
  userServer.usertimes(req, res, next);
});*/
router.get('/test', function(req, res, next) {
    userServer.test(req, res, next);
});
module.exports = router;
