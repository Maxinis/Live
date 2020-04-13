/*
中国体育直播 unlock  by 军哥哥

app 下载地址:https://t.cn/Ai8I6z7p

QX:

[rewrite_local]👇

http:\/\/rest\.zhibo\.tv\/room\/get\-room\-info\-v430 url script-response-body zgtyzb.js


MITM = rest.zhibo.tv

*/

const path1 = "/room/get-room-info-v430";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.data.anchor["userHas"] = "1";	
}

$done({body: JSON.stringify(obj)});
