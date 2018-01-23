var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var loger=require("./../utils/loger");
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
 * 获取单个用户咨询轨迹
 */
function singletrail(req, res, next){
    defualtCfg.method="get";
    var opt=appUtil.extend({},defualtCfg);
   // opt.url+="/"+req.body.unionId+"/"+req.body.consultingId;//?unionid="+req.body.unionId+"&mobile="+req.body.mobile+"2222";
    opt.url+="/track?unionId="+req.body.unionId+"&consultingId="+req.body.consultingId;
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
 * 获取咨询项目 ///api/consultation/product?sessionId=&customerUnionid=
 */
function consultitems(req, res, next){
    defualtCfg.method="get";
    var opt=appUtil.extend({},defualtCfg);
    //opt.url+="/"+req.body.id+"/product/"+req.body.customerUnionId;
    opt.url+="/product?sessionId="+req.body.id+"&customerUnionid="+req.body.customerUnionId;
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
    let id=req.body.id;
    let wxNickname = req.body.wxNickname;
    let fieldValue = req.body.fieldValue;
    let pageNo = req.body.pageNo;
    let pageSize= req.body.pageSize;
    opt.url+=`/${id}/customers/list?wxNickname=${wxNickname}&fieldValue=${fieldValue}&pageNo=${pageNo}&pageSize=${pageSize}`;
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
 * 根据会话id获取单词分享的案例id  GET /api/consultation/share-case?sessionId={sessionId}
 */
function sharecase(req, res, next){
    defualtCfg.method="get";
    var opt=appUtil.extend({},defualtCfg);
    let sessionId = req.body.sessionId;
    opt.url+=`/share-case?sessionId=${sessionId}`;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error(error);
            res.send(error);
        }
        else {
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}
/**
 * 咨询会话更新接口，可更新会话与案例的关系，会话与项目的关系。  PUT /api/consultation
 */
function consultantupdate(req, res, next){
    defualtCfg.method="PUT";
    var opt=appUtil.extend({},defualtCfg);
    let consultantUnionid = req.body.consultantUnionid;
    let consultingId = req.body.consultingId;
    let cases = req.body.cases;
    let products = req.body.products;
    opt.url+=``;
    opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error(error);
            res.send(error);
        }
        else {
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}

/**
 * 客户进入咨询师分享的小程序，对客户信息，线索信息进行维护。 POST /api/consultation/entry
 */
function entry(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+=`/entry`;
    opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error(error);
            res.send(error);
        }
        else {
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}


/**
 * 查询一次分享中，单个客户对某个案例的点赞状态 GET /api/consultation/share-case/like
 */
function getsharelike(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    let customerUnionId = req.body.customerUnionId;//customerUnionId:客户unionId
    let sessionId = req.body.sessionId;//sessionId:会话id
    let caseId = req.body.caseId; //caseId:案例id 支持多个案例
    opt.url+=`/share-case/like`;
    opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error(error);
            res.send(error);
        }
        else {
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}
/**
 *  客户进入咨询师分享的小程序，对某个案例进行点赞操作 或者进行 提交资料给医生操作  POST /api/consultation/share-case
 */
function handelsharecase(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    let customerUnionId = req.body.customerUnionId;//customerUnionId:客户unionId
    let sessionId = req.body.sessionId;//sessionId:会话id
    let caseId = req.body.caseId; //caseId:案例id 支持多个案例
    opt.url+=`/share-case`;
    opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error(error);
            res.send(error);
        }
        else {
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}
/**
 *  B端小程序 轨迹互动列表获取
 */
function interactlist(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let clueID=req.body.clueId;  //线索id  
    // let unionId = req.body.unionId;//unionId:客户unionId
    // let consultingId = req.body.consultingId;//consultingId:会话id
    opt.url+=`/getTrack?clueID=${clueID}`;//
    opt.data=req.body;
        loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error(error);
            res.send(error);
        }
        else {
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);

}
/**
 *  客户进入咨询师分享的小程序，查询在之前提交的正 反面照片。 GET /api/consultation/share-case/photo?sessionId={sessionId}&customerUnionid={customerUnionid}
 */

function getpostphoto(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let customerUnionid = req.body.customerUnionid;//customerUnionId:客户unionId
    let sessionId = req.body.sessionId;//sessionId:会话id
    opt.url+=`/share-case/photo?sessionId=${sessionId}&customerUnionid=${customerUnionid}`;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error(error);
            res.send(error);
        }
        else {
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}

/**
 * 通过会话id获取咨询师信息
 */
function getconsultinfo(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    //opt.url+="/"+req.body.id+"/product/"+req.body.customerUnionId;
    let sessionId=req.body.sessionId;
    opt.url+=`/getConsultInfo/${sessionId}`;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            loger.info(JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}


module.exports = {
    addconsultation: addconsultation,
    consultationlist:consultationlist,
    trail:trail,
    singletrail:singletrail,
    consultitems:consultitems,
    consultcustomers:consultcustomers,
    sharecase:sharecase,
    consultantupdate:consultantupdate,
    entry:entry,
    getsharelike:getsharelike,
    handelsharecase:handelsharecase,
    interactlist:interactlist,
    getpostphoto:getpostphoto,
    getconsultinfo:getconsultinfo
}