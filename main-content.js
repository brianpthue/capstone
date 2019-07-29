
$(window).scroll(function(){
    $(".main-content").css("opacity", 1 - $(window).scrollTop() / 250);
  });

/*win.scroll(function(){
  scrollPosition = win.scrollTop();
  scrollRatio = 1 - scrollPosition / 300;
  $(".main-content").css("opacity", scrollRatio);
*/





/*$(window).scroll(function(){
    var scrollVar = $(window).scrollTop();
    $('.main-content').css("opacity", 1 - scrollVar/300);
})*/



