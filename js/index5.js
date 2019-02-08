//var : ES5
//let : ES6
const log = console.log;
var Man = {
   weigt : 75,
   height : 175,
   name: "홍길동",
   gender: "M",
   run: function() {
      log("뛴다")
      
   },
   eat:function(){
      log("먹는다.");

   }
   
};

log(Man.name);
Man.run();
Man.eat();

var Human = (function(){
   function Human(_name) {
      this.name = _name;

   }
   Human.prototype.eat = function (food){
      log(this.name + "이(가) "+food+"을(를) 먹습니다.");
      
   }
return Human;
}());

var hong = new Human("홍길동");
log(hong);
log(hong.name);
hong.eat("양꼬치");

var kilsun = new Human("홍길순");
log(kilsun);
log(kilsun.name);
kilsun.eat("회");


/* jquary 를 쓰는 이유
1. 선택자가 편하다.
2.animation, fadein fadeout, slidedown, slideup , hide show 이런것을 사용하기 위해
*/
$("#box1").click(function(){
   $(this).animate({"width":"100%","height":"100%"},2000, function(){
    
   });

});


/*
$("#box1").click(function(){
   $(this).animate({"width":"100%"},2000, function(){
      $(this).animate({"height":"100%"},1000);
   });

});
*/
// var n = 0;
// var interbal =window.setInterval(function(){ 
//    log(n++);
// },500);

$("#music > li").each(function(){
   var li = $(this);
   var interval = setInterval(function(){
      var per = Math.floor(Math.random()*90)+10;
      li.css({"height":(per++)+"%"});
   },100);
   log($(this));
});


// Math.floor(90.6); // 소수점 이하 버림
// Math.cell (90.2); //소수점 이하 올림
// Math.round(90.2); //소수점 이하 반올림
// Math.random() //0부터 1보다 작은 난수 발생 














