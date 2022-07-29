
$( window ).resize(function() {
    //Function
  
});


$(document).ready(function(){
    //Function
    tooltipshow();

    // WOW JS
    new WOW().init();
    

     //Menu Js
     $('.menu_trigger').click(function(){
        $('body').toggleClass('sidebar_reduced');
        $('html').toggleClass('cm_overflow');

        tooltipshow();
    }); 

    $('.close_trigger, .cm-overlay').click(function(){
        $('body').removeClass('sidebar_reduced');
        $('html').removeClass('cm_overflow');
    }); 



    //Paasword show hide js
    $(".passwort_show_hide").click(function() {
        // $(this).toggleClass("fa-eye fa-eye-slash");
        input = $(this).parent().find("input");
        if (input.attr("type") == "password") {
            input.attr("type", "text");
            $(this).find('img').attr('src', 'assets/images/common_img/eye_close_icon.svg')
        } else {
            input.attr("type", "password");
            $(this).find('img').attr('src', 'assets/images/common_img/eye_icon.svg')
        }
    });


   

   


});



 //Tooltips
 function tooltipshow(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

    if( $('body').hasClass('sidebar_reduced') ){
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
          })
    }
    else{
        $('[data-bs-toggle="tooltip"]').tooltip('dispose') 
    }
}








