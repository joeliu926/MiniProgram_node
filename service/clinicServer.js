/**
 * Created by admin on 2018-1-8.
 */
var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var loger=require("./../utils/loger");
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/clinic',
    contentType:'application/json'
};
/**
 * 根据网络咨询师unionID 获取诊所信息 /getClinicByUnionId/{unionId}
 * @param req
 * @param res
 * @param next
 */
function detail(req, res, next){

    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let unionId=req.body.unionId; //咨询师unionid
    let customerId=req.body.customerId;
    opt.url+=`/getClinicByUnionId/${unionId}`;
    // opt.url+="list?unionid="+req.body.unionId+"&caseIds="+req.body.caseIds+"&productCode="+req.body.productCode;
    opt.data=req.body;
    opt.v = req.headers['v'];
    console.log(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error(error);
            res.send(error);
        }
        else {
            loger.info("get clinic detail====>",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);

}

module.exports = {
    detail: detail,
}
