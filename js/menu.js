$(".header-top .menu").on("click", function(){
    if($("header .mobile-menu").is(":visible"))
      $(this).html('<i class="fa-solid fa-bars"></i>');
    else
      $(this).html('<i class="fa-solid fa-caret-down"></i>');
  
    $("header .mobile-menu").slideToggle();
  });

async src="https://www.googletagmanager.com/gtag/js?id=G-BRHKY7DTKJ"

      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BRHKY7DTKJ');
