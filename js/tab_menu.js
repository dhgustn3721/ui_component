/**
 * Tab Menu CSS
 * */

$(function(){

  $('.css-tab-heading').on('click', function(e){

    e.preventDefault();

    var tabIndex = $(this).index('.css-tab-heading');

    $('.css-tab-heading>a').removeClass('on');
    $('.css-tab-heading').eq(tabIndex).children('a').addClass('on');

    $('.css-tab-content').removeClass('on');
    $('.css-tab-content').eq(tabIndex).addClass('on');

  });

});
/**
 * Tab Menu jquery
 * */

$(function(){

  $('.tab-heading').on('click', function(e){

    e.preventDefault();

    var tabIndex = $(this).index('.tab-heading');

    $('.tab-heading>a').removeClass('on');
    $('.tab-heading').eq(tabIndex).children('a').addClass('on');

    $('.tab-content').fadeOut(500);
    $('.tab-content').eq(tabIndex).fadeIn(300);

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYl9tZW51X2Nzcy5qcyIsIl90YWJfbWVudV9qcXVlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ0YWJfbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUYWIgTWVudSBDU1NcclxuICogKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmNzcy10YWItaGVhZGluZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgdGFiSW5kZXggPSAkKHRoaXMpLmluZGV4KCcuY3NzLXRhYi1oZWFkaW5nJyk7XHJcblxyXG4gICAgJCgnLmNzcy10YWItaGVhZGluZz5hJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcuY3NzLXRhYi1oZWFkaW5nJykuZXEodGFiSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJCgnLmNzcy10YWItY29udGVudCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLmNzcy10YWItY29udGVudCcpLmVxKHRhYkluZGV4KS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogVGFiIE1lbnUganF1ZXJ5XHJcbiAqICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy50YWItaGVhZGluZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgdGFiSW5kZXggPSAkKHRoaXMpLmluZGV4KCcudGFiLWhlYWRpbmcnKTtcclxuXHJcbiAgICAkKCcudGFiLWhlYWRpbmc+YScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLnRhYi1oZWFkaW5nJykuZXEodGFiSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJCgnLnRhYi1jb250ZW50JykuZmFkZU91dCg1MDApO1xyXG4gICAgJCgnLnRhYi1jb250ZW50JykuZXEodGFiSW5kZXgpLmZhZGVJbigzMDApO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
