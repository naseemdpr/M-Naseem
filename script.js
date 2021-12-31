$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Data Analyst", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Data Analyst", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin:20,
        loop:false,
        autoplayTimeOut:2000,
        autoplayHowerPouse: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            800:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
    $('.carousel1').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHowerPouse: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
    var x=1;
    $(".toggle").click(function(){
        x = !x;
        if(x){
            $('.moreskills').show(1000)
        } else{
            $('.moreskills').hide(1000)
        }
    });
    $("#signup-form").validate({
        rules:{
            name:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            textarea:{
                required:true,
                minlength:4
            },
        },
        messages:{
            //fname:"enter first name "
            name:{
                required:"Please enter name.",
                minlength:"Enter full name."
            },
            email:{
                required:"Please enter email",
                email:"Enter full email."
            },
            textarea:{
                required:"Please describe.",
                minlength:"Please describe."
            }
        }
    });
});

