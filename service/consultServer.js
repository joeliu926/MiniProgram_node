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
    opt.v = req.headers['v'];
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
    opt.v = req.headers['v'];
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
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    opt.v = req.headers['v'];
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
    opt.v = req.headers['v'];
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
    opt.v = req.headers['v'];
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
    opt.v = req.headers['v'];
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
    opt.v = req.headers['v'];
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
    opt.v = req.headers['v'];
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
    opt.v = req.headers['v'];
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
    opt.v = req.headers['v'];
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
    opt.v = req.headers['v'];
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
 *  用户点击喜欢不喜欢  0 不喜欢  1 喜欢
 */
function handlelike(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    let customerUnionId = req.body.customerUnionId;//customerUnionId:客户unionId
    let sessionId = req.body.sessionId;//sessionId:会话id
    let caseId = req.body.caseId; //caseId:案例id 支持多个案例
    opt.v = req.headers['v'];
    opt.url+=`/share-caseV3`;
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
 *  获取点击喜欢不喜欢  0 不喜欢  1 喜欢
 */
function gethandlelike(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    let customerUnionId = req.body.customerUnionId;//customerUnionId:客户unionId
    let sessionId = req.body.sessionId;//sessionId:会话id
    let caseId = req.body.caseId; //caseId:案例id 支持多个案例
    opt.v = req.headers['v'];
    opt.url+=`/share-case/likeV3`;
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
    opt.v = req.headers['v'];
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
    opt.v = req.headers['v'];
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
    opt.v = req.headers['v'];
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

/**
 * 获取活动目标人群接口  api/consultation/getCluesByConsultId?consultUnionId=oDOgS0qpceu1s3rz3awJ1MAZ7VA8&types=1
 */
function getcluesbyconsultid(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let consultUnionId=req.body.consultUnionId;
    let types=req.body.types;
    opt.v = req.headers['v'];
    opt.url+=`/getCluesByConsultId?consultUnionId=${consultUnionId}&types=${types}`;
    //opt.data=req.body;
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

/**
 * 保存活动目标人群接口  api/consultation/addConsultRecord?consultUnionId=oDOgS0qpceu1s3rz3awJ1MAZ7VA8&types=1
 */
function addconsultrecord(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let consultUnionId=req.body.consultUnionId;
    let types=req.body.types;
    let sessionId=req.body.sessionId;
    let giftId=req.body.giftId;
    opt.v = req.headers['v'];
    opt.url+=`/addConsultRecord?consultUnionId=${consultUnionId}&types=${types}&sessionId=${sessionId}&giftId=${giftId}`;
    //opt.data=req.body;
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

/**
 * 获取收礼客户   GET /api/consultation/getRecordNum
 * @param req
 * @param res
 * @param next
 */
function getrecordnum(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let consultUnId=req.body.consultUnId;
    let sessionId=req.body.sessionId;
    opt.v = req.headers['v'];
    opt.url+=`/getRecordNum?sessionId=${sessionId}&consultUnId=${consultUnId}`;
    //opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error("get getRecordNum error-----",opt.url);
            res.send(error);
        }
        else {
            loger.info(" getRecordNum====>",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
}


/**
 * 获取m---n   GET /api/consultation/getPrompt
 * @param req
 * @param res
 * @param next
 */
function getprompt(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let consultUnId=req.body.consultUnId;
    let sessionId=req.body.sessionId;
    opt.v = req.headers['v'];
    opt.url+=`/getPrompt?sessionId=${sessionId}&consultUnId=${consultUnId}`;
    //opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error("get getPrompt error-----",opt.url);
            res.send(error);
        }
        else {
            loger.info(" getPrompt====>",JSON.parse(body));
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
    handlelike:handlelike,
    gethandlelike:gethandlelike,
    interactlist:interactlist,
    getpostphoto:getpostphoto,
    getconsultinfo:getconsultinfo,
    getcluesbyconsultid:getcluesbyconsultid,
    addconsultrecord:addconsultrecord,
    getrecordnum:getrecordnum,
    getprompt:getprompt
}