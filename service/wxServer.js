var CONSTANT=require('../config/constant');
var wxaAPI=require('../config/wxaAPI');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var path=require("path");
var fs=require("fs");
var request = require('request');
var loger=require('../utils/loger');
var baseServer=require('./baseServer');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/users',
    contentType:'application/json'
};
/**
 * 发送客服消息
 * @param req
 * @param res
 * @param next
 */
function sendmessage(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url=wxaAPI.wxSendMessage.url;
    opt.data=req.body;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error(error);
            res.send(error);
        }
        else {
            loger.info(JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);
    //res.send({'aaa':'aaaa'});
}
/**
 * 获取二维码
 * @param req
 * @param res
 * @param next
 */
function getQrCode(req,res,next){
    //baseServer.updateToken(function (accessToken) {
    let accessToken="6_7I8S71bjw1N5f4LqHdAl_BiF8TWP6_NOSU7FQqOhaqtMb1X4eNeLPpKRQrLQgfl6L0_dJawv-LW10EMVesoq1Dx_lO7TtAvcbb0UQzdx4rL-V3F_9wm9iKS4GUQ1FMU7NEqNd1NuF5z955ZoXBHjAFAKOU";
        defualtCfg.method="POST";
        var opt=appUtil.extend({},defualtCfg);
        opt.url=wxaAPI.wxa.getQrCode.url.replace("_ACCESSTOKEN_",accessToken);
        opt.v = req.headers['v'];
        opt.data=req.body;
        opt.data={
            "path": "pages/test/test",
            "width": 60,
            "scene":123
        };
        loger.info("this is url-------->",opt.url);
        let filePath=path.join(__dirname, '../public/images/'+(new Date().getTime())+'.png');
       /* request({
            method: 'POST',
            url: opt.url,
            body:JSON.stringify(opt.data)
        }).pipe(fs.createWriteStream(filePath));*/
      let writeStream= fs.createWriteStream(filePath,{autoClose:true});
        request({
            method: 'POST',
            url: opt.url,
            body:JSON.stringify(opt.data)
        }).pipe(writeStream);
       loger.info("filePath----->",filePath);

        writeStream.on("finish", function() {
            var bitmap = fs.readFileSync(filePath);
            let baseStr=new Buffer(bitmap).toString('base64');
            res.send({"code":baseStr});
            console.log("ok");
            writeStream.end();
        });
    //});
}
/**
 * 获取accesstoken
 * @param req
 * @param res
 * @param next
 */
function  accesstoken(req,res,next) {
    baseServer.updateToken(function (accessToken) {

        res.send({"access_token":accessToken});
    });
}
module.exports = {
    sendmessage: sendmessage,
    getQrCode:getQrCode,
    accesstoken:accesstoken
}
