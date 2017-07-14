/**
 * Ease 값 비교
 */

$(function(){

  function repeat(){

    $('.box1').css({top:0}).stop().animate({top:450}, 2000, 'linear');
    $('.box2').css({top:0}).stop().animate({top:450}, 2000, 'easeInExpo');
    $('.box3').css({top:0}).stop().animate({top:450}, 2000, 'easeOutExpo');
    $('.box4').css({top:0}).stop().animate({top:450}, 2000, 'easeInOutExpo');
    $('.box5').css({top:0}).stop().animate({top:450}, 2000, $.bez([1,1.1,.74,-0.56]));

  }

  setInterval(function(){

    repeat();

  }, 2500);

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWluZ19mdW5jdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRpbWluZ19mdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBFYXNlIOqwkiDruYTqtZBcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGZ1bmN0aW9uIHJlcGVhdCgpe1xyXG5cclxuICAgICQoJy5ib3gxJykuY3NzKHt0b3A6MH0pLnN0b3AoKS5hbmltYXRlKHt0b3A6NDUwfSwgMjAwMCwgJ2xpbmVhcicpO1xyXG4gICAgJCgnLmJveDInKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDo0NTB9LCAyMDAwLCAnZWFzZUluRXhwbycpO1xyXG4gICAgJCgnLmJveDMnKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDo0NTB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuICAgICQoJy5ib3g0JykuY3NzKHt0b3A6MH0pLnN0b3AoKS5hbmltYXRlKHt0b3A6NDUwfSwgMjAwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcclxuICAgICQoJy5ib3g1JykuY3NzKHt0b3A6MH0pLnN0b3AoKS5hbmltYXRlKHt0b3A6NDUwfSwgMjAwMCwgJC5iZXooWzEsMS4xLC43NCwtMC41Nl0pKTtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cclxuICAgIHJlcGVhdCgpO1xyXG5cclxuICB9LCAyNTAwKTtcclxuXHJcbn0pOyJdfQ==
