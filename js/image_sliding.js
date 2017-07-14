/**
 * Image Sliding CSS
 * */
/**
 *  Image Sliding jQuery
 * */

$(function(){
  // 선언부
  function init(){

    $('.view-image').eq(0).css({ left:0 });
    $('.view-image').eq(1).css({ left:400 });
    $('.view-image').eq(2).css({ left:-400 });

    marginCtrlWrap();
    paging();
  }

  var currentIndex=0;
  var nextIndex=0;
  var timeID;
  var checkID;

  function moveLeft(){

    if(nextIndex >= $('.view-image').length){
      nextIndex = 0;
    }

    $('.view-image').eq(currentIndex).stop().animate({left:-400},2000, 'easeOutBounce');
    $('.view-image').eq(nextIndex).css({left:400}).stop().animate({left:0},2000, 'easeOutBounce');

    currentIndex = nextIndex;
    nextIndex ++;

  }

  function moveRight(){


    if(nextIndex <= -1){
      nextIndex = $('.view-image').length-1;
    }

    $('.view-image').eq(currentIndex).stop().animate({left:400},2000, 'easeOutBounce');
    $('.view-image').eq(nextIndex).css({left:-400}).stop().animate({left:0},2000, 'easeOutBounce');

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

    var wrapWidth = $('.control-wrap').width();

    $('.control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });

  }

  function paging(){

    var imgNumber = $('.view-image').length;

    for(var i=0; i<imgNumber; i++){

      $('.paging').append('<li class="paging-item"><a href="#" class="paging-link">' + (i+1) + '</a></li>');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9pbWFnZV9zbGlkaW5nX2Nzcy5qcyIsIl9pbWFnZV9zbGlkaW5nX2pxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbWFnZV9zbGlkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEltYWdlIFNsaWRpbmcgQ1NTXHJcbiAqICovIiwiLyoqXHJcbiAqICBJbWFnZSBTbGlkaW5nIGpRdWVyeVxyXG4gKiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gIC8vIOyEoOyWuOu2gFxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgICAkKCcudmlldy1pbWFnZScpLmVxKDApLmNzcyh7IGxlZnQ6MCB9KTtcclxuICAgICQoJy52aWV3LWltYWdlJykuZXEoMSkuY3NzKHsgbGVmdDo0MDAgfSk7XHJcbiAgICAkKCcudmlldy1pbWFnZScpLmVxKDIpLmNzcyh7IGxlZnQ6LTQwMCB9KTtcclxuXHJcbiAgICBtYXJnaW5DdHJsV3JhcCgpO1xyXG4gICAgcGFnaW5nKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgY3VycmVudEluZGV4PTA7XHJcbiAgdmFyIG5leHRJbmRleD0wO1xyXG4gIHZhciB0aW1lSUQ7XHJcbiAgdmFyIGNoZWNrSUQ7XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4ID49ICQoJy52aWV3LWltYWdlJykubGVuZ3RoKXtcclxuICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkKCcudmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6LTQwMH0sMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuICAgICQoJy52aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQ6NDAwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6MH0sMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXggKys7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcblxyXG5cclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy52aWV3LWltYWdlJykubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnZpZXctaW1hZ2UnKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjQwMH0sMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuICAgICQoJy52aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQ6LTQwMH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjB9LDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4IC0tO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9Sb2xsaW5nKCl7XHJcbiAgICB0aW1lSUQgPSBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKXtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgbW92ZUxlZnQoKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFyZ2luQ3RybFdyYXAoKXtcclxuXHJcbiAgICB2YXIgd3JhcFdpZHRoID0gJCgnLmNvbnRyb2wtd3JhcCcpLndpZHRoKCk7XHJcblxyXG4gICAgJCgnLmNvbnRyb2wtd3JhcCcpLmNzcyh7XHJcbiAgICAgICdtYXJnaW4tbGVmdCcgOiAtKCB3cmFwV2lkdGggLyAyIClcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBhZ2luZygpe1xyXG5cclxuICAgIHZhciBpbWdOdW1iZXIgPSAkKCcudmlldy1pbWFnZScpLmxlbmd0aDtcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaTxpbWdOdW1iZXI7IGkrKyl7XHJcblxyXG4gICAgICAkKCcucGFnaW5nJykuYXBwZW5kKCc8bGkgY2xhc3M9XCJwYWdpbmctaXRlbVwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwYWdpbmctbGlua1wiPicgKyAoaSsxKSArICc8L2E+PC9saT4nKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDsi6TtlonrtoBcclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICBhdXRvUm9sbGluZygpO1xyXG5cclxuICAkKCcuYXJyb3cucmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCggdGltZUlEICk7XHJcbiAgICBjbGVhckludGVydmFsKCBjaGVja0lEICk7XHJcbiAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgY2hlY2tJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKGNvdW50ID09IDUpe1xyXG4gICAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja0lEKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhjb3VudCk7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcblxyXG4gICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcuYXJyb3cubGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjbGVhckludGVydmFsKCB0aW1lSUQgKTtcclxuICAgIGNsZWFySW50ZXJ2YWwoIGNoZWNrSUQgKTtcclxuICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICBjaGVja0lEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgaWYoY291bnQgPT0gNSl7XHJcbiAgICAgICAgYXV0b1JvbGxpbmcoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGNoZWNrSUQpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgICAgY291bnQrKztcclxuICAgIH0sIDEwMDApO1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKSB7XHJcbiAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0bi1jb250cm9sLnBhdXNlJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lSUQpO1xyXG5cclxuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdwYXVzZScpLmFkZENsYXNzKCdwbGF5Jyk7XHJcbiAgICAkKGUudGFyZ2V0KS50ZXh0KCdQbGF5Jyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0bi1jb250cm9sLnBsYXknLCBmdW5jdGlvbihlKXtcclxuICAgIGF1dG9Sb2xsaW5nKCk7XHJcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygncGxheScpLmFkZENsYXNzKCdwYXVzZScpO1xyXG4gICAgJChlLnRhcmdldCkudGV4dCgnUGF1c2UnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucGFnaW5nLWl0ZW0nLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLnBhZ2luZy1pdGVtJyk7XHJcblxyXG4gICAgaWYoIGN1cnJlbnRJbmRleCAhPSBpbmRleE51bWJlcil7XHJcbiAgICAgIGlmKCBjdXJyZW50SW5kZXggPT0gMCApe1xyXG5cclxuICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGgtMSApe1xyXG5cclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICkge1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIGlmKCBjdXJyZW50SW5kZXggPT0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGgtMSApIHtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4TnVtYmVyID09IDApIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiAoISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpKSB7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiAoISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpKSB7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGlmKCBjdXJyZW50SW5kZXggPCBpbmRleE51bWJlciApe1xyXG5cclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApIHtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pOyJdfQ==
