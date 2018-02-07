var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var wxConfig=require('../config/wxaAPI');
var appUtil=require('../utils/appUtils');
var WXBizDataCrypt = require('../utils/WXBizDataCrypt');
var loger=require("./../utils/loger");
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/posterCategory',
    contentType:'application/json'
};
/**
 * 添加、修改海报分类 api/posterCategory
 * @param req
 * @param res
 * @param next
 */
function addorupdate(req, res, next){
    defualtCfg.method="PUT";
    var opt=appUtil.extend({},defualtCfg);
    //opt.authorization =sessionAgent.getUserToken(req);
    opt.v = req.headers['v'];
    opt.url+=``;
    //req.body.loginName=sessionAgent.getUserId(req);
    opt.data=req.body;
    loger.info("posterCategory---addorupdate======>",opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            body = JSON.parse(body);
            res.send(body);
        }
    }
    httpClient(opt);
}
/**
 * 分类列表查询 api/posterCategory/list?userUnionId=13683615604
 * @param req
 * @param res
 * @param next
 */
function list(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    //opt.authorization =sessionAgent.getUserToken(req);
    let userUnionId=req.body.userUnionId;
    opt.v = req.headers['v'];
    opt.url+=`/list?userUnionId=${userUnionId}`;

   // opt.data=req.body;
    loger.info("posterCategory---list======>",opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            body = JSON.parse(body);
            res.send(body);
        }
    }
    httpClient(opt);
}
/**
 * 新建海报 api/posterCategory  错误的删除
 * @param req
 * @param res
 * @param next
 */
function addposter(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    //opt.authorization =sessionAgent.getUserToken(req);
    opt.v = req.headers['v'];
    opt.url+=``;
    //req.body.loginName=sessionAgent.getUserId(req);
    opt.data=req.body;
    loger.info("posterCategory---add======>",opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            body = JSON.parse(body);
            res.send(body);
        }
    }
    httpClient(opt);
}



module.exports = {
    addorupdate:addorupdate,
    list:list,
    addposter:addposter
}
