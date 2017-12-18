var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var loger=require('../utils/loger');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/users',
    contentType:'application/json'
};

function userinfo(req, res, next){

    console.log(req.body);
    //defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+="/wx/"+req.body.unionid;
    //opt.url+="list?unionid="+req.body.unionId+"&caseIds="+req.body.caseIds+"&productCode="+req.body.productCode;
   // opt.data=req.body;
    console.log(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            console.log(JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
    //res.send({'aaa':'aaaa'});
}
function test(req, res, next){
    res.send({'aaa':'this is a test'});
}
module.exports = {
    userinfo: userinfo,
    test:test
}