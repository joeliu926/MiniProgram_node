var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var loger=require("./../utils/loger");
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/wxaqr',
    contentType:'application/json'
};
/**
 * 根据用户分享案例生成小程序二维码 POST /api/wxaqr/genwxaqrcode
 * @param req
 * @param res
 * @param next
 */
function genwxaqrcode(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    let sessionId=req.body.sessionId;
    let customerId=req.body.customerId;
    opt.url+=`/genwxaqrcode`;
    // opt.url+="list?unionid="+req.body.unionId+"&caseIds="+req.body.caseIds+"&productCode="+req.body.productCode;
    opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error("get qrcode error-----",opt.url);
            res.send(error);
        }
        else {
            loger.info("get clue detail====>",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);

}

module.exports = {
    genwxaqrcode: genwxaqrcode
}
