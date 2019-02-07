/*
 method 
 alert("문자열")
 focus();내가지정한 객체에  focus 를 주는
 submut();
 if()
 for()



propertie
value 
obj.value : 값을 받아온다.
obj.valude:10 값을 대입한다.
length
*/


const log = console.log;

function sendform() {
  var f= document.join_form; 
  var uid = f.uid;
  var pw1 = f.pw1;
  var pw2 = f.pw2;
  var uname = f.uname;
  var email1 = f.email1;
  var email2 = f.email2;
  var tel1 = f.tel1;
  var tel2 = f.tel2;
  var tel3 = f.tel3;
  var gender = f.genger;
  var favorite = f.favorite;
  var mystory = f.mystory;
  if(uid.value == ""){
      alert("아이디를 입력하세요");
      uid.focus();
      return;

  }
  if(uid.value.length < 8){
      alert("아이디는 8글자 이상이어야 합니다.");
      uid.focus();
      return;
   }

   if(pw1.value == ""){
      alert("패스워드 1를 입력하세요.");
      pw1.focus();
      return;
   }

  if(pw2.value == ""){
   alert("패스워드2를 입력하세요.");
   pw2.focus();
   return;
}

if(pw1.value.length < 8){
   alert("패스워드 8글자 이상이어야 합니다.");
   pw1.focus();
   return;
   
}

if(pw2.value.length < 8){
   alert("패스워드 8글자 이상이어야 합니다.");
   pw2.focus();
   return;
   
}

if(pw1.value != pw2.value){
   alert("패스워드가 일치하지 않습니다.");
   pw1.value="";
   pw2.value="";
   pw1.focus();
   return;
}
if(uname.value ==""){
   alert("이름을 입력하세요");
   uname.focus();
   return;
}

if(email1.value=="")
{
   alert("이메일을 입력하세요");
   email1.focus();
   return;

}

if(email2.value=="")
{
   alert("이메일을 입력하세요");
   email2.focus();
   return;

}


f.email.value = email.value + "@" + email2.value;
f,tel.value = tel1.value + "-" + tel2.value;
f.submit();
}
/*  log(uid.value.length);
//$("select[name='email3']").on("change",function () {  }) jquary

// ES6 document.querySelector("#eamil3").addEventListener("change",function(){ 
   
*/


$("#email3").on("change",function(){
  // log(this.value);
  // log($(this).val());
 //  log(document.join_form.email2);
  // log($("input[name='email2']"));   
  $("input[name = 'email2']").val($("#email3").val());
      if($("#email3").val()==""){
         $("input[name = 'email2']").focus();

      }
   
});

$(".number").on("keyup",function(){
   log( $(this).val());
   var exp = /^[0-9]*$/;
   val = $(this).val();
   if(!exp.test(val)){
     $(this).val("");
   }
});

/*var regexp = /^[0-9]*$/

v = $(this).val();

if( !regexp.test(v) ) {

	alert("숫자만 입력하세요");

	$(this).val(v.replace(regexp,''));

} */


