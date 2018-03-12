var CONSTANT=require('../config/constant');
var httpClient=require('../utils/httpClient');
var appUtil=require('../utils/appUtils');
var loger=require("./../utils/loger");
var defualtCfg={
    url:CONSTANT.remoteHost+":"+CONSTANT.remotePort+'/api/caseHeader/',
    contentType:'application/json'
};

function list(req, res, next){


    defualtCfg.method="get";
    var opt=appUtil.extend({},defualtCfg);
    //opt.url+="list/"+req.body.unionId;
    opt.url+="list?unionid="+req.body.unionId+"&caseIds="+req.body.caseIds+"&productCodes="+req.body.productCodes;
    opt.v = req.headers['v'];
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
/**
 * 多案例提交
 * @param req
 * @param res
 * @param next
 */
function morelist(req, res, next){
    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
     opt.data=req.body;
    //opt.url+="list/"+req.body.unionId;"&caseIds="+req.body.caseIds+
    opt.url+="listByProducts";
    opt.v = req.headers['v'];
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
/**
 * 多案例获取，带分页
 * @param req
 * @param res
 * @param next
 */
function listpagebyproducts(req, res, next){

    defualtCfg.method="POST";
    var opt=appUtil.extend({},defualtCfg);
    opt.data=req.body;
    let unionid=req.body.unionid;
    let pageNo=req.body.pageNo;
    let pageSize=req.body.pageSize;
    let productCodes=req.body.productCodes;
    //listPageByProducts?unionid=oDOgS0kCV5its31fROZtbdqcpMAE&pageNo=1&pageSize=1
    opt.url+=`listPageByProducts`;//?unionid=${unionid}&productCodes=${productCodes}&pageNo=${pageNo}&pageSize=${pageSize}`;
    opt.v = req.headers['v'];
    loger.info(opt.url);
    opt.callBack=function(error, response, body){
        if(error)
        {
            loger.error("listPageByProducts----------",error);
            res.send(error);
        }
        else {
            loger.info("listPageByProducts----------",body);
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
    opt.v = req.headers['v'];
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
    morelist:morelist,
    listpagebyproducts:listpagebyproducts
}