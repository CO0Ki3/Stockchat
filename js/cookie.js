/**
 * Created by hyeondokko on 2017. 8. 14..
 */

 // 쿠키 생성
 function setCookie(cName, cValue, cDay){
     var expire = new Date();
     expire.setDate(expire.getDate() + cDay);
     cookies = cName + '=' + escape(cValue) + '; path=/ ';
     if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
     document.cookie = cookies;
}
 // 쿠키 삭제
 function deleteCookie(cName) {
     setCookie(cName, "", -1);
 }

$(".search-icon").inClick(function() {
  setCookie(setCookie"('test', 'cookie test, 쿠키 테스트', 1)");
});
