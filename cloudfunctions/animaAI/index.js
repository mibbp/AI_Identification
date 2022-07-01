// 云函数入口文件
const cloud = require('wx-server-sdk')

var AipImageProcessClient = require("baidu-aip-sdk").imageprocess;

// 设置APPID/AK/SK
var APP_ID = "26580082";
var API_KEY = "iKMS1YaOwSyeX9STBPEt0QkO";
var SECRET_KEY = "jWArQBEIxFCH3P48TpCGtioW1boiAlnP";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipImageProcessClient(APP_ID, API_KEY, SECRET_KEY);

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const {fileID} = event;
    //通过fileID获取照片
    const res = await cloud.downloadFile({
        fileID: fileID
    })

    const buffer = res.fileContent;
    let image = buffer.toString("base64");

    // const info = await client.plantDetect(image,{baike_num:5})
    // const info = await client.advancedGeneral(image,{baike_num:5});
    options = [{"type": "anime"}, {"mask_id": 3}]
    const info = await client.selfieAnime(image, options)
    return {
       info
    }
}