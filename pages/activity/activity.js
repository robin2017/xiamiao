var wilddog = require('../../wilddog-weapp-all')
var config = {
  syncURL: 'https://xm7.wilddogio.com',
  authDomain: 'xm7.wilddog.com'
}
wilddog.initializeApp(config);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur_id:null,
    activityInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
   this.data.cur_id=app.activityCurrentId ;
    console.log("func");
    console.log(this.data.cur_id);

    var ref = wilddog.sync().ref("/xiamiao/activity/" + this.data.cur_id);
    console.log("获取id数据");
    ref.on('value', function (snapshot) {
      var val = snapshot.val();
      if (val !== null) {
        this.setData({
          activityInfo: val
        })
      } else {
        console.log("未获得数据");
      }
      console.log(this.data.activityInfo); //后执行，有数据
    }, this)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})