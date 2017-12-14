var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/test/',
    contentType:'application/json'
};
/**
 * 获取线索详情 /api/clue/get
 * @param req
 * @param res
 * @param next
 */
function test(req, res, next){

    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    let sessionId=req.body.sessionId;
    let customerId=req.body.customerId;
    //opt.url+=`get?sessionId=${sessionId}&customerId=${customerId}`;//182.254.88.157
     //opt.url="https://api.weixin.qq.com/sns/jscode2session?appid=wx0d601009b9b6ac71&secret=c420f0a078623428e699ab5e2c3155e0&js_code=001ArS3z0xz49g152P4z0Z0R3z0ArS3Q&grant_type=authorization_code";
    opt.url="https://api.weixin.qq.com/sns/jscode2session?appid=wx0d601009b9b6ac71&secret=c420f0a078623428e699ab5e2c3155e0&js_code=001ArS3z0xz49g152P4z0Z0R3z0ArS3Q&grant_type=authorization_code";
    // opt.data=req.body;
    console.log("test url=======>",opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            console.log("get test ====>",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);

}

module.exports = {
    test: test
}