
var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var wxConfig=require('../config/wxaAPI');
var appUtil=require('../utils/appUtils');
var WXBizDataCrypt = require('../utils/WXBizDataCrypt');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/wxacode/',
    contentType:'application/json'
};
/**
 * 获取微信请求code
 * @param req
 * @param res
 * @param next
 */
function code(req, res, next){

    let code= req.body.code||"4444";
    //console.log("小程序code------->",code);
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url=wxConfig.authorize.authorizecode.url.replace("_CODE_",code);
   // console.log("----------微信授权码---------》",opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            //console.log("授权失败-------------》");
            console.log("授权失败----error---------》",error);
            res.send(error);
        }
        else {
            console.log("code-------->",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    }
    httpClient(opt);
}
/**
 * 解析获取uni
 * @param req
 * @param res
 * @param next
 */
function userinfo(req,res,next){
   //res.send({'userinfo':'userinfo-----'});
   var encryptedData= req.body.encryptedData;
    var sessionKey= req.body.sessionKey;
    var iv= req.body.iv;
    //console.log("wxapi user info-11111------->",req.body);
    var pc = new WXBizDataCrypt("wx0d601009b9b6ac71", sessionKey);
//console.log("解密字符串--------》",pc);

    var data = pc.decryptData(encryptedData , iv);

    //console.log('解密后 data: ', data);
    res.send({'userinfo':data});
   // res.send({'userinfo':"pppppppppppppppppppp"});


}


module.exports = {
    code: code,
    userinfo:userinfo
}