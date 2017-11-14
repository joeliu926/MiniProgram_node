
var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var wxConfig=require('../config/wxaAPI');
var appUtil=require('../utils/appUtils');
var WXBizDataCrypt = require('../utils/WXBizDataCrypt');
var defualtCfg={
    url:"",
    contentType:'application/json'
};

function code(req, res, next){

    let code= req.body.code||"4444";
    //console.log(code);
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+=wxConfig.authorize.authorizecode.url.replace("_CODE_",code);
    //console.log(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
           // console.log(JSON.parse(body));
            res.send(JSON.parse(body));
        }
    }
    httpClient(opt);

}
function userinfo(req,res,next){
    console.log("---------------------");
    //console.log(req);
   //res.send({'userinfo':'userinfo-----'});
   var encryptedData= req.body.encryptedData;
    var sessionKey= req.body.sessionKey;
    var iv= req.body.iv;
   // console.log(req.body);
    var pc = new WXBizDataCrypt("wx0d601009b9b6ac71", sessionKey);

    var data = pc.decryptData(encryptedData , iv);

    //console.log('解密后 data: ', data);
    res.send({'userinfo':data});
   // res.send({'userinfo':"pppppppppppppppppppp"});


}


module.exports = {
    code: code,
    userinfo:userinfo
}