//index.js
var wilddog = require('../../wilddog-weapp-all')
var config = {
  syncURL: 'https://xm7.wilddogio.com',
  authDomain: 'xm7.wilddog.com'
}
wilddog.initializeApp(config);
var ref = wilddog.sync().ref("/xiamiao/activity");
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    activityList:[],
    act_type: "类型",
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    console.log("获取数据");
    ref.on('value', function (snapshot) {
      var val = snapshot.val();
      if (val !== null) {
        this.setData({
          activityList: val
        })
      } else {
        console.log("未获得数据");
      }
      console.log(this.data.activityList); //后执行，有数据
    }, this)

  },
  toDetailPage:function(e){
    console.log("todetailpage");
    console.log(e.currentTarget.id);
  
    var bid = e.currentTarget.id;
    var app = getApp();
    app.activityCurrentId = bid;
    
    wx.navigateTo({
      url:'../../pages/activity/activity'
    });
  }
})

