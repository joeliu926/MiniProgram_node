/**
 * Created by JoeLiu on 2017-10-23.
 */
function registor(app) {

    //app.use(require('../security/authentication.js'));
    var requires = [
        {
            root:"/user",
            require: '../routes/users.js'
        },
        {
            root:"/unionid",
            require: '../routes/unionid.js'
        }
        ,
        {
            root:"/product",
            require: '../routes/product.js'
        }
        ,
        {
            root:"/case",
            require: '../routes/case.js'
        },
        {
            root:"/event",
            require: '../routes/event.js'
        },
        {
            root:"/customer",
            require: '../routes/customer.js'
        },
        {
            root:"/consult",
            require: '../routes/consult.js'
        },
        {
            root:"/appointment",
            require: '../routes/appointment.js'
        },
        {
            root:"/clue",
            require: '../routes/clue.js'
        },
        {
            root:"/test",
            require: '../routes/test.js'
        },
        {
            root:"/wx",
            require: '../routes/wx.js'
        },{
            root:"/clinic",
            require: '../routes/clinic.js'
        }
        ,{
            root:"/index",
            require: '../routes/index.js'
        }
        ,{
            root:"/api",
            require: '../routes/api.js'
        }
    ];

    requires.forEach(function(item, index) {
        app.use(item.root, require(item.require));
    });
}

module.exports = registor;