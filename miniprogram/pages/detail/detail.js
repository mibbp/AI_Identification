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
    zk:function(){
        var that = this 
        that.setData({
          is_zk: !that.data.is_zk
        })
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
        // console.log(options);
        let kind = options.kind;
        console.log(kind);
        if(kind=="plant"){
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
        }
        else if(kind=="general"){
            console.log("wxgeneral");
            console.log(res);
            wx.cloud.callFunction({
                name:"genereal-AI",
                data:{
                    fileID:fileID
                },
                success:res=>{
                    console.log(res);
                    console.log(res.result.info.result,"general")
                    this.setData({
                        info:res.result.info.result
                    })
                },
            })
        }
        

    },

    

})