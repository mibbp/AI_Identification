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
        // console.log(options);
        let kind = options.kind;
        console.log(kind);
        wx.cloud.callFunction({
            name:"animaAI",
            data:{
                fileID:fileID
            },
            success:res=>{
                console.log("111")
                // console.log(res.result.info.image,"anima")
                var resimg = `data:image/jpg;base64,`+res.result.info.image
                // console.log(resimg);
                
                let code = res.result.info.image; // 后台返回的base64图片，没有带data:image/png;base64,的前缀。
                let src = `data:image/png;base64,${code}`;
                const fsm = wx.getFileSystemManager();  // 获取文件管理器
                code = code .replace(/\ +/g, ""); //去掉空格方法
                code = code .replace(/[\r\n]/g, "");

                const buffer = wx.base64ToArrayBuffer(code );  //  将 base64 字符串转成 ArrayBuffer 对象
                const fileName = wx.env.USER_DATA_PATH + '/share_img.png';  // 文件系统中的用户目录路径 （本地路径）
                /**
                * @param fileName: 文件路径
                * @param buffer : 要写入的文本或二进制数据
                * @param binary: 指定写入文件的字符编码
                */
                fsm.writeFileSync(fileName, buffer, 'binary');  // 写入文件， 同步方法

                console.log(fileName);  // 写入成功后就可以访问到该图片路径了




                this.setData({
                    // info:res.result.info.result
                    info:fileName
                })
                console.log(this.data.info)
            },
        })
   
        

    },

    

})