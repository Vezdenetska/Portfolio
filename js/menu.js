$(".header-top .menu").on("click", function(){
    if($("header .mobile-menu").is(":visible"))
      $(this).html('<i class="fa-solid fa-bars"></i>');
    else
      $(this).html('<i class="fa-solid fa-caret-down"></i>');
  
    $("header .mobile-menu").slideToggle();
  });