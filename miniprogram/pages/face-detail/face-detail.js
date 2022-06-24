// pages/detail/detail.js
const db = wx.cloud.database();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrl:"",
        info:[],
        success:false
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
        console.log("face-detail");
        wx.cloud.callFunction({
            name:"face-AI",
            data:{
                fileID:fileID
            },
            success:res=>{
                console.log(res,"face");
                // console.log(res.result.info.result.face_list,"face")
                console.log(res.result.info.error_msg);
                if(res.result.info.error_msg!="SUCCESS"){
                    this.setData({
                        success:true
                    })
                }
                console.log(this.data.success)
                if(this.data.success==false){
                    this.setData({
                        info:res.result.info.result.face_list
                    })
                }
               
            },
        })
        
        

    },

    

})