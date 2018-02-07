var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var loger=require("./../utils/loger");
var wxaAPI=require('../config/wxaAPI');
var baseServer=require('./baseServer');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/gift',
    contentType:'application/json'
};
/**
 * 礼品列表查询（分页）/api/gift/pagelist?userUnionId=oDOgS0iC07fC-puKxL-3lmbVcpoQ&pageNo=1&pageSize=10
 * @param req
 * @param res
 * @param next
 */
function pagelist(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let userUnionId=req.body.userUnionId;
    let pageNo=req.body.pageNo;
    let pageSize=req.body.pageSize;
    let status=req.body.status;
    let dateFilter=req.body.dateFilter;
    opt.v = req.headers['v'];
    opt.url+=`/pagelist?userUnionId=${userUnionId}&status=${status}&dateFilter=${dateFilter}&pageNo=${pageNo}&pageSize=${pageSize}`;
    //opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error("get pagelist error-----",opt.url);
            res.send(error);
        }
        else {
            loger.info("gen pagelist====>",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}
/**
 * 获取礼品详情  api/gift/1
 * @param req
 * @param res
 * @param next
 */
function giftdetail(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let id=req.body.id;
    let pageNo=req.body.pageNo;
    let pageSize=req.body.pageSize;
    opt.v = req.headers['v'];
    opt.url+=`/${id}`;
    //opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error("get detail error-----",opt.url);
            res.send(error);
        }
        else {
            loger.info("gen detail====>",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}
module.exports = {
    pagelist: pagelist,
    giftdetail:giftdetail
}
