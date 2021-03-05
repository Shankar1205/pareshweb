$(document).ready(()=>{
    $('.productType .nav-link').click(function(){
        
        $(this).siblings(".show").removeClass("show");
        $(this).siblings(".active").removeClass("active");
        $(this).addClass('show');
        $(this).addClass('active');
        var attrVal=$(this).attr("href").substring(1);
        console.log(attrVal);
        var Section=$(this).parents(".productLinks").next().find("#"+attrVal);
        Section.siblings().removeClass("active");
        Section.siblings().removeClass("show");
        Section.addClass("show");
        Section.addClass("active");
        
        console.log(Section)
    });

    $(window).scroll(function(){
        var sticky = $('.header-main .navbar'),
         scroll = $(window).scrollTop();
         var stickyNew = $('.header-main .topFixedHeader'),
        scroll = $(window).scrollTop();
    
        if (scroll >= 70 && scroll <= 800){ 
            sticky.addClass('fixed');
            stickyNew.removeClass('fixed');
            stickyNew.addClass('d-none');
        }
        else if(scroll >= 800 ){
            sticky.removeClass('fixed');
            stickyNew.addClass('fixed');
            stickyNew.removeClass('d-none');
        }
        else{sticky.removeClass('fixed');}
        
    });

    $(".tableOfContent .Content_Tables").click(function(){
        $(this).siblings(".show").removeClass("show");
        $(this).siblings(".active").removeClass("active");
        $(this).addClass('show');
        $(this).addClass('active');
        var findContent=$(this).attr("id");
        var Content=$(this).parent().next().find("#"+findContent);
        Content.siblings().removeClass("show");
        Content.siblings().removeClass("active");
        Content.addClass("show");
        Content.addClass("active");
        console.log(Content)
    });

    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 300);
    });

    $("#navbarNav a.nav-link").hover(function(){
        //$(this).next().removeClass("d-none");
        $(this).next().slideToggle();
    })
    $("#navbarNav a.nav-link").click(function(){
        $(this).next().slideToggle();
    })
    

})