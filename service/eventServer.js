var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/event',
    contentType:'application/json'
};
/**
 * v1用户访问分享事件
 * @param req
 * @param res
 * @param next
 */
function addevent(req, res, next){

    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+="";
   // opt.url+="list?unionid="+req.body.unionId+"&caseIds="+req.body.caseIds+"&productCode="+req.body.productCode;
    opt.data=req.body;
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
/**
 * v2 添加客户预约事件
 * @param req
 * @param res
 * @param next
 */
function vtwoevent(req, res, next){

    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+="/v2";
    // opt.url+="list?unionid="+req.body.unionId+"&caseIds="+req.body.caseIds+"&productCode="+req.body.productCode;
    opt.data=req.body;
    console.log(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            console.log("v2 event----->", JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);

    //res.send({'aaa':'aaaa'});

}
module.exports = {
    addevent: addevent,
    vtwoevent:vtwoevent
}