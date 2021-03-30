$(window).scroll(function() {
    if ($(window).scrollTop(0) > 300) {
      btn.addId('gototop');
    } 
    else {
     btn.removeId('gototop');
    }
 });
  
$('#gototop').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

