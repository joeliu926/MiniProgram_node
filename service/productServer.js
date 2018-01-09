var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var loger=require("./../utils/loger");
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/product/',
    contentType:'application/json'
};

function list(req, res, next){


    defualtCfg.method="get";
    var opt=appUtil.extend({},defualtCfg);
    let all=req.body.all?"&all="+req.body.all:"";
    let unionId=req.body.unionId;
    opt.url+=`list?unionid=${unionId}${all}`;
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            res.send(error);
        }
        else {
            //console.log(JSON.parse(body));
            res.send(JSON.parse(body));
        }
    }
    httpClient(opt);

    //res.send({'aaa':'aaaa'});

}
function add(req,res,next){
    res.send({'usertimes':'this is user times aaaaa'});
}


module.exports = {
    list: list,
    add:add
}