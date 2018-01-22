/**
 * Created by JoeLiu on 2018-01-17.
 */
var httpClient=require('../utils/httpClient');
var webshot = require('webshot');
var fs   = require('fs');
var path = require('path');
/*
* 生成海报
* */
function createposter(req, res, next){

    var fileName = `./../public/template/${req.body.tmpid}.html`;
    var filePath=path.join(__dirname,fileName);
    var fileData= fs.readFileSync(filePath,'utf-8');
    fileData = fileData + "";

    let sendObj ={
        code:0,
        data:{
            url:'',
            id:''
        }
    };
    let content = req.body.content;
    for(cons in content){
        var regs= new RegExp("\{\{"+cons+"\}\}", "g");
        fileData = fileData.replace(regs,function (word){
            return content[cons];
        });
    }

    var dateTime =new Date().getTime(); //Date.parse(new Date() );
    //截图参数
    var options = {
        screenSize: {
            width: 750
            , height: 'all'
        }
        , shotSize: {
            width: 750
            , height: 'all'
        }
        , userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
        + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g',
        siteType:'html'
    };

    let cpath ='/posterimg/'+dateTime+'.png';
    webshot(fileData, './public'+cpath, options, function(err) {
        if(err){
            console.log('err',err);
            sendObj.code=-1;
            sendObj.data={
                msg:err.toString()
            }
        }else{
            sendObj.data= {
                url:cpath,
                id:dateTime
            }
        }
        res.send(sendObj);
    });
}
/*
 * 删除海报
 * */
function deleteposter(req, res, next){
     fs.unlink(`./public/posterimg/${req.body.imgid}.png`, function (err) {
            let sendObj ={
                code:0,
                data:{
                    msg:err
                }
            };
            if (err){
                sendObj.code=-1;
                sendObj.data.msg=err;
            }else{
                sendObj.data.msg="删除成功";
            }
         res.send(sendObj);
     })
}


/*
 * 获取用户信息开关
 * */
function getuserid(req, res, next){
    res.send({key:1,data:{
        avatarUrl
            :
            "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqkeBU8Uo4VdGia1RlXYVOQUzXFPibQmrcWJiaDKWvAwWACU5B9lnGVZiah8t6pkzQzG4ju5gaYEv465w/0",
        city
            :
            "Chaoyang",
        country
            :
            "China",
        gender
            :
            1,
        language
            :
            "zh_CN",
        nickName
            :
            "刘朝1",
        openId
            :
            "oPyH10N6wKmDzdBG1HnuJx5fMG9M",
        province
            :
            "Beijing",
        unionId
            :
            "oDOgS0lr4Ofex8ebO6CAGFAQrX9o"
    }})
}



module.exports = {
    createposter: createposter,
    deleteposter:deleteposter,
    getuserid:getuserid
}