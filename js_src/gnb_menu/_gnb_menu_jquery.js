/**
 * Gnb Menu jQuery
 * */

$(function(){

  $('.menu-depth1-link').on('mouseenter', function(){

    $(this).children('.menu-depth1-border').stop().animate({
      width:64
    }, 300);
  });

  $('.menu-depth1-link').on('mouseleave', function(){

    $(this).children('.menu-depth1-border').stop().animate({
      width:0
    }, 300);
  });
});