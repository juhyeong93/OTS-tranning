console.log($(".box2").width());
console.log($(".box2").innerWidth());
console.log($(".box2").outerWidth());
console.log($(".box2").outerWidth(true));
console.log($(".box2").position());

var gap =[];
$(".page").each(function(i){
   gap[i]= $(this).position().top;

});
console.log(gap);

$(".navs > li").click(function(){
   var n = $(this).data("page")
   $("html,body").stop().animate({"scrollTop":gap[n]+"px"},1000);
    //$(".subs").not($(this).children(".subs")).stop().slideUp(300);
   // $(this).children(".subs").stop().slideToggle(300);//slideToggle 안보이면 보이고 보이면 안보이게 하라

});

$(".nav").hover(function(){
   $(".subs").stop().slideUp(400);
   $(this).children(".subs").stop().slideDown(700);
},function(){
   $(".subs").stop().slideUp(700);
}); //마우스를 올렸을떄 앞쪽 펑션 마우스를 떘을때 뒤쪽 함수가 먹힌다
$(".nav").mousetouch(function(){}); // 위에 것과 같음 모바일에서는 터치를 해야 함수 실행 컴퓨터에서는 호버와 같은기능
$(".nav").leave(function(){});