$(document).ready(function () {
    $( "#selectmenu" ).selectmenu();
 
    var mql = window.matchMedia('all and (max-width: 768px)');
    var menu_btn = $('.main-menu-item > a');

    if (mql.matches) {
        menu_btn.each(function(index, el) {
            if ($(this).hasClass('active')) {
                $(this).next('ul').addClass('active');
            };
        });
    
        menu_btn.click(function() {
            /* Act on the event */
            if ($(this).hasClass('active') ) {
                $(this).removeClass('active').next('ul').removeClass('active');
            }
            else{
                menu_btn.removeClass('active').next('ul').removeClass('active');
                $(this).addClass('active').next('ul').addClass('active');
             };
        }); 
    }
    
    $( ".mobile-menu i" ).click(function() {
        $(".main-menu").toggleClass( "active" );
      });
// $( window ).resize(function() {
//     if (mql.matches) {
        
//     }
// });
});
