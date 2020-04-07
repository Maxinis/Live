/* Quantumult X 脚本: 彩云天气vip❤凉意  下载链接🔗 https://apps.apple.com/cn/app/%E5%BD%A9%E4%BA%91%E5%A4%A9%E6%B0%94/id847764912

[rewrite_local] 
#彩云天气vip
^https\:\/\/biz\.caiyunapp\.com\/v2\/user?app_name=weather url script-response-body cytq.js
[mitm] hostname = biz.caiyunapp.com,
*/

var body = $response.body;
 var url = $request.url;
 var obj = JSON.parse(body);
 const 1 = '/v2/user';
 if (url.indexOf(1) != -1) {
  obj.is_vip = true;
  obj.vip_expired_at = 9576796302; 
  obj.is_xy_vip = true; 
  obj.xy_vip_expire = 9576796302;
  body = JSON.stringify(obj);
}
 $done({
 body
}
);
