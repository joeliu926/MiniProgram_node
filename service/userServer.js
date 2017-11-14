/**
 * Created by JoeLiu on 2017-10-23.
 */

var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/dashboard/platform',
    contentType:'application/json'
};

function userate(req, res, next){

    res.send({'aaa':'aaaa'});
   
}
function usertimes(req,res,next){
	 res.send({'usertimes':'this is user times aaaaa'});
}


module.exports = {
    userate: userate,
    usertimes:usertimes
}