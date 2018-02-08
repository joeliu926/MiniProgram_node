var wxConfig=require('./wx_config');
var config={
    authorize:{
        authorizecode:{ //微信开发平台授权
            method:"POST",
            url:"https://api.weixin.qq.com/sns/jscode2session?appid="+wxConfig.appid+"&secret="+wxConfig.appSecret+"&js_code=_CODE_&grant_type=authorization_code"
        },
        augetopenid:{
            method:"POST",
            url:"https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code"
        }
    },
    appid:wxConfig.appid,
    wxSendMessage:{
        method:"POST",
        url:wxConfig.route+"/wx/msg/sendmessage" //发送微信客服消息
    },
    wxa:{
        getAccessToken:{
            method:"GET",
            url:`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wxConfig.appid}&secret=${wxConfig.appSecret}`//获取token
        },
        getQrCode:{
            method:"POST",
            url:`https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=_ACCESSTOKEN_`
        },
        sendTemplateMsg:{
            method:"POST",
            url:`https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=_ACCESSTOKEN_`
        },
        getProductToken:{
            method:"POST",
            url: `${wxConfig.route}/wxa/wx/accesstoken`
        }
    }

};
module.exports=config;