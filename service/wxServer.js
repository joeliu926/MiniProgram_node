var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var loger=require('../utils/loger');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/users',
    contentType:'application/json'
};

function sendmessage(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url="https://nihaomc.com/wx/msg/sendmessage";
    opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error(error);
            res.send(error);
        }
        else {
            loger.info(JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
    //res.send({'aaa':'aaaa'});
}
module.exports = {
    sendmessage: sendmessage
}
