$(document).ready(function($){
	"use strict";

	/*==========================
        WOW Js Active
    ==========================*/
	new WOW().init();
    
    
    
    
    
    
    
    $(".slider").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        smartSpeed:700,
        dots: false,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
       

    });
    
    
    
    

	/*===========================
        Active Team section
     ===========================*/
    $(".team-members").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:700,
        navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        nav: true,
        autoplayHoverPause:true,
        
                responsive : {
        // breakpoint from 0 up
        0 : {
            items: 1
        },
        // breakpoint from 480 up
        480 : {
            items: 2
        },
        // breakpoint from 768 up
        768 : {
            items: 3
        }
    }
        

    });
    
    
    /*============================
            Our-Work Section
    ==============================*/
	$('.img-wrapper').magnificPopup({
    delegate: 'a',
    type: 'image',
        
    gallery: {
        enabled: true
    }
});
	
    
    
    /*===========================
        Active Tesimonial section
     ===========================*/
    $(".customer-testimonials").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        smartSpeed:700,
        autoplayHoverPause:true,

    });
    
    
    
     /*===========================
        Stats Counter section
     ===========================*/
    
    
     $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
    
    
    
    
    
    
   /*===========================
        Clients section
     ===========================*/
    $(".clients-list").owlCarousel({
        items:5,
        loop:true,
        autoplay:true,
        smartSpeed:700,
        autoplayHoverPause:true,
        
        
        responsive : {
        // breakpoint from 0 up
        0 : {
            items: 1
        },
        // breakpoint from 480 up
        480 : {
            items: 3
        },
        // breakpoint from 768 up
        768 : {
            items: 5
        },
        992 : {
            items: 6
        }
    }
        
        

    });
    
    
    
     /*===========================
        Navbar scroll Transparent
     ===========================*/
      
    $(window).scroll(function(){
        if($(this).scrollTop() < 50){
            $("nav").removeClass("vesco-navbar");
            
            //Back To Top
            
            $("#back-to-top").fadeOut();
        }
 
        else{
            $("nav").addClass("vesco-navbar");
            
            //Back To Top
            
            $("#back-to-top").fadeIn();
           }
    });
     

       /*===========================
            Navbar Smooth scroll 
        ===========================*/
   
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        
        var section = $(this).attr("href");
        
        $("html,body").animate({
            scrollTop: $(section).offset().top-64
        }, 1250, "easeInOutExpo");
    });
    
    
    
    
    
     /*======================================
      Mobile Menu  Toggle Auto Click Close
     ========================================*/
    
    $(".navbar-collapse ul li a").on("click touch", function(){
       $(".navbar-toggle").click(); 
    });
    
    
    
    
    
    
	jQuery(window).load(function(){
        
    });

}(jQuery));


