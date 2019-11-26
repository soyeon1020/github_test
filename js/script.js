$(function(){
    //main-banner-slide

    var clone = $(".best_bj").eq(0).clone();
    $(".bj_slide").append(clone);

    var i = 0;

    $(".np-cover .best-next").click(function(){
        if(i==5){
            i=0;
            $(".bj_slide").css("margin-left",0);
        }

        i++;

        $(".bj_slide").stop().animate({
            "margin-left":-i*100+"%"            
        },400);
    });

    $(".np-cover .best-prev").click(function(){
        if(i==0){
            i=5;
            $(".bj_slide").css("margin-left",-i*100+"%");
        }

        i--;

        $(".bj_slide").stop().animate({
            "margin-left":-i*100+"%"            
        },400);
    });

    // side - menu- click

    $(".nav li").click(function(){
        
        var i = $(this).index();

        $(".nav li").removeClass("on");
        $(this).addClass("on");

    });

    // side btn menu

    $(".header-slide-menu .web-btn").click(function(){
        $(".side-menu-container").toggleClass("on");
        $(".main-container").toggleClass("on");
    });

    $(".header-slide-menu .app-btn").click(function(){
        $(".side-menu-container").toggleClass("on");
        $(".main-container").toggleClass("on");
    });

    $(".side-app-menu-close").click(function(){
        $(".side-menu-container").toggleClass("on");
        $(".main-container").toggleClass("on");
    });


    //app-main-slide

    var appClone = $(".app-main-slide ul li").eq(0).clone();
    $(".app-main-slide ul").append(appClone);

    var ac = 0;
    var acRepeat;

    $(".app-main-next").click(function(){
        
        ac++;

        if(ac==5){
            $(".app-main-slide ul").stop().animate({
                "margin-left":-ac*100+"%"
            },600, function(){
                $(".app-main-slide ul").css("margin-left",0);
            });
            ac=0;
        }else{
            $(".app-main-slide ul").stop().animate({
                "margin-left":-ac*100+"%"
            },600);
        }
    });

    $(".app-main-prev").click(function(){
        if(ac==0){
            ac=5;
            $(".app-main-slide ul").css("margin-left",-ac*100+"%");
        }
        
        ac--;
    
        $(".app-main-slide ul").stop().animate({
            "margin-left":-ac*100+"%"
        },600);
    });

    timer();
		function timer(){
			acRepeat = setInterval(function(){
				
				if(ac==5){
					ac=0;
					$(".app-main-slide ul").css("margin-left",0);
				}
				
				ac++;
				
				$(".app-main-slide ul").stop().animate({
					"margin-left":-ac*100+"%"
				},600);
				
			},3000);
		}
		$(".app-main-slide").mouseover(function(){
			clearInterval(acRepeat);
		});
		$(".app-main-slide").mouseleave(function(){
			timer();
		});





    //cast- banner  slide

    var castClone = $(".cast-bj").eq(0).clone();
    $(".cast-slide").append(castClone);

    var c = 0;

    $(".np-cover .cast-next").click(function(){
        if(c==3){
            c=0;
            $(".cast-slide").css("margin-left",0);
        }

        c++;

        $(".cast-slide").stop().animate({
            "margin-left":-c*100+"%"            
        },400);

        return false;
    });

    $(".np-cover .cast-prev").click(function(){
        if(c==0){
            c=3;
            $(".cast-slide").css("margin-left",-c*100+"%");
        }

        i--;

        $(".cast-slide").stop().animate({
            "margin-left":-c*100+"%"            
        },400);
        
        return false;
    });
    
  





});