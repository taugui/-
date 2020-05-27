$(".newDeposit").click(function() {
    let deposit = $(".accountDeposit").val();
    let name = $(".accountName").val();
    $(".records").append(`<p> ${name}</p><p class='recordsBorder'>$ ${deposit}</p>`);
});

let xingMing = [];
let jinE = [];

//存储你输入的名字
    $(".newDeposit").click(function(){
    let xingMings = $(".accountName").val();
    xingMing.push(xingMings);
    $(".ledger").append(`<p> 姓名: ${xingMings} </p>`)
    $(".accountName").val("");


//存储你输入的金额
    let jinEs = $(".accountDeposit").val();
    jinE.push(jinEs);
    $(".ledger").append(`<p> 存入蚪币：$${jinEs} </p>` + "-------------------------------------------------------------")
    $(".accountDeposit").val("");


//计算交易笔数
     $(".number").text( "交易笔数：" + xingMing.length);


//计算存款总额
    let total =0;
    for(let money of jinE){
    total = total + Number(money);
    $(".total").text( "存款总额：" + "$" + total);
}

});

//显示最近一笔交易
//    let  shuzus = [];
    $(".update").click(function(){
        $(".buttonDiv").text( xingMing[xingMing.length-1] );
        $(".buttonDiv").text( jinE[jinE.length-1] )
        alert( "最后一笔交易来至于："+ xingMing[xingMing.length-1] +"先生的" +"\n"
         +"金额是："  + jinE[jinE.length-1] + "蚪");


});

