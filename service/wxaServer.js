var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var loger=require("./../utils/loger");
var wxaAPI=require('../config/wxaAPI');
var baseServer=require('./baseServer');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/wxa/templatemsg',
    contentType:'application/json'
};
/**
 * 发送微信小程序模版消息需求提前获取formid  /wxa/templatemsg/formid
 * @param req
 * @param res
 * @param next
 */
function formid(req, res, next){
        defualtCfg.method="POST";
        var opt=appUtil.extend({},defualtCfg);
        opt.url+=`/formid`;
        opt.data=req.body;
        loger.info(opt.url);
        opt.callBack=function(error, response, body){
            if(error)
            {
                loger.error("get formid error-----",opt.url);
                res.send(error);
            }
            else {
                loger.info("gen formid====>",JSON.parse(body));
                res.send(JSON.parse(body));
            }
        };
        httpClient(opt);
}
module.exports = {
    formid: formid
}
