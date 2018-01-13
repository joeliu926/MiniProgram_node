var wxConfig=require('./wx_config');
var config={
    authorize:{
        authorizecode:{
            method:"POST",
            url:"https://api.weixin.qq.com/sns/jscode2session?appid="+wxConfig.appid+"&secret="+wxConfig.appSecret+"&js_code=_CODE_&grant_type=authorization_code"
        },
        augetopenid:{
            method:"POST",
            url:"https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code"
        }
    },
    appid:wxConfig.appid

};
module.exports=config;