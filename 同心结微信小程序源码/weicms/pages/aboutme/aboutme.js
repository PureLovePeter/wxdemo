//aboutme.js
//获取应用实例
var app = getApp()
Page({
  data: {
    headImage: '../../images/chatBoy.png',
    nickname: "",
    sex:"",
    bgImage:'../../images/bg.jpg'
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
      var sexNormarl = "男"
      if (userInfo.gender == 0) {
        sexNormarl = "女"
      }
      that.setData({
        userInfo:userInfo,
        headImage: userInfo.avatarUrl,
        nickname:"姓名: "+ userInfo.nickName,
        sex: "性别:" + sexNormarl,
      })
    })
  }
})