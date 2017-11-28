var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/consultation',
    contentType:'application/json'
};
/**
 * 添加会话信息
 */
function addconsultation(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+="";
    //opt.url+="list?unionid="+req.body.unionId+"&caseIds="+req.body.caseIds+"&productCode="+req.body.productCode;
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
 * 获取咨询列表
 */
function consultationlist(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+="/list?pageSize="+req.body.pageSize;//?unionid="+req.body.unionId+"&mobile="+req.body.mobile+"2222";
    //opt.url+="list?unionid="+req.body.unionId+"&caseIds="+req.body.caseIds+"&productCode="+req.body.productCode;
    opt.data=req.body;
    console.log(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            console.log(error);
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
 * 获取咨询轨迹
 */
function trail(req, res, next){
    defualtCfg.method="get";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+="/"+req.body.unionId+"/"+req.body.consultingId;//?unionid="+req.body.unionId+"&mobile="+req.body.mobile+"2222";
    //opt.url+="list?unionid="+req.body.unionId+"&caseIds="+req.body.caseIds+"&productCode="+req.body.productCode;
    //opt.data=req.body;
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
 * 获取咨询项目/api/consultation/{会话ID}/product/{客户unionid}
 */
function consultitems(req, res, next){
    defualtCfg.method="get";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+="/"+req.body.id+"/product/"+req.body.customerUnionId;
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
}
/**
 * 获取一个会话下的咨询客户/api/consultation/{id}/customers/list?wxNickname='uyuu'&fieldValue=1
 * id 咨询会话id
 * wxNickName 客户昵称
 * fieldValue 1最近 2最热
 */
function consultcustomers(req, res, next){
    defualtCfg.method="get";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+="/"+req.body.id+"/customers/list?wxNickname="+req.body.wxNickname+"&fieldValue="+req.body.fieldValue;
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
}


module.exports = {
    addconsultation: addconsultation,
    consultationlist:consultationlist,
    trail:trail,
    consultitems:consultitems,
    consultcustomers:consultcustomers
}