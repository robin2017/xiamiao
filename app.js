//app.js
var wilddog = require('./wilddog-weapp-all')

App({

  onLaunch: function () {
  var that = this
  //野狗配置
  var config = {
      syncURL: 'https://xm7.wilddogio.com',
      authDomain: 'xm7.wilddog.com'
    }


    wilddog.initializeApp(config)
    wilddog.auth().signInWeapp().then(function(user){
    console.log("我要打印user");
      console.log(that)
      // console.log(user);
      that.my_userInfo = user;


      // console.log("怎么打印不出来");

      // console.log(that)


    }).catch(function(err){
   
    })
    this.ref = wilddog.sync().ref("/xiamiao/activity")





  //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  //将野狗数据库对象绑定到app.ref上
    getDataList: function() {
    return this.ref
  },

 
 //从全局变量中获取用户登录信息
  getMyUser:function(){
    return this.my_userInfo
  },


  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {

              that.globalData.userInfo = res.userInfo

              //  console.log('getUserInfo',that.globalData.userInfo)

              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }




})