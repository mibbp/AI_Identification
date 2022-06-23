// pages/detail/detail.js
const db = wx.cloud.database();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrl:"",
        info:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let { pic, fileID } = options;
        this.setData({
            imgUrl:pic
        })
        //调用云函数
        wx.cloud.callFunction({
            name:"baiduAI",
            data:{
                fileID:fileID
            },
            success:res=>{
                console.log(res.result.info.result,"baidu")
                this.setData({
                    info:res.result.info.result
                })
            },
        })

    },

    

})