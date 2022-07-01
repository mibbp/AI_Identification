//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 倒计时
    timer:1,
    background: [
      '../../images/01.jpg',
      '../../images/02.jpg',
      '../../images/03.jpg',
      '../../images/04.jpg',
      '../../images/05.jpg',
      '../../images/06.jpg',
      '../../images/07.jpg',
      '../../images/08.jpg'
    ],
    indicatorDots:true,
    autoplay:true,
    interVal:2000,
    duration:1200,
    motto: 'Hello World',
    shop:'寻找宝贝店铺',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
