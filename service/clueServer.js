var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/clue/',
    contentType:'application/json'
};
/**
 * 获取线索详情 /api/clue/get
 * @param req
 * @param res
 * @param next
 */
function detail(req, res, next){

    defualtCfg.method="GET";
    var opt=appUtil.extend({},defualtCfg);
    let sessionId=req.body.sessionId;
    let customerId=req.body.customerId;
    opt.url+=`get?sessionId=${sessionId}&customerId=${customerId}`;
    // opt.url+="list?unionid="+req.body.unionId+"&caseIds="+req.body.caseIds+"&productCode="+req.body.productCode;
    opt.data=req.body;
    console.log(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            console.log("get clue detail====>",JSON.parse(body));
            res.send(JSON.parse(body));
        }
    };
    httpClient(opt);

}

module.exports = {
    detail: detail,
}