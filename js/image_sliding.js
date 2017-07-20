/**
 * Image Sliding CSS
 * */

$(function(){

  // 선언부
  function init(){

    $('.css-sliding-view-image').eq(0).addClass('center');
    $('.css-sliding-view-image').eq(1).addClass('right');
    $('.css-sliding-view-image').eq(2).addClass('left');

    marginCtrlWrap();
    paging();
  }

  var currentIndex=0;
  var nextIndex=0;
  var prevIndex=0;
  var timeID;
  var checkID;


  function moveLeft(){
    if(nextIndex >= $('.css-sliding-view-image').length){
      nextIndex=0;
    }

    // eq() 에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
    $('.css-sliding-view-image').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('right').addClass('center ani');
    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){
    if(nextIndex <= -1){
      nextIndex = $('.css-sliding-view-image').length-1;
    }

    if(prevIndex >= $('.css-sliding-view-image').length){
      prevIndex=0;
    }


    $('.css-sliding-view-image').eq(prevIndex).removeClass('right ani').addClass('left');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = currentIndex + 1;
    nextIndex--;
  }

  function autoRolling(){
    timeID = setInterval( function(){
      if($('.css-sliding-btn-control').hasClass('play')){
        $('.css-sliding-btn-control').removeClass('play').addClass('pause').text('pause');
      }
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }

  function marginCtrlWrap(){

    var wrapWidth = $('.css-sliding-control-wrap').width();

    $('.css-sliding-control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });

  }

  function paging(){

    var imgNumber = $('.css-sliding-view-image').length;

    for(var i=0; i<imgNumber; i++){

      $('.css-sliding-paging').append('<li class="css-sliding-paging-item"><a href="#" class="css-sliding-paging-link">' + (i+1) + '</a></li>');

    }
  }

  function pauseAndReAuto(){
    // autoRolling() 의 setInterval을 중지 => 자동롤링 일시정지
    clearInterval( timeID );
    if($('.css-sliding-btn-control').hasClass('pause')){
      $('.css-sliding-btn-control').removeClass('pause').addClass('play').text('play');
    }
    clearInterval( checkID );
    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
  }

  //실행부
  init();

  autoRolling()

  var activeClick = function(direction){

    var dir = direction;

    if( dir == 'right' ){
      nextIndex = currentIndex + 1;
      moveLeft();
    }else {
      nextIndex = currentIndex - 1;
      prevIndex = currentIndex + 1;
      moveRight();
    }

    var $selector = $('.css-sliding-arrow.'+dir); // $('.css-sliding-arrow.right')

    setTimeout(function(){
      // 재귀함수
      $selector.one('click', function(){
        activeClick(dir);
      });
      //if(dir == 'left'){
      //  $('.css-sliding-arrow.right').one('click', function(){
      //    activeClick(dir);
      //  });
      //} else {
      //  $('.css-sliding-arrow.left').one('click', function () {
      //    activeClick(dir);
      //  });
      //}

    },1000);
  };

  $('.css-sliding-arrow.right').one('click', function(){
    pauseAndReAuto();
    activeClick('right');
  });

  $('.css-sliding-arrow.left').one('click', function(){
    pauseAndReAuto();
    activeClick('left');
  });

  $(document).on('click', '.css-sliding-btn-control.pause', function(e){

    clearInterval(timeID);

    $(e.target).removeClass('pause').addClass('play');
    $(e.target).text('Play');

  });

  $(document).on('click', '.css-sliding-btn-control.play', function(e){
    autoRolling();
    $(e.target).removeClass('play').addClass('pause');
    $(e.target).text('Pause');

  });

  $(document).on('click', '.css-sliding-paging-item', function(e){

    pauseAndReAuto();

    e.preventDefault();

    var indexNumber = $(this).index('.css-sliding-paging-item');

    if( currentIndex != indexNumber){
      if( currentIndex == 0 ){

        if( indexNumber == $('.css-sliding-view-image').length-1 ){
          activeClick('left');
        } else {
          activeClick('right');
        }

      } else if( currentIndex == $('.css-sliding-view-image').length-1 ) {

        if (indexNumber == 0) {
          activeClick('right');
        } else {
          activeClick('left');
        }

      } else {

        if( currentIndex < indexNumber ){
          activeClick('right');
        } else {
          activeClick('left');
        }
      }
    }
  });

});
/**
 *  Image Sliding jQuery
 * */

$(function(){
  // 선언부
  function init(){

    $('.js-sliding .view-image').eq(0).css({ left:0 });
    $('.js-sliding .view-image').eq(1).css({ left:400 });
    $('.js-sliding .view-image').eq(2).css({ left:-400 });

    marginCtrlWrap();
    paging();
  }

  var currentIndex=0;
  var nextIndex=0;
  var timeID;
  var checkID;

  function moveLeft(){

    if(nextIndex >= $('.js-sliding .view-image').length){
      nextIndex = 0;
    }

    $('.js-sliding .view-image').eq(currentIndex).stop().animate({left:-400},2000, 'easeOutBounce');
    $('.js-sliding .view-image').eq(nextIndex).css({left:400}).stop().animate({left:0},2000, 'easeOutBounce');

    currentIndex = nextIndex;
    nextIndex ++;

  }

  function moveRight(){


    if(nextIndex <= -1){
      nextIndex = $('.view-image').length-1;
    }

    $('.js-sliding .view-image').eq(currentIndex).stop().animate({left:400},2000, 'easeOutBounce');
    $('.js-sliding .view-image').eq(nextIndex).css({left:-400}).stop().animate({left:0},2000, 'easeOutBounce');

    currentIndex = nextIndex;
    nextIndex --;

  }

  function autoRolling(){
    timeID = setInterval( function(){
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }

  function marginCtrlWrap(){

    var wrapWidth = $('.js-sliding .control-wrap').width();

    $('.js-sliding .control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });

  }

  function paging(){

    var imgNumber = $('.js-sliding .view-image').length;

    for(var i=0; i<imgNumber; i++){

      $('.js-sliding .paging').append('<li class="paging-item"><a href="#" class="paging-link">' + (i+1) + '</a></li>');

    }
  }

  // 실행부

  init();

  autoRolling();

  $('.arrow.right').on('click', function(){
    clearInterval( timeID );
    clearInterval( checkID );
    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex + 1;

    if( !$('.view-image').is(':animated') ){
      moveLeft();
    }
  });

  $('.arrow.left').on('click', function(){
    clearInterval( timeID );
    clearInterval( checkID );
    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex - 1;
    if( !$('.view-image').is(':animated') ) {
      moveRight();
    }
  });

  $(document).on('click', '.btn-control.pause', function(e){

    clearInterval(timeID);

    $(e.target).removeClass('pause').addClass('play');
    $(e.target).text('Play');

  });

  $(document).on('click', '.btn-control.play', function(e){
    autoRolling();
    $(e.target).removeClass('play').addClass('pause');
    $(e.target).text('Pause');

  });

  $(document).on('click', '.paging-item', function(e){

    e.preventDefault();

    var indexNumber = $(this).index('.paging-item');

    if( currentIndex != indexNumber){
      if( currentIndex == 0 ){

        if( indexNumber == $('.view-image').length-1 ){

          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ) {
            moveRight();
          }
        } else {

          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        }

      } else if( currentIndex == $('.view-image').length-1 ) {

        if (indexNumber == 0) {
          nextIndex = currentIndex + 1;
          if (!$('.view-image').is(':animated')) {
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if (!$('.view-image').is(':animated')) {
            moveRight();
          }
        }

      } else {

        if( currentIndex < indexNumber ){

          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }

        } else {
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ) {
            moveRight();
          }
        }
      }
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9pbWFnZV9zbGlkaW5nX2Nzcy5qcyIsIl9pbWFnZV9zbGlkaW5nX2pxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImltYWdlX3NsaWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSW1hZ2UgU2xpZGluZyBDU1NcclxuICogKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcSgxKS5hZGRDbGFzcygncmlnaHQnKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEoMikuYWRkQ2xhc3MoJ2xlZnQnKTtcclxuXHJcbiAgICBtYXJnaW5DdHJsV3JhcCgpO1xyXG4gICAgcGFnaW5nKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgY3VycmVudEluZGV4PTA7XHJcbiAgdmFyIG5leHRJbmRleD0wO1xyXG4gIHZhciBwcmV2SW5kZXg9MDtcclxuICB2YXIgdGltZUlEO1xyXG4gIHZhciBjaGVja0lEO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleD0wO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVxKCkg7JeQIOydjOyImCDqsJLsnYQg64Sj7Ja0IOyjvOuptCDrkrcg7Iic7ISc67aA7YSwIOywqOuhgOuMgOuhnCDrp6Tsua3si5ztgrRcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEoY3VycmVudEluZGV4LTEpLnJlbW92ZUNsYXNzKCdsZWZ0IGFuaScpLmFkZENsYXNzKCdyaWdodCcpO1xyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ2xlZnQgYW5pJyk7XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0JykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleCsrO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcbiAgICBpZihuZXh0SW5kZXggPD0gLTEpe1xyXG4gICAgICBuZXh0SW5kZXggPSAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHByZXZJbmRleCA+PSAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmxlbmd0aCl7XHJcbiAgICAgIHByZXZJbmRleD0wO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKHByZXZJbmRleCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0IGFuaScpLmFkZENsYXNzKCdsZWZ0Jyk7XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygncmlnaHQgYW5pJyk7XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ2xlZnQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICBuZXh0SW5kZXgtLTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9Sb2xsaW5nKCl7XHJcbiAgICB0aW1lSUQgPSBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKXtcclxuICAgICAgaWYoJCgnLmNzcy1zbGlkaW5nLWJ0bi1jb250cm9sJykuaGFzQ2xhc3MoJ3BsYXknKSl7XHJcbiAgICAgICAgJCgnLmNzcy1zbGlkaW5nLWJ0bi1jb250cm9sJykucmVtb3ZlQ2xhc3MoJ3BsYXknKS5hZGRDbGFzcygncGF1c2UnKS50ZXh0KCdwYXVzZScpO1xyXG4gICAgICB9XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1hcmdpbkN0cmxXcmFwKCl7XHJcblxyXG4gICAgdmFyIHdyYXBXaWR0aCA9ICQoJy5jc3Mtc2xpZGluZy1jb250cm9sLXdyYXAnKS53aWR0aCgpO1xyXG5cclxuICAgICQoJy5jc3Mtc2xpZGluZy1jb250cm9sLXdyYXAnKS5jc3Moe1xyXG4gICAgICAnbWFyZ2luLWxlZnQnIDogLSggd3JhcFdpZHRoIC8gMiApXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYWdpbmcoKXtcclxuXHJcbiAgICB2YXIgaW1nTnVtYmVyID0gJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5sZW5ndGg7XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8aW1nTnVtYmVyOyBpKyspe1xyXG5cclxuICAgICAgJCgnLmNzcy1zbGlkaW5nLXBhZ2luZycpLmFwcGVuZCgnPGxpIGNsYXNzPVwiY3NzLXNsaWRpbmctcGFnaW5nLWl0ZW1cIj48YSBocmVmPVwiI1wiIGNsYXNzPVwiY3NzLXNsaWRpbmctcGFnaW5nLWxpbmtcIj4nICsgKGkrMSkgKyAnPC9hPjwvbGk+Jyk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGF1c2VBbmRSZUF1dG8oKXtcclxuICAgIC8vIGF1dG9Sb2xsaW5nKCkg7J2YIHNldEludGVydmFs7J2EIOykkeyngCA9PiDsnpDrj5nroaTrp4Eg7J287Iuc7KCV7KeAXHJcbiAgICBjbGVhckludGVydmFsKCB0aW1lSUQgKTtcclxuICAgIGlmKCQoJy5jc3Mtc2xpZGluZy1idG4tY29udHJvbCcpLmhhc0NsYXNzKCdwYXVzZScpKXtcclxuICAgICAgJCgnLmNzcy1zbGlkaW5nLWJ0bi1jb250cm9sJykucmVtb3ZlQ2xhc3MoJ3BhdXNlJykuYWRkQ2xhc3MoJ3BsYXknKS50ZXh0KCdwbGF5Jyk7XHJcbiAgICB9XHJcbiAgICBjbGVhckludGVydmFsKCBjaGVja0lEICk7XHJcbiAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgY2hlY2tJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKGNvdW50ID09IDUpe1xyXG4gICAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja0lEKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhjb3VudCk7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIC8v7Iuk7ZaJ67aAXHJcbiAgaW5pdCgpO1xyXG5cclxuICBhdXRvUm9sbGluZygpXHJcblxyXG4gIHZhciBhY3RpdmVDbGljayA9IGZ1bmN0aW9uKGRpcmVjdGlvbil7XHJcblxyXG4gICAgdmFyIGRpciA9IGRpcmVjdGlvbjtcclxuXHJcbiAgICBpZiggZGlyID09ICdyaWdodCcgKXtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgbW92ZUxlZnQoKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgcHJldkluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyICRzZWxlY3RvciA9ICQoJy5jc3Mtc2xpZGluZy1hcnJvdy4nK2Rpcik7IC8vICQoJy5jc3Mtc2xpZGluZy1hcnJvdy5yaWdodCcpXHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAvLyDsnqzqt4DtlajsiJhcclxuICAgICAgJHNlbGVjdG9yLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGFjdGl2ZUNsaWNrKGRpcik7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvL2lmKGRpciA9PSAnbGVmdCcpe1xyXG4gICAgICAvLyAgJCgnLmNzcy1zbGlkaW5nLWFycm93LnJpZ2h0Jykub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vICAgIGFjdGl2ZUNsaWNrKGRpcik7XHJcbiAgICAgIC8vICB9KTtcclxuICAgICAgLy99IGVsc2Uge1xyXG4gICAgICAvLyAgJCgnLmNzcy1zbGlkaW5nLWFycm93LmxlZnQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyAgICBhY3RpdmVDbGljayhkaXIpO1xyXG4gICAgICAvLyAgfSk7XHJcbiAgICAgIC8vfVxyXG5cclxuICAgIH0sMTAwMCk7XHJcbiAgfTtcclxuXHJcbiAgJCgnLmNzcy1zbGlkaW5nLWFycm93LnJpZ2h0Jykub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBwYXVzZUFuZFJlQXV0bygpO1xyXG4gICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5jc3Mtc2xpZGluZy1hcnJvdy5sZWZ0Jykub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBwYXVzZUFuZFJlQXV0bygpO1xyXG4gICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jc3Mtc2xpZGluZy1idG4tY29udHJvbC5wYXVzZScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwodGltZUlEKTtcclxuXHJcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygncGF1c2UnKS5hZGRDbGFzcygncGxheScpO1xyXG4gICAgJChlLnRhcmdldCkudGV4dCgnUGxheScpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jc3Mtc2xpZGluZy1idG4tY29udHJvbC5wbGF5JywgZnVuY3Rpb24oZSl7XHJcbiAgICBhdXRvUm9sbGluZygpO1xyXG4gICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ3BsYXknKS5hZGRDbGFzcygncGF1c2UnKTtcclxuICAgICQoZS50YXJnZXQpLnRleHQoJ1BhdXNlJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNzcy1zbGlkaW5nLXBhZ2luZy1pdGVtJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgcGF1c2VBbmRSZUF1dG8oKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLmNzcy1zbGlkaW5nLXBhZ2luZy1pdGVtJyk7XHJcblxyXG4gICAgaWYoIGN1cnJlbnRJbmRleCAhPSBpbmRleE51bWJlcil7XHJcbiAgICAgIGlmKCBjdXJyZW50SW5kZXggPT0gMCApe1xyXG5cclxuICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5sZW5ndGgtMSApe1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIGlmKCBjdXJyZW50SW5kZXggPT0gJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5sZW5ndGgtMSApIHtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4TnVtYmVyID09IDApIHtcclxuICAgICAgICAgIGFjdGl2ZUNsaWNrKCdyaWdodCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY3RpdmVDbGljaygnbGVmdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGlmKCBjdXJyZW50SW5kZXggPCBpbmRleE51bWJlciApe1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFjdGl2ZUNsaWNrKCdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogIEltYWdlIFNsaWRpbmcgalF1ZXJ5XHJcbiAqICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykuZXEoMCkuY3NzKHsgbGVmdDowIH0pO1xyXG4gICAgJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5lcSgxKS5jc3MoeyBsZWZ0OjQwMCB9KTtcclxuICAgICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykuZXEoMikuY3NzKHsgbGVmdDotNDAwIH0pO1xyXG5cclxuICAgIG1hcmdpbkN0cmxXcmFwKCk7XHJcbiAgICBwYWdpbmcoKTtcclxuICB9XHJcblxyXG4gIHZhciBjdXJyZW50SW5kZXg9MDtcclxuICB2YXIgbmV4dEluZGV4PTA7XHJcbiAgdmFyIHRpbWVJRDtcclxuICB2YXIgY2hlY2tJRDtcclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuXHJcbiAgICBpZihuZXh0SW5kZXggPj0gJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5sZW5ndGgpe1xyXG4gICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDotNDAwfSwyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG4gICAgJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDo0MDB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDowfSwyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleCArKztcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuXHJcblxyXG4gICAgaWYobmV4dEluZGV4IDw9IC0xKXtcclxuICAgICAgbmV4dEluZGV4ID0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGgtMTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6NDAwfSwyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG4gICAgJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDotNDAwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6MH0sMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXggLS07XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1JvbGxpbmcoKXtcclxuICAgIHRpbWVJRCA9IHNldEludGVydmFsKCBmdW5jdGlvbigpe1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYXJnaW5DdHJsV3JhcCgpe1xyXG5cclxuICAgIHZhciB3cmFwV2lkdGggPSAkKCcuanMtc2xpZGluZyAuY29udHJvbC13cmFwJykud2lkdGgoKTtcclxuXHJcbiAgICAkKCcuanMtc2xpZGluZyAuY29udHJvbC13cmFwJykuY3NzKHtcclxuICAgICAgJ21hcmdpbi1sZWZ0JyA6IC0oIHdyYXBXaWR0aCAvIDIgKVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFnaW5nKCl7XHJcblxyXG4gICAgdmFyIGltZ051bWJlciA9ICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykubGVuZ3RoO1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPGltZ051bWJlcjsgaSsrKXtcclxuXHJcbiAgICAgICQoJy5qcy1zbGlkaW5nIC5wYWdpbmcnKS5hcHBlbmQoJzxsaSBjbGFzcz1cInBhZ2luZy1pdGVtXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInBhZ2luZy1saW5rXCI+JyArIChpKzEpICsgJzwvYT48L2xpPicpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG5cclxuICBpbml0KCk7XHJcblxyXG4gIGF1dG9Sb2xsaW5nKCk7XHJcblxyXG4gICQoJy5hcnJvdy5yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjbGVhckludGVydmFsKCB0aW1lSUQgKTtcclxuICAgIGNsZWFySW50ZXJ2YWwoIGNoZWNrSUQgKTtcclxuICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICBjaGVja0lEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgaWYoY291bnQgPT0gNSl7XHJcbiAgICAgICAgYXV0b1JvbGxpbmcoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGNoZWNrSUQpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgICAgY291bnQrKztcclxuICAgIH0sIDEwMDApO1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuXHJcbiAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5hcnJvdy5sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNsZWFySW50ZXJ2YWwoIHRpbWVJRCApO1xyXG4gICAgY2xlYXJJbnRlcnZhbCggY2hlY2tJRCApO1xyXG4gICAgdmFyIGNvdW50ID0gMDtcclxuICAgIGNoZWNrSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICBpZihjb3VudCA9PSA1KXtcclxuICAgICAgICBhdXRvUm9sbGluZygpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJRCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG4gICAgICBjb3VudCsrO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApIHtcclxuICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuLWNvbnRyb2wucGF1c2UnLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBjbGVhckludGVydmFsKHRpbWVJRCk7XHJcblxyXG4gICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ3BhdXNlJykuYWRkQ2xhc3MoJ3BsYXknKTtcclxuICAgICQoZS50YXJnZXQpLnRleHQoJ1BsYXknKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuLWNvbnRyb2wucGxheScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgYXV0b1JvbGxpbmcoKTtcclxuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdwbGF5JykuYWRkQ2xhc3MoJ3BhdXNlJyk7XHJcbiAgICAkKGUudGFyZ2V0KS50ZXh0KCdQYXVzZScpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wYWdpbmctaXRlbScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcucGFnaW5nLWl0ZW0nKTtcclxuXHJcbiAgICBpZiggY3VycmVudEluZGV4ICE9IGluZGV4TnVtYmVyKXtcclxuICAgICAgaWYoIGN1cnJlbnRJbmRleCA9PSAwICl7XHJcblxyXG4gICAgICAgIGlmKCBpbmRleE51bWJlciA9PSAkKCcudmlldy1pbWFnZScpLmxlbmd0aC0xICl7XHJcblxyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKSB7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2UgaWYoIGN1cnJlbnRJbmRleCA9PSAkKCcudmlldy1pbWFnZScpLmxlbmd0aC0xICkge1xyXG5cclxuICAgICAgICBpZiAoaW5kZXhOdW1iZXIgPT0gMCkge1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgIGlmICghJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykpIHtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgIGlmICghJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykpIHtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgaWYoIGN1cnJlbnRJbmRleCA8IGluZGV4TnVtYmVyICl7XHJcblxyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICkge1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7Il19
