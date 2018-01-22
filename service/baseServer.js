/**
 * Created by admin on 2018-1-16.
 */

var CONSTANT=require('../config/constant');
var wxaAPI=require('../config/wxaAPI');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var path=require('path');
var fileUtils=require('../utils/fileUtils');
var loger=require('../utils/loger');
var defualtCfg={
    url:"",//CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/users',
    contentType:'application/json'
};
let accessTokenPath=path.join(__dirname, '../public/access_token.json');
function updateToken(callback){
    let oToken=fileUtils.readJSON(accessTokenPath);
    let currentTime=new Date().getTime();
    var timeDiff=currentTime-(oToken.update_time||0);
    if(timeDiff>7000000){
        loger.info("update token---timeDiff--************************---",timeDiff);
        defualtCfg.method="GET";
        var opt=appUtil.extend({},defualtCfg);
        opt.url=wxaAPI.wxa.getAccessToken.url;
        //opt.data=req.body;
        opt.callBack=function(error, response, body){
            if(error)
            {
                loger.error(error);
                callback(error);
            }
            else {
                loger.info(JSON.parse(body));
                let result=JSON.parse(body);
                result.update_time=currentTime;
                fileUtils.writeJSON(accessTokenPath,JSON.stringify(result));
                callback(result.access_token);
            }
        };
        httpClient(opt);
    }else{
        callback(oToken.access_token);
    };

    //res.send({'aaa':'aaaa'});
}
module.exports = {
    updateToken:updateToken
}

