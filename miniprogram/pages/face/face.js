// index.js
// const app = getApp()
const { envList } = require('../../envList.js');

Page({
    data:{
        
    },
    doUpLoad:function (e) {
        let {target} = e;
        let {dataset} = target;
        let {index} = dataset;
        let sourceType = "camera";
        if(index==0){
            sourceType="camera";
        }
        else if(index==1){
            sourceType="album";
        }
        wx.chooseImage({
            // camera: camera,
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: [sourceType],
            success: function (res) {
                console.log(res);
                let filePath = res.tempFilePaths[0];
                let kind = "face";
                const cloudPath = `image-face/${Date.now()}${filePath.match(/\.[^.]+?$/)}`
                console.log(cloudPath);
                wx.cloud.uploadFile({
                    // 指定上传到的云路径
                    cloudPath,
                    // 指定要上传的文件的小程序临时文件路径
                    filePath,
                    // 成功回调
                    success: res => {
                      console.log('上传成功', res)
                      wx.navigateTo({
                        url: `../face-detail/face-detail?pic=${filePath}&&fileID=${res.fileID}&&kind=${kind}`,
                      })
                    },
                })
            }
        })
    }

});
