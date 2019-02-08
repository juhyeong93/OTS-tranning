var equalizer =(function(){ //함수내의 변수들임, 윈도우는 최상위 객체라서 우선순위1
   function equalizer(parent, bgcolor, size){
      var obj = this;
      var html = '<ul>';
      for(var i=0; i <5; i++){
         html+= '<li></li>';
      }
      html += '</ul>';
      this.parent = $(parent);
      this.bgcolor = bgcolor;
      this.size = size;
      this.parent.append(html);
      this.ul = this.parent.children("ul");
      this.li = this.ul.children("li");
      this.ul.css({
         "width":this.size +"px",
         "height":this.size + "px",
         "position":"relative"
      });
console.log(this.li);
      this.li.each(function(i){
        $(this).css({
         "background-color":obj.bgcolor,
         "width":"10%",
         "height":"50%",
         "left":(i*20) + "%",
         "position":"absolute",
         "bottom":"0"

        })
        var li = $(this);
        var interval = setInterval(function(){
           li.css({
              "height":(Math.floor((Math.random()*81)+20))+"px"
           });


        },100,$(this));
      });


   //    this.li.css({"background-color":this.bgcolor,
   //    "width":"20%",
   //    "height":"20%",
   //    "position":"absolute",
   //    "bottom":"0"
   // });
     // this.li[0].style.backgroudcolor = this.bgcolor; 위에 코드와 같은것
   }
   return equalizer;

}());

var eq = new equalizer($(".eq"),"#f90","200");
var eq = new equalizer($(".eq2"),"#f00","100");