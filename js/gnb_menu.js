/**
 * Gnb Menu CSS
 * */

$(function(){

  var timeID; // setInterval, clearInterval에서 사용할 변수

  $('.css-menu-depth1-link').on('mouseenter', function(){

    // removeClass 하기위해 실행되고 있는 setInterval 취소
    clearInterval(timeID);

    // promise() : 앞선 동작이 모두 끝난 후 특정 기능을 실행 시킬 때 사용
    $(this).next().addClass('on').promise().done(function(){

      var $depth2Wrap = $(this).parent().siblings().children('.css-menu-depth2-wrap');

      // setTimeout() : ~초 이후에 한번만 실행

      /*
      1. 타이머 함수 실행 횟수/취소
      2. 실행문의 횟수/시간 을 실행/취소

      를 고려해서 알고리즘 만들기

      1. 일반 코딩

       setInterval(function(){
        실행문
       }, 단위시간);

        - 단위 시간마다 setInterval과 실행문이 매번 실행

        Ex) 단위시간 1000(1초), 횟수 10 => 10초동안 setInterval 10번 실행, 실행문 10번 실행

        3.5초 시점에서 clearInterval 실행 => setInterval 3번 실행, 실행문 3번 실행

      2. 시간이 취소되는 기능 구현 코딩

        var i = 0;
        setInterval(function(){
          if( i == 10 ){
            실행문
          }
          i++;
        }, 단위시간);

        - 단위 시간마다 setInterval은 매번 실행, 실행문은 i가 10일 때 한번 실행

        Ex) 3.5초 시점에서 clearInterval 실행 => setInterval 3번, 실행문 0번( 실행 취소 )

      */

      var count = 0 ;

      timeID = setInterval(function(){

        if( count == 50 ){
          $depth2Wrap.removeClass('on');
        }
        count++;
      }, 1 );

    });

  });

  $('.css-menu-depth1').on('mouseleave', function(){

    $('.css-menu-depth2-wrap').removeClass('on');

  });

});
/**
 * Gnb Menu jQuery
 * */

$(function(){

  $('.menu-depth1-link').on('mouseenter', function(){

    // depth1 border 늘어나는 모션 효과
    $(this).children('.menu-depth1-border').stop().animate({
      width:64
    }, 300);

    // depth2 메뉴 늘어나는 모션 효과
    var depth1Index = $(this).index('.menu-depth1-link');
    var motionHeight = 54;

    if( depth1Index == 1 ){
      motionHeight = 80;
    }

    $(this).next('.menu-depth2-wrap').css({'z-index':10}).stop().animate({
      height:motionHeight,
      opacity:1
    }, 300, function(){
      // $(this) => .menu-depth2-wrap
      $(this).parent().siblings().children('.menu-depth2-wrap').css({'z-index':0}).stop().animate({
      height:0,
      opacity:0
      }, 300);
    });
  });

  $('.menu-depth1-link').on('mouseleave', function(){
    // depth1 border 줄어드는 모션효과
    $(this).children('.menu-depth1-border').stop().animate({
      width:0
    }, 300);
  });

  $('.menu-depth1').on('mouseleave', function(){
    // depth2 메뉴 줄어드는 모션 효과
    $('.menu-depth2-wrap').stop().animate({
      height:0,
      opacity:0
    }, 300);
  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmJfbWVudV9jc3MuanMiLCJfZ25iX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnbmJfbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBHbmIgTWVudSBDU1NcclxuICogKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHRpbWVJRDsgLy8gc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWzsl5DshJwg7IKs7Jqp7ZWgIOuzgOyImFxyXG5cclxuICAkKCcuY3NzLW1lbnUtZGVwdGgxLWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8gcmVtb3ZlQ2xhc3Mg7ZWY6riw7JyE7ZW0IOyLpO2WieuQmOqzoCDsnojripQgc2V0SW50ZXJ2YWwg7Leo7IaMXHJcbiAgICBjbGVhckludGVydmFsKHRpbWVJRCk7XHJcblxyXG4gICAgLy8gcHJvbWlzZSgpIDog7JWe7ISgIOuPmeyekeydtCDrqqjrkZAg64Gd64KcIO2bhCDtirnsoJUg6riw64ql7J2EIOyLpO2WiSDsi5ztgqwg65WMIOyCrOyaqVxyXG4gICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoJ29uJykucHJvbWlzZSgpLmRvbmUoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHZhciAkZGVwdGgyV3JhcCA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmNzcy1tZW51LWRlcHRoMi13cmFwJyk7XHJcblxyXG4gICAgICAvLyBzZXRUaW1lb3V0KCkgOiB+7LSIIOydtO2bhOyXkCDtlZzrsojrp4wg7Iuk7ZaJXHJcblxyXG4gICAgICAvKlxyXG4gICAgICAxLiDtg4DsnbTrqLgg7ZWo7IiYIOyLpO2WiSDtmp/siJgv7Leo7IaMXHJcbiAgICAgIDIuIOyLpO2WieusuOydmCDtmp/siJgv7Iuc6rCEIOydhCDsi6Ttlokv7Leo7IaMXHJcblxyXG4gICAgICDrpbwg6rOg66Ck7ZW07IScIOyVjOqzoOumrOymmCDrp4zrk6TquLBcclxuXHJcbiAgICAgIDEuIOydvOuwmCDsvZTrlKlcclxuXHJcbiAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgIOyLpO2WieusuFxyXG4gICAgICAgfSwg64uo7JyE7Iuc6rCEKTtcclxuXHJcbiAgICAgICAgLSDri6jsnIQg7Iuc6rCE66eI64ukIHNldEludGVydmFs6rO8IOyLpO2WieusuOydtCDrp6Trsogg7Iuk7ZaJXHJcblxyXG4gICAgICAgIEV4KSDri6jsnITsi5zqsIQgMTAwMCgx7LSIKSwg7Zqf7IiYIDEwID0+IDEw7LSI64+Z7JWIIHNldEludGVydmFsIDEw67KIIOyLpO2WiSwg7Iuk7ZaJ66y4IDEw67KIIOyLpO2WiVxyXG5cclxuICAgICAgICAzLjXstIgg7Iuc7KCQ7JeQ7IScIGNsZWFySW50ZXJ2YWwg7Iuk7ZaJID0+IHNldEludGVydmFsIDPrsogg7Iuk7ZaJLCDsi6TtlonrrLggM+uyiCDsi6TtlolcclxuXHJcbiAgICAgIDIuIOyLnOqwhOydtCDst6jshozrkJjripQg6riw64qlIOq1rO2YhCDsvZTrlKlcclxuXHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBpZiggaSA9PSAxMCApe1xyXG4gICAgICAgICAgICDsi6TtlonrrLhcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGkrKztcclxuICAgICAgICB9LCDri6jsnITsi5zqsIQpO1xyXG5cclxuICAgICAgICAtIOuLqOychCDsi5zqsITrp4jri6Qgc2V0SW50ZXJ2YWzsnYAg66ek67KIIOyLpO2WiSwg7Iuk7ZaJ66y47J2AIGnqsIAgMTDsnbwg65WMIO2VnOuyiCDsi6TtlolcclxuXHJcbiAgICAgICAgRXgpIDMuNey0iCDsi5zsoJDsl5DshJwgY2xlYXJJbnRlcnZhbCDsi6TtlokgPT4gc2V0SW50ZXJ2YWwgM+uyiCwg7Iuk7ZaJ66y4IDDrsogoIOyLpO2WiSDst6jshowgKVxyXG5cclxuICAgICAgKi9cclxuXHJcbiAgICAgIHZhciBjb3VudCA9IDAgO1xyXG5cclxuICAgICAgdGltZUlEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYoIGNvdW50ID09IDUwICl7XHJcbiAgICAgICAgICAkZGVwdGgyV3JhcC5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgfSwgMSApO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmNzcy1tZW51LWRlcHRoMScpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcuY3NzLW1lbnUtZGVwdGgyLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogR25iIE1lbnUgalF1ZXJ5XHJcbiAqICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGRlcHRoMSBib3JkZXIg64qY7Ja064KY64qUIOuqqOyFmCDtmqjqs7xcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWRlcHRoMS1ib3JkZXInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHdpZHRoOjY0XHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIC8vIGRlcHRoMiDrqZTribQg64qY7Ja064KY64qUIOuqqOyFmCDtmqjqs7xcclxuICAgIHZhciBkZXB0aDFJbmRleCA9ICQodGhpcykuaW5kZXgoJy5tZW51LWRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgbW90aW9uSGVpZ2h0ID0gNTQ7XHJcblxyXG4gICAgaWYoIGRlcHRoMUluZGV4ID09IDEgKXtcclxuICAgICAgbW90aW9uSGVpZ2h0ID0gODA7XHJcbiAgICB9XHJcblxyXG4gICAgJCh0aGlzKS5uZXh0KCcubWVudS1kZXB0aDItd3JhcCcpLmNzcyh7J3otaW5kZXgnOjEwfSkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQ6bW90aW9uSGVpZ2h0LFxyXG4gICAgICBvcGFjaXR5OjFcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgLy8gJCh0aGlzKSA9PiAubWVudS1kZXB0aDItd3JhcFxyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5tZW51LWRlcHRoMi13cmFwJykuY3NzKHsnei1pbmRleCc6MH0pLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0OjAsXHJcbiAgICAgIG9wYWNpdHk6MFxyXG4gICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gZGVwdGgxIGJvcmRlciDspITslrTrk5zripQg66qo7IWY7Zqo6rO8XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWVudS1kZXB0aDEtYm9yZGVyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICB3aWR0aDowXHJcbiAgICB9LCAzMDApO1xyXG4gIH0pO1xyXG5cclxuICAkKCcubWVudS1kZXB0aDEnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBkZXB0aDIg66mU64m0IOykhOyWtOuTnOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICAkKCcubWVudS1kZXB0aDItd3JhcCcpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0OjAsXHJcbiAgICAgIG9wYWNpdHk6MFxyXG4gICAgfSwgMzAwKTtcclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
