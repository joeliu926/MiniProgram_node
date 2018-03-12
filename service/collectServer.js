var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/clue/',
    contentType:'application/json'
};


function customerlist(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    opt.v = req.headers['v'];
    opt.url=CONSTANT.remoteHost+":"+CONSTANT.remotePort+`/api/customer/customerPageList?userUnionid=${req.body.userUnionid}&fieldValue=${encodeURI(req.body.fieldValue)}&pageNo=${req.body.pageNo}&pageSize=${req.body.pageSize}`;
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

function createcustomer(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.v = req.headers['v'];
    opt.url=CONSTANT.remoteHost+":"+CONSTANT.remotePort+`/api/customer/newCustomer`;
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

function taglist(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    opt.v = req.headers['v'];
    opt.url=CONSTANT.remoteHost+":"+CONSTANT.remotePort+`/api/tagInfo/pagelist?userUnionId=${req.body.userUnionId}&name=${encodeURI(req.body.name)}&pageNo=${req.body.pageNo}&pageSize=${req.body.pageSize}`;
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


function createtag(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.v = req.headers['v'];
    opt.url=CONSTANT.remoteHost+":"+CONSTANT.remotePort+`/api/tagInfo`;
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

function list(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    opt.v = req.headers['v'];
    opt.url=CONSTANT.remoteHost+":"+CONSTANT.remotePort+`/api/mediaBase/pagelist?unionId=${req.body.unionId}&customerName=${encodeURI(req.body.customerName)}&pageNo=${req.body.pageNo}&pageSize=${req.body.pageSize}`;
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


function create(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.v = req.headers['v'];
    opt.url=CONSTANT.remoteHost+":"+CONSTANT.remotePort+`/api/mediaBase/create`;
    opt.data=JSON.parse(req.body.postobj);
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


function recreate(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.v = req.headers['v'];
    opt.url=CONSTANT.remoteHost+":"+CONSTANT.remotePort+`/api/mediaBase/resubMission`;
    opt.data=JSON.parse(req.body.postobj);
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



function detail(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    opt.v = req.headers['v'];
    opt.url=CONSTANT.remoteHost+":"+CONSTANT.remotePort+`/api/mediaBase/get/${req.body.id}`;
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

function getthubm(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    opt.v = req.headers['v'];
    opt.url=CONSTANT.remoteHost+":"+CONSTANT.remotePort+`/attachment/thumbnail?videoname=${req.body.videoname}`;
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

module.exports = {
    customerlist: customerlist,
    createcustomer: createcustomer,
    taglist: taglist,
    createtag: createtag,
    list: list,
    create:create,
    recreate:recreate,
    detail:detail,
    getthubm:getthubm
}