var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/product/',
    contentType:'application/json'
};

function list(req, res, next){


    defualtCfg.method="get";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+="list?unionid="+req.body.unionId;
    console.log(opt.url);
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