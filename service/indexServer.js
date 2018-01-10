var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/clue/',
    contentType:'application/json'
};

function cluelist(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+=`pageList?userUnionId=${req.body.userUnionId}&group=${req.body.group}&searchName=${encodeURI(req.body.searchName)}&pageNo=${req.body.pageNo}&pageSize=${req.body.pageSize}`;
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}

/**
 * 获取线索详情 /api/clue/get
 * @param req
 * @param res
 * @param next
 */
function cluedetail(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+=`clueDetail/${req.body.id}`;
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}


function sharelist(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    opt.url=CONSTANT.remoteHost+":"+CONSTANT.remotePort+`/api/consultation?consultantUnionid=${req.body.consultantUnionid}&pageNo=${req.body.pageNo}&pageSize=${req.body.pageSize}`;
    console.log(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}

function clueremark(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url=CONSTANT.remoteHost+":"+CONSTANT.remotePort+`/api/clueRemarks/create`;
    opt.data=req.body;
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);

}
function clueclose(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+=`closeClue/${req.body.id}`;
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);

}


function linkmanupdate(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url=CONSTANT.remoteHost+":"+CONSTANT.remotePort+`/api/customer/update`;
    opt.data=req.body;
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);

}

function linkman(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    opt.url=CONSTANT.remoteHost+":"+CONSTANT.remotePort+`/api/customer/${req.body.id}`;
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            console.log("get clue detail====>",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);

}


module.exports = {
    cluelist: cluelist,
    cluedetail: cluedetail,
    sharelist: sharelist,
    clueremark: clueremark,
    clueclose: clueclose,
    linkmanupdate:linkmanupdate,
    linkman:linkman,
}