// pages/index/index.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        list:[
            {
                id:0,
                name:"植物识别",
                page:"plant",
                img:"https://s2.loli.net/2022/06/29/wzZ4afyRrhJBgLk.png"
            },
            {
                id:1,
                name:"物体识别",
                page:"general",
                img:"photo-o"
            },
            {
                id:2,
                name:"颜值打分",
                page:"face",
                img:"https://s2.loli.net/2022/06/29/DSYOgNxzAnjsRMi.png"
            },
            {
                id:3,
                name:"人脸动漫化",
                page:"anima",
                img:"https://s2.loli.net/2022/06/29/FUl25t8sZ4ELayz.png"
            },


        ]
    },
    onDis(event){
        let pageID = event.target.dataset.index;
        // console.log(event);
        // console.log(pageID);
        wx.navigateTo({
            url: `../${pageID}/${pageID}`,
        })
    },
    onChange(event) {
    // event.detail 的值为当前选中项的索引
        this.setData({ active: event.detail });
    },
    gouserInfo(e){
        wx.getUserInfo({
          lang: "zh_CN",
          success: function(res) {
            app.globalData.userInfo = res.userInfo;
            
            console.log(app.globalData.userInfo,"index") 
            console.log(app);
          }
        })
        

        wx.navigateTo({
          url: `../userInfo/userInfo`,
        })
    },
    onUserinfo(e){

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})