// 云函数入口文件
const cloud = require('wx-server-sdk')

var AipFaceClient = require("baidu-aip-sdk").face;

// 设置APPID/AK/SK
var APP_ID = "26538161";
var API_KEY = "PDhvvfWIGQsXrCVZbTTZ53yj";
var SECRET_KEY = "IbqIDqVphOHnng025384OdT33EBCQ2bC";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);


cloud.init()

// 云函数入口函数

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

    // const info = await client.advancedGeneral(image,{baike_num:5});
    var options = {};
    options["face_field"] = "age,beauty";
    options["max_face_num"] = "2";
    options["face_type"] = "LIVE";
    options["liveness_control"] = "LOW";
    const info = await client.detect(image, "BASE64",options);
    return {
       info
    }
}