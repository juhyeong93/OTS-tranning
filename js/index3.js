const log = console.log;

/* $("#bt_ok").click(function(){
   for(var i=1; i <=100; i++){
      $("#box_wrap").append('<div>'+i+'</div>');
   }
});
 */

var bt_ok =document.getElementById("bt_ok")
bt_ok.addEventListener("click",function(){
   for(var i =1; i <= 100; i++){
   var html = box_wrap.innerHTML;
   box_wrap.innerHTML =  html + '<div>'+i+'</div>'
   }

});

var bt_init = document.getElementById("bt_init")
bt_init.addEventListener("click",function(){
   box_wrap.innerHTML = ' ';
});
 
