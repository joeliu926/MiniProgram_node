var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var loger=require("./../utils/loger");
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/customer',
    contentType:'application/json'
};
/**
 * 添加客户
 * @param req
 * @param res
 * @param next
 */
function addcustomer(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+="/addCustomer";
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
 * 获取客户信息 api/customer/customerDetail/{customerId}
 * @param req
 * @param res
 * @param next
 */
function getcustomer(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+="/"+req.body.customerId;
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
 * 更新客户 api/customer/update
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+="/update";
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
 *  根据咨询师unionid和客户unionid 查询客户信息接口    GET /api/customer?consultantUnionid={consultantUnionid}&unionid={unionid}
 * @param req
 * @param res
 * @param next
 */
function getcustomerbyunid(req, res, next){
    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let consultantUnionid=req.body.consultantUnionid;
    let unionid=req.body.unionid;
    opt.url+=`?consultantUnionid=${consultantUnionid}&unionid=${unionid}`;
    //opt.data=req.body;
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

    //res.send({'aaa':'aaaa'});
}
module.exports = {
    addcustomer: addcustomer,
    getcustomer:getcustomer,
    update:update,
    getcustomerbyunid:getcustomerbyunid
}