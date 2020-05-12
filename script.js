// 设置正确的用户名和密码
var correctUsername = "kido";
var correctPassword = "shiwuxuetang";


$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    
    //在下面加入代码

if( username === correctUsername && password ===correctPassword ){
    alert("恭喜你登录成功！");
    
}else if(username ===""){
	alert("亲！请输入用户名");
    
}else if(password === ""){
    alert("亲！请输入密码");
    
}else if( username === correctUsername || password !==correctPassword ){
	alert("Sorry!你的密码可能存在问题");
    
}else if( username !== correctUsername ||password===correctPassword ){
	alert("Sorry!你的用户名可能存在问题");
   
}
    
});
          
function buttonClick(){  
	alert("账号：kido  密码：shiwuxuetang");  
}  


