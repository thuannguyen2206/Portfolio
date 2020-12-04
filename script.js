$(document).ready(function(){
    //scroll
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        
    });
    // slide up 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // type animate
    var typed=new Typed(".typing",{
        strings: ["Developer", "Designer", "Blogger", "Freelacer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed=new Typed(".typing-2",{
        strings: ["Developer", "Designer", "Blogger", "Freelacer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // togged menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

});