var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var loger=require("./../utils/loger");
var wxaAPI=require('../config/wxaAPI');
var baseServer=require('./baseServer');
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


    baseServer.updateToken(function (accessToken) {

        defualtCfg.method="POST";
        var opt=appUtil.extend({},defualtCfg);
        let sessionId=req.body.sessionId;
        let customerId=req.body.customerId;
        opt.v = req.headers['v'];
        opt.url+=`/genwxaqrcode`;
        let postData={
            wxaqrData:req.body,
            access_token:accessToken
        };
        opt.data=postData;
        loger.info(opt.url);
        opt.callBack=function(error, response, body){
            if(error)
            {
                loger.error("get qrcode error-----",opt.url);
                res.send(error);
            }
            else {
                loger.info("genwxaqrcode====>",JSON.parse(body));
                res.send(JSON.parse(body));
            }
        };
        httpClient(opt);

    });

}
/**
 * 小程序下发模板消息 sendTemplateMsg
 * @param req
 * @param res
 * @param next
 */
function sendtemplatemsg(req,res,next) {

    //res.send({"这是结果key":"你请求到了数据"});
    let postData=req.body;
    let customerId=req.body.customerId;
    baseServer.updateToken(function (accessToken) {

        defualtCfg.method="POST";
        var opt=appUtil.extend({},defualtCfg);
        let tempalteUrl=wxaAPI.wxa.sendTemplateMsg.url.replace("_ACCESSTOKEN_",accessToken);
        opt.url=tempalteUrl;
        opt.data=postData;
        loger.info(opt.url);
        opt.callBack=function(error, response, body){
            if(error)
            {
                loger.error("send template  error-----",opt.url);
                res.send(error);
            }
            else {
                //loger.info("send template====>",JSON.parse(body));
                res.send(JSON.parse(body));
            }
        };
        httpClient(opt);

    });
}

module.exports = {
    genwxaqrcode: genwxaqrcode,
    sendtemplatemsg:sendtemplatemsg
}
