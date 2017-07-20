/**
 * Accordion Menu CSS
 * */

$(function(){

  // 선언부
  function init(){
    // 처음 로딩되었을 때 상태(2depth 닫혀있는상태이므로 false
    $('.css-lnb-depth1-link').data({'open' : 'false'});

    // each() : 요소 개수만큼 반복하는 함수
    $('.css-lnb-depth2').each(function(index){ //.each(function(i, elem) ----> i는 index 넘버 elem 은 사용할 수 있는 매개변수

      $(this).data({ 'height' : $(this).height() }).css({height:0});

    });

  }

  function menuOpen( $depth1Link ){
    $($depth1Link).next().css({
      height: $($depth1Link).next().data('height')
    }, 500);

    $($depth1Link).data({'open' : 'true'}).addClass('up');

  }

  function menuClose( $depth1Link ){

    $($depth1Link).parent().siblings().children('.css-lnb-depth2').css({
      height:0
    });
    $($depth1Link).parent().siblings().children('.css-lnb-depth1-link').data('open','false').removeClass('up');

  }

  function menuSelfClose( $depth1Link ){
    $($depth1Link).next().css({
      height:0
    });

    $($depth1Link).data({'open' : 'false'}).removeClass('up');
  }

  //실행부
  init();

  $('.css-lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false' ){

      menuOpen( $(this) );
      menuClose( $(this) );

    } else {

      menuSelfClose($(this));

    }
  });
});
/**
 * Accordion Menu jQuery
 * */

/*
  ※ show/hide 형태의 아코디언 메뉴
  ※ CSS 코딩 : styling, hide(display:none;) 까지 CSS 코딩 역할

  1. 마우스 클릭했을 때 sub 메뉴가 show / hide
  2. 클릭한 1 depth 의 sub 메뉴가 보일 때 다른 1 depth의 sub 메뉴는 안보여야 함.
  3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
  4. sub 메뉴가 안보이게 될 때 화살표는 아랫방향 화살표로 변경

*/

/*
 ※ sub 메뉴의 영역이 늘어났다/줄어들었다 형태의 아코디언 메뉴
 ※ CSS 코딩 : styling, 줄어듬(높이 : 0)

 1. 마우스를 클릭했을 때, sub 메뉴의 상태에 따라 sub 메뉴가 늘어남/줄어듬
 2. 클릭한 1 depth 의 sub 메뉴가 늘어날 때 다른 1 depth 의 sub 메뉴는 줄어들어야 함.
 3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
 4. sub 메뉴가 안보이게 될 때 화살표는 아랫방향 화살표로 변경
 */

$(function(){

  // 선언부
  function init(){
    // 처음 로딩되었을 때 상태(2depth 닫혀있는상태이므로 false
    $('.lnb-depth1-link').data({'open' : 'false'});

    // each() : 요소 개수만큼 반복하는 함수
    $('.lnb-depth2').each(function(index){ //.each(function(i, elem) ----> i는 index 넘버 elem 은 사용할 수 있는 매개변수

      $(this).data({ 'height' : $(this).height() }).css({height:0});

    });

  }

  function menuOpen( $depth1Link ){
    $($depth1Link).next().stop().animate({
      height: $($depth1Link).next().data('height')
    }, 500);

    $($depth1Link).data({'open' : 'true'}).addClass('up');

  }

  function menuClose( $depth1Link ){

    $($depth1Link).parent().siblings().children('.lnb-depth2').stop().animate({
      height:0
    });
    $($depth1Link).parent().siblings().children('.lnb-depth1-link').data('open','false').removeClass('up');

  }

  function menuSelfClose( $depth1Link ){
    $($depth1Link).next().stop().animate({
      height:0
    });

    $($depth1Link).data({'open' : 'false'}).removeClass('up');
  }

  function upArrow(){

  }

  // 실행부

  init();

  $('.lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false' ){

      menuOpen( $(this) );
      menuClose( $(this) );

    } else {

      menuSelfClose($(this));

    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hY2NfbWVudV9jc3MuanMiLCJfYWNjX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWNjX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQWNjb3JkaW9uIE1lbnUgQ1NTXHJcbiAqICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgIC8vIOyymOydjCDroZzrlKnrkJjsl4jsnYQg65WMIOyDge2DnCgyZGVwdGgg64ur7ZiA7J6I64qU7IOB7YOc7J2066+A66GcIGZhbHNlXHJcbiAgICAkKCcuY3NzLWxuYi1kZXB0aDEtbGluaycpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuXHJcbiAgICAvLyBlYWNoKCkgOiDsmpTshowg6rCc7IiY66eM7YG8IOuwmOuzte2VmOuKlCDtlajsiJhcclxuICAgICQoJy5jc3MtbG5iLWRlcHRoMicpLmVhY2goZnVuY3Rpb24oaW5kZXgpeyAvLy5lYWNoKGZ1bmN0aW9uKGksIGVsZW0pIC0tLS0+IGnripQgaW5kZXgg64SY67KEIGVsZW0g7J2AIOyCrOyaqe2VoCDsiJgg7J6I64qUIOunpOqwnOuzgOyImFxyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKHsgJ2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpIH0pLmNzcyh7aGVpZ2h0OjB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGRlcHRoMUxpbmsgKXtcclxuICAgICQoJGRlcHRoMUxpbmspLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQ6ICQoJGRlcHRoMUxpbmspLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgICAkKCRkZXB0aDFMaW5rKS5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51Q2xvc2UoICRkZXB0aDFMaW5rICl7XHJcblxyXG4gICAgJCgkZGVwdGgxTGluaykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmNzcy1sbmItZGVwdGgyJykuY3NzKHtcclxuICAgICAgaGVpZ2h0OjBcclxuICAgIH0pO1xyXG4gICAgJCgkZGVwdGgxTGluaykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmNzcy1sbmItZGVwdGgxLWxpbmsnKS5kYXRhKCdvcGVuJywnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51U2VsZkNsb3NlKCAkZGVwdGgxTGluayApe1xyXG4gICAgJCgkZGVwdGgxTGluaykubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodDowXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCRkZXB0aDFMaW5rKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJyk7XHJcbiAgfVxyXG5cclxuICAvL+yLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLmNzcy1sbmItZGVwdGgxLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScgKXtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCQodGhpcykpO1xyXG5cclxuICAgIH1cclxuICB9KTtcclxufSk7IiwiLyoqXHJcbiAqIEFjY29yZGlvbiBNZW51IGpRdWVyeVxyXG4gKiAqL1xyXG5cclxuLypcclxuICDigLsgc2hvdy9oaWRlIO2Yle2DnOydmCDslYTsvZTrlJTslrgg66mU64m0XHJcbiAg4oC7IENTUyDsvZTrlKkgOiBzdHlsaW5nLCBoaWRlKGRpc3BsYXk6bm9uZTspIOq5jOyngCBDU1Mg7L2U65SpIOyXre2VoFxyXG5cclxuICAxLiDrp4jsmrDsiqQg7YG066at7ZaI7J2EIOuVjCBzdWIg66mU64m06rCAIHNob3cgLyBoaWRlXHJcbiAgMi4g7YG066at7ZWcIDEgZGVwdGgg7J2YIHN1YiDrqZTribTqsIAg67O07J28IOuVjCDri6TrpbggMSBkZXB0aOydmCBzdWIg66mU64m064qUIOyViOuztOyXrOyVvCDtlaguXHJcbiAgMy4gc3ViIOuplOuJtOqwgCDrs7Tsnbwg65WMIO2ZlOyCtO2RnOuKlCDsnJfrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG4gIDQuIHN1YiDrqZTribTqsIAg7JWI67O07J206rKMIOuQoCDrlYwg7ZmU7IK07ZGc64qUIOyVhOueq+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcblxyXG4qL1xyXG5cclxuLypcclxuIOKAuyBzdWIg66mU64m07J2YIOyYgeyXreydtCDripjslrTrgqzri6Qv7KSE7Ja065Ok7JeI64ukIO2Yle2DnOydmCDslYTsvZTrlJTslrgg66mU64m0XHJcbiDigLsgQ1NTIOy9lOuUqSA6IHN0eWxpbmcsIOykhOyWtOuTrCjrhpLsnbQgOiAwKVxyXG5cclxuIDEuIOuniOyasOyKpOulvCDtgbTrpq3tlojsnYQg65WMLCBzdWIg66mU64m07J2YIOyDge2DnOyXkCDrlLDrnbwgc3ViIOuplOuJtOqwgCDripjslrTrgqgv7KSE7Ja065OsXHJcbiAyLiDtgbTrpq3tlZwgMSBkZXB0aCDsnZggc3ViIOuplOuJtOqwgCDripjslrTrgqAg65WMIOuLpOuluCAxIGRlcHRoIOydmCBzdWIg66mU64m064qUIOykhOyWtOuTpOyWtOyVvCDtlaguXHJcbiAzLiBzdWIg66mU64m06rCAIOuztOydvCDrlYwg7ZmU7IK07ZGc64qUIOycl+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcbiA0LiBzdWIg66mU64m06rCAIOyViOuztOydtOqyjCDrkKAg65WMIO2ZlOyCtO2RnOuKlCDslYTrnqvrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgLy8g7LKY7J2MIOuhnOuUqeuQmOyXiOydhCDrlYwg7IOB7YOcKDJkZXB0aCDri6vtmIDsnojripTsg4Htg5zsnbTrr4DroZwgZmFsc2VcclxuICAgICQoJy5sbmItZGVwdGgxLWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcblxyXG4gICAgLy8gZWFjaCgpIDog7JqU7IaMIOqwnOyImOunjO2BvCDrsJjrs7XtlZjripQg7ZWo7IiYXHJcbiAgICAkKCcubG5iLWRlcHRoMicpLmVhY2goZnVuY3Rpb24oaW5kZXgpeyAvLy5lYWNoKGZ1bmN0aW9uKGksIGVsZW0pIC0tLS0+IGnripQgaW5kZXgg64SY67KEIGVsZW0g7J2AIOyCrOyaqe2VoCDsiJgg7J6I64qUIOunpOqwnOuzgOyImFxyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKHsgJ2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpIH0pLmNzcyh7aGVpZ2h0OjB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGRlcHRoMUxpbmsgKXtcclxuICAgICQoJGRlcHRoMUxpbmspLm5leHQoKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodDogJCgkZGVwdGgxTGluaykubmV4dCgpLmRhdGEoJ2hlaWdodCcpXHJcbiAgICB9LCA1MDApO1xyXG5cclxuICAgICQoJGRlcHRoMUxpbmspLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGRlcHRoMUxpbmsgKXtcclxuXHJcbiAgICAkKCRkZXB0aDFMaW5rKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcubG5iLWRlcHRoMicpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0OjBcclxuICAgIH0pO1xyXG4gICAgJCgkZGVwdGgxTGluaykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmxuYi1kZXB0aDEtbGluaycpLmRhdGEoJ29wZW4nLCdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRkZXB0aDFMaW5rICl7XHJcbiAgICAkKCRkZXB0aDFMaW5rKS5uZXh0KCkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQ6MFxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgkZGVwdGgxTGluaykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pLnJlbW92ZUNsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBBcnJvdygpe1xyXG5cclxuICB9XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG5cclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5sbmItZGVwdGgxLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScgKXtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCQodGhpcykpO1xyXG5cclxuICAgIH1cclxuICB9KTtcclxufSk7Il19
