// pages/index/index.js
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
                page:"plant"
            },
            {
                id:1,
                name:"物体识别"
            },
            {
                id:.2,
                name:"人脸识别"
            },
            {
                id:3,
                name:"红酒识别"
            },
            {
                id:4,
                name:"二维码识别"
            },
            {
                id:5,
                name:"车辆识别"
            }

        ]
    },
    onDis(event){
        let pageID = event.target.dataset.index;
        console.log(event);
        console.log(pageID);
        wx.navigateTo({
            url: `../${pageID}/${pageID}`,
        })
    },
    onChange(event) {
    // event.detail 的值为当前选中项的索引
        this.setData({ active: event.detail });
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