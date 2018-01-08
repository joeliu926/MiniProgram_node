var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/caseHeader/',
    contentType:'application/json'
};

function list(req, res, next){


    defualtCfg.method="get";
    var opt=appUtil.extend({},defualtCfg);
    //opt.url+="list/"+req.body.unionId;
    opt.url+="list?unionid="+req.body.unionId+"&caseIds="+req.body.caseIds+"&productCodes="+req.body.productCodes;

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
    };
    httpClient(opt);

    //res.send({'aaa':'aaaa'});

}

/*多案例*/
function morelist(req, res, next){


    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
     opt.data=req.body;
    //opt.url+="list/"+req.body.unionId;"&caseIds="+req.body.caseIds+
    opt.url+="listByProducts";

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
    };
    httpClient(opt);

    //res.send({'aaa':'aaaa'});

}


function detail(req,res,next){
    defualtCfg.method="get";
    var opt=appUtil.extend({},defualtCfg);
    opt.url+=req.body.did;

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
    };
    httpClient(opt);
   // res.send({'usertimes':'this is user times aaaaa'});
}
module.exports = {
    list: list,
    detail:detail,
    morelist:morelist
}