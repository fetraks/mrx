$(document).ready(function(){

  var func;
  $(window).scroll(scroll_function);

  $(".menu li a").on('click', function(event){
    event.preventDefault();

    var href = $(this).attr('href');
    var top = $(href).offset().top - (href == "#sobre_nos" ? 175 : 108);

    activateLink(href);
    $(window).unbind('scroll');

    $('body, html').animate({"scrollTop" : top}, function(){
      $("#slider-menu").fadeIn();
      $(window).scroll(scroll_function);
    });
  });
});

function scroll_function(){
  var top = $(this).scrollTop();

  if (top > 125) {
    $("#slider-menu").fadeIn();
    clearTimeout(func)
    var func = setTimeout(mustActive, 500);
  }else {
    $("#slider-menu").fadeOut();
  }
}

function activateLink(href){
  $('ul.menu').find('li').removeClass('selected');
  $('a[href="'+ href +'"]').parent().addClass('selected');
}

function mustActive(){
  var top = $(this).scrollTop();
  var list = $('#content > div');

  $.each(list, function(i, element){
    if (top >= $(element).offset().top - 108) {
      activateLink('#' + $(element).attr('id'));
    }
  })
}
