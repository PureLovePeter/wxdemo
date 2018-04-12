//index.js
"use strict";
//获取应用实例
var app = getApp();
Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495680334&di=ad57ef86cfffcbd9dd8aa03db4fbc470&imgtype=jpg&er=1&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1212%2Fgha%2Ffjtu%2520%2827%29.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495085732409&di=28056077a2649c2504546136ccaf3e31&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140915%2F0033033972960825_b.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=814141454,3470883049&fm=23&gp=0.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    //今日头条
    headerList: [],
    title:"无题",
    name:"李商隐",
    content: "相见时难别亦难，东风无力百花残。春蚕到死丝方尽，蜡炬成灰泪始干。晓镜但愁云鬓改，夜吟应觉月光寒。蓬山此去无多路，青鸟殷勤为探看。"
  },
  // 分享
  onShareAppMessage: function () {
    return {
      title: '同心缘与同心结',
      path: '/pages/lists/lists',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  bandSometing:function(){

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var self = this;
    self.setData({
      headerList: data.headerList,

    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onPullDownRefresh: function () {
    // 页面下拉刷新
  },
  chooseLocation:function(e){
   var that = this;
   this.setData({
     title: e.currentTarget.dataset.index.title,
     name: e.currentTarget.dataset.index.name,
     content: e.currentTarget.dataset.index.content,
   })
  }
})

var data = {
  headerList: [
    {
      id: "1",
      title: "无题",
      images: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495167434894&di=5f81788655ab72d7a21a8a30d6ae84ac&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D5df33d64d6a20cf44690fed746084b0c%2F0f5c600e0cf3d7ca7fba8595f41fbe096a63a907.jpg",
      name:"李商隐",
      content:"相见时难别亦难，东风无力百花残。春蚕到死丝方尽，蜡炬成灰泪始干。晓镜但愁云鬓改，夜吟应觉月光寒。蓬山此去无多路，青鸟殷勤为探看。"

    },
    {
      id: "2",
      title: "凤栖梧",
      images: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495167533635&di=c3ce5a305a64ee4c2535924acb70aa71&imgtype=0&src=http%3A%2F%2Fcourseware.eduwest.com%2Fcourseware%2F9036%2F0180%2F_notes%2Fsongci1.3.2.1.2.jpg",
      name: "柳永",
      content: "蜀锦地衣丝步障。屈曲回廊，静夜闲寻访。玉砌雕阑新月上。朱扉半掩人相望。旋暖熏炉温斗帐。玉树琼枝，迤逦相偎傍。酒力渐浓春思荡。鸳鸯绣被翻红浪。"
    },
    {
      id: "3",
      title: "蝶恋花",
      images: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495167644701&di=f25bb064df7e0bfdc943a283d734834d&imgtype=0&src=http%3A%2F%2Ffdfs.xmcdn.com%2Fgroup5%2FM0A%2F19%2F4E%2FwKgDtVSl1gXQXJp1AABiDo_jo7U528.jpg",
      name: "文廷式",
      content: "九十韶光如梦里。寸寸关河，寸寸销魂地。落日野田黄蝶起，古槐丛荻摇深翠。惆怅玉箫催别意。蕙些兰骚，未是伤心事。重叠泪痕缄锦字，人生只有情难死"
    }
  ]
};