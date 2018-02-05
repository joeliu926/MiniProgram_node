var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var loger=require("./../utils/loger");
var wxaAPI=require('../config/wxaAPI');
var baseServer=require('./baseServer');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/activityrecord',
    contentType:'application/json'
};
/**
 * 保存领取记录 POST /api/activityrecord/create
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+=`/create`;
    opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error("get create error-----",opt.url);
            res.send(error);
        }
        else {
            //loger.info("create====>",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}
/**
 * 领取总数  GET /api/activityrecord/getNum
 * @param req
 * @param res
 * @param next
 */
function getnum(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let id=req.body.id;
    let sessionId=req.body.sessionId;
    let consultUnId=req.body.consultUnId;
    opt.url+=`/getNum?sessionId=${sessionId}&consultUnId=${consultUnId}`;
    //opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error("get getnum error-----",opt.url);
            res.send(error);
        }
        else {
            loger.info("gen getnum====>",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}
/**
 * 获取列表 type 0未处理 1已处理  GET /api/activityrecord/pagelist
 * @param req
 * @param res
 * @param next
 */
function pagelist(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let id=req.body.id;
    let consultUnId=req.body.consultUnId;
    let type=req.body.type;
    let sessionId=req.body.sessionId;
    opt.url+=`/pagelist?sessionId=${sessionId}&consultUnId=${consultUnId}&type=${type}`;
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
 * 详情  get /api/activityrecord/getDetail/{sessionId}/{customerUnId}/{consultUnId}
 * @param req
 * @param res
 * @param next
 */
function getdetail(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let id=req.body.id;
    let customerUnId=req.body.customerUnId;
    let consultUnId=req.body.consultUnId;
    let sessionId=req.body.sessionId;
    opt.url+=`/getDetail/${sessionId}/${customerUnId}/${consultUnId}`;
    //opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error("get getDetail error-----",opt.url);
            res.send(error);
        }
        else {
            loger.info("gen getDetail====>",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}
/**
 * 已经预约总数   get /api/activityrecord/getAlreadyAppointmentNum
 * @param req
 * @param res
 * @param next
 */
function getalreadyappointmentnum(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let consultUnId=req.body.consultUnId;
    let sessionId=req.body.sessionId;
    opt.url+=`/getAlreadyAppointmentNum?sessionId=${sessionId}&consultUnId=${consultUnId}`;
    //opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error("get getAlreadyAppointmentNum error-----",opt.url);
            res.send(error);
        }
        else {
            loger.info(" getAlreadyAppointmentNum====>",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}

/**
 * 气泡   get /api/activityrecord/getBubblePrompt
 * @param req
 * @param res
 * @param next
 */
function getbubbleprompt(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let consultUnId=req.body.consultUnId;
    let sessionId=req.body.sessionId;
    opt.url+=`/getBubblePrompt?sessionId=${sessionId}&consultUnId=${consultUnId}`;
    //opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error("get getBubblePrompt error-----",opt.url);
            res.send(error);
        }
        else {
            loger.info(" getBubblePrompt====>",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}



module.exports = {
    create: create,
    getnum:getnum,
    pagelist:pagelist,
    getdetail:getdetail,
    getalreadyappointmentnum:getalreadyappointmentnum,
    getbubbleprompt:getbubbleprompt
}
